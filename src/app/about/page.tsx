import type { Metadata } from "next";
import Link from "next/link";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About Us – Our Story, Mission & Team",
  description:
    "Learn about KallemDesign – a passionate digital agency founded with the mission to help businesses of all sizes build a powerful online presence.",
  alternates: { canonical: "https://kallemdesign.com/about" },
};

const values = [
  { icon: "🎯", title: "Mission-Driven", desc: "We exist to help businesses grow. Every project is personal and we treat your success as our own." },
  { icon: "🔍", title: "Attention to Detail", desc: "We sweat the small stuff. Pixel-perfect design, clean code, and flawless user experiences are non-negotiable." },
  { icon: "🤝", title: "Partnership Mindset", desc: "We're not just a vendor – we're a long-term partner. We grow alongside our clients." },
  { icon: "📚", title: "Continuous Learning", desc: "The digital world evolves rapidly. We invest in staying ahead so you don't have to." },
];

const team = [
  { name: "Kallem Sreekanth", role: "Founder & CEO", emoji: "👨‍💼", bio: "10+ years in web & mobile development. Passionate about building products that make a difference." },
  { name: "Priya Anand", role: "Lead Designer", emoji: "🎨", bio: "UI/UX expert with an eye for beautiful, functional design. Former designer at top tech startups." },
  { name: "Arjun Reddy", role: "Full-Stack Developer", emoji: "💻", bio: "React & Node.js specialist. Built and scaled products serving millions of users." },
  { name: "Sunita Rao", role: "Digital Marketing Head", emoji: "📈", bio: "SEO & growth marketing expert. Has helped 50+ businesses rank on page 1 of Google." },
];

const milestones = [
  { year: "2019", event: "Founded KallemDesign with a vision to make quality digital services accessible to all businesses." },
  { year: "2020", event: "Expanded to mobile app development and served our first 10 clients." },
  { year: "2021", event: "Launched our digital marketing division and crossed 50 projects delivered." },
  { year: "2022", event: "Expanded team to 15 specialists. Began serving international clients." },
  { year: "2023", event: "Launched WordPress theme development service. 100+ projects milestone." },
  { year: "2024", event: "150+ projects, 40+ happy clients. Continuing to grow and innovate." },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="mesh-bg" />
        <div className="container">
          <div className="section-badge" style={{ display: "flex", justifyContent: "center" }}>
            🏢 About Us
          </div>
          <h1 style={{ marginBottom: "20px" }}>
            We're More Than an Agency –
            <br />
            <span className="gradient-text">We're Your Digital Partners</span>
          </h1>
          <p style={{ maxWidth: "600px", margin: "0 auto", fontSize: "1.05rem" }}>
            KallemDesign was founded with a simple belief: every business deserves a powerful
            digital presence — regardless of size or budget. That belief drives everything we do.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className={`section ${styles.storySection}`}>
        <div className="container">
          <div className={styles.storyGrid}>
            <div>
              <h2 className={styles.storyTitle}>Our Story</h2>
              <div className={styles.storyContent}>
                <p>
                  KallemDesign started in 2019 when our founder, Kallem Sreekanth, noticed that small
                  and medium businesses were being underserved by the digital agency market.
                  Large agencies were too expensive. Freelancers were inconsistent. There was a
                  clear gap — and we decided to fill it.
                </p>
                <p>
                  We started small, with just two people and a handful of clients. Today, we're
                  a team of passionate specialists who've delivered over 150 projects across web
                  development, mobile apps, WordPress, digital marketing, and content writing.
                </p>
                <p>
                  Our clients range from solo founders launching their first product to established
                  companies looking to scale. What unites them is a desire for quality, transparency,
                  and results — and that's exactly what we deliver.
                </p>
              </div>
              <Link href="/contact" className="btn btn-primary" style={{ marginTop: "24px" }} id="about-cta">
                Work With Us →
              </Link>
            </div>

            {/* Stats */}
            <div className={styles.statsCard}>
              {[
                { value: "150+", label: "Projects Delivered" },
                { value: "40+", label: "Happy Clients" },
                { value: "6", label: "Service Areas" },
                { value: "5+", label: "Years in Business" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "24h", label: "Response Time" },
              ].map((s) => (
                <div key={s.label} className={styles.statItem}>
                  <div className={styles.statValue}>{s.value}</div>
                  <div className={styles.statLabel}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className={`section ${styles.valuesSection}`}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="section-badge">💎 Our Values</div>
          </div>
          <h2 className="section-heading">What We Stand For</h2>
          <div className="grid-2" style={{ marginTop: "40px" }}>
            {values.map((v) => (
              <div key={v.title} className={styles.valueCard}>
                <div className={styles.valueIcon}>{v.icon}</div>
                <div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="section-badge">👥 The Team</div>
          </div>
          <h2 className="section-heading">
            Meet the People Behind
            <span className="gradient-text"> KallemDesign</span>
          </h2>
          <p className="section-subheading">
            A small but mighty team of designers, developers, and marketers who care deeply about craft.
          </p>
          <div className={styles.teamGrid}>
            {team.map((member) => (
              <div key={member.name} className={styles.teamCard}>
                <div className={styles.teamAvatar}>{member.emoji}</div>
                <h3 className={styles.teamName}>{member.name}</h3>
                <div className={styles.teamRole}>{member.role}</div>
                <p className={styles.teamBio}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={`section ${styles.timelineSection}`}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "center" }}>
            <div className="section-badge">📅 Our Journey</div>
          </div>
          <h2 className="section-heading">Milestones That Shaped Us</h2>
          <div className={styles.timeline}>
            {milestones.map((m, i) => (
              <div key={m.year} className={`${styles.timelineItem} ${i % 2 === 0 ? styles.left : styles.right}`}>
                <div className={styles.timelineYear}>{m.year}</div>
                <div className={styles.timelineDot} />
                <div className={styles.timelineCard}>
                  <p>{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
