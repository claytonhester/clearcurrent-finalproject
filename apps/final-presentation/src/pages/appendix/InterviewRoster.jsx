import { appendixEyebrow } from '../../navConfig.js'
import { PageHeader } from '../../components/shared/PageHeader.jsx'
import { SectionHeader } from '../../components/shared/SectionHeader.jsx'
import { SourceLink } from '../../components/shared/SourceLink.jsx'
import {
  COVERAGE_GAP_ROWS,
  RECOMMENDED_NEW_VERTICALS,
} from '../../content/appendix/interviewRosterCoverage.ts'

const CONFIRMED = [
  ['Andee Chamberlain', 'Energy & Water Conservation Manager', 'Texas State University'],
  ['Carl Teague', 'Assistant Director, Maintenance', 'Texas State University'],
  ['James Norton', 'Supervisor, Electrical Distribution', 'Texas State University'],
  ['Andi Ault', 'Sr. Associate Director, Finance & Admin Services', 'UT Austin'],
  ['Troy Nevells', 'Director of Engineering & Technical Services', 'UT Austin'],
  [
    'Scott Czubkowski',
    'National Director, Energy & Facility Performance',
    'Medxcel (Ascension)',
  ],
  ['Ann Walston', 'VP Acute Care Facilities Management', 'Bon Secours Mercy Health'],
  ['Sean Sevy', 'Director of Operations, System Facilities', 'Houston Methodist'],
  ['Ross Snow', 'Director of Energy Management', 'Intermountain Health'],
  ['Matt Wilson', 'Manager, Remote Operations Center', 'Intermountain Health'],
  ['Bart Peacock', 'Manager, Support Services', 'Intermountain Health'],
  ['John Culver', 'Corporate Sustainability', 'AdventHealth Corporate'],
  [
    'Scott Sukits',
    'Director, Control Systems & Energy Mgmt, Central Florida',
    'AdventHealth',
  ],
  ['Walt Taylor', 'Energy Manager (Contractor)', 'Panda Restaurant Group'],
  [
    'Roger Goldstein',
    'Executive Director, Facilities & Energy',
    'Panda Restaurant Group',
  ],
  ['Jamare Bates', 'VP Clean Energy & Infrastructure Advisory', 'JLL'],
  ['Marc Spieler', 'Sr. Managing Director, Global Energy Industry', 'NVIDIA'],
  ['Adam Zavadsky', 'Senior Account Manager', 'ENGIE Impact'],
  ['Phil Combs', 'Sr. Digital Services Engineer · CMVP, CEM, PMVA', 'Trane Technologies'],
  ['Randy Dawes', 'Energy & Engineering Leadership', 'Hyatt'],
  ['Don Johnson', 'Sr. Account Manager', 'Trane'],
]

export function InterviewRoster() {
  return (
    <article className="flex flex-col gap-8">
      <PageHeader
        eyebrow={appendixEyebrow('app-roster')}
        title="Interview roster"
        lede="Twenty-one confirmed primary interviews. Section 2 summarizes where coverage is thin and how many additional conversations would materially strengthen findings — not a named outreach list."
      />

      <section className="flex flex-col gap-3">
        <SectionHeader number={1} title="Confirmed interviewees" />
        <RosterTable rows={CONFIRMED} columns={['Name', 'Role', 'Organization']} />
      </section>

      <section className="flex flex-col gap-6">
        <SectionHeader
          number={2}
          title="Coverage gaps & recommended interviews"
          subtitle="Three markets are marked as core GTM priorities (beachhead, parallel pipeline, long-term enterprise). The counts below assume a much larger primary program—not incremental one-off chats."
        />

        <div className="flex flex-col gap-2">
          <h3 className="text-[15px] font-bold text-cc-navy">
            Interview targets by industry
          </h3>
          <CoverageGapTable rows={COVERAGE_GAP_ROWS} />
        </div>

        <div className="flex flex-col gap-3">
          <h3 className="text-[15px] font-bold text-cc-navy">
            Additional industries to explore for fit
          </h3>
          <p className="text-[13px] leading-snug text-cc-mid-gray">
            Sectors with little or no primary voice yet—candidates for a later research
            wave to test whether Clear Current should treat them as customers, and under
            what motion.
          </p>
          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {RECOMMENDED_NEW_VERTICALS.map((v) => (
              <div key={v.vertical} className="evidence-card flex flex-col gap-1.5">
                <h4 className="text-[13px] font-bold text-cc-navy">{v.vertical}</h4>
                <p className="text-[12.5px] leading-snug text-cc-dark-text">{v.pitch}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SourceLink sourceId="primary-contacts" compact />
    </article>
  )
}

function RosterTable({ rows, columns }) {
  const hasStatusCol = columns.length === 4

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-cc-border bg-cc-light-gray/60">
            {columns.map((h) => (
              <th
                key={h}
                className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-cc-mid-gray"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={i}
              className={`border-b border-cc-border ${i % 2 === 0 ? 'bg-white' : 'bg-cc-light-gray/40'}`}
            >
              {columns.map((_, j) => {
                const isName = j === 0
                const isStatus = hasStatusCol && j === 3
                const cell = r[j] ?? ''
                return (
                  <td
                    key={j}
                    className={`px-3 py-2 align-top ${
                      isName
                        ? 'text-[13px] font-semibold text-cc-navy'
                        : isStatus
                          ? 'text-[12px] text-cc-mid-gray'
                          : 'text-[12.5px] text-cc-dark-text'
                    }`}
                  >
                    {cell}
                  </td>
                )
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

function CoverageGapTable({ rows }) {
  const columns = [
    'Industry / vertical',
    'Coverage today',
    'Add interviews',
    'Why it matters',
    'Future prospects',
  ]

  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse text-left text-sm">
        <caption className="sr-only">
          Recommended additional primary interviews by industry and vertical
        </caption>
        <thead>
          <tr className="border-b border-cc-border bg-cc-light-gray/60">
            {columns.map((h) => (
              <th
                key={h}
                className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-cc-mid-gray"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row, i) => {
            const priority = Boolean(row.tierLabel)
            return (
            <tr
              key={row.vertical}
              className={`border-b border-cc-border ${
                priority
                  ? 'border-l-4 border-l-cc-amber bg-cc-yellow-soft/40'
                  : i % 2 === 0
                    ? 'bg-white'
                    : 'bg-cc-light-gray/40'
              }`}
            >
              <td className="px-3 py-2 align-top">
                {row.tierLabel ? (
                  <div className="mb-1 text-[10px] font-bold uppercase tracking-wide text-cc-amber">
                    {row.tierLabel}
                  </div>
                ) : null}
                <div className="text-[13px] font-semibold text-cc-navy">{row.vertical}</div>
              </td>
              <td className="max-w-[13rem] px-3 py-2 align-top text-[12.5px] leading-snug text-cc-dark-text">
                {row.coverageToday}
              </td>
              <td className="whitespace-nowrap px-3 py-2 align-top text-[12.5px] font-semibold tabular-nums text-cc-navy">
                {row.addInterviews}
              </td>
              <td className="min-w-[12rem] px-3 py-2 align-top text-[12px] leading-snug text-cc-mid-gray">
                {row.rationale}
              </td>
              <td className="min-w-[11rem] max-w-[14rem] px-3 py-2 align-top text-[11.5px] leading-snug text-cc-dark-text">
                {row.companyTargets?.length ? (
                  <ul className="list-disc space-y-0.5 pl-3.5 marker:text-cc-navy">
                    {row.companyTargets.map((name) => (
                      <li key={name}>{name}</li>
                    ))}
                  </ul>
                ) : (
                  <span className="text-cc-mid-gray">—</span>
                )}
              </td>
            </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
