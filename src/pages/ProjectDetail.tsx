import { useState } from 'react'
import { Link, useParams, Navigate } from 'react-router-dom'
import { ZoomIn } from 'lucide-react'
import { getProjectBySlug } from '../data/projects'
import { TechStackRow } from '../components/TechIcon'
import { ImageLightbox } from '../components/ImageLightbox'

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined
  const [lightboxOpen, setLightboxOpen] = useState(false)

  if (!project) return <Navigate to="/projects" replace />

  return (
    <div>
      <ImageLightbox
        src={project.image}
        alt={project.title}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
      />

      {/* Hero */}
      <section className="section-padding pt-28 md:pt-36">
        <div className="container-fluid">
          <Link
            to="/projects"
            className="thread-link mb-6 inline-flex text-sm text-[#475569] dark:text-[#94A3B8]"
          >
            <span>→</span>
            <span>Back to Projects</span>
          </Link>
          <h1 className="text-4xl font-bold md:text-5xl">{project.title}</h1>
          <p className="text-subheadline mt-6 max-w-3xl">{project.detailDescription}</p>
          <div className="mt-6">
            <TechStackRow stack={project.techStack} />
          </div>
        </div>
      </section>

      {/* Screenshot */}
      <section className="container-fluid pb-12">
        <div className="overflow-hidden rounded-2xl border border-[#0F172A]/10 shadow-lg dark:border-white/10">
          <div className="flex items-center gap-1.5 border-b border-[#0F172A]/5 bg-[#F8FAFC] px-4 py-2.5 dark:border-white/5 dark:bg-[#0F172A]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#28CA41]" />
            <span className="ml-3 truncate text-xs text-[#475569] dark:text-[#94A3B8]">
              {project.title}
            </span>
          </div>
          <button
            type="button"
            onClick={() => setLightboxOpen(true)}
            className="group relative block w-full"
            aria-label={`View full ${project.title} preview`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="max-h-[70vh] w-full object-contain object-top bg-[#0F172A]/5 dark:bg-white/5"
            />
            <span className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-white/95 px-4 py-2 text-sm font-medium text-[#0F172A] opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100 dark:bg-[#0B0F19]/95 dark:text-white">
              <ZoomIn size={16} className="text-[#0056D2]" />
              Expand Preview
            </span>
          </button>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="section-padding bg-[#0F172A]/[0.02] dark:bg-white/[0.02]">
        <div className="container-fluid grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold">The Challenge</h2>
            <p className="text-body-muted mt-4">{project.challenge}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">Our Solution</h2>
            <p className="text-body-muted mt-4">{project.solution}</p>
          </div>
        </div>
      </section>

      {/* Outcomes */}
      <section className="section-padding">
        <div className="container-fluid">
          <h2 className="text-2xl font-bold md:text-3xl">Key Outcomes</h2>
          <ul className="mt-8 space-y-4">
            {project.outcomes.map((outcome) => (
              <li
                key={outcome}
                className="thread-link text-lg text-[#0F172A]/80 dark:text-white/80"
              >
                <span>→</span>
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
          <div className="mt-12">
            <Link to="/contact" className="btn-primary">
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
