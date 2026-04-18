import { INDUSTRIES } from '../../content/industries.ts'
import { useFilters } from '../../context/FiltersContext.jsx'

export function IndustryToggle({ subset, showAll = true }) {
  const { industry, setIndustry } = useFilters()
  const list = subset ? INDUSTRIES.filter((i) => subset.includes(i.key)) : INDUSTRIES

  return (
    <div className="flex flex-wrap items-center gap-1.5 print:hidden">
      <span className="mr-1 text-[10px] font-semibold uppercase tracking-wider text-cc-mid-gray">
        Industry
      </span>
      {showAll ? (
        <TogglePill
          active={industry === 'all'}
          onClick={() => setIndustry('all')}
          label="All"
        />
      ) : null}
      {list.map((i) => (
        <TogglePill
          key={i.key}
          active={industry === i.key}
          onClick={() => setIndustry(i.key)}
          label={i.short}
        />
      ))}
    </div>
  )
}

function TogglePill({ active, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-full border px-3 py-1 text-[11px] font-semibold transition-colors ${
        active
          ? 'border-cc-navy bg-cc-navy text-white'
          : 'border-cc-border bg-white text-cc-navy hover:border-cc-navy/40'
      }`}
    >
      {label}
    </button>
  )
}
