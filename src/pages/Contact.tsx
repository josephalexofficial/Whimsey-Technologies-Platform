import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { ChevronDown, Loader2 } from 'lucide-react'
import { FAQ_ITEMS } from '../data/faq'
import BrandSocialIcons from '../components/BrandSocialIcons'
import { SOCIAL_LINKS } from '../data/social'
import { isEmailJsConfigured, sendContactEmail } from '../lib/emailjs'

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

export default function Contact() {
  const [searchParams] = useSearchParams()
  const serviceParam = searchParams.get('service') ?? ''
  const serviceMessage = serviceParam
    ? `I'm interested in your ${serviceParam.replace(/-/g, ' ')} service. `
    : ''
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
        serviceInterest: serviceParam
          ? serviceParam.replace(/-/g, ' ')
          : 'General Inquiry',
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
    <div>
      {/* Hero */}
      <section className="section-padding pt-28 md:pt-36">
        <div className="container-fluid">
          <h1 className="text-4xl font-bold md:text-5xl">
            Let's Build Something Engineered to Scale
          </h1>
          <p className="text-subheadline mt-6 max-w-2xl">
            Tell us about your product, timeline, and system constraints. We review every submission
            manually and respond within one business day.
          </p>
        </div>
      </section>

      {/* Form & Info */}
      <section className="section-padding !pt-0">
        <div className="container-fluid">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Form */}
            <div className="rounded-2xl border border-[#0F172A]/10 p-8 dark:border-white/10">
              {status === 'success' ? (
                <div className="animate-[fadeIn_0.5s_ease-out] py-8 text-center">
                  <h2 className="text-2xl font-bold text-[#0056D2]">Message Received</h2>
                  <p className="text-body-muted mt-4">
                    Thank you for reaching out. Your project details have been successfully
                    transmitted to our engineering team. We are reviewing your system constraints
                    and will respond within one business day to schedule a technical scoping
                    session.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {!isEmailJsConfigured() && (
                    <div className="rounded-lg border border-amber-500/30 bg-amber-500/10 px-4 py-3 text-sm text-amber-800 dark:text-amber-200">
                      EmailJS is not configured yet. Copy <code className="text-xs">.env.example</code>{' '}
                      to <code className="text-xs">.env</code> and add your EmailJS credentials.
                    </div>
                  )}

                  {status === 'error' && (
                    <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-700 dark:text-red-300">
                      {errorMessage}
                    </div>
                  )}                  <div>
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
                      className="w-full rounded-lg border border-[#0F172A]/20 bg-transparent px-4 py-3 transition-all duration-300 focus:border-[#0056D2] focus:outline-none focus:ring-2 focus:ring-[#0056D2]/50 dark:border-white/20"
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
                      className="w-full rounded-lg border border-[#0F172A]/20 bg-transparent px-4 py-3 transition-all duration-300 focus:border-[#0056D2] focus:outline-none focus:ring-2 focus:ring-[#0056D2]/50 dark:border-white/20"
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
                      className="w-full resize-none rounded-lg border border-[#0F172A]/20 bg-transparent px-4 py-3 transition-all duration-300 focus:border-[#0056D2] focus:outline-none focus:ring-2 focus:ring-[#0056D2]/50 dark:border-white/20"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSending || !isEmailJsConfigured()}
                    className="btn-primary flex w-full items-center justify-center gap-2 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {isSending ? (
                      <>
                        <Loader2 size={18} className="animate-spin" />
                        Sending Message...
                      </>
                    ) : (
                      'Send Message'
                    )}
                  </button>                </form>
              )}
            </div>

            {/* Info Panel */}
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-bold">Follow Us</h3>
                <div className="mt-4">
                  <BrandSocialIcons variant="compact" />
                </div>
                <div className="mt-6 space-y-3">
                  <a href={SOCIAL_LINKS.email} className="thread-link text-sm text-[#475569] dark:text-[#94A3B8]">
                    <span>→</span>
                    <span>whimseytech@gmail.com</span>
                  </a>
                  <a href={SOCIAL_LINKS.phone} className="thread-link text-sm text-[#475569] dark:text-[#94A3B8]">
                    <span>→</span>
                    <span>0769591223</span>
                  </a>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-bold">Business Hours</h3>
                <p className="text-body-muted mt-3">
                  Monday – Friday: 8:00 AM – 5:00 PM EAT
                </p>
                <p className="text-caption-muted mt-2">
                  Extended support available for critical projects
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding bg-[#0F172A]/[0.02] dark:bg-white/[0.02]">
        <div className="container-fluid max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">Got questions? We've got answers.</h2>
          <p className="text-body-muted mt-4">
            Here are some of the most common questions we receive.
          </p>
          <div className="mt-10 space-y-3">
            {FAQ_ITEMS.map((item, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border border-[#0F172A]/10 dark:border-white/10"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="flex w-full items-center justify-between p-5 text-left font-medium transition-all duration-300 ease-out hover:text-[#0056D2] focus:outline-none focus:ring-2 focus:ring-[#0056D2]/50"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 transition-transform duration-500 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-500 ease-out ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-caption-muted px-5 pb-5">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
