import { METRICS } from '../data/social'

interface MetricsRowProps {
  className?: string
}

export default function MetricsRow({ className = '' }: MetricsRowProps) {
  return (
    <div className={`grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6 ${className}`}>
      {METRICS.map((metric) => (
        <div
          key={metric.label}
          className="group rounded-2xl border border-[#0F172A]/10 bg-white p-5 text-center transition-all duration-300 ease-out hover:border-[#0056D2]/30 hover:shadow-md dark:border-white/10 dark:bg-[#0B0F19] md:p-6"
        >
          <p className="text-3xl font-bold tracking-tight text-[#0056D2] transition-transform duration-300 group-hover:scale-105 md:text-4xl">
            {metric.value}
          </p>
          <p className="text-caption-muted mt-2 leading-snug">{metric.label}</p>
        </div>
      ))}
    </div>
  )
}
