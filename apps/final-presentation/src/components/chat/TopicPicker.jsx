import { TOPIC_GROUPS } from './topics.js'
import { DEFAULT_STARTERS } from './starters.js'

/**
 * Topic picker — shown when the chat opens and no topic is selected.
 *
 * Layout: prominent "Explore all research" card on top, then two sections
 * (deliverables grid + source data row).
 */
export function TopicPicker({ onSelect, autoSelectedTopicId = null }) {
  const allTopic = TOPIC_GROUPS[0].topics[0]
  const deliverableTopics = TOPIC_GROUPS[1].topics
  const sourceTopics = TOPIC_GROUPS[2].topics

  return (
    <div className="flex flex-col gap-5 p-5">
      <h2 className="text-lg font-semibold text-cc-navy">
        What would you like to dig into?
      </h2>

      <button
        type="button"
        onClick={() => onSelect(allTopic.id)}
        className="group rounded-xl border-2 border-cc-navy bg-cc-navy px-5 py-4 text-left text-cc-white shadow-sm transition hover:bg-cc-navy-light"
      >
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-base font-semibold">{allTopic.label}</div>
            <div className="mt-1 text-sm text-cc-white/80">{allTopic.tagline}</div>
          </div>
          <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cc-yellow text-cc-navy transition group-hover:translate-x-0.5">
            →
          </span>
        </div>
      </button>

      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wide text-cc-mid-gray">
          Synthesized deliverables
        </div>
        <div className="flex flex-wrap gap-1.5">
          {deliverableTopics.map((t) => (
            <TopicPill
              key={t.id}
              topic={t}
              highlighted={t.id === autoSelectedTopicId}
              onSelect={onSelect}
            />
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <div className="text-xs font-semibold uppercase tracking-wide text-cc-mid-gray">
          Source data
        </div>
        <div className="flex flex-wrap gap-1.5">
          {sourceTopics.map((t) => (
            <TopicPill
              key={t.id}
              topic={t}
              highlighted={t.id === autoSelectedTopicId}
              onSelect={onSelect}
              accent="green"
            />
          ))}
        </div>
      </div>
    </div>
  )
}

/** Compact pill — used in the picker grid. Label only, no tagline. */
function TopicPill({ topic, onSelect, highlighted = false, accent }) {
  const a = accent || topic.accent || 'yellow'
  const dotClass = a === 'green' ? 'bg-cc-green' : 'bg-cc-yellow'
  return (
    <button
      type="button"
      onClick={() => onSelect(topic.id)}
      title={topic.tagline}
      className={`inline-flex items-center gap-1.5 rounded-full border bg-white px-3 py-1.5 text-xs font-medium text-cc-navy shadow-sm transition hover:border-cc-navy hover:bg-cc-navy hover:text-cc-white ${
        highlighted
          ? 'border-cc-navy ring-2 ring-cc-yellow'
          : 'border-cc-border'
      }`}
    >
      <span className={`inline-block h-1.5 w-1.5 rounded-full ${dotClass}`} />
      <span>{topic.label}</span>
    </button>
  )
}

export function StarterPrompts({ topicId, onSelect }) {
  const starters = DEFAULT_STARTERS[topicId] || DEFAULT_STARTERS.all
  return (
    <div className="space-y-2">
      <div className="text-xs font-semibold uppercase tracking-wide text-cc-mid-gray">
        Try one of these
      </div>
      <div className="flex flex-col gap-2">
        {starters.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => onSelect(s)}
            className="rounded-lg border border-cc-border bg-white px-3 py-2 text-left text-[13px] text-cc-dark-text transition hover:border-cc-navy hover:bg-cc-light-gray"
          >
            {s}
          </button>
        ))}
      </div>
    </div>
  )
}
