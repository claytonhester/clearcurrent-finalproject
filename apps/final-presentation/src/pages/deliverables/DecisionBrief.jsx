import { AlertTriangle, CheckCircle2, HelpCircle, Target } from 'lucide-react'
import { DeliverableHero, SectionLead } from '../../components/shared/DeliverableHero.jsx'
import { PrintReport } from '../../components/shared/PrintReport.jsx'
import { PrintSectionOpener } from '../../components/print/PrintSectionOpener.jsx'
import { PrintExhibit } from '../../components/print/PrintExhibit.jsx'
import { PullQuote } from '../../components/print/PullQuote.jsx'
import { StatusGrid } from '../../components/print/charts/StatusGrid.jsx'
import { BRIEF } from '../../content/deliverables/brief.js'
import { DELIVERABLES } from '../../navConfig.js'

const D0 = DELIVERABLES.find((d) => d.id === 'brief')

export function DecisionBrief() {
  return (
    <PrintReport
      deliverable={D0}
      leadStatement={BRIEF.leadStatement}
      tldrBullets={BRIEF.tldrBullets}
      cover={{
        docNumber: 'D0',
        eyebrow: 'Decision Brief',
        actionTitle:
          'Higher ed first. Regulatory intel as the first engineering wedge. One documented dollar of recovery before May.',
        summary:
          'A two-page CEO/CPO read of what the research aligned on, what is still open, and what changes if any of the calls is wrong.',
      }}
    >
    <article className="pb-16">
      <DeliverableHero
        tagline={BRIEF.tagline}
        leadStatement={BRIEF.leadStatement}
        tldrBullets={BRIEF.tldrBullets}
        showMeta
        meta={[
          { label: 'Proofs', value: `${BRIEF.proofs.length}` },
          { label: 'Open questions', value: `${BRIEF.openQuestions.length}` },
          { label: 'Strategic calls', value: '3' },
        ]}
      />

      {/* THREE STRATEGIC CALLS */}
      <section className="mb-12">
        <div className="grid gap-4 md:grid-cols-3">
          <CallCard
            label="Beachhead"
            headline="Higher education"
            bullets={BRIEF.strategicDecisions.beachhead}
            accent="bg-cc-yellow"
          />
          <CallCard
            label="Build this first"
            headline="Regulatory intel in Rate Analyst"
            bullets={BRIEF.strategicDecisions.firstModule}
            accent="bg-cc-green"
          />
          <CallCard
            label="Marketing"
            headline={BRIEF.strategicDecisions.marketingHeadline}
            bullets={BRIEF.strategicDecisions.marketing}
            accent="bg-cc-navy"
          />
        </div>
      </section>

      {/* FIVE PROOFS */}
      <section className="mb-12">
        <SectionLead kicker="Five proofs" title="What research independently confirmed">
          Each proof is triangulated across primary interviews and secondary enforcement /
          market data.
        </SectionLead>
        <ol className="space-y-4">
          {BRIEF.proofs.map((p) => (
            <li
              key={p.n}
              className="rounded-lg border border-cc-border bg-white p-5 shadow-sm"
            >
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-cc-navy text-sm font-bold text-cc-yellow">
                  {p.n}
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h3 className="text-base font-bold text-cc-navy">{p.headline}</h3>
                    <CheckCircle2 className="h-4 w-4 text-cc-green" />
                  </div>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-cc-dark-text">
                    {p.oneLiner}
                  </p>
                  <p className="mt-2 text-[12px] leading-relaxed text-cc-mid-gray">
                    <span className="font-semibold uppercase tracking-wider text-cc-navy">
                      Evidence ·{' '}
                    </span>
                    {p.evidence}
                  </p>
                  {p.quote ? (
                    <figure className="mt-3 border-l-2 border-cc-yellow bg-cc-yellow-soft/40 px-3 py-2">
                      <blockquote className="text-[13px] italic leading-snug text-cc-dark-text">
                        &ldquo;{p.quote}&rdquo;
                      </blockquote>
                      <figcaption className="mt-1 text-[11px] font-semibold text-cc-mid-gray">
                        — {p.speaker}
                      </figcaption>
                    </figure>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* OPEN QUESTIONS */}
      <section className="mb-12">
        <SectionLead
          kicker="Three open questions"
          title="What research cannot resolve — must close before May"
        >
          Each question has a scoped experiment or conversation that can close it in under
          30 days.
        </SectionLead>
        <div className="grid gap-4 md:grid-cols-3">
          {BRIEF.openQuestions.map((q) => (
            <div
              key={q.n}
              className="relative flex flex-col rounded-lg border border-dashed border-cc-amber bg-cc-yellow-soft/30 p-4"
            >
              <div className="mb-2 flex items-center gap-2">
                <HelpCircle className="h-4 w-4 text-cc-amber" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-cc-amber">
                  Open Q{q.n}
                </span>
              </div>
              <h3 className="text-[14px] font-bold leading-snug text-cc-navy">
                {q.headline}
              </h3>
              <p className="mt-2 text-[12.5px] leading-relaxed text-cc-dark-text">
                <span className="font-semibold">Why it matters · </span>
                {q.why}
              </p>
              <p className="mt-2 text-[12.5px] leading-relaxed text-cc-dark-text">
                <span className="font-semibold">How to close · </span>
                {q.howToClose}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT CHANGES IF WRONG */}
      <section className="mb-12">
        <SectionLead
          kicker="Risk register"
          title="What changes if any of these calls is wrong"
        >
          Every strategic call has a contingency plan. Not commitment without optionality.
        </SectionLead>
        <ul className="space-y-2">
          {BRIEF.whatChangesIfWrong.map((w, i) => (
            <li
              key={i}
              className="flex gap-3 rounded border-l-4 border-cc-navy bg-white px-4 py-3 text-[13px] leading-relaxed text-cc-dark-text shadow-sm"
            >
              <Target className="mt-0.5 h-4 w-4 flex-shrink-0 text-cc-navy" />
              <span>{w}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* DECISION SURFACE — print only. Single editorial exhibit that
          consolidates the five proofs, three open questions, and contingency
          risks into one at-a-glance status grid. */}
      <section className="hidden print:block mb-10">
        <PrintSectionOpener
          kicker="Decision surface"
          title="What we know, what is still open, and what shifts the calls"
          dek="Green = research independently confirmed. Amber = open question to close before May. Navy = contingency to monitor."
        />
        <PrintExhibit
          number="1"
          caption="Decision surface · proofs, open questions, contingency risks"
          source="Synthesis of D0 Decision Brief: five proofs, three open questions, four contingency risks."
        >
          <StatusGrid
            columns={2}
            items={[
              ...BRIEF.proofs.map((p) => ({
                status: 'green',
                label: `Proof ${p.n} · ${p.headline}`,
                note: p.oneLiner,
              })),
              ...BRIEF.openQuestions.map((q) => ({
                status: 'amber',
                label: `Open Q${q.n} · ${q.headline}`,
                note: q.howToClose,
              })),
              ...BRIEF.whatChangesIfWrong.map((w, i) => ({
                status: 'navy',
                label: `Contingency ${i + 1}`,
                note: w,
              })),
            ]}
          />
        </PrintExhibit>
      </section>

      {/* PROMOTED MOMENT — print-only pull quote. Frames why regulatory
          intelligence is the first engineering wedge. */}
      <PullQuote
        attribution="Phil Combs"
        role="Trane Technologies"
      >
        The regulatory intelligence piece is super powerful. I don&rsquo;t know
        anything else that does that.
      </PullQuote>

      {/* CAVEATS */}
      <section>
        <SectionLead kicker="Editorial policy" title="What we will not say and why">
          Claims excluded from the portal so every number survives scrutiny.
        </SectionLead>
        <div className="rounded-lg border border-cc-red/30 bg-cc-red/5 p-5">
          <ul className="space-y-3">
            {BRIEF.calloutCaveats.map((c, i) => (
              <li
                key={i}
                className="flex gap-3 text-[12.5px] leading-relaxed text-cc-dark-text"
              >
                <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cc-red" />
                <span>{c}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
    </PrintReport>
  )
}

function CallCard({ label, headline, bullets, accent }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-cc-border bg-white p-5 shadow-sm">
      <div className={`absolute left-0 top-0 h-full w-1 ${accent}`} />
      <div className="text-[10px] font-bold uppercase tracking-widest text-cc-mid-gray">
        {label}
      </div>
      <div className="mt-1 text-[17px] font-bold leading-tight text-cc-navy">
        {headline}
      </div>
      <ul className="mt-3 list-disc space-y-2 pl-4 text-[12.5px] leading-relaxed text-cc-dark-text marker:text-cc-navy">
        {bullets.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  )
}
