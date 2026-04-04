import { useMemo, useState, useCallback } from 'react'
import {
  ResponsiveContainer,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  ZAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { PullQuote } from '../components/shared/PullQuote'
import { SectionHeader } from '../components/shared/SectionHeader'
import { opportunityHeatmap } from '../data/opportunityHeatmap'
import { quotesByIds } from '../data/quotes'

export function OpportunityHeatmap() {
  const [selectedId, setSelectedId] = useState(null)
  const quotes = quotesByIds(opportunityHeatmap.quoteIds)

  const plotData = useMemo(
    () =>
      opportunityHeatmap.opportunities.map((o) => ({
        ...o,
        x: o.value,
        y: o.frequency,
        z: o.strategicImpact,
      })),
    [],
  )

  const selected = opportunityHeatmap.opportunities.find((o) => o.id === selectedId)

  const { labels } = opportunityHeatmap.quadrants

  const handleScatterClick = useCallback((point) => {
    const payload = point?.payload ?? point
    const id = payload?.id
    setSelectedId(typeof id === 'string' ? id : null)
  }, [])

  return (
    <div className="space-y-8">
      <p className="text-base leading-relaxed text-cc-dark-text">{opportunityHeatmap.intro}</p>

      <section>
        <SectionHeader>Priority map</SectionHeader>
        <div className="relative rounded-xl bg-cc-white p-4 shadow-sm">
          <div className="pointer-events-none absolute left-8 right-8 top-10 bottom-12 z-10 grid grid-cols-2 grid-rows-2 text-xs font-semibold text-cc-mid-gray/80">
            <div className="flex items-start justify-start p-2">{labels.niche}</div>
            <div className="flex items-start justify-end p-2">{labels.highPriority}</div>
            <div className="flex items-end justify-start p-2">{labels.noise}</div>
            <div className="flex items-end justify-end p-2">{labels.highVolume}</div>
          </div>
          <div className="pointer-events-none absolute top-12 bottom-14 left-8 right-8 border-l border-b border-dashed border-cc-mid-gray/35 opacity-60" />
          <div className="h-[420px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 24, right: 24, left: 8, bottom: 8 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis
                  type="number"
                  dataKey="x"
                  name={opportunityHeatmap.scales.x.label}
                  domain={[0, 100]}
                  tick={{ fontSize: 11 }}
                />
                <YAxis
                  type="number"
                  dataKey="y"
                  name={opportunityHeatmap.scales.y.label}
                  domain={[0, 100]}
                  tick={{ fontSize: 11 }}
                />
                <ZAxis
                  type="number"
                  dataKey="z"
                  range={[120, 400]}
                  domain={[40, 100]}
                  name={opportunityHeatmap.scales.z.label}
                />
                <Tooltip
                  cursor={{ strokeDasharray: '3 3' }}
                  formatter={(value, name) => [value, name]}
                  labelFormatter={(_, p) => p?.payload?.name ?? ''}
                />
                <Scatter
                  name="Opportunities"
                  data={plotData}
                  fill="#0A1628"
                  onClick={handleScatterClick}
                />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </div>
        <p className="mt-2 text-xs text-cc-mid-gray">
          Click a bubble to view details. Quadrant labels are illustrative.
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {opportunityHeatmap.opportunities.map((o) => (
            <button
              key={o.id}
              type="button"
              onClick={() => setSelectedId(o.id)}
              className={[
                'rounded-full border px-3 py-1 text-xs font-semibold transition-colors',
                selectedId === o.id
                  ? 'border-cc-navy bg-cc-navy text-cc-white'
                  : 'border-cc-mid-gray/30 bg-cc-white text-cc-navy hover:bg-cc-light-gray',
              ].join(' ')}
            >
              {o.name}
            </button>
          ))}
        </div>
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        <div className="rounded-xl border border-cc-mid-gray/15 bg-cc-light-gray/50 p-5">
          <SectionHeader>Selected opportunity</SectionHeader>
          {selected ? (
            <div className="space-y-2 text-sm">
              <p className="text-lg font-bold text-cc-navy">{selected.name}</p>
              <p className="text-cc-dark-text">{selected.detail}</p>
              <dl className="mt-3 grid grid-cols-3 gap-2 text-xs">
                <div>
                  <dt className="font-semibold text-cc-mid-gray">Value</dt>
                  <dd>{selected.value}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-cc-mid-gray">Frequency</dt>
                  <dd>{selected.frequency}</dd>
                </div>
                <div>
                  <dt className="font-semibold text-cc-mid-gray">Impact</dt>
                  <dd>{selected.strategicImpact}</dd>
                </div>
              </dl>
            </div>
          ) : (
            <p className="text-sm text-cc-mid-gray">Select a bubble on the chart.</p>
          )}
        </div>
        <div>
          {quotes.map((q) => (
            <PullQuote key={q.id} text={q.text} source={q.source} title={q.title} />
          ))}
        </div>
      </div>
    </div>
  )
}
