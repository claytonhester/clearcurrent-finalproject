import { useEffect } from 'react'

/**
 * Optional privacy-friendly analytics (Plausible) — enable with `VITE_PLAUSIBLE_DOMAIN`
 * in `.env` / Vercel env (hostname only, e.g. `app.yoursite.com`).
 * CSP in vercel.json allows `https://plausible.io` for script and connect.
 */
export function Analytics() {
  useEffect(() => {
    const domain = import.meta.env.VITE_PLAUSIBLE_DOMAIN
    if (!domain) return
    const s = document.createElement('script')
    s.defer = true
    s.dataset.domain = domain
    s.src = 'https://plausible.io/js/script.js'
    document.head.appendChild(s)
  }, [])

  return null
}
