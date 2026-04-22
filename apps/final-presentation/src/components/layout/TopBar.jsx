import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { Printer, Search, Menu } from 'lucide-react'
import {
  getAppendixByPath,
  getDeliverableByPath,
  PORTAL_SHELL,
  RESEARCH_ASSISTANT,
} from '../../navConfig.js'
import { SiteSearch } from '../shared/SiteSearch.jsx'
import { MobileNav } from './MobileNav.jsx'
import { useFullPageChatContext } from '../../context/FullPageChatContext.jsx'

export function TopBar() {
  const { pathname } = useLocation()
  const { fullPageChatControls } = useFullPageChatContext()
  const [searchOpen, setSearchOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  const deliverable = getDeliverableByPath(pathname)
  const appendix = getAppendixByPath(pathname)
  const isChatPage = pathname === RESEARCH_ASSISTANT.path
  const eyebrow = isChatPage
    ? RESEARCH_ASSISTANT.eyebrow
    : (deliverable?.eyebrow ?? appendix?.eyebrow ?? PORTAL_SHELL.defaultTopBarEyebrow)
  const label = isChatPage
    ? RESEARCH_ASSISTANT.label
    : (deliverable?.label ?? appendix?.label ?? 'Portal')

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

      <div className="flex min-w-0 flex-1 items-center gap-3">
        <div className="min-w-0 flex-1">
          <div className="truncate text-[10px] font-bold uppercase tracking-wider text-cc-mid-gray">
            {eyebrow}
          </div>
          <div className="flex min-w-0 flex-wrap items-center gap-x-2 gap-y-1">
            <div className="min-w-0 truncate text-[13px] font-semibold text-cc-navy">{label}</div>
            {isChatPage && fullPageChatControls ? (
              <>
                <span className="inline-flex max-w-full shrink-0 items-center gap-1.5 rounded-full bg-cc-yellow-soft px-2 py-0.5 text-xs font-medium text-cc-navy">
                  <span className="inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-cc-yellow" />
                  <span className="truncate">{fullPageChatControls.topicLabel}</span>
                </span>
                <button
                  type="button"
                  onClick={fullPageChatControls.onSwitchTopic}
                  className="shrink-0 text-xs text-cc-mid-gray underline-offset-2 hover:text-cc-navy hover:underline"
                >
                  Switch topic
                </button>
              </>
            ) : null}
          </div>
        </div>

        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="inline-flex h-9 shrink-0 items-center justify-center rounded-lg border border-cc-border bg-white px-2.5 text-cc-navy shadow-sm hover:bg-cc-light-gray md:hidden"
          aria-label="Open search"
        >
          <Search className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => setSearchOpen(true)}
          className="hidden h-9 shrink-0 items-center gap-2 rounded-lg border border-cc-border bg-cc-light-gray/60 px-3 text-left shadow-[inset_0_1px_0_rgba(255,255,255,0.7)] hover:border-cc-mid-gray/25 hover:bg-cc-light-gray md:inline-flex md:min-w-[13rem] lg:min-w-[15rem]"
        >
          <Search className="h-4 w-4 shrink-0 text-cc-mid-gray" aria-hidden />
          <span className="min-w-0 flex-1 truncate text-[13px] text-cc-mid-gray">Search pages…</span>
          <kbd className="hidden shrink-0 rounded border border-cc-border bg-white px-1.5 py-0.5 text-[10px] font-semibold text-cc-mid-gray lg:inline">
            ⌘K
          </kbd>
        </button>
      </div>

      {/* Print is the deliverable PDF export path; the Research Assistant
          chat has nothing meaningful to print, so the button is hidden there. */}
      {!isChatPage ? (
        <div className="flex shrink-0 items-center gap-2">
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
      ) : null}

      <SiteSearch open={searchOpen} onClose={() => setSearchOpen(false)} />
      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
