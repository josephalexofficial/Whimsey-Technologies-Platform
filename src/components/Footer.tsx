import { Link } from 'react-router-dom'
import BrandSocialIcons from './BrandSocialIcons'
import { SOCIAL_LINKS } from '../data/social'
import { Mail, Phone } from 'lucide-react'

const FOOTER_SERVICES = [
  { to: '/services/web-engineering', label: 'Full-Stack Web Engineering' },
  { to: '/services/mobile-development', label: 'Mobile Application Development' },
  { to: '/services/enterprise-software', label: 'Custom Enterprise Software' },
]

const FOOTER_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="relative border-t border-[#0F172A]/10 bg-gradient-to-b from-white to-[#F8FAFC] transition-colors duration-300 dark:border-white/10 dark:from-[#0B0F19] dark:to-[#080B14]">
      <div className="container-fluid section-padding !py-16 lg:!py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 xl:grid-cols-12 xl:gap-10">
          {/* Brand */}
          <div className="xl:col-span-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <img
                src="/projects/Whimsey_Logo.png"
                alt="Whimsey Technologies"
                className="h-11 w-11 rounded-xl object-contain"
              />
              <span className="text-lg font-bold text-[#0F172A] dark:text-white">
                Whimsey Technologies
              </span>
            </Link>
            <p className="text-body-muted mt-5 max-w-sm leading-relaxed">
              Light Up Your Vision With Precision-Crafted Tech. We create innovative solutions that
              transform ideas into reality.
            </p>
            <div className="mt-8">
              <BrandSocialIcons variant="footer" />
            </div>
          </div>

          {/* Services */}
          <div className="xl:col-span-2">
            <h4 className="overline mb-5">Services</h4>
            <ul className="space-y-3">
              {FOOTER_SERVICES.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="thread-link text-sm text-[#0F172A]/80 dark:text-white/80"
                  >
                    <span>→</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/services" className="thread-link text-sm font-semibold text-[#0056D2]">
                  <span>→</span>
                  <span>View All Services</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="xl:col-span-2">
            <h4 className="overline mb-5">Quick Links</h4>
            <ul className="space-y-3">
              {FOOTER_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="thread-link text-sm text-[#0F172A]/80 dark:text-white/80"
                  >
                    <span>→</span>
                    <span>{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="xl:col-span-4">
            <h4 className="overline mb-5">Get in Touch</h4>
            <div className="space-y-4">
              <a
                href={SOCIAL_LINKS.email}
                className="flex items-start gap-3 rounded-xl border border-[#0F172A]/10 bg-white p-4 transition-all duration-300 ease-out hover:border-[#0056D2]/30 hover:shadow-sm dark:border-white/10 dark:bg-[#0B0F19]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0056D2]/10 text-[#0056D2]">
                  <Mail size={18} />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-[#475569] dark:text-[#94A3B8]">
                    Email
                  </span>
                  <span className="mt-0.5 block text-sm font-medium text-[#0F172A] dark:text-white">
                    whimseytech@gmail.com
                  </span>
                </span>
              </a>
              <a
                href={SOCIAL_LINKS.phone}
                className="flex items-start gap-3 rounded-xl border border-[#0F172A]/10 bg-white p-4 transition-all duration-300 ease-out hover:border-[#0056D2]/30 hover:shadow-sm dark:border-white/10 dark:bg-[#0B0F19]"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#0056D2]/10 text-[#0056D2]">
                  <Phone size={18} />
                </span>
                <span>
                  <span className="block text-xs font-medium uppercase tracking-wider text-[#475569] dark:text-[#94A3B8]">
                    Phone
                  </span>
                  <span className="mt-0.5 block text-sm font-medium text-[#0F172A] dark:text-white">
                    0769591223
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-[#0F172A]/10 pt-8 text-sm text-[#475569] dark:border-white/10 dark:text-[#94A3B8] md:flex-row">
          <p>© 2026 Whimsey Tech. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a
              href="#"
              className="transition-all duration-300 ease-out hover:text-[#0056D2] hover:underline"
            >
              Privacy Policy
            </a>
            <span className="text-[#0F172A]/20 dark:text-white/20">|</span>
            <a
              href="#"
              className="transition-all duration-300 ease-out hover:text-[#0056D2] hover:underline"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
