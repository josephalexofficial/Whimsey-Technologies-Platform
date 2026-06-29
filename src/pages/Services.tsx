import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Sparkles, Search, PenTool, Code, Rocket } from 'lucide-react'
import { SERVICES } from '../data/services'
import ServiceIllustration from '../components/ServiceIllustration'
import SectionHeader from '../components/SectionHeader'

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Rigorous requirement analysis, constraint mapping, and technical planning.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Architecture & Design',
    description: 'Mapping system internals, robust data schemas, and high-fidelity prototypes.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Engineering & Testing',
    description: 'Agile sprints, automated testing pipelines, and continuous code reviews.',
    icon: Code,
  },
  {
    number: '04',
    title: 'Launch & Governance',
    description: 'Production deployment, observability setup, and structured transition runbooks.',
    icon: Rocket,
  },
]

const HERO_TAGS = ['9 Core Services', 'End-to-End Delivery', 'Production-Ready Systems']

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative section-padding pt-28 md:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#0056D2]/10 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#0056D2]/5 blur-3xl" />
        </div>

        <div className="container-fluid relative text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#0056D2]/20 bg-[#0056D2]/5 px-4 py-1.5">
            <Sparkles size={14} className="text-[#0056D2]" />
            <span className="text-xs font-semibold uppercase tracking-widest text-[#0056D2]">
              What We Deliver
            </span>
          </div>

          <h1 className="mx-auto mt-6 max-w-4xl text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
            Technical Capabilities
          </h1>

          <p className="text-subheadline mx-auto mt-6 max-w-2xl">
            We deliver full-stack engineering, resilient infrastructure, and custom software systems
            designed with absolute technical precision.
          </p>

          <div className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2">
            {HERO_TAGS.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#0F172A]/10 bg-white px-4 py-1.5 text-xs font-medium text-[#475569] dark:border-white/10 dark:bg-[#0B0F19] dark:text-[#94A3B8]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="section-padding border-t border-[#0F172A]/5 !pt-12 dark:border-white/5 md:!pt-16">
        <div className="container-fluid">
          <SectionHeader
            overline="Our Services"
            title="Nine Engineering Disciplines"
            description="From full-stack web platforms to cloud infrastructure — every capability engineered for scale, security, and long-term maintainability."
            align="center"
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8">
            {SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#0056D2] hover:shadow-xl hover:shadow-[#0056D2]/10 dark:border-white/10 dark:bg-[#0B0F19]"
              >
                <ServiceIllustration slug={service.slug} variant="card" />
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#0056D2]/10 text-xs font-bold text-[#0056D2]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0F172A]/10 text-[#0F172A]/40 transition-all duration-300 group-hover:border-[#0056D2] group-hover:bg-[#0056D2] group-hover:text-white dark:border-white/10 dark:text-white/40">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold leading-snug transition-colors duration-300 group-hover:text-[#0056D2]">
                    {service.title}
                  </h3>
                  <p className="text-caption-muted mt-3 flex-1 leading-relaxed">
                    {service.description}
                  </p>
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
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding border-t border-[#0F172A]/5 bg-[#F8FAFC] dark:border-white/5 dark:bg-[#080B14]">
        <div className="container-fluid">
          <SectionHeader
            overline="How We Work"
            title="Our Development Process"
            description="A disciplined four-phase lifecycle that keeps every engagement predictable, transparent, and production-ready."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="group flex h-full flex-col rounded-2xl border border-[#0F172A]/10 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2]/40 hover:shadow-lg hover:shadow-[#0056D2]/5 dark:border-white/10 dark:bg-[#0B0F19] md:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2] transition-colors duration-300 group-hover:bg-[#0056D2] group-hover:text-white">
                      <Icon size={18} />
                    </div>
                    <span className="text-2xl font-bold text-[#0056D2]/20">{step.number}</span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-snug">{step.title}</h3>
                  <p className="text-caption-muted mt-3 flex-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
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
                Get Started
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Ready to expand your technical edge?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
                Let's discuss your product requirements, constraints, and timeline. We respond with
                a clear scoping framework within one business day.
              </p>
              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-medium text-[#0056D2] transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 px-8 py-3.5 font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
