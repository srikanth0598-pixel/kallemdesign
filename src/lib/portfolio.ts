export interface Project {
  id: string;
  title: string;
  category: string;
  categorySlug: string;
  description: string;
  tags: string[];
  gradient: string;
  image: string;
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
    gradient: "linear-gradient(135deg, #E86A4A 0%, #B84736 100%)",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=85",
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
    gradient: "linear-gradient(135deg, #F2A65A 0%, #C9792F 100%)",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=85",
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
    gradient: "linear-gradient(135deg, #62C7A2 0%, #378F78 100%)",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=85",
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
    gradient: "linear-gradient(135deg, #F0B45B 0%, #C9852D 100%)",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85",
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
    gradient: "linear-gradient(135deg, #74A9A8 0%, #467D7D 100%)",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=85",
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
    gradient: "linear-gradient(135deg, #D98272 0%, #A94F4F 100%)",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead?auto=format&fit=crop&w=1200&q=85",
    emoji: "✍️",
    results: "420% traffic growth in 6 months",
  },
];
