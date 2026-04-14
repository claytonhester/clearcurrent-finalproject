import { SectionHeader } from '../components/shared/SectionHeader'
import { PlaceholderBadge } from '../components/shared/PlaceholderBadge'
import { PageIntro } from '../components/shared/PageIntro'
import { bonus } from '../data/bonus'

export function BonusDeliverables() {
  return (
    <div className="space-y-10">
      <PageIntro label="Bonus deliverables">{bonus.intro}</PageIntro>

      <section id="bonus-sections" tabIndex={-1} className="scroll-mt-24 outline-none">
        <SectionHeader>Bonus sections</SectionHeader>
        <div className="space-y-4">
          {bonus.sections.map((s) => (
            <article
              key={s.id}
              className="rounded-xl border border-cc-mid-gray/15 bg-cc-white p-5 shadow-sm"
            >
              <h3 className="flex flex-wrap items-center gap-2 text-lg font-bold text-cc-navy">
                {s.title}
                <PlaceholderBadge status={s.status} />
              </h3>
              <p className="mt-2 text-sm leading-relaxed">{s.body}</p>
            </article>
          ))}
        </div>
      </section>

      {bonus.externalLinks?.length ? (
        <section id="bonus-external" tabIndex={-1} className="scroll-mt-24 outline-none">
          <SectionHeader>External references</SectionHeader>
          <ul className="list-inside list-disc space-y-2 text-sm">
            {bonus.externalLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-cc-navy underline decoration-cc-yellow decoration-2 underline-offset-2 hover:text-cc-navy/80"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  )
}
