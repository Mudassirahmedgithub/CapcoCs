import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Data Governance Services | AI & Compliance Solutions | CAPCO Consulting",
  description:
    "CAPCO Consulting Services provides enterprise data governance services including data quality management, regulatory compliance, AI governance, metadata management, and secure data architecture.",
  keywords: [
    "Data Governance Services",
    "Enterprise Data Governance",
    "Data Governance Consulting",
    "AI Data Governance",
    "Data Governance Solutions",
    "Data Compliance Services",
    "Master Data Management",
    "Data Quality Management",
    "Metadata Management",
    "GDPR Compliance",
    "HIPAA Compliance",
  ],
  openGraph: {
    title: "Data Governance Services | CAPCO Consulting Services",
    description:
      "Enterprise data governance services: data quality, compliance, metadata management, and AI governance frameworks for regulated industries.",
    type: "website",
    url: "https://www.capcocs.com/services/data-governance-services",
  },
  alternates: {
    canonical: "https://www.capcocs.com/services/data-governance-services",
  },
};

// JSON-LD Schema for Service + FAQ
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CAPCO Consulting Services – Data Governance",
  description:
    "Enterprise data governance services including data quality management, regulatory compliance, AI governance, metadata management, master data management, and secure data architecture.",
  url: "https://www.capcocs.com/services/data-governance-services",
  serviceType: [
    "Data Governance Consulting",
    "Data Quality Management",
    "Master Data Management",
    "Regulatory Compliance Services",
    "Metadata Management",
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Data Governance Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enterprise Data Governance Frameworks" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Quality Management & Validation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Master Data Management (MDM)" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Metadata Management & Data Cataloging" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Security, Compliance & Access Controls" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Audit Trails & Regulatory Reporting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Data Lifecycle Management" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What does a Data Governance framework include?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It covers data ownership, stewardship roles, quality standards, lineage tracking, access policies, and compliance procedures — all mapped to your organizational structure and regulatory environment.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure regulatory compliance with GDPR and HIPAA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build automated audit trails, data classification systems, consent management workflows, and access control layers aligned with each regulation's specific requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What AI use cases do you specialize in for enterprise?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Customer analytics, demand forecasting, fraud detection, NLP for document automation, and intelligent workflow orchestration are our most common enterprise implementations.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate your solutions with our existing cloud infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes — we work natively across AWS, Azure, and GCP, and integrate with existing data warehouses, ERP/CRM systems, and REST APIs without requiring a full platform migration.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide ongoing model monitoring after deployment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our MLOps practice includes continuous drift detection, retraining triggers, performance dashboards, and versioned rollback capabilities to keep models accurate in production.",
      },
    },
  ],
};

// This is the Server Component layout wrapper — DataGovernancePage (client component) is imported below.
import DataGovernancePage from "./DataGovernancepage";
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
          <li aria-current="page">Data Governance Services</li>
        </ol>
      </nav>

      {/* Main Client Component */}
      <DataGovernancePage />
    </>
  );
}