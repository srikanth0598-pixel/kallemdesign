import Link from "next/link";
import styles from "./CTASection.module.css";

export default function CTASection() {
  return (
    <section className={`section ${styles.section}`} id="cta">
      <div className="container">
        <div className={styles.card}>
          <div className={styles.glow} />
          <div className={styles.content}>
            <span className={styles.badge}>🔥 Ready to Grow?</span>
            <h2 className={styles.heading}>
              Let's Build Something
              <span className="gradient-text"> Amazing Together</span>
            </h2>
            <p className={styles.sub}>
              Book a free strategy call today. Tell us your goals and we'll map out
              the fastest path to your digital success — no obligation, no pressure.
            </p>
            <div className={styles.actions}>
              <Link href="/contact" className="btn btn-primary" id="cta-get-started">
                Get a Free Quote →
              </Link>
              <Link href="/portfolio" className="btn btn-outline" id="cta-see-work">
                See Our Work
              </Link>
            </div>
            <p className={styles.note}>
              ✅ No commitment required &nbsp;·&nbsp; ✅ 100% free consultation &nbsp;·&nbsp; ✅ Reply within 24 hours
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
