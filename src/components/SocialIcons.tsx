import {
  Linkedin,
  Twitter,
  Youtube,
  Facebook,
  Instagram,
  Mail,
  Phone,
} from 'lucide-react'
import { SOCIAL_LINKS } from '../data/social'

function TikTokIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  )
}

const SOCIAL_ICONS = [
  { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: 'LinkedIn' },
  { href: SOCIAL_LINKS.twitter, icon: Twitter, label: 'X (Twitter)' },
  { href: SOCIAL_LINKS.tiktok, icon: TikTokIcon, label: 'TikTok' },
  { href: SOCIAL_LINKS.youtube, icon: Youtube, label: 'YouTube' },
  { href: SOCIAL_LINKS.facebook, icon: Facebook, label: 'Facebook' },
  { href: SOCIAL_LINKS.instagram, icon: Instagram, label: 'Instagram' },
]

interface SocialIconsProps {
  size?: number
  className?: string
}

export default function SocialIcons({ size = 18, className = '' }: SocialIconsProps) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      {SOCIAL_ICONS.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="text-[#0F172A]/60 transition-all duration-300 ease-out hover:scale-105 hover:text-[#0056D2] dark:text-white/60 dark:hover:text-[#0056D2]"
        >
          <Icon size={size} />
        </a>
      ))}
    </div>
  )
}

export function ContactSocialLinks() {
  const links = [
    { href: SOCIAL_LINKS.email, icon: Mail, label: 'Email' },
    { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: 'LinkedIn' },
    { href: SOCIAL_LINKS.twitter, icon: Twitter, label: 'X (Twitter)' },
    { href: SOCIAL_LINKS.tiktok, icon: TikTokIcon, label: 'TikTok' },
    { href: SOCIAL_LINKS.youtube, icon: Youtube, label: 'YouTube' },
    { href: SOCIAL_LINKS.facebook, icon: Facebook, label: 'Facebook' },
    { href: SOCIAL_LINKS.instagram, icon: Instagram, label: 'Instagram' },
    { href: SOCIAL_LINKS.phone, icon: Phone, label: 'Phone' },
  ]

  return (
    <div className="flex flex-wrap gap-3">
      {links.map(({ href, icon: Icon, label }) => (
        <a
          key={label}
          href={href}
          target={href.startsWith('mailto') || href.startsWith('tel') ? undefined : '_blank'}
          rel="noopener noreferrer"
          aria-label={label}
          className="text-[#0F172A]/60 transition-all duration-300 ease-out hover:scale-105 hover:text-[#0056D2] dark:text-white/60 dark:hover:text-[#0056D2]"
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  )
}
