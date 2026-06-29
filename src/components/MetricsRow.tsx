import { METRICS } from '../data/social'

export default function MetricsRow() {
  return (
    <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
      {METRICS.map((metric) => (
        <div
          key={metric.label}
          className="rounded-xl border border-[#0F172A]/10 bg-[#0F172A]/[0.02] p-6 text-center transition-all duration-300 ease-out dark:border-white/10 dark:bg-white/[0.02]"
        >
          <p className="text-3xl font-bold text-[#0056D2] md:text-4xl">{metric.value}</p>
          <p className="text-caption-muted mt-2">{metric.label}</p>
        </div>
      ))}
    </div>
  )
}
