import { describe, expect, it } from 'vitest'
import { readFileSync } from 'node:fs'
import { readdirSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

function walk(dir: string, out: string[] = []) {
  for (const name of readdirSync(dir)) {
    const full = join(dir, name)
    const st = statSync(full)
    if (st.isDirectory()) walk(full, out)
    else if (['.jsx', '.tsx', '.ts', '.js'].includes(extname(name))) out.push(full)
  }
  return out
}

/**
 * This test enforces editorial policy: the portal must never ship claims that
 * do not survive scrutiny. Specifically:
 *   - "80% of commercial bills are overpaying" — industry shorthand, not
 *     defensible in primary interviews or secondary sources.
 */
describe('banned stats editorial policy', () => {
  const ROOT = join(__dirname, '..')
  const pageFiles = walk(ROOT).filter(
    (p) =>
      (p.includes('/pages/') || p.includes('/content/pages/')) &&
      !p.includes('appendix/') &&
      !p.endsWith('.test.ts') &&
      !p.endsWith('.test.tsx') &&
      !p.endsWith('.test.jsx'),
  )

  it('pages do not use the "80% overpaying" industry shorthand', () => {
    for (const file of pageFiles) {
      const content = readFileSync(file, 'utf8').toLowerCase()
      // Allowed if wrapped in an explicit banned-claim caveat block.
      if (/80%[^%]*overpay/.test(content) || /80 percent[^%]*overpay/.test(content)) {
        // Sanity: only allowed in the caveat on ErrorsAreReal which calls it out as a rejected claim.
        const isCaveat =
          /not used|not supported|industry shorthand|banned|barred|do not use|needs-verification|do-not-use/.test(
            content,
          )
        expect(isCaveat, `banned stat used in ${file} without an explicit caveat`).toBe(
          true,
        )
      }
    }
  })
})
