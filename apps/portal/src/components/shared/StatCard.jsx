export function StatCard({ label, value, status }) {
  return (
    <div className="overflow-hidden rounded-xl shadow-sm">
      <div className="bg-cc-navy px-5 pb-4 pt-5">
        <p className="text-[2.75rem] font-bold leading-none tracking-tight text-cc-yellow">
          {value}
        </p>
        {status === 'placeholder' && import.meta.env.DEV ? (
          <p className="mt-1.5 text-[10px] font-semibold uppercase tracking-wide text-amber-300">
            Placeholder
          </p>
        ) : null}
      </div>
      <div className="border-t border-cc-mid-gray/15 bg-cc-white px-5 py-3">
        <p className="text-xs font-semibold uppercase tracking-widest text-cc-mid-gray">
          {label}
        </p>
      </div>
    </div>
  )
}
