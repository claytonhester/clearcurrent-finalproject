import { describe, it, expect } from 'vitest'
import { NAV_ITEMS, NAV_ICON_MAP } from './navConfig'

describe('navConfig', () => {
  it('has unique paths', () => {
    const paths = NAV_ITEMS.map((i) => i.path)
    expect(new Set(paths).size).toBe(paths.length)
  })

  it('includes home, CEO brief, and bonus route', () => {
    expect(NAV_ITEMS.some((i) => i.path === '/')).toBe(true)
    expect(NAV_ITEMS.some((i) => i.path === '/brief')).toBe(true)
    expect(NAV_ITEMS.some((i) => i.path === '/bonus')).toBe(true)
  })

  it('every item has a resolvable icon key', () => {
    for (const item of NAV_ITEMS) {
      expect(NAV_ICON_MAP[item.icon], `icon ${item.icon}`).toBeDefined()
    }
  })
})
