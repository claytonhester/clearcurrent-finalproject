import { Zap } from 'lucide-react'

export function DecisionStrip({ label = 'So what', children }) {
  return (
    <div className="decision-strip flex items-start gap-3 rounded-sm">
      <Zap className="mt-0.5 h-4 w-4 flex-shrink-0" aria-hidden="true" />
      <div>
        <div className="text-[10px] font-bold uppercase tracking-widest text-cc-navy/70">
          {label}
        </div>
        <div className="mt-0.5 text-[15px] leading-snug text-cc-navy">{children}</div>
      </div>
    </div>
  )
}
