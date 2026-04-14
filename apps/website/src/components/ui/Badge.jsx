import { cn } from '../../lib/cn'

export default function Badge({ children, className }) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full border border-[var(--gray-400)] text-[var(--gray-600)] text-xs font-medium font-[var(--font-sans)]',
        className,
      )}
    >
      {children}
    </span>
  )
}
