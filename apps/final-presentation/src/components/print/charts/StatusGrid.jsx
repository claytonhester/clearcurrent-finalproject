/**
 * Print-only status grid.
 *
 * A grid of items each marked with a small semantic-color square (green =
 * confirmed, amber = open / caution, red = risk, navy = neutral fact, gold =
 * highlighted, empty = no marker / pending). Used for proof rosters, risk
 * registers, capability matrices, maturity grids.
 *
 * Items: { label, status, note? }
 *   status ∈ 'green' | 'amber' | 'red' | 'navy' | 'gold' | 'empty'
 *
 * Renders as a CSS grid; column count is configurable (default 2).
 */
const ALLOWED = new Set(['green', 'amber', 'red', 'navy', 'gold', 'empty'])

export function StatusGrid({ items, columns = 2 }) {
  if (!Array.isArray(items) || items.length === 0) return null

  return (
    <div
      className="print-statusgrid"
      style={{ gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))` }}
    >
      {items.map((it, i) => {
        const status = ALLOWED.has(it.status) ? it.status : 'navy'
        return (
          <div key={i} className="print-statusgrid-item">
            <span
              className={`print-statusgrid-marker ${status}`}
              aria-hidden="true"
            />
            <div>
              <span className="print-statusgrid-label">{it.label}</span>
              {it.note ? (
                <span className="print-statusgrid-note">{it.note}</span>
              ) : null}
            </div>
          </div>
        )
      })}
    </div>
  )
}
