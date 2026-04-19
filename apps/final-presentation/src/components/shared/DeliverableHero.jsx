import { useEffect, useId, useRef, useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { getDeliverableByPath } from '../../navConfig.js'
import { useLocation } from 'react-router-dom'

/** Eyebrow copy often repeats the badge id (`D1 · …`); show only the subtitle next to the pill. */
function eyebrowWithoutBadgePrefix(eyebrow, shortLabel) {
  const prefix = `${shortLabel} · `
  return eyebrow.startsWith(prefix) ? eyebrow.slice(prefix.length) : eyebrow
}

function HeroTldr({ tldrBullets, leadStatement }) {
  const [open, setOpen] = useState(false)
  const rootRef = useRef(null)
  const panelId = useId()

  useEffect(() => {
    if (!open) return
    const onDoc = (e) => {
      if (rootRef.current && !rootRef.current.contains(e.target)) setOpen(false)
    }
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDoc)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDoc)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const hasBullets = Array.isArray(tldrBullets) && tldrBullets.length > 0
  if (!hasBullets && !leadStatement) return null

  return (
    <div ref={rootRef} className="relative flex-shrink-0 print:hidden">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1.5 rounded-md border border-cc-border bg-white px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-cc-navy shadow-sm transition hover:border-cc-navy/40 hover:bg-cc-light-gray"
      >
        TL;DR
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open ? 'rotate-180' : ''}`}
          aria-hidden
        />
      </button>
      {open ? (
        <div
          id={panelId}
          role="region"
          aria-label="Brief overview"
          className="absolute right-0 z-50 mt-2 w-[min(calc(100vw-2.5rem),22rem)] rounded-lg border border-cc-border bg-white p-4 shadow-lg"
        >
          {hasBullets ? (
            <>
              <p className="text-[10px] font-bold uppercase tracking-wider text-cc-mid-gray">
                At a glance
              </p>
              <ul className="mt-2 list-disc space-y-1.5 pl-4 text-[13px] leading-snug text-cc-dark-text">
                {tldrBullets.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </>
          ) : null}
          {leadStatement ? (
            hasBullets ? (
              <details className="mt-3 border-t border-cc-border pt-3">
                <summary className="cursor-pointer text-[11px] font-semibold text-cc-navy">
                  Full framing
                </summary>
                <p className="mt-2 text-[12.5px] leading-relaxed text-cc-mid-gray">
                  {leadStatement}
                </p>
              </details>
            ) : (
              <p className="text-[12.5px] leading-relaxed text-cc-mid-gray">{leadStatement}</p>
            )
          ) : null}
        </div>
      ) : null}
    </div>
  )
}

export function DeliverableHero({
  tagline,
  leadStatement,
  tldrBullets,
  meta,
  showMeta = false,
}) {
  const { pathname } = useLocation()
  const d = getDeliverableByPath(pathname)
  if (!d) return null

  return (
    <section className="mb-10">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cc-mid-gray">
        <span className="inline-flex h-5 min-w-[2.25rem] items-center justify-center rounded bg-cc-navy text-[10px] font-bold text-cc-yellow">
          {d.shortLabel}
        </span>
        <span className="text-cc-navy">
          {eyebrowWithoutBadgePrefix(d.eyebrow, d.shortLabel)}
        </span>
      </div>
      <div className="mt-3 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-6">
        <h1 className="min-w-0 flex-1 text-3xl font-bold leading-tight tracking-tight text-cc-navy sm:text-[2.25rem]">
          {d.title}
        </h1>
        <HeroTldr tldrBullets={tldrBullets} leadStatement={leadStatement} />
      </div>
      {tagline ? (
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-cc-dark-text">
          <span className="bg-cc-yellow/40 px-1 py-0.5 font-medium">{tagline}</span>
        </p>
      ) : null}
      {leadStatement ? (
        <p className="mt-4 hidden max-w-3xl text-[13.5px] leading-relaxed text-cc-mid-gray print:block">
          {leadStatement}
        </p>
      ) : null}
      {showMeta && meta && meta.length ? (
        <div className="mt-5 flex flex-wrap gap-2">
          {meta.map((m, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-1.5 rounded-full border border-cc-border bg-white px-3 py-1 text-[11px] font-semibold text-cc-navy"
            >
              <span className="text-[10px] uppercase tracking-wider text-cc-mid-gray">
                {m.label}
              </span>
              <span>{m.value}</span>
            </span>
          ))}
        </div>
      ) : null}
    </section>
  )
}

export function SectionLead({ n, title, kicker, children }) {
  return (
    <div className="mb-5 flex items-start gap-3">
      {typeof n !== 'undefined' ? (
        <span className="mt-1 inline-flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-cc-yellow text-[12px] font-bold text-cc-navy">
          {n}
        </span>
      ) : null}
      <div className="min-w-0 flex-1">
        {kicker ? (
          <div className="text-[10px] font-bold uppercase tracking-wider text-cc-yellow">
            {kicker}
          </div>
        ) : null}
        <h2 className="text-lg font-bold leading-snug text-cc-navy">{title}</h2>
        {children ? (
          <p className="mt-1 text-[13px] leading-relaxed text-cc-mid-gray">{children}</p>
        ) : null}
      </div>
    </div>
  )
}

export function ProductTag({ tag }) {
  const map = {
    FITS: 'bg-cc-green/10 text-cc-green border-cc-green/30',
    EXTENDS: 'bg-cc-amber/10 text-cc-amber border-cc-amber/30',
    'NET-NEW': 'bg-cc-navy/10 text-cc-navy border-cc-navy/30',
  }
  const cls = map[tag] ?? 'bg-cc-light-gray text-cc-mid-gray border-cc-border'
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${cls}`}
    >
      {tag}
    </span>
  )
}

export function UrgencyPill({ urgency }) {
  const map = {
    peak: 'bg-cc-red text-white',
    high: 'bg-cc-amber text-white',
    medium: 'bg-cc-yellow text-cc-navy',
    low: 'bg-cc-light-gray text-cc-mid-gray',
  }
  const cls = map[urgency] ?? map.low
  return (
    <span
      className={`inline-flex items-center rounded-sm px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${cls}`}
    >
      {urgency}
    </span>
  )
}
