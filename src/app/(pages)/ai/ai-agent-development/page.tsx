// AIAgentDevelopmentPage.jsx
// Premium redesign — Vercel / Stripe / OpenAI aesthetic
// CSS Module: aiagent.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Brain,
  Bot,
  Workflow,
  Network,
  Cloud,
  Database,
  Lightbulb,
  ShieldCheck,
  Cpu,
  Zap,
  CheckCircle2,
} from "lucide-react";
import styles from "./aiagent.module.css";
import { ReactNode } from "react";

type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};


/* ── Scroll-triggered visibility hook ────────────────────── */
function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Stagger children hook ───────────────────────────────── */
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

export default function AIAgentDevelopmentPage() {
  /* Sticky CTA visibility */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why-section in-view refs */
  const [whyRef, whyVisible] = useInView(0.15);

  /* ── Data ── */
  const solutions = [
    {
      title: "Enterprise AI Agents",
      description: "AI-powered assistants that support HR, finance, sales, and customer service teams with intelligent automation.",
      points: ["Automate operational tasks", "24/7 support availability", "Improve team productivity"],
      icon: <Bot className="w-5 h-5" />,
    },
    {
      title: "Knowledge & Research Agents",
      description: "Agents that collect, analyze, and summarize massive data sources to support faster decision making.",
      points: ["Real-time data analysis", "Knowledge retrieval", "Automated research support"],
      icon: <Brain className="w-5 h-5" />,
    },
    {
      title: "Workflow Automation",
      description: "Automation agents designed to streamline internal processes and eliminate manual operations.",
      points: ["Automate workflows", "Enterprise tool integration", "Reduce manual intervention"],
      icon: <Workflow className="w-5 h-5" />,
    },
    {
      title: "Multi-Agent Systems",
      description: "Advanced architectures where multiple AI agents collaborate to complete complex business tasks.",
      points: ["Distributed task handling", "Agent collaboration", "Enterprise scale automation"],
      icon: <Network className="w-5 h-5" />,
    },
    {
      title: "AI Agent-as-a-Service",
      description: "Deploy scalable AI agents through cloud infrastructure without managing complex backend systems.",
      points: ["Rapid deployment", "Scalable infrastructure", "Continuous improvements"],
      icon: <Cloud className="w-5 h-5" />,
    },
  ];

  const techStack = [
    { label: "LLM Frameworks", icon: <Brain className="w-5 h-5" /> },
    { label: "AI Orchestration", icon: <Cpu className="w-5 h-5" /> },
    { label: "Vector Databases", icon: <Database className="w-5 h-5" /> },
    { label: "ML Pipelines", icon: <Zap className="w-5 h-5" /> },
    { label: "Cloud Infrastructure", icon: <Cloud className="w-5 h-5" /> },
  ];

  const whyItems = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Full-Cycle Development",
      desc: "From strategy and design to deployment, monitoring, and continuous optimization.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Enterprise Reliability",
      desc: "Built with security, compliance, human oversight, and audit-ready architecture.",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Industry-Focused AI",
      desc: "Tailored AI agents for healthcare, retail, finance, and enterprise operations.",
    },
  ];

  const benefits = [
    "Reduce operational costs by up to 60%",
    "Improve team productivity dramatically",
    "Enable 24/7 business operations",
    "Enhance customer engagement quality",
    "Faster, data-driven decisions",
  ];

  const stats = [
    { num: "200+", label: "Agents Deployed" },
    { num: "98%", label: "Client Retention" },
    { num: "60%", label: "Cost Reduction" },
    { num: "24/7", label: "Support Coverage" },
  ];

  const faqs = [
    {
      q: "What are AI agents?",
      a: "AI agents are intelligent software systems capable of performing tasks autonomously, interacting with users, and making decisions using data and machine learning models.",
    },
    {
      q: "Which business processes benefit from AI agents?",
      a: "Customer support, research, workflow automation, sales assistance, internal operations, and knowledge management are the most common use cases.",
    },
    {
      q: "Do you build custom multi-agent systems?",
      a: "Yes. We design advanced multi-agent architectures where multiple AI agents collaborate to solve complex, interconnected business problems.",
    },
    {
      q: "How secure are AI agents?",
      a: "Our systems follow enterprise-grade security standards including access control, data encryption, audit logging, and compliance practices.",
    },
    {
      q: "Can AI agents integrate with enterprise tools?",
      a: "Yes. Our agents integrate seamlessly with CRMs, ERPs, internal databases, REST APIs, and other enterprise platforms.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to automate your operations?</span>
        <button className={styles.stickyCtaBtn}>Get a Free Quote</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            AI Agent Development
          </div>

          <h1 className={styles.heroTitle}>
            Build Agents That
            <br />
            <em>Think, Act & Scale</em>
          </h1>

          <p className={styles.heroDesc}>
            Intelligent AI agents that automate workflows, enhance decision-making,
            and power enterprise operations — built for teams that move fast.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
            <button className={styles.btnGhost}>Talk to AI Experts</button>
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

      {/* ── SOLUTIONS ──────────────────────────────────────────── */}
      <section className={styles.solutions}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>Solutions</span>
          <h2 className={styles.sectionTitle}>
            AI Agents for <em>Modern Businesses</em>
          </h2>
          <p className={styles.sectionDesc}>
            We develop scalable AI agents designed to automate business processes,
            improve productivity, and unlock intelligent decision making at every level.
          </p>
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
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── TECH STACK ─────────────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <div className={styles.techHeader}>
            <StaggerIn>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Technology
              </span>
              <h2 className={styles.techTitle}>
                The Stack Behind
                <br />
                <em>Every Agent</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                Our solutions leverage modern AI frameworks, orchestration platforms,
                and scalable cloud infrastructure — purpose-built for production environments.
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
      <section style={{ padding: "clamp(5rem,10vw,9rem) clamp(1.5rem,5vw,4rem)" }}>
        <div
          ref={whyRef}
          className={styles.whySection}
          style={{ padding: 0 }}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Why Us</span>
            <h2 className={styles.whyTitle}>
              Why Businesses Choose
              <br />
              <em>Our AI Solutions</em>
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
                  Transform Your Business with Intelligent Automation
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
        {stats.map((s, i) => (
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
                Everything you need to know about deploying AI agents
                in your enterprise environment.
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
              Ready to Build AI Agents
              <br />
              <em>for Your Business?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Unlock intelligent automation and transform your operations
              with custom-built AI agents.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>Get a Free Quote</button>
              <button className={styles.btnGhost}>View Case Studies</button>
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
                <em>AI Experts</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your project and we'll help you find the right
                AI agent solution for your business.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Responding within 24 hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--color-primary)", display: "inline-block", flexShrink: 0 }} />
                  Free initial consultation
                </div>
                <div className={styles.contactMetaItem}>
                  <span style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--color-primary)", display: "inline-block", flexShrink: 0 }} />
                  No commitment required
                </div>
              </div>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Name</label>
                  <input type="text" placeholder="Jane Smith" className={styles.formInput} />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email</label>
                  <input type="email" placeholder="jane@company.com" className={styles.formInput} />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone</label>
                  <input type="tel" placeholder="+1 (555) 000-0000" className={styles.formInput} />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Country</label>
                  <input type="text" placeholder="United States" className={styles.formInput} />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Tell us about your project, team size, and goals..."
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