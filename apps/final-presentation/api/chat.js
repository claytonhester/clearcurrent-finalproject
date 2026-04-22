/**
 * POST /api/chat
 *
 * Observability: each successful or failed stream logs one JSON line to stdout with
 * `event`, `requestId`, `topicId`, `modelPlanned`, sizes, and timings. Set
 * `CHAT_LOG_VERBOSE=1` to add `messagePreview` (first 120 chars). Chats are not
 * stored server-side; persistence is the browser (localStorage).
 *
 * Body: {
 *   message: string,                        // user's latest turn
 *   history?: { role: 'user'|'assistant', content: string }[],
 *   topicId?: string,                       // 'all' | 'd0'..'d8' | 'interviews' | 'secondary'
 * }
 *
 * Streams a Claude response as Server-Sent Events:
 *   event: meta   data: { requestId, model, retrievalFailed, retrieved: [{...}, ...] }
 *   event: token  data: { text }  (when output hits max length, a final token may
 *   carry a short “ask a follow-up” note)
 *   event: done   data: {}
 *   event: error  data: { message }
 *
 * Retrieval uses the latest user message plus the **previous** user turn for BM25.
 * `topK` and `max_tokens` are set in `_lib/chatParams.js` (topic, model, query).
 */

import { randomUUID } from 'node:crypto'
import Anthropic from '@anthropic-ai/sdk'
import { planRequest, pickMaxOutputTokens, pickTopK } from './_lib/chatParams.js'
import { buildRetrievalQuery } from './_lib/retrievalQuery.js'
import { search } from './_lib/retrieval.js'
import { resolveTopic } from './_lib/topics.js'
import { buildSystemPrompt, formatContext } from './_lib/prompts.js'

// In-memory rate limit (per-instance, best-effort)
const rateBuckets = new Map()
const RATE_WINDOW_MS = 60 * 60 * 1000 // 1 hour
const RATE_MAX = 60 // 60 messages per IP per hour (generous)
const RATE_MAX_TRACKED_IPS = 5000

/** Vercel sets this to the real client; prefer over raw X-Forwarded-For. */
function clientIp(req) {
  const v = req.headers['x-vercel-forwarded-for']?.split(',')[0]?.trim()
  if (v) return v
  return (
    req.headers['x-forwarded-for']?.split(',')[0]?.trim() ||
    req.headers['x-real-ip'] ||
    req.socket?.remoteAddress ||
    'unknown'
  )
}

function rateLimit(ip) {
  if (rateBuckets.size > RATE_MAX_TRACKED_IPS) {
    const first = rateBuckets.keys().next().value
    if (first !== undefined) rateBuckets.delete(first)
  }
  const now = Date.now()
  const bucket = rateBuckets.get(ip) || []
  const recent = bucket.filter((t) => now - t < RATE_WINDOW_MS)
  if (recent.length >= RATE_MAX) return false
  recent.push(now)
  if (rateBuckets.has(ip)) rateBuckets.delete(ip)
  rateBuckets.set(ip, recent)
  return true
}

function sseLine(event, data) {
  return `event: ${event}\ndata: ${JSON.stringify(data)}\n\n`
}

/** Turn SDK / API errors into short, user-facing text (credits, key, 404, etc.). */
function userFacingAnthropicError(err) {
  const e = err && typeof err === 'object' ? err : {}
  const status = Number(e.status ?? e.statusCode ?? 0)
  const errObj = e.error && typeof e.error === 'object' ? e.error : {}
  const type = typeof errObj.type === 'string' ? errObj.type : ''
  const raw =
    (typeof e.message === 'string' && e.message) ||
    (typeof errObj.message === 'string' && errObj.message) ||
    (typeof e.error === 'string' && e.error) ||
    ''
  const blob = `${raw} ${type} ${JSON.stringify(errObj).slice(0, 400)}`.toLowerCase()

  if (status === 401) {
    return 'The chat service could not authenticate with the model provider. Check the API key in the deployment environment and try again.'
  }
  if (status === 403) {
    return 'This API key is not allowed to use that model or API. Check organization access in the Anthropic Console.'
  }
  if (status === 404) {
    return 'The requested model is not available for this API key. Check your Anthropic project settings and the model name configured for this app.'
  }
  if (status === 429) {
    return 'Anthropic rate-limited the request. Wait a minute, or check rate limits in the Console.'
  }
  if (status === 400 || status === 402) {
    if (
      /insufficient|credit|balance|billing|payment|quota|spend|limit|exceeded|overage/i.test(
        blob,
      ) ||
      type === 'insufficient_quota' ||
      type === 'request_limit_exceeded'
    ) {
      return 'The Anthropic account can’t run this request—usually you need a payment method, available credits, or a higher limit. Open console.anthropic.com → Billing, then try again.'
    }
  }
  if (
    /insufficient|credit|balance|billing|payment|quota|exceeded|overage/i.test(blob) &&
    (status === 0 || status >= 400)
  ) {
    return 'The Anthropic account may be out of credits or need billing enabled. Check Billing in the Anthropic Console and try again.'
  }
  if (raw && raw.length < 220) {
    return raw
  }
  return 'The model request could not be completed. If this continues, check billing, API access, and try again in a few minutes.'
}

const MAX_RAW_BODY_CHARS = 320_000
const MAX_HISTORY_ITEMS = 80

const chatDebug = () =>
  process.env.CHAT_DEBUG === '1' ||
  process.env.NODE_ENV === 'development' ||
  process.env.VERCEL_ENV === 'development'

function dbg(...args) {
  if (chatDebug()) {
    // eslint-disable-next-line no-console
    console.log('[chat:api]', ...args)
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' })
    return
  }

  const apiKey = process.env.ANTHROPIC_API_KEY
  if (!apiKey) {
    dbg('missing ANTHROPIC_API_KEY')
    res.status(500).json({
      error:
        'Chat assistant is not configured. Set ANTHROPIC_API_KEY in your Vercel environment.',
    })
    return
  }
  dbg('key present', { keyLen: apiKey.length })

  const cl = req.headers['content-length']
  if (cl && Number(cl) > MAX_RAW_BODY_CHARS) {
    res.status(413).json({ error: 'Request body too large' })
    return
  }

  let body = req.body
  if (typeof body === 'string') {
    if (body.length > MAX_RAW_BODY_CHARS) {
      res.status(413).json({ error: 'Request body too large' })
      return
    }
    try {
      body = JSON.parse(body)
    } catch {
      res.status(400).json({ error: 'Invalid JSON body' })
      return
    }
  }
  body = body || {}
  const { message, history = [], topicId = 'all' } = body

  if (Array.isArray(history) && history.length > MAX_HISTORY_ITEMS) {
    res.status(400).json({ error: 'Too many history items' })
    return
  }
  let historyChars = 0
  if (Array.isArray(history)) {
    for (const m of history) {
      if (m && typeof m.content === 'string') {
        historyChars += m.content.length
        if (historyChars > 150_000) {
          res.status(400).json({ error: 'History payload is too large' })
          return
        }
      }
    }
  }

  if (!message || typeof message !== 'string' || message.trim().length === 0) {
    res.status(400).json({ error: 'Missing or empty `message`' })
    return
  }
  if (message.length > 4000) {
    res.status(400).json({ error: 'Message too long (max 4000 characters)' })
    return
  }

  const ip = clientIp(req)
  if (!rateLimit(ip)) {
    res.status(429).json({ error: 'Rate limit reached. Try again later.' })
    return
  }

  const topic = resolveTopic(topicId)
  const { model, trimmedHistory } = planRequest(message, history)
  const topK = pickTopK(topic.id, message, model)
  const maxOutputTokens = pickMaxOutputTokens(message, model)
  const retrievalQuery = buildRetrievalQuery(message, trimmedHistory)

  const requestId = randomUUID()
  const tRequestStart = Date.now()
  const logVerbose = process.env.CHAT_LOG_VERBOSE === '1'
  const logBase = {
    requestId,
    topicId: topic.id,
    modelPlanned: null,
    historyTurns: trimmedHistory.length,
    messageLen: message.length,
    ip: String(ip).slice(0, 64),
  }
  if (logVerbose) {
    logBase.messagePreview = message.slice(0, 120)
  }

  let retrieved = []
  let retrievalError = null
  try {
    const tR = Date.now()
    retrieved = await search(retrievalQuery, {
      topK,
      focusSourceId: topic.focusSourceId,
      focusSourceType: topic.focusSourceType,
    })
    dbg('retrieval ok', { requestId, ms: Date.now() - tR, topK, hits: retrieved.length })
  } catch (err) {
    retrievalError = err
    console.error(`[chat:api] retrieval failed requestId=${requestId}`, err)
  }

  let systemPrompt = buildSystemPrompt({ topicLabel: topic.label })
  // Defensive: under no circumstances should `system` reach the API as anything
  // other than a non-empty string. We've seen production-only failures where the
  // API rejected `system.0.text: Input should be a valid string`, so coerce here
  // and log a structured diagnostic if anything ever looks off.
  if (typeof systemPrompt !== 'string' || systemPrompt.length === 0) {
    console.error(
      JSON.stringify({
        event: 'chat_system_prompt_invalid',
        requestId,
        topicId: topic.id,
        systemPromptType: typeof systemPrompt,
        systemPromptValue: systemPrompt === null ? 'null' : String(systemPrompt).slice(0, 80),
      }),
    )
    systemPrompt =
      'You are the Clear Current Research Assistant. Answer using only the supplied <context> passages and clearly stated public knowledge. If unsure, say so.'
  }
  systemPrompt = String(systemPrompt)
  const contextBlock = formatContext(retrieved)
  logBase.systemPromptLen = systemPrompt.length
  logBase.modelPlanned = model
  logBase.topK = topK
  logBase.maxOutputTokens = maxOutputTokens
  logBase.retrievalQueryLen = retrievalQuery.length

  // History turns + one user block that wraps retrieved <context> and the latest question.
  const messages = [
    ...trimmedHistory.map((m) => ({ role: m.role, content: m.content })),
    {
      role: 'user',
      content: `${contextBlock}\n\n---\n\nUser question: ${message}`,
    },
  ]

  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    'X-Accel-Buffering': 'no',
  })
  if (typeof res.flushHeaders === 'function') {
    res.flushHeaders()
  }

  dbg('SSE headers + meta', { requestId, model })

  res.write(
    sseLine('meta', {
      requestId,
      model,
      retrievalFailed: Boolean(retrievalError),
      retrieved: retrieved.map((r) => ({
        sourceId: r.sourceId,
        sourceLabel: r.sourceLabel,
        sourceType: r.sourceType,
      })),
    }),
  )

  const abortCtrl = new AbortController()
  /** Fired when the model stream takes too long (stuck "thinking" in the browser). */
  const STREAM_BUDGET_MS = Number(
    process.env.CHAT_STREAM_BUDGET_MS || 120_000,
  )
  let abortedByClientDisconnect = false
  let streamKillTimer = null
  const onRequestClose = () => {
    if (streamKillTimer) {
      clearTimeout(streamKillTimer)
      streamKillTimer = null
    }
    try {
      abortedByClientDisconnect = true
      if (!res.writableEnded) abortCtrl.abort()
    } catch {
      /* ignore */
    }
  }
  req.on('close', onRequestClose)

  const client = new Anthropic({ apiKey })
  const streamStartedAt = Date.now()

  try {
    // Covers both a hung `messages.create` and a stream that never finishes.
    streamKillTimer = setTimeout(() => {
      try {
        if (!res.writableEnded) abortCtrl.abort()
      } catch {
        /* ignore */
      }
    }, STREAM_BUDGET_MS)
    // Anthropic Messages API accepts `system` as a plain string OR an array of
    // text blocks. We use the plain string form because it's the canonical
    // shape and avoids any chance of a malformed text block reaching the API.
    const stream = await client.messages.create(
      {
        model,
        max_tokens: maxOutputTokens,
        system: systemPrompt,
        messages,
        stream: true,
      },
      { signal: abortCtrl.signal },
    )

    let outChars = 0
    let lastStopReason = null
    let lastUsage = null
    let loggedFirstToken = false
    for await (const event of stream) {
      if (event.type === 'message_delta') {
        if (event.delta?.stop_reason) {
          lastStopReason = event.delta.stop_reason
        }
        if (event.usage) {
          lastUsage = event.usage
        }
      }
      if (event.type === 'content_block_delta' && event.delta?.type === 'text_delta') {
        const piece = event.delta.text || ''
        outChars += piece.length
        if (!loggedFirstToken) {
          loggedFirstToken = true
          dbg('first model token out', { requestId, msSinceStream: Date.now() - streamStartedAt })
        }
        res.write(sseLine('token', { text: piece }))
      }
    }
    if (lastStopReason === 'max_tokens') {
      res.write(
        sseLine('token', {
          text: '\n\n*…This reply hit the length limit. Ask a follow-up to go deeper, or ask a narrower question.*',
        }),
      )
    }
    if (streamKillTimer) {
      clearTimeout(streamKillTimer)
      streamKillTimer = null
    }
    res.write(sseLine('done', {}))
    console.log(
      JSON.stringify({
        event: 'chat_request_ok',
        ...logBase,
        retrieved: retrieved.length,
        retrievalError: Boolean(retrievalError),
        outChars,
        stopReason: lastStopReason,
        inputTokens: lastUsage?.input_tokens ?? null,
        outputTokens: lastUsage?.output_tokens ?? null,
        streamDurationMs: Date.now() - streamStartedAt,
        totalRequestMs: Date.now() - tRequestStart,
      }),
    )
  } catch (err) {
    if (streamKillTimer) {
      clearTimeout(streamKillTimer)
      streamKillTimer = null
    }
    const isAbort = err?.name === 'AbortError' || err?.cause?.name === 'AbortError'
    const isTimeout = isAbort && !abortedByClientDisconnect
    if (isAbort) {
      console.log(
        JSON.stringify({
          event: isTimeout ? 'chat_request_timeout' : 'chat_request_aborted',
          requestId,
          topicId: topic.id,
          streamBudgetMs: STREAM_BUDGET_MS,
          totalRequestMs: Date.now() - tRequestStart,
        }),
      )
      if (isTimeout && !res.writableEnded) {
        res.write(
          sseLine('error', {
            message:
              'The model took too long to respond and the request was stopped. Try a shorter or narrower question, or try again in a few minutes.',
          }),
        )
      }
    } else {
      console.error(
        JSON.stringify({
          event: 'chat_anthropic_error',
          ...logBase,
          retrieved: retrieved.length,
          totalRequestMs: Date.now() - tRequestStart,
          err: (err && err.message) || String(err),
        }),
      )
      if (!res.writableEnded) {
        res.write(
          sseLine('error', {
            message: userFacingAnthropicError(err),
          }),
        )
      }
    }
  } finally {
    req.off('close', onRequestClose)
    res.end()
  }
}
