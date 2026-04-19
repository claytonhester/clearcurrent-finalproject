import { DeliverableHero, SectionLead } from '../../components/shared/DeliverableHero.jsx'
import { D7 } from '../../content/deliverables/d7-investor.js'

export function Investor() {
  return (
    <article className="pb-16">
      <DeliverableHero tagline={D7.tagline} tldrBullets={D7.tldrBullets} />

      {/* SIX-BEAT ARC */}
      <section className="mb-10">
        <SectionLead kicker="Six-beat arc" title="The argument from problem to proof">
          Each beat has a single claim and the evidence that survives scrutiny.
        </SectionLead>
        <ol className="space-y-3">
          {D7.arc.map((b) => (
            <li
              key={b.beat}
              className="flex gap-4 rounded-lg border border-cc-border bg-white p-5 shadow-sm"
            >
              <div className="flex flex-shrink-0 flex-col items-center">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-cc-navy text-[14px] font-bold text-cc-yellow">
                  {b.beat}
                </span>
                <span className="mt-1 text-[9px] font-bold uppercase tracking-wider text-cc-mid-gray">
                  Beat
                </span>
              </div>
              <div className="min-w-0 flex-1">
                <h3 className="text-[15px] font-bold text-cc-navy">{b.title}</h3>
                <p className="mt-1.5 text-[13px] leading-relaxed text-cc-dark-text">
                  {b.body}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* MARKET MATH */}
      <section className="mb-10">
        <SectionLead kicker="Market math" title="TAM / SAM / SOM — tiered, defensible">
          Bottom-up build and government-sourced headline.
        </SectionLead>
        <div className="mb-5 rounded-lg border border-cc-navy bg-cc-navy p-6 text-white shadow-sm">
          <div className="text-[10px] font-bold uppercase tracking-wider text-cc-yellow">
            TAM (headline)
          </div>
          <div className="mt-1 flex items-baseline gap-3">
            <span className="text-[42px] font-bold leading-none">
              {D7.market.tam.value}
            </span>
            <span className="text-[12px] uppercase tracking-wider text-cc-yellow/80">
              {D7.market.tam.label}
            </span>
          </div>
          <div className="mt-1 text-[11px] italic text-white/80">
            Source · {D7.market.tam.source}
          </div>
        </div>
        <div className="grid gap-5 md:grid-cols-2">
          <div>
            <h4 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-cc-navy">
              SAM · Serviceable
            </h4>
            <div className="overflow-hidden rounded-lg border border-cc-border bg-white shadow-sm">
              <table className="w-full text-left text-[11.5px]">
                <thead className="bg-cc-light-gray">
                  <tr>
                    <Th>Vertical</Th>
                    <Th>Accounts</Th>
                    <Th>ACV</Th>
                    <Th align="right">SAM</Th>
                  </tr>
                </thead>
                <tbody>
                  {D7.market.sam.map((r) => (
                    <tr key={r.vertical} className="border-t border-cc-border/60">
                      <Td bold>{r.vertical}</Td>
                      <Td muted>{r.accounts}</Td>
                      <Td muted>{r.acv}</Td>
                      <Td align="right" bold>
                        {r.sam}
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div>
            <h4 className="mb-2 text-[11px] font-bold uppercase tracking-wider text-cc-navy">
              SOM · 24-month obtainable
            </h4>
            <div className="overflow-hidden rounded-lg border border-cc-border bg-white shadow-sm">
              <table className="w-full text-left text-[11.5px]">
                <thead className="bg-cc-light-gray">
                  <tr>
                    <Th>Segment</Th>
                    <Th align="center">Accounts</Th>
                    <Th align="center">ACV</Th>
                    <Th align="right">Revenue</Th>
                  </tr>
                </thead>
                <tbody>
                  {D7.market.som.map((r, i) => (
                    <tr
                      key={i}
                      className={`border-t border-cc-border/60 ${
                        /Total/i.test(r.seg) ? 'bg-cc-navy text-white font-bold' : ''
                      }`}
                    >
                      <Td>{r.seg}</Td>
                      <Td align="center">{r.accounts}</Td>
                      <Td align="center">{r.acv}</Td>
                      <Td align="right">{r.rev}</Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* EVIDENCE TIERS */}
      <section className="mb-10">
        <SectionLead
          kicker="Diligence strength"
          title="Eight findings, each with a confidence tier"
        >
          What holds up when investors ask for receipts — primary, secondary, or
          government-grade.
        </SectionLead>
        <ol className="grid gap-3 md:grid-cols-2">
          {D7.evidence.map((e) => (
            <li
              key={e.n}
              className="rounded-lg border border-cc-border bg-white p-4 shadow-sm"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cc-navy text-[11px] font-bold text-cc-yellow">
                  {e.n}
                </span>
                <span className="rounded bg-cc-green/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-cc-green">
                  {e.confidence}
                </span>
              </div>
              <h4 className="mt-2 text-[13.5px] font-bold text-cc-navy">{e.headline}</h4>
              <p className="mt-1 text-[12px] leading-relaxed text-cc-mid-gray">
                {e.finding}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* HERO QUOTES */}
      <section className="mb-10">
        <SectionLead kicker="Hero quotes" title="Three verbatims — one per slide">
          Each quote has a named use case for the deck.
        </SectionLead>
        <div className="grid gap-4 md:grid-cols-3">
          {D7.quotes.map((q) => (
            <figure
              key={q.n}
              className="flex flex-col rounded-lg border-l-4 border-cc-yellow bg-white p-5 shadow-sm"
            >
              <blockquote className="flex-1 text-[14px] leading-snug text-cc-dark-text">
                &ldquo;{q.text}&rdquo;
              </blockquote>
              <figcaption className="mt-3 border-t border-cc-border pt-2 text-[11.5px]">
                <div className="font-semibold text-cc-navy">{q.speaker}</div>
                <div className="mt-1 text-[10.5px] font-semibold uppercase tracking-wider text-cc-amber">
                  Use for · {q.useFor}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* PILOT STORY */}
      <section className="mb-10">
        <SectionLead
          kicker="Pilot credibility"
          title="Identified vs realized — and the honest answer"
        >
          The single question every investor will ask. Here's how to answer it.
        </SectionLead>
        <div className="rounded-lg border border-cc-border bg-white p-5 shadow-sm">
          <div className="text-[10px] font-bold uppercase tracking-wider text-cc-mid-gray">
            Raw claim
          </div>
          <p className="mt-1 text-[14px] font-bold text-cc-navy">{D7.pilotStory.raw}</p>
          <div className="mt-4 rounded border-l-4 border-cc-red bg-cc-red/5 px-4 py-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-cc-red">
              Distinction
            </div>
            <p className="mt-1 text-[12.5px] leading-relaxed text-cc-dark-text">
              {D7.pilotStory.distinction}
            </p>
          </div>
          <div className="mt-4 rounded border-l-4 border-cc-green bg-cc-green/5 px-4 py-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-cc-green">
              Investor-ready framing
            </div>
            <blockquote className="mt-1 text-[12.5px] leading-relaxed italic text-cc-dark-text">
              &ldquo;{D7.pilotStory.investorReady}&rdquo;
            </blockquote>
          </div>
          <div className="mt-5">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-wider text-cc-navy">
              Pricing scenario sensitivity
            </div>
            <div className="overflow-hidden rounded border border-cc-border">
              <table className="w-full text-left text-[11.5px]">
                <thead className="bg-cc-light-gray">
                  <tr>
                    <Th>Model</Th>
                    <Th>Assumption</Th>
                    <Th align="right">ARR</Th>
                  </tr>
                </thead>
                <tbody>
                  {D7.pilotStory.pricingScenarios.map((p, i) => (
                    <tr
                      key={i}
                      className={`border-t border-cc-border/60 ${
                        /recommended/i.test(p.model) ? 'bg-cc-yellow-soft' : ''
                      }`}
                    >
                      <Td bold>{p.model}</Td>
                      <Td muted>{p.assumption}</Td>
                      <Td align="right" bold>
                        {p.arr}
                      </Td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* MOAT */}
      <section className="mb-10">
        <SectionLead
          kicker="Moat"
          title="Four compounding advantages with build horizons"
        >
          What a well-funded competitor cannot buy in six months.
        </SectionLead>
        <div className="grid gap-3 md:grid-cols-2">
          {D7.moat.map((m) => (
            <div
              key={m.n}
              className="rounded-lg border border-cc-navy bg-cc-navy p-5 text-white"
            >
              <div className="flex items-center justify-between gap-2">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-cc-yellow text-[11px] font-bold text-cc-navy">
                  {m.n}
                </span>
                <span className="rounded bg-cc-yellow/20 px-1.5 py-0.5 text-[9.5px] font-bold uppercase tracking-wider text-cc-yellow">
                  {m.horizon}
                </span>
              </div>
              <h4 className="mt-2 text-[14px] font-bold">{m.name}</h4>
              <p className="mt-1 text-[12px] leading-relaxed text-white/90">{m.why}</p>
            </div>
          ))}
        </div>
      </section>
    </article>
  )
}

function Th({ children, align = 'left' }) {
  return (
    <th
      className={`px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-cc-navy ${
        align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : ''
      }`}
    >
      {children}
    </th>
  )
}

function Td({ children, bold, muted, align = 'left' }) {
  return (
    <td
      className={`px-3 py-2.5 align-top text-[11.5px] ${bold ? 'font-bold text-cc-navy' : ''} ${
        muted ? 'text-cc-mid-gray' : ''
      } ${align === 'right' ? 'text-right' : align === 'center' ? 'text-center' : ''}`}
    >
      {children}
    </td>
  )
}
