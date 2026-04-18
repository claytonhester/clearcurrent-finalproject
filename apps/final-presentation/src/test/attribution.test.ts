import { describe, expect, it } from 'vitest'
import { QUOTES } from '../content/quotes'

describe('quote attribution policy', () => {
  it('every quote has either "full" attribution or an explicit non-default label', () => {
    const allowed = new Set(['full', 'initials', 'paraphrase', 'do-not-use', undefined])
    for (const [id, q] of Object.entries(QUOTES)) {
      expect(
        allowed.has(q.attribution),
        `quote ${id} has unexpected attribution: ${q.attribution}`,
      ).toBe(true)
    }
  })

  it('do-not-use quotes are clearly labelled', () => {
    for (const [id, q] of Object.entries(QUOTES)) {
      if (q.attribution === 'do-not-use') {
        expect(
          q.context,
          `do-not-use quote ${id} missing context explanation`,
        ).toBeTruthy()
      }
    }
  })

  it('paraphrase quotes still carry a real speaker', () => {
    for (const [id, q] of Object.entries(QUOTES)) {
      if (q.attribution === 'paraphrase') {
        expect(q.speaker, `paraphrase quote ${id} missing speaker`).toBeTruthy()
        expect(q.role, `paraphrase quote ${id} missing role`).toBeTruthy()
      }
    }
  })
})
