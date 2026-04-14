/**
 * Consistent page-level intro bar for research/data pages.
 * Accepts a `label` (section category) and `children` (paragraph text).
 */
export function PageIntro({ label, children }) {
  return (
    <div className="rounded-xl border-l-[3px] border-cc-yellow bg-cc-white px-6 py-5 shadow-sm">
      {label ? (
        <p className="mb-2 text-xs font-bold uppercase tracking-widest text-cc-yellow">
          {label}
        </p>
      ) : null}
      <p className="text-base leading-relaxed text-cc-dark-text">{children}</p>
    </div>
  )
}
