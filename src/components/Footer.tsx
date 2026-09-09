import Link from "next/link";
import styles from "./Footer.module.css";

const services = [
  { label: "Web Development", href: "/services/web-development" },
  { label: "Mobile Apps", href: "/services/mobile-apps" },
  { label: "Web Applications", href: "/services/web-applications" },
  { label: "WordPress", href: "/services/wordpress" },
  { label: "Digital Marketing", href: "/services/digital-marketing" },
  { label: "Content Writing", href: "/services/content-writing" },
];

const company = [
  { label: "About Us", href: "/about" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const social = [
  { label: "LinkedIn", href: "https://linkedin.com", icon: "in" },
  { label: "Twitter", href: "https://twitter.com", icon: "𝕏" },
  { label: "Instagram", href: "https://instagram.com", icon: "◻" },
];

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        {/* Brand */}
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} aria-label="KallemDesign Home">
            <span className={styles.logoIcon}>K</span>
            <span className={styles.logoText}>
              Kallem<span className={styles.logoAccent}>Design</span>
            </span>
          </Link>
          <p className={styles.tagline}>
            Crafting digital experiences that grow your business. From websites to apps to marketing — we do it all.
          </p>
          <div className={styles.social}>
            {social.map((s) => (
              <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialIcon} aria-label={s.label}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Services</h3>
          <ul className={styles.colList}>
            {services.map((s) => (
              <li key={s.href}>
                <Link href={s.href} className={styles.colLink}>{s.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div className={styles.col}>
          <h3 className={styles.colTitle}>Company</h3>
          <ul className={styles.colList}>
            {company.map((c) => (
              <li key={c.href}>
                <Link href={c.href} className={styles.colLink}>{c.label}</Link>
              </li>
            ))}
          </ul>
          <div className={styles.contactInfo}>
            <p>📧 hello@kallemdesign.com</p>
            <p>📞 +91 98765 43210</p>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>© {new Date().getFullYear()} KallemDesign. All rights reserved.</p>
        <p className={styles.bottomRight}>
          Built with <span style={{ color: "#ff6584" }}>♥</span> in India
        </p>
      </div>
    </footer>
  );
}
