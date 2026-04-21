import { useEffect, useRef, useState } from 'react'

export function MessageInput({
  onSend,
  isStreaming,
  onStop,
  onNewChat = null,
  disabled = false,
}) {
  const [value, setValue] = useState('')
  const ref = useRef(null)

  useEffect(() => {
    if (!disabled) ref.current?.focus()
  }, [disabled])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!value.trim() || isStreaming || disabled) return
    onSend(value)
    setValue('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSubmit(e)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="border-t border-cc-border bg-white px-3 py-3"
    >
      <div className="flex items-end gap-2">
        <textarea
          ref={ref}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          disabled={disabled}
          placeholder={
            disabled ? 'Pick a topic to start…' : 'Ask about the research…'
          }
          data-gramm="false"
          data-gramm_editor="false"
          data-enable-grammarly="false"
          spellCheck={false}
          className="max-h-32 min-h-[40px] flex-1 resize-none rounded-lg border border-cc-border bg-cc-light-gray px-3 py-2 text-[13px] text-cc-dark-text placeholder:text-cc-mid-gray focus:border-cc-navy focus:outline-none focus:ring-2 focus:ring-cc-yellow/30 disabled:cursor-not-allowed disabled:opacity-60"
        />
        {isStreaming ? (
          <button
            type="button"
            onClick={onStop}
            className="h-10 shrink-0 rounded-lg bg-cc-red px-3 text-sm font-medium text-white transition hover:bg-red-700"
            aria-label="Stop generating"
          >
            Stop
          </button>
        ) : (
          <button
            type="submit"
            disabled={!value.trim() || disabled}
            className="h-10 shrink-0 rounded-lg bg-cc-navy px-4 text-sm font-medium text-cc-white transition hover:bg-cc-navy-light disabled:cursor-not-allowed disabled:opacity-50"
            aria-label="Send message"
          >
            Send
          </button>
        )}
      </div>
      <div className="mt-1.5 flex flex-wrap items-center justify-between gap-2 text-[11px] text-cc-mid-gray">
        {onNewChat ? (
          <button
            type="button"
            onClick={onNewChat}
            disabled={isStreaming}
            title="Saves this conversation to Previous conversations and starts a new thread in this topic"
            className="shrink-0 text-cc-mid-gray underline-offset-2 hover:text-cc-navy hover:underline disabled:cursor-not-allowed disabled:opacity-50"
          >
            New chat
          </button>
        ) : (
          <span />
        )}
        <span className="min-w-0 text-right">
          Answers are grounded in the Clear Current research.
        </span>
      </div>
    </form>
  )
}
