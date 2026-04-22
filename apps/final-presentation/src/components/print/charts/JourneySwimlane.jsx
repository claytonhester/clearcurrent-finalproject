/**
 * Print-only journey swimlane.
 *
 * Two-row swimlane comparing a customer's status-quo experience against the
 * Clear Current intervention across N stages. Optional bounds row beneath
 * (e.g. assumed timeframe, customer profile).
 *
 * Props:
 *   stages: string[]  // column headers (3-5 columns recommended)
 *   statusQuo: string[]  // text per stage; '' renders as empty/dashed
 *   withCC: string[]     // text per stage
 *   bounds?: string      // optional context line under the swimlane
 */
export function JourneySwimlane({
  stages,
  statusQuo,
  withCC,
  bounds,
  statusQuoLabel = 'Status quo',
  withCCLabel = 'With Clear Current',
}) {
  if (!Array.isArray(stages) || stages.length === 0) return null

  const cols = stages.length

  return (
    <div className="print-chart">
      <div
        className="print-swimlane"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
      >
        {/* row 1 */}
        <div className="print-swimlane-rowlabel">{statusQuoLabel}</div>
        {stages.map((stage, i) => {
          const text = statusQuo?.[i] || ''
          return (
            <div
              key={`sq-${i}`}
              className={`print-swimlane-stage ${text ? '' : 'empty'}`}
            >
              <span className="print-swimlane-stagelabel">{stage}</span>
              {text || '— no touchpoint —'}
            </div>
          )
        })}

        {/* row 2 */}
        <div className="print-swimlane-rowlabel">{withCCLabel}</div>
        {stages.map((stage, i) => {
          const text = withCC?.[i] || ''
          return (
            <div
              key={`cc-${i}`}
              className={`print-swimlane-stage with-cc ${text ? '' : 'empty'}`}
            >
              <span className="print-swimlane-stagelabel">{stage}</span>
              {text || '— no touchpoint —'}
            </div>
          )
        })}

        {bounds ? (
          <div className="print-swimlane-bounds">
            <strong>Bounds</strong>
            {bounds}
          </div>
        ) : null}
      </div>
    </div>
  )
}
