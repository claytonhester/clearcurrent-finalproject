import { useMemo, useState } from 'react'
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts'
import { PullQuote } from '../components/shared/PullQuote'
import { SectionHeader } from '../components/shared/SectionHeader'
import { ChartCard } from '../components/shared/ChartCard'
import { ChartDataTable } from '../components/shared/ChartDataTable'
import { PageIntro } from '../components/shared/PageIntro'
import { triggerMap } from '../data/triggerMap'
import { quotesByIds } from '../data/quotes'

const TYPE_STYLES = {
  reactive: {
    label: 'Reactive',
    card: 'border-cc-navy/30 bg-cc-navy/[0.04]',
    dot: 'bg-cc-navy',
  },
  proactive: {
    label: 'Proactive',
    card: 'border-cc-yellow/50 bg-cc-yellow/10',
    dot: 'bg-cc-yellow',
  },
  system: {
    label: 'System-Initiated',
    card: 'border-cc-mid-gray/30 bg-cc-mid-gray/10',
    dot: 'bg-cc-mid-gray',
  },
}

export function TriggerMap() {
  const [filter, setFilter] = useState('all')

  const filteredTriggers = useMemo(() => {
    if (filter === 'all') return triggerMap.triggers
    return triggerMap.triggers.filter((t) => t.type === filter)
  }, [filter])

  const pieData = useMemo(() => {
    const tally = { reactive: 0, proactive: 0, system: 0 }
    filteredTriggers.forEach((t) => {
      tally[t.type] += 1
    })
    return Object.entries(tally)
      .filter(([, v]) => v > 0)
      .map(([name, value]) => ({
        name: TYPE_STYLES[name]?.label ?? name,
        value,
        key: name,
      }))
  }, [filteredTriggers])

  const pieColors = useMemo(
    () => pieData.map((d) => triggerMap.chart.typeKey[d.key]?.color ?? '#94a3b8'),
    [pieData],
  )

  const quotes = quotesByIds(triggerMap.quoteIds)

  return (
    <div className="space-y-10">
      <PageIntro label="Engagement Triggers">{triggerMap.intro}</PageIntro>

      <div id="trigger-filters" className="flex flex-wrap gap-2">
        {triggerMap.filters.map((f) => (
          <button
            key={f.id}
            type="button"
            onClick={() => setFilter(f.id)}
            className={[
              'rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors',
              filter === f.id
                ? 'border-cc-navy bg-cc-navy text-cc-white'
                : 'border-cc-mid-gray/30 bg-cc-white text-cc-navy hover:bg-cc-light-gray',
            ].join(' ')}
          >
            {f.label}
          </button>
        ))}
      </div>

      <section id="trigger-list" tabIndex={-1} className="scroll-mt-24 outline-none">
        <SectionHeader>Triggers</SectionHeader>
        <div className="grid gap-4 lg:grid-cols-3">
          {filteredTriggers.map((t) => {
            const style = TYPE_STYLES[t.type] ?? TYPE_STYLES.system
            return (
              <div key={t.id} className={`rounded-xl border p-4 shadow-sm ${style.card}`}>
                <div className="flex items-center gap-2">
                  <span className={`h-2 w-2 rounded-full ${style.dot}`} aria-hidden />
                  <span className="text-xs font-bold uppercase text-cc-mid-gray">
                    {style.label}
                  </span>
                </div>
                <h3 className="mt-2 font-bold text-cc-navy">{t.name}</h3>
                <dl className="mt-3 space-y-2 text-sm">
                  <div>
                    <dt className="text-xs font-semibold uppercase text-cc-mid-gray">
                      Persona
                    </dt>
                    <dd>{t.persona}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase text-cc-mid-gray">
                      Action
                    </dt>
                    <dd>{t.action}</dd>
                  </div>
                  <div>
                    <dt className="text-xs font-semibold uppercase text-cc-mid-gray">
                      Clear Current capability
                    </dt>
                    <dd>{t.capability}</dd>
                  </div>
                </dl>
              </div>
            )
          })}
        </div>
      </section>

      <section
        id="trigger-distribution"
        tabIndex={-1}
        className="scroll-mt-24 outline-none"
      >
        <ChartCard
          title={triggerMap.chart.title}
          legend="Distribution for current filter"
        >
          <div className="h-[280px] w-full">
            {pieData.length === 0 ? (
              <p className="text-sm text-cc-mid-gray">No triggers in this view.</p>
            ) : (
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={100}
                    paddingAngle={2}
                  >
                    {pieData.map((_, i) => (
                      <Cell key={pieData[i].key} fill={pieColors[i]} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            )}
          </div>
          <ChartDataTable
            caption="Trigger type counts for the current filter (same data as the chart above)."
            columns={[
              { key: 'name', label: 'Type' },
              { key: 'value', label: 'Count' },
            ]}
            rows={pieData.map((d) => ({ id: d.key, name: d.name, value: d.value }))}
            exportFilename="trigger-distribution.csv"
          />
        </ChartCard>
      </section>

      {quotes.map((q) => (
        <PullQuote key={q.id} text={q.text} source={q.source} title={q.title} />
      ))}
    </div>
  )
}
