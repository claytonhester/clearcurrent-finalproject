import { Fragment } from 'react'

/**
 * Renders plain strings with Markdown-style **bold** as <strong>.
 * Does not parse full Markdown — only paired double-asterisk segments.
 * @param {string} strongClassName - Tailwind classes for <strong> (e.g. on dark backgrounds).
 */
export function formatInlineBold(text, strongClassName = 'font-semibold text-cc-navy') {
  if (text == null || text === '') return text
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g)
  return parts.map((part, i) => {
    const m = part.match(/^\*\*(.+)\*\*$/)
    if (m) {
      return (
        <strong key={i} className={strongClassName}>
          {m[1]}
        </strong>
      )
    }
    return <Fragment key={i}>{part}</Fragment>
  })
}
