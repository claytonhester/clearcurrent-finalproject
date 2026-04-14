import { NavLink } from 'react-router-dom'
import { NAV_ITEMS, NAV_ICON_MAP } from '../../navConfig'

const PROJECT_YEAR = 2026

const linkClass = ({ isActive }) =>
  [
    'flex shrink-0 items-center gap-2 rounded-md px-3 py-2.5 text-sm font-medium whitespace-nowrap transition-colors lg:w-full lg:whitespace-normal',
    isActive
      ? 'border-b-4 border-cc-yellow bg-white/10 text-cc-yellow lg:border-b-0 lg:border-l-4 lg:bg-white/5 lg:pl-[8px]'
      : 'border-b-4 border-transparent text-white/85 hover:bg-white/5 hover:text-white lg:border-l-4 lg:border-b-0 lg:border-transparent lg:pl-3',
  ].join(' ')

export function Sidebar() {
  return (
    <aside
      id="nav"
      className="print:hidden sticky top-0 z-30 flex w-full shrink-0 flex-col bg-cc-navy text-cc-white lg:h-svh lg:w-[260px]"
    >
      <div className="border-b border-white/10 px-4 py-4 sm:px-5 sm:py-6">
        <div className="flex items-center gap-2">
          <span className="text-base font-bold tracking-tight sm:text-lg">
            CLEAR CURRENT
          </span>
          <span className="h-2 w-2 shrink-0 rounded-full bg-cc-yellow" aria-hidden />
        </div>
        <p className="mt-1 text-xs font-medium text-white/70">GTM Intelligence Portal</p>
      </div>

      <nav
        className="flex flex-1 flex-row gap-0.5 overflow-x-auto overflow-y-hidden px-2 py-3 lg:flex-col lg:gap-0.5 lg:overflow-y-auto lg:px-3 lg:py-4"
        aria-label="Primary"
      >
        {NAV_ITEMS.map((item) => {
          const Icon = NAV_ICON_MAP[item.icon]
          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === '/'}
              className={linkClass}
            >
              {Icon ? <Icon className="h-5 w-5 shrink-0 opacity-90" aria-hidden /> : null}
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <footer className="hidden border-t border-white/10 px-4 py-4 text-xs text-white/60 sm:px-5 lg:block">
        <p className="font-medium text-white/80">Texas A&M CDL Consulting Team</p>
        <p className="mt-0.5">{PROJECT_YEAR}</p>
      </footer>
    </aside>
  )
}
