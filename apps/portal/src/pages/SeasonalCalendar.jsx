import { useState } from 'react'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Cell } from 'recharts'
import { TrendingUp, FileText, Leaf, Building2 } from 'lucide-react'
import { PullQuote } from '../components/shared/PullQuote'
import { SectionHeader } from '../components/shared/SectionHeader'
import { ChartCard } from '../components/shared/ChartCard'
import { ChartDataTable } from '../components/shared/ChartDataTable'
import { PageIntro } from '../components/shared/PageIntro'
import { seasonalCalendar } from '../data/seasonalCalendar'
import { quotesByIds } from '../data/quotes'

const THEME_CONFIG = {
  Budgeting: {
    accent: '#0A1628',
    bg: '#0A1628',
    textOnBg: '#ffffff',
    lightBg: '#E2E6EE',
    lightText: '#0A1628',
    Icon: TrendingUp,
  },
  Procurement: {
    accent: '#B8920A',
    bg: '#F5C518',
    textOnBg: '#0A1628',
    lightBg: '#FEF7CC',
    lightText: '#7A5F00',
    Icon: FileText,
  },
  Sustainability: {
    accent: '#059669',
    bg: '#059669',
    textOnBg: '#ffffff',
    lightBg: '#D1FAE5',
    lightText: '#065F46',
    Icon: Leaf,
  },
  'Capital planning': {
    accent: '#6D28D9',
    bg: '#6D28D9',
    textOnBg: '#ffffff',
    lightBg: '#EDE9FE',
    lightText: '#4C1D95',
    Icon: Building2,
  },
}

const THEMES = Object.keys(THEME_CONFIG)

function ThemeLegend() {
  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
      {THEMES.map((theme) => {
        const cfg = THEME_CONFIG[theme]
        const { Icon } = cfg
        const count = seasonalCalendar.months.filter((m) => m.seasonTag === theme).length
        const peakCount = seasonalCalendar.months.filter(
          (m) => m.seasonTag === theme && m.isPeakOpportunity,
        ).length
        return (
          <div
            key={theme}
            className="flex items-start gap-3 rounded-xl border border-cc-mid-gray/15 bg-cc-white p-4 shadow-sm"
          >
            <div
              className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg"
              style={{ background: cfg.lightBg }}
            >
              <Icon size={16} style={{ color: cfg.accent }} />
            </div>
            <div>
              <p className="text-sm font-bold text-cc-navy">{theme}</p>
              <p className="mt-0.5 text-xs text-cc-mid-gray">
                {count} months{peakCount > 0 ? ` · ${peakCount} peak` : ''}
              </p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

function MonthGrid({ selectedId, onSelect }) {
  return (
    <div className="grid grid-cols-3 gap-2 sm:grid-cols-6">
      {seasonalCalendar.months.map((m) => {
        const active = m.id === selectedId
        const cfg = THEME_CONFIG[m.seasonTag] ?? {
          bg: '#6B7280',
          textOnBg: '#fff',
          lightBg: '#F3F4F6',
          lightText: '#374151',
          accent: '#6B7280',
        }
        return (
          <button
            key={m.id}
            type="button"
            onClick={() => onSelect(m.id)}
            className="relative flex flex-col gap-1 rounded-xl p-4 text-left transition-all duration-150"
            style={{
              background: active ? cfg.bg : cfg.lightBg,
              boxShadow: active
                ? `0 0 0 2px #fff, 0 0 0 4px ${cfg.accent}`
                : '0 1px 3px rgba(0,0,0,0.08)',
              transform: active ? 'scale(1.04)' : 'scale(1)',
            }}
          >
            {m.isPeakOpportunity && (
              <span
                className="absolute right-2 top-2 rounded-full px-1.5 py-0.5 text-[9px] font-black uppercase tracking-wide"
                style={{
                  background: active ? 'rgba(255,255,255,0.22)' : cfg.accent,
                  color: active ? cfg.textOnBg : cfg.textOnBg,
                }}
              >
                Peak
              </span>
            )}
            <span
              className="text-lg font-black"
              style={{ color: active ? cfg.textOnBg : cfg.lightText }}
            >
              {m.label}
            </span>
            <span
              className="text-[10px] font-medium leading-tight"
              style={{
                color: active ? cfg.textOnBg : cfg.accent,
                opacity: active ? 0.75 : 1,
              }}
            >
              {m.seasonTag}
            </span>
          </button>
        )
      })}
    </div>
  )
}

function MonthDetail({ selected }) {
  const cfg = THEME_CONFIG[selected.seasonTag] ?? {
    bg: '#6B7280',
    textOnBg: '#fff',
    lightBg: '#F3F4F6',
    accent: '#6B7280',
  }
  const { Icon } = cfg

  return (
    <div className="mt-4 overflow-hidden rounded-xl border border-cc-mid-gray/15 bg-cc-white shadow-sm">
      {/* Colored header */}
      <div
        className="flex flex-wrap items-center justify-between gap-3 px-6 py-4"
        style={{ background: cfg.bg }}
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/15">
            <Icon size={20} style={{ color: cfg.textOnBg }} />
          </div>
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider"
              style={{ color: cfg.textOnBg, opacity: 0.7 }}
            >
              {selected.seasonTag}
            </p>
            <h3 className="text-xl font-black" style={{ color: cfg.textOnBg }}>
              {selected.label}
            </h3>
          </div>
        </div>
        {selected.isPeakOpportunity && (
          <span
            className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-bold uppercase tracking-wide"
            style={{ color: cfg.textOnBg }}
          >
            Peak opportunity
          </span>
        )}
      </div>

      {/* Two-column body */}
      <div className="grid border-b border-cc-mid-gray/10 sm:grid-cols-2">
        <div className="border-b border-cc-mid-gray/10 p-5 sm:border-b-0 sm:border-r">
          <p className="mb-2 text-[10px] font-black uppercase tracking-widest text-cc-mid-gray">
            Customer activity
          </p>
          <p className="text-sm leading-relaxed text-cc-dark-text">
            {selected.customerActivity}
          </p>
        </div>
        <div className="p-5" style={{ borderLeft: `3px solid ${cfg.accent}` }}>
          <p
            className="mb-2 text-[10px] font-black uppercase tracking-widest"
            style={{ color: cfg.accent }}
          >
            Clear Current entry point
          </p>
          <p className="text-sm font-semibold leading-relaxed text-cc-navy">
            {selected.clearCurrentEntry}
          </p>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-relaxed text-cc-mid-gray">{selected.detail}</p>
      </div>
    </div>
  )
}

function AnnualRhythm({ selectedId, onSelect }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-cc-mid-gray/15 bg-cc-white p-5 shadow-sm">
      <div className="min-w-[560px]">
        {/* Month column headers */}
        <div className="mb-3 flex">
          <div className="w-32 shrink-0" />
          <div className="flex flex-1 gap-1">
            {seasonalCalendar.months.map((m) => (
              <div
                key={m.id}
                className="flex-1 text-center text-[11px] font-semibold text-cc-mid-gray"
              >
                {m.label}
              </div>
            ))}
          </div>
        </div>

        {/* One row per theme */}
        {THEMES.map((theme) => {
          const cfg = THEME_CONFIG[theme]
          const { Icon } = cfg
          return (
            <div key={theme} className="mb-2 flex items-center">
              <div className="flex w-32 shrink-0 items-center gap-1.5 pr-3">
                <Icon size={13} style={{ color: cfg.accent }} />
                <span className="text-[11px] font-bold" style={{ color: cfg.accent }}>
                  {theme}
                </span>
              </div>
              <div className="flex flex-1 gap-1">
                {seasonalCalendar.months.map((m) => {
                  const isActive = m.seasonTag === theme
                  const isPeak = isActive && m.isPeakOpportunity
                  const isSelected = m.id === selectedId
                  return (
                    <button
                      key={m.id}
                      type="button"
                      onClick={() => onSelect(m.id)}
                      title={
                        isActive
                          ? `${m.label} – ${theme}${isPeak ? ' (Peak)' : ''}`
                          : `${m.label} – not ${theme}`
                      }
                      className="relative flex-1 rounded transition-all hover:opacity-90"
                      style={{
                        height: '2rem',
                        background: isActive ? cfg.bg : '#F3F4F6',
                        boxShadow:
                          isSelected && isActive
                            ? `0 0 0 2px #fff, 0 0 0 3px ${cfg.accent}`
                            : 'none',
                        transform: isSelected && isActive ? 'scaleY(1.15)' : 'scaleY(1)',
                      }}
                    >
                      {isPeak && (
                        <span className="absolute bottom-0 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-white/70" />
                      )}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        })}

        <p className="mt-3 border-t border-cc-mid-gray/10 pt-3 text-[10px] text-cc-mid-gray">
          Click any block to select that month · White dot = peak opportunity
        </p>
      </div>
    </div>
  )
}

export function SeasonalCalendar() {
  const [selectedId, setSelectedId] = useState(seasonalCalendar.months[0]?.id ?? '')
  const selected = seasonalCalendar.months.find((m) => m.id === selectedId)
  const quotes = quotesByIds(seasonalCalendar.quoteIds)

  return (
    <div className="space-y-10">
      <PageIntro label="Seasonal Calendar">{seasonalCalendar.intro}</PageIntro>

      {/* Theme legend */}
      <ThemeLegend />

      {/* 12-month grid + detail panel */}
      <section id="seasonal-calendar" tabIndex={-1} className="scroll-mt-24 outline-none">
        <SectionHeader>12-month calendar</SectionHeader>
        <MonthGrid selectedId={selectedId} onSelect={setSelectedId} />
        {selected && <MonthDetail selected={selected} />}
      </section>

      {/* Annual rhythm Gantt */}
      <section id="annual-rhythm" tabIndex={-1} className="scroll-mt-24 outline-none">
        <SectionHeader>Annual rhythm by theme</SectionHeader>
        <AnnualRhythm selectedId={selectedId} onSelect={setSelectedId} />
      </section>

      {/* Emphasis bar chart */}
      <section id="seasonal-chart" tabIndex={-1} className="scroll-mt-24 outline-none">
        <ChartCard
          title={seasonalCalendar.chart.title}
          legend="Emphasis score (illustrative)"
        >
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={seasonalCalendar.chart.bars}
                margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
              >
                <XAxis dataKey="name" tick={{ fontSize: 12 }} />
                <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
                <Tooltip
                  formatter={(value, _name, props) => [
                    value,
                    props.payload?.theme ?? 'Emphasis',
                  ]}
                  labelStyle={{ fontWeight: 600 }}
                />
                <Bar dataKey="emphasis" radius={[4, 4, 0, 0]}>
                  {seasonalCalendar.chart.bars.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          <ChartDataTable
            caption="Monthly emphasis and theme (same data as the bar chart above)."
            columns={[
              { key: 'month', label: 'Month' },
              { key: 'theme', label: 'Theme' },
              { key: 'emphasis', label: 'Emphasis' },
              { key: 'peak', label: 'Peak' },
            ]}
            rows={seasonalCalendar.chart.bars.map((b, i) => ({
              id: b.name,
              month: b.name,
              theme: seasonalCalendar.months[i]?.seasonTag ?? '—',
              emphasis: b.emphasis,
              peak: seasonalCalendar.months[i]?.isPeakOpportunity ? 'Yes' : 'No',
            }))}
            exportFilename="seasonal-calendar.csv"
          />
        </ChartCard>
      </section>

      {quotes.map((q) => (
        <PullQuote key={q.id} text={q.text} source={q.source} title={q.title} />
      ))}
    </div>
  )
}
