"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.css";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
}

const serviceOptions = [
  "Web Development",
  "Mobile App Development",
  "Web Application",
  "WordPress Development",
  "Digital Marketing",
  "Content Writing",
  "Multiple Services",
  "Other / Not Sure",
];

const budgetOptions = [
  "Under ₹10,000",
  "₹10,000 – ₹25,000",
  "₹25,000 – ₹50,000",
  "₹50,000 – ₹1,00,000",
  "₹1,00,000+",
  "Let's discuss",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setStatus("sending");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Contact form submission failed");

      setStatus("success");
      reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <div className={styles.wrapper}>
      {status === "success" ? (
        <div className={styles.success}>
          <div className={styles.successIcon}>✅</div>
          <h3>Message Sent!</h3>
          <p>
            Thank you for reaching out. We&apos;ll get back to you within 24 hours. Check your email client if prompted.
          </p>
          <button className="btn btn-primary" onClick={() => setStatus("idle")}>
            Send Another
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form} noValidate>
          {/* Row: Name + Email */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="cf-name" className={styles.label}>Full Name *</label>
              <input
                id="cf-name"
                type="text"
                placeholder="John Doe"
                className={`${styles.input} ${errors.name ? styles.inputError : ""}`}
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <span className={styles.error}>{errors.name.message}</span>}
            </div>

            <div className={styles.field}>
              <label htmlFor="cf-email" className={styles.label}>Email Address *</label>
              <input
                id="cf-email"
                type="email"
                placeholder="john@example.com"
                className={`${styles.input} ${errors.email ? styles.inputError : ""}`}
                {...register("email", {
                  required: "Email is required",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "Enter a valid email" },
                })}
              />
              {errors.email && <span className={styles.error}>{errors.email.message}</span>}
            </div>
          </div>

          {/* Row: Phone + Service */}
          <div className={styles.row}>
            <div className={styles.field}>
              <label htmlFor="cf-phone" className={styles.label}>Phone Number</label>
              <input
                id="cf-phone"
                type="tel"
                placeholder="+91 9618337160"
                className={styles.input}
                {...register("phone")}
              />
            </div>

            <div className={styles.field}>
              <label htmlFor="cf-service" className={styles.label}>Service Needed *</label>
              <select
                id="cf-service"
                className={`${styles.input} ${styles.select} ${errors.service ? styles.inputError : ""}`}
                {...register("service", { required: "Please select a service" })}
              >
                <option value="">Select a service…</option>
                {serviceOptions.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              {errors.service && <span className={styles.error}>{errors.service.message}</span>}
            </div>
          </div>

          {/* Budget */}
          <div className={styles.field}>
            <label htmlFor="cf-budget" className={styles.label}>Estimated Budget</label>
            <select
              id="cf-budget"
              className={`${styles.input} ${styles.select}`}
              {...register("budget")}
            >
              <option value="">Select a budget range…</option>
              {budgetOptions.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>

          {/* Message */}
          <div className={styles.field}>
            <label htmlFor="cf-message" className={styles.label}>Your Message *</label>
            <textarea
              id="cf-message"
              rows={5}
              placeholder="Tell us about your project, goals, and any specific requirements…"
              className={`${styles.input} ${styles.textarea} ${errors.message ? styles.inputError : ""}`}
              {...register("message", {
                required: "Please tell us about your project",
                minLength: { value: 20, message: "Please provide at least 20 characters" },
              })}
            />
            {errors.message && <span className={styles.error}>{errors.message.message}</span>}
          </div>

          {status === "error" && (
            <div className={styles.errorBanner}>
              Something went wrong. Please try emailing us directly at{" "}
              <a href="mailto:kallemdesign@gmail.com">kallemdesign@gmail.com</a>
            </div>
          )}

          <button
            type="submit"
            id="cf-submit"
            className={`btn btn-primary ${styles.submit}`}
            disabled={status === "sending"}
          >
            {status === "sending" ? (
              <>
                <span className={styles.spinner} /> Sending…
              </>
            ) : (
              "Send Message →"
            )}
          </button>
        </form>
      )}
    </div>
  );
}
