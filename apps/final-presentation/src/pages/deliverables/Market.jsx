import { Info } from 'lucide-react'
import { DeliverableHero, SectionLead } from '../../components/shared/DeliverableHero.jsx'
import { D5 } from '../../content/deliverables/d5-market.js'

const DIMENSIONS = [
  { key: 'problem', label: 'Problem severity' },
  { key: 'readiness', label: 'Buyer readiness' },
  { key: 'deal', label: 'Deal economics' },
  { key: 'competition', label: 'Competitive opening' },
  { key: 'data', label: 'Data availability' },
]

const MODULE_KEYS = [
  { key: 'he', label: 'Higher ed' },
  { key: 'hc', label: 'Healthcare' },
  { key: 'rest', label: 'Restaurant' },
  { key: 'ch', label: 'Channel' },
  { key: 'cre', label: 'CRE' },
]

export function Market() {
  return (
    <article className="pb-16">
      <DeliverableHero tagline={D5.tagline} tldrBullets={D5.tldrBullets} />

      {/* STRATEGIC DECISIONS */}
      <section className="mb-10">
        <SectionLead
          kicker="Strategic decisions"
          title="Higher ed first, retail in parallel, healthcare long-term"
        >
          The strategic spine of the market view — everything else is evidence.
        </SectionLead>
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {D5.threeDecisions.map((d, i) => (
            <div
              key={i}
              className="relative flex flex-col rounded-lg border border-cc-navy bg-white p-5 shadow-sm"
            >
              <span className="absolute -top-3 left-5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cc-yellow text-[12px] font-bold text-cc-navy">
                {i + 1}
              </span>
              <h3 className="mt-2 text-[16px] font-bold leading-snug text-cc-navy">
                {d.headline}
              </h3>
              <ul className="mt-2 list-disc space-y-1.5 pl-4 text-[12.5px] leading-relaxed text-cc-dark-text marker:text-cc-navy">
                {d.bullets.map((line, j) => (
                  <li key={j}>{line}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* SCORECARD HEATMAP */}
      <section className="mb-10">
        <SectionLead kicker="Vertical scorecard" title="Five dimensions, scored 1–5">
          Each cell shows the composite case: darker = stronger fit. Total column is out
          of 25.
        </SectionLead>
        <div className="overflow-x-auto rounded-lg border border-cc-border bg-white shadow-sm">
          <table className="w-full text-left text-[12px]">
            <thead className="bg-cc-light-gray">
              <tr>
                <Th wide>Vertical</Th>
                {DIMENSIONS.map((d) => (
                  <Th key={d.key} align="center">
                    {d.label}
                  </Th>
                ))}
                <Th align="center">Total</Th>
                <Th>Stage</Th>
              </tr>
            </thead>
            <tbody>
              {D5.verticals.map((v) => (
                <tr key={v.vertical} className="border-t border-cc-border/60">
                  <Td bold>{v.vertical}</Td>
                  {DIMENSIONS.map((d) => (
                    <td key={d.key} className="px-2 py-3 text-center">
                      <HeatCell score={v.scores[d.key]} />
                    </td>
                  ))}
                  <td className="px-3 py-3 text-center font-bold text-cc-navy">
                    <span className="inline-flex h-8 w-10 items-center justify-center rounded bg-cc-navy/10">
                      {v.total}
                    </span>
                  </td>
                  <Td>
                    <StageBadge stage={v.stage} />
                  </Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Vertical verdicts */}
        <div className="mt-5 grid gap-3 md:grid-cols-2">
          {D5.verticals.map((v) => (
            <div
              key={v.vertical}
              className="rounded-lg border border-cc-border bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <h4 className="text-[14px] font-bold text-cc-navy">{v.vertical}</h4>
                <StageBadge stage={v.stage} />
              </div>
              <p className="mt-2 text-[12.5px] leading-relaxed text-cc-dark-text">
                {v.verdict}
              </p>
              <ul className="mt-2 space-y-1 text-[11.5px] leading-relaxed text-cc-mid-gray">
                {v.keyEvidence.map((e, i) => (
                  <li key={i} className="flex gap-1.5">
                    <span>·</span>
                    <span>{e}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* MODULE FIT MATRIX */}
      <section className="mb-10">
        <SectionLead
          kicker="Module × vertical fit"
          title="Which CC product maps to which buyer"
        >
          Columns show where each module has strongest pull (1 = weak, 5 = strong).
        </SectionLead>
        <div className="overflow-x-auto rounded-lg border border-cc-border bg-white shadow-sm">
          <table className="w-full text-left text-[12px]">
            <thead className="bg-cc-light-gray">
              <tr>
                <Th wide>Module</Th>
                {MODULE_KEYS.map((m) => (
                  <Th key={m.key} align="center">
                    {m.label}
                  </Th>
                ))}
                <Th>Evidence strength</Th>
              </tr>
            </thead>
            <tbody>
              {D5.moduleFit.map((m) => (
                <tr key={m.module} className="border-t border-cc-border/60">
                  <Td>
                    <ModuleNameWithHint name={m.module} hint={m.tooltip} />
                  </Td>
                  {MODULE_KEYS.map((k) => (
                    <td key={k.key} className="px-2 py-3 text-center">
                      <HeatCell score={m[k.key]} />
                    </td>
                  ))}
                  <Td muted>{m.evidence}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PERSONAS */}
      <section className="mb-10">
        <SectionLead kicker="Personas" title="Who signs, who champions, who vetoes">
          Five personas with entry posture and CC product mapping.
        </SectionLead>
        <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {D5.personas.map((p) => (
            <div
              key={p.name}
              className="rounded-lg border border-cc-border bg-white p-4 shadow-sm"
            >
              <h4 className="text-[14px] font-bold text-cc-navy">{p.name}</h4>
              <div className="mt-1.5 flex flex-wrap gap-1.5 text-[10px] font-semibold">
                <span className="rounded bg-cc-yellow-soft px-1.5 py-0.5 text-cc-amber">
                  {p.entry}
                </span>
                <span className="rounded bg-cc-navy/10 px-1.5 py-0.5 text-cc-navy">
                  {p.authority}
                </span>
              </div>
              <dl className="mt-2 space-y-1 text-[11.5px]">
                <Meta label="Trigger" value={p.trigger} />
                <Meta label="CC Product" value={p.surface} />
              </dl>
              {p.quote ? (
                <blockquote className="mt-2 border-l-2 border-cc-yellow bg-cc-yellow-soft/40 px-2 py-1.5 text-[11.5px] italic leading-snug text-cc-dark-text">
                  {p.quote}
                </blockquote>
              ) : null}
            </div>
          ))}
        </div>
      </section>

      {/* MOAT */}
      <section>
        <SectionLead kicker="Moat" title="Three compounding advantages">
          Why the window closes behind us.
        </SectionLead>
        <div className="grid gap-3 md:grid-cols-3">
          {D5.moat.map((m) => (
            <div
              key={m.n}
              className="relative flex flex-col rounded-lg border border-cc-navy bg-cc-navy p-5 text-white"
            >
              <span className="absolute -top-3 left-5 inline-flex h-6 w-6 items-center justify-center rounded-full bg-cc-yellow text-[12px] font-bold text-cc-navy">
                {m.n}
              </span>
              <h4 className="mt-2 text-[14.5px] font-bold">{m.name}</h4>
              <div className="mt-1 text-[10px] font-bold uppercase tracking-wider text-cc-yellow">
                {m.horizon}
              </div>
              <p className="mt-2 text-[12px] leading-relaxed text-white/90">{m.why}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}

function HeatCell({ score }) {
  const pct = Math.max(0, Math.min(5, score ?? 0)) / 5
  const intensity = Math.round(pct * 100)
  const bg =
    intensity >= 80
      ? 'bg-cc-navy text-white'
      : intensity >= 60
        ? 'bg-cc-navy/70 text-white'
        : intensity >= 40
          ? 'bg-cc-navy/40 text-cc-navy'
          : intensity >= 20
            ? 'bg-cc-navy/20 text-cc-navy'
            : 'bg-cc-navy/5 text-cc-mid-gray'
  return (
    <span
      className={`inline-flex h-8 w-10 items-center justify-center rounded font-bold ${bg}`}
    >
      {score}
    </span>
  )
}

function StageBadge({ stage }) {
  const s = stage.toLowerCase()
  let cls = 'bg-cc-light-gray text-cc-mid-gray'
  if (s.includes('beachhead')) cls = 'bg-cc-green text-white'
  else if (s.includes('series a')) cls = 'bg-cc-amber text-white'
  else if (s.includes('channel')) cls = 'bg-cc-navy text-white'
  else if (s.includes('m&a')) cls = 'bg-cc-red/80 text-white'
  else if (s.includes('defer')) cls = 'bg-cc-mid-gray text-white'
  return (
    <span
      className={`inline-flex items-center rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${cls}`}
    >
      {stage}
    </span>
  )
}

function Th({ children, align = 'left', wide }) {
  return (
    <th
      className={`px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-cc-navy ${
        align === 'center' ? 'text-center' : ''
      } ${wide ? 'min-w-[180px]' : ''}`}
    >
      {children}
    </th>
  )
}

function Td({ children, bold, muted, align = 'left' }) {
  return (
    <td
      className={`px-3 py-3 align-top text-[12px] ${bold ? 'font-bold text-cc-navy' : ''} ${
        muted ? 'text-cc-mid-gray' : ''
      } ${align === 'center' ? 'text-center' : ''}`}
    >
      {children}
    </td>
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

function ModuleNameWithHint({ name, hint }) {
  if (!hint) {
    return <span className="font-bold text-cc-navy">{name}</span>
  }
  return (
    <div className="flex items-start gap-1.5 pr-1">
      <span className="min-w-0 font-bold leading-snug text-cc-navy">{name}</span>
      <button
        type="button"
        title={hint}
        className="group relative mt-0.5 shrink-0 rounded text-cc-mid-gray hover:text-cc-navy focus:outline-none focus-visible:ring-2 focus-visible:ring-cc-navy/35"
        aria-label={`Plain-language summary: ${name}`}
      >
        <Info className="h-3.5 w-3.5" strokeWidth={2} aria-hidden />
        <span
          className="pointer-events-none absolute bottom-full left-0 z-40 mb-1 hidden w-[min(17.5rem,calc(100vw-3rem))] rounded-md border border-cc-border bg-white px-2.5 py-2 text-left text-[11px] font-normal leading-snug text-cc-dark-text shadow-lg group-hover:block group-focus-visible:block"
          role="tooltip"
        >
          {hint}
        </span>
      </button>
    </div>
  )
}
