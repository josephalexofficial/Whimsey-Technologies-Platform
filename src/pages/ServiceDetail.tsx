import { Link, useParams, Navigate } from 'react-router-dom'
import { getServiceBySlug, SERVICES } from '../data/services'
import { TechStackRow } from '../components/TechIcon'
import ServiceIllustration from '../components/ServiceIllustration'

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Strategy & Scoping',
    description: 'Technical requirements gathering and constraint mapping.',
  },
  {
    number: '02',
    title: 'Architecture & UI/UX',
    description: 'Designing database schemas, system interfaces, and wireframes.',
  },
  {
    number: '03',
    title: 'Agile Engineering',
    description: 'High-performance code implementation backed by automated testing pipelines.',
  },
  {
    number: '04',
    title: 'Governance & Deployment',
    description: 'CI/CD launch tracks and observability setup.',
  },
]

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined

  if (!service) return <Navigate to="/services" replace />

  const serviceIndex = SERVICES.findIndex((s) => s.slug === slug) + 1

  return (
    <div>
      {/* Hero */}
      <section className="section-padding pt-28 md:pt-36">
        <div className="container-fluid">
          <Link
            to="/services"
            className="thread-link mb-6 inline-flex text-sm text-[#475569] dark:text-[#94A3B8]"
          >
            <span>→</span>
            <span>Back to All Services</span>
          </Link>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <div className="flex items-center gap-3">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#0056D2]/10 text-sm font-bold text-[#0056D2]">
                  {String(serviceIndex).padStart(2, '0')}
                </span>
                <span className="overline !text-[#0056D2]/70">{service.title}</span>
              </div>
              <h1 className="mt-4 text-4xl font-bold md:text-5xl">{service.heroTitle}</h1>
              <p className="text-subheadline mt-6">{service.heroSubtitle}</p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to={`/contact?service=${service.slug}`} className="btn-primary">
                  Start {service.shortTitle} Project
                </Link>
                <Link to="/services" className="btn-outline">
                  View All Services
                </Link>
              </div>
            </div>
            <div className="overflow-hidden rounded-2xl border border-[#0F172A]/10 shadow-lg dark:border-white/10">
              <ServiceIllustration slug={service.slug} variant="hero" className="!min-h-[280px] md:!min-h-[320px]" />
            </div>
          </div>
        </div>
      </section>

      {/* Quadrants */}
      <section className="section-padding bg-[#0F172A]/[0.02] dark:bg-white/[0.02]">
        <div className="container-fluid">
          <div className="mb-10 max-w-2xl">
            <p className="overline">Engineering Pillars</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Technical Expertise Framework</h2>
            <p className="text-body-muted mt-3">
              Four core engineering pillars that define how we architect, build, and deliver every{' '}
              {service.shortTitle.toLowerCase()} engagement.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.quadrants.map((quad, i) => (
              <div
                key={quad.title}
                className="group rounded-2xl border border-[#0F172A]/10 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2]/40 hover:shadow-md dark:border-white/10 dark:bg-[#0B0F19]"
              >
                <span className="text-3xl font-bold text-[#0056D2]/15">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-2 text-lg font-bold">{quad.title}</h3>
                <p className="mt-1 text-sm font-medium text-[#0056D2]">{quad.subtitle}</p>
                <ul className="mt-5 space-y-2.5 border-t border-[#0F172A]/5 pt-5 dark:border-white/5">
                  {quad.items.map((item) => (
                    <li key={item} className="thread-link text-caption-muted">
                      <span>→</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-8 dark:border-white/10 dark:bg-[#0B0F19] md:p-10">
            <p className="overline">Tooling</p>
            <h2 className="mt-2 text-2xl font-bold md:text-3xl">
              {service.shortTitle} Technology Stack
            </h2>
            <p className="text-body-muted mt-2">
              Leveraging modern, industry-standard tools to build stable, performant software systems.
            </p>
            <div className="mt-8">
              <TechStackRow stack={service.techStack} />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section-padding bg-[#0F172A]/[0.02] dark:bg-white/[0.02]">
        <div className="container-fluid">
          <p className="overline">Lifecycle</p>
          <h2 className="mt-2 text-2xl font-bold md:text-3xl">Development Process</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <div key={step.number} className="relative">
                {i < PROCESS_STEPS.length - 1 && (
                  <div className="absolute left-[calc(100%-8px)] top-8 hidden h-px w-full bg-[#0056D2]/20 lg:block" />
                )}
                <div className="rounded-xl border border-[#0F172A]/10 bg-white p-6 dark:border-white/10 dark:bg-[#0B0F19]">
                  <span className="text-3xl font-bold text-[#0056D2]/20">{step.number}</span>
                  <h3 className="mt-2 font-bold">{step.title}</h3>
                  <p className="text-caption-muted mt-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Other Services */}
      <section className="section-padding !pt-0">
        <div className="container-fluid">
          <p className="overline">Explore More</p>
          <h2 className="mt-2 text-2xl font-bold">Other Capabilities</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.filter((s) => s.slug !== slug)
              .slice(0, 4)
              .map((s) => (
                <Link
                  key={s.slug}
                  to={`/services/${s.slug}`}
                  className="group overflow-hidden rounded-xl border border-[#0F172A]/10 transition-all duration-300 hover:border-[#0056D2] dark:border-white/10"
                >
                  <ServiceIllustration slug={s.slug} variant="card" className="!h-32" />
                  <p className="p-4 text-sm font-semibold transition-colors group-hover:text-[#0056D2]">
                    {s.shortTitle}
                  </p>
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="rounded-2xl bg-[#0056D2] px-8 py-12 text-center md:px-16 md:py-16">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Ready to build your {service.shortTitle.toLowerCase()} solution?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/80">
              Share your project constraints and timeline — we'll respond with a clear technical
              scoping framework within one business day.
            </p>
            <div className="mt-8">
              <Link
                to={`/contact?service=${service.slug}`}
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-[#0056D2] transition-all duration-300 ease-out hover:bg-white/90"
              >
                Discuss Your Project Idea
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
