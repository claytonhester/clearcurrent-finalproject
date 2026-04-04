import { useMemo } from 'react'
import { useLocation } from 'react-router-dom'
import { NAV_ITEMS } from '../../navConfig'

export function TopBar() {
  const { pathname } = useLocation()

  const title = useMemo(() => {
    const match = NAV_ITEMS.find((item) => item.path === pathname)
    return match?.label ?? 'Clear Current'
  }, [pathname])

  return (
    <header className="sticky top-0 z-10 border-b border-cc-mid-gray/15 bg-cc-white px-6 py-3 shadow-sm">
      <h1 className="text-sm font-semibold tracking-tight text-cc-navy">{title}</h1>
    </header>
  )
}
