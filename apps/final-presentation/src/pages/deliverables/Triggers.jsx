import { useMemo, useState } from 'react'
import { Search, Filter } from 'lucide-react'
import {
  DeliverableHero,
  ProductTag,
  SectionLead,
  UrgencyPill,
} from '../../components/shared/DeliverableHero.jsx'
import { D1 } from '../../content/deliverables/d1-triggers.js'

const TYPE_COLORS = {
  REACTIVE: 'bg-cc-red/10 text-cc-red border-cc-red/30',
  PROACTIVE: 'bg-cc-green/10 text-cc-green border-cc-green/30',
  REGULATORY: 'bg-cc-navy/10 text-cc-navy border-cc-navy/30',
  SYSTEM: 'bg-cc-amber/10 text-cc-amber border-cc-amber/30',
}

const URGENCY_ORDER = { peak: 0, high: 1, medium: 2, low: 3 }

const VERTICAL_LABELS = {
  'higher-ed': 'Higher ed',
  healthcare: 'Healthcare',
  cre: 'CRE',
  qsr: 'QSR',
  hospitality: 'Hospitality',
  manufacturing: 'Manufacturing',
}

export function Triggers() {
  const [typeFilter, setTypeFilter] = useState('ALL')
  const [verticalFilter, setVerticalFilter] = useState('ALL')
  const [query, setQuery] = useState('')

  const typeCounts = useMemo(() => {
    const counts = { REACTIVE: 0, PROACTIVE: 0, REGULATORY: 0, SYSTEM: 0 }
    for (const t of D1.triggers) {
      if (counts[t.type] != null) counts[t.type] += 1
    }
    return counts
  }, [])

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    return D1.triggers
      .filter((t) => typeFilter === 'ALL' || t.type === typeFilter)
      .filter((t) => verticalFilter === 'ALL' || t.verticals.includes(verticalFilter))
      .filter(
        (t) =>
          !q ||
          t.name.toLowerCase().includes(q) ||
          t.quote?.toLowerCase().includes(q) ||
          t.primarySource?.toLowerCase().includes(q),
      )
      .sort((a, b) => (URGENCY_ORDER[a.urgency] ?? 9) - (URGENCY_ORDER[b.urgency] ?? 9))
  }, [typeFilter, verticalFilter, query])

  return (
    <article className="pb-16">
      <DeliverableHero
        tagline={D1.tagline}
        leadStatement={D1.openingProblem}
        tldrBullets={D1.tldrBullets}
      />

      {/* FILTER BAR */}
      <section className="mb-6 rounded-lg border border-cc-border bg-white p-4 shadow-sm">
        <div className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-cc-mid-gray">
          <Filter className="h-3 w-3" />
          Filter triggers
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cc-navy">
              Type
            </span>
            <FilterChip
              label="All"
              count={D1.triggers.length}
              active={typeFilter === 'ALL'}
              onClick={() => setTypeFilter('ALL')}
            />
            {Object.keys(D1.typeLabels).map((t) => (
              <FilterChip
                key={t}
                label={D1.typeLabels[t]}
                count={typeCounts[t]}
                active={typeFilter === t}
                onClick={() => setTypeFilter(t)}
                tone={TYPE_COLORS[t]}
              />
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[10px] font-bold uppercase tracking-wider text-cc-navy">
              Vertical
            </span>
            <FilterChip
              label="All"
              active={verticalFilter === 'ALL'}
              onClick={() => setVerticalFilter('ALL')}
            />
            {Object.entries(VERTICAL_LABELS).map(([v, label]) => (
              <FilterChip
                key={v}
                label={label}
                active={verticalFilter === v}
                onClick={() => setVerticalFilter(v)}
              />
            ))}
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-cc-mid-gray" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search by trigger, quote, or source…"
              className="w-full rounded-md border border-cc-border bg-white py-2 pl-9 pr-3 text-[13px] placeholder:text-cc-mid-gray focus:border-cc-navy focus:outline-none focus:ring-1 focus:ring-cc-navy"
            />
          </div>
        </div>
        <div className="mt-3 text-[11px] text-cc-mid-gray">
          Showing {filtered.length} of {D1.triggers.length} triggers, sorted by urgency.
        </div>
      </section>

      {/* TRIGGER GRID */}
      <section className="mb-12">
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((t) => (
            <TriggerCard key={t.id} trigger={t} />
          ))}
          {filtered.length === 0 ? (
            <div className="col-span-full rounded-lg border border-dashed border-cc-border bg-cc-light-gray p-6 text-center text-[13px] text-cc-mid-gray">
              No triggers match these filters.
            </div>
          ) : null}
        </div>
      </section>

      {/* ALERT DESIGN PRINCIPLES */}
      <section className="mb-12">
        <SectionLead kicker="Alert design" title="How to design for each trigger">
          Every alert should earn the interruption.
        </SectionLead>
        <ul className="grid gap-3 md:grid-cols-2">
          {D1.alertDesign.map((a, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-md border border-cc-border bg-white px-4 py-3 text-[13px] leading-relaxed text-cc-dark-text shadow-sm"
            >
              <span className="mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-cc-navy text-[10px] font-bold text-cc-yellow">
                {i + 1}
              </span>
              <span>{a}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SALES IMPLICATIONS */}
      <section>
        <SectionLead kicker="Sales implications" title="What this means for go-to-market">
          Plays that ride the clustered trigger moments rather than generic outreach.
        </SectionLead>
        <div className="rounded-lg border border-cc-navy bg-cc-navy p-5 text-white">
          <ul className="space-y-2.5">
            {D1.salesImplications.map((s, i) => (
              <li key={i} className="flex gap-3 text-[13px] leading-relaxed">
                <span className="text-cc-yellow">▸</span>
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  )
}

function FilterChip({ label, count, active, onClick, tone }) {
  const base = active
    ? 'bg-cc-navy text-white border-cc-navy'
    : tone
      ? tone
      : 'bg-white text-cc-dark-text border-cc-border hover:bg-cc-light-gray'
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold transition ${base}`}
    >
      {label}
      {typeof count !== 'undefined' ? (
        <span className="rounded bg-black/10 px-1 text-[10px] font-bold">{count}</span>
      ) : null}
    </button>
  )
}

function TriggerCard({ trigger }) {
  return (
    <div className="group flex flex-col rounded-lg border border-cc-border bg-white p-4 shadow-sm transition hover:border-cc-navy/40 hover:shadow-md">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span
            className={`inline-flex items-center rounded border px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
              TYPE_COLORS[trigger.type] ?? ''
            }`}
          >
            {trigger.type}
          </span>
          <span className="font-mono text-[10px] text-cc-mid-gray">{trigger.id}</span>
        </div>
        <div className="flex items-center gap-1">
          <UrgencyPill urgency={trigger.urgency} />
          <ProductTag tag={trigger.productTag} />
        </div>
      </div>
      <h3 className="text-[14.5px] font-bold leading-snug text-cc-navy">
        {trigger.name}
      </h3>
      {trigger.quote ? (
        <blockquote className="mt-2 border-l-2 border-cc-yellow bg-cc-yellow-soft/40 px-2 py-1.5 text-[12px] italic leading-snug text-cc-dark-text">
          &ldquo;{trigger.quote}&rdquo;
          <div className="mt-1 not-italic text-[10.5px] font-semibold text-cc-mid-gray">
            — {trigger.primarySource}
          </div>
        </blockquote>
      ) : null}
      <p className="mt-2 text-[12px] leading-relaxed text-cc-dark-text">
        <span className="font-semibold text-cc-navy">Why it matters · </span>
        {trigger.whyItMatters}
      </p>
      <dl className="mt-2 grid grid-cols-2 gap-x-3 gap-y-1 border-t border-cc-border/60 pt-2 text-[11px]">
        <Meta label="Seasonality" value={trigger.seasonality} />
        <Meta label="CC surface" value={trigger.ccSurface} />
        <Meta
          label="Verticals"
          value={trigger.verticals.map((v) => VERTICAL_LABELS[v] ?? v).join(' · ')}
        />
      </dl>
    </div>
  )
}

function Meta({ label, value }) {
  return (
    <div>
      <dt className="text-[9.5px] font-bold uppercase tracking-wider text-cc-mid-gray">
        {label}
      </dt>
      <dd className="text-cc-dark-text">{value}</dd>
    </div>
  )
}
