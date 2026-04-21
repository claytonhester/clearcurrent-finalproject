import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
  archiveCurrentAndStartNew,
  loadTopicState,
  saveCurrentMessages,
} from '../lib/chatStorage.js'

/**
 * When fetch fails before streaming, turn HTTP status (and any JSON body) into a clear message.
 */
function describeHttpError(status, errBody) {
  const fromServer =
    errBody && typeof errBody === 'object' && typeof errBody.error === 'string'
      ? errBody.error.trim()
      : ''
  if (fromServer) return fromServer

  if (status === 404) {
    return "Chat can’t run here. `npm run dev` only shows the site in your browser—it doesn’t start the part that answers questions. In a terminal, go to `apps/final-presentation` and run `npm run dev:vercel` (Vercel CLI), then use the URL it prints. Or test chat on the deployed site."
  }
  if (status === 401) {
    return 'The server rejected the Anthropic API key. Set a valid `ANTHROPIC_API_KEY` in Vercel or in `apps/final-presentation/.env` for `vercel dev`.'
  }
  if (status === 402) {
    return 'Payment or available credits are required for the Anthropic API. In console.anthropic.com, open Settings → Billing, add a card or top up, then try again.'
  }
  if (status === 403) {
    return 'Access to the API was denied. Check that the key is enabled for your Anthropic org and the models you are calling.'
  }
  if (status === 429) {
    return 'Too many requests right now. Wait a bit and try again (this can be the app’s limit or Anthropic’s).'
  }
  if (status === 500) {
    return 'The chat service failed. Check that `ANTHROPIC_API_KEY` is set, the index built (`prebuild` / `build:research-index`), and Vercel logs for details.'
  }
  if (status === 502 || status === 503) {
    return 'The service is temporarily unavailable. Try again in a moment.'
  }
  if (status === 405) {
    return 'The chat API does not support this request method. Try reloading the page or use POST from the in-app chat only.'
  }
  return `The chat request could not complete (HTTP ${status}). If this persists, confirm deployment, env vars, and Anthropic account billing.`
}

/**
 * useChat — chat state + SSE streaming to /api/chat.
 *
 * Returns:
 *   messages        : [{ role, content, model?, retrieved? }]
 *   isStreaming     : boolean
 *   send(text)        : Promise<void>
 *   reset()           : void — clear in memory (e.g. switch topic flow)
 *   startNewChat()    : archive the current thread, then start a blank one (same topic)
 *   pastSessions     : previous archived threads (newest first) for this topic
 *   error             : string | null
 *
 * @param {object} options
 * @param {string} options.topicId — API topic id (e.g. "all" while picking focus / sending).
 * @param {string | null} [options.persistenceKey] — when set, load/save this thread in localStorage (per-topic).
 */
export function useChat({ topicId, persistenceKey = null }) {
  const [messages, setMessages] = useState([])
  const [pastSessions, setPastSessions] = useState([])
  const [isStreaming, setIsStreaming] = useState(false)
  const [error, setError] = useState(null)
  const abortRef = useRef(null)
  /** Always reflects latest `messages` for save flushes (tab close, topic change). */
  const messagesRef = useRef(messages)
  useLayoutEffect(() => {
    messagesRef.current = messages
  }, [messages])

  const flushToStorage = useCallback(() => {
    if (!persistenceKey) return
    try {
      saveCurrentMessages(persistenceKey, messagesRef.current)
    } catch (e) {
      console.warn('[useChat] flush save failed', e)
    }
  }, [persistenceKey])

  useEffect(() => {
    if (!persistenceKey) {
      setMessages([])
      setPastSessions([])
      return
    }
    const s = loadTopicState(persistenceKey)
    setMessages(
      s?.current?.messages?.length ? s.current.messages : [],
    )
    setPastSessions(Array.isArray(s?.pastSessions) ? s.pastSessions : [])
  }, [persistenceKey])

  /** Persist when leaving the tab or hiding it so we don’t lose the last reply mid-debounce. */
  useEffect(() => {
    if (!persistenceKey) return
    const onPageHide = () => flushToStorage()
    const onVis = () => {
      if (document.visibilityState === 'hidden') flushToStorage()
    }
    window.addEventListener('pagehide', onPageHide)
    document.addEventListener('visibilitychange', onVis)
    return () => {
      window.removeEventListener('pagehide', onPageHide)
      document.removeEventListener('visibilitychange', onVis)
    }
  }, [persistenceKey, flushToStorage])

  /** On topic / persistence key change (or unmount), persist the last in-memory thread for *that* key. */
  useEffect(() => {
    return () => {
      if (persistenceKey) {
        try {
          saveCurrentMessages(persistenceKey, messagesRef.current)
        } catch (e) {
          console.warn('[useChat] save on key change failed', e)
        }
      }
    }
  }, [persistenceKey])

  const wasStreamingRef = useRef(false)
  useEffect(() => {
    if (wasStreamingRef.current && !isStreaming) {
      flushToStorage()
    }
    wasStreamingRef.current = isStreaming
  }, [isStreaming, flushToStorage])

  useEffect(() => {
    if (!persistenceKey) return
    if (isStreaming) return
    const t = setTimeout(() => {
      saveCurrentMessages(persistenceKey, messages)
    }, 400)
    return () => clearTimeout(t)
  }, [messages, persistenceKey, isStreaming])

  const reset = useCallback(() => {
    abortRef.current?.abort()
    abortRef.current = null
    setMessages([])
    setError(null)
    setIsStreaming(false)
  }, [])

  const send = useCallback(
    async (text) => {
      const trimmed = text.trim()
      if (!trimmed || isStreaming) return

      setError(null)
      const userMsg = { role: 'user', content: trimmed }
      const assistantMsg = {
        role: 'assistant',
        content: '',
        model: null,
        retrieved: [],
      }

      const history = messages.map((m) => ({ role: m.role, content: m.content }))
      setMessages((prev) => [...prev, userMsg, assistantMsg])
      setIsStreaming(true)

      const controller = new AbortController()
      abortRef.current = controller

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            message: trimmed,
            history,
            topicId,
          }),
          signal: controller.signal,
        })

        if (!res.ok) {
          const errBody = await res.json().catch(() => ({}))
          throw new Error(describeHttpError(res.status, errBody))
        }

        const reader = res.body.getReader()
        const decoder = new TextDecoder()
        let buffer = ''

        while (true) {
          const { done, value } = await reader.read()
          if (done) break
          buffer += decoder.decode(value, { stream: true })

          const events = buffer.split('\n\n')
          buffer = events.pop() || ''

          for (const block of events) {
            if (!block.trim()) continue
            const lines = block.split('\n')
            let event = 'message'
            let data = ''
            for (const line of lines) {
              if (line.startsWith('event:')) event = line.slice(6).trim()
              else if (line.startsWith('data:')) data += line.slice(5).trim()
            }
            if (!data) continue
            let payload
            try {
              payload = JSON.parse(data)
            } catch {
              continue
            }
            if (event === 'meta') {
              setMessages((prev) => {
                const next = [...prev]
                const last = next[next.length - 1]
                if (last && last.role === 'assistant') {
                  next[next.length - 1] = {
                    ...last,
                    model: payload.model,
                    retrieved: payload.retrieved || [],
                  }
                }
                return next
              })
            } else if (event === 'token') {
              setMessages((prev) => {
                const next = [...prev]
                const last = next[next.length - 1]
                if (last && last.role === 'assistant') {
                  next[next.length - 1] = {
                    ...last,
                    content: last.content + (payload.text || ''),
                  }
                }
                return next
              })
            } else if (event === 'error') {
              throw new Error(payload.message || 'Unknown error')
            }
          }
        }
      } catch (err) {
        if (err.name === 'AbortError') return
        const networkFail =
          err?.message === 'Failed to fetch' ||
          err?.name === 'TypeError' ||
          String(err?.message || '').includes('NetworkError')
        const msg = networkFail
          ? 'Could not reach the chat server. Start the app from apps/final-presentation with npm run dev (not opening the built files directly), check your network, and try again.'
          : (err.message || 'Something went wrong')
        setError(msg)
        setMessages((prev) => {
          const next = [...prev]
          const last = next[next.length - 1]
          if (last && last.role === 'assistant' && !last.content) {
            next.pop()
          }
          return next
        })
      } finally {
        abortRef.current = null
        setIsStreaming(false)
      }
    },
    [isStreaming, messages, topicId],
  )

  const stop = useCallback(() => {
    abortRef.current?.abort()
    abortRef.current = null
    setIsStreaming(false)
  }, [])

  const startNewChat = useCallback(() => {
    abortRef.current?.abort()
    abortRef.current = null
    if (persistenceKey) {
      const nextPast = archiveCurrentAndStartNew(persistenceKey, messages)
      setPastSessions(nextPast)
    }
    setMessages([])
    setError(null)
    setIsStreaming(false)
  }, [persistenceKey, messages])

  return {
    messages,
    pastSessions,
    isStreaming,
    error,
    send,
    reset,
    startNewChat,
    stop,
  }
}
