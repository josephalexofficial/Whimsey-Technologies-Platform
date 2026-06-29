interface TechBadgeProps {
  name: string
}

export default function TechBadge({ name }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center rounded-md border border-[#0F172A]/10 bg-[#0F172A]/[0.03] px-2.5 py-1 text-xs font-medium text-[#0F172A]/70 transition-all duration-300 ease-out dark:border-white/10 dark:bg-white/[0.03] dark:text-white/70">
      {name}
    </span>
  )
}
