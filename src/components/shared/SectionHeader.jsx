export function SectionHeader({ children }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-bold tracking-tight text-cc-navy">{children}</h2>
      <div className="mt-2 h-1 w-12 rounded-full bg-cc-yellow" aria-hidden />
    </div>
  )
}
