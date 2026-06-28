import type { Metadata } from "next";

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: "AI Development Services | AI Consulting & Solutions | CAPCO Consulting",
  description:
    "CAPCO Consulting delivers enterprise AI services — AI agent development, generative AI, machine learning, computer vision, NLP, AI chatbots, and AI integration across industries worldwide.",
  keywords: [
    "AI Development Services",
    "AI Consulting Services",
    "Enterprise AI Solutions",
    "Generative AI Development",
    "AI Agent Development",
    "Machine Learning Services",
    "AI Chatbot Development",
    "Computer Vision Solutions",
    "AI Integration Services",
    "AI OCR Services",
    "NLP Solutions",
    "AI Transformation",
    "AI for Business",
    "Custom AI Development",
    "AI Strategy Consulting",
    "MLOps Services",
    "Responsible AI",
    "AI Automation",
  ],
  openGraph: {
    title: "AI Development & Consulting Services | CAPCO Consulting Services",
    description:
      "From autonomous AI agents to generative AI and machine learning — CAPCO builds, deploys, and scales enterprise AI solutions that create measurable business impact.",
    type: "website",
    url: "https://www.capcocs.com/services/ai",
    siteName: "CAPCO Consulting Services",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Development & Consulting Services | CAPCO Consulting Services",
    description:
      "From autonomous AI agents to generative AI and machine learning — CAPCO builds, deploys, and scales enterprise AI solutions.",
  },
  alternates: {
    canonical: "https://www.capcocs.com/services/ai",
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

// ─── JSON-LD: Professional Service Schema ────────────────────────────────────
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CAPCO Consulting Services – AI Development & Consulting",
  description:
    "Enterprise AI services including AI agent development, generative AI, machine learning, computer vision, NLP, AI chatbot development, and AI strategy consulting.",
  url: "https://www.capcocs.com/services/ai",
  logo: "https://www.capcocs.com/logo.png",
  areaServed: "Worldwide",
  serviceType: [
    "AI Development",
    "AI Consulting",
    "Generative AI Development",
    "Machine Learning Services",
    "AI Agent Development",
    "Computer Vision Solutions",
    "AI Chatbot Development",
    "AI Integration Services",
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "AI Services Portfolio",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Agent Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Chatbot Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Consulting & Strategy" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "End-to-End AI Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI Systems Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI-Powered OCR & Document Processing" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Computer Vision Solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Generative AI Consulting & Development" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Machine Learning & Predictive Analytics" } },
    ],
  },
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "120",
    bestRating: "5",
  },
};

// ─── JSON-LD: FAQ Schema ──────────────────────────────────────────────────────
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What AI development services does CAPCO Consulting offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "CAPCO Consulting offers a full spectrum of AI services including AI agent development, generative AI consulting and development, machine learning, computer vision, NLP, AI chatbot development, AI-powered OCR, AI integration, and end-to-end AI strategy — tailored to your industry and business goals.",
      },
    },
    {
      "@type": "Question",
      name: "How long does it take to build and deploy an AI solution?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most enterprise AI solutions are delivered to production within 12 weeks on average. We use agile sprints and pre-built AI components to accelerate time-to-value without compromising quality.",
      },
    },
    {
      "@type": "Question",
      name: "Can you integrate AI into our existing systems and cloud infrastructure?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We work natively with AWS, Azure, and GCP, and integrate AI capabilities into your existing ERP, CRM, data warehouse, and REST API ecosystem — no full platform migration required.",
      },
    },
    {
      "@type": "Question",
      name: "What industries do you serve with AI solutions?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We serve a wide range of industries including healthcare, financial services, fintech, retail, logistics, manufacturing, and more — with domain-specific AI strategies and implementation.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide AI model monitoring and maintenance after deployment?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our MLOps practice includes continuous drift detection, automated retraining triggers, performance dashboards, and versioned rollback to keep your AI models accurate and reliable in production.",
      },
    },
    {
      "@type": "Question",
      name: "What is Responsible AI and how do you implement it?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Responsible AI means building models that are fair, explainable, and privacy-preserving by design. We embed bias auditing, transparency reporting, and data privacy controls into every AI solution we deliver.",
      },
    },
    {
      "@type": "Question",
      name: "What are AI agents and how can they benefit my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "AI agents are autonomous systems that reason, plan, and take actions to achieve goals — from automating complex workflows to orchestrating multi-step processes across your business applications, reducing manual effort significantly.",
      },
    },
  ],
};

// ─── JSON-LD: Breadcrumb Schema ───────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capcocs.com" },
    { "@type": "ListItem", position: 2, name: "Services", item: "https://www.capcocs.com/services" },
    { "@type": "ListItem", position: 3, name: "AI Services", item: "https://www.capcocs.com/services/ai" },
  ],
};

// ─── JSON-LD: WebPage Schema ──────────────────────────────────────────────────
const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://www.capcocs.com/services/ai",
  url: "https://www.capcocs.com/services/ai",
  name: "AI Development Services | CAPCO Consulting Services",
  description:
    "Enterprise AI services: AI agents, generative AI, machine learning, computer vision, chatbots, NLP, OCR, and AI consulting for businesses worldwide.",
  isPartOf: {
    "@type": "WebSite",
    url: "https://www.capcocs.com",
    name: "CAPCO Consulting Services",
  },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.capcocs.com" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://www.capcocs.com/services" },
      { "@type": "ListItem", position: 3, name: "AI Services", item: "https://www.capcocs.com/services/ai" },
    ],
  },
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".hero-subtitle"],
  },
};

// ─── Imports ──────────────────────────────────────────────────────────────────
import AiPage from "./Aipage";
import Link from "next/link";

// ─── Page (Server Component) ──────────────────────────────────────────────────
export default function Page() {
  return (
    <>
      {/* ── Inject JSON-LD Schemas ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      {/* ── Accessible Breadcrumb (visible to crawlers, hidden visually) ── */}
      <nav aria-label="Breadcrumb" className="sr-only">
        <ol itemScope itemType="https://schema.org/BreadcrumbList">
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/" itemProp="item">
              <span itemProp="name">Home</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <Link href="/services" itemProp="item">
              <span itemProp="name">Services</span>
            </Link>
            <meta itemProp="position" content="2" />
          </li>
          <li itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem">
            <span itemProp="name" aria-current="page">AI Services</span>
            <meta itemProp="position" content="3" />
          </li>
        </ol>
      </nav>

      {/* ── Main Client Component ── */}
      <AiPage />
    </>
  );
}