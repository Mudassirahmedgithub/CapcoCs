// RFIDSolutionsPage.tsx
// Brand-consistent with AIAgentPage — DM Sans + DM Serif Display
// CSS Module: rfid.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Radio,
  ScanLine,
  Cpu,
  Wifi,
  Database,
  ShieldCheck,
  BarChart3,
  Layers,
  Zap,
  MapPin,
  RefreshCw,
  Package,
  Factory,
  Stethoscope,
  ShoppingCart,
  Truck,
  Building2,
  Tag,
  Server,
  MonitorDot,
  CheckCircle2,
} from "lucide-react";
import styles from "./rfid.module.css";
import { ReactNode } from "react";

type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ─────────────────────────── */
function useInView(
  threshold = 0.15
): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Stagger wrapper ───────────────────────────────────────────── */
function StaggerIn({ children, className, delay = 0 }: StaggerInProps) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────── */

export default function RFIDSolutionsPage() {
  /* Sticky CTA visibility */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* FAQ open state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Data ── */
  const stats = [
    { num: "99.9%", label: "Read Accuracy" },
    { num: "2800%", label: "Faster Than Barcode" },
    { num: "$39B", label: "Market by 2025" },
    { num: "24/7", label: "Real-Time Visibility" },
  ];

  const howSteps = [
    {
      num: "01",
      title: "Tag Your Assets",
      desc: "Attach passive or active RFID tags to equipment, inventory, or personnel badges — no line-of-sight required.",
    },
    {
      num: "02",
      title: "Deploy Readers",
      desc: "Fixed and handheld readers emit radio waves that instantly capture tag data as assets pass within range.",
    },
    {
      num: "03",
      title: "Process & Integrate",
      desc: "Middleware routes real-time tag data to your ERP, WMS, or asset management platform via secure APIs.",
    },
    {
      num: "04",
      title: "Gain Full Visibility",
      desc: "Dashboards, automated alerts, and analytics give you instant insight into every asset across your entire operation.",
    },
  ];

  const solutions = [
    {
      title: "Inventory Management",
      description:
        "Eliminate manual stock counts and reduce shrinkage. RFID scans thousands of items simultaneously, syncing inventory data with your ERP or WMS in real time.",
      points: [
        "2800% faster than barcode scanning",
        "99.9% inventory accuracy",
        "Automated cycle counts & ERP sync",
      ],
      icon: <Package className="w-5 h-5" />,
    },
    {
      title: "Asset Tracking & RTLS",
      description:
        "Know exactly where every asset is — from high-value equipment to returnable containers — with event-based RFID and continuous Real-Time Location Systems.",
      points: [
        "Event-based checkpoint tracking",
        "Continuous indoor positioning",
        "Reduce ghost assets and losses",
      ],
      icon: <MapPin className="w-5 h-5" />,
    },
    {
      title: "Supply Chain Visibility",
      description:
        "Track goods from receiving dock to final delivery. Automate inbound/outbound processes and gain full traceability across every node in your supply chain.",
      points: [
        "End-to-end shipment traceability",
        "Automated receiving & dispatch",
        "Multi-site tracking support",
      ],
      icon: <Truck className="w-5 h-5" />,
    },
    {
      title: "Access Control & Security",
      description:
        "Secure facilities, data centers, and sensitive zones with RFID-based personnel access — integrated with alarms and audit-ready access logs.",
      points: [
        "Personnel & visitor management",
        "Real-time unauthorized-entry alerts",
        "Tamper-evident audit trails",
      ],
      icon: <ShieldCheck className="w-5 h-5" />,
    },
    {
      title: "Work-in-Progress Tracking",
      description:
        "Monitor materials, components, and assemblies as they move through each production stage, eliminating bottlenecks and reducing cycle times.",
      points: [
        "Stage-by-stage WIP visibility",
        "Work order status automation",
        "Production schedule adherence",
      ],
      icon: <RefreshCw className="w-5 h-5" />,
    },
    {
      title: "Compliance & Reporting",
      description:
        "Maintain accurate, audit-ready records for regulatory compliance. Automated reports reduce manual documentation and ensure inspection readiness at all times.",
      points: [
        "Automated audit-ready logs",
        "Custom compliance dashboards",
        "Integration with GRC platforms",
      ],
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ];

  const industries = [
    {
      icon: "🏭",
      title: "Manufacturing",
      desc: "Track raw materials, WIP, tools, and finished goods across production lines. Prevent bottlenecks and ensure smooth workflow management.",
    },
    {
      icon: "🏥",
      title: "Healthcare",
      desc: "Manage medical devices, lab samples, pharmaceuticals, and equipment calibration schedules with high-accuracy RFID tagging.",
    },
    {
      icon: "🛒",
      title: "Retail",
      desc: "Boost inventory accuracy, enable self-checkout, and prevent stockouts. RFID-driven retail operations reduce shrinkage significantly.",
    },
    {
      icon: "📦",
      title: "Logistics & Warehousing",
      desc: "Automate receiving, picking, and replenishment. Improve stock visibility and reduce cycle count time from days to hours.",
    },
    {
      icon: "🏗️",
      title: "Construction & Facilities",
      desc: "Schedule preventive maintenance based on actual usage data. Prevent loss of high-value tools and materials across job sites.",
    },
    {
      icon: "🏛️",
      title: "Government & Defense",
      desc: "Maintain chain-of-custody for sensitive assets and classified equipment. Support compliance with federal asset tracking mandates.",
    },
  ];

  const techComponents = [
    {
      icon: <Tag className="w-5 h-5" />,
      label: "Passive RFID Tags",
      desc: "Battery-free tags powered by reader signal. Read range up to 12m. Ideal for item-level and inventory tracking.",
    },
    {
      icon: <Radio className="w-5 h-5" />,
      label: "Active RFID Tags",
      desc: "Battery-powered tags with read range up to 100m. Designed for real-time location of high-value assets.",
    },
    {
      icon: <ScanLine className="w-5 h-5" />,
      label: "Fixed RFID Readers",
      desc: "Wall- or portal-mounted readers for continuous checkpoint monitoring at doorways, docks, and chokepoints.",
    },
    {
      icon: <Wifi className="w-5 h-5" />,
      label: "Handheld Readers",
      desc: "Mobile devices for on-the-go inventory audits, spot checks, and asset verification anywhere in the facility.",
    },
    {
      icon: <Server className="w-5 h-5" />,
      label: "Middleware & APIs",
      desc: "Integration layer that routes reader data to ERP, WMS, or SAP via REST APIs or JSON-RPC in real time.",
    },
    {
      icon: <MonitorDot className="w-5 h-5" />,
      label: "Analytics Dashboard",
      desc: "Centralized platform for asset utilization, location history, maintenance alerts, and compliance reporting.",
    },
  ];

  const whyItems = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "End-to-End Implementation",
      desc: "From hardware selection and tag deployment to software integration, training, and ongoing optimization — we handle every phase.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Seamless ERP/WMS Integration",
      desc: "Our RFID middleware integrates directly with SAP, Oracle, and any ERP or warehouse management system via secure APIs.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Enterprise-Grade Security",
      desc: "All RFID data flows are encrypted. Access controls, reader authentication, and compliance logging are built in by default.",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Scalable Architecture",
      desc: "Start with a single site and expand to global multi-facility deployments. Our platform scales with your operation — no rework needed.",
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Hardware Agnostic",
      desc: "We work with all leading RFID hardware — Zebra, Impinj, HID, and more — ensuring you're never locked into a single vendor.",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Proven ROI",
      desc: "Clients typically recover implementation costs within 12–18 months through labor savings, loss reduction, and improved asset utilization.",
    },
  ];

  const benefits = [
    "Reduce inventory audit time from days to hours",
    "Achieve 99.9% asset tracking accuracy",
    "Eliminate ghost assets and prevent theft",
    "Cut operational labor costs by up to 60%",
    "Enable real-time compliance reporting",
  ];

  const overallStats = [
    { num: "500+", label: "RFID Deployments" },
    { num: "99.9%", label: "Read Accuracy" },
    { num: "60%", label: "Cost Reduction" },
    { num: "12mo", label: "Avg. ROI Payback" },
  ];

  const faqs = [
    {
      q: "What is RFID and how does it differ from barcode scanning?",
      a: "RFID uses radio waves to read tags without requiring line-of-sight, and can read hundreds of tags simultaneously. Barcodes require direct optical scanning of each item individually. RFID is up to 2800% faster for bulk inventory, stores more data per tag, and operates reliably in harsh environments.",
    },
    {
      q: "What types of RFID tags should I use for my application?",
      a: "Passive tags (no battery, UHF 860–960 MHz) are best for most inventory and asset tracking needs — low cost, durable, read range up to 12m. Active tags carry their own battery and are used for real-time location of high-value assets up to 100m away. Semi-passive tags combine both for specialized use cases.",
    },
    {
      q: "Can RFID integrate with our existing ERP or WMS system?",
      a: "Yes. Our RFID middleware integrates with SAP, Oracle, Microsoft Dynamics, and custom ERP/WMS platforms via REST APIs or JSON-RPC. Data from RFID readers flows directly into your system in real time, eliminating manual data entry.",
    },
    {
      q: "How accurate is RFID asset tracking?",
      a: "Modern UHF RFID systems achieve read accuracy of 99.9% or higher in well-configured deployments. Accuracy depends on reader placement, tag type, and environmental factors like metal or liquid proximity — all of which our team assesses and optimizes during installation.",
    },
    {
      q: "What industries benefit most from RFID solutions?",
      a: "Manufacturing, healthcare, logistics and warehousing, retail, construction, and government/defense see the strongest ROI. Any operation managing large volumes of physical assets — tools, inventory, equipment, containers, personnel — is a strong candidate for RFID.",
    },
    {
      q: "How long does an RFID implementation take?",
      a: "A single-site deployment typically takes 6–12 weeks from site survey to go-live. Multi-site enterprise rollouts are phased over 3–6 months. Timelines vary based on asset volume, integration complexity, and existing infrastructure.",
    },
  ];

  return (
    <div className={styles.page}>
      {/* ── STICKY CTA ───────────────────────────────────────────── */}
      <div
        className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}
      >
        <span className={styles.stickyCtaText}>
          Ready to transform your asset visibility?
        </span>
        <button className={styles.stickyCtaBtn}>Get a Free Consultation</button>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            RFID Solutions
          </div>

          <h1 className={styles.heroTitle}>
            Track Every Asset.
            <br />
            <em>Control Every Operation.</em>
          </h1>

          <p className={styles.heroDesc}>
            Enterprise-grade RFID solutions that deliver real-time visibility
            across inventory, assets, and supply chains — integrating seamlessly
            with your existing ERP and WMS infrastructure.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>
              Get a Free Consultation
            </button>
            <button className={styles.btnGhost}>See How It Works</button>
          </div>
        </div>

        {/* Glass stats row */}
        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────────── */}
      <section className={styles.howSection}>
        <div className={styles.howInner}>
          <StaggerIn>
            <div className={styles.howHeader}>
              <span className={styles.sectionEyebrow}>How It Works</span>
              <h2 className={styles.sectionTitle}>
                From Tag to <em>Full Visibility</em>
              </h2>
              <p className={styles.sectionDesc}>
                RFID works through electromagnetic communication — radio signals
                pass between tags and readers, transmitting asset identity and
                updating your tracking platform automatically.
              </p>
            </div>
          </StaggerIn>
          <div className={styles.howSteps}>
            {howSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.howStep}>
                  <div className={styles.howStepNum}>{step.num}</div>
                  <h3 className={styles.howStepTitle}>{step.title}</h3>
                  <p className={styles.howStepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTIONS ────────────────────────────────────────────── */}
      <section className={styles.solutions}>
        <div className={styles.solutionsInner}>
          <StaggerIn>
            <div className={styles.solutionsHeader}>
              <span className={styles.sectionEyebrow}>Solutions</span>
              <h2 className={styles.sectionTitle}>
                RFID for <em>Every Use Case</em>
              </h2>
              <p className={styles.sectionDesc}>
                Whether you're managing warehouse inventory, tracking field
                assets, or securing a data center, our RFID solutions are
                engineered for accuracy at scale.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.cardsGrid}>
            {solutions.map((s, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.card}>
                  <div className={styles.cardBorderTop} />
                  <div className={styles.cardIconWrap}>{s.icon}</div>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.description}</p>
                  <ul className={styles.cardPoints}>
                    {s.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ───────────────────────────────────────────── */}
      <section className={styles.industriesSection}>
        <div className={styles.industriesInner}>
          <StaggerIn>
            <div className={styles.industriesHeader}>
              <span className={styles.sectionEyebrow}>Industries</span>
              <h2 className={styles.sectionTitle}>
                Built for <em>Your Sector</em>
              </h2>
              <p className={styles.sectionDesc}>
                RFID transforms operations across every asset-intensive industry
                — from factory floors and hospital wings to retail floors and
                logistics hubs.
              </p>
            </div>
          </StaggerIn>
          <div className={styles.industriesGrid}>
            {industries.map((ind, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.industryCard}>
                  <span className={styles.industryIcon}>{ind.icon}</span>
                  <h3 className={styles.industryTitle}>{ind.title}</h3>
                  <p className={styles.industryDesc}>{ind.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ───────────────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <div className={styles.techHeader}>
            <StaggerIn>
              <span
                className={styles.sectionEyebrow}
                style={{ color: "var(--color-primary)" }}
              >
                Technology
              </span>
              <h2 className={styles.techTitle}>
                The Hardware &amp; Software
                <br />
                <em>Behind Every Deployment</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                Our RFID deployments combine proven UHF hardware, open
                integration middleware, and enterprise analytics — all
                hardware-agnostic so you choose the vendors that fit your
                budget and environment.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.techGrid}>
            {techComponents.map((tech, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.techItem}>
                  <div className={styles.techItemIcon}>{tech.icon}</div>
                  <div>
                    <div className={styles.techItemLabel}>{tech.label}</div>
                    <div className={styles.techItemDesc}>{tech.desc}</div>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────── */}
      <section className={styles.whySection}>
        <StaggerIn className={styles.whyLeft}>
          <span className={styles.sectionEyebrow}>Why Choose Us</span>
          <h2 className={styles.sectionTitle}>
            The Partner Behind
            <br />
            <em>Your RFID Success</em>
          </h2>
          <p className={styles.sectionDesc}>
            Deploying RFID is more than installing tags and readers. It demands
            careful environment assessment, reader optimization, and deep
            integration expertise. That's what we deliver.
          </p>
          <ul className={styles.benefitsList}>
            {benefits.map((b, i) => (
              <li className={styles.benefitsItem} key={i}>
                <span className={styles.benefitCheck}>✓</span>
                {b}
              </li>
            ))}
          </ul>
        </StaggerIn>

        <div className={styles.whyRight}>
          {whyItems.map((item, i) => (
            <StaggerIn key={i} delay={i * 0.07}>
              <div className={styles.whyItem}>
                <div className={styles.whyItemIcon}>{item.icon}</div>
                <div>
                  <div className={styles.whyItemTitle}>{item.title}</div>
                  <div className={styles.whyItemDesc}>{item.desc}</div>
                </div>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {overallStats.map((s, i) => (
          <div className={styles.statItem} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <StaggerIn className={styles.faqLeft}>
            <span className={styles.sectionEyebrow}>FAQ</span>
            <h2 className={styles.sectionTitle}>
              Common
              <br />
              <em>Questions</em>
            </h2>
            <p className={styles.sectionDesc}>
              Everything you need to know about deploying RFID in your
              operation — from tag selection to full enterprise integration.
            </p>
          </StaggerIn>

          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.open : ""}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {faq.q}
                  <span className={styles.faqIcon}>+</span>
                </button>
                <div className={styles.faqAnswer}>
                  <div className={styles.faqAnswerContent}>{faq.a}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <h2 className={styles.ctaTitle}>
              Ready to Deploy
              <br />
              <em>RFID at Scale?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Talk to our RFID specialists for a free site assessment and
              discover how real-time asset visibility can transform your
              operation.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>
                Get a Free Consultation
              </button>
              <button className={styles.btnGhost}>View Case Studies</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section>
        <div className={styles.contactSection}>
          <StaggerIn className={styles.contactLeft}>
            <h2 className={styles.contactTitle}>
              Let's Build Your
              <br />
              <em>RFID Solution</em>
            </h2>
            <p className={styles.contactDesc}>
              Whether you're deploying RFID for the first time or scaling an
              existing system, our team is ready to design a solution that fits
              your environment and budget.
            </p>
            <div className={styles.contactMeta}>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                Response within 1 business day
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                Free site assessment included
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                No commitment required
              </div>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.1}>
            <form className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>First Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="John"
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Last Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="Smith"
                  />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Work Email</label>
                <input
                  type="email"
                  className={styles.formInput}
                  placeholder="john@company.com"
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Company</label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Acme Corp"
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Use Case</label>
                <select className={`${styles.formInput} ${styles.formSelect}`}>
                  <option value="">Select your primary use case</option>
                  <option>Inventory Management</option>
                  <option>Asset Tracking</option>
                  <option>Supply Chain Visibility</option>
                  <option>Access Control</option>
                  <option>WIP / Production Tracking</option>
                  <option>Compliance & Reporting</option>
                  <option>Other</option>
                </select>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Tell Us More</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Briefly describe your asset tracking challenge or project scope…"
                />
              </div>
              <button type="button" className={styles.formSubmit}>
                Request a Free Consultation
              </button>
            </form>
          </StaggerIn>
        </div>
      </section>
    </div>
  );
}