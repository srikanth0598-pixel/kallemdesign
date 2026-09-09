import styles from "./TestimonialsSection.module.css";

const testimonials = [
  {
    quote:
      "KallemDesign completely transformed our online presence. The website they built is not only gorgeous but also loads incredibly fast. Our enquiries tripled within the first month.",
    name: "Priya Sharma",
    role: "CEO, TechVibe Solutions",
    avatar: "PS",
    rating: 5,
  },
  {
    quote:
      "The mobile app they built for us exceeded every expectation. The team was communicative, delivered on time, and the quality of code was excellent. Highly recommend!",
    name: "Rahul Mehta",
    role: "Founder, FitFlow",
    avatar: "RM",
    rating: 5,
  },
  {
    quote:
      "Our WordPress site was outdated and slow. KallemDesign rebuilt it from scratch — now it scores 95+ on PageSpeed and converts 4x better. Worth every rupee.",
    name: "Anita Reddy",
    role: "Marketing Director, Savoria Restaurants",
    avatar: "AR",
    rating: 5,
  },
  {
    quote:
      "Their digital marketing team helped us go from invisible to ranking on page 1 for our key terms. The ROI has been phenomenal. I can't imagine running our business without them now.",
    name: "Vijay Kumar",
    role: "Owner, MedTech Innovations",
    avatar: "VK",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  return (
    <section className={`section ${styles.section}`} id="testimonials">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="section-badge">⭐ Client Stories</div>
        </div>
        <h2 className={`section-heading ${styles.heading}`}>
          What Our Clients
          <span className="gradient-text"> Are Saying</span>
        </h2>
        <p className="section-subheading">
          Don't just take our word for it. Here's what real clients say about
          working with KallemDesign.
        </p>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <div key={t.name} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
              {/* Stars */}
              <div className={styles.stars}>
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className={styles.star}>★</span>
                ))}
              </div>

              {/* Quote */}
              <p className={styles.quote}>"{t.quote}"</p>

              {/* Author */}
              <div className={styles.author}>
                <div className={styles.avatar}>{t.avatar}</div>
                <div>
                  <div className={styles.name}>{t.name}</div>
                  <div className={styles.role}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
