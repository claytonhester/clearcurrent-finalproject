import { describe, expect, it } from 'vitest'
import { safeExternalLinkHref } from './safeUrl.js'

describe('safeExternalLinkHref', () => {
  it('allows http and https', () => {
    expect(safeExternalLinkHref('https://example.com/x')).toBe('https://example.com/x')
    expect(safeExternalLinkHref('http://a.org')).toBe('http://a.org')
  })
  it('allows mailto with reasonable length', () => {
    expect(safeExternalLinkHref('mailto:a@b.co')).toBe('mailto:a@b.co')
  })
  it('blocks dangerous schemes', () => {
    expect(safeExternalLinkHref('javascript:alert(1)')).toBeNull()
    expect(safeExternalLinkHref('data:text/html,foo')).toBeNull()
  })
  it('rejects non-strings and empty', () => {
    expect(safeExternalLinkHref('')).toBeNull()
    expect(safeExternalLinkHref(null)).toBeNull()
  })
})
