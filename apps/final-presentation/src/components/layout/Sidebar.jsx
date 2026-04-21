import { NavLink } from 'react-router-dom'
import {
  APPENDIX_ITEMS,
  DELIVERABLES,
  PORTAL_SHELL,
  RESEARCH_ASSISTANT,
} from '../../navConfig.js'

export function Sidebar() {
  return (
    <aside className="sticky top-0 z-20 hidden max-h-svh flex-shrink-0 basis-72 overflow-y-auto border-r border-cc-border bg-white lg:block print:hidden">
      <div className="px-5 pt-6 pb-3">
        <NavLink to="/" className="block">
          <div className="text-[10px] font-bold uppercase tracking-widest text-cc-yellow">
            {PORTAL_SHELL.brandEyebrow}
          </div>
          <div className="mt-1 text-sm font-semibold leading-tight text-cc-navy">
            {PORTAL_SHELL.brandSubtitle}
          </div>
        </NavLink>
      </div>
      <nav className="px-3 pb-8">
        <div className="mb-4">
          <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cc-mid-gray">
            Deliverables
          </div>
          <ul className="mt-1 space-y-0.5">
            {DELIVERABLES.map((d) => (
              <li key={d.id}>
                <DeliverableLink item={d} />
              </li>
            ))}
            <li key={RESEARCH_ASSISTANT.id}>
              <DeliverableLink item={RESEARCH_ASSISTANT} />
            </li>
          </ul>
        </div>
        <AppendixSection items={APPENDIX_ITEMS} />
      </nav>
    </aside>
  )
}

function DeliverableLink({ item }) {
  return (
    <NavLink
      to={item.path}
      end={item.path === '/'}
      className={({ isActive }) =>
        `flex items-start gap-2 rounded px-2 py-1.5 text-[13px] ${
          isActive ? 'bg-cc-navy text-white' : 'text-cc-dark-text hover:bg-cc-light-gray'
        }`
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`mt-[2px] inline-flex h-5 min-w-[2rem] flex-shrink-0 items-center justify-center rounded text-[10px] font-bold ${
              isActive ? 'bg-cc-yellow text-cc-navy' : 'bg-cc-navy/90 text-white'
            }`}
          >
            {item.shortLabel}
          </span>
          <span className="min-w-0 flex-1 leading-snug">
            <span className="block font-semibold">{item.label}</span>
            {item.artifact ? (
              <span
                className={`block text-[11px] leading-snug ${
                  isActive ? 'text-white/70' : 'text-cc-mid-gray'
                }`}
              >
                {item.artifact}
              </span>
            ) : null}
          </span>
        </>
      )}
    </NavLink>
  )
}

function AppendixSection({ items }) {
  return (
    <div className="mb-4 mt-6 border-t border-cc-border/60 pt-4">
      <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cc-mid-gray">
        {PORTAL_SHELL.appendixNavLabel}
      </div>
      <ul className="mt-1 space-y-0.5">
        {items.map((item) => (
          <li key={item.id}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-2 rounded px-2 py-1.5 text-[12.5px] font-medium ${
                  isActive
                    ? 'bg-cc-navy text-white'
                    : 'text-cc-mid-gray hover:bg-cc-light-gray hover:text-cc-navy'
                }`
              }
            >
              <span className="min-w-0 flex-1 truncate">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
