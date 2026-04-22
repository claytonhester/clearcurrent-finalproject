import { useEffect } from 'react'
import { PrintCover } from '../print/PrintCover.jsx'

/**
 * Print-only report shell.
 *
 * Renders nothing on screen. When the user prints (Cmd-P or the Print button),
 * styles the page like the existing D0–D8 PDF reports:
 *
 *   - Running header on every page (top-left = doc identity, top-right = "Page N of M")
 *   - "— N of M —" footer centered at the bottom of every page
 *   - No cover page (deliverable starts on page 1, just like the PDFs)
 *   - Optional lead-statement prose paragraph(s) above KEY TAKEAWAYS
 *   - KEY TAKEAWAYS as a plain section with → arrow bullets
 *   - Optional "Sources & evidence" appendix on its own page
 *
 * The on-screen page content (children) is unchanged.
 *
 * Implementation note: the running header/footer use CSS `@page` margin boxes
 * (Chrome 84+) so they're true page chrome, not floating divs. Per-deliverable
 * header text is injected via a <style> tag because @page margin boxes can't
 * read CSS custom properties reliably in Chromium.
 */

const DOC_DATE = 'April 2026'

function buildPageStyleCss({ headerLeft, headerRight, hasCover }) {
  const firstPageOverride = hasCover
    ? `
  @page :first {
    @top-left { content: ""; }
    @top-right { content: ""; }
    @bottom-center { content: ""; }
  }
`
    : ''

  return `
@media print {
  @page {
    size: letter portrait;
    margin: 0.95in 0.7in 0.85in 0.7in;

    @top-left {
      content: ${JSON.stringify(headerLeft)};
      font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
      font-size: 7.75pt;
      font-weight: 600;
      letter-spacing: 0.14em;
      color: #0a1628;
      padding-bottom: 18pt;
      vertical-align: top;
      white-space: nowrap;
    }

    @top-right {
      content: ${JSON.stringify(headerRight + ' ')} counter(page) " OF " counter(pages);
      font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
      font-size: 7.75pt;
      font-weight: 500;
      letter-spacing: 0.14em;
      color: #6b7280;
      padding-bottom: 18pt;
      vertical-align: top;
      white-space: nowrap;
    }

    @bottom-center {
      content: "—  " counter(page) " of " counter(pages) "  —";
      font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
      font-size: 8pt;
      letter-spacing: 0.12em;
      color: #9aa0ac;
      padding-top: 16pt;
    }
  }
${firstPageOverride}}
`
}

export function PrintReport({
  deliverable,
  leadStatement,
  tldrBullets,
  sources,
  cover,
  children,
}) {
  // Body class is a hook for any print CSS rules that need to know a PrintReport
  // is mounted (e.g. hiding the layout's redundant page-title <h1>).
  useEffect(() => {
    document.body.classList.add('has-print-report')
    return () => document.body.classList.remove('has-print-report')
  }, [])

  if (!deliverable) {
    return <>{children}</>
  }

  const hasTakeaways = Array.isArray(tldrBullets) && tldrBullets.length > 0
  const hasSources = Array.isArray(sources) && sources.length > 0
  const hasLead =
    typeof leadStatement === 'string' && leadStatement.trim().length > 0
  const hasCover = !!(cover && (cover.actionTitle || cover.docNumber))

  const headerLeft = `${deliverable.shortLabel.toUpperCase()} ${deliverable.label.toUpperCase()} · CLEAR CURRENT AI · ${DOC_DATE.toUpperCase()}`
  const headerRight = 'CONFIDENTIAL · PAGE'

  const cssText = buildPageStyleCss({ headerLeft, headerRight, hasCover })

  return (
    <>
      {/* Per-deliverable @page margin-box content (running header + page-of-pages footer). */}
      <style>{cssText}</style>

      {/* Opt-in cover page — print only, becomes page 1 with header chrome suppressed. */}
      {hasCover ? (
        <PrintCover
          docNumber={cover.docNumber || deliverable.shortLabel}
          eyebrow={cover.eyebrow || deliverable.label}
          actionTitle={cover.actionTitle}
          summary={cover.summary}
          date={cover.date || DOC_DATE}
        />
      ) : null}

      {/* Optional lead paragraph(s) — print-only, above KEY TAKEAWAYS. */}
      {hasLead ? (
        <section className="print-lead" aria-hidden="true">
          {leadStatement
            .split(/\n{2,}/)
            .map((para) => para.trim())
            .filter(Boolean)
            .map((para, i) => (
              <p key={i}>{para}</p>
            ))}
        </section>
      ) : null}

      {/* KEY TAKEAWAYS — print-only, top of body content. */}
      {hasTakeaways ? (
        <section className="print-takeaways" aria-hidden="true">
          <div className="print-takeaways-label">Key Takeaways</div>
          <ul className="print-takeaways-list">
            {tldrBullets.map((b, i) => (
              <li key={i}>{b}</li>
            ))}
          </ul>
        </section>
      ) : null}

      {/* BODY — the existing on-screen page content, untouched. */}
      {children}

      {/* SOURCES — optional, print-only, last page. */}
      {hasSources ? (
        <section className="print-sources" aria-hidden="true">
          <h2 className="print-sources-title">Sources & evidence</h2>
          <ol className="print-sources-list">
            {sources.map((s, i) => (
              <li key={i}>
                {s.title ? (
                  <span className="print-source-title">{s.title}</span>
                ) : null}
                {s.title && s.citation ? ' — ' : ''}
                {s.citation ? <span>{s.citation}</span> : null}
              </li>
            ))}
          </ol>
        </section>
      ) : null}
    </>
  )
}
