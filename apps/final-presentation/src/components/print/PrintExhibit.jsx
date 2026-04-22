/**
 * Print-only exhibit wrapper.
 *
 * Wraps a chart, table, or visualization with a McKinsey-style "Exhibit N"
 * caption above and a "Source: …" line below. Holds the exhibit together
 * with `break-inside: avoid` so a chart never separates from its caption.
 *
 * Hidden on screen (use the existing on-screen render). The wrapper itself
 * carries `.print-only-block` so it only appears in print.
 */
export function PrintExhibit({ number, caption, source, children }) {
  return (
    <figure className="print-only-block print-exhibit print-chart" aria-hidden="true">
      {(number || caption) ? (
        <figcaption className="print-exhibit-caption">
          {typeof number !== 'undefined' ? (
            <span className="print-exhibit-number">
              Exhibit {number}
            </span>
          ) : null}
          {caption ? <span>{caption}</span> : null}
        </figcaption>
      ) : null}

      <div className="print-exhibit-body">{children}</div>

      {source ? (
        <div className="print-exhibit-source">Source: {source}</div>
      ) : null}
    </figure>
  )
}
