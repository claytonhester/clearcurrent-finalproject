import { useMemo, useState } from 'react'
import { appendixEyebrow } from '../../navConfig.js'
import { PageHeader } from '../../components/shared/PageHeader.jsx'
import { SectionHeader } from '../../components/shared/SectionHeader.jsx'
import { SourceLink } from '../../components/shared/SourceLink.jsx'
import {
  CHAT_PROMPT_INDUSTRY_FILTERS,
  industryLabel,
  USER_CHAT_PROMPT_PERSONAS,
} from '../../content/appendix/userChatPromptLibrary.ts'

export function UserChatPromptLibrary() {
  const [industry, setIndustry] = useState(null)

  const filtered = useMemo(() => {
    if (!industry) return USER_CHAT_PROMPT_PERSONAS
    return USER_CHAT_PROMPT_PERSONAS.filter((p) => p.industry === industry)
  }, [industry])

  const counts = useMemo(() => {
    const byId = Object.fromEntries(CHAT_PROMPT_INDUSTRY_FILTERS.map((f) => [f.id, 0]))
    for (const p of USER_CHAT_PROMPT_PERSONAS) {
      byId[p.industry] += 1
    }
    return byId
  }, [])

  return (
    <article className="flex flex-col gap-8">
      <PageHeader
        eyebrow={appendixEyebrow('app-chat-prompts')}
        title="User chat prompt library"
        lede="Questions buyers said they would want to ask an AI layer on bills, meters, and portfolio energy data—elicited in primary interviews. Product wishes and non-question “insights” are omitted. Coverage was re-audited against the primary research corpus. Use for demos, journey writing, and eval sets—not as claims about current product scope."
      />

      <section className="flex flex-col gap-4">
        <SectionHeader number={1} title="Questions by persona" />
        <div className="flex flex-col gap-2">
          <p className="text-[12px] font-semibold uppercase tracking-wider text-cc-mid-gray">
            Filter by industry
          </p>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              onClick={() => setIndustry(null)}
              className={`rounded-full border px-3 py-1.5 text-[12.5px] font-medium transition-colors ${
                industry === null
                  ? 'border-cc-navy bg-cc-navy text-white'
                  : 'border-cc-border bg-white text-cc-dark-text hover:border-cc-navy/40'
              }`}
            >
              All
              <span className="ml-1 tabular-nums opacity-80">({USER_CHAT_PROMPT_PERSONAS.length})</span>
            </button>
            {CHAT_PROMPT_INDUSTRY_FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setIndustry(f.id)}
                className={`rounded-full border px-3 py-1.5 text-[12.5px] font-medium transition-colors ${
                  industry === f.id
                    ? 'border-cc-navy bg-cc-navy text-white'
                    : 'border-cc-border bg-white text-cc-dark-text hover:border-cc-navy/40'
                }`}
              >
                {f.label}
                <span className="ml-1 tabular-nums opacity-80">({counts[f.id]})</span>
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {filtered.map((p) => (
            <div key={p.id} className="evidence-card flex flex-col gap-3 p-4 sm:p-5">
              <div className="flex flex-col gap-0.5 border-b border-cc-border/70 pb-3">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[15px] font-bold text-cc-navy">{p.name}</h3>
                  <span className="rounded bg-cc-navy/10 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-cc-navy">
                    {industryLabel(p.industry)}
                  </span>
                </div>
                <p className="text-[12.5px] text-cc-mid-gray">
                  {p.role} · {p.organization}
                  {p.vertical ? ` · ${p.vertical}` : ''}
                </p>
              </div>
              <ul className="flex flex-col gap-2">
                {p.prompts.map((text, i) => (
                  <li
                    key={i}
                    className="rounded-md border border-cc-border/80 bg-white px-3 py-2.5 text-[13px] leading-snug text-cc-dark-text"
                  >
                    <span className="font-mono text-[12px] text-cc-mid-gray">&gt; </span>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <SourceLink sourceId="pipeline-primary" compact />
    </article>
  )
}
