/**
 * Routes a user query to either Claude Haiku 4.5 (default, cheap, fast)
 * or Claude Sonnet 4.5 (escalation for complex synthesis / multi-part queries).
 *
 * Returns the model id to send to the Anthropic Messages API.
 */

const HAIKU = 'claude-haiku-4-5'
const SONNET = 'claude-sonnet-4-5'

/** Exported for topK / max_tokens heuristics in `chatParams.js`. */
export const ESCALATION_KEYWORDS = [
  // Comparison / synthesis
  /\bcompare\b/i,
  /\bcontrast\b/i,
  /\bversus\b/i,
  /\bvs\.?\b/i,
  /\bacross\b/i,
  /\bbetween\b/i,
  /\ball (interview|companies|verticals|sources|deliverables)/i,
  /\bevery (interview|company|vertical|source|deliverable)/i,
  /\bsynthesize\b/i,
  /\bsummari[sz]e\b/i,
  /\bpattern(s)?\b/i,
  /\bthemes?\b/i,
  /\btrend(s)?\b/i,
  /\bcommon(alities)?\b/i,
  /\boverall\b/i,
  // Depth requests
  /\bdeep\s*dive\b/i,
  /\bin\s+detail\b/i,
  /\bwalk\s+(me|us)\s+through\b/i,
  /\bexplain.*\bdetail\b/i,
  /\bbreakdown\b/i,
]

export function pickModel({ message, history = [] }) {
  const text = String(message || '')

  // Multi-part questions
  const questionMarkCount = (text.match(/\?/g) || []).length
  if (questionMarkCount >= 2) return SONNET

  // Escalation keywords
  for (const re of ESCALATION_KEYWORDS) {
    if (re.test(text)) return SONNET
  }

  // Long conversations need more reasoning
  if (history.length >= 6) return SONNET

  return HAIKU
}

export const MODELS = { HAIKU, SONNET }
