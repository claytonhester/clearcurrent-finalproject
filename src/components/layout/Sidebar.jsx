import { NavLink } from 'react-router-dom'
import { NAV_ITEMS, NAV_ICON_MAP } from '../../navConfig'

const PROJECT_YEAR = 2026

export function Sidebar() {
  return (
    <aside
      id="nav"
      className="sticky top-0 flex h-svh w-[260px] shrink-0 flex-col bg-cc-navy text-cc-white"
    >
      <div className="border-b border-white/10 px-5 py-6">
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold tracking-tight">CLEAR CURRENT</span>
          <span
            className="h-2 w-2 shrink-0 rounded-full bg-cc-yellow"
            aria-hidden
          />
        </div>
        <p className="mt-1 text-xs font-medium text-white/70">
          GTM Intelligence Portal
        </p>
      </div>

      <nav className="flex flex-1 flex-col gap-0.5 px-3 py-4" aria-label="Primary">
        {NAV_ITEMS.map((item) => {
          const Icon = NAV_ICON_MAP[item.icon]
          return (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                [
                  'flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors',
                  isActive
                    ? 'border-l-4 border-cc-yellow bg-white/5 pl-[8px] text-cc-yellow'
                    : 'border-l-4 border-transparent pl-3 text-white/85 hover:bg-white/5 hover:text-white',
                ].join(' ')
              }
            >
              {Icon ? <Icon className="h-5 w-5 shrink-0 opacity-90" /> : null}
              <span>{item.label}</span>
            </NavLink>
          )
        })}
      </nav>

      <footer className="border-t border-white/10 px-5 py-4 text-xs text-white/60">
        <p className="font-medium text-white/80">Texas A&M CDL Consulting Team</p>
        <p className="mt-0.5">{PROJECT_YEAR}</p>
      </footer>
    </aside>
  )
}
