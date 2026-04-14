import { useCallback, useEffect, useId, useMemo, useRef, useState } from 'react'
import { Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom'
import { SEARCH_INDEX } from '../data/searchIndex'

function normalize(s) {
  return s.toLowerCase().trim()
}

export function SiteSearch() {
  const navigate = useNavigate()
  const inputRef = useRef(null)
  const titleId = useId()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')

  const results = useMemo(() => {
    const q = normalize(query)
    if (!q) return SEARCH_INDEX.slice(0, 12)
    return SEARCH_INDEX.filter((item) => {
      const hay = [item.title, ...item.keywords, item.path, item.hash ?? '']
        .join(' ')
        .toLowerCase()
      return hay.includes(q) || item.keywords.some((k) => normalize(k).includes(q))
    }).slice(0, 20)
  }, [query])

  const close = useCallback(() => {
    setOpen(false)
    setQuery('')
  }, [])

  useEffect(() => {
    const onKey = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        setOpen((o) => !o)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (!open) return
    const t = window.setTimeout(() => inputRef.current?.focus(), 0)
    return () => clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!open) return
    const onEsc = (e) => {
      if (e.key === 'Escape') close()
    }
    window.addEventListener('keydown', onEsc)
    return () => window.removeEventListener('keydown', onEsc)
  }, [open, close])

  const go = useCallback(
    (item) => {
      const path = item.hash ? `${item.path}#${item.hash}` : item.path
      navigate(path)
      close()
    },
    [navigate, close],
  )

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 rounded-md border border-cc-mid-gray/25 bg-cc-white px-2.5 py-1.5 text-xs font-semibold text-cc-navy shadow-sm hover:bg-cc-light-gray print:hidden"
        aria-haspopup="dialog"
        aria-expanded={open}
        aria-controls="site-search-dialog"
      >
        <Search className="h-4 w-4 opacity-90" aria-hidden />
        Search
        <kbd className="hidden rounded border border-cc-mid-gray/30 bg-cc-light-gray px-1 font-sans text-[10px] text-cc-mid-gray sm:inline">
          ⌘K
        </kbd>
      </button>

      {open ? (
        <div
          id="site-search-dialog"
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          className="print:hidden fixed inset-0 z-[300] flex items-start justify-center p-4 pt-[12vh]"
        >
          <button
            type="button"
            className="absolute inset-0 bg-cc-navy/40"
            aria-label="Close search overlay"
            onClick={close}
          />
          <div
            className="relative w-full max-w-lg rounded-xl border border-cc-mid-gray/20 bg-cc-white p-4 shadow-xl"
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-2 border-b border-cc-mid-gray/15 pb-3">
              <h2 id={titleId} className="text-sm font-bold text-cc-navy">
                Search this report
              </h2>
              <button
                type="button"
                onClick={close}
                className="rounded-md p-1 text-cc-mid-gray hover:bg-cc-light-gray hover:text-cc-navy"
                aria-label="Close search"
              >
                <X className="h-5 w-5" aria-hidden />
              </button>
            </div>
            <label
              className="mt-3 block text-xs font-medium text-cc-mid-gray"
              htmlFor="site-search-input"
            >
              Filter sections
            </label>
            <input
              ref={inputRef}
              id="site-search-input"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="mt-1 w-full rounded-lg border border-cc-mid-gray/25 px-3 py-2 text-sm text-cc-dark-text outline-none ring-cc-navy/20 focus:ring-2"
              placeholder="Type a topic, route, or keyword…"
              autoComplete="off"
            />
            <ul className="mt-3 max-h-[50vh] overflow-y-auto text-sm">
              {results.length === 0 ? (
                <li className="rounded-md px-2 py-2 text-cc-mid-gray">No matches.</li>
              ) : (
                results.map((item) => (
                  <li key={item.id}>
                    <button
                      type="button"
                      onClick={() => go(item)}
                      className="w-full rounded-md px-2 py-2 text-left hover:bg-cc-light-gray"
                    >
                      <span className="font-semibold text-cc-navy">{item.title}</span>
                      <span className="mt-0.5 block font-mono text-xs text-cc-mid-gray">
                        {item.path}
                        {item.hash ? `#${item.hash}` : ''}
                      </span>
                    </button>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      ) : null}
    </>
  )
}
