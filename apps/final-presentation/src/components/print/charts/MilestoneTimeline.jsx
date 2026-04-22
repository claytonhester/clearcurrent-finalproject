/**
 * Print-only milestone timeline.
 *
 * A horizontal sequence of phase columns (e.g. Foundation → Beta → Land →
 * Expand → Retain). Each phase has a label, title, and a list of milestone
 * bullets. One phase may be marked `active` to receive a soft-yellow tint and
 * a gold accent on its bullets.
 *
 * Props:
 *   phases: { label, title, milestones: string[], active?: boolean }[]
 */
export function MilestoneTimeline({ phases }) {
  if (!Array.isArray(phases) || phases.length === 0) return null

  return (
    <div className="print-chart">
      <div
        className="print-timeline"
        style={{
          gridTemplateColumns: `repeat(${phases.length}, minmax(0, 1fr))`,
        }}
      >
        {phases.map((p, i) => (
          <div
            key={i}
            className={`print-timeline-phase ${p.active ? 'active' : ''}`}
          >
            <div className="print-timeline-phase-label">
              {p.label || `Phase ${i + 1}`}
            </div>
            {p.title ? (
              <div className="print-timeline-phase-title">{p.title}</div>
            ) : null}
            {Array.isArray(p.milestones)
              ? p.milestones.map((m, mi) => (
                  <div key={mi} className="print-timeline-milestone">
                    {m}
                  </div>
                ))
              : null}
          </div>
        ))}
      </div>
    </div>
  )
}
