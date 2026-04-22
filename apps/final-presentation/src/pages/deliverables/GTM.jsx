import { useState } from 'react'
import { Target, ShieldAlert, AlertTriangle } from 'lucide-react'
import { DeliverableHero, SectionLead } from '../../components/shared/DeliverableHero.jsx'
import { PrintReport } from '../../components/shared/PrintReport.jsx'
import { PrintSectionOpener } from '../../components/print/PrintSectionOpener.jsx'
import { PrintExhibit } from '../../components/print/PrintExhibit.jsx'
import { PullQuote } from '../../components/print/PullQuote.jsx'
import { MilestoneTimeline } from '../../components/print/charts/MilestoneTimeline.jsx'
import { D8 } from '../../content/deliverables/d8-gtm.js'
import { DELIVERABLES } from '../../navConfig.js'

const D8_META = DELIVERABLES.find((d) => d.id === 'gtm')

const TRACK_COLORS = [
  'bg-cc-yellow text-cc-navy',
  'bg-cc-navy text-cc-yellow',
  'bg-cc-green text-white',
]

export function GTM() {
  const [icp, setIcp] = useState(0)
  const [track, setTrack] = useState(0)
  const currentIcp = D8.icps[icp]
  const currentTrack = D8.tracks[track]

  return (
    <PrintReport
      deliverable={D8_META}
      tldrBullets={D8.tldrBullets}
      cover={{
        docNumber: 'D8',
        eyebrow: 'GTM Strategy Playbook',
        actionTitle:
          'Land on documented dollars. Expand on alerts that earn the interruption. Retain on regulatory memory no incumbent owns.',
        summary:
          'A three-track motion (Land \u2192 Expand \u2192 Retain) sequenced against three ICPs. Each track converts on a different evidence class — recovered cash, ranked alerts, and PUC-grounded budget defense.',
      }}
    >
    <article className="pb-16">
      <DeliverableHero tagline={D8.tagline} tldrBullets={D8.tldrBullets} />

      {/* THREE-TRACK ROADMAP — print-only timeline that frames Land / Expand
          / Retain as a phased motion with a single named conversion proof. */}
      <PrintLandExpandRetainExhibit />

      {/* ICP TABS — interactive (screen). */}
      <section className="mb-10 print:hidden">
        <SectionLead
          kicker="Ideal customer profiles"
          title="Three ICPs, ranked by beachhead fit"
        >
          One page per ICP — who matters, what opens the door, and pilot shape.
        </SectionLead>
        <div className="mb-4 flex flex-wrap gap-2">
          {D8.icps.map((p, i) => (
            <button
              key={p.n}
              onClick={() => setIcp(i)}
              className={`flex items-start gap-2 rounded-lg border px-3 py-2 text-left transition ${
                i === icp
                  ? 'border-cc-navy bg-cc-navy text-white'
                  : 'border-cc-border bg-white text-cc-dark-text hover:border-cc-navy/40'
              }`}
            >
              <span
                className={`mt-0.5 inline-flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${
                  i === icp ? 'bg-cc-yellow text-cc-navy' : 'bg-cc-navy text-cc-yellow'
                }`}
              >
                {p.n}
              </span>
              <span className="max-w-[200px] text-[12px] font-semibold leading-tight">
                {p.name}
              </span>
            </button>
          ))}
        </div>
        <IcpDetail icp={currentIcp} />
      </section>

      {/* ICPs — print only. All three expanded, one per page. */}
      <section className="hidden print:block mb-10">
        <SectionLead
          kicker="Ideal customer profiles"
          title="Three ICPs, ranked by beachhead fit"
        >
          One ICP per page — who matters, what opens the door, and pilot shape.
        </SectionLead>
        {D8.icps.map((p, i) => (
          <PrintIcpProfile key={p.n} icp={p} breakBefore={i > 0} />
        ))}
      </section>

      {/* THREE TRACKS — interactive (screen). */}
      <section className="mb-10 print:hidden">
        <SectionLead
          kicker="Land / expand / retain"
          title="Three message tracks, one per phase of the relationship"
        >
          Each track has its own pitch, quotes, and hard rule.
        </SectionLead>
        <div className="mb-4 grid grid-cols-3 gap-3">
          {D8.tracks.map((t, i) => (
            <button
              key={t.n}
              onClick={() => setTrack(i)}
              className={`rounded-lg border p-3 text-left transition ${
                i === track
                  ? 'border-cc-navy shadow-md'
                  : 'border-cc-border bg-white hover:border-cc-navy/40'
              }`}
            >
              <div
                className={`mb-1.5 inline-block rounded px-2 py-0.5 text-[9.5px] font-bold uppercase tracking-wider ${TRACK_COLORS[i]}`}
              >
                Track {t.n}
              </div>
              <div className="text-[13px] font-bold text-cc-navy">{t.name}</div>
            </button>
          ))}
        </div>
        <div className="rounded-lg border border-cc-border bg-white p-6 shadow-sm">
          <blockquote className="text-[15px] font-semibold italic leading-snug text-cc-navy">
            &ldquo;{currentTrack.message}&rdquo;
          </blockquote>
          <div className="mt-5 grid gap-3 md:grid-cols-2">
            {currentTrack.quotes.map((q, i) => (
              <figure
                key={i}
                className="rounded-lg border border-cc-border bg-cc-light-gray/50 p-4"
              >
                <blockquote className="text-[12.5px] leading-snug text-cc-dark-text">
                  {q.text}
                </blockquote>
                <figcaption className="mt-2 text-[11px] font-semibold text-cc-navy">
                  {q.speaker}
                </figcaption>
                <p className="mt-1 text-[10.5px] italic text-cc-mid-gray">{q.context}</p>
              </figure>
            ))}
          </div>
          <div className="mt-4 flex items-start gap-2 rounded border-l-4 border-cc-red bg-cc-red/5 p-3">
            <AlertTriangle className="mt-0.5 h-4 w-4 flex-shrink-0 text-cc-red" />
            <p className="text-[12px] leading-relaxed text-cc-dark-text">
              <span className="font-bold text-cc-red">
                {currentTrack.hardStop ? 'Hard stop · ' : 'Rule · '}
              </span>
              {currentTrack.hardStop ?? currentTrack.rule}
            </p>
          </div>
        </div>
      </section>

      {/* TRACKS — print only. All three expanded, each on its own page. */}
      <section className="hidden print:block mb-10">
        <SectionLead
          kicker="Land / expand / retain"
          title="Three message tracks · one per phase of the relationship"
        >
          Each track has its own pitch, quotes, and hard rule.
        </SectionLead>
        {D8.tracks.map((t, i) => (
          <PrintTrackProfile key={t.n} track={t} breakBefore={i > 0} />
        ))}
      </section>

      {/* SALES PROCESS */}
      <section className="mb-10">
        <SectionLead kicker="Sales motion" title="The room — then what kills deals">
          Champion, finance, and IT in parallel. Below: the four recurring deal killers.
        </SectionLead>
        <div className="mb-5 rounded-lg border border-cc-navy bg-cc-navy p-5 text-white">
          <div className="mb-1 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-cc-yellow">
            <Target className="h-3.5 w-3.5" />
            The room
          </div>
          <p className="text-[13px] leading-relaxed text-white/90">
            {D8.salesProcess.room}
          </p>
        </div>
        <div className="rounded-lg border border-cc-red/30 bg-cc-red/5 p-4">
          <h4 className="mb-3 flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-cc-red">
            <ShieldAlert className="h-3.5 w-3.5" />
            Four deal killers
          </h4>
          <ul className="grid gap-2 md:grid-cols-2">
            {D8.salesProcess.dealKillers.map((k, i) => (
              <li
                key={i}
                className="flex gap-2 rounded bg-white p-3 text-[11.5px] leading-snug text-cc-dark-text"
              >
                <span className="font-bold text-cc-red">×</span>
                <span>{k}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* PRICING */}
      <section className="mb-10">
        <SectionLead kicker="Pricing" title="Three tiers">
          Pilot contingency → annual subscription → enterprise expansion. Cap the Spieler trap.
        </SectionLead>
        <div className="grid gap-3 md:grid-cols-3">
          {D8.pricing.tiers.map((t, i) => (
            <div
              key={i}
              className={`rounded-lg border p-5 shadow-sm ${
                i === 1
                  ? 'border-cc-yellow bg-cc-yellow-soft'
                  : 'border-cc-border bg-white'
              }`}
            >
              <div className="text-[10px] font-bold uppercase tracking-wider text-cc-mid-gray">
                Tier {i + 1}
              </div>
              <h4 className="mt-0.5 text-[14px] font-bold text-cc-navy">{t.tier}</h4>
              <div className="mt-2 text-[17px] font-bold text-cc-navy">{t.fee}</div>
              <p className="mt-2 text-[11.5px] leading-relaxed text-cc-dark-text">
                {t.includes}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-4 flex items-start gap-2 rounded border-l-4 border-cc-navy bg-cc-light-gray/50 p-3">
          <span className="text-[10px] font-bold uppercase tracking-wider text-cc-navy">
            Rule ·
          </span>
          <p className="text-[12px] leading-relaxed text-cc-dark-text">
            {D8.pricing.rule}
          </p>
        </div>
      </section>

      {/* CHANNEL */}
      <section>
        <SectionLead kicker="Channel" title="Direct first — introductions second">
          Peer groups and OEM relationships are for reach, not for carrying the quarter.
        </SectionLead>
        <div className="rounded-lg border border-cc-border bg-white p-5 shadow-sm">
          <p className="text-[13px] leading-relaxed text-cc-dark-text">
            {D8.channel.posture}
          </p>
          <p className="mt-3 border-t border-cc-border pt-3 text-[12px] leading-relaxed text-cc-mid-gray">
            <span className="font-bold text-cc-amber">Risk · </span>
            {D8.channel.risk}
          </p>
        </div>
      </section>

      {/* PROMOTED MOMENT — print-only pull quote that sets the magnitude
          floor for the Land pitch ($1M/yr in vacated-site payments). */}
      <PullQuote
        attribution="Scott Czubkowski"
        role="Medxcel / Ascension"
      >
        Over $1M per year in payments for vacated sites.
      </PullQuote>
    </article>
    </PrintReport>
  )
}

function PrintLandExpandRetainExhibit() {
  // Three GTM tracks framed as a phased motion. The proof bullet on each
  // phase is the single sentence that tells the buyer "you've moved" — i.e.
  // why this phase converts. Land is active because that is the immediate
  // sales motion; Expand and Retain unlock from there.
  const phases = [
    {
      label: 'Track 1',
      title: 'Land \u2014 billing error audit ROI',
      milestones: [
        'FERC + state PUC audit findings, not vendor claims',
        '30-day "do you have errors" answer, no software purchase',
        'Texas State 10\u00d7 water multiplier; Ascension $1M+/yr vacated-site pay',
      ],
      active: true,
    },
    {
      label: 'Track 2',
      title: 'Expand \u2014 anomaly alerting',
      milestones: [
        'Catch the March bill in February interval data',
        'Every alert carries dollar magnitude or it doesn\u2019t fire',
        'UT Austin: rank problems for me; Panda: baseline-drift case',
      ],
    },
    {
      label: 'Track 3',
      title: 'Retain \u2014 regulatory intelligence',
      milestones: [
        'PUC rate cases flagged before the budget cycle closes',
        'Two-scenario dollar model the CFO can defend in March',
        'Zero competitive offer \u2014 EnergyCAP, Arcadia, WatchWire don\u2019t do this',
      ],
    },
  ]

  return (
    <section className="hidden print:block mb-8">
      <PrintSectionOpener
        kicker="Land \u2192 Expand \u2192 Retain"
        title="Three sales motions, one institutional memory loop"
        dek="Each track converts on a different evidence class. Land is paid discovery on documented dollars; Expand is alerts that earn the interruption; Retain is regulatory memory no incumbent owns."
      />
      <PrintExhibit
        number="1"
        caption="Three-track GTM motion sequenced against the buyer\u2019s calendar"
        source="D8 GTM Strategy Playbook \u00b7 tracks 1\u20133 (Land / Expand / Retain) with primary proofs."
      >
        <MilestoneTimeline phases={phases} />
      </PrintExhibit>
    </section>
  )
}

function IcpDetail({ icp }) {
  return (
    <div className="rounded-lg border border-cc-navy bg-white p-6 shadow-md">
      <div className="flex items-baseline gap-3">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cc-yellow text-[13px] font-bold text-cc-navy">
          {icp.n}
        </span>
        <h3 className="text-[16px] font-bold text-cc-navy">{icp.name}</h3>
      </div>
      <p className="mt-2 text-[12.5px] leading-relaxed text-cc-dark-text">
        {icp.description}
      </p>
      <div className="mt-5 grid gap-4 md:grid-cols-3">
        <Panel title="Champions" tone="navy">
          <ul className="space-y-1">
            {icp.champions.slice(0, 4).map((c, i) => (
              <li key={i} className="text-[11.5px] leading-snug text-cc-dark-text">
                · {c}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Triggers" tone="green">
          <ul className="space-y-1">
            {icp.triggers.slice(0, 4).map((t, i) => (
              <li key={i} className="text-[11.5px] leading-snug text-cc-dark-text">
                · {t}
              </li>
            ))}
          </ul>
        </Panel>
        <Panel title="Disqualifiers" tone="red">
          <ul className="space-y-1">
            {icp.disqualifiers.slice(0, 4).map((d, i) => (
              <li key={i} className="text-[11.5px] leading-snug text-cc-dark-text">
                × {d}
              </li>
            ))}
          </ul>
        </Panel>
      </div>
      <div className="mt-5 rounded-lg border border-cc-border bg-cc-light-gray/40 p-4">
        <h4 className="mb-2 text-[10px] font-bold uppercase tracking-wider text-cc-navy">
          Pilot structure
        </h4>
        <dl className="grid gap-x-5 gap-y-1.5 text-[11.5px] md:grid-cols-2">
          <PilotRow label="Duration" value={icp.pilot.duration} />
          <PilotRow label="Scope" value={icp.pilot.scope} />
          <PilotRow label="Day 30" value={icp.pilot.day30} />
          <PilotRow label="Day 60/90" value={icp.pilot.day90} />
          <PilotRow label="Fee" value={icp.pilot.fee} />
          <PilotRow label="Conversion event" value={icp.pilot.conversionEvent} wide />
        </dl>
      </div>
    </div>
  )
}

function PrintIcpProfile({ icp, breakBefore }) {
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
        ICP {icp.n}
      </div>
      <h3 style={{ marginTop: 0, borderTop: 0, paddingTop: 0 }}>{icp.name}</h3>
      <p style={{ margin: '0 0 6pt 0' }}>{icp.description}</p>

      <div className="print-cols-3">
        <div className="print-keep">
          <h4>Champions</h4>
          <ul style={{ listStyle: 'disc', paddingLeft: '14pt', margin: 0 }}>
            {icp.champions.map((c, i) => (
              <li key={i} style={{ fontSize: '8.5pt', lineHeight: 1.32 }}>
                {c}
              </li>
            ))}
          </ul>
        </div>
        <div className="print-keep">
          <h4>Triggers</h4>
          <ul style={{ listStyle: 'disc', paddingLeft: '14pt', margin: 0 }}>
            {icp.triggers.map((t, i) => (
              <li key={i} style={{ fontSize: '8.5pt', lineHeight: 1.32 }}>
                {t}
              </li>
            ))}
          </ul>
        </div>
        <div className="print-keep">
          <h4>Disqualifiers</h4>
          <ul style={{ listStyle: 'disc', paddingLeft: '14pt', margin: 0 }}>
            {icp.disqualifiers.map((d, i) => (
              <li key={i} style={{ fontSize: '8.5pt', lineHeight: 1.32 }}>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="print-keep" style={{ marginTop: '6pt' }}>
        <h4>Pilot structure</h4>
        <table
          className="print-data-table"
          style={{ tableLayout: 'fixed', margin: '2pt 0 0 0' }}
        >
          <colgroup>
            <col style={{ width: '22%' }} />
            <col style={{ width: '78%' }} />
          </colgroup>
          <tbody>
            <tr>
              <td className="label">Duration</td>
              <td>{icp.pilot.duration}</td>
            </tr>
            <tr>
              <td className="label">Scope</td>
              <td>{icp.pilot.scope}</td>
            </tr>
            <tr>
              <td className="label">Day 30</td>
              <td>{icp.pilot.day30}</td>
            </tr>
            <tr>
              <td className="label">Day 60/90</td>
              <td>{icp.pilot.day90}</td>
            </tr>
            <tr>
              <td className="label">Fee</td>
              <td>{icp.pilot.fee}</td>
            </tr>
            <tr>
              <td className="label">Conversion event</td>
              <td>{icp.pilot.conversionEvent}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

function PrintTrackProfile({ track: t, breakBefore }) {
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
        Track {t.n}
      </div>
      <h3 style={{ marginTop: 0, borderTop: 0, paddingTop: 0 }}>{t.name}</h3>
      <blockquote style={{ margin: '0 0 6pt 0' }}>
        &ldquo;{t.message}&rdquo;
      </blockquote>

      <h4>Supporting quotes</h4>
      {t.quotes.map((q, i) => (
        <div key={i} className="print-keep" style={{ marginBottom: '4pt' }}>
          <blockquote style={{ margin: '0 0 2pt 0' }}>{q.text}</blockquote>
          <div style={{ fontSize: '8pt', color: '#4b5563', paddingLeft: '14pt' }}>
            — {q.speaker}
            {q.context ? ` · ${q.context}` : ''}
          </div>
        </div>
      ))}

      <p
        className="print-keep"
        style={{
          marginTop: '6pt',
          paddingTop: '4pt',
          borderTop: '0.5pt solid #0a1628',
        }}
      >
        <span style={{ fontWeight: 700 }}>
          {t.hardStop ? 'Hard stop · ' : 'Rule · '}
        </span>
        {t.hardStop ?? t.rule}
      </p>
    </div>
  )
}

function Panel({ title, tone, children }) {
  const toneMap = {
    navy: 'border-cc-navy bg-cc-navy/5',
    green: 'border-cc-green/30 bg-cc-green/5',
    red: 'border-cc-red/30 bg-cc-red/5',
  }
  const titleTone = {
    navy: 'text-cc-navy',
    green: 'text-cc-green',
    red: 'text-cc-red',
  }
  return (
    <div className={`rounded-lg border p-3 ${toneMap[tone]}`}>
      <h4
        className={`mb-2 text-[10px] font-bold uppercase tracking-wider ${titleTone[tone]}`}
      >
        {title}
      </h4>
      {children}
    </div>
  )
}

function PilotRow({ label, value, wide }) {
  return (
    <div className={wide ? 'md:col-span-2' : ''}>
      <dt className="text-[10px] font-bold uppercase tracking-wider text-cc-mid-gray">
        {label}
      </dt>
      <dd className="mt-0.5 text-cc-dark-text">{value}</dd>
    </div>
  )
}
