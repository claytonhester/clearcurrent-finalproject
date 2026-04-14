import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scrolls to `document.getElementById(hash)` after navigation (including lazy-loaded routes).
 */
export function HashScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (!hash || hash.length <= 1) return
    const id = decodeURIComponent(hash.slice(1))
    if (!id) return

    const run = () => {
      const el = document.getElementById(id)
      if (!el) return
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      if (el.getAttribute('tabindex') === '-1') {
        el.focus({ preventScroll: true })
      }
    }

    const t1 = window.setTimeout(() => {
      requestAnimationFrame(run)
    }, 50)
    const t2 = window.setTimeout(run, 300)

    return () => {
      clearTimeout(t1)
      clearTimeout(t2)
    }
  }, [pathname, hash])

  return null
}
