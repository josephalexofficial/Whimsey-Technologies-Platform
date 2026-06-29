import { Link, useParams, Navigate } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Cpu,
  GitBranch,
  Shield,
  Search,
  PenTool,
  Code,
  Rocket,
} from 'lucide-react'
import { getServiceBySlug, SERVICES } from '../data/services'
import { TechStackRow } from '../components/TechIcon'
import ServiceIllustration from '../components/ServiceIllustration'
import SectionHeader from '../components/SectionHeader'

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Strategy & Scoping',
    description: 'Technical requirements gathering and constraint mapping.',
    icon: Search,
  },
  {
    number: '02',
    title: 'Architecture & UI/UX',
    description: 'Designing database schemas, system interfaces, and wireframes.',
    icon: PenTool,
  },
  {
    number: '03',
    title: 'Agile Engineering',
    description: 'High-performance code implementation backed by automated testing pipelines.',
    icon: Code,
  },
  {
    number: '04',
    title: 'Governance & Deployment',
    description: 'CI/CD launch tracks and observability setup.',
    icon: Rocket,
  },
]

const QUADRANT_ICONS = [Layers, Cpu, GitBranch, Shield]

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) return <Navigate to="/services" replace />

  const serviceIndex = SERVICES.findIndex((s) => s.slug === slug) + 1
  const relatedServices = SERVICES.filter((s) => s.slug !== slug).slice(0, 4)

  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative section-padding pt-28 md:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#0056D2]/10 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-[#0056D2]/5 blur-3xl" />
        </div>

        <div className="container-fluid relative">
          <Link
            to="/services"
            className="thread-link mb-8 inline-flex text-sm text-[#475569] dark:text-[#94A3B8]"
          >
            <span>→</span>
            <span>Back to All Services</span>
          </Link>

          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16 xl:gap-20">
            <div className="text-center lg:text-left">
              <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0056D2]/10 text-sm font-bold text-[#0056D2]">
                  {String(serviceIndex).padStart(2, '0')}
                </span>
                <span className="rounded-full border border-[#0056D2]/20 bg-[#0056D2]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0056D2]">
                  {service.title}
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-[3.25rem]">
                {service.heroTitle}
              </h1>

              <p className="text-subheadline mx-auto mt-6 max-w-xl lg:mx-0">
                {service.heroSubtitle}
              </p>

              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
                <Link
                  to={`/contact?service=${service.slug}`}
                  className="btn-primary gap-2 px-8 py-3.5"
                >
                  Start {service.shortTitle} Project
                  <ArrowRight size={18} />
                </Link>
                <Link to="/services" className="btn-outline gap-2 px-8 py-3.5">
                  View All Services
                </Link>
              </div>
            </div>

            <div className="mx-auto w-full max-w-lg lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white shadow-xl shadow-[#0056D2]/5 dark:border-white/10 dark:bg-[#0B0F19]">
                <div className="flex items-center gap-1.5 border-b border-[#0F172A]/5 bg-[#F8FAFC] px-4 py-3 dark:border-white/5 dark:bg-[#0F172A]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
                  <span className="ml-2 truncate text-xs text-[#475569] dark:text-[#94A3B8]">
                    {service.shortTitle}
                  </span>
                </div>
                <ServiceIllustration
                  slug={service.slug}
                  variant="hero"
                  className="!min-h-[260px] md:!min-h-[300px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quadrants */}
      <section className="section-padding border-t border-[#0F172A]/5 bg-[#F8FAFC] dark:border-white/5 dark:bg-[#080B14]">
        <div className="container-fluid">
          <SectionHeader
            overline="Engineering Pillars"
            title="Technical Expertise Framework"
            description={`Four core engineering pillars that define how we architect, build, and deliver every ${service.shortTitle.toLowerCase()} engagement.`}
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {service.quadrants.map((quad, i) => {
              const Icon = QUADRANT_ICONS[i] ?? Layers
              return (
                <div
                  key={quad.title}
                  className="group flex h-full flex-col rounded-2xl border border-[#0F172A]/10 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2]/40 hover:shadow-lg hover:shadow-[#0056D2]/5 dark:border-white/10 dark:bg-[#0B0F19] md:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2] transition-colors duration-300 group-hover:bg-[#0056D2] group-hover:text-white">
                      <Icon size={18} />
                    </div>
                    <span className="text-xl font-bold text-[#0056D2]/20">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold leading-snug">{quad.title}</h3>
                  <p className="mt-1.5 text-sm font-medium text-[#0056D2]">{quad.subtitle}</p>
                  <ul className="mt-5 flex-1 space-y-2.5 border-t border-[#0F172A]/5 pt-5 dark:border-white/5">
                    {quad.items.map((item) => (
                      <li key={item} className="thread-link text-caption-muted">
                        <span>→</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white shadow-sm dark:border-white/10 dark:bg-[#0B0F19]">
            <div className="border-b border-[#0F172A]/5 bg-gradient-to-r from-[#0056D2]/5 to-transparent px-8 py-6 dark:border-white/5 md:px-10">
              <SectionHeader
                overline="Tooling"
                title={`${service.shortTitle} Technology Stack`}
                description="Leveraging modern, industry-standard tools to build stable, performant software systems."
              />
            </div>
            <div className="px-8 py-8 md:px-10 md:py-10">
              <TechStackRow stack={service.techStack} />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding border-t border-[#0F172A]/5 bg-[#F8FAFC] dark:border-white/5 dark:bg-[#080B14]">
        <div className="container-fluid">
          <SectionHeader
            overline="Lifecycle"
            title="Development Process"
            description="A structured delivery pipeline tailored to your service requirements — from initial scoping through production governance."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {PROCESS_STEPS.map((step) => {
              const Icon = step.icon
              return (
                <div
                  key={step.number}
                  className="group flex h-full flex-col rounded-2xl border border-[#0F172A]/10 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2]/40 hover:shadow-md dark:border-white/10 dark:bg-[#0B0F19] md:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2] transition-colors duration-300 group-hover:bg-[#0056D2] group-hover:text-white">
                      <Icon size={18} />
                    </div>
                    <span className="text-2xl font-bold text-[#0056D2]/20">{step.number}</span>
                  </div>
                  <h3 className="mt-5 font-bold leading-snug">{step.title}</h3>
                  <p className="text-caption-muted mt-3 flex-1 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding !pt-0">
        <div className="container-fluid">
          <SectionHeader
            overline="Explore More"
            title="Other Capabilities"
            description="Discover additional engineering disciplines across the Whimsey Technologies portfolio."
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {relatedServices.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2] hover:shadow-lg dark:border-white/10 dark:bg-[#0B0F19]"
              >
                <ServiceIllustration slug={s.slug} variant="card" className="!h-36" />
                <div className="flex items-center justify-between gap-2 p-4 md:p-5">
                  <p className="text-sm font-semibold leading-snug transition-colors group-hover:text-[#0056D2]">
                    {s.shortTitle}
                  </p>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0F172A]/10 text-[#0F172A]/30 transition-all group-hover:border-[#0056D2] group-hover:bg-[#0056D2] group-hover:text-white dark:border-white/10 dark:text-white/30">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8 flex justify-center lg:justify-start">
            <Link to="/services" className="thread-link text-sm font-medium text-[#0056D2]">
              <span>View All 9 Services</span>
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
                Let's Build
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Ready to build your {service.shortTitle.toLowerCase()} solution?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/85">
                Share your project constraints and timeline — we'll respond with a clear technical
                scoping framework within one business day.
              </p>
              <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
                <Link
                  to={`/contact?service=${service.slug}`}
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-medium text-[#0056D2] transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
                >
                  Discuss Your Project Idea
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/projects"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 px-8 py-3.5 font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                  See Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
