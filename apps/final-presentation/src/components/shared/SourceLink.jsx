import { ExternalLink } from 'lucide-react'
import { SOURCES } from '../../content/sources.ts'

/** Inline citation label. Opens an external URL only when the source defines one — no drawer or repo paths in the UI. */
export function SourceLink({ sourceId, label, compact = false }) {
  const src = SOURCES[sourceId]

  if (!src) {
    return (
      <span className="inline-flex items-center gap-1 rounded bg-cc-red/10 px-1.5 py-0.5 text-[10px] font-semibold text-cc-red">
        unknown source: {sourceId}
      </span>
    )
  }

  const text = label ?? src.title
  const shared = compact
    ? 'inline-flex max-w-full items-center gap-1 text-[11px] font-medium text-cc-navy/80'
    : 'inline-flex max-w-full items-center gap-1 rounded border border-cc-border bg-white px-2 py-0.5 text-[11px] font-semibold text-cc-navy/80 print:border-none print:bg-transparent'

  if (src.url) {
    return (
      <a
        href={src.url}
        target="_blank"
        rel="noreferrer"
        className={`${shared} underline decoration-dotted underline-offset-2 hover:text-cc-navy`}
      >
        <ExternalLink className="h-3 w-3 flex-shrink-0" aria-hidden="true" />
        <span className="min-w-0 truncate">{text}</span>
      </a>
    )
  }

  return (
    <span className={`${shared} text-cc-navy/70`}>
      <span className="min-w-0 truncate">{text}</span>
    </span>
  )
}
