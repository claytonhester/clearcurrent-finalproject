export function StatCard({ label, value, status }) {
  return (
    <div className="relative overflow-hidden rounded-xl bg-cc-white p-5 shadow-sm">
      <div className="absolute inset-x-0 top-0 h-1 bg-cc-yellow" aria-hidden />
      <p className="text-xs font-medium uppercase tracking-wide text-cc-mid-gray">
        {label}
      </p>
      <p className="mt-2 text-3xl font-bold tracking-tight text-cc-navy">{value}</p>
      {status === 'placeholder' && import.meta.env.DEV ? (
        <p className="mt-2 text-[10px] font-medium uppercase text-amber-600">Placeholder</p>
      ) : null}
    </div>
  )
}
