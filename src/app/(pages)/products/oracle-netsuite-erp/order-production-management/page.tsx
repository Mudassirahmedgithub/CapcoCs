// OrderProductionManagementPage.tsx
// Oracle Fusion Cloud — Order & Production Management
// CSS Module: order.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ClipboardList,
  Factory,
  BarChart3,
  RefreshCw,
  PackageCheck,
  GitBranch,
  ShieldCheck,
  Layers,
  Zap,
  Globe,
  Cpu,
  TrendingUp,
  Lightbulb,
  Settings2,
  CheckCircle2,
  ArrowRightLeft,
} from "lucide-react";
import styles from "./order.module.css";
import { ReactNode } from "react";

/* ── Types ─────────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ────────────────────── */
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

/* ── Stagger wrapper ─────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────── */

export default function OrderProductionManagementPage() {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why-section in-view */
  const [whyRef, whyVisible] = useInView(0.15);

  /* ── Page Data ────────────────────────────────────────── */

  const stats = [
    { num: "60%", label: "Faster Order Fulfillment" },
    { num: "99.9%", label: "Order Accuracy Rate" },
    { num: "40%", label: "Inventory Cost Reduction" },
    { num: "24/7", label: "Real-Time Visibility" },
  ];

  const capabilities = [
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Work Order Lifecycle Management",
      desc: "Manage every production work order end-to-end — from creation and release to tracking, adjustment, and closure — across discrete and process manufacturing methods.",
      points: [
        "Create, release & close work orders",
        "Pre-assign serials & lot numbers",
        "Review supply reservations & progress",
      ],
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Global Order Promising",
      desc: "Deliver real-time, enterprise-wide availability commitments using an in-memory engine that applies ATP, CTP, and profitable-to-promise rules to maximize revenue.",
      points: [
        "Available-to-promise & capable-to-promise",
        "Profitable-to-promise sourcing",
        "Demand class allocation for scarce supply",
      ],
    },
    {
      icon: <ArrowRightLeft className="w-5 h-5" />,
      title: "Omnichannel Order Orchestration",
      desc: "Automate order capture, validation, and fulfillment across every channel — online, in-store, or direct — with unified no-code fulfillment flow management.",
      points: [
        "Multi-channel order capture & validation",
        "Back-to-back & drop-ship order automation",
        "Built-in change management & rollback logic",
      ],
    },
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Shop Floor Execution",
      desc: "Empower operators with guided digital workflows, real-time supervisor dashboards, and AI-generated shift notes to drive frictionless shop floor performance.",
      points: [
        "Guided step-by-step operator instructions",
        "Real-time shift performance monitoring",
        "AI-generated shift reports & summaries",
      ],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Production Scheduling & Simulation",
      desc: "Visualise, optimise, and simulate production schedules on an interactive Gantt chart, with drag-and-drop rescheduling and what-if analysis to maximise throughput.",
      points: [
        "Interactive Gantt chart scheduling",
        "Drag-and-drop dispatch management",
        "In-line what-if scenario simulations",
      ],
    },
    {
      icon: <PackageCheck className="w-5 h-5" />,
      title: "Quality & Genealogy Tracking",
      desc: "Capture quality data throughout the manufacturing lifecycle, predict potential issues, and maintain full lot and serialised product genealogy for regulatory compliance.",
      points: [
        "End-to-end lot & serial genealogy",
        "Predictive quality issue detection",
        "Compliance-ready track & trace",
      ],
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Order Capture & Validation",
      desc: "Automatically capture and validate orders across all channels, ensuring fewer exceptions and faster execution from the first touch.",
    },
    {
      num: "02",
      title: "Supply Sourcing & Promising",
      desc: "Select the optimal supply source — buy, make, or transfer — and commit accurate delivery dates using real-time inventory and production data.",
    },
    {
      num: "03",
      title: "Production Planning & Scheduling",
      desc: "Generate feasible, optimised production schedules that align with shop floor capacity, material availability, and order priorities.",
    },
    {
      num: "04",
      title: "Execution, Tracking & Closure",
      desc: "Execute work orders on the shop floor with real-time visibility, track every transaction, and close orders seamlessly after completion.",
    },
  ];

  const techStack = [
    { label: "Oracle Fusion Cloud", icon: <Globe className="w-5 h-5" /> },
    { label: "In-Memory Engine", icon: <Cpu className="w-5 h-5" /> },
    { label: "ERP Integration", icon: <Layers className="w-5 h-5" /> },
    { label: "REST / TMF APIs", icon: <GitBranch className="w-5 h-5" /> },
    { label: "AI & Analytics", icon: <TrendingUp className="w-5 h-5" /> },
  ];

  const whyItems = [
    {
      icon: <Settings2 className="w-5 h-5" />,
      title: "End-to-End Oracle Integration",
      desc: "Natively integrated with Oracle SCM, ERP, and Project Management — no complex middleware or extensive configuration required.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Enterprise-Grade Reliability",
      desc: "Built for high-volume, mission-critical operations with audit-ready architecture, role-based access, and compliance controls.",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Intelligent, AI-Powered Operations",
      desc: "Leverage machine learning for demand class allocation, predictive quality monitoring, AI shift reporting, and dynamic rescheduling.",
    },
  ];

  const benefits = [
    "Reduce order fulfilment lead times by up to 60%",
    "Achieve 99.9%+ order accuracy with automated validation",
    "Optimise inventory levels and reduce carrying costs",
    "Gain real-time visibility across all production sites",
    "Ensure compliance with track-and-trace genealogy",
    "Enable 24/7 global order promising and fulfilment",
  ];

  const faqs = [
    {
      q: "What manufacturing methods does Oracle Order Production Management support?",
      a: "Oracle supports both discrete and process production work methods, giving manufacturers the flexibility to manage work orders, lot-based jobs, and batch production within a single unified platform.",
    },
    {
      q: "How does Global Order Promising work?",
      a: "An in-memory engine evaluates available-to-promise (ATP), capable-to-promise (CTP), and profitable-to-promise (PTP) rules in real time across your entire supply network to select the best source and commit accurate delivery dates.",
    },
    {
      q: "Can it integrate with third-party ERP and supply chain systems?",
      a: "Yes. Oracle Order Management integrates with on-premises ERP systems, third-party supply chain execution solutions, and external systems via REST APIs and TMF Open API standards, simplifying migration to the cloud.",
    },
    {
      q: "How does the system handle order changes mid-fulfilment?",
      a: "Built-in Order Change Management (OCM) performs automatic delta analysis for order revisions, including revision-on-revision changes to in-flight orders, dynamically generating and executing compensation changes.",
    },
    {
      q: "What visibility tools are available for supervisors on the shop floor?",
      a: "Supervisors have access to real-time shift dashboards, interactive Gantt charts, AI-generated shift reports, and dispatch lists — all designed to support data-driven decisions that resolve issues before they impact production.",
    },
    {
      q: "Does the platform support contract manufacturing?",
      a: "Yes. Oracle enables you to outsource one or multiple work order operations to contract manufacturers, with supplier portal collaboration, consigned material visibility, and full financial oversight across internal and external sites.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>
          Streamline your production operations today.
        </span>
        <button className={styles.stickyCtaBtn}>Request a Demo</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Oracle Fusion Cloud · Order &amp; Production Management
          </div>

          <h1 className={styles.heroTitle}>
            Orchestrate Orders.
            <br />
            <em>Execute Production.</em>
          </h1>

          <p className={styles.heroDesc}>
            End-to-end order-to-cash and production management — from global
            order promising and omnichannel fulfilment to shop floor scheduling,
            quality tracking, and real-time visibility across every manufacturing site.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Request a Demo</button>
            <button className={styles.btnGhost}>Explore Capabilities</button>
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

      {/* ── CAPABILITIES ───────────────────────────────────────── */}
      <section className={styles.solutions}>
        <StaggerIn className={styles.solutionsHeader}>
          <span className={styles.sectionEyebrow}>Core Capabilities</span>
          <h2 className={styles.sectionTitle}>
            Built for <em>End-to-End</em> Production Control
          </h2>
          <p className={styles.sectionDesc}>
            Oracle Fusion Cloud Order &amp; Production Management delivers a
            unified platform that connects order capture to shop floor execution,
            giving manufacturers real-time control at every step of the process.
          </p>
        </StaggerIn>

        <div className={styles.cardsGrid}>
          {capabilities.map((c, i) => (
            <StaggerIn key={i} delay={i * 0.07}>
              <div className={styles.card}>
                <div className={styles.cardBorderTop} />
                <div className={styles.cardIconWrap}>{c.icon}</div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.desc}</p>
                <ul className={styles.cardPoints}>
                  {c.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── PROCESS STEPS ──────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <StaggerIn className={styles.processHeader}>
            <span className={styles.sectionEyebrow}>How It Works</span>
            <h2 className={styles.sectionTitle}>
              From Order to <em>Delivered</em>
            </h2>
            <p className={styles.sectionDesc} style={{ margin: "0 auto" }}>
              A four-phase cycle that connects every function — from the moment
              an order is placed to the moment it ships.
            </p>
          </StaggerIn>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.processStep}>
                  <div className={styles.stepNumber}>{step.num}</div>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH / PLATFORM STACK ──────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <div className={styles.techHeader}>
            <StaggerIn>
              <span
                className={styles.sectionEyebrow}
                style={{ color: "var(--color-primary)" }}
              >
                Platform
              </span>
              <h2 className={styles.techTitle}>
                The Technology
                <br />
                <em>Powering Every Order</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                Oracle Fusion Cloud leverages a modern in-memory engine, native
                ERP integration, open API standards, and embedded AI &amp;
                analytics — purpose-built for enterprise-scale production
                environments.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.techGrid}>
            {techStack.map((t, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.techItem}>
                  <div className={styles.techItemIcon}>{t.icon}</div>
                  <span className={styles.techItemLabel}>{t.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────────── */}
      <section
        style={{
          padding: "clamp(5rem,10vw,9rem) clamp(1.5rem,5vw,4rem)",
          background: "var(--color-white)",
        }}
      >
        <div
          ref={whyRef}
          className={`${styles.whySection} ${whyVisible ? styles.visible : ""}`}
        >
          <div className={styles.whyLeft}>
            <span className={styles.sectionEyebrow}>Why Oracle</span>
            <h2 className={styles.whyTitle}>
              Why Industry Leaders Choose
              <br />
              <em>Oracle for Manufacturing</em>
            </h2>
            <div className={styles.whyList}>
              {whyItems.map((w, i) => (
                <div className={styles.whyItem} key={i}>
                  <div className={styles.whyItemIcon}>{w.icon}</div>
                  <div>
                    <div className={styles.whyItemTitle}>{w.title}</div>
                    <div className={styles.whyItemDesc}>{w.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.whyRight}>
            <div className={styles.benefitsCard}>
              <div className={styles.benefitsCardHead}>
                <h3 className={styles.benefitsCardTitle}>
                  Transform Production Operations with Oracle Fusion Cloud
                </h3>
              </div>
              <ul className={styles.benefitsList}>
                {benefits.map((b, i) => (
                  <li className={styles.benefitItem} key={i}>
                    <span className={styles.benefitCheck}>✓</span>
                    <span className={styles.benefitText}>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {[
          { num: "500+", label: "Global Manufacturers" },
          { num: "81.5%", label: "On-Time Shipment Increase" },
          { num: "3x", label: "Faster Order Promising" },
          { num: "100%", label: "Cloud-Native Platform" },
        ].map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── FAQ ────────────────────────────────────────────────── */}
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
                Everything you need to know about implementing Oracle Order
                &amp; Production Management in your manufacturing environment.
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

      {/* ── CTA SECTION ────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Modernise Your
              <br />
              <em>Production Operations?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Connect every stage of your order and production lifecycle with
              Oracle Fusion Cloud — from promising to fulfilment, at enterprise scale.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>Request a Demo</button>
              <button className={styles.btnGhost}>Download Datasheet</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-white)" }}>
        <div className={styles.contactSection}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Contact</span>
              <h2 className={styles.contactTitle}>
                Talk to Our
                <br />
                <em>Manufacturing Experts</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your production environment and we will
                help you design the right Oracle implementation roadmap
                for your business.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Response within 24 business hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--color-primary)",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  Free initial scoping consultation
                </div>
                <div className={styles.contactMetaItem}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--color-primary)",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  No commitment required
                </div>
              </div>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Full Name</label>
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Company</label>
                  <input
                    type="text"
                    placeholder="Acme Manufacturing Co."
                    className={styles.formInput}
                  />
                </div>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Area of Interest</label>
                <select className={`${styles.formInput} ${styles.formSelect}`}>
                  <option value="">Select a module...</option>
                  <option value="order-management">Order Management</option>
                  <option value="production-management">Production Management</option>
                  <option value="global-promising">Global Order Promising</option>
                  <option value="shop-floor">Shop Floor Execution</option>
                  <option value="scheduling">Production Scheduling</option>
                  <option value="quality">Quality &amp; Genealogy</option>
                </select>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Tell us about your current environment, team size, and key challenges..."
                />
              </div>

              <button className={styles.formSubmit}>Submit Inquiry</button>
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}