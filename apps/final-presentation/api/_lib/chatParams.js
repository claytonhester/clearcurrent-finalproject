/**
 * History window, output budget, and retrieval breadth for /api/chat.
 */

import { ESCALATION_KEYWORDS, MODELS, pickModel } from './routing.js'

const MAX_HISTORY_MESSAGES = 12
const MAX_HISTORY_CHARS = 20_000

const TOPK_MIN = 6
const TOPK_MAX = 10

/** @param {import('./routing.js').ModelId} model */
function isSonnet(model) {
  return model === MODELS.SONNET
}

/**
 * Wider chunk pull for “all research”, cross-source questions, or Sonnet path.
 * @param {string} topicId
 * @param {string} message
 * @param {string} model
 */
export function pickTopK(topicId, message, model) {
  const m = String(message || '')
  let k = TOPK_MIN

  if (topicId === 'all') {
    k = 8
  }
  if (isSonnet(model)) {
    k = Math.max(k, 8)
  }
  for (const re of ESCALATION_KEYWORDS) {
    if (re.test(m)) {
      k = 9
      break
    }
  }

  return Math.min(TOPK_MAX, Math.max(TOPK_MIN, k))
}

const EXTRA_OUTPUT_HINT = /\b(longer|longest|comprehensive|elaborat|expound|more nuance|full (answer|list)|expand (on|this))\b/i

/**
 * @param {string} message
 * @param {string} model
 */
export function pickMaxOutputTokens(message, model) {
  const m = String(message || '')
  if (isSonnet(model)) {
    return 1400
  }
  if (ESCALATION_KEYWORDS.some((re) => re.test(m)) || EXTRA_OUTPUT_HINT.test(m)) {
    return 1100
  }
  return 800
}

/**
 * @param {Array<{ role: string, content: string }>} history
 */
export function trimHistoryForApi(history) {
  if (!Array.isArray(history) || history.length === 0) {
    return []
  }
  const filtered = history.filter(
    (m) =>
      m &&
      (m.role === 'user' || m.role === 'assistant') &&
      typeof m.content === 'string',
  )
  let turns = filtered.slice(-MAX_HISTORY_MESSAGES)
  let total = turns.reduce((s, m) => s + m.content.length, 0)
  while (turns.length > 1 && total > MAX_HISTORY_CHARS) {
    turns = turns.slice(1)
    total = turns.reduce((s, m) => s + m.content.length, 0)
  }
  return turns
}

/**
 * @param {string} message
 * @param {Array<{ role: string, content: string }>} history
 */
export function planRequest(message, history) {
  const trimmedHistory = trimHistoryForApi(history)
  const model = pickModel({ message, history: trimmedHistory })
  return {
    model,
    trimmedHistory,
  }
}
