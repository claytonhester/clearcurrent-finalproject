import { useState } from 'react'
import { AlertTriangle, Check, X } from 'lucide-react'
import { DeliverableHero, SectionLead } from '../../components/shared/DeliverableHero.jsx'
import { D6 } from '../../content/deliverables/d6-competition.js'

export function Competition() {
  const [activeName, setActiveName] = useState(D6.competitors[0].name)
  const active = D6.competitors.find((c) => c.name === activeName) ?? D6.competitors[0]

  return (
    <article className="pb-16">
      <DeliverableHero tagline={D6.tagline} leadStatement={D6.marketStructure} />

      <section className="mb-10 grid gap-4 md:grid-cols-3">
        <div className="rounded-lg border border-cc-border bg-white p-4 shadow-sm md:col-span-2">
          <div className="text-[10px] font-bold uppercase tracking-wider text-cc-navy">
            Product boundary (tell this story in enterprise rooms)
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-cc-dark-text">
            {D6.leadershipFraming.productScope}
          </p>
        </div>
        <div className="rounded-lg border border-cc-green/30 bg-cc-green/5 p-4 shadow-sm">
          <div className="text-[10px] font-bold uppercase tracking-wider text-cc-green">
            Partnership default
          </div>
          <p className="mt-2 text-[12.5px] leading-relaxed text-cc-dark-text">
            {D6.leadershipFraming.partnershipNote}
          </p>
        </div>
        <div className="rounded-lg border border-cc-border bg-cc-light-gray/60 p-4 md:col-span-3">
          <div className="text-[10px] font-bold uppercase tracking-wider text-cc-mid-gray">
            Silent incumbent (not only SaaS logos)
          </div>
          <p className="mt-2 text-[13px] leading-relaxed text-cc-dark-text">
            {D6.leadershipFraming.silentIncumbent}
          </p>
        </div>
      </section>

      {/* THREE POLES */}
      <section className="mb-10">
        <SectionLead kicker="Three poles" title="How the market is actually structured">
          None of the three poles has built the conversational, AI-native intelligence
          layer. Clear Current owns that gap.
        </SectionLead>
        <div className="grid gap-4 md:grid-cols-3">
          {D6.poles.map((p, i) => (
            <div
              key={p.id}
              className="relative flex flex-col rounded-lg border border-cc-border bg-white p-5 shadow-sm"
            >
              <div className="absolute -top-3 left-5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cc-navy text-[11px] font-bold text-cc-yellow">
                {i + 1}
              </div>
              <h3 className="mt-2 text-[15px] font-bold text-cc-navy">{p.name}</h3>
              <div className="mt-1 text-[10.5px] font-semibold uppercase tracking-wider text-cc-mid-gray">
                {p.examples}
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-cc-dark-text">
                {p.thesis}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* COMPETITOR TABS */}
      <section className="mb-10">
        <SectionLead
          kicker="Competitor profiles"
          title="Strengths, weaknesses, and win conditions"
        >
          Select a competitor to see the full teardown.
        </SectionLead>
        <div className="mb-4 flex flex-wrap gap-2">
          {D6.competitors.map((c) => (
            <button
              key={c.name}
              type="button"
              onClick={() => setActiveName(c.name)}
              className={`rounded-md border px-3 py-1.5 text-[12px] font-bold transition ${
                c.name === activeName
                  ? 'border-cc-navy bg-cc-navy text-white'
                  : 'border-cc-border bg-white text-cc-dark-text hover:border-cc-navy/40'
              }`}
            >
              {c.name}
            </button>
          ))}
        </div>
        <CompetitorCard c={active} />
      </section>

      {/* WHITE SPACE */}
      <section className="mb-10">
        <SectionLead
          kicker="White space"
          title="Six gaps with confidence + product status"
        >
          What no competitor offers — ranked by confidence and mapped to product.
        </SectionLead>
        <div className="grid gap-3 md:grid-cols-2">
          {D6.whiteSpace.map((w) => (
            <div
              key={w.n}
              className="relative rounded-lg border border-cc-border bg-white p-4 shadow-sm"
            >
              <div className="mb-1 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cc-yellow text-[11px] font-bold text-cc-navy">
                    {w.n}
                  </span>
                  <h4 className="text-[14px] font-bold text-cc-navy">{w.name}</h4>
                </div>
              </div>
              <div className="mt-1 flex flex-wrap gap-1.5">
                <ConfidenceBadge value={w.confidence} />
                <StatusBadge value={w.status} />
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-cc-dark-text">
                {w.why}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* POSITIONING */}
      <section className="mb-10">
        <SectionLead
          kicker="Positioning"
          title="Three options — only one is recommended now"
        >
          Recommended option: {D6.positioning.recommended}.
        </SectionLead>
        <div className="grid gap-3 md:grid-cols-3">
          {D6.positioning.options.map((o) => (
            <div
              key={o.id}
              className={`flex flex-col rounded-lg border p-5 shadow-sm ${
                o.id === D6.positioning.recommended
                  ? 'border-cc-navy bg-cc-navy text-white'
                  : 'border-cc-border bg-white text-cc-dark-text'
              }`}
            >
              <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider">
                <span
                  className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${
                    o.id === D6.positioning.recommended
                      ? 'bg-cc-yellow text-cc-navy'
                      : 'bg-cc-navy text-cc-yellow'
                  }`}
                >
                  {o.id}
                </span>
                <span
                  className={
                    o.id === D6.positioning.recommended
                      ? 'text-cc-yellow'
                      : 'text-cc-mid-gray'
                  }
                >
                  {o.label}
                </span>
              </div>
              <div className="mt-2 text-[14px] font-bold leading-snug">
                &ldquo;{o.headline}&rdquo;
              </div>
              <div className="mt-3 text-[11.5px]">
                <span className="font-semibold">Use when · </span>
                {o.useWhen}
              </div>
              <div
                className={`mt-2 text-[11.5px] ${
                  o.id === D6.positioning.recommended
                    ? 'text-white/90'
                    : 'text-cc-mid-gray'
                }`}
              >
                <span className="font-semibold">Risk · </span>
                {o.risk}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* OBJECTIONS */}
      <section>
        <SectionLead
          kicker="Objection handling"
          title="Five likely pushbacks, each answered honestly"
        >
          Scripts grounded in primary evidence — not rhetoric.
        </SectionLead>
        <ol className="space-y-3">
          {D6.objections.map((o) => (
            <li
              key={o.n}
              className="rounded-lg border border-cc-border bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cc-navy text-sm font-bold text-cc-yellow">
                  {o.n}
                </span>
                <div className="min-w-0 flex-1">
                  <blockquote className="flex items-start gap-2 text-[13.5px] italic leading-snug text-cc-red">
                    <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0" />
                    &ldquo;{o.claim}&rdquo;
                  </blockquote>
                  <p className="mt-2 text-[13px] leading-relaxed text-cc-dark-text">
                    <span className="font-semibold text-cc-navy">Answer · </span>
                    {o.response}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </article>
  )
}

function CompetitorCard({ c }) {
  return (
    <div className="rounded-lg border border-cc-border bg-white shadow-sm">
      <div className="border-b border-cc-border p-5">
        <h3 className="text-xl font-bold text-cc-navy">{c.name}</h3>
        <div className="mt-2 grid gap-2 md:grid-cols-2">
          <InfoRow label="Primary market" value={c.primaryMarket} />
          <InfoRow label="Pricing" value={c.pricing} />
        </div>
      </div>
      <div className="grid gap-0 md:grid-cols-2">
        <div className="border-b border-cc-border p-5 md:border-b-0 md:border-r">
          <h4 className="mb-2 text-[10px] font-bold uppercase tracking-wider text-cc-green">
            Strengths
          </h4>
          <ul className="space-y-1.5 text-[12.5px] leading-relaxed text-cc-dark-text">
            {c.strengths.map((s, i) => (
              <li key={i} className="flex gap-2">
                <Check className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cc-green" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-5">
          <h4 className="mb-2 text-[10px] font-bold uppercase tracking-wider text-cc-red">
            Weaknesses
          </h4>
          <ul className="space-y-1.5 text-[12.5px] leading-relaxed text-cc-dark-text">
            {c.weaknesses.map((s, i) => (
              <li key={i} className="flex gap-2">
                <X className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cc-red" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-cc-border bg-cc-yellow-soft p-5">
        <div className="text-[10px] font-bold uppercase tracking-wider text-cc-amber">
          Win condition
        </div>
        <p className="mt-1 text-[13px] leading-relaxed text-cc-dark-text">
          {c.winCondition}
        </p>
      </div>
      {c.quote ? (
        <figure className="border-t border-cc-border bg-cc-navy p-5 text-white">
          <blockquote className="text-[13.5px] italic leading-snug">
            &ldquo;{c.quote}&rdquo;
          </blockquote>
        </figure>
      ) : null}
    </div>
  )
}

function ConfidenceBadge({ value }) {
  const s = value.toLowerCase()
  const cls = s.includes('strong')
    ? 'bg-cc-green text-white'
    : s.includes('emerging')
      ? 'bg-cc-amber text-white'
      : 'bg-cc-mid-gray text-white'
  return (
    <span
      className={`inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${cls}`}
    >
      {value}
    </span>
  )
}

function StatusBadge({ value }) {
  const s = value.toLowerCase()
  const cls = s.includes('fits')
    ? 'bg-cc-navy text-white'
    : s.includes('extends')
      ? 'bg-cc-amber text-white'
      : 'bg-cc-red/70 text-white'
  return (
    <span
      className={`inline-flex items-center rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${cls}`}
    >
      {value}
    </span>
  )
}

function InfoRow({ label, value }) {
  return (
    <div>
      <div className="text-[9.5px] font-bold uppercase tracking-wider text-cc-mid-gray">
        {label}
      </div>
      <div className="text-[12.5px] text-cc-dark-text">{value}</div>
    </div>
  )
}
