// AssetFinanceCompliancePage.tsx
// Asset Finance Compliance Management — page.tsx
// CSS Module: asset.module.css  |  Globals: globals.css
// Brand: DM Sans + DM Serif Display, --color-primary: #46c0bf

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ShieldCheck,
  FileSearch,
  AlertTriangle,
  ClipboardList,
  GitMerge,
  BarChart3,
  RefreshCw,
  Lock,
  FileText,
  Cpu,
  Database,
  Network,
  CheckCircle2,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { ReactNode } from "react";
import styles from "./asset.module.css";

/* ── Types ──────────────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ───────────────────────────── */
function useInView(threshold = 0.12): [React.RefObject<HTMLDivElement>, boolean] {
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

/* ── Stagger wrapper ─────────────────────────────────────────────── */
function StaggerIn({ children, className, delay = 0 }: StaggerInProps) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.72s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.72s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────── */

export default function AssetFinanceCompliancePage() {
  /* Sticky CTA visibility */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* FAQ accordion */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Data ─────────────────────────────────────────────────────── */

  const stats = [
    { num: "99.8%", label: "Audit Pass Rate" },
    { num: "70%", label: "Faster Reporting" },
    { num: "50+", label: "Regulations Tracked" },
    { num: "24/7", label: "Monitoring" },
  ];

  const solutions = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Regulatory Compliance Monitoring",
      description:
        "Automated tracking of FCA, PRA, MiFID II, and other regulatory frameworks relevant to asset finance and leasing portfolios, with real-time alerts on regulatory changes.",
      points: [
        "AI-powered regulatory change detection",
        "Policy obligation mapping",
        "Real-time compliance dashboards",
      ],
    },
    {
      icon: <FileSearch className="w-5 h-5" />,
      title: "Contract Lifecycle Compliance",
      description:
        "End-to-end compliance monitoring across the entire asset finance contract lifecycle — from origination and underwriting through to settlement and disposal.",
      points: [
        "Automated covenant tracking",
        "Hire purchase & lease validation",
        "Document audit trails",
      ],
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Risk & Breach Management",
      description:
        "Proactively identify, assess, and remediate compliance breaches before they escalate. Centralized risk register with COSO and ISO 31000 aligned frameworks.",
      points: [
        "Breach detection & escalation",
        "Remediation workflow automation",
        "Risk scoring & heat maps",
      ],
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "AML & KYC Verification",
      description:
        "AI-driven anti-money laundering and know-your-customer checks at onboarding and throughout the customer relationship lifecycle for asset finance lenders.",
      points: [
        "Automated due diligence",
        "Sanctions & PEP screening",
        "Continuous risk updates",
      ],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Regulatory Reporting & Audit",
      description:
        "Generate audit-ready reports with a complete data lineage trail. Supports regulatory submissions to the FCA, PRA, HMRC, and other governing bodies.",
      points: [
        "Auto-generated regulatory filings",
        "Complete audit trail & versioning",
        "Multi-jurisdiction reporting",
      ],
    },
    {
      icon: <GitMerge className="w-5 h-5" />,
      title: "Policy & Controls Management",
      description:
        "Centralize all internal policies, compliance procedures, and controls in a unified GRC framework — keeping your teams aligned and your regulators confident.",
      points: [
        "Centralized policy repository",
        "Control testing & attestation",
        "Cross-team collaboration tools",
      ],
    },
  ];

  const pillars = [
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Continuous Monitoring",
      desc: "Never miss a regulatory update. Our engine continuously tracks obligations across global and UK-specific frameworks affecting asset finance.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Audit-Ready Architecture",
      desc: "Every action, decision, and data point is logged with full traceability — making regulatory audits fast, transparent, and stress-free.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Document Intelligence",
      desc: "AI-powered document processing automatically extracts obligations, flags deviations, and maps requirements to your internal controls.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Workflow Automation",
      desc: "Replace manual compliance processes with intelligent, automated workflows that route tasks, manage approvals, and enforce deadlines.",
    },
  ];

  const impactStats = [
    { num: "97", suffix: "%", label: "Fraud Detection Accuracy" },
    { num: "60", suffix: "%", label: "Reduction in Manual Reviews" },
    { num: "3×", suffix: "", label: "Faster Regulatory Filings" },
    { num: "£2M+", suffix: "", label: "Average Annual Savings" },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Gap Analysis",
      desc: "We map your current compliance posture against applicable asset finance regulations and identify gaps.",
    },
    {
      step: "02",
      title: "Platform Configuration",
      desc: "Tailor the rules engine, reporting templates, and monitoring workflows to your specific loan and lease products.",
    },
    {
      step: "03",
      title: "Integration & Data Onboarding",
      desc: "Seamlessly connect to your existing LOS, core banking, CRM, and third-party data sources via API.",
    },
    {
      step: "04",
      title: "Go-Live & Continuous Support",
      desc: "Deploy with confidence and rely on our compliance experts for ongoing updates, training, and audit support.",
    },
  ];

  const techStack = [
    {
      icon: <Cpu className="w-5 h-5" />,
      label: "AI & NLP Engine",
      desc: "Purpose-built ML models trained on regulatory texts to extract, classify, and monitor compliance obligations automatically.",
    },
    {
      icon: <Database className="w-5 h-5" />,
      label: "Regulatory Data Warehouse",
      desc: "Structured storage of all compliance data with full version history, lineage tracking, and real-time query capability.",
    },
    {
      icon: <Network className="w-5 h-5" />,
      label: "GRC Integrations",
      desc: "Native connectors to FIS Asset Finance, Alfa Systems, Salesforce, and major core banking platforms.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      label: "Enterprise Security",
      desc: "ISO 27001 compliant infrastructure with role-based access control, encryption at rest and in transit.",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Reporting & Analytics",
      desc: "Live dashboards, scheduled regulatory reports, and customisable risk analytics with board-level KPI views.",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      label: "Regulatory Change Feed",
      desc: "Real-time ingestion from FCA, PRA, ESMA, and other regulatory bodies — automatically mapped to your obligations.",
    },
  ];

  const faqs = [
    {
      q: "Which regulations does the platform cover for asset finance?",
      a: "Our platform covers FCA Consumer Duty, PRA capital requirements, MiFID II, HMRC VAT on leasing, FCA SMCR, AML/KYC obligations under AMLD6, and IFRS 16 lease accounting standards, among others. Coverage is continuously updated.",
    },
    {
      q: "Can it integrate with our existing asset finance system?",
      a: "Yes. We provide native integrations with FIS Asset Finance, Alfa Systems, White Clarke Group, and custom-built LOS platforms via REST APIs and webhooks. Implementation typically takes 6–12 weeks.",
    },
    {
      q: "How does the AI handle regulatory change management?",
      a: "Our NLP engine continuously monitors over 50 regulatory sources. When a change is detected, it is automatically categorised, impact-assessed against your portfolio, and routed to the relevant compliance owner for action with a clear deadline.",
    },
    {
      q: "Is the platform suitable for smaller asset finance firms?",
      a: "Yes. The platform is fully configurable for firms of all sizes — from specialist equipment finance brokers to large bank-owned leasing divisions. Pricing scales with portfolio size and modules required.",
    },
    {
      q: "How does audit trail management work?",
      a: "Every action, configuration change, approval, and exception is captured with a timestamp, user identity, and reason code. Reports are exportable in regulator-ready formats and retained for the required statutory period.",
    },
  ];

  /* ── Render ─────────────────────────────────────────────────── */
  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ──────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>
          See how it works for your portfolio
        </span>
        <button className={styles.stickyCtaBtn}>Book a Demo</button>
      </div>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Asset Finance Compliance Management
          </div>

          <h1 className={styles.heroTitle}>
            Stay Compliant.
            <br />
            <em>Stay Confident.</em>
          </h1>

          <p className={styles.heroDesc}>
            End-to-end compliance management for asset finance lenders and lessors.
            Automate regulatory monitoring, streamline audit readiness, and manage
            risk across your entire portfolio — all in one platform.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Request a Free Demo</button>
            <button className={styles.btnGhost}>Talk to a Compliance Expert</button>
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

      {/* ── SOLUTIONS ───────────────────────────────────────────── */}
      <section className={styles.solutions}>
        <StaggerIn className={styles.solutionsHeader}>
          <span className={styles.sectionEyebrow}>Solutions</span>
          <h2 className={styles.sectionTitle}>
            Compliance Built for <em>Asset Finance</em>
          </h2>
          <p className={styles.sectionDesc}>
            From regulatory monitoring and AML checks to contract compliance and
            audit-ready reporting — purpose-built for lenders, lessors, and
            equipment finance providers.
          </p>
        </StaggerIn>

        <div className={styles.cardsGrid}>
          {solutions.map((s, i) => (
            <StaggerIn key={i} delay={i * 0.08}>
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
      </section>

      {/* ── COMPLIANCE PILLARS ──────────────────────────────────── */}
      <section className={styles.pillarsSection}>
        <div className={styles.pillarsInner}>
          <StaggerIn className={styles.pillarsLeft}>
            <span className={styles.sectionEyebrow}>Why It Works</span>
            <h2 className={styles.sectionTitle}>
              Compliance That <em>Never Sleeps</em>
            </h2>
            <p className={styles.sectionDesc}>
              Our platform is engineered for the complexity of asset finance —
              managing loans, hire purchases, finance leases, and operating leases
              across multiple regulatory jurisdictions without the manual overhead.
            </p>
            <div className={styles.pillarsTag}>
              <span className={styles.pillarsTagDot} />
              All systems operational
            </div>
          </StaggerIn>

          <div className={styles.pillarsGrid}>
            {pillars.map((p, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.pillarCard}>
                  <div className={styles.pillarIcon}>{p.icon}</div>
                  <h3 className={styles.pillarTitle}>{p.title}</h3>
                  <p className={styles.pillarDesc}>{p.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ──────────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {impactStats.map((s, i) => (
          <StaggerIn key={i} delay={i * 0.08}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>
                {s.num}
                <span>{s.suffix}</span>
              </span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          </StaggerIn>
        ))}
      </div>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <StaggerIn className={styles.processHeader}>
          <span className={styles.sectionEyebrow}>How We Work</span>
          <h2 className={styles.sectionTitle}>
            From Onboarding to <em>Full Compliance</em>
          </h2>
          <p className={styles.sectionDesc}>
            A structured, proven implementation approach that gets your compliance
            programme live quickly — with minimal disruption to your operations.
          </p>
        </StaggerIn>

        <div className={styles.processSteps}>
          {processSteps.map((step, i) => (
            <StaggerIn key={i} delay={i * 0.1} className={styles.processStep}>
              <div className={styles.stepNumber}>{step.step}</div>
              <h3 className={styles.stepTitle}>{step.title}</h3>
              <p className={styles.stepDesc}>{step.desc}</p>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <StaggerIn className={styles.techHeader}>
            <span className={styles.sectionEyebrow}>Technology</span>
            <h2 className={styles.techTitle}>
              The Engine Behind
              <br />
              <em>Every Check</em>
            </h2>
            <p className={styles.techSubDesc}>
              Built on purpose-built AI, enterprise-grade data infrastructure, and
              deep asset finance domain expertise — so your compliance team can
              focus on decisions, not administration.
            </p>
          </StaggerIn>

          <div className={styles.techGrid}>
            {techStack.map((t, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.techCard}>
                  <div className={styles.techCardIcon}>{t.icon}</div>
                  <h3 className={styles.techCardLabel}>{t.label}</h3>
                  <p className={styles.techCardDesc}>{t.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <StaggerIn className={styles.faqLeft}>
            <span className={styles.sectionEyebrow}>FAQs</span>
            <h2 className={styles.sectionTitle}>
              Common <em>Questions</em>
            </h2>
            <p className={styles.sectionDesc}>
              Everything your compliance and operations teams need to know before
              getting started.
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
                  aria-expanded={openFaq === i}
                >
                  {faq.q}
                  <span className={styles.faqIcon}>+</span>
                </button>
                <div className={styles.faqAnswer}>
                  <p className={styles.faqAnswerContent}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <h2 className={styles.ctaTitle}>
              Ready to Make Compliance
              <br />
              <em>Your Competitive Edge?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Join asset finance lenders and lessors who have transformed their
              compliance operations — reducing risk, saving costs, and building
              regulator confidence.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnPrimary}>Get a Free Consultation</button>
              <button className={styles.ctaBtnGhost}>View Case Studies</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section>
        <div className={styles.contactSection}>
          <StaggerIn className={styles.contactLeft}>
            <span className={styles.sectionEyebrow}>Get In Touch</span>
            <h2 className={styles.contactTitle}>
              Talk to an <em>Expert</em>
            </h2>
            <p className={styles.contactDesc}>
              Our team of asset finance compliance specialists are ready to help
              you build a programme that satisfies regulators and scales with
              your business.
            </p>
            <div className={styles.contactMeta}>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                Average response time under 2 hours
              </div>
              <div className={styles.contactMetaItem}>
                <Mail className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                compliance@yourplatform.com
              </div>
              <div className={styles.contactMetaItem}>
                <Phone className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                +44 (0) 20 3900 0000
              </div>
              <div className={styles.contactMetaItem}>
                <MapPin className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                London, UK — Regulated by the FCA
              </div>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.1}>
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
                <input
                  className={styles.formInput}
                  type="email"
                  placeholder="jane@company.com"
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Company</label>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="Your organisation"
                />
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Portfolio Type</label>
                <select className={`${styles.formInput} ${styles.formSelect}`}>
                  <option value="">Select asset finance type</option>
                  <option>Equipment Finance & Leasing</option>
                  <option>Vehicle & Fleet Finance</option>
                  <option>Hire Purchase</option>
                  <option>Commercial Mortgages</option>
                  <option>Structured Asset Finance</option>
                  <option>Other</option>
                </select>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>How can we help?</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Tell us about your current compliance challenges or what you're looking to achieve..."
                />
              </div>

              <button className={styles.formSubmit}>
                Send Message
              </button>
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}