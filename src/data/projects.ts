export interface Project {
  slug: string
  title: string
  image: string
  description: string
  techStack: string[]
  detailDescription: string
  challenge: string
  solution: string
  outcomes: string[]
}

export const PROJECTS: Project[] = [
  {
    slug: 'hightech-international',
    title: 'HighTech International Website',
    image: '/projects/Hightech.png',
    description:
      'A full-stack institutional platform featuring an interactive multi-step student enrollment system, a secure admin applicant tracker, and a dynamic departmental course management directory.',
    techStack: ['React', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'JWT'],
    detailDescription:
      'HighTech International needed a comprehensive digital platform to modernize their student enrollment pipeline and administrative operations.',
    challenge:
      'The institution relied on fragmented manual processes for student applications, course management, and departmental coordination — creating bottlenecks and data inconsistencies.',
    solution:
      'We engineered a full-stack platform with a multi-step enrollment wizard, secure JWT-authenticated admin dashboard, and dynamic course directory with real-time applicant tracking.',
    outcomes: [
      'Streamlined multi-step enrollment portal',
      'Secure admin applicant tracking system',
      'Dynamic departmental course management',
      'Reduced manual data entry by 80%',
    ],
  },
  {
    slug: 'skilllink',
    title: 'SkillLink',
    image: '/projects/SkillLink.png',
    description:
      'A full-stack data-driven marketplace that formalizes the informal labor economy through decoupled React/Laravel architecture, transaction-locked reputation ledgers, and dynamic PDF work transcript engines.',
    techStack: ['React', 'Laravel', 'Tailwind CSS', 'MySQL', 'PHP'],
    detailDescription:
      'SkillLink bridges the gap between informal workers and formal employment opportunities through a reputation-driven marketplace platform.',
    challenge:
      'Informal labor markets lack verifiable work history and trust mechanisms, making it difficult for skilled workers to access formal opportunities.',
    solution:
      'We built a decoupled React/Laravel marketplace with transaction-locked reputation ledgers, dynamic PDF work transcripts, and verified skill matching algorithms.',
    outcomes: [
      'Formalized informal labor marketplace',
      'Transaction-locked reputation system',
      'Dynamic PDF work transcript generation',
      'Verified skill-to-opportunity matching',
    ],
  },
  {
    slug: 'gladys-erude-org',
    title: 'The Gladys Erude Organization Platform',
    image: '/projects/GladysErude.png',
    description:
      'A high-performance, cross-border web platform featuring optimized multi-category media filters, an integrated e-commerce shop, and multi-currency fundraising architectures (USD/KES) to eliminate donor friction.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Stripe'],
    detailDescription:
      'The Gladys Erude Organization required a cross-border platform to showcase their mission, sell merchandise, and accept international donations seamlessly.',
    challenge:
      'Managing multi-currency donations, media-rich content, and e-commerce operations across borders created significant donor friction and operational complexity.',
    solution:
      'We delivered a Next.js platform with optimized media filters, integrated Stripe-powered e-commerce, and dual-currency (USD/KES) fundraising architecture.',
    outcomes: [
      'Multi-currency donation processing',
      'Integrated e-commerce storefront',
      'Optimized media gallery with filters',
      'Cross-border payment support',
    ],
  },
  {
    slug: 'inner-harbour-resort',
    title: 'Inner Harbour Resort Website',
    image: '/projects/InnerHarbor.png',
    description:
      'A premium hospitality platform featuring an interactive room catalog with client-side pricing filters, a digital restaurant ordering hub, and dedicated geolocated lakeside package modules.',
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Node.js', 'Framer Motion'],
    detailDescription:
      'Inner Harbour Resort needed a premium digital presence to showcase their lakeside accommodations and streamline guest booking experiences.',
    challenge:
      'Guests struggled to browse room options, compare packages, and place restaurant orders through outdated, non-responsive digital channels.',
    solution:
      'We crafted a premium hospitality platform with interactive room catalogs, client-side pricing filters, digital restaurant ordering, and geolocated package modules.',
    outcomes: [
      'Interactive room catalog with live filters',
      'Digital restaurant ordering hub',
      'Geolocated lakeside package modules',
      'Improved guest booking conversion',
    ],
  },
  {
    slug: 'dynamic-pictures-media',
    title: 'Dynamic Pictures Media Platform',
    image: '/projects/Dynamic.png',
    description:
      'A high-performance multimedia portfolio platform featuring an instant client-side media filtering gallery, asset lazy-loading optimization for slow networks, and dynamic client intake funnels.',
    techStack: ['React', 'Tailwind CSS', 'Vite', 'Node.js', 'Framer Motion'],
    detailDescription:
      'Dynamic Pictures Media required a portfolio platform capable of showcasing heavy media assets without compromising load performance.',
    challenge:
      'Large media files caused severe network lag, and the existing client onboarding process lacked structure and automation.',
    solution:
      'We built a Vite-powered portfolio with instant client-side media filtering, aggressive lazy-loading optimization, and dynamic client intake funnels.',
    outcomes: [
      'Eliminated network lag on media-heavy pages',
      'Instant client-side gallery filtering',
      'Streamlined client onboarding funnel',
      'Optimized asset delivery pipeline',
    ],
  },
  {
    slug: 'alex-joseph-portfolio',
    title: 'Alex Joseph Portfolio',
    image: '/projects/Alex%20Joseph.png',
    description:
      'An ultra-minimalist developer brand hub featuring fluid micro-interactions, dark-mode styling blocks, and an asynchronous technical playbook infrastructure built for clear architectural storytelling.',
    techStack: ['Vite', 'React', 'Tailwind CSS'],
    detailDescription:
      'A personal developer portfolio engineered as a minimalist brand hub with architectural storytelling at its core.',
    challenge:
      'The developer needed a portfolio that communicated technical depth and design sensibility without generic template aesthetics.',
    solution:
      'We created an ultra-minimalist hub with fluid micro-interactions, dual-theme styling, and an asynchronous technical playbook for architectural storytelling.',
    outcomes: [
      'Distinctive minimalist brand identity',
      'Fluid micro-interaction system',
      'Dark-mode native design blocks',
      'Asynchronous technical playbook',
    ],
  },
]

export const TESTIMONIALS = [
  {
    name: 'John Obwoge',
    role: 'Principal, Hightech College',
    quote:
      'Whimsey Tech transformed our entire enrollment process. They replaced our complex manual systems with a beautifully streamlined multi-step portal that drastically simplified tracking applicant data from day one.',
    projectSlug: 'hightech-international',
  },
  {
    name: 'Mulusa Norris',
    role: 'CEO, Dynamic Pictures Media',
    quote:
      'The custom portfolio platform delivered by their team handles heavy media files effortlessly. Network lag is completely eliminated, and our client onboarding funnel has never run more smoothly.',
    projectSlug: 'dynamic-pictures-media',
  },
  {
    name: 'Harmasson Lukale',
    role: 'Manager, Inner Harbour Resort',
    quote:
      'Our digital room catalog and restaurant booking modules are incredibly fast and reliable. Guests frequently comment on the smooth filters, and our backend planning is now flawlessly organized.',
    projectSlug: 'inner-harbour-resort',
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return PROJECTS.find((p) => p.slug === slug)
}
