import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Management & Consultancy Services | CAPCO Consulting",
  description:
    "CAPCO Consulting Services delivers expert business management and consultancy solutions including strategic planning, business valuation, compliance outsourcing, due diligence, feasibility assessment, and SOP development.",
  keywords: [
    "Business Management Consulting",
    "Business Consultancy Services",
    "Strategic Planning Consulting",
    "Business Planning Services",
    "Business Valuation Services",
    "Compliance Outsourcing",
    "Due Diligence Services",
    "Feasibility Assessment",
    "SOP Development",
    "Organization Assessment",
    "Business Strategy Consulting",
    "Policy and Procedure Development",
  ],
  openGraph: {
    title: "Business Management & Consultancy Services | CAPCO Consulting Services",
    description:
      "Expert business management and consultancy services: strategic planning, business valuation, compliance outsourcing, due diligence, and feasibility assessment for enterprises.",
    type: "website",
    url: "https://www.capcocs.com/services/business-management-consultancy",
  },
  alternates: {
    canonical: "https://www.capcocs.com/services/business-management-consultancy",
  },
};

// JSON-LD Schema for Service
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CAPCO Consulting Services – Business Management & Consultancy",
  description:
    "Business management and consultancy services including strategic planning, business valuation, compliance outsourcing, due diligence, feasibility assessment, organization assessment, SOP development, and policy and procedure development.",
  url: "https://www.capcocs.com/services/business-management-consultancy",
  serviceType: [
    "Business Management Consulting",
    "Strategic Planning Consulting",
    "Business Valuation Services",
    "Compliance Outsourcing",
    "Due Diligence Services",
    "Feasibility Assessment",
    "SOP Development",
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Business Management & Consultancy Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Planning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Business Valuation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Compliance Outsourcing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Due Diligence" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Feasibility Assessment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strategic Planning" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Organization Assessment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SOP Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Strategic Consulting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Policy and Procedure Development" } },
    ],
  },
};

// JSON-LD Schema for FAQ
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What industries do you specialize in?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve clients across finance, healthcare, manufacturing, retail, technology, and real estate — with tailored approaches for each vertical.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical engagement take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Engagements vary by scope. Feasibility assessments may take 2–4 weeks, while full strategic planning cycles typically run 6–12 weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do you offer ongoing advisory support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Many clients retain us on an ongoing basis for quarterly reviews, strategy updates, and compliance monitoring.",
      },
    },
    {
      "@type": "Question",
      name: "What does the onboarding process look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We begin with a discovery call, followed by a scoping document and proposal. Once aligned, our team mobilizes within 72 hours.",
      },
    },
  ],
};

import BusinessManagementConsultancy from "./BusinessManagementConsultancy";
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
          <li aria-current="page">Business Management &amp; Consultancy</li>
        </ol>
      </nav>

      {/* Main Client Component */}
      <BusinessManagementConsultancy />
    </>
  );
}