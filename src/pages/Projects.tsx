import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, Sparkles, Quote } from 'lucide-react'
import { PROJECTS, TESTIMONIALS } from '../data/projects'
import MetricsRow from '../components/MetricsRow'
import { TechStackRow } from '../components/TechIcon'
import { ImageLightbox, ProjectImage } from '../components/ImageLightbox'
import SectionHeader from '../components/SectionHeader'

const HERO_TAGS = ['Production Platforms', 'Full-Stack Delivery', 'Client-Verified Results']

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div className="overflow-x-hidden">
      <ImageLightbox
        src={lightbox?.src ?? ''}
        alt={lightbox?.alt ?? ''}
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
      />

      {/* Hero */}
      <section className="relative section-padding pt-28 md:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-32 -top-20 h-96 w-96 rounded-full bg-[#0056D2]/10 blur-3xl" />
          <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#0056D2]/5 blur-3xl" />
        </div>

        <div className="container-fluid relative">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0056D2]/20 bg-[#0056D2]/5 px-4 py-1.5">
              <Sparkles size={14} className="text-[#0056D2]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#0056D2]">
                Our Portfolio
              </span>
            </div>

            <h1 className="mt-6 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl lg:text-6xl">
              Shipped Production Platforms
            </h1>

            <p className="text-subheadline mt-6 max-w-2xl">
              Explore our portfolio of robust, high-performance applications built with clean code
              and delivered with absolute technical precision.
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
        </div>
      </section>

      {/* Project Grid */}
      <section className="section-padding border-t border-[#0F172A]/5 !pt-12 dark:border-white/5 md:!pt-16">
        <div className="container-fluid">
          <SectionHeader
            overline="Case Studies"
            title="Production-Ready Platforms"
            description="Real projects engineered for performance, scale, and long-term maintainability — click any card to explore the full case study."
          />

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:gap-10">
            {PROJECTS.map((project, index) => (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#0056D2] hover:shadow-xl hover:shadow-[#0056D2]/10 dark:border-white/10 dark:bg-[#0B0F19]"
              >
                <div className="relative border-b border-[#0F172A]/5 dark:border-white/5">
                  <div className="flex items-center justify-between gap-3 border-b border-[#0F172A]/5 bg-[#F8FAFC] px-4 py-2.5 dark:border-white/5 dark:bg-[#0F172A]">
                    <div className="flex min-w-0 items-center gap-1.5">
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FF5F57]" />
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#FFBD2E]" />
                      <span className="h-2.5 w-2.5 shrink-0 rounded-full bg-[#28CA41]" />
                      <span className="ml-2 truncate text-xs text-[#475569] dark:text-[#94A3B8]">
                        {project.title}
                      </span>
                    </div>
                    <span className="shrink-0 text-xs font-bold text-[#0056D2]/40">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    className="aspect-[16/10]"
                    onOpen={() => setLightbox({ src: project.image, alt: project.title })}
                  />
                </div>

                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="text-xl font-bold leading-snug transition-colors duration-300 group-hover:text-[#0056D2]">
                      {project.title}
                    </h3>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0F172A]/10 text-[#0F172A]/40 transition-all duration-300 ease-out hover:border-[#0056D2] hover:bg-[#0056D2] hover:text-white dark:border-white/10 dark:text-white/40"
                      aria-label={`View ${project.title} case study`}
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>

                  <p className="text-caption-muted mt-3 flex-1 leading-relaxed">
                    {project.description}
                  </p>

                  <div className="mt-5 border-t border-[#0F172A]/5 pt-5 dark:border-white/5">
                    <TechStackRow stack={project.techStack} />
                  </div>

                  <Link
                    to={`/projects/${project.slug}`}
                    className="thread-link mt-5 text-sm font-medium text-[#0056D2]"
                  >
                    <span>View Case Study</span>
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding border-t border-[#0F172A]/5 bg-[#F8FAFC] dark:border-white/5 dark:bg-[#080B14]">
        <div className="container-fluid">
          <SectionHeader
            overline="Track Record"
            title="Proven Performance"
            description="Metrics that reflect our commitment to quality delivery and lasting client partnerships."
            align="center"
          />
          <div className="mt-10 lg:mt-12">
            <MetricsRow />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-fluid">
          <SectionHeader
            overline="Client Voices"
            title="What Our Partners Say"
            description="Real feedback from the leaders, executives, and organizations we engineer for."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-3 lg:gap-8">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="group flex h-full flex-col rounded-2xl border border-[#0F172A]/10 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2]/30 hover:shadow-lg hover:shadow-[#0056D2]/5 dark:border-white/10 dark:bg-[#0B0F19] md:p-9"
              >
                <Quote
                  size={28}
                  className="text-[#0056D2]/25 transition-colors duration-300 group-hover:text-[#0056D2]/50"
                  aria-hidden="true"
                />
                <p className="mt-5 flex-1 leading-relaxed text-[#0F172A]/80 dark:text-white/80">
                  "{testimonial.quote}"
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-[#0F172A]/5 pt-6 dark:border-white/5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#0056D2]/10 text-lg font-bold text-[#0056D2]">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-bold leading-snug">{testimonial.name}</p>
                    <p className="text-caption-muted mt-0.5">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
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
                Your Turn
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Ready to ship your next platform?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/85 md:text-lg">
                Tell us about your product vision — we respond within one business day with a clear
                technical scoping framework.
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
                  to="/services"
                  className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/35 px-8 py-3.5 font-medium text-white transition-all duration-300 hover:border-white hover:bg-white/10"
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
