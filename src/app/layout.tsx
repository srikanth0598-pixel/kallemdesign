import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://kallemdesign.com"),
  title: {
    default: "KallemDesign – Web, Mobile & Digital Marketing Agency",
    template: "%s | KallemDesign",
  },
  description:
    "KallemDesign is a full-service digital agency specialising in web development, mobile app development, web applications, WordPress themes, digital marketing, and SEO content writing.",
  keywords: [
    "web development",
    "mobile app development",
    "digital marketing",
    "wordpress themes",
    "content writing",
    "SEO",
    "web agency",
    "KallemDesign",
  ],
  authors: [{ name: "KallemDesign" }],
  creator: "KallemDesign",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://kallemdesign.com",
    siteName: "KallemDesign",
    title: "KallemDesign – Web, Mobile & Digital Marketing Agency",
    description:
      "We build websites, mobile apps, web applications, WordPress themes and grow your brand through digital marketing and content writing.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KallemDesign Digital Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KallemDesign – Web, Mobile & Digital Marketing Agency",
    description:
      "We build websites, mobile apps, web applications, WordPress themes and grow your brand through digital marketing and content writing.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "KallemDesign",
  url: "https://kallemdesign.com",
  logo: "https://kallemdesign.com/logo.png",
  description:
    "Full-service digital agency offering web development, mobile app development, WordPress themes, digital marketing, and content writing.",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    availableLanguage: ["English", "Telugu", "Hindi"],
  },
  sameAs: [
    "https://www.linkedin.com/company/kallemdesign",
    "https://twitter.com/kallemdesign",
    "https://www.instagram.com/kallemdesign",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://kallemdesign.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
