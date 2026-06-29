import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { SERVICES } from '../data/services'
import ServiceIllustration from '../components/ServiceIllustration'

const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discovery',
    description: 'Rigorous requirement analysis, constraint mapping, and technical planning.',
  },
  {
    number: '02',
    title: 'Architecture & Design',
    description: 'Mapping system internals, robust data schemas, and high-fidelity prototypes.',
  },
  {
    number: '03',
    title: 'Engineering & Testing',
    description: 'Agile sprints, automated testing pipelines, and continuous code reviews.',
  },
  {
    number: '04',
    title: 'Launch & Governance',
    description: 'Production deployment, observability setup, and structured transition runbooks.',
  },
]

export default function Services() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding pt-28 md:pt-36">
        <div className="container-fluid text-center">
          <p className="overline">What We Deliver</p>
          <h1 className="mt-4 text-4xl font-bold md:text-5xl lg:text-6xl">Technical Capabilities</h1>
          <p className="text-subheadline mx-auto mt-6 max-w-2xl">
            We deliver full-stack engineering, resilient infrastructure, and custom software systems
            designed with absolute technical precision.
          </p>
          <div className="mx-auto mt-8 flex max-w-lg flex-wrap justify-center gap-3">
            {['9 Core Services', 'End-to-End Delivery', 'Production-Ready Systems'].map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-[#0056D2]/20 bg-[#0056D2]/5 px-4 py-1.5 text-xs font-medium text-[#0056D2]"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Service Grid */}
      <section className="section-padding !pt-0">
        <div className="container-fluid">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service, index) => (
              <Link
                key={service.slug}
                to={`/services/${service.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#0056D2] hover:shadow-lg dark:border-white/10 dark:bg-[#0B0F19]"
              >
                <ServiceIllustration slug={service.slug} variant="card" />
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-3">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#0056D2]/10 text-xs font-bold text-[#0056D2]">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0F172A]/10 text-[#0F172A]/40 transition-all duration-300 group-hover:border-[#0056D2] group-hover:bg-[#0056D2] group-hover:text-white dark:border-white/10 dark:text-white/40">
                      <ArrowUpRight size={16} />
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-bold transition-colors duration-300 group-hover:text-[#0056D2]">
                    {service.title}
                  </h3>
                  <p className="text-caption-muted mt-3 flex-1">{service.description}</p>
                  <span className="thread-link mt-5 text-sm font-medium text-[#0056D2]">
                    <span>Learn More</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="section-padding bg-[#0F172A]/[0.02] dark:bg-white/[0.02]">
        <div className="container-fluid">
          <div className="max-w-2xl">
            <p className="overline">How We Work</p>
            <h2 className="mt-3 text-3xl font-bold md:text-4xl">Our Development Process</h2>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.number}
                className="rounded-xl border border-[#0F172A]/10 bg-white p-6 transition-all duration-300 ease-out hover:border-[#0056D2]/30 dark:border-white/10 dark:bg-[#0B0F19]"
              >
                <span className="text-4xl font-bold text-[#0056D2]/20">{step.number}</span>
                <div className="thread-link mt-3 text-lg font-bold">
                  <span>→</span>
                  <span>{step.title}</span>
                </div>
                <p className="text-caption-muted mt-3">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="rounded-2xl border border-[#0056D2]/20 bg-gradient-to-br from-[#0056D2]/10 via-transparent to-[#0056D2]/5 px-8 py-12 text-center md:px-16 md:py-16">
            <h2 className="text-3xl font-bold md:text-4xl">Ready to expand your technical edge?</h2>
            <p className="text-body-muted mx-auto mt-4 max-w-xl">
              Let's discuss your product requirements, constraints, and timeline. We respond with a
              clear scoping framework within one business day.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">
                Start Your Project
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
