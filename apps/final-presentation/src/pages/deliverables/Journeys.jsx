import { useState } from 'react'
import { ArrowRight } from 'lucide-react'
import {
  DeliverableHero,
  ProductTag,
  SectionLead,
} from '../../components/shared/DeliverableHero.jsx'
import { D3 } from '../../content/deliverables/d3-journeys.js'

export function Journeys() {
  const [activeId, setActiveId] = useState(D3.journeys[0].id)
  const active = D3.journeys.find((j) => j.id === activeId) ?? D3.journeys[0]

  return (
    <article className="pb-16">
      <DeliverableHero tagline={D3.tagline} leadStatement={D3.openingProblem} />

      {/* JOURNEY TABS */}
      <section className="mb-10">
        <SectionLead
          kicker="Select a journey"
          title="Five workflows, before and after Clear Current"
        >
          Each tab shows the reactive status quo vs the product intervention, with honest
          bounds.
        </SectionLead>
        <div className="mb-5 flex flex-wrap gap-2">
          {D3.journeys.map((j) => (
            <button
              key={j.id}
              type="button"
              onClick={() => setActiveId(j.id)}
              className={`rounded-md border px-3 py-1.5 text-left text-[12px] font-semibold transition ${
                j.id === activeId
                  ? 'border-cc-navy bg-cc-navy text-white'
                  : 'border-cc-border bg-white text-cc-dark-text hover:bg-cc-light-gray'
              }`}
            >
              <span className="block text-[10px] uppercase tracking-wider opacity-60">
                {j.id.toUpperCase()}
              </span>
              {j.name}
            </button>
          ))}
        </div>
        <JourneyDetail journey={active} />
      </section>

      {/* CROSS-MAP FINDINGS */}
      <section className="mb-10">
        <SectionLead
          kicker="What we saw everywhere"
          title="Patterns that cut across all five journeys"
        >
          These are the structural realities product must solve — not the details of any
          one map.
        </SectionLead>
        <ol className="grid gap-3 md:grid-cols-2">
          {D3.crossMapFindings.map((f, i) => (
            <li
              key={i}
              className="flex gap-3 rounded-lg border border-cc-border bg-white p-4 text-[12.5px] leading-relaxed text-cc-dark-text shadow-sm"
            >
              <span className="inline-flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-cc-yellow text-[11px] font-bold text-cc-navy">
                {i + 1}
              </span>
              <span>{f}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* HONESTY */}
      <section>
        <SectionLead
          kicker="Product honesty"
          title="What ships now, what's roadmap, and what won't be claimed"
        >
          The boundaries investors and customers can rely on — no autonomous-resolution
          theater.
        </SectionLead>
        <div className="rounded-lg border border-cc-navy bg-cc-navy p-5 text-white">
          <ul className="space-y-3">
            {D3.productHonesty.map((p, i) => (
              <li key={i} className="flex gap-3 text-[13px] leading-relaxed">
                <span className="text-cc-yellow">▸</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  )
}

function JourneyDetail({ journey }) {
  return (
    <div className="rounded-lg border border-cc-border bg-white shadow-sm">
      {/* HEADER */}
      <div className="border-b border-cc-border p-5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-cc-mid-gray">
              {journey.id}
            </span>
            <ProductTag tag={journey.productTag} />
          </div>
        </div>
        <h3 className="mt-2 text-xl font-bold text-cc-navy">{journey.name}</h3>
        <div className="mt-2 grid gap-2 text-[12.5px] md:grid-cols-2">
          <InfoRow label="Persona" value={journey.persona} />
          <InfoRow label="Archetype interviews" value={journey.personaArchetype} />
          <InfoRow label="Trigger" value={journey.trigger} colSpan={2} />
        </div>
      </div>

      {/* SWIM LANES */}
      <div className="grid gap-0 md:grid-cols-2">
        {/* WITHOUT */}
        <div className="border-b border-cc-border p-5 md:border-b-0 md:border-r">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cc-red" />
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-cc-red">
              Today — without Clear Current
            </h4>
          </div>
          <div className="space-y-3">
            {journey.stagesWithoutCC.map((s, i) => (
              <div
                key={i}
                className="relative rounded border-l-2 border-cc-red/50 bg-cc-red/5 p-3"
              >
                <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-cc-red">
                  {i + 1}. {s.name}
                </div>
                <p className="text-[12.5px] leading-relaxed text-cc-dark-text">
                  {s.summary}
                </p>
                <p className="mt-1.5 text-[11.5px] italic leading-relaxed text-cc-mid-gray">
                  Pain · {s.painPoint}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {journey.emotionalArcWithout.map((e, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-[10px] font-semibold"
              >
                <span className="rounded-full bg-cc-red/10 px-2 py-0.5 text-cc-red">
                  {e}
                </span>
                {i < journey.emotionalArcWithout.length - 1 ? (
                  <ArrowRight className="h-3 w-3 text-cc-mid-gray" />
                ) : null}
              </span>
            ))}
          </div>
        </div>

        {/* WITH */}
        <div className="p-5">
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cc-green" />
            <h4 className="text-[13px] font-bold uppercase tracking-wider text-cc-green">
              With Clear Current
            </h4>
          </div>
          <div className="space-y-3">
            {journey.stagesWithCC.map((s, i) => (
              <div
                key={i}
                className="rounded border-l-2 border-cc-green/50 bg-cc-green/5 p-3"
              >
                <div className="mb-1 text-[10px] font-bold uppercase tracking-wider text-cc-green">
                  {s.name}
                </div>
                <p className="text-[12.5px] leading-relaxed text-cc-dark-text">
                  <span className="font-semibold">Capability · </span>
                  {s.capability}
                </p>
                <p className="mt-2 text-[11.5px] italic leading-relaxed text-cc-mid-gray">
                  <span className="font-semibold not-italic text-cc-amber">
                    Honest bounds ·{' '}
                  </span>
                  {s.bounds}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {journey.emotionalArcWith.map((e, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1 text-[10px] font-semibold"
              >
                <span className="rounded-full bg-cc-green/10 px-2 py-0.5 text-cc-green">
                  {e}
                </span>
                {i < journey.emotionalArcWith.length - 1 ? (
                  <ArrowRight className="h-3 w-3 text-cc-mid-gray" />
                ) : null}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function InfoRow({ label, value, colSpan }) {
  return (
    <div className={colSpan === 2 ? 'md:col-span-2' : ''}>
      <div className="text-[9.5px] font-bold uppercase tracking-wider text-cc-mid-gray">
        {label}
      </div>
      <div className="text-cc-dark-text">{value}</div>
    </div>
  )
}
