import {
  useCallback,
  useEffect,
  useId,
  useRef,
  useState,
} from 'react'
import { Lock } from 'lucide-react'

const STORAGE_KEY = 'clearcurrent_portal_access'

/** Build-time only. Set `VITE_PORTAL_ACCESS_CODE` in `.env` / hosting env; never commit real values. */
function resolveAccessCode() {
  const raw = (import.meta.env.VITE_PORTAL_ACCESS_CODE || '').trim()
  if (raw) return raw.toUpperCase()
  if (import.meta.env.DEV) return 'SAVINGS'
  return ''
}

const EXPECTED = resolveAccessCode()
const isGateConfigured = EXPECTED.length > 0

function readUnlocked() {
  try {
    return localStorage.getItem(STORAGE_KEY) === '1'
  } catch {
    return false
  }
}

export default function AccessGate({ children }) {
  const [unlocked, setUnlocked] = useState(() =>
    typeof window !== 'undefined' ? readUnlocked() : false,
  )
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const inputId = useId()
  const panelRef = useRef(null)

  useEffect(() => {
    if (unlocked || !isGateConfigured) {
      document.body.style.overflow = ''
    } else {
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [unlocked])

  useEffect(() => {
    if (unlocked || !isGateConfigured) return
    const root = panelRef.current
    if (!root) return
    const focusable = () =>
      Array.from(
        root.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        ),
      ).filter((el) => !el.hasAttribute('disabled'))
    const onKeyDown = (e) => {
      if (e.key !== 'Tab') return
      const list = focusable()
      if (list.length === 0) return
      const first = list[0]
      const last = list[list.length - 1]
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else if (document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }
    root.addEventListener('keydown', onKeyDown)
    return () => root.removeEventListener('keydown', onKeyDown)
  }, [unlocked, isGateConfigured])

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault()
      if (value.trim().toUpperCase() === EXPECTED) {
        try {
          localStorage.setItem(STORAGE_KEY, '1')
        } catch {
          // ignore
        }
        setError(false)
        setUnlocked(true)
        setValue('')
      } else {
        setError(true)
      }
    },
    [value],
  )

  if (!isGateConfigured) {
    return (
      <div className="fixed inset-0 z-[200] flex min-h-dvh items-center justify-center overflow-auto bg-cc-navy px-6 py-12">
        <div className="w-full max-w-[440px] rounded-2xl border border-white/10 bg-cc-navy-light/80 p-8 text-center backdrop-blur-xl">
          <h1 className="text-lg font-semibold text-white">Preview not configured</h1>
          <p className="mt-2 text-[15px] leading-relaxed text-white/60">
            Set the build-time variable{' '}
            <code className="rounded bg-white/10 px-1.5 py-0.5 text-sm text-white/90">
              VITE_PORTAL_ACCESS_CODE
            </code>{' '}
            in your deployment environment, then rebuild.
          </p>
        </div>
      </div>
    )
  }

  if (unlocked) {
    return children
  }

  return (
    <div
      className="fixed inset-0 z-[200] flex min-h-dvh items-center justify-center overflow-auto bg-cc-navy px-6 py-12"
      role="dialog"
      aria-modal="true"
      aria-labelledby={`${inputId}-title`}
    >
      <div
        ref={panelRef}
        className="w-full max-w-[400px] rounded-2xl border border-white/10 bg-cc-navy-light/80 p-8 shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)] backdrop-blur-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex size-12 items-center justify-center rounded-xl bg-white/5 ring-1 ring-white/10">
          <Lock className="size-5 text-cc-yellow" strokeWidth={1.75} />
        </div>
        <h1
          id={`${inputId}-title`}
          className="text-2xl font-bold tracking-tight text-white"
        >
          Access code
        </h1>
        <p className="mt-2 text-[15px] leading-relaxed text-white/60">
          Enter the access code for this link. (Shared-link gate only — not a
          security boundary.)
        </p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label
              htmlFor={inputId}
              className="mb-1.5 block text-sm font-medium text-white/80"
            >
              Code
            </label>
            <input
              id={inputId}
              name="access"
              type="password"
              value={value}
              onChange={(e) => {
                setValue(e.target.value)
                if (error) setError(false)
              }}
              autoComplete="off"
              autoFocus
              className="w-full rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-base text-white placeholder-white/30 outline-none transition-[box-shadow,background-color] focus:border-cc-yellow/50 focus:ring-2 focus:ring-cc-yellow/25"
              placeholder="•••••••"
              aria-invalid={error}
              aria-describedby={error ? `${inputId}-err` : undefined}
            />
            {error && (
              <p
                id={`${inputId}-err`}
                className="mt-2 text-sm text-red-300/90"
                role="status"
              >
                Incorrect code. Try again.
              </p>
            )}
          </div>
          <button
            type="submit"
            className="w-full rounded-xl bg-cc-yellow py-3.5 text-[15px] font-semibold text-cc-navy shadow-[0_1px_0_rgba(0,0,0,0.06),0_6px_20px_-4px_rgba(0,0,0,0.3)] transition-[transform,box-shadow] hover:opacity-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cc-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-cc-navy-light active:translate-y-px"
          >
            Enter portal
          </button>
        </form>
      </div>
    </div>
  )
}
