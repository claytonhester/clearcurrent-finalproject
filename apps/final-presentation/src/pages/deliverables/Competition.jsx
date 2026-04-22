import { useState } from 'react'
import { AlertTriangle, Check, X } from 'lucide-react'
import { DeliverableHero, SectionLead } from '../../components/shared/DeliverableHero.jsx'
import { PrintReport } from '../../components/shared/PrintReport.jsx'
import { PrintSectionOpener } from '../../components/print/PrintSectionOpener.jsx'
import { PrintExhibit } from '../../components/print/PrintExhibit.jsx'
import { PullQuote } from '../../components/print/PullQuote.jsx'
import { StatusGrid } from '../../components/print/charts/StatusGrid.jsx'
import { D6 } from '../../content/deliverables/d6-competition.js'
import { DELIVERABLES } from '../../navConfig.js'

const D6_META = DELIVERABLES.find((d) => d.id === 'competition')

export function Competition() {
  const [activeName, setActiveName] = useState(D6.competitors[0].name)
  const active = D6.competitors.find((c) => c.name === activeName) ?? D6.competitors[0]

  return (
    <PrintReport
      deliverable={D6_META}
      leadStatement={D6.marketStructure}
      tldrBullets={D6.tldrBullets}
      cover={{
        docNumber: 'D6',
        eyebrow: 'Competitive Intelligence Brief',
        actionTitle:
          'Three poles of competitors are buying distribution. Nobody is building the conversational bill-intelligence layer.',
        summary:
          'Enterprise ESMP, AI-native data infrastructure, and services outsourcers are each consolidating around custody and routing. The natural-language tariff and PUC layer is the open window.',
      }}
    >
    <article className="pb-16">
      <DeliverableHero
        tagline={D6.tagline}
        leadStatement={D6.marketStructure}
        tldrBullets={D6.tldrBullets}
      />

      {/* CAPABILITY MATRIX — print-only StatusGrid summarizing each pole vs
          the natural-language bill intelligence layer. */}
      <PrintCapabilityMatrixExhibit />

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

      {/* COMPETITOR TABS — interactive (screen). */}
      <section className="mb-10 print:hidden">
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

      {/* COMPETITOR PROFILES — print only. All competitors expanded,
          one per page so each profile gets its own clean page. */}
      <section className="hidden print:block mb-10">
        <SectionLead
          kicker="Competitor profiles"
          title="Strengths, weaknesses, and win conditions"
        >
          One profile per page. Strengths and weaknesses on top; win
          condition pulled out below.
        </SectionLead>
        {D6.competitors.map((c, i) => (
          <PrintCompetitorProfile
            key={c.name}
            c={c}
            breakBefore={i > 0}
          />
        ))}
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

      {/* PROMOTED MOMENT — print-only pull quote that names the
          channel-partner reality on incumbent ENGIE-class operators. */}
      <PullQuote attribution="Walt Taylor" role="Panda Restaurant Group">
        ENGIE has 20 years of our data. They are paid to find errors. They miss
        slow drift.
      </PullQuote>
    </article>
    </PrintReport>
  )
}

function PrintCapabilityMatrixExhibit() {
  // Capability vs. each pole. Status semantics:
  //   green  = pole has this capability today
  //   amber  = partial / marketing-only / in build
  //   red    = pole is structurally unable / unwilling to build it
  //   gold   = Clear Current's wedge
  const items = [
    {
      label: 'Enterprise ESMP (EnergyCAP, WatchWire, Schneider RA+)',
      status: 'amber',
      note: 'Custody and chargebacks are sticky; legacy UX still spreadsheet-era. AI is being added in marketing copy faster than in delivery.',
    },
    {
      label: 'AI-native data infra (Arcadia / Urjanet)',
      status: 'amber',
      note: 'Normalized bills + APIs for Fortune 500 procurement; no full conversational tariff intelligence or chargeback layer.',
    },
    {
      label: 'Services outsourcers (ENGIE Impact)',
      status: 'red',
      note: 'Software is a retention wrapper around human consulting. Client-facing AI cannibalizes the consulting line and is structurally avoided.',
    },
    {
      label: 'Silent incumbent (consultants + bill processors + spreadsheets)',
      status: 'navy',
      note: 'Real "today" baseline in most large portfolios. Custody pre-dates any SaaS logo.',
    },
    {
      label: 'Clear Current · natural-language bill + tariff intelligence',
      status: 'gold',
      note: 'Open seat: the conversational, AI-native layer no pole has built yet. Position as outside-the-meter truth complementary to BAS / HVAC analytics.',
    },
  ]

  return (
    <section className="hidden print:block mb-8">
      <PrintSectionOpener
        kicker="Capability matrix"
        title="The conversational bill-intelligence layer is the open seat"
        dek="Each row is a competitor pole or position; the marker shows whether they own the natural-language tariff and PUC layer today. Gold marks the seat Clear Current occupies."
      />
      <PrintExhibit
        number="1"
        caption="Competitor poles vs. natural-language bill intelligence"
        source="D6 Competitive Intelligence Brief · three-pole structure + leadership framing."
      >
        <StatusGrid columns={1} items={items} />
      </PrintExhibit>
    </section>
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

function PrintCompetitorProfile({ c, breakBefore }) {
  return (
    <div
      className={`print-keep ${breakBefore ? 'print-page-break' : ''}`}
      style={{ marginBottom: '14pt' }}
    >
      <h3 style={{ marginTop: 0, borderTop: 0, paddingTop: 0 }}>{c.name}</h3>

      <table
        className="print-data-table"
        style={{ tableLayout: 'fixed', margin: '2pt 0 6pt 0' }}
      >
        <colgroup>
          <col style={{ width: '20%' }} />
          <col style={{ width: '80%' }} />
        </colgroup>
        <tbody>
          <tr>
            <td className="label">Primary market</td>
            <td>{c.primaryMarket}</td>
          </tr>
          <tr>
            <td className="label">Pricing</td>
            <td>{c.pricing}</td>
          </tr>
        </tbody>
      </table>

      <div className="print-cols-2">
        <div className="print-keep">
          <h4>Strengths</h4>
          <ul style={{ listStyle: 'disc', paddingLeft: '14pt', margin: 0 }}>
            {c.strengths.map((s, i) => (
              <li key={i} style={{ fontSize: '8.75pt', lineHeight: 1.35 }}>
                {s}
              </li>
            ))}
          </ul>
        </div>
        <div className="print-keep">
          <h4>Weaknesses</h4>
          <ul style={{ listStyle: 'disc', paddingLeft: '14pt', margin: 0 }}>
            {c.weaknesses.map((s, i) => (
              <li key={i} style={{ fontSize: '8.75pt', lineHeight: 1.35 }}>
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="print-keep" style={{ marginTop: '6pt' }}>
        <h4>Win condition</h4>
        <p style={{ margin: 0 }}>{c.winCondition}</p>
      </div>

      {c.quote ? (
        <blockquote style={{ marginTop: '6pt' }}>&ldquo;{c.quote}&rdquo;</blockquote>
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
