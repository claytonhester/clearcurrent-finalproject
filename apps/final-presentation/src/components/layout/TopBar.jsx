import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Printer, Search, Menu } from 'lucide-react'
import { getAppendixByPath, getDeliverableByPath, PORTAL_SHELL } from '../../navConfig.js'
import { SiteSearch } from '../shared/SiteSearch.jsx'
import { MobileNav } from './MobileNav.jsx'

export function TopBar() {
  const { pathname } = useLocation()
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const deliverable = getDeliverableByPath(pathname)
  const appendix = getAppendixByPath(pathname)
  const eyebrow =
    deliverable?.eyebrow ?? appendix?.eyebrow ?? PORTAL_SHELL.defaultTopBarEyebrow
  const label = deliverable?.label ?? appendix?.label ?? 'Portal'

  useEffect(() => {
    function onKey(e) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setSearchOpen(true)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <header className="sticky top-0 z-30 flex items-center gap-3 border-b border-cc-border bg-white/95 px-5 py-2 backdrop-blur print:hidden">
      <button
        type="button"
        className="rounded p-1.5 text-cc-navy hover:bg-cc-light-gray lg:hidden"
        onClick={() => setMobileOpen(true)}
        aria-label="Open navigation"
      >
        <Menu className="h-5 w-5" />
      </button>

      <div className="min-w-0 flex-1">
        <div className="truncate text-[10px] font-bold uppercase tracking-wider text-cc-mid-gray">
          {eyebrow}
        </div>
        <div className="truncate text-[13px] font-semibold text-cc-navy">{label}</div>
      </div>

      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-md border border-cc-border bg-white px-2.5 py-1.5 text-[12px] font-medium text-cc-dark-text hover:bg-cc-light-gray"
        >
          <Search className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Search</span>
          <kbd className="ml-1 hidden rounded bg-cc-light-gray px-1 text-[10px] font-bold text-cc-mid-gray md:inline">
            ⌘K
          </kbd>
        </button>
        <button
          type="button"
          onClick={() => window.print()}
          className="inline-flex items-center gap-1.5 rounded-md border border-cc-navy bg-cc-navy px-2.5 py-1.5 text-[12px] font-semibold text-white hover:bg-cc-navy-light"
        >
          <Printer className="h-3.5 w-3.5" />
          <span className="hidden sm:inline">Print</span>
          <span className="sm:hidden">Print</span>
        </button>
      </div>

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
