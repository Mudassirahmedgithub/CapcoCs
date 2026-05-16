import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Management Services | Lifecycle, Tracking & Compliance | CAPCO Consulting",
  description:
    "CAPCO Consulting Services provides enterprise asset management solutions including asset lifecycle management, real-time tracking, RFID automation, financial compliance, and asset inspection services.",
  keywords: [
    "Asset Management Services",
    "Enterprise Asset Management",
    "Asset Lifecycle Management",
    "Asset Tracking Solutions",
    "RFID Asset Management",
    "Asset Compliance Management",
    "Asset Financial Management",
    "Asset Inspection Services",
    "Fixed Asset Management",
    "Asset Registry Management",
    "Digital Asset Management",
    "Asset Management Consulting",
  ],
  openGraph: {
    title: "Asset Management Services | CAPCO Consulting Services",
    description:
      "Enterprise asset management solutions: lifecycle management, real-time tracking, RFID automation, compliance, and inspection for organisations of all sizes.",
    type: "website",
    url: "https://www.capcocs.com/services/asset-management",
  },
  alternates: {
    canonical: "https://www.capcocs.com/services/asset-management",
  },
};

// JSON-LD Schema for Service + FAQ
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CAPCO Consulting Services – Asset Management",
  description:
    "Enterprise asset management services including asset lifecycle management, real-time asset tracking, RFID solutions, financial compliance management, asset inspection, and centralised asset registry.",
  url: "https://www.capcocs.com/services/asset-management",
  serviceType: [
    "Asset Management Consulting",
    "Asset Lifecycle Management",
    "Asset Tracking Solutions",
    "RFID Asset Management",
    "Asset Compliance Services",
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Asset Management Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Asset Life Cycle Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real-Time Asset Tracking" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Asset Financial & Compliance Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Asset Work & Registry" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Asset Inspection Services" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "RFID Solutions" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is asset lifecycle management?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Asset lifecycle management covers every stage of an asset's life — from procurement, deployment, and maintenance to depreciation and retirement — giving your organisation complete control and visibility at every step.",
      },
    },
    {
      "@type": "Question",
      name: "How does real-time asset tracking work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our tracking solutions use GPS, RFID, and IoT integrations to monitor asset locations and operational status in real time, accessible via a centralised dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Can your asset management solutions handle compliance requirements?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our Asset Financial & Compliance Management module provides centralised audit trails, depreciation schedules, and regulatory reporting to keep your organisation compliant.",
      },
    },
    {
      "@type": "Question",
      name: "Is RFID technology difficult to implement?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Not at all. Our RFID solutions are designed for rapid deployment with minimal disruption. We support you through hardware selection, configuration, and integration with your existing systems.",
      },
    },
    {
      "@type": "Question",
      name: "Are your asset management solutions scalable for large enterprises?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our platform is built to scale from SMBs to large enterprises, supporting thousands of assets across multiple sites and geographies.",
      },
    },
  ],
};

import AssetManagementPage from "./AssetManagement";
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
          <li aria-current="page">Asset Management Services</li>
        </ol>
      </nav>

      {/* Main Client Component */}
      <AssetManagementPage />
    </>
  );
}