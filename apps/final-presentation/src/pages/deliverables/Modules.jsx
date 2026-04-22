import { useState } from 'react'
import { Bot, CheckCircle2, ChevronDown, MessageSquare, XCircle, Zap } from 'lucide-react'
import {
  DeliverableHero,
  ProductTag,
  SectionLead,
} from '../../components/shared/DeliverableHero.jsx'
import { PrintReport } from '../../components/shared/PrintReport.jsx'
import { PrintSectionOpener } from '../../components/print/PrintSectionOpener.jsx'
import { PrintExhibit } from '../../components/print/PrintExhibit.jsx'
import { PullQuote } from '../../components/print/PullQuote.jsx'
import { MilestoneTimeline } from '../../components/print/charts/MilestoneTimeline.jsx'
import { StatusGrid } from '../../components/print/charts/StatusGrid.jsx'
import { D4 } from '../../content/deliverables/d4-modules.js'
import { DELIVERABLES } from '../../navConfig.js'
import { formatInlineBold } from '../../utils/formatInlineBold.jsx'

const D4_META = DELIVERABLES.find((d) => d.id === 'modules')

const PHASE_COLORS = {
  'Phase 1': 'bg-cc-green text-white',
  'Phase 1.5': 'bg-cc-amber text-white',
  'Phase 2': 'bg-cc-navy text-white',
  'Phase 3': 'bg-cc-yellow text-cc-navy',
}

export function Modules() {
  const [activeId, setActiveId] = useState(D4.modules[0].id)
  const [buyerAlertsOpen, setBuyerAlertsOpen] = useState(false)
  const active = D4.modules.find((m) => m.id === activeId) ?? D4.modules[0]

  return (
    <PrintReport
      deliverable={D4_META}
      leadStatement={D4.ceoScan}
      tldrBullets={D4.tldrBullets}
      cover={{
        docNumber: 'D4',
        eyebrow: 'Product Module Recommendations',
        actionTitle:
          'Five build tracks. Site & coverage integrity is now its own product, not a footnote.',
        summary:
          'Phased product roadmap derived from the interview base. Phase 1 ships coverage truth and push anomalies; Phase 1.5 unifies tariff intelligence; Phase 2 lands regulatory and chargeback; Phase 3 is natural-language access on top of the same outputs.',
      }}
    >
    <article className="pb-16">
      <DeliverableHero
        tagline={D4.tagline}
        leadStatement={D4.ceoScan}
        tldrBullets={D4.tldrBullets}
      />

      {/* PRINT-ONLY ROADMAP — phased build sequence as an editorial timeline,
          followed by a status grid that names what's missing today vs what
          ships in Phase 1. */}
      <PrintModulesRoadmapExhibit />

      <section className="decision-strip mb-10 rounded-sm">
        <button
          type="button"
          id="buyer-alerts-trigger"
          aria-expanded={buyerAlertsOpen}
          aria-controls="buyer-alerts-panel"
          onClick={() => setBuyerAlertsOpen((open) => !open)}
          className="flex w-full items-start justify-between gap-3 rounded-sm text-left text-cc-navy outline-none focus-visible:ring-2 focus-visible:ring-cc-navy focus-visible:ring-offset-2"
        >
          <span className="text-[10px] font-bold uppercase tracking-wider">
            What buyers expect to see alerted
          </span>
          <ChevronDown
            className={`mt-0.5 h-4 w-4 flex-shrink-0 text-cc-navy transition-transform duration-200 ${
              buyerAlertsOpen ? 'rotate-180' : ''
            }`}
            aria-hidden
          />
        </button>
        {buyerAlertsOpen ? (
          <ul
            id="buyer-alerts-panel"
            role="region"
            aria-labelledby="buyer-alerts-trigger"
            className="mt-2 list-disc space-y-2 pl-5 text-[13px] leading-relaxed text-cc-navy marker:text-cc-navy"
          >
            {D4.buyerNamedAlerts.map((line, i) => (
              <li key={i}>{formatInlineBold(line)}</li>
            ))}
          </ul>
        ) : null}
      </section>

      {/* BUILD SEQUENCE */}
      <section className="mb-10">
        <SectionLead kicker="Build sequence" title="Four phases, five modules">
          Phases 1–2 ship concrete capabilities; Phase 3 is the access layer —
          natural-language conversational access to the same insights (Rate Analyst +
          MCP→SQL), without replacing push alerts or module depth.
        </SectionLead>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {D4.buildSequence.map((p) => (
            <div
              key={p.phase}
              className={`flex flex-col rounded-lg border bg-white p-5 shadow-sm ${
                p.phase === 'Phase 3'
                  ? 'border-cc-yellow ring-1 ring-cc-yellow/50'
                  : 'border-cc-border'
              }`}
            >
              <span
                className={`inline-flex w-fit rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  PHASE_COLORS[p.phase] ?? 'bg-cc-navy text-white'
                }`}
              >
                {p.phase}
                {p.phase === 'Phase 3' ? ' · Natural language' : ''}
              </span>
              {p.modules?.length ? (
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.modules.map((mid) => {
                    const m = D4.modules.find((x) => x.id === mid)
                    if (!m) return null
                    return (
                      <button
                        type="button"
                        key={mid}
                        onClick={() => setActiveId(mid)}
                        className="rounded-md border border-cc-navy bg-cc-navy/5 px-2 py-1 text-[11px] font-bold text-cc-navy hover:bg-cc-navy hover:text-white"
                      >
                        {m.name}
                      </button>
                    )
                  })}
                </div>
              ) : (
                <p className="mt-3 text-[11px] font-semibold leading-snug text-cc-navy">
                  Access layer only — natural language across all five modules.
                </p>
              )}
              <p className="mt-3 text-[12px] leading-relaxed text-cc-mid-gray">
                {formatInlineBold(p.why)}
              </p>
              {Array.isArray(p.bullets) && p.bullets.length > 0 ? (
                <ul className="mt-3 list-disc space-y-1.5 border-t border-cc-border/80 pt-3 pl-4 text-[11px] leading-relaxed text-cc-dark-text marker:text-cc-navy">
                  {p.bullets.map((line, i) => (
                    <li key={i}>{formatInlineBold(line)}</li>
                  ))}
                </ul>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* RANKED MODULE CARDS — interactive (screen). */}
      <section className="mb-10 print:hidden">
        <SectionLead
          kicker="Five modules, ranked"
          title="What to build next — on the current engine"
        >
          Priority rank by buyer pull × build feasibility × moat. Each module extends
          surfaces leadership already maintains — it does not replace them. Click any
          card to expand.
        </SectionLead>
        <div className="mb-5 grid gap-3 md:grid-cols-5">
          {D4.modules
            .slice()
            .sort((a, b) => a.rank - b.rank)
            .map((m) => (
              <button
                key={m.id}
                type="button"
                onClick={() => setActiveId(m.id)}
                className={`flex flex-col items-start rounded-lg border p-3 text-left transition ${
                  m.id === activeId
                    ? 'border-cc-navy bg-cc-navy text-white shadow-md'
                    : 'border-cc-border bg-white text-cc-dark-text hover:border-cc-navy/40'
                }`}
              >
                <div className="flex w-full items-center justify-between">
                  <span
                    className={`inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-bold ${
                      m.id === activeId
                        ? 'bg-cc-yellow text-cc-navy'
                        : 'bg-cc-navy text-cc-yellow'
                    }`}
                  >
                    {m.rank}
                  </span>
                  <span
                    className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${
                      PHASE_COLORS[m.phase] ?? ''
                    }`}
                  >
                    {m.phase}
                  </span>
                </div>
                <div className="mt-2 text-[12.5px] font-bold leading-snug">{m.name}</div>
                <div
                  className={`mt-1 text-[10.5px] leading-snug ${
                    m.id === activeId ? 'text-white/70' : 'text-cc-mid-gray'
                  }`}
                >
                  {formatInlineBold(
                    m.oneLiner,
                    m.id === activeId
                      ? 'font-semibold text-cc-yellow'
                      : 'font-semibold text-cc-navy',
                  )}
                </div>
              </button>
            ))}
        </div>
        <ModuleDetail module={active} />
      </section>

      {/* RANKED MODULES — print only. All five modules in priority order,
          each on its own page so headers always sit at top. */}
      <section className="hidden print:block mb-10">
        <SectionLead
          kicker="Five modules, ranked"
          title="What to build next — on the current engine"
        >
          Modules in priority rank order. Each profile fits one page.
        </SectionLead>
        {D4.modules
          .slice()
          .sort((a, b) => a.rank - b.rank)
          .map((m, i) => (
            <PrintModuleProfile
              key={m.id}
              module={m}
              breakBefore={i > 0}
            />
          ))}
      </section>

      <section className="mb-10">
        <SectionLead
          kicker="Maturity snapshot"
          title="Where the CC Engine is today vs. Phase 3"
        >
          Skim <span className="font-semibold text-cc-navy">Today</span> for context; the
          right column is what Phase 3 still has to close for buyers.
        </SectionLead>
        <div className="overflow-x-auto rounded-lg border border-cc-border bg-white shadow-sm">
          <table className="min-w-full text-left">
            <caption className="sr-only">
              Maturity snapshot: capability, brief today status, Phase 3 gap to close
            </caption>
            <thead>
              <tr className="border-b border-cc-border text-[10px] font-bold uppercase tracking-wider">
                <th className="bg-cc-light-gray/50 px-4 py-3 text-cc-navy">Capability</th>
                <th className="bg-cc-light-gray/50 px-4 py-3 font-semibold text-cc-mid-gray">
                  Today
                </th>
                <th className="border-l-4 border-cc-yellow bg-cc-yellow-soft px-4 py-3 text-cc-navy">
                  Phase 3 gap
                </th>
              </tr>
            </thead>
            <tbody>
              {D4.maturitySnapshot.map((row) => (
                <tr key={row.capability} className="border-b border-cc-border/80">
                  <td className="px-4 py-3 text-[12px] font-semibold text-cc-navy">
                    {row.capability}
                  </td>
                  <td className="px-4 py-3 text-[11px] leading-snug text-cc-mid-gray">
                    {row.today}
                  </td>
                  <td className="border-l-4 border-cc-yellow bg-cc-yellow-soft/60 px-4 py-3 text-[11px] leading-snug text-cc-navy">
                    {row.gap}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PROMOTED MOMENT — print-only pull quote that captures the CEO scan
          insight: coverage truth must come before analytics. */}
      <PullQuote attribution="AdventHealth" role="customer interview">
        Bills are not always matching the addresses of our sites. Bills for one
        hospital campus are being paid by another.
      </PullQuote>

      {/* PRIORITY RATIONALE */}
      <section className="mb-10">
        <SectionLead kicker="Rationale" title="Why this order and not another">
          The tradeoff between land speed, build cost, and long-term moat.
        </SectionLead>
        <ol className="space-y-2">
          {D4.priorityRationale.map((r, i) => (
            <li
              key={i}
              className="flex gap-3 rounded border-l-4 border-cc-yellow bg-white px-4 py-3 text-[13px] leading-relaxed text-cc-dark-text shadow-sm"
            >
              <span className="flex-shrink-0 font-mono text-[11px] font-bold text-cc-mid-gray">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{formatInlineBold(r)}</span>
            </li>
          ))}
        </ol>
      </section>
    </article>
    </PrintReport>
  )
}

function PrintModulesRoadmapExhibit() {
  // Map the 4-phase build sequence into a horizontal timeline. The active
  // phase = Phase 1 (where we are today; coverage + push anomalies).
  const phaseTitles = {
    'Phase 1': 'Coverage truth + push anomalies',
    'Phase 1.5': 'Tariff intelligence (one shipment)',
    'Phase 2': 'Regulatory + chargeback (moat)',
    'Phase 3': 'Natural-language access layer',
  }
  const phases = D4.buildSequence.map((p) => {
    const moduleNames = (p.modules || [])
      .map((id) => D4.modules.find((m) => m.id === id)?.name)
      .filter(Boolean)
    const milestones = moduleNames.length
      ? moduleNames
      : ['Plain-language Rate Analyst across all five modules.']
    return {
      label: p.phase,
      title: phaseTitles[p.phase] || '',
      milestones,
      active: p.phase === 'Phase 1',
    }
  })

  // Five-module status pulse: maturity gap today vs Phase 1 target.
  const ranks = [...D4.modules].sort((a, b) => (a.rank || 0) - (b.rank || 0))
  const statusByPhase = {
    'Phase 1': 'amber',
    'Phase 1.5': 'navy',
    'Phase 2': 'navy',
    'Phase 3': 'navy',
  }
  const statusItems = ranks.map((m) => ({
    label: `Rank ${m.rank} · ${m.name}`,
    status: statusByPhase[m.phase] || 'navy',
    note: `${m.phase} · ${stripBoldMarkers(m.oneLiner)}`,
  }))

  return (
    <section className="hidden print:block mb-8">
      <PrintSectionOpener
        kicker="Phased build sequence"
        title="Coverage truth ships first; tariff and moat layers stack behind it"
        dek="The roadmap stages five modules across four phases. Phase 1 is where the team is now; everything downstream depends on the coverage and signal quality that lands here."
      />
      <PrintExhibit
        number="1"
        caption="Build sequence · five modules across four phases"
        source="D4 Product Module Recommendations · build sequence + module ranking."
      >
        <MilestoneTimeline phases={phases} />
      </PrintExhibit>

      <PrintExhibit
        number="2"
        caption="Module pulse · which phase carries each ranked module"
        source="D4 Product Module Recommendations · module roster (rank order)."
      >
        <StatusGrid columns={1} items={statusItems} />
      </PrintExhibit>
    </section>
  )
}

function ModuleDetail({ module: m }) {
  return (
    <div className="rounded-lg border border-cc-border bg-white shadow-sm">
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-cc-border p-5">
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-cc-mid-gray">
            <span
              className={`rounded px-1.5 py-0.5 text-white ${PHASE_COLORS[m.phase] ?? 'bg-cc-navy'}`}
            >
              {m.phase}
            </span>
            <span>Rank #{m.rank}</span>
            <ProductTag tag={m.productTag} />
          </div>
          <h3 className="mt-1 text-xl font-bold text-cc-navy">{m.name}</h3>
          <p className="mt-1 text-[13px] text-cc-dark-text">{formatInlineBold(m.oneLiner)}</p>
          {m.buildsOn ? (
            <p className="mt-2 rounded-md border border-cc-navy/20 bg-cc-navy/[0.04] px-3 py-2 text-[12px] leading-snug text-cc-dark-text">
              <span className="font-bold text-cc-navy">On today’s stack · </span>
              {formatInlineBold(m.buildsOn)}
            </p>
          ) : null}
        </div>
      </div>
      <div className="grid gap-0 md:grid-cols-2">
        <Cell title="Problem" tone="red">
          {formatInlineBold(m.problem)}
        </Cell>
        <Cell title="Persona" tone="navy">
          {formatInlineBold(m.persona)}
        </Cell>
        <Cell title="Evidence" tone="amber" span>
          <ul className="space-y-1.5 text-[12px] leading-relaxed">
            {m.evidence.map((e, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-mono text-[10px] text-cc-mid-gray">·</span>
                <span>{formatInlineBold(e)}</span>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell title="MVP scope (ships)" tone="green">
          <ul className="space-y-1.5 text-[12px] leading-relaxed">
            {m.mvpScope.map((s, i) => (
              <li key={i} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cc-green" />
                <span>{formatInlineBold(s)}</span>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell title="Not in MVP" tone="gray">
          <ul className="space-y-1.5 text-[12px] leading-relaxed">
            {m.notInMvp.map((s, i) => (
              <li key={i} className="flex gap-2">
                <XCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cc-mid-gray" />
                <span>{formatInlineBold(s)}</span>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell title="AI delivery tiers" tone="navy" span>
          <div className="grid gap-3 md:grid-cols-3">
            <AiTier icon={Zap} name="Push" body={m.aiTiers.push} />
            <AiTier icon={MessageSquare} name="Chat" body={m.aiTiers.chat} />
            <AiTier icon={Bot} name="Autonomous" body={m.aiTiers.autonomous} />
          </div>
        </Cell>
        <Cell title="Competitive edge" tone="amber" span>
          {formatInlineBold(m.competitive)}
        </Cell>
      </div>
    </div>
  )
}

function Cell({ title, children, tone, span }) {
  const toneMap = {
    red: 'border-cc-red/30',
    green: 'border-cc-green/30',
    amber: 'border-cc-amber/30',
    navy: 'border-cc-navy/30',
    gray: 'border-cc-border',
  }
  return (
    <div
      className={`border-cc-border p-4 ${span ? 'md:col-span-2' : ''} border-b border-l-4 ${
        toneMap[tone] ?? ''
      } ${span ? '' : 'md:[&:nth-child(odd)]:border-r'}`}
    >
      <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-cc-navy">
        {title}
      </div>
      <div className="text-[12.5px] leading-relaxed text-cc-dark-text">{children}</div>
    </div>
  )
}

function PrintModuleProfile({ module: m, breakBefore }) {
  return (
    <div
      className={`print-keep ${breakBefore ? 'print-page-break' : ''}`}
      style={{ marginBottom: '14pt' }}
    >
      <div
        style={{
          fontSize: '7.5pt',
          fontWeight: 700,
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: '#6b7280',
          marginBottom: '2pt',
        }}
      >
        Module {m.rank} · {m.phase} · {m.productTag}
      </div>
      <h3 style={{ marginTop: 0, borderTop: 0, paddingTop: 0 }}>{m.name}</h3>
      <p
        style={{
          fontSize: '9.75pt',
          lineHeight: 1.4,
          fontStyle: 'italic',
          margin: '0 0 6pt 0',
        }}
      >
        {stripBoldMarkers(m.oneLiner)}
      </p>
      {m.buildsOn ? (
        <p
          style={{
            fontSize: '8.5pt',
            color: '#4b5563',
            margin: '0 0 6pt 0',
          }}
        >
          <span style={{ fontWeight: 700, color: '#0a1628' }}>
            On today’s stack ·{' '}
          </span>
          {stripBoldMarkers(m.buildsOn)}
        </p>
      ) : null}

      <div className="print-cols-2">
        <div className="print-keep" style={{ marginBottom: '6pt' }}>
          <h4>Problem</h4>
          <p style={{ margin: 0 }}>{stripBoldMarkers(m.problem)}</p>
        </div>
        <div className="print-keep" style={{ marginBottom: '6pt' }}>
          <h4>Persona</h4>
          <p style={{ margin: 0 }}>{stripBoldMarkers(m.persona)}</p>
        </div>
        <div className="print-keep" style={{ marginBottom: '6pt' }}>
          <h4>MVP scope (ships)</h4>
          <ul
            style={{
              listStyle: 'disc',
              paddingLeft: '14pt',
              margin: 0,
            }}
          >
            {m.mvpScope.map((s, i) => (
              <li key={i} style={{ fontSize: '8.75pt', lineHeight: 1.35 }}>
                {stripBoldMarkers(s)}
              </li>
            ))}
          </ul>
        </div>
        <div className="print-keep" style={{ marginBottom: '6pt' }}>
          <h4>Not in MVP</h4>
          <ul
            style={{
              listStyle: 'disc',
              paddingLeft: '14pt',
              margin: 0,
            }}
          >
            {m.notInMvp.map((s, i) => (
              <li key={i} style={{ fontSize: '8.75pt', lineHeight: 1.35 }}>
                {stripBoldMarkers(s)}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="print-keep" style={{ marginTop: '4pt' }}>
        <h4>Evidence</h4>
        <ul
          style={{
            listStyle: 'disc',
            paddingLeft: '14pt',
            margin: 0,
          }}
        >
          {m.evidence.map((e, i) => (
            <li key={i} style={{ fontSize: '8.75pt', lineHeight: 1.35 }}>
              {stripBoldMarkers(e)}
            </li>
          ))}
        </ul>
      </div>

      <div className="print-keep" style={{ marginTop: '6pt' }}>
        <h4>AI delivery tiers</h4>
        <table
          className="print-data-table"
          style={{ tableLayout: 'fixed', margin: '2pt 0 0 0' }}
        >
          <colgroup>
            <col style={{ width: '14%' }} />
            <col style={{ width: '86%' }} />
          </colgroup>
          <tbody>
            <tr>
              <td className="label">Push</td>
              <td>{stripBoldMarkers(m.aiTiers.push)}</td>
            </tr>
            <tr>
              <td className="label">Chat</td>
              <td>{stripBoldMarkers(m.aiTiers.chat)}</td>
            </tr>
            <tr>
              <td className="label">Auto</td>
              <td>{stripBoldMarkers(m.aiTiers.autonomous)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="print-keep" style={{ marginTop: '6pt' }}>
        <h4>Competitive edge</h4>
        <p style={{ margin: 0 }}>{stripBoldMarkers(m.competitive)}</p>
      </div>
    </div>
  )
}

function stripBoldMarkers(text) {
  if (typeof text !== 'string') return text
  return text.replace(/\*\*(.*?)\*\*/g, '$1')
}

function AiTier({ icon: Icon, name, body }) {
  return (
    <div className="rounded-md bg-cc-navy/5 p-3">
      <div className="mb-1 flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-cc-navy" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-cc-navy">
          {name}
        </span>
      </div>
      <p className="text-[11.5px] leading-relaxed text-cc-dark-text">{formatInlineBold(body)}</p>
    </div>
  )
}
