export interface Service {
  slug: string
  title: string
  shortTitle: string
  description: string
  heroTitle: string
  heroSubtitle: string
  quadrants: {
    title: string
    subtitle: string
    items: string[]
  }[]
  techStack: string[]
}

export const SERVICES: Service[] = [
  {
    slug: 'web-engineering',
    title: 'Full-Stack Web Engineering',
    shortTitle: 'Web Engineering',
    description:
      'We architect responsive, high-performance web applications with seamless front-end experiences backed by secure, scalable server infrastructure. Every layer is engineered for speed, maintainability, and long-term growth.',
    heroTitle: 'Scalable Web Ecosystems',
    heroSubtitle:
      'We build full-stack web platforms that deliver lightning-fast user experiences backed by robust, secure server architectures. From responsive interfaces to API-driven backends, every layer is engineered for performance and scale.',
    quadrants: [
      {
        title: 'Core Engineering Strategy',
        subtitle: 'Foundation-first architecture',
        items: ['Component-driven UI systems', 'RESTful & GraphQL APIs', 'State management patterns', 'Performance budgets'],
      },
      {
        title: 'Modern Framework Adaptability',
        subtitle: 'Battle-tested stack selection',
        items: ['React & Next.js ecosystems', 'TypeScript-first development', 'Tailwind CSS design systems', 'SSR & SSG optimization'],
      },
      {
        title: 'Integration & Ecosystem Depth',
        subtitle: 'Connected digital infrastructure',
        items: ['Third-party API integrations', 'Payment gateway wiring', 'CMS & headless content', 'Real-time data pipelines'],
      },
      {
        title: 'Enterprise Security & Compliance',
        subtitle: 'Hardened from day one',
        items: ['JWT & OAuth authentication', 'Role-based access control', 'Data encryption at rest', 'OWASP security audits'],
      },
    ],
    techStack: ['React', 'Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS'],
  },
  {
    slug: 'mobile-development',
    title: 'Mobile Application Development',
    shortTitle: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications engineered for fluid performance, intuitive workflows, and seamless device integration. We deliver apps that users love and businesses can scale.',
    heroTitle: 'High-Performance Mobile Apps',
    heroSubtitle:
      'We craft native and cross-platform mobile experiences optimized for speed, offline resilience, and intuitive user flows. Every app is built to perform flawlessly across iOS and Android ecosystems.',
    quadrants: [
      {
        title: 'Core Engineering Strategy',
        subtitle: 'Mobile-first product thinking',
        items: ['Cross-platform architecture', 'Offline-first data sync', 'Push notification systems', 'App store deployment'],
      },
      {
        title: 'Modern Framework Adaptability',
        subtitle: 'Platform-optimized tooling',
        items: ['React Native & Expo', 'Flutter development', 'Native Swift & Kotlin', 'Progressive Web Apps'],
      },
      {
        title: 'Integration & Ecosystem Depth',
        subtitle: 'Connected mobile experiences',
        items: ['Backend API synchronization', 'Payment & wallet integration', 'GPS & sensor APIs', 'Social auth providers'],
      },
      {
        title: 'Enterprise Security & Compliance',
        subtitle: 'Secure mobile operations',
        items: ['Biometric authentication', 'Secure keychain storage', 'Certificate pinning', 'App transport security'],
      },
    ],
    techStack: ['React Native', 'Flutter', 'TypeScript', 'Firebase', 'Node.js', 'SQLite'],
  },
  {
    slug: 'enterprise-software',
    title: 'Custom Enterprise Software',
    shortTitle: 'Enterprise Software',
    description:
      'Tailored internal platforms that automate corporate workflows, eliminate operational friction, and scale with your organization. We engineer systems your teams actually want to use.',
    heroTitle: 'Enterprise-Grade Internal Platforms',
    heroSubtitle:
      'We design and deploy custom enterprise software that streamlines operations, automates repetitive workflows, and gives leadership real-time visibility into business performance.',
    quadrants: [
      {
        title: 'Core Engineering Strategy',
        subtitle: 'Workflow-centric design',
        items: ['Business process mapping', 'Modular microservices', 'Event-driven architecture', 'Audit trail systems'],
      },
      {
        title: 'Modern Framework Adaptability',
        subtitle: 'Enterprise stack flexibility',
        items: ['React admin dashboards', 'Laravel & .NET backends', 'Docker containerization', 'Message queue systems'],
      },
      {
        title: 'Integration & Ecosystem Depth',
        subtitle: 'Unified operational hub',
        items: ['ERP & CRM connectors', 'Legacy system bridges', 'SSO & directory services', 'Reporting & analytics APIs'],
      },
      {
        title: 'Enterprise Security & Compliance',
        subtitle: 'Governance-ready systems',
        items: ['Multi-tenant isolation', 'SOC 2 compliance patterns', 'Data retention policies', 'Granular permission models'],
      },
    ],
    techStack: ['React', 'Laravel', 'PostgreSQL', 'Redis', 'Docker', 'AWS'],
  },
  {
    slug: 'api-integration',
    title: 'API Design & System Integration',
    shortTitle: 'API Integration',
    description:
      'Robust API architectures and seamless system integrations that connect your digital ecosystem. We design interfaces that are developer-friendly, version-stable, and built for high throughput.',
    heroTitle: 'High-Throughput API Architecture',
    heroSubtitle:
      'We engineer resilient API layers and system integrations that unify your technology stack. Clean contracts, comprehensive documentation, and fault-tolerant design keep your ecosystem connected.',
    quadrants: [
      {
        title: 'Core Engineering Strategy',
        subtitle: 'API-first product design',
        items: ['RESTful resource modeling', 'GraphQL schema design', 'Webhook event systems', 'Rate limiting & throttling'],
      },
      {
        title: 'Modern Framework Adaptability',
        subtitle: 'Integration-ready tooling',
        items: ['OpenAPI specification', 'Postman collections', 'gRPC service meshes', 'Message broker patterns'],
      },
      {
        title: 'Integration & Ecosystem Depth',
        subtitle: 'Seamless data exchange',
        items: ['Third-party API adapters', 'ETL pipeline design', 'Middleware orchestration', 'Real-time sync engines'],
      },
      {
        title: 'Enterprise Security & Compliance',
        subtitle: 'Protected data flows',
        items: ['OAuth 2.0 & API keys', 'Request signing & validation', 'IP whitelisting', 'Encrypted payload transport'],
      },
    ],
    techStack: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis', 'Kong', 'Swagger'],
  },
  {
    slug: 'cloud-devops',
    title: 'Cloud Architecture & DevOps',
    shortTitle: 'Cloud & DevOps',
    description:
      'Cloud-native infrastructure and DevOps pipelines that ensure your applications deploy reliably, scale effortlessly, and recover gracefully. We build the operational backbone your engineering team deserves.',
    heroTitle: 'Cloud-Native Infrastructure',
    heroSubtitle:
      'We architect cloud environments and CI/CD pipelines that automate deployments, enforce infrastructure-as-code, and keep your production systems observable and resilient around the clock.',
    quadrants: [
      {
        title: 'Core Engineering Strategy',
        subtitle: 'Infrastructure as code',
        items: ['Terraform & CloudFormation', 'Container orchestration', 'Blue-green deployments', 'Disaster recovery planning'],
      },
      {
        title: 'Modern Framework Adaptability',
        subtitle: 'Cloud platform expertise',
        items: ['AWS & Azure services', 'Kubernetes clusters', 'Serverless functions', 'CDN & edge computing'],
      },
      {
        title: 'Integration & Ecosystem Depth',
        subtitle: 'Connected operations',
        items: ['GitHub Actions pipelines', 'Monitoring & alerting', 'Log aggregation systems', 'Secrets management'],
      },
      {
        title: 'Enterprise Security & Compliance',
        subtitle: 'Hardened cloud posture',
        items: ['VPC network isolation', 'IAM policy design', 'Encryption key management', 'Compliance scanning'],
      },
    ],
    techStack: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'Grafana'],
  },
  {
    slug: 'database-architecture',
    title: 'Database Architecture & Optimization',
    shortTitle: 'Database Architecture',
    description:
      'Strategic database design, query optimization, and data architecture that keeps your applications fast under load. We engineer data layers built for integrity, performance, and future scale.',
    heroTitle: 'Optimized Data Architecture',
    heroSubtitle:
      'We design database schemas, indexing strategies, and replication topologies that deliver sub-millisecond query performance while maintaining absolute data integrity across your platform.',
    quadrants: [
      {
        title: 'Core Engineering Strategy',
        subtitle: 'Data modeling excellence',
        items: ['Normalized schema design', 'Indexing strategy planning', 'Migration frameworks', 'Backup & recovery systems'],
      },
      {
        title: 'Modern Framework Adaptability',
        subtitle: 'Multi-engine proficiency',
        items: ['PostgreSQL & MySQL', 'MongoDB & Redis', 'Elasticsearch clusters', 'Data warehouse design'],
      },
      {
        title: 'Integration & Ecosystem Depth',
        subtitle: 'Connected data flows',
        items: ['ORM optimization', 'Read replica scaling', 'Caching layer design', 'ETL & data pipelines'],
      },
      {
        title: 'Enterprise Security & Compliance',
        subtitle: 'Protected data assets',
        items: ['Row-level security', 'Encryption at rest', 'Access audit logging', 'GDPR compliance patterns'],
      },
    ],
    techStack: ['PostgreSQL', 'MySQL', 'Redis', 'MongoDB', 'Prisma', 'Elasticsearch'],
  },
  {
    slug: 'workflow-automation',
    title: 'Workflow Automation Engines',
    shortTitle: 'Workflow Automation',
    description:
      'Intelligent automation engines that eliminate manual bottlenecks and orchestrate complex business processes. We build systems that work while your team focuses on high-value decisions.',
    heroTitle: 'Intelligent Process Automation',
    heroSubtitle:
      'We engineer workflow automation engines that connect your tools, trigger actions based on business rules, and eliminate repetitive manual tasks across your entire organization.',
    quadrants: [
      {
        title: 'Core Engineering Strategy',
        subtitle: 'Process orchestration',
        items: ['Workflow state machines', 'Rule engine design', 'Scheduled job systems', 'Approval chain logic'],
      },
      {
        title: 'Modern Framework Adaptability',
        subtitle: 'Automation tooling',
        items: ['Zapier & n8n integrations', 'Custom bot frameworks', 'Queue-based workers', 'Event sourcing patterns'],
      },
      {
        title: 'Integration & Ecosystem Depth',
        subtitle: 'Toolchain connectivity',
        items: ['Slack & email triggers', 'CRM automation hooks', 'Document generation', 'Notification routing'],
      },
      {
        title: 'Enterprise Security & Compliance',
        subtitle: 'Governed automation',
        items: ['Action audit trails', 'Permission-gated triggers', 'Data validation gates', 'Rollback mechanisms'],
      },
    ],
    techStack: ['Node.js', 'BullMQ', 'Redis', 'PostgreSQL', 'n8n', 'Python'],
  },
  {
    slug: 'ui-ux-prototyping',
    title: 'UI/UX Software Prototyping',
    shortTitle: 'UI/UX Prototyping',
    description:
      'High-fidelity prototypes and design systems that validate product concepts before a single line of production code is written. We bridge the gap between vision and engineering reality.',
    heroTitle: 'Precision UI/UX Prototyping',
    heroSubtitle:
      'We craft interactive prototypes and design systems that validate user flows, test product assumptions, and give stakeholders a tangible preview of the final experience before development begins.',
    quadrants: [
      {
        title: 'Core Engineering Strategy',
        subtitle: 'User-centered design',
        items: ['User journey mapping', 'Wireframe architecture', 'Design system tokens', 'Accessibility standards'],
      },
      {
        title: 'Modern Framework Adaptability',
        subtitle: 'Prototype tooling',
        items: ['Figma design systems', 'Interactive React prototypes', 'Motion design patterns', 'Responsive breakpoints'],
      },
      {
        title: 'Integration & Ecosystem Depth',
        subtitle: 'Design-to-dev handoff',
        items: ['Component specification docs', 'Asset export pipelines', 'Design token sync', 'Usability test frameworks'],
      },
      {
        title: 'Enterprise Security & Compliance',
        subtitle: 'Inclusive design standards',
        items: ['WCAG 2.1 compliance', 'Screen reader optimization', 'Color contrast validation', 'Keyboard navigation flows'],
      },
    ],
    techStack: ['Figma', 'React', 'Tailwind CSS', 'Framer Motion', 'Storybook', 'TypeScript'],
  },
  {
    slug: 'ecommerce-engineering',
    title: 'E-Commerce Platform Engineering',
    shortTitle: 'E-Commerce Engineering',
    description:
      'High-conversion e-commerce platforms with secure payment flows, inventory management, and multi-currency support. We engineer storefronts that sell and backends that scale.',
    heroTitle: 'High-Conversion Commerce Platforms',
    heroSubtitle:
      'We build e-commerce platforms engineered for conversion optimization, secure payment processing, and inventory management at scale — from single-storefront launches to multi-vendor marketplaces.',
    quadrants: [
      {
        title: 'Core Engineering Strategy',
        subtitle: 'Commerce-first architecture',
        items: ['Cart & checkout flows', 'Inventory management', 'Order fulfillment systems', 'Multi-currency support'],
      },
      {
        title: 'Modern Framework Adaptability',
        subtitle: 'Commerce stack expertise',
        items: ['Headless commerce APIs', 'Stripe & PayPal integration', 'Product catalog engines', 'Search & filter systems'],
      },
      {
        title: 'Integration & Ecosystem Depth',
        subtitle: 'Omnichannel connectivity',
        items: ['Shipping provider APIs', 'Tax calculation engines', 'Email marketing hooks', 'Analytics & conversion tracking'],
      },
      {
        title: 'Enterprise Security & Compliance',
        subtitle: 'PCI-compliant operations',
        items: ['PCI DSS compliance', 'Fraud detection systems', 'SSL & payment tokenization', 'GDPR data handling'],
      },
    ],
    techStack: ['React', 'Next.js', 'Stripe', 'Node.js', 'PostgreSQL', 'Redis'],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
