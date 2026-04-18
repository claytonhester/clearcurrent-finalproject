import { Quote as QuoteIcon } from 'lucide-react'
import { SourceLink } from './SourceLink.jsx'
import { QUOTES } from '../../content/quotes.ts'

export function EvidenceCallout({ quoteId, emphasis = 'default' }) {
  const q = QUOTES[quoteId]
  if (!q) {
    return (
      <div className="rounded border border-cc-red/30 bg-cc-red/5 p-3 text-[12px] text-cc-red">
        Unknown quoteId: {quoteId}
      </div>
    )
  }

  const attributionNote =
    q.attribution === 'paraphrase'
      ? 'Paraphrased from interview'
      : q.attribution === 'do-not-use'
        ? 'Do not use externally'
        : null

  return (
    <figure
      className={`evidence-card flex flex-col gap-3 ${emphasis === 'large' ? 'p-6' : ''}`}
    >
      <div className="flex items-start gap-3">
        <QuoteIcon
          className="mt-1 h-4 w-4 flex-shrink-0 text-cc-yellow"
          aria-hidden="true"
        />
        <blockquote
          className={`min-w-0 flex-1 text-cc-dark-text ${
            emphasis === 'large' ? 'text-lg leading-snug' : 'text-[15px] leading-snug'
          }`}
        >
          &ldquo;{q.text}&rdquo;
        </blockquote>
      </div>
      {q.context ? (
        <div className="flex items-start gap-3">
          <span className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
          <p className="min-w-0 flex-1 text-[12px] leading-snug text-cc-mid-gray">
            {q.context}
          </p>
        </div>
      ) : null}
      <figcaption className="mt-1 flex flex-col gap-1 border-t border-cc-border/60 pt-3 text-[12px]">
        <span className="font-semibold text-cc-navy">
          {q.speaker}
          {attributionNote ? (
            <span className="ml-2 text-[10px] font-medium uppercase tracking-wide text-cc-mid-gray">
              · {attributionNote}
            </span>
          ) : null}
        </span>
        <span className="text-cc-mid-gray">
          {q.role}
          {q.org ? `, ${q.org}` : ''}
        </span>
        <div className="mt-1">
          <SourceLink sourceId={q.sourceId} compact />
        </div>
      </figcaption>
    </figure>
  )
}
