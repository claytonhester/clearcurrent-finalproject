import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { HashScroll } from '../HashScroll.jsx'
import { Sidebar } from './Sidebar.jsx'
import { TopBar } from './TopBar.jsx'
import { WalkFooter } from './WalkFooter.jsx'
import { SiteFooter } from './SiteFooter.jsx'
import { ChatBubble } from '../chat/ChatBubble.jsx'
import { FullPageChatProvider } from '../../context/FullPageChatContext.jsx'
import {
  APPENDIX_ITEMS,
  DELIVERABLES,
  getDocumentTitle,
  RESEARCH_ASSISTANT,
} from '../../navConfig.js'

const LAST_ROUTE_KEY = 'cc-final-presentation-last-route'

export function Layout() {
  const { pathname } = useLocation()
  const isChatPage = pathname === RESEARCH_ASSISTANT.path
  const pageTitle =
    DELIVERABLES.find((i) => i.path === pathname)?.label ??
    (isChatPage ? RESEARCH_ASSISTANT.label : null) ??
    APPENDIX_ITEMS.find((i) => i.path === pathname)?.label ??
    'Clear Current'

  useEffect(() => {
    document.title = getDocumentTitle(pathname)
  }, [pathname])

  useEffect(() => {
    if (pathname === '/') return
    try {
      localStorage.setItem(LAST_ROUTE_KEY, pathname)
    } catch {
      /* ignore */
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
      <FullPageChatProvider>
        <div className="flex min-h-0 min-w-0 flex-1 flex-col">
          <TopBar />
          <main
          id="main-content"
          tabIndex={-1}
          className={`flex-1 overflow-y-auto bg-cc-light-gray print:bg-white print:px-0 print:py-0 ${
            isChatPage
              ? 'flex min-h-0 flex-col p-0'
              : 'px-5 py-8 sm:px-8 lg:py-10'
          }`}
        >
          <div
            className={
              isChatPage
                ? 'mx-auto flex h-[calc(100svh-3.25rem)] w-full max-w-none min-h-0 flex-1 flex-col'
                : 'mx-auto w-full max-w-[1140px]'
            }
          >
            <h1 className="mb-4 hidden text-xl font-bold tracking-tight text-cc-navy print:block">
              {pageTitle}
            </h1>
            <Outlet />
            {isChatPage ? null : (
              <>
                <WalkFooter />
                <SiteFooter />
              </>
            )}
          </div>
        </main>
        </div>
      </FullPageChatProvider>
      {!isChatPage ? (
        <div className="print:hidden">
          <ChatBubble />
        </div>
      ) : null}
    </div>
  )
}
