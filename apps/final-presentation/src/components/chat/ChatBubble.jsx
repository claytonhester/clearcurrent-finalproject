import { useEffect, useState } from 'react'
import { ChatPanel } from './ChatPanel.jsx'

/**
 * ChatBubble — floating launcher that opens a popover containing ChatPanel.
 * Rendered globally inside Layout so it appears on every page.
 */
export function ChatBubble() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const handler = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={`fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-cc-navy text-cc-yellow shadow-lg transition hover:scale-105 hover:bg-cc-navy-light focus:outline-none focus:ring-4 focus:ring-cc-yellow/40 ${
          open ? 'rotate-90' : ''
        }`}
        aria-label={open ? 'Close research assistant' : 'Open research assistant'}
        aria-expanded={open}
      >
        {open ? (
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        ) : (
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        )}
      </button>

      {open ? (
        <div
          className="fixed bottom-24 right-5 z-40 flex h-[min(640px,calc(100vh-9rem))] w-[min(500px,calc(100vw-2.5rem))] flex-col overflow-hidden rounded-2xl border border-cc-border bg-cc-light-gray shadow-2xl"
          role="dialog"
          aria-label="Clear Current research assistant"
        >
          <ChatPanel variant="popover" onClose={() => setOpen(false)} />
        </div>
      ) : null}
    </>
  )
}
