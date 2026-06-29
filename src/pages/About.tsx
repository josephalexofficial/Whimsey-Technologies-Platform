import MetricsRow from '../components/MetricsRow'

const VALUES = [
  {
    title: 'Innovation',
    description:
      'Pushing technical boundaries and exploring modern tools to build forward-thinking solutions that keep your systems competitive.',
  },
  {
    title: 'Craftsmanship',
    description:
      'Approaching software development with a deep commitment to writing clean, maintainable code and building rock-solid architectures.',
  },
  {
    title: 'Reliability',
    description:
      'Maintaining rigorous testing standards and careful planning to ensure your digital products perform flawlessly from day one.',
  },
  {
    title: 'Partnership',
    description:
      'Working transparently with your team as a product-minded extension of your business, aligning technical milestones to your actual growth goals.',
  },
]

export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding pt-28 md:pt-36">
        <div className="container-fluid">
          <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl">Whimsey Technologies</h1>
          <p className="mt-6 max-w-3xl text-xl leading-relaxed md:text-2xl">
            Light Up Your Vision With{' '}
            <span className="text-[#0056D2]">Precision-Crafted Tech</span>.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding !py-16">
        <div className="container-fluid">
          <div className="relative grid gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-[#0B0F19] md:p-10">
              <h2 className="text-2xl font-bold">Our Mission</h2>
              <p className="text-body-muted mt-4">
                To build high-performance, predictable software platforms that eliminate complexity
                and turn bold ideas into operational reality.
              </p>
            </div>
            <div className="rounded-2xl border border-[#0F172A]/10 bg-white p-8 shadow-sm transition-colors duration-300 dark:border-white/10 dark:bg-[#0B0F19] md:mt-12 md:p-10">
              <h2 className="text-2xl font-bold">Our Vision</h2>
              <p className="text-body-muted mt-4">
                To set the global standard for engineering discipline, proving that clean code and
                deliberate system architecture are the ultimate foundation for sustainable business
                growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="section-padding !py-16 bg-[#0F172A]/[0.02] dark:bg-white/[0.02]">
        <div className="container-fluid">
          <MetricsRow />
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="container-fluid">
          <h2 className="text-3xl font-bold md:text-4xl">Core Values</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {VALUES.map((value) => (
              <div
                key={value.title}
                className="rounded-xl border border-[#0F172A]/10 p-6 transition-all duration-300 ease-out hover:border-[#0056D2]/30 hover:bg-[#0F172A]/[0.02] dark:border-white/10 dark:hover:bg-white/[0.02]"
              >
                <h3 className="text-lg font-bold">{value.title}</h3>
                <p className="text-caption-muted mt-3">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Build */}
      <section className="section-padding bg-[#0F172A]/[0.02] dark:bg-white/[0.02]">
        <div className="container-fluid max-w-3xl">
          <h2 className="text-3xl font-bold md:text-4xl">How We Build</h2>
          <p className="text-body-muted mt-6">
            Our team consists of senior, product-minded engineers who focus strictly on writing
            scalable code, building resilient integrations, and launching functional software
            systems without the traditional agency overhead.
          </p>
          <p className="text-body-muted mt-4">
            Every project is scoped with precision, executed with discipline, and delivered with the
            documentation and operational readiness your internal team needs to succeed long after
            handover.
          </p>
        </div>
      </section>
    </div>
  )
}
