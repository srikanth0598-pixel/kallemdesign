import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

export const metadata: Metadata = {
  title: "KallemDesign – Web, Mobile & Digital Marketing Agency",
  description:
    "KallemDesign is a full-service digital agency building websites, mobile apps, web applications, WordPress themes, digital marketing campaigns, and SEO content for businesses worldwide.",
  alternates: { canonical: "https://kallemdesign.com" },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="divider" />
      <ServicesSection />
      <div className="divider" />
      <WhyUsSection />
      <div className="divider" />
      <TestimonialsSection />
      <div className="divider" />
      <CTASection />
    </>
  );
}
