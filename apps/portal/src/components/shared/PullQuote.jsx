export function PullQuote({ text, source, title }) {
  return (
    <figure className="relative overflow-hidden rounded-xl bg-cc-navy shadow-sm">
      <span
        className="pointer-events-none absolute -top-3 left-5 select-none text-[96px] font-bold leading-none text-cc-yellow/20"
        aria-hidden
      >
        &ldquo;
      </span>
      <div className="relative px-8 py-8">
        <blockquote className="text-lg font-medium italic leading-relaxed text-white/90">
          &ldquo;{text}&rdquo;
        </blockquote>
        <figcaption className="mt-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/15" aria-hidden />
          <div className="text-right">
            <p className="text-sm font-semibold text-cc-yellow">{source}</p>
            {title ? (
              <p className="mt-0.5 text-xs font-normal text-white/55">{title}</p>
            ) : null}
          </div>
        </figcaption>
      </div>
    </figure>
  )
}
