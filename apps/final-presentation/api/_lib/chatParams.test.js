import { describe, expect, it } from 'vitest'
import { MODELS } from './routing.js'
import { pickMaxOutputTokens, pickTopK, trimHistoryForApi } from './chatParams.js'

describe('chatParams', () => {
  it('raises topK for all-research and caps at 10', () => {
    expect(pickTopK('all', 'hello', MODELS.HAIKU)).toBe(8)
  })

  it('raises topK for comparison style queries', () => {
    const k = pickTopK('d0', 'Compare hospitals vs universities', MODELS.HAIKU)
    expect(k).toBe(9)
  })

  it('gives Sonnet a higher default max tokens', () => {
    expect(pickMaxOutputTokens('short', MODELS.SONNET)).toBe(1400)
  })

  it('gives more tokens for depth heuristics on Haiku', () => {
    expect(pickMaxOutputTokens('Walk me through the detail', MODELS.HAIKU)).toBe(1100)
  })

  it('trims history by character budget', () => {
    const long = 'x'.repeat(25_000)
    const h = [
      { role: 'user', content: 'first' },
      { role: 'assistant', content: 'ok' },
      { role: 'user', content: long },
    ]
    const t = trimHistoryForApi(h)
    expect(t.length).toBeLessThan(3)
    const chars = t.reduce((s, m) => s + m.content.length, 0)
    expect(chars).toBeLessThanOrEqual(20_000)
  })
})
