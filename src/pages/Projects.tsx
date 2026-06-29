import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { PROJECTS, TESTIMONIALS } from '../data/projects'
import MetricsRow from '../components/MetricsRow'
import { TechStackRow } from '../components/TechIcon'
import { ImageLightbox, ProjectImage } from '../components/ImageLightbox'

export default function Projects() {
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null)

  return (
    <div>
      <ImageLightbox
        src={lightbox?.src ?? ''}
        alt={lightbox?.alt ?? ''}
        isOpen={!!lightbox}
        onClose={() => setLightbox(null)}
      />

      {/* Hero */}
      <section className="section-padding pt-28 md:pt-36">
        <div className="container-fluid">
          <h1 className="text-4xl font-bold md:text-5xl">Shipped Production Platforms</h1>
          <p className="text-subheadline mt-6 max-w-2xl">
            Explore our portfolio of robust, high-performance applications built with clean code and
            delivered with absolute technical precision.
          </p>
        </div>
      </section>

      {/* Project Grid */}
      <section className="section-padding !pt-0">
        <div className="container-fluid">
          <div className="grid gap-10 md:grid-cols-2">
            {PROJECTS.map((project) => (
              <article
                key={project.slug}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#0056D2] hover:shadow-lg dark:border-white/10 dark:bg-[#0B0F19]"
              >
                <div className="relative border-b border-[#0F172A]/5 dark:border-white/5">
                  <div className="flex items-center gap-1.5 border-b border-[#0F172A]/5 bg-[#F8FAFC] px-4 py-2.5 dark:border-white/5 dark:bg-[#0F172A]">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
                    <span className="ml-3 truncate text-xs text-[#475569] dark:text-[#94A3B8]">
                      {project.title}
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
                    <h3 className="text-xl font-bold transition-colors duration-300 group-hover:text-[#0056D2]">
                      {project.title}
                    </h3>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#0F172A]/10 text-[#0F172A]/60 transition-all duration-300 ease-out hover:border-[#0056D2] hover:bg-[#0056D2] hover:text-white dark:border-white/10 dark:text-white/60"
                      aria-label={`View ${project.title} case study`}
                    >
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                  <p className="text-caption-muted mt-3 flex-1">{project.description}</p>
                  <div className="mt-5 border-t border-[#0F172A]/5 pt-5 dark:border-white/5">
                    <TechStackRow stack={project.techStack} />
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding bg-[#0F172A]/[0.02] dark:bg-white/[0.02]">
        <div className="container-fluid">
          <MetricsRow />
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">What Our Partners Say</h2>
            <p className="text-body-muted mx-auto mt-4 max-w-xl">
              Real feedback from the leaders, executives, and organizations we engineer for.
            </p>
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((testimonial) => (
              <div
                key={testimonial.name}
                className="rounded-xl border border-[#0F172A]/10 p-8 transition-all duration-300 ease-out dark:border-white/10"
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#0056D2]/10 text-lg font-bold text-[#0056D2]">
                  {testimonial.name.charAt(0)}
                </div>
                <p className="leading-relaxed text-[#0F172A]/80 dark:text-white/80">
                  "{testimonial.quote}"
                </p>
                <div className="mt-6">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-[#475569] dark:text-[#94A3B8]">{testimonial.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
