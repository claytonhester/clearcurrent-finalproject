/**
 * Promoted pull quote — print-only by default.
 *
 * One promoted moment per deliverable. Renders an italic 15pt quote with a
 * thin gold rule above and an em-dash attribution below. Held together with
 * `break-inside: avoid`.
 */
export function PullQuote({ children, attribution, role }) {
  return (
    <blockquote
      className="print-only-block print-quote"
      aria-hidden="true"
    >
      &ldquo;{children}&rdquo;
      {attribution ? (
        <span className="print-quote-attribution">
          — {attribution}
          {role ? `, ${role}` : ''}
        </span>
      ) : null}
    </blockquote>
  )
}
