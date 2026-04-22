/**
 * Print-only cover page for the deliverable PDFs.
 *
 * Renders a full-page first-page identity panel (D-number, action title,
 * one-line summary, navy + gold rule, confidential meta footer). Hidden on
 * screen; rendered only in the print stylesheet via the `.print-cover-page`
 * + `.print-only-block` classes. The `<PrintReport>` shell injects an
 * `@page :first` override to suppress the running header on this page.
 */
export function PrintCover({
  docNumber,
  eyebrow,
  actionTitle,
  summary,
  date,
}) {
  return (
    <section
      className="print-only-block print-cover print-cover-page"
      aria-hidden="true"
    >
      <div>
        <div className="print-cover-eyebrow">
          {eyebrow ? `${eyebrow} · Clear Current AI` : 'Clear Current AI'}
        </div>
        <div className="print-cover-docnumber">{docNumber}</div>
      </div>

      <div>
        <div className="print-cover-rule">
          <span className="print-cover-rule-gold" />
          <span className="print-cover-rule-navy" />
        </div>
        {actionTitle ? (
          <h1 className="print-cover-title">{actionTitle}</h1>
        ) : null}
        {summary ? <p className="print-cover-summary">{summary}</p> : null}
      </div>

      <div className="print-cover-meta">
        <span>
          <strong>Confidential</strong> · Internal review
        </span>
        <span>{date || 'April 2026'}</span>
      </div>
    </section>
  )
}
