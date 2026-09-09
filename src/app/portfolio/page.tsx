import type { Metadata } from "next";
import Link from "next/link";
import { projects } from "@/lib/portfolio";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portfolio – Our Work & Case Studies",
  description:
    "Explore KallemDesign's portfolio of web development, mobile app, WordPress, digital marketing, and content writing projects with real client results.",
  alternates: { canonical: "https://kallemdesign.com/portfolio" },
};

const categories = ["All", "Web Development", "Mobile Apps", "Web Applications", "WordPress", "Digital Marketing", "Content Writing"];

export default function PortfolioPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="mesh-bg" />
        <div className="container">
          <div className="section-badge" style={{ display: "flex", justifyContent: "center" }}>
            🏆 Our Portfolio
          </div>
          <h1 style={{ marginBottom: "20px" }}>
            Work We're
            <span className="gradient-text"> Proud Of</span>
          </h1>
          <p style={{ maxWidth: "520px", margin: "0 auto", fontSize: "1.05rem" }}>
            Real projects. Real results. Here's a selection of our work across
            web, mobile, marketing, and content.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <div className="container">
          <div className={styles.grid}>
            {projects.map((project, i) => (
              <div
                key={project.id}
                className={styles.card}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {/* Visual block */}
                <div
                  className={styles.visual}
                  style={{
                    background: project.gradient,
                    backgroundImage: `linear-gradient(135deg, rgba(16, 26, 36, 0.12), rgba(16, 26, 36, 0.78)), url(${project.image})`,
                  }}
                >
                  <div className={styles.visualEmoji}>{project.emoji}</div>
                  <div className={styles.visualCategory}>{project.category}</div>
                </div>

                {/* Content */}
                <div className={styles.content}>
                  <h2 className={styles.title}>{project.title}</h2>
                  <p className={styles.desc}>{project.description}</p>

                  {/* Tags */}
                  <div className={styles.tags}>
                    {project.tags.map((tag) => (
                      <span key={tag} className={styles.tag}>{tag}</span>
                    ))}
                  </div>

                  {/* Result */}
                  {project.results && (
                    <div className={styles.result}>
                      <span className={styles.resultIcon}>📊</span>
                      <span className={styles.resultText}>{project.results}</span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className={styles.cta}>
            <h3>Ready to be our next success story?</h3>
            <p>Let's talk about your project and build something amazing together.</p>
            <Link href="/contact" className="btn btn-primary" id="portfolio-cta">
              Start Your Project →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
