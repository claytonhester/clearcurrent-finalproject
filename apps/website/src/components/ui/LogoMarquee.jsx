const badges = [
  { label: 'Fortune 500 Manufacturers', since: 'Since 2024' },
  { label: 'University Systems', since: 'Since 2024' },
  { label: 'Health Networks', since: 'Since 2025' },
  { label: 'Data Centers', since: 'Since 2025' },
  { label: 'Commercial REITs', since: 'Since 2025' },
  { label: 'Government Agencies', since: 'Since 2025' },
  { label: 'Retail Chains', since: 'Since 2026' },
  { label: 'Tech Campuses', since: 'Since 2025' },
]

export default function LogoMarquee() {
  return (
    <div className="relative overflow-hidden group">
      {/* Edge fade masks */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      <div
        className="flex gap-5 w-max group-hover:[animation-play-state:paused]"
        style={{ animation: 'marquee 40s linear infinite' }}
      >
        {[...badges, ...badges].map((badge, i) => (
          <span
            key={`${badge.label}-${i}`}
            className="shrink-0 flex items-center gap-3 px-5 py-2.5 rounded-full border border-[var(--gray-200)] bg-white shadow-[0_1px_2px_rgba(0,0,0,0.04)] text-sm font-medium font-[var(--font-sans)] whitespace-nowrap transition-all duration-300 hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:border-[var(--gray-400)]"
          >
            <span className="text-[var(--navy)]">{badge.label}</span>
            <span className="text-[10px] tracking-wider uppercase text-[var(--gray-400)]">
              {badge.since}
            </span>
          </span>
        ))}
      </div>
    </div>
  )
}
