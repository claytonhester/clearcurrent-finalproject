export function SectionHeader({ number, title, subtitle, id }) {
  return (
    <div
      className="flex items-end justify-between gap-4 border-b border-cc-border/60 pb-1.5"
      id={id}
    >
      <div>
        <h2 className="text-lg font-bold text-cc-navy md:text-xl">
          {number != null ? (
            <span className="mr-2 text-cc-yellow">{String(number).padStart(2, '0')}</span>
          ) : null}
          {title}
        </h2>
        {subtitle ? (
          <div className="mt-0.5 text-[12px] text-cc-mid-gray">{subtitle}</div>
        ) : null}
      </div>
    </div>
  )
}
