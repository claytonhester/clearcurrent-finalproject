import { NavLink } from 'react-router-dom'
import { X } from 'lucide-react'
import {
  APPENDIX_ITEMS,
  DELIVERABLES,
  PORTAL_SHELL,
  RESEARCH_ASSISTANT,
} from '../../navConfig.js'

export function MobileNav({ open, onClose }) {
  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-40 flex lg:hidden print:hidden"
      role="dialog"
      aria-modal="true"
    >
      <button
        type="button"
        className="flex-1 bg-cc-navy/40"
        onClick={onClose}
        aria-label="Close"
      />
      <aside className="flex w-[320px] max-w-[85vw] flex-col overflow-y-auto bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-cc-border px-4 py-3">
          <span className="text-sm font-bold text-cc-navy">Navigation</span>
          <button
            type="button"
            onClick={onClose}
            className="rounded-full p-1 text-cc-mid-gray hover:bg-cc-light-gray"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <nav className="px-3 pb-8 pt-3">
          <div className="mb-4">
            <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cc-mid-gray">
              Deliverables
            </div>
            <ul className="space-y-0.5">
              {[...DELIVERABLES, RESEARCH_ASSISTANT].map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    end={item.path === '/'}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-start gap-2 rounded px-2 py-1.5 text-[13px] ${
                        isActive
                          ? 'bg-cc-navy text-white'
                          : 'text-cc-dark-text hover:bg-cc-light-gray'
                      }`
                    }
                  >
                    {({ isActive }) => (
                      <>
                        <span
                          className={`mt-[2px] inline-flex h-5 min-w-[2rem] flex-shrink-0 items-center justify-center rounded text-[10px] font-bold ${
                            isActive
                              ? 'bg-cc-yellow text-cc-navy'
                              : 'bg-cc-navy/90 text-white'
                          }`}
                        >
                          {item.shortLabel}
                        </span>
                        <span className="min-w-0 flex-1 leading-snug">
                          <span className="block font-semibold">{item.label}</span>
                          {item.artifact ? (
                            <span
                              className={`block text-[11px] ${
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
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-4 border-t border-cc-border/60 pt-4">
            <div className="px-2 py-1.5 text-[10px] font-bold uppercase tracking-widest text-cc-mid-gray">
              {PORTAL_SHELL.appendixNavLabel}
            </div>
            <ul className="space-y-0.5">
              {APPENDIX_ITEMS.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    onClick={onClose}
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded px-2 py-1.5 text-[12.5px] font-medium ${
                        isActive
                          ? 'bg-cc-navy text-white'
                          : 'text-cc-mid-gray hover:bg-cc-light-gray hover:text-cc-navy'
                      }`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </nav>
      </aside>
    </div>
  )
}
