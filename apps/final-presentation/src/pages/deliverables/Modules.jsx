import { useState } from 'react'
import { CheckCircle2, XCircle, Bot, MessageSquare, Zap } from 'lucide-react'
import {
  DeliverableHero,
  ProductTag,
  SectionLead,
} from '../../components/shared/DeliverableHero.jsx'
import { D4 } from '../../content/deliverables/d4-modules.js'

const PHASE_COLORS = {
  'Phase 1': 'bg-cc-green text-white',
  'Phase 1.5': 'bg-cc-amber text-white',
  'Phase 2': 'bg-cc-navy text-white',
}

export function Modules() {
  const [activeId, setActiveId] = useState(D4.modules[0].id)
  const active = D4.modules.find((m) => m.id === activeId) ?? D4.modules[0]

  return (
    <article className="pb-16">
      <DeliverableHero
        tagline={D4.tagline}
        leadStatement={D4.ceoScan}
        tldrBullets={D4.tldrBullets}
      />

      <section className="decision-strip mb-10">
        <span className="text-[10px] font-bold uppercase tracking-wider text-cc-navy">
          Interview-grounded alerts
        </span>
        <p className="mt-2 text-[13px] leading-relaxed text-cc-navy">
          {D4.buyerNamedAlerts}
        </p>
      </section>

      {/* BUILD SEQUENCE */}
      <section className="mb-10">
        <SectionLead kicker="Build sequence" title="Three phases, five modules">
          The order matters: push-first modules convert reactive buyers; deeper
          integration earns stickiness later.
        </SectionLead>
        <div className="grid gap-4 md:grid-cols-3">
          {D4.buildSequence.map((p) => (
            <div
              key={p.phase}
              className="flex flex-col rounded-lg border border-cc-border bg-white p-5 shadow-sm"
            >
              <span
                className={`inline-flex w-fit rounded px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider ${
                  PHASE_COLORS[p.phase] ?? 'bg-cc-navy text-white'
                }`}
              >
                {p.phase}
              </span>
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
              <p className="mt-3 text-[12px] leading-relaxed text-cc-mid-gray">{p.why}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RANKED MODULE CARDS */}
      <section className="mb-10">
        <SectionLead
          kicker="Five modules, ranked"
          title="What to build, why, and for whom"
        >
          Priority rank by buyer pull × build feasibility × moat. Click any card to
          expand.
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
                  {m.oneLiner}
                </div>
              </button>
            ))}
        </div>
        <ModuleDetail module={active} />
      </section>

      {/* PRIORITY RATIONALE */}
      <section>
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
              <span>{r}</span>
            </li>
          ))}
        </ol>
      </section>
    </article>
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
          <p className="mt-1 text-[13px] text-cc-dark-text">{m.oneLiner}</p>
        </div>
      </div>
      <div className="grid gap-0 md:grid-cols-2">
        <Cell title="Problem" tone="red">
          {m.problem}
        </Cell>
        <Cell title="Persona" tone="navy">
          {m.persona}
        </Cell>
        <Cell title="Evidence" tone="amber" span>
          <ul className="space-y-1.5 text-[12px] leading-relaxed">
            {m.evidence.map((e, i) => (
              <li key={i} className="flex gap-2">
                <span className="font-mono text-[10px] text-cc-mid-gray">·</span>
                <span>{e}</span>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell title="MVP scope (ships)" tone="green">
          <ul className="space-y-1.5 text-[12px] leading-relaxed">
            {m.mvpScope.map((s, i) => (
              <li key={i} className="flex gap-2">
                <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cc-green" />
                <span>{s}</span>
              </li>
            ))}
          </ul>
        </Cell>
        <Cell title="Not in MVP" tone="gray">
          <ul className="space-y-1.5 text-[12px] leading-relaxed">
            {m.notInMvp.map((s, i) => (
              <li key={i} className="flex gap-2">
                <XCircle className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-cc-mid-gray" />
                <span>{s}</span>
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
          {m.competitive}
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

function AiTier({ icon: Icon, name, body }) {
  return (
    <div className="rounded-md bg-cc-navy/5 p-3">
      <div className="mb-1 flex items-center gap-2">
        <Icon className="h-3.5 w-3.5 text-cc-navy" />
        <span className="text-[11px] font-bold uppercase tracking-wider text-cc-navy">
          {name}
        </span>
      </div>
      <p className="text-[11.5px] leading-relaxed text-cc-dark-text">{body}</p>
    </div>
  )
}
