import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/lib/services";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Our Services – Web, Mobile, WordPress, Marketing & Content",
  description:
    "Explore KallemDesign's full range of digital services: web development, mobile app development, web applications, WordPress themes, digital marketing, and content writing.",
  alternates: { canonical: "https://kallemdesign.com/services" },
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="mesh-bg" />
        <div className="container">
          <div className="section-badge" style={{ justifyContent: "center", display: "flex" }}>
            🛠️ What We Offer
          </div>
          <h1 style={{ marginBottom: "20px" }}>
            Comprehensive Digital
            <span className="gradient-text"> Services</span>
          </h1>
          <p style={{ maxWidth: "560px", margin: "0 auto", fontSize: "1.05rem" }}>
            Everything your business needs to thrive online — all under one roof.
            From design to development to marketing, we've got you covered.
          </p>
        </div>
      </section>

      {/* Services grid */}
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {services.map((service, i) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className={styles.card}
                style={{ animationDelay: `${i * 0.08}s` }}
              >
                {/* Color bar */}
                <div className={styles.colorBar} style={{ background: service.color }} />

                <div style={{ padding: "32px" }}>
                  <div
                    className={styles.iconWrap}
                    style={{ background: `${service.color}18`, borderColor: `${service.color}40` }}
                  >
                    <span className={styles.icon}>{service.icon}</span>
                  </div>

                  <h2 className={styles.title}>{service.title}</h2>
                  <p className={styles.desc}>{service.description}</p>

                  {/* Features */}
                  <ul className={styles.features}>
                    {service.features.slice(0, 4).map((f) => (
                      <li key={f} className={styles.feature}>
                        <span style={{ color: service.color }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>

                  <span className={styles.learnMore} style={{ color: service.color }}>
                    Learn More →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* CTA */}
          <div style={{ textAlign: "center", marginTop: "64px" }}>
            <p style={{ color: "var(--text-secondary)", marginBottom: "20px", fontSize: "1.05rem" }}>
              Not sure which service is right for you?
            </p>
            <Link href="/contact" className="btn btn-primary" id="services-cta">
              Talk to Our Experts →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
