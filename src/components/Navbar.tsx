import { Link, useLocation } from 'react-router-dom'
import { Home, Info, Briefcase, FolderOpen, Mail } from 'lucide-react'
import ThemeToggle from './ThemeToggle'
import { scrollToPageTop } from './ScrollToTop'

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/projects', label: 'Projects' },
  { to: '/contact', label: 'Contact' },
]

const MOBILE_TABS = [
  { to: '/', label: 'Home', icon: Home },
  { to: '/about', label: 'About', icon: Info },
  { to: '/services', label: 'Services', icon: Briefcase },
  { to: '/projects', label: 'Projects', icon: FolderOpen },
  { to: '/contact', label: 'Contact', icon: Mail },
]

export default function Navbar() {
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/'
    return location.pathname.startsWith(path)
  }

  const isExactRoute = (path: string) => location.pathname === path

  const handleNavClick = (to: string) => {
    if (isExactRoute(to)) {
      scrollToPageTop(true)
    }
  }

  const handleBrandClick = () => {
    if (isExactRoute('/')) {
      scrollToPageTop(true)
    }
  }

  return (
    <>
      {/* Desktop & Mobile Top Header */}
      <header className="fixed top-0 left-0 right-0 z-40 border-b border-[#0F172A]/10 bg-white/95 backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-[#0B0F19]/95">
        <div className="container-fluid flex h-16 items-center justify-between md:h-20">
          <Link
            to="/"
            onClick={handleBrandClick}
            className="text-lg font-bold text-[#0056D2] transition-colors duration-300 md:text-xl"
          >
            Whimsey Technologies
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => handleNavClick(link.to)}
                className={`font-medium transition-all duration-300 ease-out hover:text-[#0056D2] ${
                  isActive(link.to) ? 'text-[#0056D2]' : 'text-[#0F172A] dark:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Theme Toggle */}
          <div className="md:hidden">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Mobile Bottom Tab Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#0F172A]/10 bg-white/95 backdrop-blur-sm transition-colors duration-300 dark:border-white/10 dark:bg-[#0B0F19]/95 md:hidden">
        <div className="flex items-center justify-around py-2">
          {MOBILE_TABS.map((tab) => {
            const Icon = tab.icon
            const active = isActive(tab.to)
            return (
              <Link
                key={tab.to}
                to={tab.to}
                onClick={() => handleNavClick(tab.to)}
                className={`flex flex-col items-center gap-0.5 px-2 py-1 transition-all duration-300 ease-out ${
                  active ? 'text-[#0056D2]' : 'text-[#0F172A]/40 dark:text-white/40'
                }`}
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium">{tab.label}</span>
              </Link>
            )
          })}
        </div>
      </nav>
    </>
  )
}
