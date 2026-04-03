"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import {
  Sparkles,
  Brain,
  Target,
  Users,
  Layers,
  ShieldCheck,
  Zap,
  BarChart3,
  MessageSquare,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Cpu,
  Globe,
  Lock,
  TrendingUp,
} from "lucide-react";
import styles from "./gaic.module.css";

/* ─────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────── */

type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

type ServiceCard = {
  icon: ReactNode;
  title: string;
  points: string[];
};

type ProcessStep = {
  num: string;
  title: string;
  desc: string;
};

type WhyItem = {
  icon: ReactNode;
  title: string;
  desc: string;
};

type TechItem = {
  icon: ReactNode;
  label: string;
  sublabel: string;
};

type FaqItem = {
  q: string;
  a: string;
};

type StatItem = {
  num: string;
  label: string;
};

/* ─────────────────────────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────────────────────────── */

function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState<boolean>(false);

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

/* ─────────────────────────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────────────────────────── */

function StaggerIn({ children, className, delay = 0, threshold = 0.1 }: StaggerInProps): React.JSX.Element {
  const [ref, visible] = useInView(threshold);
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

function FaqItem({ item }: { item: FaqItem }): React.JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.faqOpen : ""}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen((o) => !o)}>
        <span>{item.q}</span>
        <ChevronDown className={styles.faqChevron} size={18} />
      </button>
      <div className={styles.faqAnswer}>
        <p>{item.a}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */

const stats: StatItem[] = [
  { num: "150+", label: "AI Projects Delivered" },
  { num: "40%", label: "Avg Efficiency Gain" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "12+", label: "Industries Served" },
];

const services: ServiceCard[] = [
  {
    icon: <Target size={20} />,
    title: "Enterprise AI Strategy",
    points: [
      "Define AI vision aligned with business goals",
      "Identify high-impact use cases",
      "Build phased adoption roadmap",
      "Set measurable KPIs",
    ],
  },
  {
    icon: <BarChart3 size={20} />,
    title: "AI for Business Functions",
    points: [
      "Marketing content generation",
      "Customer support automation",
      "HR and internal workflows",
      "Sales and analytics enhancement",
    ],
  },
  {
    icon: <Cpu size={20} />,
    title: "AI Copilot Development",
    points: [
      "Custom AI assistants for teams",
      "Workflow automation copilots",
      "Knowledge base integration",
      "Productivity optimization tools",
    ],
  },
  {
    icon: <Layers size={20} />,
    title: "Multimodal AI Solutions",
    points: [
      "Text, image, and voice AI systems",
      "Document understanding",
      "AI-powered search & insights",
      "Cross-platform intelligent apps",
    ],
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Responsible AI",
    points: [
      "Bias detection and mitigation",
      "Explainable AI systems",
      "Data privacy and compliance",
      "Ethical AI governance",
    ],
  },
];

const processSteps: ProcessStep[] = [
  { num: "01", title: "Discovery & Assessment", desc: "Understand your business, data assets, and transformation opportunities through deep workshops and audits." },
  { num: "02", title: "Strategy & Roadmap", desc: "Define a clear AI adoption plan, prioritize initiatives, and align stakeholders around a phased delivery model." },
  { num: "03", title: "Solution Design", desc: "Architect scalable, secure AI systems tailored to your infrastructure and compliance requirements." },
  { num: "04", title: "Development & Integration", desc: "Build and integrate AI into existing workflows with rigorous testing and change management." },
  { num: "05", title: "Optimization & Scaling", desc: "Monitor model performance, retrain on new data, and expand capabilities as your business evolves." },
];

const techItems: TechItem[] = [
  { icon: <Brain size={22} />, label: "Large Language Models", sublabel: "GPT-4o, Claude, Gemini, Llama" },
  { icon: <MessageSquare size={22} />, label: "NLP Frameworks", sublabel: "LangChain, LlamaIndex, Haystack" },
  { icon: <Globe size={22} />, label: "Cloud AI Platforms", sublabel: "AWS Bedrock, Azure OpenAI, GCP Vertex" },
  { icon: <Zap size={22} />, label: "Automation Tools", sublabel: "n8n, Make, Zapier, Airflow" },
  { icon: <TrendingUp size={22} />, label: "Data Engineering", sublabel: "Databricks, Snowflake, dbt, Spark" },
  { icon: <Lock size={22} />, label: "Vector Databases", sublabel: "Pinecone, Weaviate, Chroma, pgvector" },
];

const whyItems: WhyItem[] = [
  { icon: <Layers size={20} />, title: "End-to-End Expertise", desc: "From strategy to deployment and continuous optimization — one partner for the full lifecycle." },
  { icon: <Target size={20} />, title: "Business-Centric Approach", desc: "Every solution is anchored to real business outcomes, not just technology for technology's sake." },
  { icon: <Users size={20} />, title: "Industry Experience", desc: "Proven delivery across healthcare, finance, retail, and enterprise operations." },
  { icon: <ShieldCheck size={20} />, title: "Scalable & Secure", desc: "Enterprise-grade architecture built for performance, compliance, and long-term resilience." },
  { icon: <Brain size={20} />, title: "Ethical AI Focus", desc: "Responsible AI practices with transparency, fairness, and governance at the core." },
];

const faqs: FaqItem[] = [
  { q: "What is Generative AI consulting?", a: "It helps businesses adopt AI for automation, content creation, and decision-making with a structured, scalable, and responsible approach tailored to your industry." },
  { q: "How do you select the right AI solution?", a: "Based on your specific use case, existing data infrastructure, scalability needs, compliance requirements, and budget constraints — always starting with a discovery phase." },
  { q: "Can AI improve business efficiency?", a: "Yes, significantly. Through intelligent automation, faster data-driven insights, and streamlined workflows, our clients typically see 30–60% efficiency improvements." },
  { q: "Do you offer industry-specific solutions?", a: "Absolutely. Our solutions are tailored to your sector — whether healthcare, financial services, retail, manufacturing, or professional services." },
  { q: "How do you ensure responsible AI use?", a: "We embed compliance frameworks, transparency mechanisms, and bias mitigation practices throughout the development lifecycle, not as an afterthought." },
];

/* ─────────────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────────────── */

export default function GenAIConsultingPage(): React.JSX.Element {
  const [stickyVisible, setStickyVisible] = useState<boolean>(false);
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    country: string;
    message: string;
  }>({ name: "", email: "", country: "", message: "" });
  const [submitted, setSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const handler = (): void => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ): void => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ───────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to unlock AI for your business?</span>
        <button className={styles.stickyCtaBtn}>Get Free Consultation</button>
      </div>

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGlowSecondary} />

        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Generative AI Consulting
          </div>

          <h1 className={styles.heroTitle}>
            Transform Ideas into
            <br />
            <em>Intelligent Solutions</em>
          </h1>

          <p className={styles.heroDesc}>
            We help organizations design, build, and scale Generative AI solutions — from strategy
            to deployment — delivering measurable business impact.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>
              Get Free Consultation
              <ArrowRight size={16} />
            </button>
            <button className={styles.btnGhost}>Talk to an Expert</button>
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

      {/* ── VALUE PROPOSITION ────────────────────────────────── */}
      <section className={styles.valueSection}>
        <div className={styles.valueInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Our Approach</span>
            <h2 className={styles.sectionTitle}>
              From Concept to <em>Enterprise-Scale AI</em>
            </h2>
          </StaggerIn>
          <StaggerIn delay={0.12}>
            <p className={styles.valueDesc}>
              Our Generative AI consulting approach ensures your journey is structured, secure, and
              outcome-driven. Whether you&apos;re exploring AI for the first time or scaling existing
              initiatives, we guide you from ideation to full implementation with clear ROI.
            </p>
          </StaggerIn>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className={styles.services}>
        <StaggerIn>
          <span className={styles.sectionEyebrow}>What We Offer</span>
          <h2 className={styles.sectionTitle}>
            Core <em>Offerings</em>
          </h2>
          <p className={styles.sectionDesc}>
            Five practice areas, each precision-engineered to drive AI adoption at every layer of
            your organisation.
          </p>
        </StaggerIn>

        <div className={styles.servicesGrid}>
          {services.map((svc, i) => (
            <StaggerIn key={i} delay={i * 0.07}>
              <div className={styles.serviceCard}>
                <div className={styles.cardGradientBorder} />
                <div className={styles.cardIconWrap}>{svc.icon}</div>
                <h3 className={styles.cardTitle}>{svc.title}</h3>
                <ul className={styles.cardPoints}>
                  {svc.points.map((p, j) => (
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
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <div className={styles.processLeft}>
            <StaggerIn>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                How We Work
              </span>
              <h2 className={styles.processSectionTitle}>
                Our Generative AI
                <br />
                <em>Consulting Process</em>
              </h2>
              <p className={styles.processSubDesc}>
                A proven five-phase framework that minimises risk and maximises the business value
                of every AI initiative.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.processStep}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <div className={styles.stepContent}>
                    <h3 className={styles.stepTitle}>{step.title}</h3>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH ─────────────────────────────────────────────── */}
      <section className={styles.techSection}>
        <StaggerIn>
          <span className={styles.sectionEyebrow}>Technologies</span>
          <h2 className={styles.sectionTitle}>
            Technologies <em>We Work With</em>
          </h2>
          <p className={styles.sectionDesc}>
            We leverage cutting-edge AI platforms and tools to build scalable, high-performance
            solutions across the entire AI stack.
          </p>
        </StaggerIn>

        <div className={styles.techGrid}>
          {techItems.map((t, i) => (
            <StaggerIn key={i} delay={i * 0.06}>
              <div className={styles.techCard}>
                <div className={styles.techIconWrap}>{t.icon}</div>
                <div>
                  <div className={styles.techLabel}>{t.label}</div>
                  <div className={styles.techSublabel}>{t.sublabel}</div>
                </div>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ────────────────────────────────────── */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <div className={styles.whyLeft}>
            <StaggerIn>
              <span className={styles.sectionEyebrow}>Why Us</span>
              <h2 className={styles.whyTitle}>
                Why Choose Our
                <br />
                <em>AI Consulting</em>
              </h2>
              <p className={styles.whyDesc}>
                We combine deep technical expertise with business strategy to deliver AI initiatives
                that stick — and scale.
              </p>
            </StaggerIn>
          </div>
          <div className={styles.whyGrid}>
            {whyItems.map((w, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIconWrap}>{w.icon}</div>
                  <h3 className={styles.whyCardTitle}>{w.title}</h3>
                  <p className={styles.whyCardDesc}>{w.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ─────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <div className={styles.contactLeft}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Start Here</span>
            <h2 className={styles.contactTitle}>
              Start Your <em>AI Journey</em> Today
            </h2>
            <p className={styles.contactDesc}>
              Get expert guidance on how Generative AI can transform your business operations and
              unlock new growth opportunities.
            </p>
            <div className={styles.contactMeta}>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                Typically respond within 24 hours
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                Free 30-minute consultation call
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                No commitment required
              </div>
            </div>
          </StaggerIn>
        </div>

        <StaggerIn delay={0.1} className={styles.contactRight}>
          <div className={styles.contactForm}>
            <h3 className={styles.formTitle}>Book Free Consultation</h3>
            <p className={styles.formSub}>Fill in your details and we&apos;ll be in touch shortly.</p>

            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Full Name</label>
                <input
                  className={styles.formInput}
                  type="text"
                  name="name"
                  placeholder="Jane Smith"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Work Email</label>
                <input
                  className={styles.formInput}
                  type="email"
                  name="email"
                  placeholder="jane@company.com"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel}>Country</label>
              <select
                className={styles.formInput}
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select your country</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>Germany</option>
                <option>Singapore</option>
                <option>Australia</option>
                <option>Canada</option>
                <option>Other</option>
              </select>
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel}>Message</label>
              <textarea
                className={styles.formTextarea}
                name="message"
                rows={4}
                placeholder="Tell us about your AI goals or challenges..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>

            <button className={styles.formSubmit} onClick={handleSubmit}>
              {submitted ? "✓ Request Sent" : "Book Free Consultation"}
            </button>
            {submitted && (
              <p className={styles.successMsg}>
                <CheckCircle2 size={16} />
                We&apos;ve received your request. Our team will reach out within 24 hours.
              </p>
            )}
          </div>
        </StaggerIn>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <StaggerIn>
              <span className={styles.sectionEyebrow}>FAQ</span>
              <h2 className={styles.faqTitle}>
                Frequently Asked <em>Questions</em>
              </h2>
              <p className={styles.faqDesc}>
                Everything you need to know about our Generative AI consulting practice.
              </p>
            </StaggerIn>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <FaqItem item={faq} />
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <StaggerIn className={styles.ctaContent}>
          <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
            <Sparkles size={14} style={{ display: "inline", marginRight: "0.4rem" }} />
            Get Started
          </span>
          <h2 className={styles.ctaTitle}>
            Let&apos;s Build Something <em>Extraordinary</em>
          </h2>
          <p className={styles.ctaDesc}>
            Join hundreds of organisations already leveraging Generative AI to transform
            operations, delight customers, and accelerate growth.
          </p>
          <div className={styles.ctaActions}>
            <button className={styles.btnPrimary}>
              Get Free Consultation <ArrowRight size={16} />
            </button>
            <button className={styles.btnGhost}>Talk to an Expert</button>
          </div>
        </StaggerIn>
      </section>

    </div>
  );
}