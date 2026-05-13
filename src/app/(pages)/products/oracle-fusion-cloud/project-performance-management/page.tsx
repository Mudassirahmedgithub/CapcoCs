// ProjectPerformanceManagementPage.tsx
// Oracle Project Performance Management — Premium service page
// CSS Module: project.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Target,
  DollarSign,
  Users,
  ClipboardList,
  ShieldCheck,
  Layers,
  Activity,
  Lightbulb,
  CheckCircle2,
  ChevronDown,
  LayoutDashboard,
  Cpu,
  FileText,
} from "lucide-react";
import { ReactNode } from "react";
import styles from "./project.module.css";

/* ── Types ─────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ──────────────────── */
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

/* ── Stagger children wrapper ───────────────────────────── */
function StaggerIn({ children, className, delay = 0 }: StaggerInProps) {
  const [ref, visible] = useInView(0.1);
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

/* ─────────────────────────────────────────────────────── */

export default function ProjectPerformanceManagementPage() {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 450);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why-section in-view */
  const [whyRef, whyVisible] = useInView(0.15);

  /* FAQ open state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Page Data ── */
  const stats = [
    { num: "360°", label: "Project Visibility" },
    { num: "40%", label: "Cost Savings" },
    { num: "3×", label: "Faster Reporting" },
    { num: "99%", label: "Budget Accuracy" },
  ];

  const services = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Performance Reporting & Analytics",
      description:
        "Gain a graphical and tabular overview of project performance across effort, cost, profitability, earned value, and billing—at project, task, and resource levels.",
      points: [
        "Real-time dashboard views",
        "Configurable tabular metrics",
        "Cumulative trend line graphs",
      ],
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Earned Value Management (EVM)",
      description:
        "Quantify project performance against schedule and budget using industry-standard EVM metrics. Identify variances early and drive corrective actions before they escalate.",
      points: [
        "Schedule & cost variance tracking",
        "Performance index calculations",
        "Forecast-to-complete analysis",
      ],
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Budget & Forecast Control",
      description:
        "Generate budgets and forecasts directly from project and resource plans. Maintain strict budgetary control with real-time actuals vs. planned comparisons.",
      points: [
        "Integrated budget baseline capture",
        "Dynamic forecast re-planning",
        "Variance drill-down by period",
      ],
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Resource Capacity Management",
      description:
        "Align the right talent to the right projects. Manage resource pools, track utilisation, forecast capacity, and balance workloads across multi-project portfolios.",
      points: [
        "Named & role-based planning",
        "Skills-based resource matching",
        "Real-time utilisation visibility",
      ],
    },
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Financial Management & Billing",
      description:
        "Standardise cost capture across all business functions. Automate invoicing, revenue recognition, and billing workflows tightly integrated with Oracle ERP financials.",
      points: [
        "Procure-to-pay cost control",
        "Automated revenue recognition",
        "Capital asset cost accumulation",
      ],
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Program Portfolio Management",
      description:
        "Coordinate and track related projects within programs. Roll up performance across the entire portfolio and share progress with stakeholders through a single platform.",
      points: [
        "Portfolio-level performance rollup",
        "Program headline dashboards",
        "Cross-project dependency tracking",
      ],
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Assessment",
      desc: "We audit your current project data landscape, identify reporting gaps, and map your Oracle PPM configuration requirements.",
    },
    {
      num: "02",
      title: "Configuration & Setup",
      desc: "Define page layouts, row sets, and metric sets. Configure budgetary controls, EVM baselines, and custom workflows aligned to your organisation.",
    },
    {
      num: "03",
      title: "Integration & Data Migration",
      desc: "Seamlessly connect Oracle PPM with ERP, HCM, Procurement Cloud, and third-party systems. Migrate historical project and financial data.",
    },
    {
      num: "04",
      title: "Go-Live & Optimisation",
      desc: "Deploy with full training, adoption support, and continuous performance tuning to ensure maximum value from day one.",
    },
  ];

  const techItems = [
    { label: "Oracle Fusion ERP Cloud", icon: <Layers className="w-5 h-5" /> },
    { label: "Oracle Digital Assistant", icon: <Cpu className="w-5 h-5" /> },
    { label: "Oracle Analytics Cloud", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "WBS & Baseline Tools", icon: <LayoutDashboard className="w-5 h-5" /> },
    { label: "Oracle HCM Integration", icon: <Users className="w-5 h-5" /> },
    { label: "OTBI Reporting Engine", icon: <FileText className="w-5 h-5" /> },
  ];

  const whyItems = [
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Actionable Project Intelligence",
      desc: "Proactive alerts on missing timecards, at-risk milestones, and expiring assignments elevate focus to the strategic level.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Compliance & Audit-Ready",
      desc: "Built-in compliance management, audit documentation, and governance controls ensure regulatory accountability at every stage.",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "AI-Driven Decision Support",
      desc: "Predictive analytics and Oracle Digital Assistant provide real-time answers, risk alerts, and smart recommendations through voice or text.",
    },
  ];

  const benefits = [
    "Reduce project cost overruns by up to 40%",
    "Improve on-time delivery across all project types",
    "Eliminate disconnected financial & project data silos",
    "Enable real-time stakeholder reporting at any level",
    "Maximise resource utilisation and talent retention",
    "Automate routine tasks and time capture workflows",
  ];

  const faqs = [
    {
      q: "What is Oracle Project Performance Management?",
      a: "Oracle Project Performance Management is part of Oracle Fusion Cloud ERP. It enables project managers to track and monitor financial and schedule-related performance across projects and programs—providing graphical and tabular overviews of actual vs. planned performance by project, task, resource, and time period.",
    },
    {
      q: "What performance areas can I track with Oracle PPM?",
      a: "You can monitor effort, cost, profitability, earned value, billing and collections, and capital costs. Performance views are available at the project, task, and resource level, and can be segmented by time period for trend and variance analysis.",
    },
    {
      q: "How does Oracle PPM integrate with Oracle ERP?",
      a: "Oracle PPM is natively embedded within Oracle Fusion Cloud ERP. It shares a unified data model with Oracle Financials, HCM, Procurement Cloud, and Analytics, eliminating middleware and ensuring real-time financial and operational alignment.",
    },
    {
      q: "Does Oracle PPM support Earned Value Management?",
      a: "Yes. Oracle PPM provides full Earned Value Management (EVM) capabilities including schedule and cost variance, performance indices (CPI & SPI), and forecast-to-complete calculations—offering quantitative measures of project performance relative to budget and schedule.",
    },
    {
      q: "Can Oracle PPM manage resource capacity across multiple projects?",
      a: "Absolutely. Oracle PPM's resource management tools support both named and role-based planning, skills matching, real-time utilisation tracking, and capacity forecasting across multi-project portfolios—helping you avoid overallocation and underutilisation.",
    },
    {
      q: "How long does an Oracle PPM implementation take?",
      a: "Implementation timelines vary based on scope, data volume, and integration complexity. A standard Oracle PPM configuration typically runs 8–16 weeks. Our team conducts a discovery assessment upfront to define a precise project plan tailored to your organisation.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to transform your project performance?</span>
        <button className={styles.stickyCtaBtn}>Get a Free Assessment</button>
      </div>

      {/* ── HERO ───────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Oracle Project Performance Management
          </div>

          <h1 className={styles.heroTitle}>
            Deliver Projects
            <br />
            <em>On Time, On Budget</em>
          </h1>

          <p className={styles.heroDesc}>
            Harness the full power of Oracle Fusion Cloud PPM to track financial and
            schedule performance, maximise resource utilisation, and drive data-led
            decisions across every project and programme in your portfolio.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Book a Free Consultation</button>
            <button className={styles.btnGhost}>Explore Oracle PPM</button>
          </div>
        </div>

        {/* Stats row */}
        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ───────────────────────────────────── */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Overview</span>
            <h2 className={styles.overviewTitle}>
              Complete Visibility Into <em>Every Project</em>
            </h2>
            <p className={styles.overviewDesc}>
              Oracle Project Performance Management enables organisations to monitor financial
              and schedule performance at the project, task, and resource level — delivering
              an at-a-glance comparison of actual versus planned performance against budgets,
              forecasts, and schedules. From earned value analysis to real-time capital cost
              tracking, Oracle PPM gives project managers the insight they need to keep
              projects on track and make informed decisions faster.
            </p>
          </StaggerIn>
        </div>
      </section>

      {/* ── SERVICES GRID ──────────────────────────────── */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Capabilities</span>
              <h2 className={styles.sectionTitle}>
                Core Oracle PPM <em>Solutions</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                End-to-end project performance capabilities built for enterprise scale.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.cardsGrid}>
            {services.map((s, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.card}>
                  <div className={styles.cardBorderTop} />
                  <div className={styles.cardIconWrap}>{s.icon}</div>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.description}</p>
                  <ul className={styles.cardPoints}>
                    {s.points.map((p, j) => (
                      <li key={j}>
                        <CheckCircle2 className={styles.cardCheck} />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>How We Work</span>
              <h2 className={styles.sectionTitle}>
                Our Implementation <em>Process</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                A structured four-phase approach that gets you live quickly and correctly.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.processGrid}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.processCard}>
                  <span className={styles.processNum}>{step.num}</span>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ─────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <div className={styles.techLeft}>
            <StaggerIn>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Technology
              </span>
              <h2 className={styles.techTitle}>
                Powered by the
                <br />
                <em>Oracle Ecosystem</em>
              </h2>
              <p className={styles.techDesc}>
                Our solutions leverage Oracle's full cloud stack — from Fusion ERP and
                Analytics Cloud to Oracle Digital Assistant — purpose-built for
                production-grade project environments.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.techRight}>
            <div className={styles.techGrid}>
              {techItems.map((t, i) => (
                <StaggerIn key={i} delay={i * 0.07}>
                  <div className={styles.techItem}>
                    <div className={styles.techItemIcon}>{t.icon}</div>
                    <span className={styles.techItemLabel}>{t.label}</span>
                  </div>
                </StaggerIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────── */}
      <section className={styles.whyOuter}>
        <div
          ref={whyRef}
          className={styles.whySection}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Why Choose Us</span>
            <h2 className={styles.whyTitle}>
              Why Organisations Trust
              <br />
              <em>Our Oracle Expertise</em>
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

          <div className={`${styles.whyRight} ${whyVisible ? styles.visible : ""}`}>
            <div className={styles.benefitsCard}>
              <div className={styles.benefitsCardHead}>
                <h3 className={styles.benefitsCardTitle}>
                  Transform Project Delivery with Oracle PPM
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

      {/* ── STATS BAND ─────────────────────────────────── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── FAQ ────────────────────────────────────────── */}
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
                Everything you need to know about Oracle Project Performance Management
                and how we implement it for your organisation.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <div
                  className={`${styles.faqItem} ${openFaq === i ? styles.open : ""}`}
                  key={i}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {f.q}
                    <ChevronDown className={styles.faqIcon} />
                  </button>
                  <div className={styles.faqAnswer}>
                    <p className={styles.faqAnswerContent}>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Optimise Your
              <br />
              <em>Project Performance?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Let's build an Oracle PPM solution that gives you complete control over
              every project, programme, and portfolio in your organisation.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimaryDark}>Book a Free Assessment</button>
              <button className={styles.btnGhostLight}>View Case Studies</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────── */}
      <section className={styles.contactOuter}>
        <div className={styles.contactSection}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Contact</span>
              <h2 className={styles.contactTitle}>
                Talk to Our
                <br />
                <em>Oracle Consultants</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your project landscape and we'll design the right
                Oracle PPM configuration for your business.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Response within 24 hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaBlip} />
                  Free initial discovery session
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaBlip} />
                  No obligation required
                </div>
              </div>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Full Name</label>
                  <input type="text" placeholder="Jane Smith" className={styles.formInput} />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email</label>
                  <input type="email" placeholder="jane@company.com" className={styles.formInput} />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone Number</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className={styles.formInput} />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Organisation</label>
                  <input type="text" placeholder="Acme Corporation" className={styles.formInput} />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Oracle Products In Use</label>
                <select className={styles.formInput}>
                  <option value="">Select your current Oracle setup</option>
                  <option>Oracle Fusion Cloud ERP</option>
                  <option>Oracle EBS (On-Premises)</option>
                  <option>Oracle Analytics Cloud</option>
                  <option>Not currently using Oracle</option>
                </select>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Describe your project portfolio size, current challenges, and goals..."
                />
              </div>
              <button className={styles.formSubmit}>Submit Enquiry</button>
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}