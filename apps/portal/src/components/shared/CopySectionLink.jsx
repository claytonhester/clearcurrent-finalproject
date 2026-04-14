import { useCallback, useState } from 'react'
import { Link2 } from 'lucide-react'
import { useLocation } from 'react-router-dom'

/**
 * Copies a deep link to the current path with hash for `anchorId`.
 */
export function CopySectionLink({ anchorId }) {
  const { pathname } = useLocation()
  const [done, setDone] = useState(false)

  const handleClick = useCallback(async () => {
    const url = `${window.location.origin}${pathname}#${anchorId}`
    try {
      await navigator.clipboard.writeText(url)
      setDone(true)
      window.setTimeout(() => setDone(false), 2000)
    } catch {
      setDone(false)
    }
  }, [anchorId, pathname])

  return (
    <button
      type="button"
      onClick={handleClick}
      className="inline-flex shrink-0 items-center gap-1 rounded-md border border-cc-mid-gray/25 bg-cc-white px-2 py-1 text-xs font-semibold text-cc-navy shadow-sm hover:bg-cc-light-gray print:hidden"
      aria-label={done ? 'Link copied' : `Copy link to this section (${anchorId})`}
    >
      <Link2 className="h-3.5 w-3.5 opacity-80" aria-hidden />
      {done ? 'Copied' : 'Copy link'}
    </button>
  )
}
