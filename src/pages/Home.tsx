import { Link } from 'react-router-dom'
import HeroGraphic from '../components/HeroGraphic'
import MetricsRow from '../components/MetricsRow'

const PILLARS = [
  {
    title: 'Technical Excellence',
    description:
      'Full-stack delivery with clear system architecture, strict code reviews, and comprehensive documentation your team can seamlessly run with.',
  },
  {
    title: 'Quality Assurance',
    description:
      'Automated test suites, isolated staging environments, and rigorous release checklists tailored to match your specific operational and compliance needs.',
  },
  {
    title: 'Operable Systems',
    description:
      'Built-in observability, automated backups, and detailed runbooks so your software ecosystem remains rock-solid long after handover—not just on launch day.',
  },
  {
    title: 'Continuous Innovation',
    description:
      'Forward-thinking infrastructure execution that anticipates technology trends, keeping your platforms modern, future-proof, and ahead of the curve.',
  },
  {
    title: 'Embedded Partnership',
    description:
      'Product-minded engineers who integrate into your workflows, adapt to your daily tools, and prioritize clear asynchronous documentation by default.',
  },
  {
    title: 'Business Outcomes',
    description:
      'We align software milestones directly to revenue, cost efficiency, and risk mitigation, mapping engineering work directly to what leadership measures.',
  },
]

const FEATURED_SERVICES = [
  {
    title: 'Responsive Interfaces, Bulletproof Backends',
    description:
      'We engineer full-stack web applications where pixel-perfect responsive interfaces meet secure, scalable server architectures. Every layer is built for performance, maintainability, and long-term growth.',
    slug: 'web-engineering',
  },
  {
    title: 'Native Speed, Cross-Platform Reach',
    description:
      'From iOS to Android, we deliver mobile applications engineered for fluid performance and intuitive workflows. Native capabilities and cross-platform efficiency — without compromise.',
    slug: 'mobile-development',
  },
  {
    title: 'Internal Platforms That Scale With You',
    description:
      'We build custom enterprise software that automates corporate workflows and eliminates operational friction. Tailored internal platforms your teams actually want to use every day.',
    slug: 'enterprise-software',
  },
]

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding pt-28 md:pt-36">
        <div className="container-fluid">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Light Up Your Vision With Precision-Crafted Tech
              </h1>
              <p className="text-subheadline mt-6">
                We engineer high-performance software, intuitive web ecosystems, and robust
                integrations—scoped clearly, built to scale, and delivered with absolute technical
                precision.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  Start Your Project
                </Link>
                <Link to="/services" className="btn-outline">
                  Explore Services
                </Link>
              </div>
            </div>
            <HeroGraphic />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-[#0F172A]/[0.02] dark:bg-white/[0.02]">
        <div className="container-fluid">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold md:text-4xl">Why Choose Whimsey Tech?</h2>
            <p className="text-body-muted mt-4">
              We strip away the agency overhead to deliver high-performing systems built with clean,
              intentional engineering.
            </p>
          </div>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="rounded-xl border border-[#0F172A]/10 p-6 transition-all duration-300 ease-out hover:border-[#0056D2]/30 dark:border-white/10"
              >
                <h3 className="text-lg font-bold">{pillar.title}</h3>
                <p className="text-caption-muted mt-3">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-16">
            <MetricsRow />
          </div>
        </div>
      </section>

      {/* What We Build */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">What We Build</h2>
            <p className="text-body-muted mx-auto mt-4 max-w-2xl">
              We design, build, and deploy high-performance software solutions engineered to scale
              with your business.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {FEATURED_SERVICES.map((service) => (
              <div
                key={service.slug}
                className="group rounded-xl border border-[#0F172A]/10 p-8 transition-all duration-300 ease-out hover:border-[#0056D2] dark:border-white/10"
              >
                <h3 className="text-xl font-bold">{service.title}</h3>
                <p className="text-caption-muted mt-4">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/services" className="btn-outline">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-[#0056D2]">
        <div className="container-fluid text-center">
          <h2 className="text-3xl font-bold text-white md:text-4xl">
            Ready to start your next build?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-white/80">
            Tell us about your product, timeline, and constraints—we respond within one business
            day.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 font-medium text-[#0056D2] transition-all duration-300 ease-out hover:bg-white/90"
            >
              Start Your Project
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center rounded-lg border border-white/30 px-6 py-3 font-medium text-white transition-all duration-300 ease-out hover:border-white hover:bg-white/10"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
