import Link from "next/link";
import styles from "./HeroSection.module.css";

const stats = [
  { value: "150+", label: "Projects Delivered" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "5+", label: "Years Experience" },
  { value: "40+", label: "Happy Clients" },
];

export default function HeroSection() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <div className={styles.meshBg} />

      {/* Floating shapes */}
      <div className={styles.shape1} />
      <div className={styles.shape2} />
      <div className={styles.shape3} />

      <div className={styles.inner}>
        {/* Badge */}
        <div className={`section-badge ${styles.badge}`} style={{ animationDelay: "0s" }}>
          🚀 Full-Service Digital Agency
        </div>

        {/* Headline */}
        <h1 className={styles.headline}>
          We Build Digital
          <br />
          <span className={`gradient-text`}>Experiences</span> That
          <br />
          Drive Growth
        </h1>

        {/* Sub */}
        <p className={styles.sub}>
          From stunning websites and powerful mobile apps to WordPress themes, digital marketing
          campaigns, and SEO content — KallemDesign is your end-to-end digital partner.
        </p>

        {/* CTAs */}
        <div className={styles.ctas}>
          <Link href="/contact" className="btn btn-primary" id="hero-cta-primary">
            Start Your Project →
          </Link>
          <Link href="/portfolio" className="btn btn-outline" id="hero-cta-portfolio">
            View Our Work
          </Link>
        </div>

        {/* Trusted by */}
        <p className={styles.trusted}>
          <span>Trusted by growing businesses across India & worldwide</span>
        </p>

        {/* Stats */}
        <div className={styles.stats}>
          {stats.map((s) => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statValue}>{s.value}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <div className={styles.scrollDot} />
      </div>
    </section>
  );
}
