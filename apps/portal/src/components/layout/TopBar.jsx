import { useMemo } from 'react'
import { Printer } from 'lucide-react'
import { useLocation } from 'react-router-dom'
import { SiteSearch } from '../SiteSearch'
import { NAV_ITEMS } from '../../navConfig'

export function TopBar() {
  const { pathname } = useLocation()

  const title = useMemo(() => {
    const match = NAV_ITEMS.find((item) => item.path === pathname)
    return match?.label ?? 'Clear Current'
  }, [pathname])

  return (
    <header className="print:hidden sticky top-0 z-10 border-b border-cc-mid-gray/15 bg-cc-white px-5 py-3.5 shadow-sm sm:px-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-sm font-semibold uppercase tracking-widest text-cc-navy/70">
          {title}
        </h1>
        <div className="flex flex-wrap items-center gap-2">
          <SiteSearch />
          <button
            type="button"
            onClick={() => window.print()}
            className="inline-flex items-center gap-1.5 rounded-md border border-cc-mid-gray/25 bg-cc-white px-3 py-1.5 text-xs font-semibold text-cc-navy shadow-sm hover:bg-cc-light-gray"
            aria-label="Print or save as PDF"
          >
            <Printer className="h-4 w-4 opacity-90" aria-hidden />
            Print / Save PDF
          </button>
        </div>
      </div>
    </header>
  )
}
