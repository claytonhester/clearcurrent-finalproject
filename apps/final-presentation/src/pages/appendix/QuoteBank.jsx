import { useState } from 'react'
import { appendixEyebrow } from '../../navConfig.js'
import { PageHeader } from '../../components/shared/PageHeader.jsx'
import { EvidenceCallout } from '../../components/shared/EvidenceCallout.jsx'
import { SourceLink } from '../../components/shared/SourceLink.jsx'
import { getQuoteBankSections } from '../../content/quotes.ts'

export function QuoteBank() {
  const sections = getQuoteBankSections()
  const [activeKey, setActiveKey] = useState(() => sections[0]?.key ?? '')
  const resolvedKey = sections.some((s) => s.key === activeKey)
    ? activeKey
    : (sections[0]?.key ?? '')
  const active = sections.find((s) => s.key === resolvedKey)

  return (
    <article className="flex flex-col gap-8">
      <PageHeader
        eyebrow={appendixEyebrow('app-quote-bank')}
        title="Quote bank"
        lede="Primary research quotes grouped by theme. Choose a theme below; paraphrases and restricted-use lines are labelled on each card."
      />

      <div className="flex flex-col gap-5">
        <div
          role="tablist"
          aria-label="Quote themes"
          className="flex flex-wrap gap-2 border-b border-cc-border/60 pb-4"
        >
          {sections.map((s) => {
            const selected = s.key === resolvedKey
            return (
              <button
                key={s.key}
                type="button"
                role="tab"
                id={`quote-tab-${s.key}`}
                aria-selected={selected}
                aria-controls={`quote-panel-${s.key}`}
                tabIndex={selected ? 0 : -1}
                onClick={() => setActiveKey(s.key)}
                className={`rounded-md border px-3 py-2 text-left text-[12px] font-semibold leading-snug transition ${
                  selected
                    ? 'border-cc-navy bg-cc-navy text-white'
                    : 'border-cc-border bg-white text-cc-dark-text hover:bg-cc-light-gray'
                }`}
              >
                {s.title}
              </button>
            )
          })}
        </div>

        {active ? (
          <div
            role="tabpanel"
            id={`quote-panel-${active.key}`}
            aria-labelledby={`quote-tab-${active.key}`}
            className="grid grid-cols-1 gap-3 md:grid-cols-2"
          >
            {active.quotes.map((q) => (
              <EvidenceCallout key={q.id} quoteId={q.id} />
            ))}
          </div>
        ) : null}
      </div>

      <div className="flex flex-wrap gap-2 border-t border-cc-border/60 pt-6">
        <SourceLink sourceId="primary-quotes" compact />
        <SourceLink sourceId="master-quotes" compact />
      </div>
    </article>
  )
}
