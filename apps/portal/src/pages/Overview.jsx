import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Target, CalendarClock, Link as LinkIcon, Sparkles } from 'lucide-react'
import { StatCard } from '../components/shared/StatCard'
import { PullQuote } from '../components/shared/PullQuote'
import { SectionHeader } from '../components/shared/SectionHeader'
import { PlaceholderBadge } from '../components/shared/PlaceholderBadge'
import { overview } from '../data/overview'
import { quoteById } from '../data/quotes'

const LAST_ROUTE_KEY = 'cc-portal-last-route'

const findingIcons = {
  Target,
  CalendarClock,
  Link: LinkIcon,
  Sparkles,
}

export function Overview() {
  const featured = quoteById(overview.featuredQuoteId)
  const [resumeTo] = useState(() => {
    try {
      const v = localStorage.getItem(LAST_ROUTE_KEY)
      return v && v !== '/' ? v : null
    } catch {
      return null
    }
  })

  return (
    <div className="space-y-12">
      {resumeTo ? (
        <div
          className="rounded-lg border border-cc-navy/20 bg-cc-navy/[0.04] px-4 py-3 text-sm text-cc-dark-text print:hidden"
          role="status"
        >
          <span>Continue where you left off: </span>
          <Link
            to={resumeTo}
            className="font-semibold text-cc-navy underline decoration-cc-yellow decoration-2 underline-offset-4"
          >
            Open last section
          </Link>
          <span className="mt-1 block text-xs text-cc-mid-gray">
            Stored only in this browser (local storage).
          </span>
        </div>
      ) : null}

      {/* ── Hero ─────────────────────────────────────────────── */}
      <header
        id="overview-hero"
        className="relative overflow-hidden rounded-xl bg-cc-navy shadow-sm"
      >
        <div
          className="pointer-events-none absolute inset-0 select-none"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative px-8 py-12">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-cc-yellow" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-widest text-cc-yellow">
              GTM Intelligence Report
            </p>
          </div>
          <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.15] tracking-tight text-white">
            {overview.meta.title}
          </h2>
          <p className="mt-3 text-sm text-white/60">{overview.meta.dateRange}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to={overview.cta.href}
              className="inline-flex items-center gap-2 rounded-lg bg-cc-yellow px-5 py-2.5 text-sm font-bold text-cc-navy shadow-sm hover:bg-cc-yellow/90"
            >
              {overview.cta.label} <span aria-hidden>→</span>
            </Link>
            <a
              href="#at-a-glance"
              className="inline-flex items-center gap-2 rounded-lg border border-white/25 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              View findings
            </a>
          </div>
        </div>
      </header>

      {/* ── At a glance ──────────────────────────────────────── */}
      <section id="at-a-glance" tabIndex={-1} className="scroll-mt-24 outline-none">
        <SectionHeader>At a glance</SectionHeader>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {overview.stats.map((s) => (
            <StatCard key={s.id} label={s.label} value={s.value} status={s.status} />
          ))}
        </div>
      </section>

      {/* ── What we found ────────────────────────────────────── */}
      <section id="what-we-found" tabIndex={-1} className="scroll-mt-24 outline-none">
        <SectionHeader>What we found</SectionHeader>
        <div className="grid gap-4 md:grid-cols-2">
          {overview.findings.map((f, idx) => {
            const Icon = findingIcons[f.icon] ?? Sparkles
            return (
              <div key={f.id} className="rounded-xl bg-cc-white p-5 shadow-sm">
                <div className="mb-4 flex items-start justify-between gap-2">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cc-navy">
                    <Icon className="h-4 w-4 text-cc-yellow" aria-hidden />
                  </span>
                  <span className="text-sm font-bold tabular-nums text-cc-mid-gray/40">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-bold text-cc-navy">
                  {f.headline}
                  <PlaceholderBadge status={f.status} />
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-cc-dark-text/85">
                  {f.summary}
                </p>
              </div>
            )
          })}
        </div>
      </section>

      {/* ── Featured insight ─────────────────────────────────── */}
      {featured ? (
        <section
          id="featured-insight"
          tabIndex={-1}
          className="scroll-mt-24 outline-none"
        >
          <SectionHeader>Featured insight</SectionHeader>
          <PullQuote
            text={featured.text}
            source={featured.source}
            title={featured.title}
          />
        </section>
      ) : null}

      {/* ── Interview roster ─────────────────────────────────── */}
      <section id="interview-roster" tabIndex={-1} className="scroll-mt-24 outline-none">
        <SectionHeader>Interview roster</SectionHeader>
        <div className="grid gap-3 sm:grid-cols-2">
          {overview.interviewRoster.map((p) => {
            const initials = p.name
              .split(' ')
              .map((n) => n[0])
              .slice(0, 2)
              .join('')
            return (
              <div
                key={p.id}
                className="flex items-center gap-4 rounded-xl border border-cc-mid-gray/15 bg-cc-white p-4 shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cc-navy text-sm font-bold text-cc-yellow">
                  {initials}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-cc-navy">{p.name}</p>
                  <p className="text-sm text-cc-mid-gray">{p.title}</p>
                  <p className="text-xs text-cc-dark-text">{p.company}</p>
                </div>
                <p className="shrink-0 text-xs font-medium text-cc-mid-gray">{p.date}</p>
              </div>
            )
          })}
        </div>
      </section>
    </div>
  )
}
