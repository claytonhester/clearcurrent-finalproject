import { getDeliverableByPath } from '../../navConfig.js'
import { useLocation } from 'react-router-dom'

export function DeliverableHero({ tagline, leadStatement, meta, showMeta = false }) {
  const { pathname } = useLocation()
  const d = getDeliverableByPath(pathname)
  if (!d) return null

  return (
    <section className="mb-10">
      <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-cc-mid-gray">
        <span className="inline-flex h-5 min-w-[2.25rem] items-center justify-center rounded bg-cc-navy text-[10px] font-bold text-cc-yellow">
          {d.shortLabel}
        </span>
        <span className="text-cc-navy">{d.eyebrow}</span>
      </div>
      <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-cc-navy sm:text-[2.25rem]">
        {d.title}
      </h1>
      {tagline ? (
        <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-cc-dark-text">
          <span className="bg-cc-yellow/40 px-1 py-0.5 font-medium">{tagline}</span>
        </p>
      ) : null}
      {leadStatement ? (
        <p className="mt-4 max-w-3xl text-[13.5px] leading-relaxed text-cc-mid-gray">
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
