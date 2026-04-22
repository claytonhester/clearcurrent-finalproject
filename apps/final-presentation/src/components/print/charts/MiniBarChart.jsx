/**
 * Print-only horizontal mini bar chart.
 *
 * Renders a label / bar / value triplet per row. Bars are navy by default;
 * one row may be flagged `highlight: true` to render in gold (used to mark
 * "this is the number to remember"). All measurements are CSS so the chart
 * survives the print stylesheet's SVG strip.
 *
 * Props:
 *   data: { label, value: number, displayValue?: string, highlight?: boolean }[]
 *   max?: number   // override scale; default = max(value)
 */
export function MiniBarChart({ data, max }) {
  if (!Array.isArray(data) || data.length === 0) return null

  const numericMax = Math.max(
    ...data.map((d) => Number(d.value) || 0),
    1
  )
  const ceiling = max && max > 0 ? max : numericMax

  return (
    <div className="print-chart">
      <div className="print-minibar">
        {data.map((d, i) => {
          const pct = Math.max(0, Math.min(100, (d.value / ceiling) * 100))
          return (
            <div key={i} className="print-minibar-row">
              <div className="print-minibar-label">{d.label}</div>
              <div className="print-minibar-track">
                <span
                  className={`print-minibar-bar ${
                    d.highlight ? 'highlight' : ''
                  }`}
                  style={{ width: `${pct}%` }}
                />
              </div>
              <div
                className={`print-minibar-value ${
                  d.highlight ? 'highlight' : ''
                }`}
              >
                {d.displayValue ?? d.value}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
