import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Consulting Services | Digital Transformation & Strategy | CAPCO Consulting",
  description:
    "CAPCO Consulting Services provides enterprise IT consulting including IT strategy, digital transformation, enterprise architecture, cloud migration, process automation, and cybersecurity consulting.",
  keywords: [
    "IT Consulting Services",
    "Enterprise IT Consulting",
    "Digital Transformation Consulting",
    "IT Strategy Consulting",
    "Enterprise Architecture Design",
    "Cloud Migration Consulting",
    "Cybersecurity Consulting",
    "IT Infrastructure Assessment",
    "Process Automation Consulting",
    "Technology Stack Advisory",
    "RPA Consulting",
    "IT Roadmap Consulting",
  ],
  openGraph: {
    title: "IT Consulting Services | CAPCO Consulting Services",
    description:
      "Enterprise IT consulting services: IT strategy, digital transformation, cloud migration, enterprise architecture, and cybersecurity for regulated industries.",
    type: "website",
    url: "https://www.capcocs.com/services/it-consulting-services",
  },
  alternates: {
    canonical: "https://www.capcocs.com/services/it-consulting-services",
  },
};

// JSON-LD Schema for Service + FAQ
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CAPCO Consulting Services – IT Consulting",
  description:
    "Enterprise IT consulting services including IT strategy & roadmapping, digital transformation, enterprise architecture design, process automation, cloud migration, IT infrastructure assessment, and cybersecurity consulting.",
  url: "https://www.capcocs.com/services/it-consulting-services",
  serviceType: [
    "IT Consulting",
    "Digital Transformation Consulting",
    "Enterprise Architecture Design",
    "Cloud Migration Consulting",
    "Cybersecurity Consulting",
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "IT Consulting Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Strategy & Roadmapping" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Transformation Consulting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Enterprise Architecture Design" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Process Optimization & Automation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Technology Stack Advisory" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "IT Infrastructure Assessment" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cloud & Migration Consulting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Cybersecurity Consulting" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What industries do you serve?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve clients across finance, healthcare, retail, manufacturing, logistics, and technology sectors. Our consultants bring domain-specific expertise combined with deep technical knowledge.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical IT consulting engagement take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Timelines vary based on scope. A focused assessment may take 2–4 weeks, while a full digital transformation roadmap engagement can span 3–6 months. We tailor every engagement to your needs.",
      },
    },
    {
      "@type": "Question",
      name: "Can you work with our existing IT team?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We work alongside your internal teams in a collaborative advisory capacity, upskilling staff and ensuring knowledge transfer throughout the engagement.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide post-engagement support?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We offer ongoing advisory retainers so you always have access to expert guidance as your business and technology landscape evolves.",
      },
    },
    {
      "@type": "Question",
      name: "How do you ensure recommendations are cost-effective?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Every recommendation is evaluated against ROI benchmarks, TCO analysis, and your budget constraints. We prioritize practical, high-impact improvements over unnecessary complexity.",
      },
    },
  ],
};

// This is the Server Component layout wrapper — ITConsultingPage (client component) is imported below.
import ITConsultingPage from "./ItConsultingSupport";
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
          <li aria-current="page">IT Consulting Services</li>
        </ol>
      </nav>

      {/* Main Client Component */}
      <ITConsultingPage />
    </>
  );
}