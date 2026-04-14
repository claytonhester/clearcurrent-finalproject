import { CopySectionLink } from './CopySectionLink'

export function SectionHeader({ children, anchorId, copyLink = false }) {
  return (
    <div className="mb-6">
      <div className="flex flex-wrap items-start justify-between gap-3 border-l-[3px] border-cc-yellow pl-4">
        <h2 className="text-lg font-bold tracking-tight text-cc-navy">{children}</h2>
        {copyLink && anchorId ? <CopySectionLink anchorId={anchorId} /> : null}
      </div>
    </div>
  )
}
