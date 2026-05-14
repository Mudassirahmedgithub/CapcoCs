// AnalyticsInsightsPage.tsx
// Analytics AI Insights — Oracle-informed content
// CSS Module: analytics.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  BrainCircuit,
  MessageSquare,
  Zap,
  Database,
  LineChart,
  ShieldCheck,
  ScanSearch,
  Layers,
  TrendingUp,
  Sparkles,
  Bot,
  ChevronDown,
  CheckCircle2,
} from "lucide-react";
import styles from "./analytics.module.css";
import { ReactNode } from "react";

/* ── Types ──────────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ──────────────────────── */
function useInView(threshold = 0.12): [React.RefObject<HTMLDivElement>, boolean] {
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

/* ── Stagger wrapper ────────────────────────────────────────── */
function StaggerIn({ children, className, delay = 0 }: StaggerInProps) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

/* ── FAQ Item ───────────────────────────────────────────────── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.open : ""}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        {q}
        <ChevronDown className={styles.faqIcon} size={18} />
      </button>
      <div className={styles.faqAnswer}>
        <p className={styles.faqAnswerContent}>{a}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */

export default function AnalyticsInsightsPage() {
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 420);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Data ── */
  const stats = [
    { num: "500+", label: "Enterprise Clients" },
    { num: "99.9%", label: "Platform Uptime" },
    { num: "3x", label: "Faster Decisions" },
    { num: "60%", label: "Cost Reduction" },
  ];

  const capabilities = [
    {
      icon: <MessageSquare size={20} />,
      title: "Conversational AI Assistant",
      description:
        "Ask business questions in plain language. Our AI translates natural-language queries into instant visualizations, forecasts, and insight summaries — no SQL required.",
      points: ["Natural language querying (NLQ)", "Context-aware follow-up dialogue", "Instant workbook generation"],
    },
    {
      icon: <ScanSearch size={20} />,
      title: "Auto Insights & Explain",
      description:
        "One-click ML analysis scans every metric and attribute in your dataset to surface hidden patterns, anomalies, and key business drivers you might otherwise miss.",
      points: ["Automatic anomaly detection", "Key driver identification", "Transparent, editable calculations"],
    },
    {
      icon: <LineChart size={20} />,
      title: "Predictive Analytics & Forecasting",
      description:
        "Built-in algorithms including Seasonal ARIMA deliver reliable forecasts for revenue, demand, staffing, and supply chain — customizable to your model preferences.",
      points: ["Multi-period revenue forecasting", "Trend lines & cluster analysis", "Prediction interval customization"],
    },
    {
      icon: <BrainCircuit size={20} />,
      title: "Generative AI & BYO-LLM",
      description:
        "Integrate external LLMs like OpenAI to extend analytics beyond your datasets — enriching queries with real-world context such as market conditions, public holidays, or weather data.",
      points: ["Bring-your-own LLM integration", "External knowledge augmentation", "OCI AI Services connectivity"],
    },
    {
      icon: <Layers size={20} />,
      title: "Agentic Analytics Experience",
      description:
        "AI agents that understand not just what happened, but why — combining enterprise data with business context to deliver proactive, domain-aware intelligence.",
      points: ["Domain-aware AI agents", "Proactive decision support", "Embedded workflow intelligence"],
    },
    {
      icon: <Database size={20} />,
      title: "Unified Data Platform",
      description:
        "Seamlessly connect Oracle Autonomous Database, OCI Data Lake, ERP, SCM, and HCM data into a single governed analytics environment — no duplication needed.",
      points: ["Cross-environment data access", "Prebuilt Oracle Fusion connectors", "Governed ML pipelines"],
    },
  ];

  const industries = [
    {
      icon: <TrendingUp size={20} />,
      title: "Finance & ERP",
      desc: "Predict late payment risk, detect expense anomalies, and optimize cash flow with AI models trained on aging receivables and spend history.",
    },
    {
      icon: <Layers size={20} />,
      title: "Supply Chain",
      desc: "Anticipate on-time delivery risks, reduce supplier disruptions, and connect supply chain signals with external market data for smarter planning.",
    },
    {
      icon: <Bot size={20} />,
      title: "Human Capital",
      desc: "Predict staffing needs, identify hidden skill gaps, surface bias in hiring practices, and improve time-to-hire across diverse workforce segments.",
    },
    {
      icon: <Sparkles size={20} />,
      title: "Customer Experience",
      desc: "Minimize churn risk, surface high-value engagement opportunities, and equip sales teams with AI-recommended next best actions — in real time.",
    },
  ];

  const process = [
    { step: "01", title: "Connect Your Data", desc: "Link Oracle Fusion, on-prem databases, cloud storage, or REST APIs into a unified, governed analytics environment." },
    { step: "02", title: "Configure AI Models", desc: "Select built-in ML models or register custom OCI AI Language models tailored to your domain and use case." },
    { step: "03", title: "Explore with AI", desc: "Use the conversational assistant or Auto Insights to surface patterns, forecasts, and anomalies with a single click." },
    { step: "04", title: "Act on Insights", desc: "Embed dashboards, automate reports, or push AI-generated insights directly into your existing business workflows." },
  ];

  const whyItems = [
    {
      icon: <ShieldCheck size={22} />,
      title: "Enterprise-Grade Governance",
      desc: "Fine-grained access controls, audit logging, data privacy compliance, and OCI-secured infrastructure built for regulated industries.",
    },
    {
      icon: <Zap size={22} />,
      title: "AI Built-In, Not Bolted On",
      desc: "Generative AI, ML, and NLP are embedded natively throughout the platform — not layered on as an afterthought — for seamless, consistent experiences.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Analytics for Every Role",
      desc: "From data scientists running custom ML pipelines to business users asking plain-language questions — one platform serves every level of analytical maturity.",
    },
  ];

  const faqs = [
    {
      q: "What is Oracle Analytics AI Insights?",
      a: "Oracle Analytics AI Insights is an enterprise analytics platform that embeds generative AI, machine learning, and natural language processing throughout the data-to-decision process — helping every user, from analysts to executives, discover and act on insights faster.",
    },
    {
      q: "Do users need coding skills to use AI features?",
      a: "No. Features like the AI Assistant, Auto Insights, and Explain are designed for business users with no technical background. Users simply ask questions in natural language and the platform generates visualizations and explanations automatically.",
    },
    {
      q: "Can I integrate my own LLM or AI models?",
      a: "Yes. Oracle Analytics supports Bring-Your-Own-LLM (BYO-LLM), allowing you to connect external models such as OpenAI. You can also register custom OCI AI Language models for domain-specific analytics use cases.",
    },
    {
      q: "Which Oracle data sources and apps are supported?",
      a: "Oracle Analytics connects natively with Oracle Autonomous Database, Oracle Fusion ERP, SCM, HCM, and CX applications, OCI Data Lake, Oracle Cloud Storage, and a wide range of third-party databases and REST APIs.",
    },
    {
      q: "How does Oracle ensure data privacy and compliance?",
      a: "The platform includes fine-grained access controls, PII identification and obfuscation, audit logging, and is hosted on Oracle Cloud Infrastructure with enterprise security standards, supporting compliance with global data privacy regulations.",
    },
    {
      q: "Can analytics be embedded in other applications?",
      a: "Yes. Oracle Analytics supports embedding AI-powered dashboards and the conversational AI Assistant directly into third-party business applications, eliminating context switching and bringing insights into users' native workflows.",
    },
  ];

  const benefits = [
    "Reduce time-to-insight from days to seconds",
    "Enable non-technical users with NL-powered analytics",
    "Automate anomaly detection across all data domains",
    "Embed insights directly in enterprise applications",
    "Scale from departmental to enterprise-wide AI analytics",
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Transform your data into decisions.</span>
        <button className={styles.stickyCtaBtn}>Request a Demo</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGlowSecondary} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Analytics AI Insights
          </div>

          <h1 className={styles.heroTitle}>
            Data That Thinks.
            <br />
            <em>Insights That Act.</em>
          </h1>

          <p className={styles.heroDesc}>
            AI-powered analytics that understands your questions, surfaces what matters,
            and drives decisions at every level of your enterprise — in real time.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
            <button className={styles.btnGhost}>Explore Capabilities</button>
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

      {/* ── OVERVIEW ───────────────────────────────────────── */}
      <section className={styles.overview}>
        <StaggerIn>
          <div className={styles.overviewInner}>
            <span className={styles.sectionEyebrow}>Platform Overview</span>
            <h2 className={styles.overviewTitle}>
              Analytics <em>Rebuilt Around</em> Human Intent
            </h2>
            <p className={styles.overviewDesc}>
              Traditional BI required analysts to be intermediaries — translating data into explanations
              rather than outcomes. Our AI-powered analytics platform changes that. Generative AI, ML,
              and natural language processing are embedded natively throughout — from data ingestion to
              decision support — so every user can go from question to insight without technical friction.
            </p>
          </div>
        </StaggerIn>
      </section>

      {/* ── CAPABILITIES ───────────────────────────────────── */}
      <section className={styles.capabilities}>
        <div className={styles.capabilitiesInner}>
          <StaggerIn delay={0}>
            <span className={styles.sectionEyebrow}>Core Capabilities</span>
            <h2 className={styles.sectionTitle}>
              AI Insights for <em>Every Use Case</em>
            </h2>
            <p className={styles.sectionDesc}>
              From conversational dashboards to predictive forecasting, our platform embeds AI
              throughout the analytics lifecycle — making intelligence accessible to every role.
            </p>
          </StaggerIn>

          <div className={styles.capabilitiesGrid}>
            {capabilities.map((cap, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.capCard}>
                  <div className={styles.capCardTop} />
                  <div className={styles.capIconWrap}>{cap.icon}</div>
                  <h3 className={styles.capTitle}>{cap.title}</h3>
                  <p className={styles.capDesc}>{cap.description}</p>
                  <ul className={styles.capPoints}>
                    {cap.points.map((p, j) => (
                      <li key={j}>
                        <CheckCircle2 size={13} className={styles.capCheck} />
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

      {/* ── PROCESS ────────────────────────────────────────── */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>How It Works</span>
            <h2 className={styles.sectionTitle}>
              From <em>Data to Decision</em> in Four Steps
            </h2>
          </StaggerIn>
          <div className={styles.processSteps}>
            {process.map((p, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.processStep}>
                  <span className={styles.processStepNum}>{p.step}</span>
                  <h3 className={styles.processStepTitle}>{p.title}</h3>
                  <p className={styles.processStepDesc}>{p.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRY SOLUTIONS ─────────────────────────────── */}
      <section className={styles.industries}>
        <div className={styles.industriesInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
              Industry Solutions
            </span>
            <h2 className={styles.industriesTitle}>
              AI Insights Tailored
              <br />
              <em>for Your Sector</em>
            </h2>
            <p className={styles.industriesDesc}>
              Prebuilt AI models and analytics KPIs designed for the data realities and decision
              needs of your specific industry — deployed without starting from scratch.
            </p>
          </StaggerIn>

          <div className={styles.industriesGrid}>
            {industries.map((item, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.industryCard}>
                  <div className={styles.industryIconWrap}>{item.icon}</div>
                  <h3 className={styles.industryTitle}>{item.title}</h3>
                  <p className={styles.industryDesc}>{item.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────── */}
      <section className={styles.why}>
        <div className={styles.whyInner}>
          <div className={styles.whyLeft}>
            <StaggerIn>
              <span className={styles.sectionEyebrow}>Why Choose Us</span>
              <h2 className={styles.whyTitle}>
                The Difference Is
                <br />
                <em>Depth of Intelligence</em>
              </h2>
              <p className={styles.whyDesc}>
                We don't add AI as a feature — we build analytics platforms where intelligence
                is foundational. Every capability is governed, explainable, and production-ready.
              </p>
            </StaggerIn>
            <StaggerIn delay={0.1}>
              <ul className={styles.benefitsList}>
                {benefits.map((b, i) => (
                  <li key={i} className={styles.benefitItem}>
                    <span className={styles.benefitDot} />
                    {b}
                  </li>
                ))}
              </ul>
            </StaggerIn>
          </div>

          <div className={styles.whyRight}>
            {whyItems.map((item, i) => (
              <StaggerIn key={i} delay={i * 0.09}>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardIcon}>{item.icon}</div>
                  <div>
                    <h3 className={styles.whyCardTitle}>{item.title}</h3>
                    <p className={styles.whyCardDesc}>{item.desc}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <StaggerIn>
            <h2 className={styles.ctaTitle}>
              Ready to Turn Your Data
              <br />
              into <em>Competitive Advantage?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Join hundreds of enterprises already using AI-powered analytics to accelerate
              decisions, reduce costs, and outpace the competition.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnPrimary}>Start Free Trial</button>
              <button className={styles.ctaBtnGhost}>Talk to an Expert</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>FAQ</span>
            <h2 className={styles.sectionTitle}>
              Common <em>Questions</em>
            </h2>
          </StaggerIn>
          <div className={styles.faqList}>
            {faqs.map((item, i) => (
              <StaggerIn key={i} delay={i * 0.05}>
                <FaqItem q={item.q} a={item.a} />
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────── */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.contactLeft}>
            <StaggerIn>
              <span className={styles.sectionEyebrow}>Get in Touch</span>
              <h2 className={styles.contactTitle}>
                Let's Build Your
                <br />
                <em>Intelligence Layer</em>
              </h2>
              <p className={styles.contactDesc}>
                Whether you're modernising a legacy BI stack or embedding AI insights into
                Fusion applications, our team will map the right solution to your goals.
              </p>
              <div className={styles.contactMeta}>
                <span className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Response within 1 business day
                </span>
                <span className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Free architecture consultation included
                </span>
              </div>
            </StaggerIn>
          </div>

          <div className={styles.contactRight}>
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
                  <input className={styles.formInput} type="email" placeholder="jane@company.com" />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Company</label>
                  <input className={styles.formInput} type="text" placeholder="Acme Corp" />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Area of Interest</label>
                  <select className={styles.formInput}>
                    <option value="">Select a solution</option>
                    <option>Conversational AI Assistant</option>
                    <option>Predictive Analytics</option>
                    <option>Oracle Fusion Integration</option>
                    <option>Custom ML Models</option>
                    <option>Enterprise Dashboards</option>
                  </select>
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Message</label>
                  <textarea className={styles.formTextarea} placeholder="Tell us about your data challenges..." />
                </div>
                <button className={styles.formSubmit}>Request Consultation</button>
              </div>
            </StaggerIn>
          </div>
        </div>
      </section>

    </div>
  );
}