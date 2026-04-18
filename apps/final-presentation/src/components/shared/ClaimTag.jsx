const STYLES = {
  FITS: 'bg-cc-green/10 text-cc-green border-cc-green/30',
  EXTENDS: 'bg-cc-yellow-soft text-cc-amber border-cc-amber/30',
  'NET-NEW': 'bg-cc-navy/5 text-cc-navy border-cc-navy/20',
  'INTERNAL-UNVERIFIED': 'bg-cc-red/5 text-cc-red border-cc-red/30',
  'NEEDS-VERIFICATION': 'bg-cc-mid-gray/10 text-cc-mid-gray border-cc-mid-gray/30',
}

const LABELS = {
  FITS: 'FITS current product',
  EXTENDS: 'Extends roadmap',
  'NET-NEW': 'Net-new / research-only',
  'INTERNAL-UNVERIFIED': 'Internal claim — not independently verified',
  'NEEDS-VERIFICATION': 'Needs verification',
}

export function ClaimTag({ tag, compact = false }) {
  if (!tag) return null
  const label = LABELS[tag] ?? tag
  const style = STYLES[tag] ?? STYLES['NEEDS-VERIFICATION']
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${style}`}
    >
      {compact ? tag : label}
    </span>
  )
}
