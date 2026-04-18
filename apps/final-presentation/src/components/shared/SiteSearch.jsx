import { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { DELIVERABLES, APPENDIX_ITEMS } from '../../navConfig.js'
import { SEARCH_INDEX } from '../../content/searchIndex.js'

export function SiteSearch({ onClose, open }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    if (open) {
      setQuery('')
      setTimeout(() => inputRef.current?.focus(), 10)
    }
  }, [open])

  useEffect(() => {
    function onKey(e) {
      if (e.key === 'Escape' && open) {
        onClose()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    const all = [
      ...DELIVERABLES.map((d) => ({ ...d, kind: 'deliverable' })),
      ...APPENDIX_ITEMS.map((a) => ({ ...a, kind: 'appendix' })),
      ...SEARCH_INDEX,
    ]
    if (!q) return all.slice(0, 12)
    return all
      .filter((item) =>
        [item.label, item.path, item.keywords?.join(' ')]
          .filter(Boolean)
          .join(' ')
          .toLowerCase()
          .includes(q),
      )
      .slice(0, 20)
  }, [query])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-cc-navy/40 px-4 pt-20 print:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Page search"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0"
        aria-label="Close"
      />
      <div className="relative w-full max-w-xl rounded-lg bg-white shadow-2xl">
        <div className="flex items-center gap-2 border-b border-cc-border px-4 py-3">
          <Search className="h-4 w-4 text-cc-mid-gray" />
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Jump to a page or topic…"
            className="flex-1 bg-transparent text-sm outline-none"
          />
          <kbd className="rounded border border-cc-border px-1.5 py-0.5 text-[10px] font-semibold text-cc-mid-gray">
            ESC
          </kbd>
          <button type="button" onClick={onClose} className="text-cc-mid-gray">
            <X className="h-4 w-4" />
          </button>
        </div>
        <ul className="max-h-[60vh] overflow-y-auto py-2">
          {results.length === 0 ? (
            <li className="px-4 py-6 text-sm text-cc-mid-gray">No matches.</li>
          ) : (
            results.map((r, i) => (
              <li key={`${r.path}-${i}`}>
                <button
                  type="button"
                  onClick={() => {
                    navigate(r.path)
                    onClose()
                  }}
                  className="flex w-full items-center justify-between gap-3 px-4 py-2 text-left text-sm hover:bg-cc-light-gray"
                >
                  <span className="min-w-0 flex-1 truncate">
                    <span className="font-semibold text-cc-navy">{r.label}</span>
                    {r.description ? (
                      <span className="ml-2 text-[12px] text-cc-mid-gray">
                        {r.description}
                      </span>
                    ) : null}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-cc-mid-gray">
                    {r.kind ?? 'section'}
                  </span>
                </button>
              </li>
            ))
          )}
        </ul>
      </div>
    </div>
  )
}
