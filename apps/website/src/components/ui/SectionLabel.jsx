import { cn } from '../../lib/cn'

export default function SectionLabel({
  children,
  className,
  center,
  variant = 'default',
}) {
  if (variant === 'pill') {
    return (
      <div className={cn('inline-flex', center && 'justify-center w-full', className)}>
        <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[var(--gold)]/25 bg-[var(--gold)]/[0.06] text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--gold)] font-[var(--font-sans)]">
          <span className="w-1.5 h-1.5 rounded-full bg-[var(--gold)] animate-pulse" />
          {children}
        </span>
      </div>
    )
  }

  if (variant === 'subtle') {
    return (
      <div className={cn('inline-flex', center && 'justify-center w-full', className)}>
        <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-[var(--gray-600)] font-[var(--font-sans)]">
          {children}
        </span>
      </div>
    )
  }

  return (
    <div
      className={cn(
        'inline-flex items-center gap-2.5',
        center && 'justify-center w-full',
        className,
      )}
    >
      <span className="w-[3px] h-5 bg-gradient-to-b from-[var(--gold)] to-[var(--gold-hover)] rounded-full shrink-0" />
      <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-[var(--gold)] font-[var(--font-sans)]">
        {children}
      </span>
    </div>
  )
}
