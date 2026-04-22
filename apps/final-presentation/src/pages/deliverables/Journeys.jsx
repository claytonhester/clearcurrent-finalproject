import { useEffect, useState } from 'react'
import { ArrowRight, Quote, X } from 'lucide-react'
import {
  DeliverableHero,
  ProductTag,
  SectionLead,
} from '../../components/shared/DeliverableHero.jsx'
import { PrintReport } from '../../components/shared/PrintReport.jsx'
import { PrintSectionOpener } from '../../components/print/PrintSectionOpener.jsx'
import { PrintExhibit } from '../../components/print/PrintExhibit.jsx'
import { PullQuote } from '../../components/print/PullQuote.jsx'
import { JourneySwimlane } from '../../components/print/charts/JourneySwimlane.jsx'
import { D3 } from '../../content/deliverables/d3-journeys.js'
import { DELIVERABLES } from '../../navConfig.js'

const D3_META = DELIVERABLES.find((d) => d.id === 'journeys')

export function Journeys() {
  const [activeId, setActiveId] = useState(D3.journeys[0].id)
  const active = D3.journeys.find((j) => j.id === activeId) ?? D3.journeys[0]

  return (
    <PrintReport
      deliverable={D3_META}
      leadStatement={D3.openingProblem}
      tldrBullets={D3.tldrBullets}
      cover={{
        docNumber: 'D3',
        eyebrow: 'Customer Journey Maps',
        actionTitle:
          'Status quo is reactive, expert-heavy, and politically slow. Clear Current is spot-and-assist, never autonomous resolution.',
        summary:
          'Six interview-grounded journeys compare today\u2019s workflow to the Clear Current intervention, with honest bounds on what ships now and what does not.',
      }}
    >
    <article className="pb-16">
      <DeliverableHero
        tagline={D3.tagline}
        leadStatement={D3.openingProblem}
        tldrBullets={D3.tldrBullets}
      />

      {/* SIGNATURE JOURNEY — print-only editorial swimlane. The detailed
          per-journey print pages remain below; this exhibit promotes the
          monthly bill review journey to the front because every other journey
          inherits its structure. */}
      <PrintSignatureJourneyExhibit journey={D3.journeys[0]} />

      {/* JOURNEY TABS — screen */}
      <section className="mb-10 print:hidden">
        <SectionLead
          kicker="Select a journey"
          title="Six workflows, before and after Clear Current"
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

      {/* JOURNEY TABS — print: every journey expanded, one per page */}
      <section className="hidden print:block mb-10">
        <SectionLead
          kicker="All six journeys"
          title="Each workflow before and after Clear Current"
        >
          Reactive status quo vs the product intervention, with honest bounds — one
          journey per spread.
        </SectionLead>
        {D3.journeys.map((j, i) => (
          <div
            key={j.id}
            className={i === 0 ? 'mb-8' : 'mb-8 print-break-before'}
          >
            <JourneyDetail journey={j} />
          </div>
        ))}
      </section>

      {/* CROSS-MAP FINDINGS */}
      <section className="mb-10">
        <SectionLead
          kicker="What we saw everywhere"
          title="Patterns that cut across all six journeys"
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

      {/* PROMOTED MOMENT — print-only pull quote that anchors the
          spot-and-assist posture in the buyer's own words. */}
      <PullQuote attribution="Texas State University" role="Andee Chamberlain">
        We had a weird multiplier happen in one of our bills. They listed
        35,000 gallons instead of 3,500&nbsp;&mdash; a 10&times; error in a pattern that
        should have been obvious.
      </PullQuote>

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
    </PrintReport>
  )
}

function PrintSignatureJourneyExhibit({ journey }) {
  if (!journey) return null

  // Map the without/with stages onto the swimlane columns. We keep the
  // names short for column headers; the body text comes from the stage
  // summary (status quo) and capability (with CC).
  const stages = journey.stagesWithoutCC.map((s) => s.name)
  const statusQuo = journey.stagesWithoutCC.map((s) => s.painPoint || s.summary)
  const withCC = journey.stagesWithCC.map(
    (s) => s.bounds || s.capability || ''
  )
  // Pad the With-CC row to match column count (the with-CC list is often a
  // single consolidated capability; we anchor it under "Investigation").
  const padded = stages.map((_, i) => withCC[i] || withCC[0] || '')

  return (
    <section className="hidden print:block mb-8">
      <PrintSectionOpener
        kicker="Signature journey"
        title="Monthly bill review · before and after Clear Current"
        dek="Status quo is multi-system, expert-heavy, and politically slow. The intervention is a single ranked surface that turns each invoice into an assisted decision, not an autonomous resolution."
      />
      <PrintExhibit
        number="1"
        caption="Monthly bill review · status quo vs. with Clear Current"
        source="D3 Customer Journey Maps · Journey J1 (Texas State, Houston Methodist, AdventHealth, Medxcel, Bon Secours, Panda, Hyatt)."
      >
        <JourneySwimlane
          stages={stages}
          statusQuo={statusQuo}
          withCC={padded}
          bounds="Clear Current does not autonomously file disputes or guarantee credits. Resolution timeline and utility dynamics stay human."
        />
      </PrintExhibit>
    </section>
  )
}

function JourneyDetail({ journey }) {
  return (
    <div className="rounded-lg border border-cc-border bg-white shadow-sm">
      {/* HEADER */}
      <div className="border-b border-cc-border p-5">
        <div className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2">
          <div className="flex min-w-0 items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-wider text-cc-mid-gray">
              {journey.id}
            </span>
            <ProductTag tag={journey.productTag} />
          </div>
          <span className="print:hidden">
            <JourneyEvidenceLauncher journey={journey} />
          </span>
        </div>
        <h3 className="mt-2 text-xl font-bold text-cc-navy">{journey.name}</h3>
        <div className="mt-2 grid gap-2 text-[12.5px] md:grid-cols-2">
          <InfoRow label="Persona" value={journey.persona} />
          <InfoRow label="Archetype organizations" value={journey.personaArchetype} />
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
      <div className="break-words text-cc-dark-text">{value}</div>
    </div>
  )
}

function JourneyEvidenceLauncher({ journey }) {
  const [open, setOpen] = useState(false)
  const quotes = journey.evidenceQuotes ?? []

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  if (!quotes.length) return null

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-cc-navy bg-cc-navy px-2.5 py-1.5 text-[11px] font-semibold text-white shadow-sm transition hover:bg-cc-navy/90 sm:gap-2 sm:px-3 sm:text-[12px]"
      >
        <Quote className="h-3 w-3 sm:h-3.5 sm:w-3.5" aria-hidden />
        Interview evidence ({quotes.length} quotes)
      </button>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-end justify-center bg-black/45 p-0 sm:items-center sm:p-4"
          role="presentation"
          onClick={() => setOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`evidence-title-${journey.id}`}
            className="flex max-h-[min(90vh,720px)] w-full max-w-2xl flex-col rounded-t-lg border border-cc-border bg-white shadow-xl sm:rounded-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-3 border-b border-cc-border px-4 py-3">
              <div>
                <h4
                  id={`evidence-title-${journey.id}`}
                  className="text-[14px] font-bold text-cc-navy"
                >
                  Evidence — {journey.name}
                </h4>
                <p className="mt-0.5 text-[11px] text-cc-mid-gray">
                  {journey.id.toUpperCase()} · {quotes.length} quotes
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="rounded-md p-1 text-cc-mid-gray hover:bg-cc-light-gray hover:text-cc-navy"
                aria-label="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="overflow-y-auto px-4 py-3">
              <ol className="flex flex-col gap-4">
                {quotes.map((q, i) => (
                  <li key={i} className="rounded-md border border-cc-border bg-cc-light-gray/40 p-3">
                    <div className="mb-1.5 text-[10px] font-bold uppercase tracking-wider text-cc-navy">
                      {q.organization}
                    </div>
                    <blockquote className="border-l-2 border-cc-yellow pl-2.5 text-[12.5px] italic leading-relaxed text-cc-dark-text">
                      &ldquo;{q.quote}&rdquo;
                    </blockquote>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}
