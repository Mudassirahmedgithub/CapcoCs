// AIAnalyticsReportingPage.tsx
// AI Analytics & Reporting — Oracle-inspired content
// CSS Module: ai.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  BrainCircuit,
  MessageSquare,
  Layers,
  TrendingUp,
  ShieldCheck,
  Database,
  Cpu,
  Zap,
  Cloud,
  LineChart,
  FileSearch,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import styles from "./ai.module.css";
import { ReactNode } from "react";

/* ─────────────────────────────────────────────────────── */
/*  Types                                                   */
/* ─────────────────────────────────────────────────────── */

type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ─────────────────── */
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

/* ── Stagger children wrapper ──────────────────────────── */
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

/* ─────────────────────────────────────────────────────── */

export default function AIAnalyticsReportingPage() {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why-section in-view */
  const [whyRef, whyVisible] = useInView(0.15);

  /* FAQ open state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Data ── */
  const stats = [
    { num: "86.3%", label: "Gartner Score" },
    { num: "50+", label: "AI Agents Embedded" },
    { num: "100+", label: "New Capabilities" },
    { num: "24/7", label: "Real-Time Insights" },
  ];

  const solutions = [
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Conversational AI Assistant",
      description:
        "A generative AI-powered chat interface that lets analysts create, modify, and explore analytics workbooks through plain-language commands — no SQL or tool expertise required.",
      points: [
        "Natural language to visualisation",
        "Instant workbook generation from prompts",
        "Voice & text multimodal interaction",
      ],
    },
    {
      icon: <BrainCircuit className="w-5 h-5" />,
      title: "Auto Insights & ML Analytics",
      description:
        "Machine learning scans your datasets automatically, surfaces undiscovered patterns, and generates visual insights with fully transparent, editable calculations — eliminating blank-canvas syndrome.",
      points: [
        "One-click forecasts & trend lines",
        "Automatic cluster detection",
        "ML-powered insight summaries",
      ],
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "AI Agents with RAG",
      description:
        "Domain-aware AI Agents blend structured enterprise data with uploaded documents using Retrieval-Augmented Generation, explaining not just what happened — but why.",
      points: [
        "Policy & report context integration",
        "Structured + unstructured data fusion",
        "Organisation-calibrated responses",
      ],
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Predictive Reporting & Forecasting",
      description:
        "Embed advanced forecasting models — including Seasonal ARIMA — directly on charts and dashboards. AI-generated financial narratives, variance explanations, and trend commentary automate management reporting.",
      points: [
        "Cash forecasting with prescriptive AI",
        "Automated variance commentary",
        "Seasonal & predictive model selection",
      ],
    },
    {
      icon: <FileSearch className="w-5 h-5" />,
      title: "BYO-LLM Integration",
      description:
        "Bring your own large language model subscription (OpenAI and others) to enrich queries with external world knowledge beyond your internal datasets — unlocking richer, context-aware filtering.",
      points: [
        "External knowledge enrichment",
        "Complex multi-attribute filtering",
        "Flexible LLM provider support",
      ],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Embedded Reporting & Dashboards",
      description:
        "Deliver analytics directly inside business applications and workflows. Responsive canvas design, real-time visualisations, and scheduled workbook emails keep every stakeholder informed.",
      points: [
        "In-app AI assistant embedding",
        "Scheduled PDF/PNG email reports",
        "Excel export from live dashboards",
      ],
    },
  ];

  const techStack = [
    { label: "OCI AI Services", icon: <Cpu className="w-5 h-5" /> },
    { label: "AutoML & Data Flows", icon: <BrainCircuit className="w-5 h-5" /> },
    { label: "Vector / Semantic DB", icon: <Database className="w-5 h-5" /> },
    { label: "LLM Orchestration", icon: <Zap className="w-5 h-5" /> },
    { label: "Cloud Infrastructure", icon: <Cloud className="w-5 h-5" /> },
    { label: "ML Pipelines", icon: <LineChart className="w-5 h-5" /> },
  ];

  const whyItems = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Gartner Magic Quadrant Leader",
      desc: "Recognised as a Leader in the 2024 Gartner Magic Quadrant for Analytics and Business Intelligence Platforms — reflecting proven execution and completeness of vision.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Enterprise-Grade Governance",
      desc: "Built-in PII detection, role-based access, data encryption, audit logging, and compliance-ready architecture — so insights never come at the cost of security.",
    },
    {
      icon: <BrainCircuit className="w-5 h-5" />,
      title: "AI Embedded End-to-End",
      desc: "From data ingestion and semantic modelling to visualisation and collaboration — AI is woven into every stage of the analytics workflow, not bolted on as an afterthought.",
    },
  ];

  const benefits = [
    "Reduce time-to-insight from days to seconds",
    "Enable non-technical users to self-serve analytics",
    "Automate management reporting with AI narratives",
    "Unify structured data with documents & policies",
    "Scale from workgroup to enterprise without re-architecture",
  ];

  const faqs = [
    {
      q: "What is AI-powered analytics and reporting?",
      a: "AI-powered analytics uses machine learning and generative AI to automate data exploration, surface insights, generate forecasts, and create narrative reports — dramatically reducing the manual effort traditionally required of analysts.",
    },
    {
      q: "How does the conversational AI assistant work?",
      a: "The AI Assistant translates natural language into analytical actions — creating visualisations, modifying workbooks, and generating dashboards from a simple prompt. Users with no SQL knowledge can produce production-grade analytics in seconds.",
    },
    {
      q: "What is RAG and why does it matter for reporting?",
      a: "Retrieval-Augmented Generation (RAG) allows AI Agents to blend your enterprise datasets with uploaded documents like policies and reports, providing context-aware insights that explain business trends in relation to actual organisational knowledge.",
    },
    {
      q: "Can we use our own LLM (e.g. OpenAI)?",
      a: "Yes. The BYO-LLM capability allows you to connect an external LLM subscription to enrich queries with world knowledge beyond your internal data — enabling highly complex, multi-attribute analytical questions.",
    },
    {
      q: "Is the platform secure and compliant?",
      a: "Absolutely. Built-in PII identification and masking, fine-grained role-based permissions, data encryption, and audit-ready governance ensure enterprise compliance across all analytics operations.",
    },
    {
      q: "How does predictive cash forecasting work?",
      a: "AI models apply prescriptive analytics to historical and real-time financial data, generating daily, weekly, or monthly cash forecasts with automated variance commentary and trend narratives for management reporting.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ───────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.stickyCtaVisible : ""}`}>
        <span className={styles.stickyCtaText}>
          Unlock AI-driven insights for your enterprise
        </span>
        <button className={styles.stickyCtaBtn}>Request a Demo</button>
      </div>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            AI Analytics &amp; Reporting
          </div>

          <h1 className={styles.heroTitle}>
            Analytics That Thinks,
            <br />
            <em>Explains &amp; Predicts</em>
          </h1>

          <p className={styles.heroDesc}>
            Embed generative AI, ML auto-insights, and conversational reporting
            into every decision — transforming raw data into intelligent action
            at enterprise scale.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
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

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className={styles.overview}>
        <StaggerIn className={styles.overviewInner}>
          <span className={styles.sectionEyebrow}>Platform Overview</span>
          <h2 className={styles.overviewTitle}>
            From Passive Dashboards to
            <br />
            <em>Intelligent Decision Platforms</em>
          </h2>
          <p className={styles.overviewDesc}>
            The era of static dashboards is over. Modern AI analytics embeds
            machine learning, generative AI, and agentic reasoning across the
            entire analytics workflow — from data ingestion to narrative
            reporting — so every user, technical or not, can drive outcomes
            rather than just read charts.
          </p>
        </StaggerIn>
      </section>

      {/* ── SOLUTIONS ────────────────────────────────────────── */}
      <section className={styles.solutions}>
        <div className={styles.solutionsInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Solutions</span>
              <h2 className={styles.sectionTitle}>
                AI Capabilities for <em>Every Analytics Role</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                From clickers to coders — generative AI, ML auto-insights, and
                agentic reporting tailored to every skill level in your organisation.
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
                      <li key={j}>
                        <CheckCircle2 size={14} className={styles.checkIcon} />
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

      {/* ── TECH STACK ───────────────────────────────────────── */}
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
                The Stack Powering
                <br />
                <em>Every Insight</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                Built on Oracle Cloud Infrastructure, our platform leverages OCI
                AI Services, AutoML, semantic modelling, and LLM orchestration —
                purpose-engineered for production-scale enterprise analytics.
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

      {/* ── WHY US ───────────────────────────────────────────── */}
      <section className={styles.whyWrapper}>
        <div
          ref={whyRef}
          className={styles.whySection}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Why Us</span>
            <h2 className={styles.whyTitle}>
              Why Enterprises Choose
              <br />
              <em>Our AI Analytics</em>
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
                  Transform How Your Organisation Makes Decisions
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

      {/* ── STATS BAND ───────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

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
                Everything you need to know about deploying AI analytics and
                automated reporting in your enterprise environment.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <div
                  className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}
                  key={i}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {f.q}
                    <span className={styles.faqIcon}>+</span>
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

      {/* ── CTA SECTION ──────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Build Smarter
              <br />
              <em>Analytics for Your Business?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Unlock AI-powered insights, automated reporting, and intelligent
              forecasting — tailored to your enterprise data and goals.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimaryInverse}>Request a Free Demo</button>
              <button className={styles.btnGhostInverse}>View Case Studies</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────── */}
      <section className={styles.contactWrapper}>
        <div className={styles.contactSection}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Contact</span>
              <h2 className={styles.contactTitle}>
                Talk to Our
                <br />
                <em>Analytics Experts</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your data challenges and we&apos;ll map out the right
                AI analytics solution for your organisation.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Responding within 24 hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDotTeal} />
                  Free initial discovery session
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDotTeal} />
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
                  <label className={styles.formLabel}>Company</label>
                  <input
                    type="text"
                    placeholder="Acme Corp"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Team Size</label>
                  <input
                    type="text"
                    placeholder="e.g. 50–200 employees"
                    className={styles.formInput}
                  />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Project Details</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Describe your analytics goals, current data stack, and key challenges..."
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