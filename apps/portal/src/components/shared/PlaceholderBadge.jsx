export function PlaceholderBadge({ status }) {
  if (!import.meta.env.DEV || status !== 'placeholder') return null
  return (
    <span className="ml-2 inline-flex rounded bg-amber-100 px-1.5 py-0.5 text-[10px] font-bold uppercase text-amber-800">
      Placeholder
    </span>
  )
}
