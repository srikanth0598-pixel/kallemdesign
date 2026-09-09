import Link from "next/link";
import { services } from "@/lib/services";
import styles from "./ServicesSection.module.css";

export default function ServicesSection() {
  return (
    <section className={`section ${styles.section}`} id="services">
      <div className={styles.meshBg} />
      <div className="container">
        <div className="section-badge" style={{ display: "flex", justifyContent: "center" }}>
          <span>🛠️ What We Do</span>
        </div>
        <h2 className={`section-heading ${styles.heading}`}>
          Services Built for
          <span className="gradient-text"> Modern Businesses</span>
        </h2>
        <p className="section-subheading">
          We combine cutting-edge technology with creative strategy to deliver solutions
          that make a real impact on your business growth.
        </p>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className={styles.card}
              style={{ animationDelay: `${i * 0.08}s` }}
            >
              <div className={styles.iconWrap} style={{ background: `${service.color}18`, borderColor: `${service.color}40` }}>
                <span className={styles.icon}>{service.icon}</span>
              </div>
              <h3 className={styles.title}>{service.title}</h3>
              <p className={styles.desc}>{service.description}</p>
              <div className={styles.meta}>
                <span className={styles.price}>{service.price}</span>
                <span className={styles.arrow} style={{ color: service.color }}>→</span>
              </div>
              <div className={styles.tags}>
                {service.technologies.slice(0, 3).map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>

        <div className={styles.cta}>
          <Link href="/services" className="btn btn-outline">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}
