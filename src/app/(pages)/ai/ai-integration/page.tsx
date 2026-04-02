// AIIntegrationPage.jsx
// Redesigned to match AIAgentDevelopmentPage aesthetic
// CSS Module: aiintegration.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Link2,
  BarChart3,
  MessageSquare,
  GitMerge,
  Cloud,
  Lightbulb,
  ShieldCheck,
  RefreshCw,
  Zap,
  Brain,
  Database,
  Cpu,
  CheckCircle2,
} from "lucide-react";
import styles from "./ai-integration.module.css";
import { ReactNode } from "react";
// ─────────────────────────────────────────────────────────────────
// SCROLL-TRIGGERED VISIBILITY HOOK
// ─────────────────────────────────────────────────────────────────

function useInView(threshold: number = 0.15): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null!);
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

// ─────────────────────────────────────────────────────────────────
// STAGGER-IN WRAPPER
// ─────────────────────────────────────────────────────────────────


type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

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

// ─────────────────────────────────────────────────────────────────
// DATA
// ─────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <Link2 className="w-5 h-5" />,
    title: "ERP & CRM AI Integration",
    description:
      "Enhance your business systems with predictive intelligence and automated decision-making.",
    points: ["Sales forecasting", "Customer behavior insights", "Process automation"],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "AI-Powered Analytics",
    description:
      "Turn raw data into actionable insights that drive smarter, faster business decisions.",
    points: ["Real-time dashboards", "Predictive analytics", "Performance tracking"],
  },
  {
    icon: <MessageSquare className="w-5 h-5" />,
    title: "Conversational AI",
    description:
      "Improve customer engagement and support capacity with intelligent conversational automation.",
    points: ["Chatbots & virtual assistants", "Voice-based systems", "Support automation"],
  },
  {
    icon: <GitMerge className="w-5 h-5" />,
    title: "MLOps & LLMOps Integration",
    description:
      "Manage and scale AI models efficiently across production environments.",
    points: ["Model deployment pipelines", "Monitoring & optimization", "Continuous learning"],
  },
  {
    icon: <Cloud className="w-5 h-5" />,
    title: "AI APIs & Cloud Integration",
    description:
      "Connect AI capabilities seamlessly into your existing cloud and software ecosystem.",
    points: ["Third-party AI APIs", "Cloud-based AI services", "Scalable infrastructure"],
  },
];

const processSteps = [
  { number: "01", title: "Assessment & Strategy", desc: "Analyze your systems and identify the highest-impact AI opportunities." },
  { number: "02", title: "Architecture Planning", desc: "Design an integration framework precisely aligned with your workflows." },
  { number: "03", title: "Implementation", desc: "Seamless, phased integration with minimal downtime or disruption." },
  { number: "04", title: "Testing & Optimization", desc: "Rigorous validation to ensure accuracy, performance, and reliability." },
  { number: "05", title: "Deployment & Scaling", desc: "Go live with scalable, future-ready systems built to grow with you." },
];

const techStack = [
  { label: "AI & ML Frameworks", icon: <Brain className="w-5 h-5" /> },
  { label: "Cloud Platforms", icon: <Cloud className="w-5 h-5" /> },
  { label: "Vector Databases", icon: <Database className="w-5 h-5" /> },
  { label: "MLOps Pipelines", icon: <Zap className="w-5 h-5" /> },
  { label: "API Orchestration", icon: <Cpu className="w-5 h-5" /> },
];

const techDetails = [
  { title: "AI & ML Frameworks", items: ["TensorFlow", "PyTorch", "OpenAI", "Anthropic", "LangChain", "Hugging Face"] },
  { title: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud", "Vercel", "Railway"] },
  { title: "Data Tools", items: ["PostgreSQL", "MongoDB", "Redis", "Pinecone", "Weaviate"] },
  { title: "Integration", items: ["REST APIs", "GraphQL", "Webhooks", "Apache Kafka", "RabbitMQ"] },
];

const whyItems = [
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "End-to-End Expertise",
    desc: "From strategy and design to deployment, monitoring, and continuous optimization.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Minimal Downtime",
    desc: "Smooth integration with no disruption to your daily operations or existing workflows.",
  },
  {
    icon: <RefreshCw className="w-5 h-5" />,
    title: "Cross-Platform Compatibility",
    desc: "Works seamlessly across legacy infrastructure and modern cloud-native systems alike.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Security & Compliance",
    desc: "Built with data protection, audit-ready architecture, and industry standards in mind.",
  },
];

const benefits = [
  "Automate repetitive processes end-to-end",
  "Unlock real-time predictive insights",
  "Integrate with legacy and modern platforms",
  "Ensure GDPR, SOC 2 compliance",
  "Scale AI capabilities as your business grows",
];

const stats = [
  { num: "150+", label: "Systems Integrated" },
  { num: "98%", label: "Client Retention" },
  { num: "40%", label: "Faster Decisions" },
  { num: "24/7", label: "System Uptime" },
];

const faqs = [
  {
    q: "What is AI integration?",
    a: "AI integration connects intelligent models with your existing systems to automate processes and improve decision-making — without rebuilding your infrastructure from scratch.",
  },
  {
    q: "Can AI work with legacy systems?",
    a: "Yes. We use APIs, middleware, and custom connectors to bridge the gap between legacy platforms and modern AI technologies, avoiding costly rebuilds.",
  },
  {
    q: "What platforms can be integrated?",
    a: "CRM systems, ERP platforms, analytics tools, customer support platforms, and more. We work across a wide range of enterprise software and custom solutions.",
  },
  {
    q: "How long does integration take?",
    a: "Simple integrations can be completed in 4–6 weeks. Enterprise-scale projects typically follow a phased rollout over 3–6 months depending on complexity.",
  },
  {
    q: "Is it secure?",
    a: "Yes. All integrations follow strict data security standards — encryption, access controls, audit logging, and compliance with GDPR, SOC 2, and industry regulations.",
  },
];

// ─────────────────────────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────────────────────────

export default function AIIntegrationPage() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", country: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const [whyRef, whyVisible] = useInView(0.15);

  const handleFaqToggle = (index: number) => {
  setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({ name: "", email: "", phone: "", country: "", message: "" });
    setTimeout(() => setShowSuccess(false), 5000);
  };

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to connect AI to your business?</span>
        <button className={styles.stickyCtaBtn}>Get a Free Consultation</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            AI Integration Services
          </div>

          <h1 className={styles.heroTitle}>
            Smarter Systems with
            <br />
            <em>Seamless AI Integration</em>
          </h1>

          <p className={styles.heroDesc}>
            We embed AI into your existing platforms — unlocking automation, insights,
            and intelligent decision-making without disrupting operations.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
            <button className={styles.btnGhost}>Talk to an Expert</button>
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

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section className={styles.solutions}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>What We Integrate</span>
          <h2 className={styles.sectionTitle}>
            AI Solutions for <em>Every Business System</em>
          </h2>
          <p className={styles.sectionDesc}>
            We develop and deploy AI integrations designed to connect intelligent
            capabilities with your workflows — at any scale, on any platform.
          </p>
        </StaggerIn>

        <div className={styles.cardsGrid}>
          {services.map((s, i) => (
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

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <div className={styles.processHeader}>
            <StaggerIn>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Our Process
              </span>
              <h2 className={styles.processTitle}>
                A Proven Path to
                <br />
                <em>Successful Integration</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.processSubDesc}>
                From initial assessment to live deployment, we follow a structured,
                low-disruption methodology built for enterprise reliability.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.processStep}>
                  <div className={styles.processNum}>{step.number}</div>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
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
                <em>Every Integration</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                We leverage modern AI frameworks, cloud platforms, and integration
                tooling — purpose-built for production-grade deployments.
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

          {/* Detailed tech categories */}
          <div className={styles.techCategories}>
            {techDetails.map((cat, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.techCategory}>
                  <h4 className={styles.techCategoryTitle}>{cat.title}</h4>
                  <div className={styles.techTags}>
                    {cat.items.map((item, j) => (
                      <span key={j} className={styles.techTag}>{item}</span>
                    ))}
                  </div>
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
              <em>Our Integration Services</em>
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
                  Unlock the Full Power of AI in Your Existing Systems
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
                Everything you need to know about integrating AI into your
                existing business infrastructure.
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
              Ready to Upgrade Your Systems
              <br />
              <em>with Intelligent AI?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Let's integrate smart capabilities into your business and unlock
              new levels of efficiency, speed, and scale.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>Get a Free Quote</button>
              <button className={styles.btnGhost}>View Case Studies</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section id="contact" style={{ background: "var(--color-white)" }}>
        <div className={styles.contactSection}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Contact</span>
              <h2 className={styles.contactTitle}>
                Let's Build Smarter
                <br />
                <em>Systems Together</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your integration needs and we'll help you find the
                right AI solution for your business.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Responding within 24 hours
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
                  Free initial consultation
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
            <form className={styles.contactForm} onSubmit={handleSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Jane Smith"
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="jane@company.com"
                    className={styles.formInput}
                    required
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    className={styles.formInput}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Country</label>
                  <select
                    name="country"
                    value={formData.country}
                    onChange={handleInputChange}
                    className={styles.formInput}
                    required
                  >
                    <option value="">Select a country</option>
                    <option value="US">United States</option>
                    <option value="UK">United Kingdom</option>
                    <option value="CA">Canada</option>
                    <option value="AU">Australia</option>
                    <option value="IN">India</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className={styles.formTextarea}
                  placeholder="Tell us about your project, systems, and integration goals..."
                  required
                />
              </div>
              <button
                type="submit"
                className={styles.formSubmit}
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Inquiry"}
              </button>

              {showSuccess && (
                <div className={styles.successMsg}>
                  ✓ Thank you! We'll be in touch within 24 hours.
                </div>
              )}
            </form>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}