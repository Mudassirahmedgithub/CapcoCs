import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Warehouse Management Services | WMS Solutions | CAPCO Consulting Services",
  description:
    "CAPCO Consulting Services delivers enterprise warehouse management solutions including real-time inventory tracking, order fulfilment, warehouse automation, and stock auditing for regulated industries.",
  keywords: [
    "Warehouse Management Services",
    "Warehouse Management System",
    "WMS Solutions",
    "Inventory Management Software",
    "Order Fulfilment Solutions",
    "Warehouse Automation",
    "Stock Auditing",
    "Real-Time Inventory Tracking",
    "Multi-Location Warehouse Management",
    "Supply Chain Visibility",
    "Warehouse Operations Consulting",
  ],
  openGraph: {
    title: "Warehouse Management Services | CAPCO Consulting Services",
    description:
      "Enterprise warehouse management solutions: real-time inventory control, order fulfilment, automation, and compliance-ready stock auditing for modern distribution operations.",
    type: "website",
    url: "https://www.capcocs.com/services/warehouse-management",
  },
  alternates: {
    canonical: "https://www.capcocs.com/services/warehouse-management",
  },
};

// JSON-LD Schema for Service + FAQ
const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "CAPCO Consulting Services – Warehouse Management",
  description:
    "Enterprise warehouse management services including real-time inventory tracking, order fulfilment optimisation, warehouse automation, stock auditing, and multi-site operations management.",
  url: "https://www.capcocs.com/services/warehouse-management",
  serviceType: [
    "Warehouse Management Consulting",
    "Inventory Management Solutions",
    "Order Fulfilment Optimisation",
    "Warehouse Automation",
    "Stock Auditing & Reporting",
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Warehouse Management Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Real-Time Inventory Management" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Order Fulfilment Optimisation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Warehouse Automation & Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Stock Auditing & Compliance Reporting" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Multi-Site Warehouse Operations" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "ERP & E-Commerce Integration" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Supply Chain Visibility & Analytics" } },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is a Warehouse Management System (WMS)?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A WMS is a software solution that provides full control and visibility over warehouse operations — from receiving and putaway through picking, packing, shipping, and returns — helping teams improve accuracy and efficiency across the board.",
      },
    },
    {
      "@type": "Question",
      name: "How does real-time inventory tracking work?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our system uses barcode scanning, RFID, and IoT integrations to capture every stock movement as it happens, giving you an accurate, live picture of inventory levels and locations across all warehouse zones.",
      },
    },
    {
      "@type": "Question",
      name: "Can your solution handle multi-location warehouses?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Our platform supports multi-site warehouse operations, giving you consolidated visibility and control across all locations from a single centralised dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "How does warehouse automation improve accuracy?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Automated scanning, validation rules, and guided workflows eliminate manual data-entry errors, ensuring every pick, pack, and shipment is verified before it leaves the warehouse.",
      },
    },
    {
      "@type": "Question",
      name: "Does the platform integrate with our existing ERP or e-commerce systems?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. Our warehouse management solution integrates with leading ERP platforms, e-commerce storefronts, and 3PL systems via standard APIs, ensuring seamless data flow across your entire supply chain.",
      },
    },
  ],
};

import WarehouseManagementPage from "./WarehouseManagement";
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
          <li aria-current="page">Warehouse Management Services</li>
        </ol>
      </nav>

      {/* Main Client Component */}
      <WarehouseManagementPage />
    </>
  );
}