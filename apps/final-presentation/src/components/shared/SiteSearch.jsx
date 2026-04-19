import { useEffect, useMemo, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { Search, X } from 'lucide-react'
import { getSearchCatalog } from '../../content/searchIndex.js'

const CATALOG = getSearchCatalog()

function matchScore(item, q) {
  const label = (item.label ?? '').toLowerCase()
  const path = (item.path ?? '').toLowerCase()
  const desc = (item.description ?? '').toLowerCase()
  const kw = (item.keywords ?? []).join(' ').toLowerCase()
  const blob = `${label} ${path} ${desc} ${kw}`
  if (!blob.includes(q)) return null
  let score = 0
  if (label === q) score += 100
  else if (label.startsWith(q)) score += 85
  else if (label.includes(q)) score += 65
  if (path.includes(q)) score += 28
  if (kw.includes(q)) score += 38
  if (desc.includes(q)) score += 22
  return score
}

export function SiteSearch({ onClose, open }) {
  const [query, setQuery] = useState('')
  const [selectedIndex, setSelectedIndex] = useState(0)
  const inputRef = useRef(null)
  const listRef = useRef(null)
  const navigate = useNavigate()

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return CATALOG.slice(0, 12)
    return CATALOG.map((item) => ({ item, score: matchScore(item, q) }))
      .filter((x) => x.score != null)
      .sort((a, b) => b.score - a.score)
      .slice(0, 20)
      .map((x) => x.item)
  }, [query])

  useEffect(() => {
    setSelectedIndex(0)
  }, [query])

  useEffect(() => {
    setSelectedIndex((i) => (results.length ? Math.min(i, results.length - 1) : 0))
  }, [results.length])

  useEffect(() => {
    if (!open) return
    setQuery('')
    setSelectedIndex(0)
    const t = window.setTimeout(() => inputRef.current?.focus(), 10)
    return () => window.clearTimeout(t)
  }, [open])

  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
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

  useEffect(() => {
    if (!open || !results.length) return
    const el = listRef.current?.querySelector(`[data-result-index="${selectedIndex}"]`)
    el?.scrollIntoView({ block: 'nearest' })
  }, [open, selectedIndex, results.length])

  function goTo(item) {
    navigate(item.path)
    onClose()
  }

  function onInputKeyDown(e) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex((i) => Math.min(i + 1, Math.max(0, results.length - 1)))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex((i) => Math.max(i - 1, 0))
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault()
      goTo(results[selectedIndex])
    }
  }

  if (!open) return null

  const listboxId = 'site-search-results'

  /** Portal keeps the overlay out of the sticky TopBar (backdrop-blur) stacking context — avoids Chrome’s gray compositing band above the panel. */
  return createPortal(
    <div
      className="fixed inset-0 z-[250] flex items-start justify-center bg-cc-navy/50 px-4 pt-[max(4rem,15vh)] print:hidden"
      role="dialog"
      aria-modal="true"
      aria-label="Search portal pages"
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute inset-0 cursor-default"
        aria-label="Close search"
      />
      <div
        className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-cc-border bg-white shadow-[0_24px_64px_-12px_rgba(10,22,40,0.35)]"
        onMouseDown={(e) => e.stopPropagation()}
      >
        <div className="flex items-center gap-3 border-b border-cc-border bg-cc-light-gray/40 px-4 py-3">
          <Search className="h-4 w-4 shrink-0 text-cc-mid-gray" aria-hidden />
          <input
            ref={inputRef}
            id="site-search-input"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={onInputKeyDown}
            placeholder="Search pages, topics, deliverables…"
            aria-autocomplete="list"
            aria-controls={listboxId}
            aria-activedescendant={
              results.length ? `site-search-option-${selectedIndex}` : undefined
            }
            className="min-w-0 flex-1 bg-transparent text-[15px] text-cc-dark-text placeholder:text-cc-mid-gray/80 outline-none"
          />
          <kbd className="hidden shrink-0 rounded-md border border-cc-border bg-white px-2 py-1 text-[10px] font-semibold text-cc-mid-gray sm:inline">
            esc
          </kbd>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1.5 text-cc-mid-gray hover:bg-cc-light-gray hover:text-cc-navy"
            aria-label="Close"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <ul
          ref={listRef}
          id={listboxId}
          role="listbox"
          aria-label="Results"
          className="max-h-[min(24rem,55vh)] overflow-y-auto overscroll-contain py-2"
        >
          {results.length === 0 ? (
            <li className="px-4 py-8 text-center text-sm text-cc-mid-gray">No matches.</li>
          ) : (
            results.map((r, i) => {
              const active = i === selectedIndex
              return (
                <li key={r.path} role="presentation">
                  <button
                    type="button"
                    id={`site-search-option-${i}`}
                    role="option"
                    data-result-index={i}
                    aria-selected={active}
                    onMouseEnter={() => setSelectedIndex(i)}
                    onClick={() => goTo(r)}
                    className={`flex w-full items-start justify-between gap-3 px-4 py-2.5 text-left text-sm transition-colors ${
                      active ? 'bg-cc-yellow-soft' : 'hover:bg-cc-light-gray'
                    }`}
                  >
                    <span className="min-w-0 flex-1">
                      <span className="font-semibold text-cc-navy">{r.label}</span>
                      {r.description ? (
                        <span className="mt-0.5 block text-[13px] leading-snug text-cc-mid-gray">
                          {r.description}
                        </span>
                      ) : null}
                    </span>
                    <span className="shrink-0 pt-0.5 text-[10px] font-semibold uppercase tracking-wider text-cc-mid-gray">
                      {r.kind ?? 'page'}
                    </span>
                  </button>
                </li>
              )
            })
          )}
        </ul>
        <div className="hidden border-t border-cc-border bg-cc-light-gray/30 px-4 py-2 text-[11px] text-cc-mid-gray sm:block">
          <span className="font-medium text-cc-dark-text/80">↑↓</span> navigate ·{' '}
          <span className="font-medium text-cc-dark-text/80">↵</span> open ·{' '}
          <span className="font-medium text-cc-dark-text/80">esc</span> close
        </div>
      </div>
    </div>,
    document.body,
  )
}
