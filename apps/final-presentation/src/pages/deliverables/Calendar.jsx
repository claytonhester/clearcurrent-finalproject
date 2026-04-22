import { Calendar as CalendarIcon, Flame, Snowflake } from 'lucide-react'
import { DeliverableHero, SectionLead } from '../../components/shared/DeliverableHero.jsx'
import { PrintReport } from '../../components/shared/PrintReport.jsx'
import { PrintSectionOpener } from '../../components/print/PrintSectionOpener.jsx'
import { PrintExhibit } from '../../components/print/PrintExhibit.jsx'
import { PullQuote } from '../../components/print/PullQuote.jsx'
import { CalendarStrip } from '../../components/print/charts/CalendarStrip.jsx'
import { D2 } from '../../content/deliverables/d2-calendar.js'
import { DELIVERABLES } from '../../navConfig.js'

const D2_META = DELIVERABLES.find((d) => d.id === 'calendar')

const INTENSITY = {
  peak: { bar: 'bg-cc-red', label: 'Peak', pill: 'bg-cc-red text-white' },
  high: { bar: 'bg-cc-amber', label: 'High', pill: 'bg-cc-amber text-white' },
  medium: { bar: 'bg-cc-yellow', label: 'Medium', pill: 'bg-cc-yellow text-cc-navy' },
  low: { bar: 'bg-cc-border', label: 'Low', pill: 'bg-cc-light-gray text-cc-mid-gray' },
}

const INTENSITY_HEIGHT = { peak: 'h-16', high: 'h-12', medium: 'h-8', low: 'h-5' }

export function Calendar() {
  return (
    <PrintReport
      deliverable={D2_META}
      leadStatement={D2.openingProblem}
      tldrBullets={D2.tldrBullets}
      cover={{
        docNumber: 'D2',
        eyebrow: 'Seasonal Energy Management Calendar',
        actionTitle:
          'Ride the calendar. Don\u2019t run flat outreach.',
        summary:
          'Twelve months of fiscal cliffs, demand peaks, and rate-case windows. The two priority windows mark when invoice intelligence and regulatory foresight close fastest.',
      }}
    >
    <article className="pb-16">
      <DeliverableHero
        tagline={D2.tagline}
        leadStatement={D2.openingProblem}
        tldrBullets={D2.tldrBullets}
      />

      {/* CALENDAR STRIP — print-only editorial exhibit. The on-screen
          heatstrip above this section is hidden in print; this strip
          provides the visual rhythm in PDF form. */}
      <section className="hidden print:block mb-8">
        <PrintSectionOpener
          kicker="Annual intensity map"
          title="Two windows carry the year"
          dek="Bar height encodes monthly engagement intensity. Gold marks the priority decision windows surfaced by the research."
        />
        <PrintExhibit
          number="1"
          caption="12-month engagement intensity · decision windows in gold"
          source="D2 Seasonal Energy Management Calendar (months and priority windows)."
        >
          <CalendarStrip
            months={D2.months.map((m) => ({
              label: m.month,
              intensity: m.intensity,
            }))}
            windowMonths={['Feb', 'Mar', 'Sep', 'Oct']}
            legend={{
              intensity: 'Monthly engagement intensity',
              window: 'Priority decision window',
            }}
          />
        </PrintExhibit>
      </section>

      {/* HEATSTRIP — screen only. The visualization doesn't translate to
          paper; the print version below is a proper 12-month table. */}
      <section className="mb-10 print:hidden">
        <SectionLead kicker="Annual intensity map" title="Where buyer attention spikes">
          Each bar's height and color shows the relative sales intensity of that month.
        </SectionLead>
        <div className="rounded-lg border border-cc-border bg-white p-5 shadow-sm">
          <div className="grid grid-cols-12 gap-1.5 sm:gap-2">
            {D2.months.map((m) => {
              const cfg = INTENSITY[m.intensity] ?? INTENSITY.low
              return (
                <div
                  key={m.month}
                  className="flex flex-col items-center justify-end"
                  title={m.headline}
                >
                  <div
                    className={`w-full rounded-t ${cfg.bar} ${
                      INTENSITY_HEIGHT[m.intensity] ?? INTENSITY_HEIGHT.low
                    }`}
                  />
                  <span className="mt-1 text-[10px] font-bold text-cc-navy">
                    {m.month}
                  </span>
                </div>
              )
            })}
          </div>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-[10px] font-bold uppercase tracking-wider text-cc-mid-gray">
            Legend:
            {Object.entries(INTENSITY).map(([k, cfg]) => (
              <span key={k} className="flex items-center gap-1">
                <span className={`inline-block h-3 w-3 rounded ${cfg.bar}`} />
                {cfg.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* PRIORITY WINDOWS */}
      <section className="mb-10">
        <SectionLead kicker="Priority windows" title="The two highest-converting months">
          Highest-intent selling windows grounded in research — where to concentrate
          outbound.
        </SectionLead>
        <div className="grid gap-4 md:grid-cols-2">
          {D2.priorityWindows.map((w, i) => (
            <div
              key={i}
              className="relative rounded-lg border-2 border-cc-yellow bg-cc-yellow-soft p-5"
            >
              <div className="absolute -top-3 left-5 rounded bg-cc-yellow px-2 py-0.5 text-[10px] font-bold uppercase tracking-widest text-cc-navy">
                Window
              </div>
              <div className="mt-2 flex items-center gap-2">
                <CalendarIcon className="h-5 w-5 text-cc-navy" />
                <h3 className="text-[18px] font-bold text-cc-navy">{w.window}</h3>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed text-cc-dark-text">
                {w.why}
              </p>
              <div className="mt-3 inline-flex rounded bg-cc-navy px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-cc-yellow">
                CC Product · {w.module}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MONTH-BY-MONTH — screen view (cards). */}
      <section className="mb-10 print:hidden">
        <SectionLead
          kicker="Month by month"
          title="Fiscal cycles, weather, and rate-case timing"
        >
          Each month names what's happening, which vertical is active, and the sales play
          that fits.
        </SectionLead>
        <div className="overflow-hidden rounded-lg border border-cc-border bg-white shadow-sm">
          <div className="grid grid-cols-12 gap-px bg-cc-border">
            {D2.months.map((m, i) => (
              <MonthCell key={m.month} month={m} even={i % 2 === 0} />
            ))}
          </div>
        </div>
      </section>

      {/* MONTH-BY-MONTH — print only. One semantic 12-row table that
          maps to the reference PDF's '12-Month Activity Calendar'. */}
      <section className="hidden print:block mb-10">
        <SectionLead
          kicker="Month by month"
          title="12-month activity calendar"
        >
          Each row names what's happening, the lead Clear Current module, the
          relative intensity, and the sales play that fits.
        </SectionLead>

        <table className="print-data-table" style={{ tableLayout: 'fixed' }}>
          <colgroup>
            <col style={{ width: '5%' }} />
            <col style={{ width: '37%' }} />
            <col style={{ width: '14%' }} />
            <col style={{ width: '8%' }} />
            <col style={{ width: '36%' }} />
          </colgroup>
          <thead>
            <tr>
              <th>Mo.</th>
              <th>Focus &amp; activities</th>
              <th>Lead module</th>
              <th>Level</th>
              <th>Sales play</th>
            </tr>
          </thead>
          <tbody>
            {D2.months.map((m) => (
              <tr key={m.month}>
                <td className="strong">{m.month}</td>
                <td>
                  <span className="strong">{m.headline}</span>
                  {m.activities && m.activities.length ? (
                    <span style={{ color: '#4b5563' }}>
                      {' · '}
                      {m.activities.join(' · ')}
                    </span>
                  ) : null}
                </td>
                <td>{m.leadModule}</td>
                <td className="label">{m.intensity}</td>
                <td>{m.salesPlay}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* FISCAL YEARS */}
      <section className="mb-10">
        <SectionLead
          kicker="Fiscal patterns"
          title="Which vertical runs on which calendar"
        >
          The recurring wedge: budgets lock before utilities finalize rates.
        </SectionLead>
        <div className="overflow-x-auto rounded-lg border border-cc-border bg-white shadow-sm">
          <table className="w-full text-left text-[12.5px]">
            <thead className="bg-cc-light-gray">
              <tr>
                <Th>Vertical</Th>
                <Th>FY start</Th>
                <Th>Budget lock</Th>
                <Th>Notes</Th>
              </tr>
            </thead>
            <tbody>
              {D2.fiscalYears.map((f) => (
                <tr key={f.vertical} className="border-t border-cc-border/60">
                  <Td bold>{f.vertical}</Td>
                  <Td>
                    <span className="inline-flex items-center gap-1">
                      <Flame className="h-3.5 w-3.5 text-cc-amber" />
                      {f.fyStart}
                    </span>
                  </Td>
                  <Td>
                    <span className="inline-flex items-center gap-1">
                      <Snowflake className="h-3.5 w-3.5 text-cc-navy" />
                      {f.budgetLock}
                    </span>
                  </Td>
                  <Td muted>{f.notes}</Td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* PROMOTED MOMENT — print-only pull quote. Anchors why budget timing
          is the structural wedge for the calendar play. */}
      <PullQuote attribution="Andi Ault" role="UT Austin">
        We submit the budget before the City of Austin rates are final.
      </PullQuote>

      {/* BIG TAKEAWAYS */}
      <section>
        <SectionLead kicker="Takeaways" title="What this calendar says for GTM">
          The arithmetic of attention — where to show up and why.
        </SectionLead>
        <ol className="space-y-2">
          {D2.bigTakeaways.map((t, i) => (
            <li
              key={i}
              className="flex gap-3 rounded border-l-4 border-cc-yellow bg-white px-4 py-3 text-[13px] leading-relaxed text-cc-dark-text shadow-sm"
            >
              <span className="flex-shrink-0 font-mono text-[11px] font-bold text-cc-mid-gray">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span>{t}</span>
            </li>
          ))}
        </ol>
      </section>
    </article>
    </PrintReport>
  )
}

function MonthCell({ month }) {
  const cfg = INTENSITY[month.intensity] ?? INTENSITY.low
  return (
    <div className="col-span-12 flex flex-col bg-white p-4 sm:col-span-6 lg:col-span-4 xl:col-span-3">
      <div className="flex items-baseline justify-between">
        <span className="text-[22px] font-bold leading-none text-cc-navy">
          {month.month}
        </span>
        <span
          className={`rounded px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider ${cfg.pill}`}
        >
          {cfg.label}
        </span>
      </div>
      <h4 className="mt-2 text-[13px] font-bold leading-snug text-cc-dark-text">
        {month.headline}
      </h4>
      <ul className="mt-2 space-y-1 text-[11.5px] leading-relaxed text-cc-mid-gray">
        {month.activities.map((a, i) => (
          <li key={i} className="flex gap-1.5">
            <span>·</span>
            <span>{a}</span>
          </li>
        ))}
      </ul>
      <div className="mt-3 rounded bg-cc-navy/5 px-2 py-1.5 text-[11px]">
        <div className="text-[9px] font-bold uppercase tracking-wider text-cc-navy">
          CC Product
        </div>
        <div className="font-semibold text-cc-navy">{month.leadModule}</div>
      </div>
      <div className="mt-2 text-[11px] italic leading-snug text-cc-dark-text">
        {month.salesPlay}
      </div>
    </div>
  )
}

function Th({ children }) {
  return (
    <th className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-cc-navy">
      {children}
    </th>
  )
}

function Td({ children, bold, muted }) {
  return (
    <td
      className={`px-4 py-3 align-top ${bold ? 'font-bold text-cc-navy' : ''} ${
        muted ? 'text-cc-mid-gray' : ''
      }`}
    >
      {children}
    </td>
  )
}
