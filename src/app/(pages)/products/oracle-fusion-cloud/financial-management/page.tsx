// FinancialManagementPage.tsx
// CAPCO Consulting Services — Financial Management Service Page
// CSS Module: financial.module.css | Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  DollarSign,
  BarChart3,
  FileText,
  TrendingUp,
  ShieldCheck,
  Layers,
  RefreshCw,
  PieChart,
  Database,
  Cpu,
  ClipboardList,
  Globe,
  CheckCircle2,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";
import styles from "./financial.module.css";
import { ReactNode } from "react";

/* ── Types ─────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ──── */
function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Stagger animation wrapper ──────────── */
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

/* ─────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────── */
export default function FinancialManagementPage() {

  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Data ── */
  const stats = [
    { num: "96%", label: "Automation Rate (AI ERP)" },
    { num: "43K+", label: "NetSuite Customers Globally" },
    { num: "60%", label: "Reduction in Manual Work" },
    { num: "24/7", label: "Real-Time Visibility" },
  ];

  const capabilities = [
    {
      icon: <DollarSign className="w-5 h-5" />,
      title: "Financial Management",
      desc: "Cloud ERP solutions covering accounting, consolidation, planning, procurement, and financial reporting across Oracle Fusion Cloud.",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Analytics & Reporting",
      desc: "Role-based dashboards, real-time KPIs, Suite Analytics Workbook, and AI-powered insights to guide faster, better decisions.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Predictive Planning",
      desc: "Machine-learning-based forecasting to detect deltas between actuals and forecasts and uncover hidden bias in financial data.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Procure-to-Pay Automation",
      desc: "Oracle's Document IO agent automates supplier, customer and financial institution onboarding across all transaction channels.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Compliance & Governance",
      desc: "Regulatory compliance support, audit-ready architectures, and governance frameworks for financial performance management.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Multi-Entity Management",
      desc: "Manage multiple subsidiaries, business units, and legal entities seamlessly within a single integrated ERP platform.",
    },
  ];

  const erpFeatures = [
    {
      title: "Predict, Detect & Act on New Situations",
      desc: "Oracle Cloud ERP introduces machine-learning to predictive planning and forecasting, utilizing broader datasets to reveal hidden bias and speed response time.",
    },
    {
      title: "Automate Manual Business Processes",
      desc: "Spend less time compiling data and more time understanding what it tells you. With AI, up to 96% of transactions can be automated across your business.",
    },
    {
      title: "Simplify & Speed Everyday Work",
      desc: "Oracle's AI-powered digital assistant simplifies tasks, allowing teams to query open purchase requisitions, reconciliations and more conversationally.",
    },
    {
      title: "Streamline Procure-to-Pay with Document IO",
      desc: "Oracle's document IO agent automates onboarding of complex integrations for third parties such as suppliers, customers, and financial institutions.",
    },
  ];

  const approachSteps = [
    {
      num: "01",
      title: "Assess Business Needs",
      desc: "We conduct a thorough financial process audit to understand your current state, pain points, and strategic growth objectives.",
    },
    {
      num: "02",
      title: "Identify Challenges & Gaps",
      desc: "Our consultants map gaps in financial reporting, compliance workflows, and ERP utilization against industry benchmarks.",
    },
    {
      num: "03",
      title: "Develop Tailored Strategies",
      desc: "We craft a customized financial transformation roadmap aligned with your business model, regulatory environment, and timeline.",
    },
    {
      num: "04",
      title: "Implement Practical Solutions",
      desc: "From Oracle Fusion Cloud to NetSuite deployment, we handle full-cycle implementation with minimal business disruption.",
    },
    {
      num: "05",
      title: "Monitor & Optimize Results",
      desc: "Post-go-live, we deliver continuous performance monitoring, user training, and iterative optimization for lasting ROI.",
    },
  ];

  const solutions = [
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Enterprise Resource Planning (ERP)",
      desc: "Oracle Fusion Cloud and NetSuite ERP implementations that connect accounting, orders, inventory, supply chain, and projects in one unified platform.",
      points: ["Oracle Fusion Cloud ERP", "NetSuite ERP Implementation", "Financial Consolidation & Reporting"],
    },
    {
      icon: <PieChart className="w-5 h-5" />,
      title: "Enterprise Performance Management",
      desc: "EPM solutions for strategic planning, budgeting, forecasting, and financial close management to drive enterprise-wide alignment.",
      points: ["Budgeting & Forecasting", "Financial Close Management", "Strategic Planning Alignment"],
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "BI & Data Warehouse Solutions",
      desc: "NetSuite Analytics Warehouse and BI tools that consolidate NetSuite and non-NetSuite data for deeper insights and trend identification.",
      points: ["Prebuilt Data Warehouse", "Cross-platform Data Consolidation", "AI-Powered Insights"],
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "AI-Powered Finance Automation",
      desc: "Embed artificial intelligence into core financial workflows — from intelligent invoice processing to autonomous reconciliation.",
      points: ["Automated Invoice Processing", "AI Reconciliation Agents", "Predictive Cash Flow Modeling"],
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Compliance & Risk Management",
      desc: "Build audit-ready financial systems with embedded controls, governance frameworks, and regulatory compliance monitoring.",
      points: ["Regulatory Compliance Monitoring", "Audit-Ready Architecture", "Internal Controls Framework"],
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Supply Chain Financial Integration",
      desc: "Integrate supply chain management with financial operations to gain real-time visibility into costs, margins, and procurement spend.",
      points: ["Procurement Cost Visibility", "Supplier Financial Onboarding", "Margin & Spend Analytics"],
    },
  ];

  const netsuiteFeatures = [
    {
      icon: <BarChart3 className="w-4 h-4" />,
      title: "Reporting & Dashboards",
      desc: "Real-time searches, KPIs, dashboards and Suite Analytics Workbook embedded into NetSuite for better decision-making.",
    },
    {
      icon: <Database className="w-4 h-4" />,
      title: "Data Warehouse",
      desc: "Prebuilt analytics warehouse enabling consolidation of NetSuite and non-NetSuite data to identify issues, trends and opportunities.",
    },
    {
      icon: <Cpu className="w-4 h-4" />,
      title: "AI-Powered Insights",
      desc: "NetSuite centralizes data from all business functions to provide an ideal foundation for getting the most out of AI-driven analytics.",
    },
    {
      icon: <ShieldCheck className="w-4 h-4" />,
      title: "Data Integrity",
      desc: "Provide stakeholders with timely, accurate financial statements, inventory reports, and operational performance data.",
    },
  ];

  const benefits = [
    "Operational Excellence",
    "Measurable Financial Results",
    "Market Expansion Readiness",
    "Improved Efficiency & Productivity",
    "Enhanced Innovation Capacity",
    "Faster Data-Driven Decisions",
  ];

  const statsSection = [
    { num: "500+", label: "ERP Implementations" },
    { num: "98%", label: "Client Retention Rate" },
    { num: "60%", label: "Cost Reduction Avg." },
    { num: "15+", label: "Industry Verticals Served" },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to transform your financial operations?</span>
        <button className={styles.stickyCtaBtn}>Get a Free Consultation</button>
      </div>

      {/* ── HERO ───────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />
        <div className={styles.heroGlowLeft} />

        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Financial Management Solutions
          </div>

          <h1 className={styles.heroTitle}>
            Intelligent Finance for
            <br />
            <em>Modern Enterprises</em>
          </h1>

          <p className={styles.heroDesc}>
            CAPCO delivers end-to-end financial management solutions powered by Oracle Fusion Cloud
            and NetSuite ERP — enabling organizations to automate processes, gain real-time visibility,
            and make faster, more confident decisions.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
            <button className={styles.btnGhost}>Explore Oracle ERP</button>
          </div>
        </div>

        {/* Stats Row */}
        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── CAPABILITIES ───────────────────────────── */}
      <section className={styles.capabilitiesSection}>
        <div className={styles.capabilitiesHeader}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>What We Do</span>
            <h2 className={styles.sectionTitle}>
              Financial Management
              <br />
              <em>Built for Scale</em>
            </h2>
          </StaggerIn>
          <StaggerIn delay={0.1}>
            <p className={styles.sectionDesc}>
              We design and implement enterprise financial solutions that connect core business
              functions, streamline operations, and enable real-time decision-making across
              Oracle Cloud and NetSuite platforms.
            </p>
          </StaggerIn>
        </div>

        <div className={styles.capabilitiesGrid}>
          {capabilities.map((cap, i) => (
            <StaggerIn key={i} delay={i * 0.07}>
              <div className={styles.capCard}>
                <div className={styles.capIconWrap}>{cap.icon}</div>
                <h3 className={styles.capTitle}>{cap.title}</h3>
                <p className={styles.capDesc}>{cap.desc}</p>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── ORACLE ERP ─────────────────────────────── */}
      <section className={styles.erpSection}>
        <div className={styles.erpBg} />
        <div className={styles.erpGlow} />
        <div className={styles.erpInner}>
          <div className={styles.erpHeader}>
            <StaggerIn>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Oracle Fusion Cloud
              </span>
              <h2 className={styles.erpSectionTitle}>
                Complete Cloud ERP with
                <br />
                <em>Built-in Intelligence</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.12}>
              <p className={styles.erpSectionDesc}>
                Oracle Fusion Cloud Applications deliver best-of-breed apps for your entire
                business — from enterprise resource planning and supply chain management to
                human capital management and customer experience. Built on next-generation
                cloud infrastructure designed for SaaS.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.erpCards}>
            {erpFeatures.map((f, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.erpCard}>
                  <p className={styles.erpCardTitle}>{f.title}</p>
                  <p className={styles.erpCardDesc}>{f.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS BAND ──────────────────────────── */}
      <div className={styles.benefitsBand}>
        <div className={styles.benefitsBandInner}>
          <p className={styles.benefitsLabel}>Our Impact</p>
          <div className={styles.benefitsList}>
            {benefits.map((b, i) => (
              <div className={styles.benefitItem} key={i}>
                <CheckCircle2 className={styles.benefitCheck} size={14} />
                {b}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SOLUTIONS GRID ─────────────────────────── */}
      <section className={styles.solutionsSection}>
        <StaggerIn>
          <div className={styles.solutionsHeader}>
            <span className={styles.sectionEyebrow}>Solutions Portfolio</span>
            <h2 className={styles.sectionTitle}>
              Financial Solutions for
              <br />
              <em>Every Business Layer</em>
            </h2>
            <p className={styles.sectionDesc}>
              From ERP implementation to AI-driven automation, our financial consulting
              solutions are tailored for start-ups, SMEs, and large enterprises alike.
            </p>
          </div>
        </StaggerIn>

        <div className={styles.solutionsGrid}>
          {solutions.map((sol, i) => (
            <StaggerIn key={i} delay={i * 0.07}>
              <div className={styles.solutionCard}>
                <div className={styles.solutionCardAccent} />
                <div className={styles.solutionIconWrap}>{sol.icon}</div>
                <h3 className={styles.solutionTitle}>{sol.title}</h3>
                <p className={styles.solutionDesc}>{sol.desc}</p>
                <ul className={styles.solutionPoints}>
                  {sol.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── NETSUITE SECTION ───────────────────────── */}
      <section className={styles.netsuiteSection}>
        <div className={styles.netsuiteInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Oracle NetSuite ERP</span>
            <h2 className={styles.sectionTitle}>
              One Platform.
              <br />
              <em>Total Visibility.</em>
            </h2>
            <p className={styles.sectionDesc} style={{ marginTop: "1rem" }}>
              NetSuite ERP is an all-in-one, AI-powered cloud business management solution
              helping organizations operate more effectively by automating core processes
              and providing real-time visibility into operational and financial performance.
              Join the more than 43,000 customers leveraging NetSuite to streamline their business.
            </p>
          </StaggerIn>

          <div className={styles.netsuiteFeatures}>
            {netsuiteFeatures.map((f, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.netsuiteFeature}>
                  <div className={styles.netsuiteFeatureIcon}>{f.icon}</div>
                  <div>
                    <p className={styles.netsuiteFeatureTitle}>{f.title}</p>
                    <p className={styles.netsuiteFeatureDesc}>{f.desc}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONSULTING APPROACH ─────────────────────── */}
      <section className={styles.approachSection}>
        <div className={styles.approachInner}>
          <StaggerIn>
            <div className={styles.approachLeft}>
              <span className={styles.sectionEyebrow}>Our Approach</span>
              <h2 className={styles.sectionTitle}>
                We Bring Clarity.
                <br />
                <em>We Execute.</em>
              </h2>
              <p className={styles.sectionDesc} style={{ marginTop: "1rem" }}>
                Our structured consulting methodology ensures every engagement
                is grounded in your specific financial challenges, aligned to
                your strategic goals, and delivered with measurable outcomes.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.approachSteps}>
            {approachSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.approachStep}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <div className={styles.stepContent}>
                    <p className={styles.stepTitle}>{step.title}</p>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────── */}
      <section className={styles.statsBand}>
        <div className={styles.statsBandInner}>
          {statsSection.map((s, i) => (
            <StaggerIn key={i} delay={i * 0.07}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner}>
          <StaggerIn>
            <h2 className={styles.ctaTitle}>
              Ready to Transform Your
              <br />
              <em>Financial Operations?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Partner with CAPCO to implement intelligent financial management solutions
              that drive efficiency, ensure compliance, and deliver measurable results.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>Schedule a Free Consultation</button>
              <button className={styles.btnGhost}>View Full Service Portfolio</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT SECTION ────────────────────────── */}
      <section className={styles.contactSection}>
        <StaggerIn>
          <div className={styles.contactLeft}>
            <span className={styles.sectionEyebrow}>Get in Touch</span>
            <h2 className={styles.contactTitle}>
              Let&apos;s Build Something
              <br />
              <em>That Lasts</em>
            </h2>
            <p className={styles.contactDesc}>
              Our financial management consultants are ready to assess your current
              systems and map a clear path to operational excellence. Reach out today.
            </p>
            <div className={styles.contactMeta}>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                <Globe size={14} />
                www.capcocs.com
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                <Phone size={14} />
                +974 7773 0656
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                <Mail size={14} />
                info@capcocs.com
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                <MapPin size={14} />
                Ashad Mohammed — Head of Operations
              </div>
            </div>
          </div>
        </StaggerIn>

        <StaggerIn delay={0.15}>
          <div className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>First Name</label>
                <input className={styles.formInput} type="text" placeholder="John" />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Last Name</label>
                <input className={styles.formInput} type="text" placeholder="Smith" />
              </div>
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Work Email</label>
              <input className={styles.formInput} type="email" placeholder="john@company.com" />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Company</label>
              <input className={styles.formInput} type="text" placeholder="Your Organization" />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Service of Interest</label>
              <select className={styles.formSelect}>
                <option value="">Select a service...</option>
                <option>Oracle Fusion Cloud ERP</option>
                <option>Oracle NetSuite ERP</option>
                <option>Enterprise Performance Management</option>
                <option>BI & Analytics Solutions</option>
                <option>Financial Compliance & Governance</option>
                <option>AI Finance Automation</option>
              </select>
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Message</label>
              <textarea
                className={styles.formTextarea}
                placeholder="Tell us about your financial management challenges..."
              />
            </div>
            <button className={styles.formSubmit}>Send Message</button>
          </div>
        </StaggerIn>
      </section>

    </div>
  );
}