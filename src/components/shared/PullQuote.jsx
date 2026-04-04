export function PullQuote({ text, source, title }) {
  return (
    <figure className="rounded-xl border border-cc-mid-gray/20 bg-cc-white p-6 shadow-sm">
      <blockquote className="border-l-4 border-cc-yellow pl-5 text-lg italic leading-relaxed text-cc-dark-text">
        “{text}”
      </blockquote>
      <figcaption className="mt-4 pl-5 text-sm font-semibold text-cc-navy">
        {source}
        {title ? (
          <span className="mt-0.5 block text-xs font-normal text-cc-mid-gray">
            {title}
          </span>
        ) : null}
      </figcaption>
    </figure>
  )
}
