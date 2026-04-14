import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { HashScroll } from '../HashScroll'
import { NAV_ITEMS } from '../../navConfig'
import { Sidebar } from './Sidebar'
import { SiteFooter } from './SiteFooter'
import { TopBar } from './TopBar'

const LAST_ROUTE_KEY = 'cc-portal-last-route'

export function Layout() {
  const { pathname } = useLocation()
  const pageTitle =
    NAV_ITEMS.find((item) => item.path === pathname)?.label ?? 'Clear Current'

  useEffect(() => {
    if (pathname === '/') return
    try {
      localStorage.setItem(LAST_ROUTE_KEY, pathname)
    } catch {
      /* private mode / quota */
    }
  }, [pathname])

  return (
    <div className="flex min-h-svh flex-col lg:flex-row">
      <HashScroll />
      <a
        href="#main-content"
        className="print:hidden fixed left-4 top-4 z-[200] -translate-y-[220%] rounded bg-cc-yellow px-4 py-2 text-sm font-semibold text-cc-navy shadow-md transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-cc-navy"
      >
        Skip to main content
      </a>
      <Sidebar />
      <div className="flex min-h-svh min-w-0 flex-1 flex-col">
        <TopBar />
        <main
          id="main-content"
          tabIndex={-1}
          className="flex-1 overflow-y-auto bg-cc-light-gray px-5 py-8 sm:px-8 lg:py-10"
        >
          <div className="mx-auto w-full max-w-[1100px]">
            <h1 className="mb-4 hidden text-xl font-bold tracking-tight text-cc-navy print:block">
              {pageTitle}
            </h1>
            <Outlet />
            <SiteFooter />
          </div>
        </main>
      </div>
    </div>
  )
}
