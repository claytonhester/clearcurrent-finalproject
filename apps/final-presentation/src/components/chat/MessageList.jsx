import { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

/**
 * MessageList — scrolling transcript of chat messages with streaming.
 */
export function MessageList({ messages, isStreaming, error, className = null }) {
  const endRef = useRef(null)
  const [showSourcesFor, setShowSourcesFor] = useState(null)

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, isStreaming])

  return (
    <div
      className={
        className ?? 'flex-1 space-y-4 overflow-y-auto px-4 py-4'
      }
    >
      {messages.map((msg, idx) => (
        <Message
          key={idx}
          message={msg}
          isLast={idx === messages.length - 1}
          isStreaming={isStreaming}
          showSources={showSourcesFor === idx}
          onToggleSources={() =>
            setShowSourcesFor((cur) => (cur === idx ? null : idx))
          }
        />
      ))}
      {error ? (
        <div className="rounded-lg border border-cc-red bg-red-50 px-3 py-2 text-sm text-cc-red">
          {error}
        </div>
      ) : null}
      <div ref={endRef} />
    </div>
  )
}

function Message({ message, isLast, isStreaming, showSources, onToggleSources }) {
  const isUser = message.role === 'user'
  const isStreamingThis = isLast && !isUser && isStreaming
  const hasSources = !isUser && message.retrieved && message.retrieved.length > 0

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-[13px] leading-relaxed ${
          isUser
            ? 'bg-cc-navy text-cc-white'
            : 'border border-cc-border bg-white text-cc-dark-text'
        }`}
      >
        {message.content ? (
          <ChatMarkdown isUser={isUser}>{message.content}</ChatMarkdown>
        ) : isStreamingThis ? (
          <ThinkingDots />
        ) : null}
        {isStreamingThis && message.content ? (
          <span className="ml-0.5 inline-block h-3 w-1 animate-pulse bg-cc-mid-gray align-middle" />
        ) : null}
        {!isUser && hasSources && !isStreamingThis ? (
          <div className="mt-2 border-t border-cc-border pt-2">
            <button
              type="button"
              onClick={onToggleSources}
              className="text-xs font-medium text-cc-mid-gray underline-offset-2 hover:text-cc-navy hover:underline"
            >
              {showSources ? 'Hide sources' : 'Show sources'}
            </button>
            {showSources ? (
              <ul className="mt-1.5 space-y-0.5 text-xs text-cc-mid-gray">
                {dedupeRetrieved(message.retrieved).map((r) => (
                  <li key={`${r.sourceId}-${r.sourceLabel}`}>
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-cc-yellow align-middle" />{' '}
                    {r.sourceLabel}
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        ) : null}
      </div>
    </div>
  )
}

/**
 * Renders model markdown (**bold**, bullets, etc.) as real HTML — not raw asterisks.
 */
function ChatMarkdown({ isUser, children }) {
  // react-markdown v9+ does not allow className on <ReactMarkdown /> — wrap instead.
  return (
    <div className="min-w-0 [&_a]:underline">
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          p: ({ children: c }) => <p className="mb-1.5 last:mb-0">{c}</p>,
          strong: ({ children: c }) => (
            <strong
              className={
                isUser ? 'font-semibold text-cc-white' : 'font-semibold text-cc-navy'
              }
            >
              {c}
            </strong>
          ),
          em: ({ children: c }) => <em className="italic opacity-90">{c}</em>,
          ul: ({ children: c }) => (
            <ul
              className={
                isUser
                  ? 'my-1.5 list-disc space-y-0.5 pl-4 marker:text-white/85'
                  : 'my-1.5 list-disc space-y-0.5 pl-4 marker:text-cc-navy'
              }
            >
              {c}
            </ul>
          ),
          ol: ({ children: c }) => (
            <ol
              className={
                isUser
                  ? 'my-1.5 list-decimal space-y-0.5 pl-4 marker:text-white/85'
                  : 'my-1.5 list-decimal space-y-0.5 pl-4 marker:text-cc-navy'
              }
            >
              {c}
            </ol>
          ),
          li: ({ children: c }) => <li className="leading-snug">{c}</li>,
          a: ({ href, children: c }) => (
            <a
              href={href}
              className={isUser ? 'text-cc-yellow' : 'text-cc-navy'}
              target="_blank"
              rel="noopener noreferrer"
            >
              {c}
            </a>
          ),
          code: ({ className, children: c, ...props }) => {
            const isBlock = /language-/.test(String(className || ''))
            if (isBlock) {
              return (
                <code
                  className={`my-1 block max-w-full overflow-x-auto rounded bg-cc-light-gray/80 p-2 text-xs ${
                    isUser ? 'text-cc-white' : 'text-cc-dark-text'
                  }`}
                  {...props}
                >
                  {c}
                </code>
              )
            }
            return (
              <code
                className={`rounded px-0.5 text-[0.9em] ${
                  isUser ? 'bg-white/15' : 'bg-cc-light-gray'
                }`}
                {...props}
              >
                {c}
              </code>
            )
          },
          h1: ({ children: c }) => (
            <p className="mb-1 font-semibold first:mt-0">{c}</p>
          ),
          h2: ({ children: c }) => (
            <p className="mb-1 font-semibold first:mt-0">{c}</p>
          ),
          h3: ({ children: c }) => (
            <p className="mb-1 text-[12px] font-semibold first:mt-0">{c}</p>
          ),
        }}
      >
        {children}
      </ReactMarkdown>
    </div>
  )
}

function ThinkingDots() {
  return (
    <span className="inline-flex items-center gap-1 text-cc-mid-gray">
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cc-mid-gray [animation-delay:-0.3s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cc-mid-gray [animation-delay:-0.15s]" />
      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-cc-mid-gray" />
    </span>
  )
}

function dedupeRetrieved(retrieved) {
  const seen = new Set()
  const out = []
  for (const r of retrieved) {
    const key = r.sourceLabel
    if (seen.has(key)) continue
    seen.add(key)
    out.push(r)
  }
  return out
}
