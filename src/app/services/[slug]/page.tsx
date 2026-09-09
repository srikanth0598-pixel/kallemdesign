import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug } from "@/lib/services";
import styles from "./page.module.css";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};
  return {
    title: `${service.title} Services | KallemDesign`,
    description: service.description,
    alternates: { canonical: `https://kallemdesign.com/services/${slug}` },
    openGraph: {
      title: `${service.title} | KallemDesign`,
      description: service.description,
    },
  };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const others = services.filter((s) => s.slug !== slug).slice(0, 3);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    provider: { "@type": "Organization", name: "KallemDesign" },
    description: service.longDescription,
    offers: {
      "@type": "Offer",
      price: service.price,
      priceCurrency: "INR",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg} style={{ background: `radial-gradient(ellipse 60% 50% at 60% 0%, ${service.color}18 0%, transparent 70%)` }} />
        <div className="container">
          <Link href="/services" className={styles.breadcrumb}>
            ← All Services
          </Link>
          <div className={styles.heroInner}>
            <div>
              <div
                className={styles.iconWrap}
                style={{ background: `${service.color}18`, borderColor: `${service.color}40` }}
              >
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h1 className={styles.heroTitle}>{service.title}</h1>
              <p className={styles.heroDesc}>{service.longDescription}</p>

              <div className={styles.heroCtas}>
                <Link href="/contact" className="btn btn-primary" id={`${slug}-cta-primary`}>
                  Get a Free Quote →
                </Link>
                <Link href="/portfolio" className="btn btn-outline" id={`${slug}-cta-portfolio`}>
                  See Our Work
                </Link>
              </div>
            </div>

            {/* Info card */}
            <div className={styles.infoCard}>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Starting From</span>
                <span className={styles.infoValue} style={{ color: service.color }}>{service.price}</span>
              </div>
              <div className={styles.infoRow}>
                <span className={styles.infoLabel}>Delivery Time</span>
                <span className={styles.infoValue}>{service.deliveryTime}</span>
              </div>
              <div className={styles.divider} />
              <p className={styles.infoNote}>
                💬 Every project is custom-quoted. Contact us for an exact estimate.
              </p>
              <Link href="/contact" className="btn btn-primary" style={{ width: "100%", justifyContent: "center" }}>
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* What's included + Technologies */}
      <section className="section">
        <div className="container">
          <div className={styles.detailGrid}>
            {/* Features */}
            <div>
              <h2 className={styles.sectionTitle}>What's Included</h2>
              <ul className={styles.featureList}>
                {service.features.map((f) => (
                  <li key={f} className={styles.featureItem}>
                    <span className={styles.featureCheck} style={{ color: service.color }}>✓</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Technologies */}
            <div>
              <h2 className={styles.sectionTitle}>Technologies We Use</h2>
              <div className={styles.techGrid}>
                {service.technologies.map((t) => (
                  <div key={t} className={styles.techBadge} style={{ borderColor: `${service.color}40` }}>
                    {t}
                  </div>
                ))}
              </div>

              <div className={styles.processBox}>
                <h3 className={styles.processTitle}>Our Process</h3>
                {["Discovery & Requirements", "Design & Prototype", "Development & Testing", "Launch & Support"].map(
                  (step, i) => (
                    <div key={step} className={styles.processStep}>
                      <div className={styles.stepNum} style={{ background: `${service.color}20`, color: service.color }}>
                        {i + 1}
                      </div>
                      <span className={styles.stepLabel}>{step}</span>
                    </div>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="section" style={{ background: "#0d0d14" }}>
        <div className="container">
          <h2 className={styles.sectionTitle} style={{ marginBottom: "28px" }}>
            Explore Other Services
          </h2>
          <div className={styles.otherGrid}>
            {others.map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className={styles.otherCard}>
                <span className={styles.otherIcon}>{s.icon}</span>
                <div>
                  <div className={styles.otherTitle}>{s.title}</div>
                  <div className={styles.otherDesc}>{s.description.slice(0, 80)}…</div>
                </div>
                <span className={styles.otherArrow} style={{ color: s.color }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
