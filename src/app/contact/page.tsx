import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Contact Us – Get a Free Quote",
  description:
    "Get in touch with KallemDesign for a free project consultation. We respond within 24 hours. Web development, mobile apps, WordPress, digital marketing, and content writing.",
  alternates: { canonical: "https://kallemdesign.com/contact" },
};

const contactInfo = [
  { icon: "📧", label: "Email", value: "hello@kallemdesign.com", href: "mailto:hello@kallemdesign.com" },
  { icon: "📞", label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
  { icon: "📍", label: "Location", value: "Hyderabad, Telangana, India", href: null },
  { icon: "⏰", label: "Working Hours", value: "Mon–Sat, 9AM – 7PM IST", href: null },
];

const faqs = [
  {
    q: "How quickly will you respond?",
    a: "We respond to all enquiries within 24 business hours. For urgent matters, please call us directly.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely! We work with clients from India, the US, UK, Australia, and across the globe. All communication is in English.",
  },
  {
    q: "What information should I include in my message?",
    a: "The more details the better! Your project type, goals, desired timeline, and approximate budget help us give you an accurate quote faster.",
  },
  {
    q: "Do you offer a free consultation?",
    a: "Yes — every engagement starts with a free 30-minute strategy call with no obligation whatsoever.",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="page-hero">
        <div className="mesh-bg" />
        <div className="container">
          <div className="section-badge" style={{ display: "flex", justifyContent: "center" }}>
            💬 Get In Touch
          </div>
          <h1 style={{ marginBottom: "20px" }}>
            Let's Build Something
            <span className="gradient-text"> Together</span>
          </h1>
          <p style={{ maxWidth: "520px", margin: "0 auto", fontSize: "1.05rem" }}>
            Have a project in mind? We'd love to hear about it. Fill in the form below
            and we'll get back to you within 24 hours.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="section">
        <div className="container">
          <div className={styles.layout}>
            {/* Form */}
            <div className={styles.formCol}>
              <div className={styles.formCard}>
                <h2 className={styles.formTitle}>Send Us a Message</h2>
                <p className={styles.formSub}>
                  Fill in the details below and our team will prepare a custom proposal for your project.
                </p>
                <ContactForm />
              </div>
            </div>

            {/* Sidebar */}
            <aside className={styles.sidebar}>
              {/* Contact info */}
              <div className={styles.infoCard}>
                <h3 className={styles.sideTitle}>Contact Information</h3>
                <div className={styles.infoList}>
                  {contactInfo.map((item) => (
                    <div key={item.label} className={styles.infoItem}>
                      <div className={styles.infoIcon}>{item.icon}</div>
                      <div>
                        <div className={styles.infoLabel}>{item.label}</div>
                        {item.href ? (
                          <a href={item.href} className={styles.infoValue}>{item.value}</a>
                        ) : (
                          <div className={styles.infoValue}>{item.value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Promise */}
              <div className={styles.promiseCard}>
                <h3 className={styles.sideTitle}>Our Promise to You</h3>
                {[
                  "✅ Free consultation – no strings attached",
                  "✅ Clear, transparent pricing",
                  "✅ Regular project updates",
                  "✅ On-time delivery guarantee",
                  "✅ Post-launch support included",
                ].map((p) => (
                  <p key={p} className={styles.promiseItem}>{p}</p>
                ))}
              </div>
            </aside>
          </div>

          {/* FAQ */}
          <div className={styles.faqSection}>
            <h2 className={styles.faqTitle}>Frequently Asked Questions</h2>
            <div className={styles.faqGrid}>
              {faqs.map((faq) => (
                <div key={faq.q} className={styles.faqItem}>
                  <h3 className={styles.faqQ}>{faq.q}</h3>
                  <p className={styles.faqA}>{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
