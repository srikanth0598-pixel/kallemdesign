export interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  tags: string[];
  gradient: string;
  emoji: string;
  results?: string;
}

export const projects: Project[] = [
  {
    id: "ecom-platform",
    title: "ShopNest E-Commerce",
    category: "Web Development",
    categorySlug: "web-development",
    description:
      "A high-performance e-commerce platform with real-time inventory, AI product recommendations, and multi-currency checkout.",
    tags: ["Next.js", "Node.js", "Stripe", "PostgreSQL"],
    gradient: "linear-gradient(135deg, #6C63FF 0%, #4834d4 100%)",
    emoji: "🛍️",
    results: "340% increase in conversion rate",
  },
  {
    id: "fitness-app",
    title: "FitFlow Mobile App",
    category: "Mobile Apps",
    categorySlug: "mobile-apps",
    description:
      "Cross-platform fitness tracking app with AI-generated workout plans, wearable sync, and social challenges.",
    tags: ["React Native", "Firebase", "TensorFlow Lite"],
    gradient: "linear-gradient(135deg, #FF6584 0%, #c62a6a 100%)",
    emoji: "💪",
    results: "50,000+ downloads in first month",
  },
  {
    id: "saas-dashboard",
    title: "AnalyticsPro SaaS",
    category: "Web Applications",
    categorySlug: "web-applications",
    description:
      "Real-time analytics dashboard for marketing teams with custom report builder, team collaboration, and white-label options.",
    tags: ["React", "GraphQL", "Redis", "WebSocket"],
    gradient: "linear-gradient(135deg, #43E97B 0%, #38a169 100%)",
    emoji: "📊",
    results: "Used by 200+ businesses",
  },
  {
    id: "restaurant-wordpress",
    title: "Savoria Restaurant Theme",
    category: "WordPress",
    categorySlug: "wordpress",
    description:
      "A premium WordPress theme for restaurants with online reservations, menu management, and POS integration.",
    tags: ["WordPress", "PHP", "WooCommerce", "ACF"],
    gradient: "linear-gradient(135deg, #F7971E 0%, #e67e22 100%)",
    emoji: "🍽️",
    results: "1,200+ theme sales",
  },
  {
    id: "seo-campaign",
    title: "TechStartup SEO Campaign",
    category: "Digital Marketing",
    categorySlug: "digital-marketing",
    description:
      "Full-scale SEO & Google Ads campaign for a B2B SaaS startup, growing organic traffic from zero to 80K/month in 8 months.",
    tags: ["SEO", "Google Ads", "Content Strategy", "GA4"],
    gradient: "linear-gradient(135deg, #A18CD1 0%, #6c5ce7 100%)",
    emoji: "🚀",
    results: "80K monthly organic visitors",
  },
  {
    id: "content-strategy",
    title: "MedTech Content Hub",
    category: "Content Writing",
    categorySlug: "content-writing",
    description:
      "Comprehensive content strategy and execution for a healthcare technology company — 60 SEO articles, case studies, and white papers.",
    tags: ["SEO Writing", "Technical Content", "Case Studies"],
    gradient: "linear-gradient(135deg, #F953C6 0%, #b91c8b 100%)",
    emoji: "✍️",
    results: "420% traffic growth in 6 months",
  },
];
