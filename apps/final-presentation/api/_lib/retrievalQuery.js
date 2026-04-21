/**
 * Build BM25 search text from the latest user turn + recent user turns so
 * follow-ups like "expand that" still retrieve useful chunks.
 */

const MAX_QUERY_LEN = 3500
const TAIL_OF_PRIOR = 1500

/**
 * @param {string} latestUserMessage
 * @param {Array<{ role: string, content: string }>} history prior messages (no new turn yet)
 */
export function buildRetrievalQuery(latestUserMessage, history) {
  const u = String(latestUserMessage || '').trim()
  if (!u) return u

  if (!Array.isArray(history) || history.length === 0) {
    return u
  }

  const userContents = []
  for (const m of history) {
    if (m && m.role === 'user' && typeof m.content === 'string' && m.content.trim()) {
      userContents.push(m.content.trim())
    }
  }
  if (userContents.length === 0) {
    return u
  }

  const prev = userContents[userContents.length - 1]
  if (prev === u) {
    return u
  }

  const combined = `${prev}\n\n${u}`
  if (combined.length <= MAX_QUERY_LEN) {
    return combined
  }

  return `${prev.slice(-TAIL_OF_PRIOR)}\n\n${u}`.slice(-MAX_QUERY_LEN)
}
