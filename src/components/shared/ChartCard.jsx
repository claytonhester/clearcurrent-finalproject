export function ChartCard({ title, legend, children }) {
  return (
    <div className="rounded-xl bg-cc-white p-5 shadow-sm">
      <div className="mb-4 flex flex-wrap items-start justify-between gap-3">
        <h3 className="text-sm font-semibold text-cc-navy">{title}</h3>
        {legend ? (
          <div className="text-xs text-cc-mid-gray">{legend}</div>
        ) : null}
      </div>
      <div className="min-h-[220px] w-full">{children}</div>
    </div>
  )
}
