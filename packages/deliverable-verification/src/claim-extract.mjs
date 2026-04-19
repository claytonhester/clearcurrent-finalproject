/**
 * Pull verifiable strings from nested deliverable content objects.
 */

const STOP_KEYS = new Set(['verticals', 'path', 'slug', 'icon', 'color', 'productTag', 'type'])

function shouldInclude(jsonPath, text) {
  if (typeof text !== 'string') return false
  const s = text.trim()
  if (!s) return false
  if (/^[\d$.,%+\-–—]+$/.test(s)) return false
  if (/^[a-z0-9\-_/]+$/i.test(s) && s.length < 36) return false

  // `.quotes[0].text` must not match — `.quotes` contains substring `.quote`.
  const isQuoteField = /\.quote$/.test(jsonPath)
  if (isQuoteField) return s.length >= 6

  if (jsonPath.includes('.tldrBullets[')) return s.length >= 18
  if (jsonPath.includes('.evidence[')) return s.length >= 12

  return s.length >= 34
}

function claimKind(jsonPath) {
  if (/\.quote$/.test(jsonPath)) return 'quote'
  if (jsonPath.includes('.evidence')) return 'evidence_line'
  if (jsonPath.includes('.tldrBullets')) return 'tldr'
  if (jsonPath.includes('.headline') || jsonPath.includes('.oneLiner')) return 'headline'
  return 'narrative'
}

/**
 * @param {unknown} node
 * @param {string} jsonPath
 * @param {Record<string, string>} ctx
 * @returns {Array<{ path: string, text: string, kind: string, primarySource?: string, speaker?: string, recordId?: string }>}
 */
export function extractClaims(node, jsonPath = '$', ctx = {}) {
  if (node === null || node === undefined) return []

  if (typeof node === 'string') {
    if (!shouldInclude(jsonPath, node)) return []
    return [
      {
        path: jsonPath,
        text: node.trim(),
        kind: claimKind(jsonPath),
        ...(ctx.primarySource ? { primarySource: ctx.primarySource } : {}),
        ...(ctx.speaker ? { speaker: ctx.speaker } : {}),
        ...(ctx.recordId ? { recordId: ctx.recordId } : {}),
      },
    ]
  }

  if (Array.isArray(node)) {
    return node.flatMap((item, i) => extractClaims(item, `${jsonPath}[${i}]`, ctx))
  }

  if (typeof node === 'object') {
    const next = { ...ctx }
    if (typeof node.primarySource === 'string') next.primarySource = node.primarySource
    if (typeof node.speaker === 'string') next.speaker = node.speaker
    if (typeof node.id === 'string' && node.id.length < 40) next.recordId = node.id

    return Object.entries(node).flatMap(([key, val]) => {
      if (STOP_KEYS.has(key)) return []
      return extractClaims(val, `${jsonPath}.${key}`, next)
    })
  }

  return []
}
