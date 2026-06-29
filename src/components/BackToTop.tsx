import { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed z-50 flex items-center justify-center rounded-full border border-[#0F172A]/20 bg-[#0F172A] p-3 text-white shadow-lg transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2] hover:bg-[#0056D2] dark:border-white/20 dark:bg-white/10 bottom-20 right-5 lg:bottom-8 lg:right-8 ${
        visible ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      <ArrowUp size={20} />
    </button>
  )
}
