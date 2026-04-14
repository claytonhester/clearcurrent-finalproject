import { Link } from 'react-router-dom'
import { SectionHeader } from '../components/shared/SectionHeader'
import { PlaceholderBadge } from '../components/shared/PlaceholderBadge'
import { ceoBrief } from '../data/ceoBrief'

export function CeoBrief() {
  return (
    <div className="space-y-12">
      {/* ── Header ───────────────────────────────────────────── */}
      <header className="relative overflow-hidden rounded-xl bg-cc-navy shadow-sm">
        <div
          className="pointer-events-none absolute inset-0 select-none"
          aria-hidden
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(255,255,255,0.07) 1px, transparent 1px)',
            backgroundSize: '24px 24px',
          }}
        />
        <div className="relative px-8 py-10">
          <div className="flex items-center gap-3">
            <div className="h-px w-8 bg-cc-yellow" aria-hidden />
            <p className="text-xs font-bold uppercase tracking-widest text-cc-yellow">
              Async review
            </p>
          </div>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-white">
            {ceoBrief.meta.title}
          </h2>
          <p className="mt-2 text-sm text-white/70">{ceoBrief.meta.audience}</p>
          <p className="mt-1 text-sm text-white/50">
            As of {ceoBrief.meta.asOf}
            <PlaceholderBadge status={ceoBrief.meta.status} />
          </p>
          <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/75">
            {ceoBrief.intro}
          </p>
          <div className="mt-6 border-t border-white/10 pt-5">
            <Link
              to="/"
              className="text-sm font-semibold text-cc-yellow hover:text-cc-yellow/80"
            >
              ← Executive Summary
            </Link>
          </div>
        </div>
      </header>

      {/* ── Decision asks ────────────────────────────────────── */}
      <section id="decision-asks" tabIndex={-1} className="scroll-mt-24 outline-none">
        <SectionHeader anchorId="decision-asks" copyLink>
          Decision asks
        </SectionHeader>
        <ul className="space-y-4">
          {ceoBrief.decisionAsks.map((d) => (
            <li
              key={d.id}
              className="rounded-xl border-l-[3px] border-cc-yellow bg-cc-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="text-base font-bold text-cc-navy">{d.title}</h3>
                <PlaceholderBadge status={d.status} />
              </div>
              <p className="mt-2 text-sm leading-relaxed text-cc-dark-text">
                {d.context}
              </p>
              {d.suggestedOwner ? (
                <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-cc-mid-gray">
                  Owner: {d.suggestedOwner}
                </p>
              ) : null}
            </li>
          ))}
        </ul>
      </section>

      {/* ── Opportunities & Risks ────────────────────────────── */}
      <div className="grid gap-8 lg:grid-cols-2">
        <section id="opportunities" tabIndex={-1} className="scroll-mt-24 outline-none">
          <SectionHeader anchorId="opportunities" copyLink>
            Opportunities
          </SectionHeader>
          <ul className="space-y-3">
            {ceoBrief.opportunities.map((o) => (
              <li
                key={o.id}
                className="rounded-xl border border-cc-yellow/40 bg-cc-yellow/10 p-4 text-sm shadow-sm"
              >
                <p className="font-bold text-cc-navy">{o.headline}</p>
                <p className="mt-2 leading-relaxed text-cc-dark-text/90">{o.detail}</p>
              </li>
            ))}
          </ul>
        </section>

        <section id="risks" tabIndex={-1} className="scroll-mt-24 outline-none">
          <SectionHeader anchorId="risks" copyLink>
            Risks
          </SectionHeader>
          <ul className="space-y-3">
            {ceoBrief.risks.map((r) => (
              <li
                key={r.id}
                className="rounded-xl border border-cc-mid-gray/20 bg-cc-white p-4 text-sm shadow-sm"
              >
                <p className="font-bold text-cc-navy">{r.headline}</p>
                <p className="mt-2 leading-relaxed text-cc-dark-text/90">{r.detail}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* ── Methodology ──────────────────────────────────────── */}
      <section id="methodology" tabIndex={-1} className="scroll-mt-24 outline-none">
        <SectionHeader anchorId="methodology" copyLink>
          {ceoBrief.methodology.title}
        </SectionHeader>
        <div className="space-y-3 rounded-xl border border-cc-mid-gray/15 bg-cc-white p-6 text-sm leading-relaxed shadow-sm">
          {ceoBrief.methodology.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
          <ul className="mt-1 list-inside list-disc space-y-1 text-cc-dark-text">
            {ceoBrief.methodology.bullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Limitations ──────────────────────────────────────── */}
      <section id="limitations" tabIndex={-1} className="scroll-mt-24 outline-none">
        <SectionHeader anchorId="limitations" copyLink>
          {ceoBrief.limitations.title}
        </SectionHeader>
        <ul className="list-inside list-disc space-y-2 rounded-xl border border-cc-mid-gray/15 bg-cc-light-gray/50 p-6 text-sm text-cc-dark-text shadow-sm">
          {ceoBrief.limitations.items.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      </section>

      {/* ── Privacy & sharing ────────────────────────────────── */}
      <section id="privacy-sharing" tabIndex={-1} className="scroll-mt-24 outline-none">
        <SectionHeader anchorId="privacy-sharing" copyLink>
          {ceoBrief.privacy.title}
        </SectionHeader>
        <div className="space-y-3 rounded-xl border border-cc-navy/15 bg-cc-navy/[0.03] p-6 text-sm leading-relaxed text-cc-dark-text shadow-sm">
          {ceoBrief.privacy.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>
    </div>
  )
}
