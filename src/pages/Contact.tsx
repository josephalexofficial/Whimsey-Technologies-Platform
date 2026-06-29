import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  ChevronDown,
  Loader2,
  Sparkles,
  Mail,
  Phone,
  Clock,
  CheckCircle2,
  Send,
  MessageSquare,
} from 'lucide-react'
import { FAQ_ITEMS } from '../data/faq'
import BrandSocialIcons from '../components/BrandSocialIcons'
import SectionHeader from '../components/SectionHeader'
import { SOCIAL_LINKS } from '../data/social'
import { isEmailJsConfigured, sendContactEmail } from '../lib/emailjs'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const HERO_TAGS = ['1 Business Day Response', 'Free Scoping Session', 'No Agency Overhead']

export default function Contact() {
  const [searchParams] = useSearchParams()
  const serviceParam = searchParams.get('service') ?? ''
  const serviceLabel = serviceParam ? serviceParam.replace(/-/g, ' ') : ''
  const serviceMessage = serviceLabel ? `I'm interested in your ${serviceLabel} service. ` : ''

  const [formState, setFormState] = useState({ name: '', email: '', message: serviceMessage })
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    setErrorMessage('')

    try {
      await sendContactEmail({
        name: formState.name.trim(),
        email: formState.email.trim(),
        message: formState.message.trim(),
        serviceInterest: serviceLabel || 'General Inquiry',
      })
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(
        err instanceof Error
          ? err.message
          : 'Something went wrong while sending your message. Please try again or email us directly.',
      )
    }
  }

  const isSending = status === 'sending'

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative section-padding pt-28 md:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#0056D2]/10 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#0056D2]/5 blur-3xl" />
        </div>

        <div className="container-fluid relative max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0056D2]/20 bg-[#0056D2]/5 px-4 py-1.5">
            <Sparkles size={14} className="text-[#0056D2]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0056D2]">
              Get In Touch
            </span>
          </div>

          <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Let's Build Something{' '}
            <span className="text-[#0056D2]">Engineered to Scale</span>
          </h1>

          <p className="text-subheadline mt-6 max-w-2xl">
            Tell us about your product, timeline, and system constraints. We review every submission
            manually and respond within one business day.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {HERO_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#0F172A]/10 bg-white px-3 py-1 text-xs font-medium text-[#475569] dark:border-white/10 dark:bg-[#0B0F19] dark:text-[#94A3B8]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Info */}
      <section className="section-padding border-t border-[#0F172A]/5 !pt-12 dark:border-white/5 md:!pt-16">
        <div className="container-fluid">
          <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white shadow-sm dark:border-white/10 dark:bg-[#0B0F19]">
                <div className="border-b border-[#0F172A]/5 bg-gradient-to-r from-[#0056D2]/5 to-transparent px-6 py-5 dark:border-white/5 md:px-8 md:py-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2]">
                      <MessageSquare size={20} />
                    </div>
                    <div>
                      <h2 className="text-lg font-bold">Project Scoping Form</h2>
                      <p className="text-caption-muted mt-0.5">
                        Share your requirements — we'll handle the rest.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  {status === 'success' ? (
                    <div className="animate-[fadeIn_0.5s_ease-out] py-10 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#0056D2]/10 text-[#0056D2]">
                        <CheckCircle2 size={32} />
                      </div>
                      <h3 className="mt-6 text-2xl font-bold text-[#0056D2]">Message Received</h3>
                      <p className="text-body-muted mx-auto mt-4 max-w-md">
                        Thank you for reaching out. Your project details have been successfully
                        transmitted to our engineering team. We are reviewing your system constraints
                        and will respond within one business day to schedule a technical scoping
                        session.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-5">
                      {serviceLabel && (
                        <div className="rounded-lg border border-[#0056D2]/20 bg-[#0056D2]/5 px-4 py-3 text-sm text-[#0056D2]">
                          Inquiring about:{' '}
                          <span className="font-semibold capitalize">{serviceLabel}</span>
                        </div>
                      )}

                      {!isEmailJsConfigured() && (
                        <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-200">
                          Email delivery is not configured. Add your EmailJS credentials to{' '}
                          <code className="text-xs">.env</code> and restart the dev server.
                        </div>
                      )}

                      {status === 'error' && (
                        <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
                          {errorMessage}
                        </div>
                      )}

                      <div>
                        <label htmlFor="name" className="mb-2 block text-sm font-medium">
                          Name
                        </label>
                        <input
                          id="name"
                          type="text"
                          required
                          disabled={isSending}
                          placeholder="Alex Joseph"
                          value={formState.name}
                          onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                          className="w-full rounded-xl border border-[#0F172A]/15 bg-[#F8FAFC] px-4 py-3.5 transition-all duration-300 focus:border-[#0056D2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056D2]/50 dark:border-white/15 dark:bg-[#080B14] dark:focus:bg-[#0B0F19]"
                        />
                      </div>

                      <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          required
                          disabled={isSending}
                          placeholder="josephalexke@gmail.com"
                          value={formState.email}
                          onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                          className="w-full rounded-xl border border-[#0F172A]/15 bg-[#F8FAFC] px-4 py-3.5 transition-all duration-300 focus:border-[#0056D2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056D2]/50 dark:border-white/15 dark:bg-[#080B14] dark:focus:bg-[#0B0F19]"
                        />
                      </div>

                      <div>
                        <label htmlFor="message" className="mb-2 block text-sm font-medium">
                          Message
                        </label>
                        <textarea
                          id="message"
                          required
                          rows={6}
                          disabled={isSending}
                          placeholder="Tell us about your product architecture, required system integrations, timeline parameters, or development constraints..."
                          value={formState.message}
                          onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                          className="w-full resize-none rounded-xl border border-[#0F172A]/15 bg-[#F8FAFC] px-4 py-3.5 transition-all duration-300 focus:border-[#0056D2] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#0056D2]/50 dark:border-white/15 dark:bg-[#080B14] dark:focus:bg-[#0B0F19]"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={isSending || !isEmailJsConfigured()}
                        className="btn-primary flex w-full items-center justify-center gap-2 py-3.5 disabled:cursor-not-allowed disabled:opacity-60"
                      >
                        {isSending ? (
                          <>
                            <Loader2 size={18} className="animate-spin" />
                            Sending Message...
                          </>
                        ) : (
                          <>
                            <Send size={18} />
                            Send Message
                          </>
                        )}
                      </button>
                    </form>
                  )}
                </div>
              </div>
            </div>

            {/* Info Panel */}
            <div className="flex flex-col gap-5 lg:col-span-2">
              <a
                href={SOCIAL_LINKS.email}
                className="group flex items-start gap-4 rounded-2xl border border-[#0F172A]/10 bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#0056D2]/30 hover:shadow-md dark:border-white/10 dark:bg-[#0B0F19] md:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2] transition-colors group-hover:bg-[#0056D2] group-hover:text-white">
                  <Mail size={20} />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#475569] dark:text-[#94A3B8]">
                    Email
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-[#0F172A] dark:text-white">
                    whimseytech@gmail.com
                  </span>
                </span>
              </a>

              <a
                href={SOCIAL_LINKS.phone}
                className="group flex items-start gap-4 rounded-2xl border border-[#0F172A]/10 bg-white p-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#0056D2]/30 hover:shadow-md dark:border-white/10 dark:bg-[#0B0F19] md:p-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2] transition-colors group-hover:bg-[#0056D2] group-hover:text-white">
                  <Phone size={20} />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-wider text-[#475569] dark:text-[#94A3B8]">
                    Phone
                  </span>
                  <span className="mt-1 block text-sm font-semibold text-[#0F172A] dark:text-white">
                    0769591223
                  </span>
                </span>
              </a>

              <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-5 dark:border-white/10 dark:bg-[#0B0F19] md:p-6">
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2]">
                    <Clock size={20} />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-[#475569] dark:text-[#94A3B8]">
                      Business Hours
                    </span>
                    <span className="mt-1 block text-sm font-semibold text-[#0F172A] dark:text-white">
                      Monday – Friday: 8:00 AM – 5:00 PM EAT
                    </span>
                    <span className="text-caption-muted mt-2 block">
                      Extended support available for critical projects
                    </span>
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-5 dark:border-white/10 dark:bg-[#0B0F19] md:p-6">
                <BrandSocialIcons variant="footer" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding border-t border-[#0F172A]/5 bg-[#F8FAFC] dark:border-white/5 dark:bg-[#080B14]">
        <div className="container-fluid max-w-3xl">
          <SectionHeader
            overline="FAQ"
            title="Got questions? We've got answers."
            description="Here are some of the most common questions we receive from teams scoping their next build."
            align="center"
          />

          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openFaq === index
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border bg-white transition-all duration-300 ease-out dark:bg-[#0B0F19] ${
                    isOpen
                      ? 'border-[#0056D2]/30 shadow-md shadow-[#0056D2]/5'
                      : 'border-[#0F172A]/10 dark:border-white/10'
                  }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="flex w-full items-center justify-between gap-4 p-5 text-left font-medium transition-all duration-300 ease-out hover:text-[#0056D2] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#0056D2]/50 md:px-6 md:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="pr-2 leading-snug">{item.question}</span>
                    <ChevronDown
                      size={20}
                      className={`shrink-0 text-[#0056D2] transition-transform duration-500 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <p className="text-caption-muted border-t border-[#0F172A]/5 px-5 pb-5 pt-4 md:px-6 md:pb-6">
                      {item.answer}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}
