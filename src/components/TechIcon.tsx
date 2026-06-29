interface TechIconProps {
  name: string
  size?: number
  className?: string
}

const ICONS: Record<string, (size: number) => JSX.Element> = {
  React: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="#61DAFB" strokeWidth="1.2" transform="rotate(120 12 12)" />
    </svg>
  ),
  'Node.js': (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#339933" d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.2l7.5 3.75v7.5L12 19.3l-7.5-3.75v-7.5L12 4.2z" />
      <path fill="#339933" d="M12 8.5a3.5 3.5 0 100 7 3.5 3.5 0 000-7z" />
    </svg>
  ),
  'Tailwind CSS': (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#06B6D4"
        d="M12 6c-2.8 0-4.5 1.4-5 4.2 1-1.4 2.1-1.9 3.4-1.6.74.17 1.27.67 1.86 1.22.96.9 2.07 1.95 4.5 1.95 2.8 0 4.5-1.4 5-4.2-1 1.4-2.1 1.9-3.4 1.6-.74-.17-1.27-.67-1.86-1.22C15.54 6.8 14.43 6 12 6zM7 12c-2.8 0-4.5 1.4-5 4.2 1-1.4 2.1-1.9 3.4-1.6.74.17 1.27.67 1.86 1.22.96.9 2.07 1.95 4.5 1.95 2.8 0 4.5-1.4 5-4.2-1 1.4-2.1 1.9-3.4 1.6-.74-.17-1.27-.67-1.86-1.22C10.54 12.8 9.43 12 7 12z"
      />
    </svg>
  ),
  PostgreSQL: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4169E1"
        d="M12 2C8.5 2 6 4.2 6 7.5c0 2.2 1.2 4 3 5.2V20c0 1.1.9 2 2 2h2c1.1 0 2-.9 2-2v-7.3c1.8-1.2 3-3 3-5.2C18 4.2 15.5 2 12 2zm0 2c2.2 0 3.5 1.3 3.5 3.5S14.2 11 12 11 8.5 9.7 8.5 7.5 9.8 4 12 4z"
      />
    </svg>
  ),
  JWT: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="6" width="18" height="12" rx="2" fill="none" stroke="#D63AFF" strokeWidth="1.5" />
      <circle cx="8" cy="12" r="2" fill="#D63AFF" />
      <path d="M12 10h6M12 14h4" stroke="#D63AFF" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  ),
  Laravel: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#FF2D20" d="M3 4h5l2 4 2-4h5v16h-4v-8l-2 4-2-4v8H3V4z" />
    </svg>
  ),
  MySQL: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4479A1"
        d="M12 3C7 3 3 4.5 3 7v10c0 2.5 4 4 9 4s9-1.5 9-4V7c0-2.5-4-4-9-4zm0 2c4.5 0 7 .8 7 2s-2.5 2-7 2-7-.8-7-2 2.5-2 7-2zm-7 5.5c1.8 1 4.5 1.5 7 1.5s5.2-.5 7-1.5V12c0 1.2-2.5 2-7 2s-7-.8-7-2v-1.5zm0 4.5c1.8 1 4.5 1.5 7 1.5s5.2-.5 7-1.5V16c0 1.2-2.5 2-7 2s-7-.8-7-2v-1z"
      />
    </svg>
  ),
  PHP: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <ellipse cx="12" cy="12" rx="10" ry="6" fill="#777BB4" />
      <text x="12" y="14.5" textAnchor="middle" fill="white" fontSize="7" fontWeight="bold" fontFamily="sans-serif">
        PHP
      </text>
    </svg>
  ),
  'Next.js': (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill="#000" className="dark:fill-white" />
      <path fill="#fff" className="dark:fill-[#0B0F19]" d="M8 7h2.5l3.5 9 3.5-9H20l-5.5 13h-2L8 7z" />
    </svg>
  ),
  Stripe: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <rect width="24" height="24" rx="4" fill="#635BFF" />
      <path fill="#fff" d="M6 10.5c0-.8.6-1.2 1.6-1.2.9 0 1.8.3 2.5.7V8.2c-.8-.3-1.7-.5-2.7-.5-2.2 0-3.7 1.2-3.7 3.3 0 3.2 4.4 2.7 4.4 4.1 0 .9-.8 1.2-1.9 1.2-1.1 0-2.2-.4-3.1-1v2.4c1 .4 2 .6 3.1.6 2.3 0 3.9-1.1 3.9-3.3 0-3.4-4.5-2.8-4.5-4.1z" />
    </svg>
  ),
  'Framer Motion': (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#0055FF" d="M4 4h7v7H4V4zm9 0h7v7h-7V4zM4 13h7v7H4v-7zm9 4.5L20 20h-7v-2.5z" />
    </svg>
  ),
  Vite: (size) => (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true">
      <path fill="#646CFF" d="M12 2l9 4v8l-9 8-9-8V6l9-4z" />
      <path fill="#FFD62E" d="M12 6.5l5.5 2.4v4.2L12 15.5 6.5 13V8.9L12 6.5z" />
    </svg>
  ),
}

export default function TechIcon({ name, size = 22, className = '' }: TechIconProps) {
  const Icon = ICONS[name]
  if (!Icon) {
    return (
      <span
        className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#0F172A]/10 bg-[#0F172A]/5 text-[10px] font-bold text-[#475569] dark:border-white/10 dark:bg-white/5 dark:text-[#94A3B8] ${className}`}
        title={name}
      >
        {name.slice(0, 2).toUpperCase()}
      </span>
    )
  }

  return (
    <span
      className={`inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#0F172A]/10 bg-white transition-all duration-300 ease-out hover:scale-105 hover:border-[#0056D2]/30 hover:shadow-sm dark:border-white/10 dark:bg-[#0B0F19] ${className}`}
      title={name}
    >
      {Icon(size)}
    </span>
  )
}

export function TechStackRow({ stack }: { stack: string[] }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {stack.map((tech) => (
        <TechIcon key={tech} name={tech} />
      ))}
    </div>
  )
}
