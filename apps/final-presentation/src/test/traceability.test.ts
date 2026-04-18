import { describe, expect, it } from 'vitest'
import { SOURCES, sourceExists } from '../content/sources'
import { QUOTES } from '../content/quotes'

describe('sources registry integrity', () => {
  it('every source has a non-empty id and title', () => {
    for (const [id, src] of Object.entries(SOURCES)) {
      expect(src.id, `source ${id} missing id`).toBe(id)
      expect(src.title, `source ${id} missing title`).toBeTruthy()
      expect(src.kind, `source ${id} missing kind`).toBeTruthy()
    }
  })

  it('every file-based source references a file path in the repo convention', () => {
    for (const src of Object.values(SOURCES)) {
      if (src.file) {
        expect(src.file, `source ${src.id} file path`).toMatch(/^research\//)
      }
    }
  })
})

describe('quotes ↔ sources traceability', () => {
  it('every quote resolves to a registered source', () => {
    for (const [id, q] of Object.entries(QUOTES)) {
      expect(
        sourceExists(q.sourceId),
        `quote ${id} references unknown source ${q.sourceId}`,
      ).toBe(true)
    }
  })

  it('every quote has speaker, role, org', () => {
    for (const [id, q] of Object.entries(QUOTES)) {
      expect(q.speaker, `quote ${id} missing speaker`).toBeTruthy()
      expect(q.role, `quote ${id} missing role`).toBeTruthy()
      expect(q.org, `quote ${id} missing org`).toBeTruthy()
    }
  })
})
