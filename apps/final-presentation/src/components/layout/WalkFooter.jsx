import { Link, useLocation } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { getWalkNavNeighbors } from '../../navConfig.js'

export function WalkFooter() {
  const { pathname } = useLocation()
  const { prev, next, current } = getWalkNavNeighbors(pathname)
  if (!current) return null

  return (
    <nav
      aria-label="Deliverable navigation"
      className="mt-10 flex flex-col gap-2 border-t border-cc-border pt-6 sm:flex-row sm:items-stretch sm:justify-between print:hidden"
    >
      {prev ? (
        <Link
          to={prev.path}
          className="group flex flex-1 flex-col rounded-md border border-cc-border bg-white px-4 py-3 hover:border-cc-navy/40"
        >
          <span className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-wider text-cc-mid-gray">
            <ArrowLeft className="h-3 w-3" />
            {prev.shortLabel} · Previous
          </span>
          <span className="mt-1 text-sm font-semibold text-cc-navy group-hover:underline">
            {prev.label}
          </span>
        </Link>
      ) : (
        <span className="flex-1" />
      )}
      {next ? (
        <Link
          to={next.path}
          className="group flex flex-1 flex-col rounded-md border border-cc-navy bg-cc-navy px-4 py-3 text-white hover:bg-cc-navy-light sm:text-right"
        >
          <span className="flex items-center justify-end gap-2 text-[10px] font-bold uppercase tracking-wider text-cc-yellow">
            {next.shortLabel} · Next
            <ArrowRight className="h-3 w-3" />
          </span>
          <span className="mt-1 text-sm font-semibold group-hover:underline">
            {next.label}
          </span>
        </Link>
      ) : (
        <span className="flex-1" />
      )}
    </nav>
  )
}
