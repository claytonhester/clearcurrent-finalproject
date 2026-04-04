export function Badge({ children, variant = 'default' }) {
  const styles = {
    default: 'bg-cc-light-gray text-cc-dark-text border-cc-mid-gray/20',
    priority: 'bg-cc-navy/10 text-cc-navy border-cc-navy/20',
    accent: 'bg-cc-yellow/20 text-cc-navy border-cc-yellow/40',
    muted: 'bg-white text-cc-mid-gray border-cc-mid-gray/25',
  }
  return (
    <span
      className={`inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold ${styles[variant] ?? styles.default}`}
    >
      {children}
    </span>
  )
}
