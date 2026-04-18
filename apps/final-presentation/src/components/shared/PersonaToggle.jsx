import { PERSONAS } from '../../content/personas.ts'
import { useFilters } from '../../context/FiltersContext.jsx'

export function PersonaToggle({ subset, showAll = true }) {
  const { persona, setPersona } = useFilters()
  const list = subset ? PERSONAS.filter((p) => subset.includes(p.key)) : PERSONAS

  return (
    <div className="flex flex-wrap items-center gap-1.5 print:hidden">
      <span className="mr-1 text-[10px] font-semibold uppercase tracking-wider text-cc-mid-gray">
        Persona
      </span>
      {showAll ? (
        <Pill active={persona === 'all'} onClick={() => setPersona('all')} label="All" />
      ) : null}
      {list.map((p) => (
        <Pill
          key={p.key}
          active={persona === p.key}
          onClick={() => setPersona(p.key)}
          label={p.short}
        />
      ))}
    </div>
  )
}

function Pill({ active, onClick, label }) {
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
