/**
 * Print-only 12-month calendar strip.
 *
 * A horizontal strip of 12 month columns. Each month gets a vertical bar whose
 * height encodes intensity (low / medium / high / peak). Months marked as
 * `windowMonths` are recoloured gold to mark a decision window. A small legend
 * sits below the strip.
 *
 * Props:
 *   months: { label: string, intensity: 'low'|'medium'|'high'|'peak' }[]
 *   windowMonths: string[]   // labels (or indices) to flag as decision-window
 *   legend: { intensity?: string, window?: string } (optional copy)
 */
const VALID = new Set(['low', 'medium', 'high', 'peak'])

export function CalendarStrip({
  months,
  windowMonths = [],
  legend = {},
}) {
  if (!Array.isArray(months) || months.length === 0) return null

  const winSet = new Set(windowMonths)

  return (
    <div className="print-chart">
      <div className="print-calstrip">
        {months.map((m, i) => {
          const intensity = VALID.has(m.intensity) ? m.intensity : 'low'
          const isWindow = winSet.has(m.label) || winSet.has(i)
          return (
            <div key={`${m.label}-${i}`} className="print-calstrip-month">
              <div
                className={`print-calstrip-bar ${intensity} ${
                  isWindow ? 'window' : ''
                }`}
                aria-hidden="true"
              />
              <div className="print-calstrip-label">{m.label}</div>
            </div>
          )
        })}
      </div>
      <div className="print-calstrip-window-label">
        <span>
          <span
            className="swatch print-color-bg-navy"
            aria-hidden="true"
          />
          {legend.intensity || 'Engagement intensity'}
        </span>
        {windowMonths.length > 0 ? (
          <span>
            <span
              className="swatch print-color-bg-gold"
              aria-hidden="true"
            />
            {legend.window || 'Decision window'}
          </span>
        ) : null}
      </div>
    </div>
  )
}
