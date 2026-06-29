import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import {
  ArrowRight,
  ArrowUpRight,
  ZoomIn,
  AlertCircle,
  Lightbulb,
  CheckCircle2,
  Target,
} from 'lucide-react'
import { getProjectBySlug, PROJECTS } from '../data/projects'
import { TechStackRow } from '../components/TechIcon'
import { ImageLightbox, ProjectImage } from '../components/ImageLightbox'
import SectionHeader from '../components/SectionHeader'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!project) return <Navigate to="/projects" replace />

  const projectIndex = PROJECTS.findIndex((p) => p.slug === slug) + 1
  const relatedProjects = PROJECTS.filter((p) => p.slug !== slug).slice(0, 3)

  return (
    <div className="overflow-x-hidden">
      <ImageLightbox
        src={project.image}
        alt={project.title}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Hero */}
      <section className="relative section-padding pt-28 md:pt-36 lg:pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -right-24 top-0 h-80 w-80 rounded-full bg-[#0056D2]/10 blur-3xl" />
          <div className="absolute -left-32 bottom-0 h-64 w-64 rounded-full bg-[#0056D2]/5 blur-3xl" />
        </div>

        <div className="container-fluid relative">
          <Link
            to="/projects"
            className="thread-link mb-8 inline-flex text-sm text-[#475569] dark:text-[#94A3B8]"
          >
            <span>→</span>
            <span>Back to All Projects</span>
          </Link>

          <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-12">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0056D2]/10 text-sm font-bold text-[#0056D2]">
                  {String(projectIndex).padStart(2, '0')}
                </span>
                <span className="rounded-full border border-[#0056D2]/20 bg-[#0056D2]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0056D2]">
                  Case Study
                </span>
              </div>

              <h1 className="mt-5 text-4xl font-bold leading-[1.1] tracking-tight md:text-5xl">
                {project.title}
              </h1>

              <p className="text-subheadline mt-6 max-w-2xl">{project.detailDescription}</p>

              <div className="mt-8">
                <p className="overline mb-3">Tech Stack</p>
                <TechStackRow stack={project.techStack} />
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to="/contact" className="btn-primary gap-2 px-8 py-3.5">
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="btn-outline gap-2 px-8 py-3.5"
                >
                  <ZoomIn size={18} />
                  Expand Preview
                </button>
              </div>
            </div>

            <div className="hidden lg:col-span-2 lg:block">
              <div className="overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white shadow-xl shadow-[#0056D2]/5 dark:border-white/10 dark:bg-[#0B0F19]">
                <div className="flex items-center gap-1.5 border-b border-[#0F172A]/5 bg-[#F8FAFC] px-4 py-2.5 dark:border-white/5 dark:bg-[#0F172A]">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
                </div>
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  className="group block w-full"
                  aria-label={`View full ${project.title} preview`}
                >
                  <ProjectImage
                    src={project.image}
                    alt={project.title}
                    className="aspect-[4/3]"
                    onOpen={() => setLightboxOpen(true)}
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Full-width Screenshot — mobile emphasis */}
      <section className="container-fluid pb-4 lg:hidden">
        <div className="overflow-hidden rounded-2xl border border-[#0F172A]/10 shadow-lg dark:border-white/10">
          <div className="flex items-center gap-1.5 border-b border-[#0F172A]/5 bg-[#F8FAFC] px-4 py-2.5 dark:border-white/5 dark:bg-[#0F172A]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
            <span className="ml-2 truncate text-xs text-[#475569] dark:text-[#94A3B8]">
              Live Preview
            </span>
          </div>
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="block w-full"
            aria-label="Expand project preview"
          >
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[50vh] w-full object-contain object-top bg-[#0F172A]/5 dark:bg-white/5"
            />
          </button>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding border-t border-[#0F172A]/5 bg-[#F8FAFC] dark:border-white/5 dark:bg-[#080B14]">
        <div className="container-fluid">
          <SectionHeader
            overline="The Story"
            title="Challenge & Solution"
            description="How we identified the core problem and engineered a platform built to solve it at scale."
            align="center"
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:gap-8">
            <div className="group rounded-2xl border border-[#0F172A]/10 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2]/30 hover:shadow-lg dark:border-white/10 dark:bg-[#0B0F19] md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10 text-red-500 transition-colors duration-300 group-hover:bg-red-500 group-hover:text-white">
                <AlertCircle size={22} />
              </div>
              <p className="overline mt-6 !text-red-500/70">The Challenge</p>
              <h3 className="mt-2 text-xl font-bold">Problem Statement</h3>
              <p className="text-body-muted mt-4 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="group rounded-2xl border border-[#0F172A]/10 bg-white p-8 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2]/40 hover:shadow-lg hover:shadow-[#0056D2]/5 dark:border-white/10 dark:bg-[#0B0F19] md:p-10">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2] transition-colors duration-300 group-hover:bg-[#0056D2] group-hover:text-white">
                <Lightbulb size={22} />
              </div>
              <p className="overline mt-6 !text-[#0056D2]/70">Our Solution</p>
              <h3 className="mt-2 text-xl font-bold">Engineering Approach</h3>
              <p className="text-body-muted mt-4 leading-relaxed">{project.solution}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding">
        <div className="container-fluid">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-16">
            <SectionHeader
              overline="Results"
              title="Key Outcomes"
              description="Measurable deliverables and platform capabilities delivered at launch and beyond."
            />

            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-8 dark:border-white/10 dark:bg-[#0B0F19] md:p-10">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#0056D2]/10 text-[#0056D2]">
                  <Target size={20} />
                </div>
                <p className="text-sm font-semibold text-[#0056D2]">Delivered Impact</p>
              </div>
              <ul className="mt-6 space-y-4">
                {project.outcomes.map((outcome) => (
                  <li key={outcome} className="flex items-start gap-3">
                    <CheckCircle2
                      size={20}
                      className="mt-0.5 shrink-0 text-[#0056D2]"
                      aria-hidden="true"
                    />
                    <span className="text-[#0F172A]/80 dark:text-white/80">{outcome}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Related Projects */}
      <section className="section-padding border-t border-[#0F172A]/5 bg-[#F8FAFC] dark:border-white/5 dark:bg-[#080B14]">
        <div className="container-fluid">
          <SectionHeader
            overline="More Work"
            title="Other Case Studies"
            description="Explore additional production platforms from the Whimsey Technologies portfolio."
          />

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedProjects.map((p) => (
              <Link
                key={p.slug}
                to={`/projects/${p.slug}`}
                className="group overflow-hidden rounded-2xl border border-[#0F172A]/10 bg-white transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#0056D2] hover:shadow-lg dark:border-white/10 dark:bg-[#0B0F19]"
              >
                <div className="relative border-b border-[#0F172A]/5 dark:border-white/5">
                  <div className="flex items-center gap-1.5 border-b border-[#0F172A]/5 bg-[#F8FAFC] px-3 py-2 dark:border-white/5 dark:bg-[#0F172A]">
                    <span className="h-2 w-2 rounded-full bg-[#FF5F57]" />
                    <span className="h-2 w-2 rounded-full bg-[#FFBD2E]" />
                    <span className="h-2 w-2 rounded-full bg-[#28CA41]" />
                  </div>
                  <img
                    src={p.image}
                    alt={p.title}
                    className="aspect-video w-full object-cover object-top"
                    loading="lazy"
                  />
                </div>
                <div className="flex items-center justify-between gap-3 p-5">
                  <p className="text-sm font-semibold leading-snug transition-colors group-hover:text-[#0056D2]">
                    {p.title}
                  </p>
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#0F172A]/10 text-[#0F172A]/30 transition-all group-hover:border-[#0056D2] group-hover:bg-[#0056D2] group-hover:text-white dark:border-white/10 dark:text-white/30">
                    <ArrowUpRight size={14} />
                  </span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-8">
            <Link to="/projects" className="thread-link text-sm font-medium text-[#0056D2]">
              <span>View All Projects</span>
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
                Build With Us
              </p>
              <h2 className="mt-4 text-3xl font-bold tracking-tight text-white md:text-4xl">
                Want a platform like this for your business?
              </h2>
              <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-white/85">
                Share your project requirements — we'll respond within one business day with a clear
                technical roadmap.
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
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
