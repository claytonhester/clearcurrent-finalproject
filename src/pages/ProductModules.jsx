import { useMemo, useState } from 'react'
import { PullQuote } from '../components/shared/PullQuote'
import { SectionHeader } from '../components/shared/SectionHeader'
import { Badge } from '../components/shared/Badge'
import { PlaceholderBadge } from '../components/shared/PlaceholderBadge'
import { productModules } from '../data/productModules'
import { quoteById } from '../data/quotes'

export function ProductModules() {
  const [activeId, setActiveId] = useState(productModules.modules[0]?.id ?? '')
  const active = useMemo(
    () => productModules.modules.find((m) => m.id === activeId),
    [activeId],
  )
  const quote = active?.quoteId ? quoteById(active.quoteId) : null

  if (!active) {
    return <p className="text-sm text-cc-mid-gray">No modules defined.</p>
  }

  return (
    <div className="space-y-8">
      <SectionHeader>Modules</SectionHeader>
      <div className="flex gap-3 overflow-x-auto pb-2">
        {productModules.modules.map((m) => (
          <button
            key={m.id}
            type="button"
            onClick={() => setActiveId(m.id)}
            className={[
              'min-w-[200px] shrink-0 rounded-xl border px-4 py-3 text-left transition-all',
              m.id === activeId
                ? 'border-cc-yellow bg-cc-yellow/15 shadow-md ring-2 ring-cc-yellow/40'
                : 'border-cc-mid-gray/20 bg-cc-white hover:bg-cc-light-gray',
            ].join(' ')}
          >
            <p className="text-sm font-bold text-cc-navy">{m.title}</p>
            <p className="mt-1 text-xs text-cc-mid-gray">{m.badge}</p>
          </button>
        ))}
      </div>

      <div
        key={active.id}
        className="rounded-xl border border-cc-mid-gray/15 bg-cc-white p-6 shadow-sm transition-all duration-300"
      >
        <div className="flex flex-wrap items-center gap-2">
          <h2 className="text-2xl font-bold text-cc-navy">{active.title}</h2>
          <Badge variant="accent">{active.badge}</Badge>
          <PlaceholderBadge status={active.status} />
        </div>

        <dl className="mt-6 space-y-4 text-sm">
          <div>
            <dt className="text-xs font-bold uppercase text-cc-mid-gray">Problem</dt>
            <dd className="mt-1 leading-relaxed">{active.problem}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase text-cc-mid-gray">Target persona</dt>
            <dd className="mt-1">{active.persona}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase text-cc-mid-gray">Business value</dt>
            <dd className="mt-1 leading-relaxed">{active.businessValue}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase text-cc-mid-gray">Frequency</dt>
            <dd className="mt-1">{active.frequency}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase text-cc-mid-gray">
              Differentiation vs. EnergyCAP / spreadsheets
            </dt>
            <dd className="mt-1 leading-relaxed">{active.differentiation}</dd>
          </div>
          <div>
            <dt className="text-xs font-bold uppercase text-cc-mid-gray">MVP scope</dt>
            <dd className="mt-1 leading-relaxed">{active.mvpScope}</dd>
          </div>
        </dl>
      </div>

      {quote ? (
        <PullQuote text={quote.text} source={quote.source} title={quote.title} />
      ) : (
        <p className="text-sm text-cc-mid-gray">No linked quote for this module.</p>
      )}
    </div>
  )
}
