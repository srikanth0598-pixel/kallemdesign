import styles from "./WhyUsSection.module.css";

const reasons = [
  {
    icon: "🎯",
    title: "Results-Focused",
    description:
      "Every decision we make is driven by your business goals. We measure success by the growth we deliver — not just deliverables.",
  },
  {
    icon: "⚡",
    title: "Fast Delivery",
    description:
      "We move with urgency. Our agile approach means you get working products faster, with regular updates throughout.",
  },
  {
    icon: "🔒",
    title: "Transparent Process",
    description:
      "No surprises. You get clear timelines, honest pricing, and full visibility into every stage of your project.",
  },
  {
    icon: "🧠",
    title: "Senior-Level Expertise",
    description:
      "Every project is handled by experienced professionals. No juniors learning on your dime.",
  },
  {
    icon: "🔄",
    title: "End-to-End Support",
    description:
      "From strategy to launch and beyond. We provide ongoing maintenance, updates, and growth support.",
  },
  {
    icon: "🌍",
    title: "Global Standards, Local Prices",
    description:
      "World-class quality at competitive rates. We serve clients globally while keeping costs affordable.",
  },
];

export default function WhyUsSection() {
  return (
    <section className={`section ${styles.section}`} id="why-us">
      <div className="container">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div className="section-badge">💎 Why KallemDesign</div>
        </div>
        <h2 className={`section-heading ${styles.heading}`}>
          The Agency Difference
          <span className="gradient-text"> You Can Feel</span>
        </h2>
        <p className="section-subheading">
          We're not just another agency. We're a team of craftspeople who care deeply
          about the quality of our work and the success of your business.
        </p>

        <div className={styles.grid}>
          {reasons.map((r, i) => (
            <div key={r.title} className={styles.card} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className={styles.iconBox}>
                <span className={styles.icon}>{r.icon}</span>
              </div>
              <h3 className={styles.title}>{r.title}</h3>
              <p className={styles.desc}>{r.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
