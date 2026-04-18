import { appendixEyebrow } from '../../navConfig.js'
import { PageHeader } from '../../components/shared/PageHeader.jsx'
import { SectionHeader } from '../../components/shared/SectionHeader.jsx'
import { SOURCES } from '../../content/sources.ts'

export function Sources() {
  const primary = Object.values(SOURCES).filter((s) => s.kind === 'primary-company-card')
  const secondary = Object.values(SOURCES).filter((s) => s.kind === 'external')

  return (
    <article className="flex flex-col gap-10">
      <PageHeader
        eyebrow={appendixEyebrow('app-sources')}
        title="Source registry"
        lede={`${primary.length} primary interview accounts and ${secondary.length} secondary citations referenced in the portal narrative. Repository paths, automation scripts, and internal deliverable drafts are intentionally omitted here.`}
      />

      <section className="flex flex-col gap-3">
        <SectionHeader
          title="Primary interviews"
          subtitle={`${primary.length} structured account summaries from stakeholder conversations.`}
        />
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-cc-border bg-cc-light-gray/60">
                <th className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-cc-mid-gray">
                  Account
                </th>
                <th className="border-l border-cc-border px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-cc-mid-gray">
                  Record
                </th>
              </tr>
            </thead>
            <tbody>
              {primary.map((s, i) => (
                <tr
                  key={s.id}
                  className={`border-b border-cc-border ${i % 2 === 0 ? 'bg-white' : 'bg-cc-light-gray/40'}`}
                >
                  <td className="px-3 py-2 align-top text-[12.5px] font-semibold text-cc-navy">
                    {s.title}
                  </td>
                  <td className="border-l border-cc-border px-3 py-2 align-top text-[12px] text-cc-mid-gray">
                    Primary interview summary
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="flex flex-col gap-3">
        <SectionHeader
          title="Secondary research — citations & links"
          subtitle={`${secondary.length} public references used to validate, quantify, or extend primary findings.`}
        />
        <p className="max-w-3xl text-[13px] leading-relaxed text-cc-dark-text">
          Secondary material was drawn from regulatory filings and enforcement summaries,
          independent legal and academic commentary, vendor and industry surveys,
          aggregated software reviews, and trade reporting on competitive moves. Where a
          direct link was captured during research, it is shown below; otherwise the note
          describes how the citation was used.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-left text-sm">
            <thead>
              <tr className="border-b border-cc-border bg-cc-light-gray/60">
                <th className="px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-cc-mid-gray">
                  Citation
                </th>
                <th className="border-l border-cc-border px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-cc-mid-gray">
                  Link
                </th>
                <th className="border-l border-cc-border px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-cc-mid-gray">
                  Notes
                </th>
              </tr>
            </thead>
            <tbody>
              {secondary.map((s, i) => (
                <tr
                  key={s.id}
                  className={`border-b border-cc-border ${i % 2 === 0 ? 'bg-white' : 'bg-cc-light-gray/40'}`}
                >
                  <td className="px-3 py-2 align-top text-[12.5px] font-semibold text-cc-navy">
                    {s.title}
                  </td>
                  <td className="border-l border-cc-border px-3 py-2 align-top text-[12px]">
                    {s.url ? (
                      <a
                        href={s.url}
                        target="_blank"
                        rel="noreferrer"
                        className="break-all font-medium text-cc-navy underline decoration-dotted underline-offset-2 hover:text-cc-navy-light"
                      >
                        {s.url}
                      </a>
                    ) : (
                      <span className="text-cc-mid-gray">—</span>
                    )}
                  </td>
                  <td className="border-l border-cc-border px-3 py-2 align-top text-[12px] text-cc-mid-gray">
                    {s.note ?? '—'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </article>
  )
}
