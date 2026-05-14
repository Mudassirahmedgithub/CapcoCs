// FinancialAccountingPage.tsx
// Financial Accounting Management — Oracle-aligned content
// CSS Module: financial.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  BookOpen,
  BarChart3,
  Wallet,
  CreditCard,
  Building2,
  FileText,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
  Globe2,
  RefreshCcw,
  Cpu,
  CheckCircle2,
  Lock,
  ArrowRight,
} from "lucide-react";
import styles from "./financial.module.css";
import { ReactNode } from "react";

/* ── Types ─────────────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ──────────────────────────── */
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

/* ── Stagger reveal wrapper ─────────────────────────────────────── */
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

export default function FinancialAccountingPage() {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 450);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* FAQ state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Contact form state */
  const [formState, setFormState] = useState({
    firstName: "", lastName: "", company: "", email: "",
    phone: "", module: "", message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => setFormState({ ...formState, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  /* ── Data ── */

  const stats = [
    { num: "80%+", label: "Process Automation" },
    { num: "99.9%", label: "System Uptime" },
    { num: "150+", label: "Countries Supported" },
    { num: "4×", label: "Faster Period Close" },
  ];

  const modules = [
    {
      icon: <BookOpen className="w-5 h-5" />,
      title: "General Ledger",
      description:
        "The fastest and most scalable general ledger on the market. Automate recurring journal entries, import high volumes of journal lines, and gain real-time financial visibility across the enterprise.",
      points: [
        "Automated journal entry creation & posting",
        "Real-time balance visualization dashboards",
        "Multi-ledger & multi-currency support",
      ],
    },
    {
      icon: <CreditCard className="w-5 h-5" />,
      title: "Accounts Payable",
      description:
        "Eliminate the time-consuming drudgery of manual invoice entry and matching. Centralize invoice and payment processing with intelligent document recognition and touchless automation.",
      points: [
        "Touchless invoice ingestion & validation",
        "Automated 3-way PO matching",
        "Dynamic discounting for early payment",
      ],
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Accounts Receivable",
      description:
        "Accelerate cash collection with AI-driven risk scoring, automated dunning, and centralized dashboards that give full visibility into customer outstanding balances and collection activities.",
      points: [
        "AI-powered delinquency identification",
        "Configurable collection workflows",
        "Automated revenue recognition (ASC 606)",
      ],
    },
    {
      icon: <Wallet className="w-5 h-5" />,
      title: "Cash Management",
      description:
        "Optimize liquidity with predictive cash forecasting and real-time bank account reconciliation. Ensure cash is allocated efficiently and take advantage of early-payment opportunities.",
      points: [
        "Real-time cash position dashboards",
        "Automated bank statement reconciliation",
        "Predictive cash forecasting & analytics",
      ],
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "Fixed Assets & Leases",
      description:
        "Track, manage, and analyze fixed assets throughout their entire lifecycle. Meet ASC 842 and IFRS 16 lease accounting standards from inception through termination — all within a unified platform.",
      points: [
        "Full asset lifecycle management",
        "ASC 842 / IFRS 16 lease compliance",
        "Interactive depreciation dashboards",
      ],
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Financial Reporting & Close",
      description:
        "Shorten your close cycle with Close Manager — a visual, process-oriented tool that monitors subledgers in real time, identifies anomalies early, and accelerates period-end close tasks.",
      points: [
        "Real-time close status monitoring",
        "Pre-aggregated report generation",
        "GAAP, IFRS & multi-standard support",
      ],
    },
  ];

  const capabilities = [
    { num: "80%+", label: "Automation Rate", desc: "Of financial processes automated end-to-end, including intercompany tax and transfer pricing." },
    { num: "4×",   label: "Faster Close", desc: "Period-end close cycles dramatically shortened through real-time subledger monitoring." },
    { num: "150+", label: "Countries", desc: "Multi-currency, multi-language, multi-entity operations for truly global enterprises." },
    { num: "99.9%",label: "Uptime SLA", desc: "Enterprise-grade SaaS reliability with built-in redundancy and disaster recovery." },
  ];

  const capabilityFeatures = [
    { text: "Automate accounting for intercompany tax and transfer pricing journals" },
    { text: "Harmonize accounting from disparate ERP and transactional systems" },
    { text: "Create a single source of financial truth for corporate accounting and FP&A" },
    { text: "Embedded machine learning for continuous exception handling improvement" },
    { text: "Extensive spreadsheet integration with one-click Excel uploads" },
    { text: "Built-in audit trails and automated intercompany balancing" },
  ];

  const processSteps = [
    {
      num: "01",
      icon: <Cpu className="w-5 h-5" />,
      title: "Discovery & Assessment",
      desc: "We analyze your current financial processes, chart of accounts, and integration landscape to design a tailored implementation roadmap.",
    },
    {
      num: "02",
      icon: <Globe2 className="w-5 h-5" />,
      title: "Configuration & Build",
      desc: "Configure ledgers, accounting rules, approval workflows, and intercompany structures aligned to your global operating model.",
    },
    {
      num: "03",
      icon: <RefreshCcw className="w-5 h-5" />,
      title: "Data Migration & Testing",
      desc: "Migrate historical balances, open transactions, and master data with rigorous reconciliation testing before go-live.",
    },
    {
      num: "04",
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Go-Live & Optimization",
      desc: "Hypercare support at launch, followed by continuous optimization using analytics and embedded AI insights.",
    },
  ];

  const whyItems = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "End-to-End Implementation",
      desc: "From strategy and chart-of-accounts design through go-live, training, and continuous optimization — we own the entire delivery.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Compliance-Ready Architecture",
      desc: "Built-in support for GAAP, IFRS, federal reporting, Prompt Payment Act, and SOX controls — audit-ready from day one.",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: "Global & Scalable",
      desc: "Multi-currency, multi-ledger, and multi-entity support designed for fast-growing enterprises operating across 150+ countries.",
    },
  ];

  const benefits = [
    "Reduce manual accounting effort by over 80%",
    "Accelerate period-end close by up to 4×",
    "Gain real-time cash visibility across entities",
    "Ensure GAAP, IFRS, and SOX compliance",
    "Scale to global operations without added headcount",
  ];

  const faqs = [
    {
      q: "What is Oracle Fusion Cloud Financial Accounting Management?",
      a: "Oracle Fusion Cloud Financials is a global financial platform that connects and automates financial management processes — including general ledger, payables, receivables, fixed assets, expenses, and reporting — providing a clear, real-time view into total financial health across the enterprise.",
    },
    {
      q: "How does Oracle automate the period-end close process?",
      a: "Oracle's Close Manager provides a visual, real-time dashboard of all close tasks — ledgers, subledgers, reconciliations, and journal entries. It automatically identifies unclosed areas and anomalies, dramatically shortening close cycles compared to manual tracking.",
    },
    {
      q: "Which accounting standards does Oracle Financials Cloud support?",
      a: "The platform supports GAAP, IFRS, US Federal reporting standards, ASC 842 and IFRS 16 for leases, ASC 606 for revenue recognition, and multiple local statutory requirements — all within a single, unified chart of accounts framework.",
    },
    {
      q: "Can Oracle Financials integrate with our existing ERP and legacy systems?",
      a: "Yes. Oracle Financials Accounting Hub is built on a service-oriented architecture that harmonizes accounting from disparate ERP and transactional systems — creating a standardized, single source of financial truth without requiring full system replacement.",
    },
    {
      q: "Is Oracle Fusion Cloud Financials suitable for global enterprises?",
      a: "Absolutely. The platform supports multi-currency, multi-language, and multi-entity operations across 150+ countries, with centralized intercompany settlement, global consolidation, and local statutory compliance built in from the ground up.",
    },
    {
      q: "What is the typical implementation timeline?",
      a: "Implementation timelines vary by scope, but most mid-market deployments take 4–6 months with our accelerated methodology. Large, multi-country rollouts typically run 9–18 months. We provide fixed-scope, milestone-based delivery to protect your go-live date.",
    },
  ];

  const moduleOptions = [
    "General Ledger", "Accounts Payable", "Accounts Receivable",
    "Cash Management", "Fixed Assets & Leases", "Financial Reporting & Close",
    "Full Suite",
  ];

  /* ── Render ── */
  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>
          Ready to modernize your financial operations?
        </span>
        <button className={styles.stickyCtaBtn}>Get a Free Assessment</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Oracle Fusion Cloud · Financial Accounting Management
          </div>

          <h1 className={styles.heroTitle}>
            Automate Your Finances.
            <br />
            <em>Close Faster. Scale Further.</em>
          </h1>

          <p className={styles.heroDesc}>
            A global financial platform that connects and automates your entire
            accounting lifecycle — from general ledger and payables to fixed assets
            and period close — giving finance teams a real-time, single source of truth.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Schedule a Demo</button>
            <button className={styles.btnGhost}>Explore Modules</button>
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

      {/* ── MODULES GRID ───────────────────────────────────────── */}
      <section className={styles.modules}>
        <div className={styles.modulesInner}>
          <StaggerIn>
            <div className={styles.modulesHeader}>
              <span className={styles.sectionEyebrow}>Core Modules</span>
              <h2 className={styles.sectionTitle}>
                Complete Financial Control,
                <br />
                <em>One Unified Platform</em>
              </h2>
              <p className={styles.sectionDesc}>
                Oracle Financials Cloud delivers extensive support for global companies
                across every dimension of financial management — from transaction
                processing to strategic reporting.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.modulesGrid}>
            {modules.map((m, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.moduleCard}>
                  <div className={styles.moduleCardAccent} />
                  <div className={styles.moduleIconWrap}>{m.icon}</div>
                  <h3 className={styles.moduleCardTitle}>{m.title}</h3>
                  <p className={styles.moduleCardDesc}>{m.description}</p>
                  <ul className={styles.moduleCardPoints}>
                    {m.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CAPABILITIES BAND ──────────────────────────────────── */}
      <section className={styles.capsBand}>
        <div className={styles.capsInner}>
          <StaggerIn className={styles.capsLeft}>
            <span className={styles.sectionEyebrow}>Platform Capabilities</span>
            <h2 className={styles.sectionTitle}>
              Built for
              <br />
              <em>Enterprise Scale</em>
            </h2>
            <p className={styles.sectionDesc}>
              Oracle Fusion Cloud Financials is powered by a centralized accounting
              engine that handles high transaction volumes with unmatched processing
              speed — eliminating external systems and reducing integration complexity.
            </p>

            <ul className={styles.capsFeatureList}>
              {capabilityFeatures.map((f, i) => (
                <li key={i} className={styles.capsFeatureItem}>
                  <CheckCircle2 className="w-4 h-4" />
                  {f.text}
                </li>
              ))}
            </ul>
          </StaggerIn>

          <StaggerIn delay={0.12} className={styles.capsRight}>
            {capabilities.map((c, i) => (
              <div key={i} className={styles.capsCard}>
                <span className={styles.capsCardNum}>{c.num}</span>
                <span className={styles.capsCardLabel}>{c.label}</span>
                <p className={styles.capsCardDesc}>{c.desc}</p>
              </div>
            ))}
          </StaggerIn>
        </div>
      </section>

      {/* ── PROCESS SECTION ────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.processHeader}>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Our Delivery Approach
              </span>
              <h2 className={styles.sectionTitle} style={{ color: "var(--color-white)" }}>
                Implementation That
                <br />
                <em>Protects Your Go-Live Date</em>
              </h2>
              <p className={styles.sectionDesc} style={{ color: "rgba(255,255,255,0.45)" }}>
                A proven, milestone-based methodology that takes you from initial
                discovery through hypercare — with no surprises and a clear path to value.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.processStep}>
                  <span className={styles.processStepNum}>{step.num}</span>
                  <div className={styles.processStepIcon}>{step.icon}</div>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY SECTION ────────────────────────────────────────── */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <StaggerIn className={styles.whyLeft}>
            <span className={styles.sectionEyebrow}>Why Choose Us</span>
            <h2 className={styles.sectionTitle}>
              Trusted by Finance
              <br />
              <em>Leaders Worldwide</em>
            </h2>
            <p className={styles.sectionDesc}>
              We combine deep Oracle Fusion expertise with industry-specific finance
              knowledge to deliver implementations that go beyond go-live — driving
              continuous improvement and measurable ROI.
            </p>

            <div className={styles.whyItems}>
              {whyItems.map((item, i) => (
                <div key={i} className={styles.whyItem}>
                  <div className={styles.whyItemIcon}>{item.icon}</div>
                  <div>
                    <h4 className={styles.whyItemTitle}>{item.title}</h4>
                    <p className={styles.whyItemDesc}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerIn>

          <StaggerIn delay={0.12} className={styles.whyRight}>
            <div className={styles.statsBand}>
              {stats.map((s, i) => (
                <div key={i} className={styles.statCard}>
                  <span className={styles.statCardNum}>{s.num}</span>
                  <span className={styles.statCardLabel}>{s.label}</span>
                </div>
              ))}
            </div>

            <ul className={styles.benefitsList}>
              {benefits.map((b, i) => (
                <li key={i} className={styles.benefitItem}>
                  <CheckCircle2 className="w-4 h-4" />
                  {b}
                </li>
              ))}
            </ul>
          </StaggerIn>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <StaggerIn>
            <h2 className={styles.ctaTitle}>
              Your Financial Transformation
              <br />
              <em>Starts Here</em>
            </h2>
            <p className={styles.ctaDesc}>
              Move from manual, error-prone processes to a unified, intelligent
              financial platform. Our Oracle Fusion experts are ready to map out
              your path to faster close, stronger compliance, and strategic clarity.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnWhite}>Schedule a Free Demo</button>
              <button className={styles.ctaBtnOutline}>Download Brochure</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <StaggerIn className={styles.faqLeft}>
            <span className={styles.sectionEyebrow}>FAQs</span>
            <h2 className={styles.sectionTitle}>
              Common
              <br />
              <em>Questions</em>
            </h2>
            <p className={styles.sectionDesc}>
              Everything you need to know about Oracle Financial Accounting
              Management — from implementation timelines to compliance coverage
              and global capabilities.
            </p>
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
                    aria-expanded={openFaq === i}
                  >
                    {faq.q}
                    <span className={styles.faqIcon}>+</span>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p className={styles.faqAnswerText}>{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section>
        <div className={styles.contactSection}>
          <StaggerIn className={styles.contactLeft}>
            <span className={styles.sectionEyebrow}>Get in Touch</span>
            <h2 className={styles.sectionTitle}>
              Let's Build Your
              <br />
              <em>Finance Future</em>
            </h2>
            <p className={styles.sectionDesc}>
              Tell us about your financial management challenges and the modules
              you are evaluating. Our Oracle Fusion specialists will respond within
              one business day with a tailored assessment.
            </p>

            <div className={styles.contactMeta}>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                Oracle Certified Implementation Partner
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                Avg. response time under 4 hours
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                Free process assessment included
              </div>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.12}>
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="firstName">First Name</label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    placeholder="Jane"
                    className={styles.formInput}
                    value={formState.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="lastName">Last Name</label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    placeholder="Smith"
                    className={styles.formInput}
                    value={formState.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="company">Company</label>
                  <input
                    id="company"
                    name="company"
                    type="text"
                    placeholder="Acme Corp"
                    className={styles.formInput}
                    value={formState.company}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="email">Work Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="jane@company.com"
                    className={styles.formInput}
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="phone">Phone</label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={styles.formInput}
                    value={formState.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel} htmlFor="module">Module of Interest</label>
                  <select
                    id="module"
                    name="module"
                    className={styles.formSelect}
                    value={formState.module}
                    onChange={handleChange}
                  >
                    <option value="">Select a module...</option>
                    {moduleOptions.map((opt) => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="message">Tell Us About Your Needs</label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Describe your current financial processes, pain points, or the scope of your Oracle implementation..."
                  className={styles.formTextarea}
                  value={formState.message}
                  onChange={handleChange}
                />
              </div>

              {submitted ? (
                <div className={styles.formSuccess}>
                  <CheckCircle2 className="w-4 h-4" />
                  Thank you! We will be in touch within one business day.
                </div>
              ) : (
                <button type="submit" className={styles.formSubmit}>
                  Send Message
                </button>
              )}
            </form>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}