/**
 * Dev-only: serves POST /api/chat from api/chat.js inside the Vite process,
 * so `npm run dev` works without `vercel dev` (avoids "Failed to fetch" when
 * the browser can’t reach a real /api route).
 */
import { readFileSync } from 'node:fs'
import path from 'node:path'
import { loadEnv } from 'vite'

function readBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = []
    req.on('data', (c) => chunks.push(c))
    req.on('end', () => resolve(Buffer.concat(chunks).toString('utf8')))
    req.on('error', reject)
  })
}

function withVercelResponseShims(res) {
  if (res.status) return
  res.status = (code) => ({
    json: (body) => {
      if (res.headersSent) return
      res.writeHead(code, { 'Content-Type': 'application/json; charset=utf-8' })
      res.end(
        typeof body === 'string' ? body : JSON.stringify(body),
      )
    },
  })
}

function mergeAnthropicKeyFromMonorepoRoot(appRoot) {
  if (process.env.ANTHROPIC_API_KEY) return
  const monorepoEnv = path.resolve(appRoot, '..', '..', '.env')
  try {
    const text = readFileSync(monorepoEnv, 'utf8')
    for (const line of text.split('\n')) {
      const m = /^\s*ANTHROPIC_API_KEY=(.*)\s*$/.exec(line)
      if (m) {
        let v = m[1].trim()
        if ((v.startsWith('"') && v.endsWith('"')) || (v.startsWith("'") && v.endsWith("'")))
          v = v.slice(1, -1)
        process.env.ANTHROPIC_API_KEY = v
        return
      }
    }
  } catch {
    /* missing file */
  }
}

export function localChatApiPlugin() {
  return {
    name: 'local-chat-api',
    apply: 'serve',
    configureServer(server) {
      const appRoot = server.config.root
      const env = loadEnv(server.config.mode, appRoot, '')
      if (!process.env.ANTHROPIC_API_KEY && env.ANTHROPIC_API_KEY) {
        process.env.ANTHROPIC_API_KEY = env.ANTHROPIC_API_KEY
      }
      mergeAnthropicKeyFromMonorepoRoot(appRoot)

      const handlerUrl = new URL('./api/chat.js', import.meta.url).href

      server.middlewares.use(async (req, res, next) => {
        const pathOnly = (req.url || '').split('?')[0]
        if (pathOnly !== '/api/chat' || req.method !== 'POST') {
          next()
          return
        }
        try {
          const raw = await readBody(req)
          let body
          try {
            body = raw ? JSON.parse(raw) : {}
          } catch {
            body = {}
          }
          const t0 = Date.now()
          if (process.env.NODE_ENV === 'development') {
            const msg = body?.message
            console.log('[local-chat-api] POST /api/chat', {
              topicId: body?.topicId,
              messageChars: typeof msg === 'string' ? msg.length : 0,
              history: Array.isArray(body?.history) ? body.history.length : 0,
            })
          }
          const { default: handler } = await import(handlerUrl)
          withVercelResponseShims(res)
          // Handlers use `req.on('close', …)` / `req.off`. A plain object breaks streaming.
          const mockReq = new Proxy(req, {
            get(target, prop) {
              if (prop === 'body') return body
              if (prop === 'method') return 'POST'
              const v = Reflect.get(target, prop, target)
              return typeof v === 'function' ? v.bind(target) : v
            },
          })
          await handler(mockReq, res)
          if (process.env.NODE_ENV === 'development') {
            console.log('[local-chat-api] handler finished', { ms: Date.now() - t0 })
          }
        } catch (err) {
          console.error('[local-chat-api]', err)
          if (!res.headersSent) {
            withVercelResponseShims(res)
            res.status(500).json({ error: err?.message || 'Local chat API error' })
          }
        }
      })
    },
  }
}
