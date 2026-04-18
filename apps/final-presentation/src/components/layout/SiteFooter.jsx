import { PORTAL_SHELL } from '../../navConfig.js'

export function SiteFooter() {
  return (
    <footer className="mt-12 border-t border-cc-border pt-4 text-[11px] text-cc-mid-gray print:mt-6 print:text-[10px]">
      <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
        <div>
          Clear Current Technologies · Internal leadership briefing · Claims trace to
          registered sources in {PORTAL_SHELL.appendixNavLabel.toLowerCase()}.
        </div>
        <div className="print:hidden">
          Build{' '}
          {typeof __APP_BUILD_TIME__ === 'string' ? __APP_BUILD_TIME__.slice(0, 10) : ''}
        </div>
      </div>
      <div className="mt-2 italic">
        For John and Dan: use main tabs for decisions; open Evidence &amp; diligence when
        an investor or board member asks “show me the receipt.”
      </div>
    </footer>
  )
}
