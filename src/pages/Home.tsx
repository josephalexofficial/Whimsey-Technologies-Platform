import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Code2,
  ShieldCheck,
  Activity,
  Zap,
  Users,
  TrendingUp,
  Sparkles,
} from 'lucide-react'
import HeroGraphic from '../components/HeroGraphic'
import MetricsRow from '../components/MetricsRow'
import ServiceIllustration from '../components/ServiceIllustration'

const PILLARS = [
  {
    title: 'Technical Excellence',
    description:
      'Full-stack delivery with clear system architecture, strict code reviews, and comprehensive documentation your team can seamlessly run with.',
    icon: Code2,
  },
  {
    title: 'Quality Assurance',
    description:
      'Automated test suites, isolated staging environments, and rigorous release checklists tailored to match your specific operational and compliance needs.',
    icon: ShieldCheck,
  },
  {
    title: 'Operable Systems',
    description:
      'Built-in observability, automated backups, and detailed runbooks so your software ecosystem remains rock-solid long after handover—not just on launch day.',
    icon: Activity,
  },
  {
    title: 'Continuous Innovation',
    description:
      'Forward-thinking infrastructure execution that anticipates technology trends, keeping your platforms modern, future-proof, and ahead of the curve.',
    icon: Zap,
  },
  {
    title: 'Embedded Partnership',
    description:
      'Product-minded engineers who integrate into your workflows, adapt to your daily tools, and prioritize clear asynchronous documentation by default.',
    icon: Users,
  },
  {
    title: 'Business Outcomes',
    description:
      'We align software milestones directly to revenue, cost efficiency, and risk mitigation, mapping engineering work directly to what leadership measures.',
    icon: TrendingUp,
  },
]

const FEATURED_SERVICES = [
  {
    title: 'Responsive Interfaces, Bulletproof Backends',
    label: 'Full-Stack Web Engineering',
    description:
      'We engineer full-stack web applications where pixel-perfect responsive interfaces meet secure, scalable server architectures. Every layer is built for performance, maintainability, and long-term growth.',
    slug: 'web-engineering',
  },
  {
    title: 'Native Speed, Cross-Platform Reach',
    label: 'Mobile Application Development',
    description:
      'From iOS to Android, we deliver mobile applications engineered for fluid performance and intuitive workflows. Native capabilities and cross-platform efficiency — without compromise.',
    slug: 'mobile-development',
  },
  {
    title: 'Internal Platforms That Scale With You',
    label: 'Custom Enterprise Software',
    description:
      'We build custom enterprise software that automates corporate workflows and eliminates operational friction. Tailored internal platforms your teams actually want to use every day.',
    slug: 'enterprise-software',
  },
]

const HERO_TAGS = ['Full-Stack Engineering', 'Cloud & DevOps', 'Enterprise Software']

function SectionHeader({
  overline,
  title,
  description,
  align = 'left',
}: {
  overline: string
  title: string
  description: string
  align?: 'left' | 'center'
}) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'
  const descClass = align === 'center' ? 'mx-auto' : ''

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      <p className="overline">{overline}</p>
      <h2 className="mt-3 text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
      <p className={`text-body-muted mt-4 max-w-xl ${descClass}`}>{description}</p>
    </div>
  )
}

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative section-padding pt-28 md:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[#0056D2]/10 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#0056D2]/5 blur-3xl" />
        </div>

        <div className="container-fluid relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0056D2]/20 bg-[#0056D2]/5 px-4 py-1.5">
                <Sparkles size={14} className="text-[#0056D2]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0056D2]">
                  Whimsey Technologies
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.25rem] xl:text-6xl">
                Light Up Your Vision With{' '}
                <span className="text-[#0056D2]">Precision-Crafted Tech</span>
              </h1>

              <p className="text-subheadline mx-auto mt-6 max-w-xl lg:mx-0">
                We engineer high-performance software, intuitive web ecosystems, and robust
                integrations—scoped clearly, built to scale, and delivered with absolute technical
                precision.
              </p>

              <div className="mt-6 flex flex-wrap justify-center gap-2 lg:justify-start">
                {HERO_TAGS.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[#0F172A]/10 bg-white px-3 py-1 text-xs font-medium text-[#475569] dark:border-white/10 dark:bg-[#0B0F19] dark:text-[#94A3B8]"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <Link to="/contact" className="btn-primary gap-2 px-8 py-3.5">
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-outline gap-2 px-8 py-3.5">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white/80 shadow-xl shadow-[#0056D2]/5 backdrop-blur-sm dark:border-white/10 dark:bg-[#0B0F19]/80">
                <div className="flex items-center gap-1.5 border-b border-[#0F172A]/5 bg-[#F8FAFC] px-4 py-3 dark:border-white/5 dark:bg-[#0F172A]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
                  <span className="ml-2 text-xs text-[#475569] dark:text-[#94A3B8]">
                    System Architecture
                  </span>
                </div>
                <div className="p-6 md:p-8">
                  <HeroGraphic />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding border-y border-[#0F172A]/5 bg-[#F8FAFC] dark:border-white/5 dark:bg-[#080B14]">
        <div className="container-fluid">
          <SectionHeader
            overline="Why Whimsey"
            title="Why Choose Whimsey Tech?"
            description="We strip away the agency overhead to deliver high-performing systems built with clean, intentional engineering."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {PILLARS.map((pillar, index) => {
              const Icon = pillar.icon
              return (
                <div
                  key={pillar.title}
                  className="group flex h-full flex-col rounded-2xl border border-[#0F172A]/10 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2]/40 hover:shadow-lg hover:shadow-[#0056D2]/5 dark:border-white/10 dark:bg-[#0B0F19] md:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2] transition-colors duration-300 group-hover:bg-[#0056D2] group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm font-bold text-[#0056D2]/25">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-snug">{pillar.title}</h3>
                  <p className="text-caption-muted mt-3 flex-1">{pillar.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-16 lg:mt-20">
            <div className="mb-8 text-center">
              <p className="overline">Track Record</p>
              <h3 className="mt-2 text-2xl font-bold md:text-3xl">Proven Performance</h3>
            </div>
            <MetricsRow />
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding">
        <div className="container-fluid">
          <SectionHeader
            overline="Capabilities"
            title="What We Build"
            description="We design, build, and deploy high-performance software solutions engineered to scale with your business."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {FEATURED_SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#0056D2] hover:shadow-xl hover:shadow-[#0056D2]/10 dark:border-white/10 dark:bg-[#0B0F19]"
              >
                <ServiceIllustration slug={service.slug} variant="card" className="!h-40" />
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-center justify-between gap-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#0056D2]">
                      {service.label}
                    </span>
                    <span className="text-sm font-bold text-[#0056D2]/20">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-3 text-xl font-bold leading-snug transition-colors duration-300 group-hover:text-[#0056D2]">
                    {service.title}
                  </h3>
                  <p className="text-caption-muted mt-4 flex-1">{service.description}</p>
                  <span className="thread-link mt-5 text-sm font-medium text-[#0056D2]">
                    <span>Learn More</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <Link to="/services" className="btn-outline gap-2 px-8">
              View All Services
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding !pb-16 md:!pb-24">
        <div className="container-fluid">
          <div className="relative overflow-hidden rounded-3xl bg-[#0056D2] px-6 py-14 text-center md:px-12 md:py-20">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
            </div>

            <div className="relative mx-auto max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Start Building
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
                Ready to start your next build?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
                Tell us about your product, timeline, and constraints—we respond within one business
                day.
              </p>
              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-medium text-[#0056D2] transition-all duration-300 ease-out hover:bg-white/90 hover:shadow-lg"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 px-8 py-3.5 font-medium text-white transition-all duration-300 ease-out hover:border-white hover:bg-white/10"
                >
                  Explore Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
