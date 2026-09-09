export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  longDescription: string;
  icon: string;
  features: string[];
  technologies: string[];
  color: string;
}

export const services: Service[] = [
  {
    slug: "web-development",
    title: "Web Development",
    shortTitle: "Web Dev",
    description:
      "Custom, high-performance websites built with the latest technologies. From landing pages to complex web platforms.",
    longDescription:
      "We craft pixel-perfect, blazing-fast websites that convert visitors into customers. Our web development team specialises in modern frontend frameworks, robust backend architectures, and cloud-native deployments. Every project is built with performance, security, and scalability in mind — ready to grow with your business.",
    icon: "🖥️",
    features: [
      "Responsive & mobile-first design",
      "Performance-optimised (Core Web Vitals)",
      "SEO-ready markup & structured data",
      "CMS integration (Headless / WordPress)",
      "E-commerce (Shopify / WooCommerce)",
      "API & third-party integrations",
      "Maintenance & support plans",
    ],
    technologies: ["Next.js", "React", "Node.js", "TypeScript", "PostgreSQL", "AWS / Vercel"],
    color: "#E86A4A",
  },
  {
    slug: "mobile-apps",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android that deliver exceptional user experiences.",
    longDescription:
      "From idea to App Store, we build powerful mobile applications that users love. Our mobile team creates cross-platform apps using React Native and Flutter, and native experiences with Swift/Kotlin when performance demands it. We handle the full lifecycle — UX research, design, development, testing, and launch.",
    icon: "📱",
    features: [
      "Cross-platform (iOS & Android)",
      "Native performance & feel",
      "Offline-first architecture",
      "Push notifications & in-app messaging",
      "Payment gateway integration",
      "Analytics & crash reporting",
      "App Store / Play Store submission",
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "Expo"],
    color: "#F2A65A",
  },
  {
    slug: "web-applications",
    title: "Web Application Development",
    shortTitle: "Web Apps",
    description:
      "Scalable SaaS platforms, dashboards, and enterprise web apps with complex business logic and real-time features.",
    longDescription:
      "We engineer sophisticated web applications that power modern businesses. Whether you need a multi-tenant SaaS product, an internal dashboard, a booking system, or a real-time collaboration tool — we architect and build it. Our solutions handle thousands of concurrent users with rock-solid reliability.",
    icon: "⚡",
    features: [
      "SaaS & multi-tenant architecture",
      "Real-time features (WebSockets)",
      "Role-based access control",
      "Data visualisation & dashboards",
      "Microservices & serverless",
      "CI/CD pipelines",
      "99.9% uptime SLA",
    ],
    technologies: ["Next.js", "React", "GraphQL", "Redis", "Docker", "Kubernetes"],
    color: "#62C7A2",
  },
  {
    slug: "wordpress",
    title: "WordPress Development",
    shortTitle: "WordPress",
    description:
      "Premium custom WordPress themes, plugins, and WooCommerce stores built for speed, flexibility, and ease of use.",
    longDescription:
      "We build WordPress solutions that look stunning and perform brilliantly. Our team creates bespoke themes from scratch, custom Gutenberg blocks, and tailor-made plugins that give you full control over your content. Every WordPress build includes speed optimisation, security hardening, and a training session so you can manage it confidently.",
    icon: "🎨",
    features: [
      "Custom theme development from scratch",
      "Gutenberg block development",
      "WooCommerce store setup & customisation",
      "Plugin development & integration",
      "Speed & performance optimisation",
      "Security hardening",
      "Content migration",
    ],
    technologies: ["WordPress", "PHP", "WooCommerce", "ACF", "Elementor", "Gutenberg"],
    color: "#F0B45B",
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    description:
      "Data-driven digital marketing strategies that grow your brand visibility, traffic, and revenue across all channels.",
    longDescription:
      "We grow your business online with proven digital marketing strategies. Our team handles everything from SEO and Google Ads to social media management and email campaigns. We focus on measurable results — more qualified traffic, higher conversion rates, and a stronger return on your marketing investment.",
    icon: "📈",
    features: [
      "Search Engine Optimisation (SEO)",
      "Google Ads & PPC management",
      "Social media marketing",
      "Email marketing campaigns",
      "Conversion rate optimisation (CRO)",
      "Analytics & monthly reporting",
      "Competitor analysis",
    ],
    technologies: ["Google Ads", "Meta Ads", "SEMrush", "GA4", "Mailchimp", "HubSpot"],
    color: "#74A9A8",
  },
  {
    slug: "content-writing",
    title: "Content Writing",
    shortTitle: "Content",
    description:
      "Compelling, SEO-optimised content that engages your audience, builds authority, and drives organic traffic.",
    longDescription:
      "Great content is the backbone of every successful digital strategy. Our experienced writers create everything from blog posts and website copy to product descriptions and case studies. Every piece is thoroughly researched, SEO-optimised, and crafted to match your brand voice — so your content actually converts.",
    icon: "✍️",
    features: [
      "Website copywriting",
      "SEO blog articles & long-form content",
      "Product & service descriptions",
      "Social media captions",
      "Email sequences",
      "Case studies & whitepapers",
      "Technical writing",
    ],
    technologies: ["SEMrush", "Ahrefs", "Grammarly", "SurferSEO", "Jasper", "Canva"],
    color: "#D98272",
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
