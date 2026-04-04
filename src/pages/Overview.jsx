import {
  Target,
  CalendarClock,
  Link as LinkIcon,
  Sparkles,
} from 'lucide-react'
import { StatCard } from '../components/shared/StatCard'
import { PullQuote } from '../components/shared/PullQuote'
import { SectionHeader } from '../components/shared/SectionHeader'
import { PlaceholderBadge } from '../components/shared/PlaceholderBadge'
import { overview } from '../data/overview'
import { quoteById } from '../data/quotes'

const findingIcons = {
  Target,
  CalendarClock,
  Link: LinkIcon,
  Sparkles,
}

export function Overview() {
  const featured = quoteById(overview.featuredQuoteId)

  return (
    <div className="space-y-10">
      <header className="rounded-xl bg-cc-navy px-8 py-10 text-cc-white shadow-sm">
        <p className="text-sm font-medium uppercase tracking-wide text-cc-yellow">
          GTM Intelligence Report
        </p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">
          {overview.meta.title}
        </h2>
        <p className="mt-3 text-sm text-white/80">{overview.meta.dateRange}</p>
      </header>

      <section>
        <SectionHeader>At a glance</SectionHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {overview.stats.map((s) => (
            <StatCard key={s.id} label={s.label} value={s.value} status={s.status} />
          ))}
        </div>
      </section>

      <section>
        <SectionHeader>What we found</SectionHeader>
        <div className="grid gap-4 md:grid-cols-2">
          {overview.findings.map((f) => {
            const Icon = findingIcons[f.icon] ?? Sparkles
            return (
              <div
                key={f.id}
                className="rounded-xl border border-cc-mid-gray/15 bg-cc-white p-5 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-cc-light-gray text-cc-navy">
                    <Icon className="h-5 w-5" aria-hidden />
                  </span>
                  <div>
                    <h3 className="flex items-center font-bold text-cc-navy">
                      {f.headline}
                      <PlaceholderBadge status={f.status} />
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-cc-dark-text/90">
                      {f.summary}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {featured ? (
        <section>
          <SectionHeader>Featured insight</SectionHeader>
          <PullQuote text={featured.text} source={featured.source} title={featured.title} />
        </section>
      ) : null}

      <section>
        <SectionHeader>Interview roster</SectionHeader>
        <div className="grid gap-3 sm:grid-cols-2">
          {overview.interviewRoster.map((p) => (
            <div
              key={p.id}
              className="rounded-xl border border-cc-mid-gray/15 bg-cc-white p-4 shadow-sm"
            >
              <p className="font-semibold text-cc-navy">{p.name}</p>
              <p className="text-sm text-cc-mid-gray">{p.title}</p>
              <p className="text-sm text-cc-dark-text">{p.company}</p>
              <p className="mt-2 text-xs font-medium text-cc-mid-gray">{p.date}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="pb-4 text-center">
        <a
          href={overview.cta.href}
          className="inline-flex items-center gap-2 text-sm font-semibold text-cc-navy underline decoration-cc-yellow decoration-2 underline-offset-4 hover:text-cc-navy/80"
        >
          {overview.cta.label} <span aria-hidden>→</span>
        </a>
      </section>
    </div>
  )
}
