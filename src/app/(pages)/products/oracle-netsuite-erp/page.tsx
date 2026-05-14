// app/oracle-netsuite-erp/page.tsx
// Oracle NetSuite ERP hub page
// CSS Module: oracle.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./oracle.module.css";

/* ── Scroll-triggered visibility hook ─────────────────────── */
function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] {
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

/* ── Stagger-in wrapper ─────────────────────────────────────── */
type StaggerInProps = { children: ReactNode; className?: string; delay?: number };

function StaggerIn({ children, className, delay = 0 }: StaggerInProps) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1),
                     transform 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */

export default function OracleNetsuitePage() {
  /* ── Data ── */
  const solutions = [
    {
      label: "Financial & Accounting Management",
      icon: "💰",
      description:
        "Automated accounting, billing, financial reporting, and compliance management — all unified in a single cloud platform.",
      href: "/services/oracle-netsuite-erp/financial-accounting-management",
    },
    {
      label: "Inventory, Warehouse & Supply Chain",
      icon: "📦",
      description:
        "Real-time inventory control, warehouse operations, procurement workflows, and end-to-end logistics visibility.",
      href: "/services/oracle-netsuite-erp/inventory-warehouse-supply-chain",
    },
    {
      label: "Order & Production Management",
      icon: "🏭",
      description:
        "Sales order processing, manufacturing workflows, and production planning — streamlined from quote to fulfilment.",
      href: "/services/oracle-netsuite-erp/order-production-management",
    },
    {
      label: "Project Management",
      icon: "📁",
      description:
        "Project tracking, budgeting, resource allocation, and profitability management with full lifecycle visibility.",
      href: "/services/oracle-netsuite-erp/project-management",
    },
    {
      label: "Analytics & AI Insights",
      icon: "📊",
      description:
        "Real-time dashboards, KPI reporting, AI-powered analytics, and data insights to drive smarter business decisions.",
      href: "/services/oracle-netsuite-erp/analytics-ai-insights",
    },
    {
      label: "Multi-Entity Business Management",
      icon: "🌐",
      description:
        "Manage subsidiaries, business units, and global operations across currencies, tax regimes, and geographies — from one platform.",
      href: "/services/oracle-netsuite-erp/multi-entity-business-management",
    },
    {
      label: "ERP Implementation & Support",
      icon: "⚙️",
      description:
        "End-to-end NetSuite deployment, customisation, integration, training, and ongoing support services tailored to your business.",
      href: "/services/oracle-netsuite-erp/erp-implementation-support",
    },
  ];

  const overviewCards = [
    {
      title: "Unified Cloud Platform",
      desc: "Consolidate finance, inventory, operations, and reporting into a single, always-on ERP environment.",
    },
    {
      title: "Real-Time Visibility",
      desc: "Access live dashboards and KPI reports across every business unit the moment data changes.",
    },
    {
      title: "Compliance & Control",
      desc: "Built-in audit trails, multi-currency support, and regulatory reporting keep your organisation compliant.",
    },
    {
      title: "Rapid Scalability",
      desc: "Grow from a single entity to a global multi-subsidiary operation without re-platforming.",
    },
  ];

  const benefitCards = [
    {
      icon: "📉",
      title: "Reduce Operational Costs",
      desc: "Automate manual processes across finance, procurement, and operations to significantly cut overhead and administrative effort.",
    },
    {
      icon: "⚡",
      title: "Accelerate Business Cycles",
      desc: "Speed up order-to-cash, procure-to-pay, and project-to-invoice cycles with end-to-end workflow automation.",
    },
    {
      icon: "🧠",
      title: "Drive Smarter Decisions",
      desc: "Leverage AI-powered analytics and real-time dashboards to move from reactive reporting to proactive planning.",
    },
    {
      icon: "🌐",
      title: "Scale Without Complexity",
      desc: "Onboard new subsidiaries, markets, and business units seamlessly — without disrupting your existing operations.",
    },
  ];

  const stats = [
    { num: "37K+", label: "Global Customers" },
    { num: "99.5%", label: "Uptime SLA" },
    { num: "50%", label: "Faster Close" },
    { num: "Real-Time", label: "Reporting" },
  ];

  const faqs = [
    {
      q: "What is Oracle NetSuite ERP?",
      a: "Oracle NetSuite is a cloud-based ERP platform that unifies financial management, CRM, inventory, order management, project tracking, and analytics into a single system — eliminating data silos and giving organisations a complete view of their operations.",
    },
    {
      q: "How long does a NetSuite implementation take?",
      a: "Implementation timelines vary by scope and complexity. A focused deployment for a small business can take as few as 60–90 days, while larger multi-entity or highly customised rollouts typically run 3–9 months. We provide a detailed project plan at the outset.",
    },
    {
      q: "Can NetSuite handle multi-entity and multi-currency operations?",
      a: "Yes. NetSuite's OneWorld module is purpose-built for organisations with multiple subsidiaries, currencies, tax jurisdictions, and legal entities — providing consolidated reporting with local-level granularity.",
    },
    {
      q: "Does NetSuite integrate with our existing systems?",
      a: "NetSuite supports hundreds of pre-built integrations and offers a robust REST and SOAP API. We manage the full integration lifecycle — from mapping data flows and configuring connectors to testing and go-live support.",
    },
    {
      q: "What ongoing support do you provide post go-live?",
      a: "Our support services include system administration, user training, performance optimisation, module expansions, and a dedicated helpdesk — ensuring your NetSuite environment evolves alongside your business.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Oracle NetSuite ERP
          </div>

          <h1 className={styles.heroTitle}>
            Cloud ERP Built for
            <br />
            <em>Business Without Limits</em>
          </h1>

          <p className={styles.heroDesc}>
            Unify finance, inventory, operations, and analytics on one AI-powered
            platform — giving your organisation complete visibility and control
            from day one through global scale.
          </p>

          <div className={styles.heroActions}>
            <a href="#solutions" className={styles.btnPrimary}>Explore Solutions</a>
            <a href="/contact" className={styles.btnGhost}>Request a Demo</a>
          </div>
        </div>

        {/* Stats glass row */}
        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ───────────────────────────────────────── */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <StaggerIn>
            <div className={styles.overviewLeft}>
              <span className={styles.sectionEyebrow}>Why Oracle NetSuite</span>
              <h2 className={styles.overviewTitle}>
                One Platform to Run Your
                <br />
                <em>Entire Business</em>
              </h2>
              <p className={styles.overviewDesc}>
                NetSuite gives growing organisations a single source of truth —
                replacing fragmented spreadsheets and disconnected point solutions
                with an integrated cloud ERP that spans every function.
              </p>
              <p className={styles.overviewDesc} style={{ marginTop: "1rem" }}>
                Whether you're managing financial close, tracking inventory across
                multiple warehouses, running complex projects, or consolidating
                global subsidiaries, NetSuite provides the real-time data and
                automation your team needs to move faster and operate with confidence.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.overviewRight}>
              {overviewCards.map((card, i) => (
                <div className={styles.overviewCard} key={i}>
                  <h3 className={styles.overviewCardTitle}>{card.title}</h3>
                  <p className={styles.overviewCardDesc}>{card.desc}</p>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ─────────────────────────────────── */}
      <section className={styles.solutions} id="solutions">
        <div className={styles.solutionsInner}>
          <StaggerIn>
            <div className={styles.solutionsHeader}>
              <span className={styles.sectionEyebrow}>Our NetSuite Capabilities</span>
              <h2 className={styles.sectionTitle}>
                Specialised Solutions for <em>Every Function</em>
              </h2>
              <p className={styles.sectionDesc}>
                From financial management and supply chain to analytics and multi-entity
                operations, we implement and support the full suite of NetSuite modules.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.solutionsGrid}>
            {solutions.map((solution, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <a href={solution.href} className={styles.solutionCard}>
                  <div className={styles.solutionIconWrap}>{solution.icon}</div>
                  <h3 className={styles.solutionTitle}>{solution.label}</h3>
                  <p className={styles.solutionDesc}>{solution.description}</p>
                  <span className={styles.solutionLink}>Learn More →</span>
                </a>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── BUSINESS BENEFITS ──────────────────────────────── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <StaggerIn>
            <div className={styles.benefitsLeft}>
              <span className={styles.sectionEyebrow}>Business Benefits</span>
              <h2 className={styles.benefitsTitle}>
                Built to Deliver <em>Measurable</em>
                <br />
                Business Outcomes
              </h2>
              <p className={styles.benefitsSubdesc}>
                Organisations that move to NetSuite consistently report faster
                financial close, lower operational costs, and greater agility —
                backed by a platform trusted by over 37,000 customers worldwide.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.benefitsRight}>
              {benefitCards.map((card, i) => (
                <div className={styles.benefitCard} key={i}>
                  <div className={styles.benefitCardIcon}>{card.icon}</div>
                  <div className={styles.benefitCardBody}>
                    <h3 className={styles.benefitCardTitle}>{card.title}</h3>
                    <p className={styles.benefitCardDesc}>{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <StaggerIn>
          <div className={styles.ctaBandInner}>
            <h2 className={styles.ctaBandTitle}>
              Ready to Transform Your
              <br />
              Business Operations?
            </h2>
            <p className={styles.ctaBandDesc}>
              Talk to our NetSuite specialists and discover how Oracle NetSuite
              can streamline your finance, operations, and growth — all in one platform.
            </p>
            <div className={styles.ctaBandActions}>
              <a href="/contact" className={styles.ctaBtnWhite}>Schedule a Consultation</a>
              <a href="#solutions" className={styles.ctaBtnOutline}>Explore Solutions</a>
            </div>
          </div>
        </StaggerIn>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.faqLeft}>
              <span className={styles.sectionEyebrow}>FAQ</span>
              <h2 className={styles.faqTitle}>
                Frequently Asked
                <br />
                <em>Questions</em>
              </h2>
              <p className={styles.faqSub}>
                Everything you need to know about implementing Oracle NetSuite
                ERP for your organisation.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <details className={styles.faqItem} key={i}>
                  <summary>{f.q}</summary>
                  <p className={styles.faqAnswer}>{f.a}</p>
                </details>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}