import { useMemo, useState, useRef, useEffect } from 'react'
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts'
import { PullQuote } from '../components/shared/PullQuote'
import { SectionHeader } from '../components/shared/SectionHeader'
import { Badge } from '../components/shared/Badge'
import { ChartDataTable } from '../components/shared/ChartDataTable'
import { journeyMaps } from '../data/journeyMaps'
import { quoteById } from '../data/quotes'

export function JourneyMaps() {
  const [activeId, setActiveId] = useState(journeyMaps.journeys[0]?.id ?? '')
  const journeyTitleRef = useRef(null)
  const skipJourneyFocus = useRef(true)
  const active = useMemo(
    () => journeyMaps.journeys.find((j) => j.id === activeId),
    [activeId],
  )

  const lineData = useMemo(() => {
    if (!active) return []
    return active.stages.map((s, i) => ({
      step: s.shortLabel,
      frustration: active.emotionalSeries[i] ?? 0,
      idx: i + 1,
    }))
  }, [active])

  const quote = active?.quoteId ? quoteById(active.quoteId) : null

  useEffect(() => {
    if (skipJourneyFocus.current) {
      skipJourneyFocus.current = false
      return
    }
    journeyTitleRef.current?.focus()
  }, [activeId])

  if (!active) {
    return <p className="text-sm text-cc-mid-gray">No journeys defined.</p>
  }

  return (
    <div className="space-y-10">
      <div id="journey-selector" className="scroll-mt-24">
        <SectionHeader>Select journey</SectionHeader>
        <div className="flex flex-wrap gap-2">
          {journeyMaps.journeys.map((j) => (
            <button
              key={j.id}
              type="button"
              onClick={() => setActiveId(j.id)}
              className={[
                'rounded-full border px-4 py-2 text-sm font-semibold transition-colors',
                j.id === activeId
                  ? 'border-cc-navy bg-cc-navy text-cc-white'
                  : 'border-cc-mid-gray/30 bg-cc-white text-cc-navy hover:bg-cc-light-gray',
              ].join(' ')}
            >
              {j.persona.name}
            </button>
          ))}
        </div>
      </div>

      <div
        id="journey-profile"
        tabIndex={-1}
        className="scroll-mt-24 rounded-xl border border-cc-mid-gray/15 bg-cc-white p-6 shadow-sm outline-none"
      >
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <h2
              ref={journeyTitleRef}
              tabIndex={-1}
              className="text-xl font-bold text-cc-navy outline-none ring-cc-navy/20 focus-visible:ring-2"
            >
              {active.persona.name}
            </h2>
            <p className="text-sm text-cc-mid-gray">{active.persona.title}</p>
            <p className="text-sm text-cc-dark-text">{active.persona.companyType}</p>
          </div>
          <Badge variant="priority">Pain: {active.persona.painLevel}</Badge>
        </div>
        <p className="mt-4 text-sm leading-relaxed">
          <span className="font-semibold text-cc-navy">Trigger: </span>
          {active.trigger}
        </p>
      </div>

      <section id="journey-flow" tabIndex={-1} className="scroll-mt-24 outline-none">
        <SectionHeader>Flow</SectionHeader>
        <div className="flex flex-wrap gap-3">
          {active.stages.map((s) => {
            const isCc = active.clearCurrentStageId === s.id
            return (
              <div
                key={s.id}
                title={s.description}
                className={[
                  'max-w-[200px] flex-1 rounded-lg border p-3 text-sm shadow-sm',
                  isCc
                    ? 'border-cc-yellow bg-cc-yellow/15 ring-2 ring-cc-yellow/50'
                    : 'border-cc-mid-gray/20 bg-cc-white',
                ].join(' ')}
              >
                <p className="text-xs font-bold uppercase text-cc-mid-gray">
                  {s.shortLabel}
                </p>
                <p className="mt-1 font-semibold text-cc-navy">{s.title}</p>
                <p className="mt-2 text-xs leading-relaxed text-cc-dark-text/90">
                  {s.description}
                </p>
                {isCc ? (
                  <p className="mt-2 text-xs font-bold text-cc-navy">
                    Clear Current intervention
                  </p>
                ) : null}
              </div>
            )
          })}
        </div>
      </section>

      <section
        id="journey-emotional-arc"
        tabIndex={-1}
        className="scroll-mt-24 outline-none"
      >
        <SectionHeader>Emotional arc (frustration index)</SectionHeader>
        <div className="h-[280px] w-full rounded-xl bg-cc-white p-4 shadow-sm">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={lineData} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="step" tick={{ fontSize: 11 }} />
              <YAxis domain={[0, 100]} tick={{ fontSize: 11 }} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="frustration"
                stroke="#0A1628"
                strokeWidth={2}
                dot={{ r: 4, fill: '#F5C518', stroke: '#0A1628' }}
                animationDuration={600}
                isAnimationActive
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <ChartDataTable
          caption="Frustration index by journey step (same data as the line chart above)."
          columns={[
            { key: 'step', label: 'Step' },
            { key: 'frustration', label: 'Frustration index' },
          ]}
          rows={lineData.map((row, i) => ({
            id: `step-${i}`,
            step: row.step,
            frustration: row.frustration,
          }))}
          exportFilename={`journey-frustration-${activeId}.csv`}
        />
      </section>

      {quote ? (
        <PullQuote text={quote.text} source={quote.source} title={quote.title} />
      ) : null}
    </div>
  )
}
