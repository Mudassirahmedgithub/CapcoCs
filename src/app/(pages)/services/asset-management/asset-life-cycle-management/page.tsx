// AssetLifecycleManagementPage.tsx
// CSS Module: asset.module.css  |  Globals: globals.css
// Brand: DM Sans + DM Serif Display, teal primary #46c0bf

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  PackageSearch,
  ShoppingCart,
  Cpu,
  Wrench,
  BarChart3,
  Trash2,
  ShieldCheck,
  TrendingDown,
  ClipboardList,
  AlertTriangle,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Database,
  Globe,
  Lock,
} from "lucide-react";
import styles from "./asset.module.css";
import { ReactNode } from "react";

/* ── Types ── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ── */
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

/* ── Stagger wrapper ── */
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

/* ── FAQ Item ── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.open : ""}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <ChevronDown className={styles.faqIcon} size={18} />
      </button>
      <div className={styles.faqAnswer}>
        <p className={styles.faqAnswerContent}>{a}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────── */

export default function AssetLifecycleManagementPage() {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Data ── */
  const lifecyclePhases = [
    {
      step: "01",
      title: "Planning & Procurement",
      description:
        "Strategically identify asset requirements, evaluate vendors, and procure with total cost of ownership in mind. Align purchases with budget forecasts and business roadmaps.",
      icon: <ShoppingCart size={22} />,
      points: ["Needs assessment & budgeting", "Vendor evaluation & RFP", "Purchase order management"],
    },
    {
      step: "02",
      title: "Deployment & Onboarding",
      description:
        "Efficiently receive, configure, and deploy assets across teams. Maintain a centralized registry with complete asset metadata from day one.",
      icon: <PackageSearch size={22} />,
      points: ["Asset tagging & CMDB registration", "Configuration & provisioning", "Employee assignment tracking"],
    },
    {
      step: "03",
      title: "Operations & Monitoring",
      description:
        "Gain real-time visibility into asset performance, utilization, and health. Proactively monitor for issues before they impact operations.",
      icon: <BarChart3 size={22} />,
      points: ["Real-time performance dashboards", "Utilization & capacity tracking", "Anomaly detection & alerts"],
    },
    {
      step: "04",
      title: "Maintenance & Support",
      description:
        "Keep assets performing at peak through scheduled maintenance, software patching, and rapid incident resolution workflows.",
      icon: <Wrench size={22} />,
      points: ["Predictive maintenance scheduling", "Patch & update management", "SLA-driven support workflows"],
    },
    {
      step: "05",
      title: "Optimization & Audit",
      description:
        "Continuously audit asset usage, enforce license compliance, and reallocate underutilized resources to eliminate wasteful spend.",
      icon: <ClipboardList size={22} />,
      points: ["Software license reconciliation", "Compliance audit trails", "Cost optimization reporting"],
    },
    {
      step: "06",
      title: "Retirement & Disposal",
      description:
        "Safely decommission assets at end-of-life through secure data wiping, responsible recycling, and compliant disposal documentation.",
      icon: <Trash2 size={22} />,
      points: ["Secure data sanitization", "ITAD vendor management", "Disposal compliance records"],
    },
  ];

  const benefits = [
    {
      icon: <TrendingDown size={22} />,
      title: "Reduce Asset Spend by Up to 30%",
      desc: "Eliminate shadow IT, redundant purchases, and unused licenses through unified visibility across every asset in your environment.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Enterprise-Grade Compliance",
      desc: "Stay audit-ready with automated license tracking, disposal documentation, and policy enforcement baked into every lifecycle stage.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Real-Time Asset Intelligence",
      desc: "Make data-driven decisions backed by live dashboards, utilization analytics, and predictive maintenance forecasts.",
    },
    {
      icon: <AlertTriangle size={22} />,
      title: "Proactive Risk Management",
      desc: "Identify security vulnerabilities, outdated configurations, and end-of-life assets before they become operational liabilities.",
    },
  ];

  const capabilities = [
    {
      icon: <Database size={20} />,
      label: "CMDB & Asset Registry",
      desc: "Centralized configuration management database with full asset history and relationship mapping.",
    },
    {
      icon: <Globe size={20} />,
      label: "Multi-Cloud Asset Tracking",
      desc: "Unified visibility across on-premise, AWS, Azure, and GCP infrastructure from a single pane of glass.",
    },
    {
      icon: <Cpu size={20} />,
      label: "Hardware Lifecycle Automation",
      desc: "Automate refresh cycles, warranty tracking, and end-of-life alerts for physical infrastructure.",
    },
    {
      icon: <Lock size={20} />,
      label: "Software License Management",
      desc: "Prevent compliance fines with automated license reconciliation and vendor audit preparation.",
    },
    {
      icon: <CheckCircle2 size={20} />,
      label: "Policy & Compliance Engine",
      desc: "Enforce asset policies across teams with customizable rules, approval workflows, and audit trails.",
    },
    {
      icon: <BarChart3 size={20} />,
      label: "Financial Analytics & TCO",
      desc: "Track total cost of ownership, depreciation schedules, and ROI per asset class.",
    },
  ];

  const stats = [
    { num: "35%", label: "Avg. Cost Savings" },
    { num: "500+", label: "Assets Managed" },
    { num: "99.9%", label: "Audit Accuracy" },
    { num: "6x", label: "Faster Disposal" },
  ];

  const faqs = [
    {
      q: "What is Asset Lifecycle Management (ALM)?",
      a: "ALM is the systematic process of managing an asset from acquisition through retirement — maximizing performance, controlling costs, and ensuring compliance at every stage. It spans planning, procurement, deployment, operation, maintenance, and disposal.",
    },
    {
      q: "How does ALM reduce operational costs?",
      a: "By providing full visibility into asset usage, organizations can eliminate redundant purchases, reallocate underutilized resources, optimize software licensing, and plan timely replacements — collectively reducing asset-related spend by 20–35%.",
    },
    {
      q: "What types of assets does ALM cover?",
      a: "ALM covers IT hardware (laptops, servers, network gear), software licenses and SaaS subscriptions, cloud infrastructure resources, physical infrastructure, and operational equipment — anything with a lifecycle that creates financial or compliance obligations.",
    },
    {
      q: "How does your platform handle compliance and audits?",
      a: "Our platform maintains complete, immutable audit trails for every asset event — from procurement to disposal. License reconciliation runs automatically, and you can generate audit-ready reports on demand for software vendors, regulators, or internal reviews.",
    },
    {
      q: "Can ALM integrate with our existing ITSM and ERP tools?",
      a: "Yes. Our solution integrates natively with leading platforms including ServiceNow, Jira Service Management, SAP, and major cloud providers — ensuring asset data flows seamlessly across your existing workflows.",
    },
    {
      q: "How do you handle secure data disposal at end-of-life?",
      a: "We provide certified data sanitization workflows aligned with NIST 800-88 standards, ITAD partner integrations, and automated disposal documentation — so every decommission is secure, compliant, and fully traceable.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.stickyVisible : ""}`}>
        <span className={styles.stickyCtaText}>Take control of your asset lifecycle today.</span>
        <button className={styles.stickyCtaBtn}>Get a Free Assessment</button>
      </div>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroInner}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Asset Lifecycle Management
          </div>
          <h1 className={styles.heroTitle}>
            Manage Every Asset.
            <br />
            <em>From Cradle to Closure.</em>
          </h1>
          <p className={styles.heroDesc}>
            A unified platform to plan, track, optimize, and retire your IT assets — 
            reducing costs, eliminating compliance risk, and maximizing ROI across the 
            entire asset lifecycle.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>
              Start Free Assessment <ArrowRight size={16} />
            </button>
            <button className={styles.btnGhost}>Explore the Platform</button>
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ── */}
      <section className={styles.overview}>
        <StaggerIn>
          <div className={styles.overviewInner}>
            <span className={styles.eyebrow}>Why It Matters</span>
            <h2 className={styles.overviewTitle}>
              Your Assets Are a Strategic Advantage —<br />
              <em>Only If You Manage Them Well</em>
            </h2>
            <p className={styles.overviewDesc}>
              Enterprises lose millions annually through untracked assets, over-licensed software, 
              and surprise end-of-life failures. The global asset management market is projected to 
              surpass $1 trillion by 2028 — yet most organizations still rely on spreadsheets and 
              reactive processes. Our Asset Lifecycle Management solution transforms every asset 
              into a controllable, predictable, value-generating resource.
            </p>
          </div>
        </StaggerIn>
      </section>

      {/* ── LIFECYCLE PHASES ── */}
      <section className={styles.phases}>
        <div className={styles.phasesInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>The Lifecycle</span>
              <h2 className={styles.sectionTitle}>
                Six Stages. <em>Total Control.</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                A structured, end-to-end framework that governs every asset from first purchase to final disposal.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.phasesGrid}>
            {lifecyclePhases.map((phase, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.phaseCard}>
                  <div className={styles.phaseCardTop}>
                    <span className={styles.phaseStep}>{phase.step}</span>
                    <div className={styles.phaseIconWrap}>{phase.icon}</div>
                  </div>
                  <h3 className={styles.phaseTitle}>{phase.title}</h3>
                  <p className={styles.phaseDesc}>{phase.description}</p>
                  <ul className={styles.phasePoints}>
                    {phase.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <div className={styles.benefitsLeft}>
            <StaggerIn>
              <span className={styles.eyebrow} style={{ color: "var(--color-primary)" }}>Business Impact</span>
              <h2 className={styles.benefitsTitle}>
                Built for Outcomes,
                <br />
                <em>Not Just Tracking</em>
              </h2>
              <p className={styles.benefitsDesc}>
                ALM isn&apos;t a back-office function — it&apos;s a strategic lever. 
                Organizations with mature lifecycle practices report smoother IT operations, 
                stronger security postures, and measurably improved business continuity.
              </p>
              <button className={styles.btnPrimary} style={{ marginTop: "2rem" }}>
                See Case Studies <ArrowRight size={16} />
              </button>
            </StaggerIn>
          </div>

          <div className={styles.benefitsRight}>
            {benefits.map((b, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitIconWrap}>{b.icon}</div>
                  <div>
                    <h4 className={styles.benefitTitle}>{b.title}</h4>
                    <p className={styles.benefitDesc}>{b.desc}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES ── */}
      <section className={styles.capabilities}>
        <div className={styles.capabilitiesInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Platform Capabilities</span>
              <h2 className={styles.sectionTitle}>
                Everything You Need to
                <em> Govern the Full Lifecycle</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                Modular, enterprise-ready capabilities that scale from SMB to Fortune 500 environments.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.capGrid}>
            {capabilities.map((cap, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.capCard}>
                  <div className={styles.capIconWrap}>{cap.icon}</div>
                  <h4 className={styles.capLabel}>{cap.label}</h4>
                  <p className={styles.capDesc}>{cap.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <section className={styles.statsBand}>
        <StaggerIn>
          <div className={styles.statsBandInner}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>12%</span>
              <span className={styles.statLabel}>Less software waste with active license tracking (2024 ITAM Report)</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>$1.1T</span>
              <span className={styles.statLabel}>Projected global asset management market by 2028</span>
            </div>
            <div className={styles.statDivider} />
            <div className={styles.statItem}>
              <span className={styles.statNum}>60%</span>
              <span className={styles.statLabel}>Of enterprises still use reactive, spreadsheet-based ALM processes</span>
            </div>
          </div>
        </StaggerIn>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>FAQ</span>
              <h2 className={styles.sectionTitle}>
                Common <em>Questions</em>
              </h2>
            </div>
          </StaggerIn>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <StaggerIn key={i} delay={i * 0.05}>
                <FaqItem q={f.q} a={f.a} />
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <StaggerIn>
            <h2 className={styles.ctaTitle}>
              Ready to Transform
              <br />
              <em>Your Asset Operations?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Join hundreds of enterprises that have cut asset costs, closed compliance gaps, 
              and gained full lifecycle visibility with our platform.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnWhite}>Get a Free Assessment</button>
              <button className={styles.ctaBtnOutline}>Schedule a Demo</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.contactLeft}>
            <StaggerIn>
              <span className={styles.eyebrow}>Get in Touch</span>
              <h2 className={styles.contactTitle}>
                Let&apos;s Build Your
                <br />
                <em>Lifecycle Strategy</em>
              </h2>
              <p className={styles.contactDesc}>
                Whether you&apos;re starting from scratch or modernizing an existing ITAM 
                practice, our team will help you design a roadmap that fits your environment.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Average response time under 2 business hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Free lifecycle maturity assessment included
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  No commitment required for initial consultation
                </div>
              </div>
            </StaggerIn>
          </div>

          <StaggerIn delay={0.1} className={styles.contactFormWrap}>
            <div className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>First Name</label>
                  <input className={styles.formInput} type="text" placeholder="Jane" />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Last Name</label>
                  <input className={styles.formInput} type="text" placeholder="Smith" />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Work Email</label>
                <input className={styles.formInput} type="email" placeholder="jane@company.com" />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Organisation</label>
                <input className={styles.formInput} type="text" placeholder="Company Name" />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Asset Environment</label>
                <select className={styles.formInput}>
                  <option value="">Select your primary asset type</option>
                  <option>IT Hardware (Endpoints, Servers)</option>
                  <option>Software & SaaS Licenses</option>
                  <option>Cloud Infrastructure</option>
                  <option>Mixed / Enterprise-wide</option>
                </select>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Tell us about your current challenges</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Describe your asset management pain points or goals..."
                  rows={4}
                />
              </div>
              <button className={styles.formSubmit}>
                Send Message <ArrowRight size={16} />
              </button>
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}