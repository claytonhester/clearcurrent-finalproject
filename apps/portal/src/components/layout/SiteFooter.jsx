import { getBuildTimeIso, formatBuildDate } from '../../buildInfo'

export function SiteFooter() {
  const iso = getBuildTimeIso()
  const when = formatBuildDate(iso)

  return (
    <footer
      className="mt-12 border-t border-cc-mid-gray/15 pt-5 text-xs text-cc-mid-gray print:mt-4 print:border-t print:pt-3"
      role="contentinfo"
    >
      <p className="print:hidden">
        Build: {when || 'local'} · Clear Current GTM Intelligence Portal
      </p>
      <p className="hidden print:block">
        Generated {when || '—'} — Clear Current GTM Intelligence Portal. For sharing
        control, prefer a PDF export from your browser (Print → Save as PDF) when a static
        URL is too open.
      </p>
    </footer>
  )
}
