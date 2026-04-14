export function ChartCard({ title, legend, children }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-sm">
      <div className="bg-cc-navy px-5 py-3.5">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <h3 className="text-sm font-semibold text-white">{title}</h3>
          {legend ? <p className="text-xs text-white/50">{legend}</p> : null}
        </div>
      </div>
      <div className="bg-cc-white p-5">
        <div className="min-h-[220px] w-full">{children}</div>
      </div>
    </div>
  )
}
