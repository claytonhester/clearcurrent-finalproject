import { describe, expect, it } from 'vitest'
import { buildRetrievalQuery } from './retrievalQuery.js'

describe('buildRetrievalQuery', () => {
  it('uses only the latest turn when there is no history', () => {
    expect(buildRetrievalQuery('What about demand charges?', [])).toBe('What about demand charges?')
  })

  it('concatenates the previous user turn with the latest', () => {
    const history = [
      { role: 'user', content: 'Summarize the hospital interview themes.' },
      { role: 'assistant', content: 'Here are the main themes...' },
    ]
    const q = buildRetrievalQuery('Expand the second one.', history)
    expect(q).toContain('hospital')
    expect(q).toContain('Expand the second one.')
  })
})
