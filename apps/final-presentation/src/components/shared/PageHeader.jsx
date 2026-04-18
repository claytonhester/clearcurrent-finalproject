export function PageHeader({ eyebrow, title, lede, actions }) {
  return (
    <header className="border-b border-cc-border pb-5">
      <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0 flex-1">
          {eyebrow ? (
            <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-cc-yellow">
              {eyebrow}
            </div>
          ) : null}
          <h1 className="mt-1 text-3xl font-extrabold leading-tight tracking-tight text-cc-navy md:text-4xl">
            {title}
          </h1>
          {lede ? (
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-cc-mid-gray">
              {lede}
            </p>
          ) : null}
        </div>
        {actions ? (
          <div className="flex flex-shrink-0 flex-wrap items-start gap-2 print:hidden">
            {actions}
          </div>
        ) : null}
      </div>
    </header>
  )
}
