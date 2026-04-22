/**
 * Print-only heat grid.
 *
 * Renders an n × m matrix where each cell is shaded with a navy-tint scale
 * (5 steps from #f4f5f7 → #0a1628). Optional gold border on highlighted
 * cells. Built as an HTML table so it survives the print stylesheet's SVG
 * strip and renders consistently across browsers.
 *
 * Props:
 *   rows: string[]
 *   columns: string[]
 *   data: number[][]      // outer = rows, inner = columns. Values 0..scale.
 *   scale: number         // max value (e.g. 5). Default 5.
 *   highlightCells: Array<[rowIndex, colIndex]> // gold-border cells
 *   showValues: boolean   // print the numeric value inside the cell. Default true.
 */
function tintFor(value, scale) {
  if (value == null || isNaN(value)) return 0
  const pct = Math.max(0, Math.min(scale, value)) / scale
  if (pct === 0) return 0
  if (pct < 0.25) return 1
  if (pct < 0.55) return 2
  if (pct < 0.8) return 3
  return 4
}

export function HeatGrid({
  rows,
  columns,
  data,
  scale = 5,
  highlightCells = [],
  showValues = true,
}) {
  if (!Array.isArray(rows) || !Array.isArray(columns) || !Array.isArray(data)) {
    return null
  }

  const highlightLookup = new Set(
    highlightCells.map(([r, c]) => `${r}:${c}`)
  )

  return (
    <table className="print-heatgrid">
      <thead>
        <tr>
          <th className="print-heatgrid-rowhead" />
          {columns.map((c) => (
            <th key={c}>{c}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((rowLabel, rIdx) => (
          <tr key={rowLabel}>
            <td className="print-heatgrid-rowlabel">{rowLabel}</td>
            {columns.map((_, cIdx) => {
              const value = data[rIdx]?.[cIdx]
              const tint = tintFor(value, scale)
              const isHighlight = highlightLookup.has(`${rIdx}:${cIdx}`)
              return (
                <td
                  key={cIdx}
                  className={`print-tint-${tint} ${
                    isHighlight ? 'highlight' : ''
                  }`}
                >
                  {showValues && value != null ? value : ''}
                </td>
              )
            })}
          </tr>
        ))}
      </tbody>
    </table>
  )
}
