import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Target,
  Eye,
  Lightbulb,
  Gem,
  ShieldCheck,
  Handshake,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import MetricsRow from '../components/MetricsRow'
import SectionHeader from '../components/SectionHeader'

const VALUES = [
  {
    title: 'Innovation',
    description:
      'Pushing technical boundaries and exploring modern tools to build forward-thinking solutions that keep your systems competitive.',
    icon: Lightbulb,
  },
  {
    title: 'Craftsmanship',
    description:
      'Approaching software development with a deep commitment to writing clean, maintainable code and building rock-solid architectures.',
    icon: Gem,
  },
  {
    title: 'Reliability',
    description:
      'Maintaining rigorous testing standards and careful planning to ensure your digital products perform flawlessly from day one.',
    icon: ShieldCheck,
  },
  {
    title: 'Partnership',
    description:
      'Working transparently with your team as a product-minded extension of your business, aligning technical milestones to your actual growth goals.',
    icon: Handshake,
  },
]

const BUILD_PRINCIPLES = [
  'Scalable, maintainable code from day one',
  'Resilient integrations across your toolchain',
  'Functional systems without agency overhead',
  'Precision scoping and disciplined execution',
  'Documentation your team can run with post-handover',
]

export default function About() {
  return (
    <div className="overflow-x-hidden">
      {/* Hero */}
      <section className="relative section-padding pt-28 md:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#0056D2]/10 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-[#0056D2]/5 blur-3xl" />
        </div>

        <div className="container-fluid relative">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="text-center lg:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0056D2]/20 bg-[#0056D2]/5 px-4 py-1.5">
                <Sparkles size={14} className="text-[#0056D2]" />
                <span className="text-xs font-semibold uppercase tracking-widest text-[#0056D2]">
                  About Us
                </span>
              </div>

              <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
                Whimsey Technologies
              </h1>

              <p className="mx-auto mt-6 max-w-xl text-xl leading-relaxed md:text-2xl lg:mx-0">
                Light Up Your Vision With{' '}
                <span className="font-semibold text-[#0056D2]">Precision-Crafted Tech</span>.
              </p>

              <p className="text-body-muted mx-auto mt-5 max-w-lg lg:mx-0">
                We are a product-minded engineering team building high-performance software platforms
                for organizations that demand clarity, discipline, and results.
              </p>
            </div>

            <div className="mx-auto w-full max-w-md lg:max-w-none">
              <div className="overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white shadow-xl shadow-[#0056D2]/5 dark:border-white/10 dark:bg-[#0B0F19]">
                <div className="flex flex-col items-center justify-center bg-gradient-to-br from-[#0056D2]/5 to-transparent px-8 py-12 md:py-16">
                  <img
                    src="/projects/Whimsey_Logo.png"
                    alt="Whimsey Technologies"
                    className="h-28 w-28 object-contain md:h-36 md:w-36"
                  />
                  <p className="mt-6 text-center text-sm font-medium uppercase tracking-[0.2em] text-[#0056D2]">
                    Engineered to Scale
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding border-y border-[#0F172A]/5 bg-[#F8FAFC] dark:border-white/5 dark:bg-[#080B14]">
        <div className="container-fluid">
          <SectionHeader
            overline="Our Purpose"
            title="Mission & Vision"
            description="The principles that guide every platform we architect, every sprint we run, and every system we deliver."
            align="center"
          />

          <div className="relative mt-12 grid gap-6 md:grid-cols-2 md:gap-8 lg:mt-16">
            <div className="group rounded-2xl border border-[#0F172A]/10 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2]/40 hover:shadow-lg hover:shadow-[#0056D2]/5 dark:border-white/10 dark:bg-[#0B0F19] md:p-10 lg:mr-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2] transition-colors duration-300 group-hover:bg-[#0056D2] group-hover:text-white">
                <Target size={22} />
              </div>
              <p className="overline mt-6 !text-[#0056D2]/70">Our Mission</p>
              <h3 className="mt-2 text-2xl font-bold">Build With Precision</h3>
              <p className="text-body-muted mt-4 leading-relaxed">
                To build high-performance, predictable software platforms that eliminate complexity
                and turn bold ideas into operational reality.
              </p>
            </div>

            <div className="group rounded-2xl border border-[#0F172A]/10 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2]/40 hover:shadow-lg hover:shadow-[#0056D2]/5 dark:border-white/10 dark:bg-[#0B0F19] md:mt-10 md:p-10 lg:ml-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2] transition-colors duration-300 group-hover:bg-[#0056D2] group-hover:text-white">
                <Eye size={22} />
              </div>
              <p className="overline mt-6 !text-[#0056D2]/70">Our Vision</p>
              <h3 className="mt-2 text-2xl font-bold">Set the Standard</h3>
              <p className="text-body-muted mt-4 leading-relaxed">
                To set the global standard for engineering discipline, proving that clean code and
                deliberate system architecture are the ultimate foundation for sustainable business
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding">
        <div className="container-fluid">
          <SectionHeader
            overline="Track Record"
            title="Proven Performance"
            description="Numbers that reflect our commitment to quality delivery and long-term client partnerships."
            align="center"
          />
          <div className="mt-10 lg:mt-12">
            <MetricsRow />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding border-t border-[#0F172A]/5 bg-[#F8FAFC] dark:border-white/5 dark:bg-[#080B14]">
        <div className="container-fluid">
          <SectionHeader
            overline="What We Stand For"
            title="Core Values"
            description="The engineering culture behind every Whimsey Technologies engagement."
          />

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6">
            {VALUES.map((value, index) => {
              const Icon = value.icon
              return (
                <div
                  key={value.title}
                  className="group flex h-full flex-col rounded-2xl border border-[#0F172A]/10 bg-white p-6 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2]/40 hover:shadow-lg hover:shadow-[#0056D2]/5 dark:border-white/10 dark:bg-[#0B0F19] md:p-7"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2] transition-colors duration-300 group-hover:bg-[#0056D2] group-hover:text-white">
                      <Icon size={20} />
                    </div>
                    <span className="text-sm font-bold text-[#0056D2]/25">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="mt-5 text-lg font-bold">{value.title}</h3>
                  <p className="text-caption-muted mt-3 flex-1 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeader
                overline="Our Approach"
                title="How We Build"
                description="Our team consists of senior, product-minded engineers who focus strictly on writing scalable code, building resilient integrations, and launching functional software systems without the traditional agency overhead."
              />
            </div>

            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-8 dark:border-white/10 dark:bg-[#0B0F19] md:p-10">
              <p className="text-sm font-semibold uppercase tracking-wider text-[#0056D2]">
                Engineering Principles
              </p>
              <ul className="mt-6 space-y-4">
                {BUILD_PRINCIPLES.map((principle) => (
                  <li
                    key={principle}
                    className="flex items-start gap-3 text-[#0F172A]/80 dark:text-white/80"
                  >
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#0056D2]"
                      aria-hidden="true"
                    />
                    <span className="text-sm leading-relaxed md:text-base">{principle}</span>
                  </li>
                ))}
              </ul>
              <p className="text-body-muted mt-8 leading-relaxed">
                Every project is scoped with precision, executed with discipline, and delivered with
                the documentation and operational readiness your internal team needs to succeed long
                after handover.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding !pb-16 md:!pb-24">
        <div className="container-fluid">
          <div className="relative overflow-hidden rounded-3xl bg-[#0056D2] px-6 py-14 text-center md:px-12 md:py-16">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-white/5 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
                Work With Us
              </p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-white md:text-3xl">
                Ready to partner with a team that builds with discipline?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-white/85">
                Tell us about your product vision — we respond within one business day.
              </p>
              <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-3.5 font-medium text-[#0056D2] transition-all duration-300 hover:bg-white/90 hover:shadow-lg"
                >
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 px-8 py-3.5 font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
