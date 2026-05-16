// app/warehouse-management/page.tsx
// Premium Warehouse Management hub page
// CSS Module: warehouse.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./warehouse.module.css";

/* ── Scroll-triggered visibility hook ──────────────────────────── */
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

/* ── Stagger-in wrapper ─────────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────── */

export default function WarehouseManagementPage() {
  /* ── Data ── */
  const solutions = [
    {
      label: "Inventory Management",
      icon: "📦",
      description:
        "Gain real-time visibility into stock levels, locations, and movements across your entire warehouse to prevent stockouts and overstock situations.",
      href: "/services/warehouse-management/inventory-management",
    },
    {
      label: "Order Fulfillment",
      icon: "🚚",
      description:
        "Streamline picking, packing, and shipping workflows to increase throughput, reduce errors, and deliver orders faster.",
      href: "/services/warehouse-management/order-fulfillment",
    },
    {
      label: "Warehouse Automation",
      icon: "🤖",
      description:
        "Deploy automated systems — from barcode scanning to conveyor integration — to improve speed, accuracy, and operational consistency.",
      href: "/services/warehouse-management/warehouse-automation",
    },
    {
      label: "Stock Auditing & Reporting",
      icon: "📊",
      description:
        "Run accurate cycle counts, reconcile inventory discrepancies, and generate compliance-ready reports with centralised auditing tools.",
      href: "/services/warehouse-management/stock-auditing-reporting",
    },
  ];

  const overviewCards = [
    {
      title: "Real-Time Visibility",
      desc: "Monitor every item's location and status across all warehouse zones instantly.",
    },
    {
      title: "Reduced Errors",
      desc: "Eliminate manual mistakes with automated scanning and validation workflows.",
    },
    {
      title: "Faster Throughput",
      desc: "Optimised picking routes and automation drive measurable speed gains.",
    },
    {
      title: "Audit-Ready Data",
      desc: "Keep accurate, up-to-date records for compliance and financial reporting.",
    },
  ];

  const benefitCards = [
    {
      icon: "📉",
      title: "Cut Carrying Costs",
      desc: "Reduce excess inventory and dead stock with demand-driven replenishment and accurate forecasting.",
    },
    {
      icon: "⚡",
      title: "Boost Operational Speed",
      desc: "Automate routine tasks and streamline fulfilment workflows to handle higher order volumes without adding headcount.",
    },
    {
      icon: "🧠",
      title: "Data-Driven Decisions",
      desc: "Access granular inventory analytics and reporting dashboards to plan smarter and respond faster to demand shifts.",
    },
    {
      icon: "🔗",
      title: "Seamless Integration",
      desc: "Connect your warehouse management system with ERP, e-commerce, and 3PL platforms for end-to-end supply chain visibility.",
    },
  ];

  const stats = [
    { num: "50K+", label: "SKUs Managed" },
    { num: "99.8%", label: "Inventory Accuracy" },
    { num: "35%", label: "Faster Fulfilment" },
    { num: "Real-Time", label: "Stock Visibility" },
  ];

  const faqs = [
    {
      q: "What is a Warehouse Management System (WMS)?",
      a: "A WMS is a software solution that provides full control and visibility over warehouse operations — from receiving and putaway through picking, packing, shipping, and returns — helping teams improve accuracy and efficiency across the board.",
    },
    {
      q: "How does real-time inventory tracking work?",
      a: "Our system uses barcode scanning, RFID, and IoT integrations to capture every stock movement as it happens, giving you an accurate, live picture of inventory levels and locations across all warehouse zones.",
    },
    {
      q: "Can your solution handle multi-location warehouses?",
      a: "Yes. Our platform supports multi-site warehouse operations, giving you consolidated visibility and control across all locations from a single centralised dashboard.",
    },
    {
      q: "How does warehouse automation improve accuracy?",
      a: "Automated scanning, validation rules, and guided workflows eliminate manual data-entry errors, ensuring every pick, pack, and shipment is verified before it leaves the warehouse.",
    },
    {
      q: "Does the platform integrate with our existing ERP or e-commerce systems?",
      a: "Absolutely. Our warehouse management solution integrates with leading ERP platforms, e-commerce storefronts, and 3PL systems via standard APIs, ensuring seamless data flow across your entire supply chain.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Warehouse Management Solutions
          </div>

          <h1 className={styles.heroTitle}>
            Smarter Warehouse Operations for
            <br />
            <em>Accuracy, Speed &amp; Scale</em>
          </h1>

          <p className={styles.heroDesc}>
            Unify inventory control, order fulfilment, and warehouse automation on a
            single platform — eliminating errors, reducing costs, and giving your team
            real-time visibility across every square metre of your operation.
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

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <StaggerIn>
            <div className={styles.overviewLeft}>
              <span className={styles.sectionEyebrow}>Why Warehouse Management Matters</span>
              <h2 className={styles.overviewTitle}>
                Centralise, Automate &amp; <em>Optimise</em>
                <br />
                Your Entire Warehouse Operation
              </h2>
              <p className={styles.overviewDesc}>
                Modern warehouses demand more than spreadsheets and manual processes.
                Our platform gives operations teams the real-time data and automated
                workflows they need to keep inventory accurate, orders moving, and
                costs under control.
              </p>
              <p className={styles.overviewDesc} style={{ marginTop: "1rem" }}>
                Whether you manage a single fulfilment centre or a distributed
                multi-site network, our solutions scale to meet your needs — from
                inventory tracking and order fulfilment through to full warehouse
                automation and compliance reporting.
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

      {/* ── SOLUTIONS GRID ───────────────────────────────────── */}
      <section className={styles.solutions} id="solutions">
        <div className={styles.solutionsInner}>
          <StaggerIn>
            <div className={styles.solutionsHeader}>
              <span className={styles.sectionEyebrow}>Our Warehouse Management Solutions</span>
              <h2 className={styles.sectionTitle}>
                Dedicated Solutions for <em>Every Challenge</em>
              </h2>
              <p className={styles.sectionDesc}>
                From real-time inventory tracking to end-to-end order fulfilment and
                intelligent automation — explore the tools built to transform how your
                warehouse operates.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.solutionsGrid}>
            {solutions.map((solution, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
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

      {/* ── STATS BAND ───────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── BUSINESS BENEFITS ────────────────────────────────── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <StaggerIn>
            <div className={styles.benefitsLeft}>
              <span className={styles.sectionEyebrow}>Business Benefits</span>
              <h2 className={styles.benefitsTitle}>
                Built to Deliver <em>Measurable</em>
                <br />
                Warehouse Performance
              </h2>
              <p className={styles.benefitsSubdesc}>
                Our platform helps distribution teams eliminate inefficiencies, reduce
                operational costs, and gain the data confidence needed to scale
                warehouse operations reliably.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.benefitsRight}>
              {benefitCards.map((card, i) => (
                <div className={styles.benefitCard} key={i}>
                  <div className={styles.benefitCardIcon}>{card.icon}</div>
                  <h3 className={styles.benefitCardTitle}>{card.title}</h3>
                  <p className={styles.benefitCardDesc}>{card.desc}</p>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CTA BAND ─────────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <StaggerIn>
            <h2 className={styles.ctaBandTitle}>
              Ready to Transform Your
              <br />
              Warehouse Operations?
            </h2>
            <p className={styles.ctaBandDesc}>
              Talk to our team and discover how our warehouse management solutions
              can reduce errors, accelerate fulfilment, and give you complete
              visibility across your inventory.
            </p>
            <a href="/contact" className={styles.ctaBandBtn}>
              Request a Demo
            </a>
          </StaggerIn>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
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
                Everything you need to know about deploying our warehouse management
                solutions across your operations.
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