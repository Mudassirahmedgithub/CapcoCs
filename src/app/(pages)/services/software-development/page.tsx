import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Software Development Services | Custom Enterprise Software | CAPCO Consulting Services",
  description:
    "CAPCO Consulting Services delivers end-to-end custom software development including enterprise applications, ERP/CRM systems, SaaS platforms, API development, workflow automation, and product engineering.",
  keywords: [
    "Software Development Services",
    "Custom Enterprise Software",
    "Software Development Consulting",
    "ERP CRM Development",
    "SaaS Platform Development",
    "API Development Services",
    "Workflow Automation Software",
    "Enterprise Application Development",
    "MVP Development",
    "Product Engineering Services",
    "Cloud Native Development",
    "Microservices Architecture",
  ],
  openGraph: {
    title: "Software Development Services | CAPCO Consulting Services",
    description:
      "Custom enterprise software development: ERP/CRM systems, SaaS platforms, API integrations, automation workflows, and MVP engineering for mission-critical businesses.",
    type: "website",
    url: "https://www.capcocs.com/services/software-development-services",
  },
  alternates: {
    canonical: "https://www.capcocs.com/services/software-development-services",
  },
};

// JSON-LD Schema for Service + FAQ
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CAPCO Consulting Services – Software Development",
  description:
    "End-to-end custom software development services including enterprise application development, ERP/CRM systems, SaaS platform engineering, API development, business automation, and product engineering.",
  url: "https://www.capcocs.com/services/software-development-services",
  serviceType: [
    "Custom Enterprise Software Development",
    "ERP and CRM Development",
    "SaaS Platform Engineering",
    "API Development and Integration",
    "Business Workflow Automation",
    "MVP and Product Engineering",
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Software Development Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Enterprise Software Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP & CRM Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Automation & Workflow Software" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS Platform Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "API Development & Integrations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Product Engineering & MVPs" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Legacy System Modernization" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What types of software does CAPCO build?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We build custom enterprise software, ERP/CRM systems, SaaS platforms, automation tools, APIs, desktop applications, and full product engineering solutions — tailored to your industry and business needs.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a typical software project take?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "MVPs and smaller systems typically ship in 8–16 weeks. Enterprise-grade platforms and complex integrations can take 4–12 months depending on scope. We define timelines clearly during discovery.",
      },
    },
    {
      "@type": "Question",
      name: "Do you support legacy system modernization?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. We have strong experience migrating legacy codebases to modern architectures including microservices, cloud-native, and containerized environments while maintaining business continuity.",
      },
    },
    {
      "@type": "Question",
      name: "Which cloud platforms do you deploy to?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We support Azure, AWS, and Google Cloud. Our teams are experienced in cloud-native development, Docker, Kubernetes, and hybrid cloud setups depending on your infrastructure requirements.",
      },
    },
    {
      "@type": "Question",
      name: "What does post-launch support look like?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer dedicated support, maintenance, and enhancement plans after delivery. This includes bug fixes, performance monitoring, feature iterations, and ongoing DevOps pipeline management.",
      },
    },
  ],
};

// Server Component layout wrapper — SoftwareDevelopmentPage (client component) imported below.
import SoftwareDevelopmentPage from "./SoftwareDevelopmentPage";
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
          <li aria-current="page">Software Development Services</li>
        </ol>
      </nav>

      {/* Main Client Component */}
      <SoftwareDevelopmentPage />
    </>
  );
}