/**
 * Returns a safe href for `target="_blank"` links, or `null` to render text only.
 * Blocks javascript:, data:, and other non-web schemes from markdown.
 */
export function safeExternalLinkHref(href) {
  if (href == null || typeof href !== 'string') return null
  const t = href.trim()
  if (!t) return null
  const lower = t.toLowerCase()
  if (lower.startsWith('https://') || lower.startsWith('http://')) return t
  if (lower.startsWith('mailto:') && t.length < 2000) return t
  return null
}
