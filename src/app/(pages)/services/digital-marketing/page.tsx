import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Services | Brand, SEO & Campaign Solutions | Your Agency",
  description:
    "Full-spectrum digital marketing and business consulting — brand strategy, website design, SEO & ASO, campaign development, video marketing, reputation management, CRM, and more. Engineered for measurable growth.",
  keywords: [
    "Digital Marketing Services",
    "Digital Marketing Agency",
    "Brand Development",
    "SEO Services",
    "App Store Optimization",
    "Campaign Development",
    "Go-To-Market Strategy",
    "Online Reputation Management",
    "Email Marketing",
    "WhatsApp Marketing",
    "CRM Implementation",
    "Video Marketing",
    "Graphic Design Services",
    "Website Design",
    "Cloud Hosting Services",
    "Business Consulting",
  ],
  openGraph: {
    title: "Digital Marketing Services | Your Agency",
    description:
      "End-to-end digital marketing: brand strategy, SEO, campaigns, video marketing, reputation management, and CRM — all under one roof, built for growth.",
    type: "website",
    url: "https://www.youragency.com/services/digital-marketing",
  },
  alternates: {
    canonical: "https://www.youragency.com/services/digital-marketing",
  },
};

// JSON-LD Schema for Service + FAQ
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Your Agency – Digital Marketing Services",
  description:
    "Full-spectrum digital marketing and business consulting including brand development, website design, SEO & ASO, campaign strategy, video marketing, reputation management, CRM implementation, and SMS/email/WhatsApp marketing.",
  url: "https://www.youragency.com/services/digital-marketing",
  serviceType: [
    "Digital Marketing Consulting",
    "Brand Development",
    "Search Engine Optimization",
    "Campaign Strategy",
    "Online Reputation Management",
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Digital Marketing Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Brand Development & Visual Identity" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Designing & Domain Registration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Web, Cloud & Server Hosting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SEO & App Store Optimization (ASO)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Campaign Development & Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Go-To-Market Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Graphic Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Video Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SMS, Email & WhatsApp Marketing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Online Reputation Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Customer Relationship Management (CRM)" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What digital marketing services do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer end-to-end digital marketing — from brand identity and web design to SEO, paid campaigns, social media, reputation management, and CRM implementation.",
      },
    },
    {
      "@type": "Question",
      name: "How soon can I expect results from SEO?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "SEO typically shows measurable movement within 60–90 days, with compounding results over 6–12 months. Paid campaigns can show results within days of launch.",
      },
    },
    {
      "@type": "Question",
      name: "Do you work with small businesses and startups?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We craft scalable strategies suited to your stage — whether you're a bootstrapped startup or an established enterprise looking to expand.",
      },
    },
    {
      "@type": "Question",
      name: "Can you manage our complete online presence?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer retainer packages that cover your entire digital footprint — website, SEO, social, ads, email marketing, reputation, and analytics in one place.",
      },
    },
    {
      "@type": "Question",
      name: "How do you measure and report campaign performance?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build custom dashboards with clear KPIs — impressions, clicks, conversions, CAC, and ROI — and deliver monthly reports with strategic recommendations.",
      },
    },
  ],
};

import DigitalMarketingPage from "./DigitalMarketing";
import Link from "next/link";

export default function Page() {
  return (
    <>
      {/* Inject JSON-LD Schemas */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Breadcrumb for SEO + navigation */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/services">Services</Link></li>
          <li aria-current="page">Digital Marketing Services</li>
        </ol>
      </nav>

      {/* Main Client Component */}
      <DigitalMarketingPage />
    </>
  );
}