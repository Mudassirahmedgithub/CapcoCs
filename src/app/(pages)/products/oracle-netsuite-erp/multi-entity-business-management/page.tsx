// MultiEntityPage.tsx
// Multi-Entity Business Management — NetSuite ERP-inspired
// CSS Module: multi.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Building2,
  Globe2,
  BarChart3,
  Layers,
  GitMerge,
  ShieldCheck,
  Database,
  RefreshCw,
  FileText,
  CreditCard,
  Package,
  Users,
  TrendingUp,
  Lock,
  Workflow,
  Settings2,
  ArrowRight,
  CheckCircle2,
  Lightbulb,
  Zap,
  Network,
  PieChart,
  Scale,
  Server,
  CloudCog,
} from "lucide-react";
import styles from "./multi.module.css";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────────────────────── */
/*  Types                                                          */
/* ─────────────────────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ───────────────────────────  */
function useInView(
  threshold = 0.12
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

/* ── Stagger fade-up wrapper ─────────────────────────────────── */
function StaggerIn({ children, className, delay = 0 }: StaggerInProps) {
  const [ref, visible] = useInView(0.08);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.75s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────── */
/*  Page Component                                                 */
/* ─────────────────────────────────────────────────────────────── */
export default function MultiEntityPage() {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 450);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* FAQ accordion */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── DATA ── */

  const stats = [
    { num: "50+", label: "Entities Managed" },
    { num: "99.9%", label: "Uptime SLA" },
    { num: "40%", label: "Finance Hours Saved" },
    { num: "160+", label: "Countries Supported" },
  ];

  const overviewItems = [
    { icon: <Building2 size={18} />, text: "Multi-Subsidiary Control" },
    { icon: <Globe2 size={18} />, text: "Multi-Currency & Tax" },
    { icon: <BarChart3 size={18} />, text: "Consolidated Reporting" },
    { icon: <GitMerge size={18} />, text: "Intercompany Automation" },
    { icon: <ShieldCheck size={18} />, text: "Role-Based Compliance" },
  ];

  const capabilities = [
    {
      icon: <Building2 size={22} />,
      title: "Subsidiary Management",
      desc: "Centrally govern unlimited subsidiaries, branches, and divisions while maintaining distinct books, currencies, and tax rules per entity.",
      points: [
        "Unlimited legal entities under one tenant",
        "Entity-level chart of accounts",
        "Consolidated and standalone financials",
        "Granular role & permission layers",
      ],
      featured: false,
    },
    {
      icon: <Globe2 size={22} />,
      title: "Global Financial Management",
      desc: "Handle multi-currency operations, automatic exchange-rate adjustments, and real-time translation across every subsidiary with GAAP/IFRS compliance built in.",
      points: [
        "190+ currencies with live FX rates",
        "Automated currency revaluation",
        "GAAP, IFRS, and local GAAP support",
        "Period close automation across entities",
        "Global tax engine — VAT, GST, WHT",
        "Transfer pricing documentation",
      ],
      featured: true,
    },
    {
      icon: <GitMerge size={22} />,
      title: "Intercompany Transactions",
      desc: "Eliminate manual journal entries. NetSuite auto-generates intercompany eliminations and reconciliations on the fly.",
      points: [
        "Automated IC billing & settlement",
        "Elimination entries at consolidation",
        "Intercompany netting runs",
        "AR/AP balance matching",
      ],
      featured: false,
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Consolidated Reporting",
      desc: "Produce group-level financial statements in minutes. Drill from consolidated view to transaction-level detail across any entity.",
      points: [
        "One-click consolidation",
        "Segment & department reporting",
        "Real-time vs. period-close snapshots",
        "Customisable report builder",
      ],
      featured: false,
    },
    {
      icon: <Layers size={22} />,
      title: "Shared Services Center",
      desc: "Centralise procurement, HR, and IT across entities through a shared-services model, reducing overhead while retaining entity-level accountability.",
      points: [
        "Centralised vendor & supplier master",
        "Cross-entity PO management",
        "Shared employee records & payroll",
        "Central IT asset management",
      ],
      featured: false,
    },
  ];

  const modules = [
    {
      icon: <FileText size={20} />,
      label: "General Ledger",
      sub: "Multi-book, multi-currency",
    },
    {
      icon: <CreditCard size={20} />,
      label: "Accounts Payable",
      sub: "Centralised & entity-level",
    },
    {
      icon: <TrendingUp size={20} />,
      label: "Accounts Receivable",
      sub: "Global billing automation",
    },
    {
      icon: <PieChart size={20} />,
      label: "Financial Reporting",
      sub: "Consolidated & statutory",
    },
    {
      icon: <Package size={20} />,
      label: "Inventory & WMS",
      sub: "Multi-location, multi-entity",
    },
    {
      icon: <Users size={20} />,
      label: "HR & Payroll",
      sub: "Global workforce management",
    },
    {
      icon: <Scale size={20} />,
      label: "Tax & Compliance",
      sub: "VAT, GST, WHT engine",
    },
    {
      icon: <Workflow size={20} />,
      label: "Procure-to-Pay",
      sub: "Shared services model",
    },
    {
      icon: <RefreshCw size={20} />,
      label: "Period Close",
      sub: "Automated close checklist",
    },
    {
      icon: <Database size={20} />,
      label: "Fixed Assets",
      sub: "Multi-depreciation methods",
    },
    {
      icon: <Server size={20} />,
      label: "Revenue Recognition",
      sub: "ASC 606 / IFRS 15",
    },
    {
      icon: <CloudCog size={20} />,
      label: "Project Accounting",
      sub: "Cross-entity project billing",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Blueprint",
      desc: "Map your entity structure, chart of accounts, and compliance requirements across all subsidiaries.",
    },
    {
      num: "02",
      title: "Configuration",
      desc: "Set up entities, currencies, tax codes, intercompany rules, and approval workflows in NetSuite.",
    },
    {
      num: "03",
      title: "Data Migration",
      desc: "Cleanse, transform, and load historical financials, vendors, customers, and inventory data.",
    },
    {
      num: "04",
      title: "Integration",
      desc: "Connect CRM, payroll, banking, e-commerce, and third-party systems via SuiteIntegrator or REST APIs.",
    },
    {
      num: "05",
      title: "Go-Live & Optimise",
      desc: "Parallel run, user training, hypercare support, and continuous performance tuning post-launch.",
    },
  ];

  const integrationItems = [
    {
      icon: <RefreshCw size={16} />,
      name: "SuiteIntegrator",
      desc: "Native bi-directional sync",
    },
    {
      icon: <Globe2 size={16} />,
      name: "REST & SOAP APIs",
      desc: "Open integration platform",
    },
    {
      icon: <Database size={16} />,
      name: "SuiteAnalytics Connect",
      desc: "ODBC / JDBC data warehouse",
    },
    {
      icon: <Settings2 size={16} />,
      name: "SuiteFlow / SuiteScript",
      desc: "Workflow & custom automation",
    },
    {
      icon: <FileText size={16} />,
      name: "EDI & XML",
      desc: "Supply chain document exchange",
    },
    {
      icon: <Lock size={16} />,
      name: "OAuth 2.0 / SSO",
      desc: "Secure identity federation",
    },
  ];

  const benefits = [
    {
      title: "Real-Time Visibility Across All Entities",
      desc: "Access a live, consolidated view of financials, inventory, and operations across every subsidiary from a single dashboard — no manual roll-ups required.",
    },
    {
      title: "Dramatically Reduced Period-Close Time",
      desc: "Automated intercompany eliminations and multi-currency revaluation compress month-end close from weeks to days, freeing your finance team for strategic work.",
    },
    {
      title: "Scalable Architecture as You Grow",
      desc: "Add new subsidiaries, countries, or business lines in hours — not months. NetSuite's multi-tenant SaaS model scales instantly without re-implementation.",
    },
    {
      title: "Audit-Ready Compliance Built In",
      desc: "Immutable audit trails, role-based access controls, and automated tax calculations ensure every entity stays compliant with local and international regulations.",
    },
  ];

  const whyCards = [
    {
      icon: <Zap size={20} />,
      title: "Faster Consolidation",
      desc: "Reduce financial close cycles by up to 40% through automated IC eliminations and currency revaluation — no spreadsheets.",
    },
    {
      icon: <Network size={20} />,
      title: "Single Source of Truth",
      desc: "Eliminate data silos across subsidiaries. Every transaction, report, and forecast flows from one unified platform.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Enterprise Compliance",
      desc: "Built-in SOX controls, VAT/GST engine, and audit-ready logs ensure compliance at every entity level, every jurisdiction.",
    },
    {
      icon: <Lightbulb size={20} />,
      title: "Strategic Insight",
      desc: "Move from reactive reporting to proactive planning with real-time KPIs, scenario modelling, and segment-level analytics.",
    },
    {
      icon: <Globe2 size={20} />,
      title: "Global-Ready by Default",
      desc: "190+ currencies, multi-language support, and country-localised tax rules mean you can enter new markets without re-implementing.",
    },
    {
      icon: <Settings2 size={20} />,
      title: "Configurable, Not Coded",
      desc: "SuiteFlow workflows, SuiteScript customisations, and saved searches let you tailor processes without costly bespoke development.",
    },
  ];

  const whyBullets = [
    "NetSuite-certified implementation team",
    "Multi-industry vertical expertise",
    "Post-go-live managed services",
    "Fixed-price project delivery options",
    "24/7 regional support coverage",
  ];

  const faqs = [
    {
      q: "What is Multi-Entity Management in NetSuite?",
      a: "Multi-Entity Management (MEM) in NetSuite — also called OneWorld — is a global business management solution that enables organisations to manage multiple subsidiaries, legal entities, and business units within a single NetSuite account. It consolidates financials, harmonises intercompany transactions, and produces group-level reporting in real time.",
    },
    {
      q: "How does NetSuite handle intercompany transactions?",
      a: "NetSuite automatically generates intercompany journal entries, AR/AP records, and elimination entries when transactions occur between entities. This eliminates manual reconciliation at period close and ensures consolidated financials are always accurate and audit-ready.",
    },
    {
      q: "Can NetSuite handle different accounting standards per entity?",
      a: "Yes. With multi-book accounting, each subsidiary can maintain books under different standards — GAAP, IFRS, or local statutory — simultaneously. NetSuite records transactions across all books in real time, without duplicate data entry.",
    },
    {
      q: "How many entities and currencies can NetSuite support?",
      a: "NetSuite OneWorld supports an unlimited number of subsidiaries and over 190 currencies with live or fixed exchange rates. The platform has no hard cap on entities, making it suitable for both emerging multi-entity companies and large global enterprises.",
    },
    {
      q: "How long does a typical NetSuite multi-entity implementation take?",
      a: "Timelines vary by complexity, but a well-scoped 3–5 entity implementation typically takes 3–6 months from discovery to go-live. Larger global rollouts with complex integrations and extensive data migration may run 9–18 months. Our phased methodology reduces risk and gets core entities live faster.",
    },
    {
      q: "Can we integrate NetSuite with our existing ERP or third-party systems?",
      a: "Absolutely. NetSuite provides REST and SOAP APIs, native SuiteIntegrator connectors, ODBC/JDBC data access via SuiteAnalytics Connect, and a robust SuiteApp marketplace. Common integrations include Salesforce CRM, payroll systems (ADP, Ceridian), banking platforms, e-commerce (Shopify, Magento), and EDI providers.",
    },
  ];

  return (
    <div className={styles.page}>
      {/* ── STICKY CTA ───────────────────────────────────────────── */}
      <div
        className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}
      >
        <span className={styles.stickyCtaText}>
          Manage all your entities from one platform
        </span>
        <button className={styles.stickyCtaBtn}>Get a Free Assessment</button>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />

        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            NetSuite OneWorld — Multi-Entity Management
          </div>

          <h1 className={styles.heroTitle}>
            One Platform.
            <br />
            <em>Every Entity. Everywhere.</em>
          </h1>

          <p className={styles.heroDesc}>
            Consolidate financials, automate intercompany transactions, and gain
            real-time visibility across every subsidiary — from a single NetSuite
            instance built for global, multi-entity organisations.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Schedule a Live Demo</button>
            <button className={styles.btnGhost}>View Implementation Guide</button>
          </div>
        </div>

        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW STRIP ───────────────────────────────────────── */}
      <div className={styles.overviewStrip}>
        {overviewItems.map((item, i) => (
          <React.Fragment key={i}>
            <div className={styles.overviewItem}>
              <div className={styles.overviewIcon}>{item.icon}</div>
              <span className={styles.overviewItemText}>{item.text}</span>
            </div>
            {i < overviewItems.length - 1 && (
              <div className={styles.overviewDivider} />
            )}
          </React.Fragment>
        ))}
      </div>

      {/* ── CAPABILITIES ─────────────────────────────────────────── */}
      <section className={styles.capabilities}>
        <div className={styles.capabilitiesInner}>
          <StaggerIn>
            <div className={styles.capabilitiesHeader}>
              <span className={styles.sectionEyebrow}>Core Capabilities</span>
              <h2 className={styles.sectionTitle}>
                Everything Your Group Needs to{" "}
                <em>Operate as One</em>
              </h2>
              <p className={styles.sectionDesc}>
                NetSuite OneWorld delivers a complete, unified management layer
                across subsidiaries — handling the complexity so your finance,
                ops, and compliance teams don't have to.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.capabilitiesGrid}>
            {capabilities.map((cap, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div
                  className={`${styles.capCard} ${cap.featured ? styles.capCardFeatured : ""}`}
                >
                  <div className={styles.capIconWrap}>{cap.icon}</div>
                  <h3 className={styles.capCardTitle}>{cap.title}</h3>
                  <p className={styles.capCardDesc}>{cap.desc}</p>
                  <ul className={styles.capCardList}>
                    {cap.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── MODULES ──────────────────────────────────────────────── */}
      <section className={styles.modules}>
        <div className={styles.modulesInner}>
          <div className={styles.modulesHeader}>
            <StaggerIn>
              <span
                className={styles.sectionEyebrow}
                style={{ color: "var(--color-primary)" }}
              >
                Platform Modules
              </span>
              <h2
                className={styles.sectionTitle}
                style={{ color: "var(--color-white)" }}
              >
                A Complete ERP Suite <em>Built for Complexity</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.12}>
              <p
                className={styles.sectionDesc}
                style={{ color: "rgba(255,255,255,0.42)" }}
              >
                NetSuite's modular architecture means you activate what you need
                today and expand as your business grows — all within the same
                multi-entity environment.
              </p>
            </StaggerIn>
          </div>

          <StaggerIn delay={0.18}>
            <div className={styles.modulesGrid}>
              {modules.map((mod, i) => (
                <div className={styles.moduleItem} key={i}>
                  <div className={styles.moduleItemIcon}>{mod.icon}</div>
                  <div className={styles.moduleItemLabel}>{mod.label}</div>
                  <div className={styles.moduleItemSub}>{mod.sub}</div>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.processHeader}>
              <span className={styles.sectionEyebrow}>Implementation Approach</span>
              <h2 className={styles.sectionTitle}>
                A Proven Path to <em>Multi-Entity Success</em>
              </h2>
              <p className={styles.sectionDesc}>
                Our structured methodology reduces risk, accelerates time-to-value,
                and ensures every entity is configured correctly from day one.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.processStep}>
                  <div className={styles.processStepNum}>{step.num}</div>
                  <div>
                    <div className={styles.processStepTitle}>{step.title}</div>
                    <p className={styles.processStepDesc}>{step.desc}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ───────────────────────────────────────────── */}
      <section className={styles.statsBand}>
        <div className={styles.statsBandInner}>
          {[
            { num: "3–6 mo", label: "Avg. Time to Go-Live" },
            { num: "40%", label: "Reduction in Close Time" },
            { num: "190+", label: "Currencies Supported" },
            { num: "0", label: "Manual IC Journals Needed" },
          ].map((s, i) => (
            <div className={styles.statItem} key={i}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── INTEGRATIONS & BENEFITS ──────────────────────────────── */}
      <section className={styles.integrations}>
        <div className={styles.integrationsInner}>
          <StaggerIn>
            <div className={styles.integrationsLeft}>
              <span className={styles.sectionEyebrow}>Integrations</span>
              <h2 className={styles.sectionTitle}>
                Connects to Your <em>Entire Ecosystem</em>
              </h2>
              <p
                className={styles.sectionDesc}
                style={{ marginBottom: "0.5rem" }}
              >
                NetSuite integrates natively with leading CRMs, payroll platforms,
                banking, e-commerce, and logistics systems through open APIs and
                SuiteIntegrator connectors.
              </p>

              <div className={styles.integrationsList}>
                {integrationItems.map((item, i) => (
                  <div className={styles.integrationItem} key={i}>
                    <div className={styles.integrationItemIcon}>{item.icon}</div>
                    <div>
                      <div className={styles.integrationItemName}>
                        {item.name}
                      </div>
                      <div className={styles.integrationItemDesc}>
                        {item.desc}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </StaggerIn>

          <div className={styles.integrationsRight}>
            <StaggerIn delay={0.1}>
              <h3
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "1.6rem",
                  color: "var(--color-ink)",
                  marginBottom: "1.75rem",
                  letterSpacing: "-0.02em",
                  fontWeight: 400,
                }}
              >
                Business Outcomes That <em style={{ color: "var(--color-primary)" }}>Matter</em>
              </h3>
            </StaggerIn>

            {benefits.map((b, i) => (
              <StaggerIn key={i} delay={0.12 + i * 0.08}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitCardTitle}>{b.title}</div>
                  <p className={styles.benefitCardDesc}>{b.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────── */}
      <section className={styles.why}>
        <div className={styles.whyInner}>
          <StaggerIn>
            <div className={styles.whyLeft}>
              <span className={styles.sectionEyebrow}>Why Choose Us</span>
              <h2 className={styles.sectionTitle}>
                The Right Partner for <em>Enterprise NetSuite</em>
              </h2>
              <p
                className={styles.sectionDesc}
                style={{ marginBottom: "2rem" }}
              >
                Multi-entity implementations demand deep platform expertise,
                financial process knowledge, and rigorous project governance.
                We deliver all three.
              </p>

              <div className={styles.whyBullets}>
                {whyBullets.map((b, i) => (
                  <div className={styles.whyBulletItem} key={i}>
                    {b}
                  </div>
                ))}
              </div>
            </div>
          </StaggerIn>

          <div className={styles.whyRight}>
            {whyCards.map((card, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardIcon}>{card.icon}</div>
                  <div className={styles.whyCardTitle}>{card.title}</div>
                  <p className={styles.whyCardDesc}>{card.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <StaggerIn>
            <h2 className={styles.ctaTitle}>
              Ready to Unify Your <em>Global Operations?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Whether you manage 3 entities or 300, we'll design a NetSuite
              architecture that scales with your ambition — and delivers ROI in
              the first year.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>
                Book a Free Consultation
              </button>
              <button className={styles.btnGhostLight}>
                Download Capability Deck
              </button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.faqLeft}>
              <span className={styles.sectionEyebrow}>FAQ</span>
              <h2 className={styles.sectionTitle}>
                Common Questions About <em>NetSuite Multi-Entity</em>
              </h2>
              <p className={styles.sectionDesc}>
                Everything you need to know before embarking on a multi-entity
                NetSuite implementation — answered by our certified consultants.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.1}>
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
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Get in Touch</span>
              <h2 className={styles.contactTitle}>
                Start Your <em>Multi-Entity Journey</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your entity structure and current ERP challenges.
                Our NetSuite specialists will prepare a tailored assessment and
                roadmap within 48 hours.
              </p>

              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  NetSuite-certified consultants available now
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Response guaranteed within 24 business hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  No obligation — free initial scoping call
                </div>
              </div>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.12}>
            <div className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>First Name</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Jane"
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Last Name</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email</label>
                  <input
                    className={styles.formInput}
                    type="email"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone</label>
                  <input
                    className={styles.formInput}
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Company Name</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Acme Holdings Ltd"
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Number of Entities</label>
                  <select className={styles.formSelect}>
                    <option value="">Select range</option>
                    <option>2–5 entities</option>
                    <option>6–20 entities</option>
                    <option>21–50 entities</option>
                    <option>50+ entities</option>
                  </select>
                </div>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Countries of Operation</label>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="e.g. USA, UK, Singapore, UAE"
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Current ERP / Pain Points</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Tell us about your current setup, key challenges, or what you'd like to achieve with NetSuite…"
                />
              </div>

              <button className={styles.formSubmit}>
                Request Free Assessment →
              </button>
            </div>
          </StaggerIn>
        </div>
      </section>
    </div>
  );
}