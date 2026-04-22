/**
 * Print-only editorial section opener.
 *
 * Replaces the default flat h2 + top-hairline treatment for a section. Renders
 * an uppercase kicker (with a thin gold underline that extends only as far as
 * the kicker text), an action-title h2, and an optional dek paragraph.
 *
 * Use alongside the existing on-screen `<SectionLead>` — wrap in a
 * `print:hidden` container for the screen version, and place this component
 * inside a `hidden print:block` container so the screen layout is unchanged.
 */
export function PrintSectionOpener({ kicker, title, dek }) {
  return (
    <div className="print-only-block print-section-opener" aria-hidden="true">
      {kicker ? (
        <div className="print-section-kicker">{kicker}</div>
      ) : null}
      {title ? <h2 className="print-section-title">{title}</h2> : null}
      {dek ? <p className="print-section-dek">{dek}</p> : null}
    </div>
  )
}
