import type { ReactNode } from 'react'

interface ServiceIllustrationProps {
  slug: string
  className?: string
  variant?: 'card' | 'hero'
}

function IllustrationFrame({
  children,
  className = '',
  variant = 'card',
}: {
  children: ReactNode
  className?: string
  variant?: 'card' | 'hero'
}) {
  const height = variant === 'hero' ? 'h-full min-h-[220px]' : 'h-44'
  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#0056D2]/5 via-[#0056D2]/[0.02] to-transparent dark:from-[#0056D2]/15 dark:via-[#0056D2]/5 ${height} ${className}`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,86,210,0.12),transparent_55%)]" />
      <div className="absolute inset-0 flex items-center justify-center p-6">{children}</div>
    </div>
  )
}

function WebEngineeringIll() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full max-w-[200px]" fill="none">
      <rect x="20" y="20" width="160" height="100" rx="8" stroke="#0056D2" strokeWidth="2" fill="white" fillOpacity="0.5" className="dark:fill-[#0B0F19]/50" />
      <rect x="20" y="20" width="160" height="18" rx="8" fill="#0056D2" fillOpacity="0.15" />
      <circle cx="32" cy="29" r="3" fill="#FF5F57" /><circle cx="42" cy="29" r="3" fill="#FFBD2E" /><circle cx="52" cy="29" r="3" fill="#28CA41" />
      <rect x="35" y="50" width="50" height="6" rx="2" fill="#0056D2" fillOpacity="0.4" />
      <rect x="35" y="62" width="80" height="4" rx="1" fill="#0056D2" fillOpacity="0.2" />
      <rect x="35" y="72" width="65" height="4" rx="1" fill="#0056D2" fillOpacity="0.15" />
      <rect x="120" y="48" width="45" height="55" rx="4" stroke="#0056D2" strokeWidth="1.5" fill="#0056D2" fillOpacity="0.08" />
      <rect x="128" y="58" width="28" height="4" rx="1" fill="#0056D2" fillOpacity="0.3" />
      <rect x="128" y="68" width="20" height="4" rx="1" fill="#0056D2" fillOpacity="0.2" />
      <path d="M35 95 L95 95 L115 115 L35 115 Z" fill="#0056D2" fillOpacity="0.12" stroke="#0056D2" strokeWidth="1" />
    </svg>
  )
}

function MobileDevIll() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full max-w-[160px]" fill="none">
      <rect x="65" y="10" width="70" height="120" rx="12" stroke="#0056D2" strokeWidth="2" fill="white" fillOpacity="0.5" className="dark:fill-[#0B0F19]/50" />
      <rect x="90" y="18" width="20" height="4" rx="2" fill="#0056D2" fillOpacity="0.3" />
      <rect x="75" y="35" width="50" height="30" rx="4" fill="#0056D2" fillOpacity="0.15" />
      <rect x="75" y="72" width="50" height="6" rx="2" fill="#0056D2" fillOpacity="0.35" />
      <rect x="75" y="84" width="35" height="4" rx="1" fill="#0056D2" fillOpacity="0.2" />
      <rect x="75" y="94" width="40" height="4" rx="1" fill="#0056D2" fillOpacity="0.15" />
      <circle cx="100" cy="118" r="5" stroke="#0056D2" strokeWidth="1.5" />
      <rect x="30" y="50" width="25" height="40" rx="6" stroke="#0056D2" strokeWidth="1" strokeOpacity="0.4" fill="#0056D2" fillOpacity="0.05" />
      <rect x="145" y="50" width="25" height="40" rx="6" stroke="#0056D2" strokeWidth="1" strokeOpacity="0.4" fill="#0056D2" fillOpacity="0.05" />
    </svg>
  )
}

function EnterpriseIll() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full max-w-[200px]" fill="none">
      <rect x="30" y="70" width="40" height="50" fill="#0056D2" fillOpacity="0.2" stroke="#0056D2" strokeWidth="1.5" />
      <rect x="80" y="45" width="40" height="75" fill="#0056D2" fillOpacity="0.3" stroke="#0056D2" strokeWidth="1.5" />
      <rect x="130" y="60" width="40" height="60" fill="#0056D2" fillOpacity="0.15" stroke="#0056D2" strokeWidth="1.5" />
      <rect x="38" y="55" width="8" height="8" fill="#0056D2" fillOpacity="0.5" /><rect x="52" y="55" width="8" height="8" fill="#0056D2" fillOpacity="0.5" />
      <rect x="88" y="55" width="8" height="8" fill="#0056D2" fillOpacity="0.6" /><rect x="102" y="55" width="8" height="8" fill="#0056D2" fillOpacity="0.6" />
      <rect x="138" y="70" width="8" height="8" fill="#0056D2" fillOpacity="0.4" /><rect x="152" y="70" width="8" height="8" fill="#0056D2" fillOpacity="0.4" />
      <path d="M50 40 L100 20 L150 40" stroke="#0056D2" strokeWidth="1.5" fill="none" />
      <rect x="55" y="25" width="90" height="20" rx="2" fill="#0056D2" fillOpacity="0.1" stroke="#0056D2" strokeWidth="1" />
    </svg>
  )
}

function ApiIntegrationIll() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full max-w-[200px]" fill="none">
      <circle cx="100" cy="70" r="22" fill="#0056D2" fillOpacity="0.15" stroke="#0056D2" strokeWidth="2" />
      <text x="100" y="75" textAnchor="middle" fill="#0056D2" fontSize="11" fontWeight="bold" fontFamily="sans-serif">API</text>
      <circle cx="40" cy="40" r="14" fill="#0056D2" fillOpacity="0.1" stroke="#0056D2" strokeWidth="1.5" />
      <circle cx="160" cy="40" r="14" fill="#0056D2" fillOpacity="0.1" stroke="#0056D2" strokeWidth="1.5" />
      <circle cx="40" cy="100" r="14" fill="#0056D2" fillOpacity="0.1" stroke="#0056D2" strokeWidth="1.5" />
      <circle cx="160" cy="100" r="14" fill="#0056D2" fillOpacity="0.1" stroke="#0056D2" strokeWidth="1.5" />
      <line x1="54" y1="48" x2="80" y2="60" stroke="#0056D2" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="146" y1="48" x2="120" y2="60" stroke="#0056D2" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="54" y1="92" x2="80" y2="80" stroke="#0056D2" strokeWidth="1.5" strokeOpacity="0.5" />
      <line x1="146" y1="92" x2="120" y2="80" stroke="#0056D2" strokeWidth="1.5" strokeOpacity="0.5" />
      <path d="M75 65 L85 70 L75 75" fill="#0056D2" fillOpacity="0.5" />
      <path d="M125 65 L115 70 L125 75" fill="#0056D2" fillOpacity="0.5" />
    </svg>
  )
}

function CloudDevopsIll() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full max-w-[200px]" fill="none">
      <path d="M50 80 Q50 55 75 55 Q85 35 110 45 Q140 40 145 65 Q165 65 165 85 Q165 100 150 100 L55 100 Q40 100 40 85 Q40 80 50 80Z" fill="#0056D2" fillOpacity="0.15" stroke="#0056D2" strokeWidth="2" />
      <rect x="70" y="105" width="60" height="8" rx="2" fill="#0056D2" fillOpacity="0.3" />
      <circle cx="85" cy="75" r="4" fill="#0056D2" fillOpacity="0.5" /><circle cx="100" cy="70" r="4" fill="#0056D2" fillOpacity="0.5" /><circle cx="115" cy="75" r="4" fill="#0056D2" fillOpacity="0.5" />
      <path d="M30 115 L50 105 L70 115 L90 100 L110 110 L130 95 L150 105 L170 100" stroke="#0056D2" strokeWidth="1.5" fill="none" strokeOpacity="0.4" />
      <rect x="155" y="30" width="30" height="20" rx="3" stroke="#0056D2" strokeWidth="1" fill="#0056D2" fillOpacity="0.1" />
      <path d="M160 40 L175 40" stroke="#28CA41" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}

function DatabaseIll() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full max-w-[180px]" fill="none">
      <ellipse cx="70" cy="45" rx="35" ry="12" fill="#0056D2" fillOpacity="0.2" stroke="#0056D2" strokeWidth="1.5" />
      <path d="M35 45 L35 95 Q35 107 70 107 Q105 107 105 95 L105 45" fill="#0056D2" fillOpacity="0.08" stroke="#0056D2" strokeWidth="1.5" />
      <ellipse cx="70" cy="70" rx="35" ry="12" fill="none" stroke="#0056D2" strokeWidth="1" strokeOpacity="0.4" />
      <ellipse cx="70" cy="95" rx="35" ry="12" fill="#0056D2" fillOpacity="0.15" stroke="#0056D2" strokeWidth="1.5" />
      <rect x="125" y="40" width="55" height="70" rx="6" stroke="#0056D2" strokeWidth="1.5" fill="white" fillOpacity="0.3" className="dark:fill-[#0B0F19]/30" />
      <path d="M135 60 L165 60 M135 72 L160 72 M135 84 L155 84" stroke="#0056D2" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" />
      <path d="M168 55 L175 62 L168 69" stroke="#28CA41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
  )
}

function WorkflowIll() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full max-w-[200px]" fill="none">
      <rect x="25" y="55" width="40" height="30" rx="6" fill="#0056D2" fillOpacity="0.15" stroke="#0056D2" strokeWidth="1.5" />
      <rect x="80" y="40" width="40" height="30" rx="6" fill="#0056D2" fillOpacity="0.25" stroke="#0056D2" strokeWidth="1.5" />
      <rect x="135" y="55" width="40" height="30" rx="6" fill="#0056D2" fillOpacity="0.15" stroke="#0056D2" strokeWidth="1.5" />
      <rect x="80" y="90" width="40" height="30" rx="6" fill="#0056D2" fillOpacity="0.2" stroke="#0056D2" strokeWidth="1.5" />
      <path d="M65 70 L78 55 M120 55 L133 70 M100 70 L100 88 M120 105 L133 90 M78 90 L65 105" stroke="#0056D2" strokeWidth="1.5" markerEnd="url(#arrow)" />
      <path d="M65 70 L80 70" stroke="#0056D2" strokeWidth="1.5" /><path d="M120 70 L135 70" stroke="#0056D2" strokeWidth="1.5" />
      <circle cx="100" cy="25" r="12" stroke="#0056D2" strokeWidth="1.5" fill="#0056D2" fillOpacity="0.1" />
      <path d="M96 25 L100 21 L104 25 L100 29 Z" fill="#0056D2" fillOpacity="0.5" />
    </svg>
  )
}

function UiUxIll() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full max-w-[200px]" fill="none">
      <rect x="25" y="25" width="70" height="90" rx="4" stroke="#0056D2" strokeWidth="1.5" strokeDasharray="4 3" fill="none" />
      <rect x="35" y="38" width="30" height="4" rx="1" fill="#0056D2" fillOpacity="0.3" />
      <rect x="35" y="50" width="50" height="25" rx="2" stroke="#0056D2" strokeWidth="1" strokeDasharray="3 2" fill="#0056D2" fillOpacity="0.05" />
      <rect x="35" y="82" width="40" height="4" rx="1" fill="#0056D2" fillOpacity="0.2" />
      <rect x="105" y="25" width="70" height="90" rx="4" stroke="#0056D2" strokeWidth="2" fill="white" fillOpacity="0.4" className="dark:fill-[#0B0F19]/40" />
      <rect x="115" y="38" width="30" height="4" rx="1" fill="#0056D2" fillOpacity="0.5" />
      <rect x="115" y="50" width="50" height="25" rx="2" fill="#0056D2" fillOpacity="0.2" />
      <rect x="115" y="82" width="40" height="4" rx="1" fill="#0056D2" fillOpacity="0.35" />
      <path d="M95 70 L105 70" stroke="#0056D2" strokeWidth="1.5" /><path d="M100 65 L105 70 L100 75" fill="#0056D2" fillOpacity="0.5" />
    </svg>
  )
}

function EcommerceIll() {
  return (
    <svg viewBox="0 0 200 140" className="h-full w-full max-w-[200px]" fill="none">
      <rect x="30" y="30" width="140" height="80" rx="8" stroke="#0056D2" strokeWidth="2" fill="white" fillOpacity="0.4" className="dark:fill-[#0B0F19]/40" />
      <rect x="30" y="30" width="140" height="20" rx="8" fill="#0056D2" fillOpacity="0.15" />
      <rect x="45" y="60" width="45" height="40" rx="4" fill="#0056D2" fillOpacity="0.12" stroke="#0056D2" strokeWidth="1" />
      <rect x="100" y="60" width="45" height="40" rx="4" fill="#0056D2" fillOpacity="0.12" stroke="#0056D2" strokeWidth="1" />
      <circle cx="155" cy="45" r="10" fill="#0056D2" fillOpacity="0.2" stroke="#0056D2" strokeWidth="1.5" />
      <path d="M150 45 L153 48 L162 39" stroke="#0056D2" strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <rect x="50" y="72" width="20" height="3" rx="1" fill="#0056D2" fillOpacity="0.4" />
      <rect x="105" y="72" width="20" height="3" rx="1" fill="#0056D2" fillOpacity="0.4" />
      <path d="M75 115 Q100 125 125 115" stroke="#0056D2" strokeWidth="1.5" fill="none" />
      <circle cx="85" cy="115" r="6" stroke="#0056D2" strokeWidth="1.5" fill="#0056D2" fillOpacity="0.15" />
      <circle cx="115" cy="115" r="6" stroke="#0056D2" strokeWidth="1.5" fill="#0056D2" fillOpacity="0.15" />
    </svg>
  )
}

const ILLUSTRATIONS: Record<string, () => JSX.Element> = {
  'web-engineering': WebEngineeringIll,
  'mobile-development': MobileDevIll,
  'enterprise-software': EnterpriseIll,
  'api-integration': ApiIntegrationIll,
  'cloud-devops': CloudDevopsIll,
  'database-architecture': DatabaseIll,
  'workflow-automation': WorkflowIll,
  'ui-ux-prototyping': UiUxIll,
  'ecommerce-engineering': EcommerceIll,
}

export default function ServiceIllustration({
  slug,
  className = '',
  variant = 'card',
}: ServiceIllustrationProps) {
  const Illustration = ILLUSTRATIONS[slug] ?? WebEngineeringIll

  return (
    <IllustrationFrame className={className} variant={variant}>
      <Illustration />
    </IllustrationFrame>
  )
}

export function getServiceIndex(slug: string): number {
  const slugs = Object.keys(ILLUSTRATIONS)
  return slugs.indexOf(slug) + 1
}
