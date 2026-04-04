import { useState } from 'react'
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
} from 'recharts'
import { PullQuote } from '../components/shared/PullQuote'
import { SectionHeader } from '../components/shared/SectionHeader'
import { ChartCard } from '../components/shared/ChartCard'
import { seasonalCalendar } from '../data/seasonalCalendar'
import { quotesByIds } from '../data/quotes'

export function SeasonalCalendar() {
  const [selectedId, setSelectedId] = useState(seasonalCalendar.months[0]?.id ?? '')
  const selected = seasonalCalendar.months.find((m) => m.id === selectedId)
  const quotes = quotesByIds(seasonalCalendar.quoteIds)

  return (
    <div className="space-y-8">
      <p className="text-base leading-relaxed text-cc-dark-text">{seasonalCalendar.intro}</p>

      <section>
        <SectionHeader>12-month calendar</SectionHeader>
        <div className="flex flex-wrap gap-2">
          {seasonalCalendar.months.map((m) => {
            const active = m.id === selectedId
            return (
              <button
                key={m.id}
                type="button"
                onClick={() => setSelectedId(m.id)}
                className={[
                  'min-w-[4.5rem] rounded-lg border px-3 py-2 text-left text-sm font-semibold transition-colors',
                  active
                    ? 'border-cc-yellow bg-cc-yellow/20 text-cc-navy ring-2 ring-cc-yellow/50'
                    : 'border-cc-mid-gray/20 bg-cc-white text-cc-navy hover:bg-cc-light-gray',
                  m.isPeakOpportunity ? 'ring-1 ring-cc-yellow/60' : '',
                ].join(' ')}
              >
                <span className="block">{m.label}</span>
                <span className="mt-0.5 block text-xs font-normal text-cc-mid-gray">
                  {m.seasonTag}
                </span>
              </button>
            )
          })}
        </div>

        {selected ? (
          <div className="mt-6 rounded-xl border border-cc-mid-gray/15 bg-cc-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-lg font-bold text-cc-navy">{selected.label}</h3>
              {selected.isPeakOpportunity ? (
                <span className="rounded-full bg-cc-yellow/30 px-2 py-0.5 text-xs font-bold text-cc-navy">
                  Peak opportunity
                </span>
              ) : null}
            </div>
            <p className="mt-2 text-sm font-medium text-cc-mid-gray">{selected.seasonTag}</p>
            <p className="mt-3 text-sm leading-relaxed">{selected.customerActivity}</p>
            <p className="mt-3 text-sm leading-relaxed text-cc-navy/90">
              <span className="font-semibold">Clear Current entry: </span>
              {selected.clearCurrentEntry}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-cc-dark-text">{selected.detail}</p>
          </div>
        ) : null}
      </section>

      <ChartCard title={seasonalCalendar.chart.title} legend="Emphasis score (illustrative)">
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={seasonalCalendar.chart.bars} margin={{ top: 8, right: 8, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" tick={{ fontSize: 12 }} />
              <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
              <Tooltip />
              <Bar dataKey="emphasis" radius={[4, 4, 0, 0]}>
                {seasonalCalendar.chart.bars.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.fill} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </ChartCard>

      {quotes.map((q) => (
        <PullQuote key={q.id} text={q.text} source={q.source} title={q.title} />
      ))}
    </div>
  )
}
