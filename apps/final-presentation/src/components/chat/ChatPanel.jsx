import { useCallback, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { useFullPageChatContext } from '../../context/FullPageChatContext.jsx'
import { useChat } from '../../hooks/useChat.js'
import { getTopic, topicForPath } from './topics.js'
import { TopicPicker, StarterPrompts } from './TopicPicker.jsx'
import { MessageList } from './MessageList.jsx'
import { MessageInput } from './MessageInput.jsx'

/**
 * ChatPanel — the main chat experience.
 * Used by both the floating bubble (popover mode) and /chat (full mode).
 *
 * Flow:
 *   1. Show TopicPicker until user picks a topic.
 *   2. Show chat header (topic chip + reset) + transcript + input.
 *   3. Empty state inside chat shows StarterPrompts for the chosen topic.
 */
export function ChatPanel({ variant = 'popover', onClose = null }) {
  const location = useLocation()
  const { setFullPageChatControls } = useFullPageChatContext()
  const autoTopicId = topicForPath(location.pathname)
  const [topicId, setTopicId] = useState(null)
  const {
    messages,
    pastSessions,
    isStreaming,
    error,
    send,
    reset,
    startNewChat,
    stop,
  } = useChat({
    topicId: topicId || 'all',
    persistenceKey: topicId,
  })
  const [driftWarned, setDriftWarned] = useState(false)
  const [archivedView, setArchivedView] = useState(null)

  useEffect(() => {
    setDriftWarned(false)
    setArchivedView(null)
  }, [topicId])

  // Lightweight drift detection — if the last assistant turn pulled chunks
  // mostly from outside the chosen topic, surface a small notice.
  const driftNotice = (() => {
    if (driftWarned || !topicId || topicId === 'all') return null
    const lastAssistant = [...messages].reverse().find((m) => m.role === 'assistant')
    if (!lastAssistant?.retrieved?.length) return null
    const onTopic = lastAssistant.retrieved.filter(
      (r) => r.sourceId === topicId,
    ).length
    if (onTopic <= 1 && lastAssistant.retrieved.length >= 4) {
      return `Pulling from broader research — your question stretches beyond ${getTopic(topicId).label}.`
    }
    return null
  })()

  const handleSend = (text) => {
    void send(text)
  }

  const handleNewChat = useCallback(() => {
    setDriftWarned(false)
    setArchivedView(null)
    startNewChat()
  }, [startNewChat])

  const handleSwitchTopic = useCallback(() => {
    if (isStreaming) stop()
    setTopicId(null)
    reset()
  }, [isStreaming, stop, reset])

  useEffect(() => {
    if (variant !== 'full') return
    if (topicId) {
      const t = getTopic(topicId)
      setFullPageChatControls({
        topicLabel: t.label,
        onSwitchTopic: handleSwitchTopic,
      })
    } else {
      setFullPageChatControls(null)
    }
    return () => setFullPageChatControls(null)
  }, [variant, topicId, setFullPageChatControls, handleSwitchTopic])

  const isFullPageRoute = location.pathname === '/chat'
  const containerClass =
    variant === 'full'
      ? isFullPageRoute
        ? 'flex h-full min-h-0 flex-1 flex-col overflow-hidden border-0 border-transparent bg-cc-light-gray shadow-none'
        : 'flex h-[calc(100vh-9rem)] flex-col overflow-hidden rounded-xl border border-cc-border bg-cc-light-gray shadow-sm'
      : 'flex h-full flex-col overflow-hidden rounded-2xl bg-cc-light-gray'

  return (
    <div className={containerClass}>
      {variant === 'popover' ? (
        <ChatHeader
          topic={topicId ? getTopic(topicId) : null}
          onSwitchTopic={topicId ? handleSwitchTopic : null}
          onClose={onClose}
        />
      ) : null}
      {!topicId ? (
        <div className="flex-1 overflow-y-auto">
          <TopicPicker onSelect={setTopicId} autoSelectedTopicId={autoTopicId} />
        </div>
      ) : (
        <>
          {pastSessions.length > 0 ? (
            <details className="border-b border-cc-border bg-white px-4 py-2 text-[12px] text-cc-dark-text">
              <summary className="cursor-pointer list-none font-medium text-cc-navy marker:hidden [&::-webkit-details-marker]:hidden">
                <span className="underline-offset-2 hover:underline">
                  Previous conversations ({pastSessions.length})
                </span>
              </summary>
              <ul className="mt-2 space-y-1.5 border-t border-cc-border/80 pt-2">
                {pastSessions.map((s) => (
                  <li key={s.id}>
                    <button
                      type="button"
                      onClick={() => setArchivedView(s)}
                      className="w-full rounded-md px-2 py-1.5 text-left text-[12px] hover:bg-cc-light-gray"
                    >
                      <span className="line-clamp-1 text-cc-navy">
                        {s.preview || 'Conversation'}
                      </span>
                      <span className="text-[11px] text-cc-mid-gray">
                        {formatArchivedDate(s.savedAt)}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </details>
          ) : null}
          {messages.length === 0 ? (
            <div className="flex-1 space-y-4 overflow-y-auto px-4 py-4">
              <Greeting topicId={topicId} />
              <StarterPrompts topicId={topicId} onSelect={handleSend} />
            </div>
          ) : (
            <MessageList
              messages={messages}
              isStreaming={isStreaming}
              error={error}
            />
          )}
          {driftNotice ? (
            <div className="mx-4 mb-2 rounded-md bg-cc-yellow-soft px-3 py-1.5 text-xs text-cc-navy">
              {driftNotice}{' '}
              <button
                type="button"
                onClick={() => setDriftWarned(true)}
                className="font-medium underline"
              >
                Got it
              </button>
            </div>
          ) : null}
          <MessageInput
            onSend={handleSend}
            isStreaming={isStreaming}
            onStop={stop}
            onNewChat={handleNewChat}
          />
          {archivedView ? (
            <ArchivedTranscriptDialog
              session={archivedView}
              onClose={() => setArchivedView(null)}
            />
          ) : null}
        </>
      )}
    </div>
  )
}

function formatArchivedDate(iso) {
  try {
    return new Date(iso).toLocaleString(undefined, {
      dateStyle: 'short',
      timeStyle: 'short',
    })
  } catch {
    return ''
  }
}

function ArchivedTranscriptDialog({ session, onClose }) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center sm:items-center"
      role="dialog"
      aria-modal="true"
      aria-labelledby="archived-transcript-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
        aria-label="Close"
      />
      <div className="relative z-10 flex max-h-[min(85vh,640px)] w-full max-w-lg flex-col overflow-hidden rounded-t-2xl border border-cc-border bg-cc-light-gray shadow-lg sm:rounded-2xl">
        <div className="flex shrink-0 items-start justify-between gap-3 border-b border-cc-border bg-white px-4 py-3">
          <div className="min-w-0">
            <h2
              id="archived-transcript-title"
              className="text-sm font-semibold text-cc-navy"
            >
              Past conversation
            </h2>
            <p className="mt-0.5 line-clamp-2 text-[12px] text-cc-mid-gray">
              {session.preview}
            </p>
            <p className="text-[11px] text-cc-mid-gray">
              {formatArchivedDate(session.savedAt)}
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-md p-1.5 text-cc-mid-gray hover:bg-cc-light-gray hover:text-cc-navy"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto">
          <MessageList
            messages={session.messages || []}
            isStreaming={false}
            error={null}
            className="max-h-[min(70vh,520px)] space-y-4 overflow-y-auto px-4 py-4"
          />
        </div>
      </div>
    </div>
  )
}

function ChatHeader({ topic, onSwitchTopic, onClose }) {
  return (
    <div className="flex items-center justify-between gap-3 border-b border-cc-border bg-white px-4 py-3">
      <div className="min-w-0">
        <div className="text-xs font-semibold uppercase tracking-wide text-cc-mid-gray">
          Research Assistant
        </div>
        {topic ? (
          <div className="mt-0.5 flex items-center gap-2 text-sm">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-cc-yellow-soft px-2 py-0.5 text-xs font-medium text-cc-navy">
              <span className="inline-block h-1.5 w-1.5 rounded-full bg-cc-yellow" />
              {topic.label}
            </span>
            <button
              type="button"
              onClick={onSwitchTopic}
              className="text-xs text-cc-mid-gray underline-offset-2 hover:text-cc-navy hover:underline"
            >
              Switch topic
            </button>
          </div>
        ) : (
          <div className="mt-0.5 text-sm text-cc-dark-text">
            Pick a topic to start
          </div>
        )}
      </div>
      {onClose ? (
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 rounded-md p-1 text-cc-mid-gray hover:bg-cc-light-gray hover:text-cc-navy"
          aria-label="Close chat"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      ) : null}
    </div>
  )
}

function Greeting({ topicId }) {
  const topic = getTopic(topicId)
  const opening =
    topicId === 'all'
      ? "Happy to dig into anything across the research. Where would you like to start?"
      : topicId === 'interviews'
        ? "I've spent time with all 14 interviews. What would you like to know?"
        : topicId === 'secondary'
          ? "I have the market sizing, competitive intel, and analyst research at hand. What are you curious about?"
          : `Anchored on ${topic.label}. What's the question?`
  return (
    <div className="rounded-2xl border border-cc-border bg-white px-4 py-3 text-[13px] text-cc-dark-text">
      {opening}
    </div>
  )
}
