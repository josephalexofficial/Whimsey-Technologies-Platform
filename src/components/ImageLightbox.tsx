import { useEffect } from 'react'
import { X, ZoomIn } from 'lucide-react'

interface ImageLightboxProps {
  src: string
  alt: string
  isOpen: boolean
  onClose: () => void
}

export function ImageLightbox({ src, alt, isOpen, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F172A]/90 p-4 backdrop-blur-sm md:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`View ${alt}`}
    >
      <button
        onClick={onClose}
        className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-all duration-300 hover:bg-[#0056D2] md:right-8 md:top-8"
        aria-label="Close preview"
      >
        <X size={20} />
      </button>
      <div
        className="relative max-h-[90vh] w-full max-w-6xl overflow-hidden rounded-2xl border border-white/10 bg-[#0B0F19] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={src}
          alt={alt}
          className="max-h-[90vh] w-full object-contain object-top"
        />
        <div className="border-t border-white/10 bg-[#0B0F19]/95 px-5 py-3">
          <p className="text-sm font-medium text-white">{alt}</p>
        </div>
      </div>
    </div>
  )
}

interface ProjectImageProps {
  src: string
  alt: string
  className?: string
  onOpen?: () => void
}

export function ProjectImage({ src, alt, className = '', onOpen }: ProjectImageProps) {
  return (
    <div className={`group/img relative overflow-hidden bg-[#0F172A]/5 dark:bg-white/5 ${className}`}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        className="h-full w-full object-cover object-top transition-transform duration-500 ease-out group-hover/img:scale-[1.02]"
      />
      {onOpen && (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            onOpen()
          }}
          className="absolute inset-0 flex items-center justify-center bg-[#0F172A]/0 transition-all duration-300 group-hover/img:bg-[#0F172A]/40"
          aria-label={`Expand ${alt} preview`}
        >
          <span className="flex translate-y-2 items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-[#0F172A] opacity-0 shadow-lg transition-all duration-300 group-hover/img:translate-y-0 group-hover/img:opacity-100">
            <ZoomIn size={16} className="text-[#0056D2]" />
            View Full Preview
          </span>
        </button>
      )}
    </div>
  )
}
