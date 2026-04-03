// GenerativeAIDevelopmentPage.tsx
// Premium redesign — Vercel / Stripe / OpenAI aesthetic
// CSS Module: genai.module.css  |  Globals: globals.css
// Consistent with aiagent.module.css + contact.module.css patterns

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Brain,
  Bot,
  Cpu,
  Layers,
  Sparkles,
  Cloud,
  Database,
  Zap,
  ShieldCheck,
  Lightbulb,
  Globe,
  Code2,
  MessageSquare,
  FileText,
  BarChart3,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
  Network,
} from "lucide-react";
import { ReactNode } from "react";
import styles from "./gaid.module.css";

/* ─────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type FaqItem = {
  q: string;
  a: string;
};

type Service = {
  title: string;
  description: string;
  points: string[];
  icon: ReactNode;
  wide?: boolean;
  dark?: boolean;
};

type TechItem = {
  label: string;
  icon: ReactNode;
  subs: string[];
};

type UseCase = {
  title: string;
  desc: string;
  icon: ReactNode;
};

type WhyCard = {
  icon: ReactNode;
  title: string;
  desc: string;
};

type Phase = {
  num: string;
  title: string;
};

type Stat = {
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

/** Scroll-triggered fade + slide-up wrapper */
function StaggerIn({ children, className, delay = 0 }: StaggerInProps): React.ReactElement {
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

/* ─────────────────────────────────────────────────────────────────
   MAIN PAGE
───────────────────────────────────────────────────────────────── */
export default function GenerativeAIDevelopmentPage(): React.ReactElement {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState<boolean>(false);
  useEffect(() => {
    const handler = (): void => setStickyVisible(window.scrollY > 420);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* FAQ open state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = (i: number): void =>
    setOpenFaq((prev) => (prev === i ? null : i));

  /* ── DATA ── */
  const stats: Stat[] = [
    { num: "150+", label: "GAI Projects Delivered" },
    { num: "98%", label: "Client Retention" },
    { num: "70%", label: "Workflow Automation" },
    { num: "24/7", label: "Production Uptime" },
  ];

  const phases: Phase[] = [
    { num: "01", title: "Problem Definition & Use Case Mapping" },
    { num: "02", title: "Data Strategy & Model Selection" },
    { num: "03", title: "Model Development & Fine-Tuning" },
    { num: "04", title: "Integration & System Architecture" },
    { num: "05", title: "Testing, Evaluation & Optimization" },
    { num: "06", title: "Deployment & Continuous Monitoring" },
  ];

  const services: Service[] = [
    {
      title: "Custom Generative AI Solutions",
      description:
        "Design and develop tailored AI systems that align precisely with your business objectives and domain-specific requirements.",
      points: ["Domain-specific model tuning", "Workflow automation pipelines", "Enterprise platform integration"],
      icon: <Brain className="w-5 h-5" />,
    },
    {
      title: "AI Assistants & Copilots",
      description:
        "Intelligent assistants that augment human decision-making, accelerate productivity, and surface critical knowledge on demand.",
      points: ["Internal enterprise copilots", "Customer-facing AI assistants", "Knowledge-based conversational systems"],
      icon: <Bot className="w-5 h-5" />,
    },
    {
      title: "Multimodal AI Systems",
      description:
        "Systems capable of generating and understanding text, image, audio, and video — cross-modal intelligence at scale.",
      points: ["Text, image & audio generation", "Cross-modal intelligence", "Document understanding & synthesis"],
      icon: <Layers className="w-5 h-5" />,
      wide: true,
    },
    {
      title: "Prompt Engineering & Data Strategy",
      description:
        "Optimize model performance through structured prompt design, synthetic data generation, and output reliability pipelines.",
      points: ["Prompt optimization pipelines", "Synthetic dataset generation", "Output reliability enhancement"],
      icon: <Sparkles className="w-5 h-5" />,
    },
    {
      title: "AI-as-a-Service (AIaaS)",
      description:
        "Deploy scalable generative AI capabilities via APIs and cloud-native infrastructure — without managing complex backends.",
      points: ["API-based AI deployment", "Cloud integration & scaling", "Cost-efficient model serving"],
      icon: <Cloud className="w-5 h-5" />,
      dark: true,
    },
  ];

  const techItems: TechItem[] = [
    { label: "AI Models", icon: <Brain className="w-5 h-5" />, subs: ["LLMs", "Diffusion models", "Transformers"] },
    { label: "Frameworks", icon: <Cpu className="w-5 h-5" />, subs: ["PyTorch", "TensorFlow", "JAX"] },
    { label: "APIs & Platforms", icon: <Globe className="w-5 h-5" />, subs: ["OpenAI APIs", "Cloud AI services", "HuggingFace"] },
    { label: "Infrastructure", icon: <Cloud className="w-5 h-5" />, subs: ["Kubernetes", "Serverless", "Cloud-native"] },
    { label: "Data Pipelines", icon: <Database className="w-5 h-5" />, subs: ["ETL", "Vector DBs", "Data lakes"] },
  ];

  const benefits: string[] = [
    "Reduce operational costs through automation",
    "Accelerate content and product development cycles",
    "Improve decision-making with AI-powered insights",
    "Enhance customer experience with intelligent systems",
    "Unlock entirely new revenue streams",
  ];

  const whyCards: WhyCard[] = [
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Full Lifecycle Ownership",
      desc: "We manage the entire AI journey from strategy and design to deployment, monitoring, and continuous optimization.",
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Scalable Architecture Design",
      desc: "Solutions built to handle enterprise-scale workloads with elasticity, resilience, and future-proof design.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Responsible AI Practices",
      desc: "Focus on explainability, fairness, governance, and compliance from day one — not as an afterthought.",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Cross-Domain Expertise",
      desc: "Applicable across finance, healthcare, retail, logistics, and more — with industry-specific context built in.",
    },
  ];

  const useCases: UseCase[] = [
    {
      title: "Automated Content Platforms",
      desc: "AI systems that generate, edit, and publish content at scale with brand consistency and quality control.",
      icon: <FileText className="w-5 h-5" />,
    },
    {
      title: "Intelligent Document Processing",
      desc: "Extract, classify, and summarize data from unstructured documents with high accuracy and auditability.",
      icon: <Layers className="w-5 h-5" />,
    },
    {
      title: "AI-Powered Customer Support",
      desc: "Conversational agents that resolve issues, escalate intelligently, and improve satisfaction at every touchpoint.",
      icon: <MessageSquare className="w-5 h-5" />,
    },
    {
      title: "Code Generation & Developer Copilots",
      desc: "AI tools that accelerate development by writing, reviewing, debugging, and explaining code in real time.",
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      title: "Personalized Recommendation Engines",
      desc: "Deeply personalized AI-driven recommendations that adapt in real time based on behavior and context.",
      icon: <BarChart3 className="w-5 h-5" />,
    },
    {
      title: "AI Research Assistants",
      desc: "Agents that search, synthesize, and surface insights from massive datasets to accelerate R&D cycles.",
      icon: <Brain className="w-5 h-5" />,
    },
  ];

  const faqs: FaqItem[] = [
    {
      q: "What is generative AI development?",
      a: "Generative AI development involves building systems capable of creating content, automating workflows, and supporting intelligent decision-making using large language models, diffusion models, and related architectures.",
    },
    {
      q: "How long does it take to build a solution?",
      a: "Timelines vary based on complexity, data availability, and integration requirements — typically ranging from 6 weeks for focused pilots to 6+ months for full enterprise deployments.",
    },
    {
      q: "Can solutions be customized to our domain?",
      a: "All solutions are designed to align with specific business requirements. We fine-tune models, craft domain-specific prompt systems, and integrate with your existing data and tooling.",
    },
    {
      q: "Is generative AI secure and compliant?",
      a: "Systems are built with security, governance, and ethical considerations built in — including access controls, audit logging, data encryption, and compliance with relevant regulations.",
    },
    {
      q: "What industries do you work with?",
      a: "We have deep experience across finance, healthcare, retail, logistics, legal, education, and enterprise SaaS — with domain-specific context built into every engagement.",
    },
  ];

  /* ── RENDER ── */
  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ────────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to build your AI-driven future?</span>
        <button className={styles.stickyCtaBtn}>Request Consultation</button>
      </div>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGrid} />

        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Generative AI Development
          </div>

          <h1 className={styles.heroTitle}>
            Build AI Systems That
            <br />
            <em>Create, Decide & Scale</em>
          </h1>

          <p className={styles.heroDesc}>
            Design, build, and deploy production-grade generative AI systems that
            automate workflows, enhance decision-making, and create measurable business value.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Request Consultation</button>
            <button className={styles.btnGhost}>Explore Use Cases</button>
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

      {/* ── FRAMEWORK / STRATEGIC OVERVIEW ────────────────────────── */}
      <section className={styles.frameworkSection}>
        <StaggerIn>
          <span className={styles.sectionEyebrow}>Delivery Framework</span>
          <h2 className={styles.sectionTitle}>
            From Concept to Deployment:
            <br />
            <em>A Structured GAI Lifecycle</em>
          </h2>
          <p className={styles.sectionDesc}>
            We follow a structured, end-to-end generative AI development lifecycle that
            transforms ideas into fully operational systems — designed for scalability,
            reliability, and measurable business alignment.
          </p>
        </StaggerIn>

        <StaggerIn delay={0.1}>
          <div className={styles.phases}>
            {phases.map((p, i) => (
              <div className={styles.phase} key={i}>
                <div className={styles.phaseNum}>{p.num}</div>
                <div className={styles.phaseTitle}>{p.title}</div>
              </div>
            ))}
          </div>
        </StaggerIn>
      </section>

      {/* ── CORE SERVICES ─────────────────────────────────────────── */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <div className={styles.servicesHeader}>
            <StaggerIn>
              <span className={styles.sectionEyebrow}>Services</span>
              <h2 className={styles.sectionTitle}>
                Generative AI Capabilities
                <br />
                <em>Built for Real-World Impact</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.1}>
              <p className={styles.sectionDesc} style={{ marginBottom: 0 }}>
                Five core capability pillars designed to cover the full spectrum of
                enterprise generative AI — from custom model development to scalable
                API-based deployment.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.cardsGrid}>
            {services.map((s, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div
                  className={[
                    styles.card,
                    s.wide ? styles.cardWide : "",
                    s.dark ? styles.cardDark : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div className={styles.cardBorderTop} />
                  {s.wide ? (
                    <>
                      <div className={styles.cardWideLeft}>
                        <div className={styles.cardIconWrap}>{s.icon}</div>
                        <h3 className={styles.cardTitle}>{s.title}</h3>
                        <p className={styles.cardDesc}>{s.description}</p>
                      </div>
                      <div className={styles.cardWideRight}>
                        <ul className={styles.cardPoints}>
                          {s.points.map((pt, j) => (
                            <li key={j}>{pt}</li>
                          ))}
                        </ul>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className={styles.cardIconWrap}>{s.icon}</div>
                      <h3 className={styles.cardTitle}>{s.title}</h3>
                      <p className={styles.cardDesc}>{s.description}</p>
                      <ul className={styles.cardPoints}>
                        {s.points.map((pt, j) => (
                          <li key={j}>{pt}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────────────────────────── */}
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
                <em>Every AI System</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                Our solutions leverage modern AI frameworks, orchestration platforms,
                and scalable cloud infrastructure — purpose-built for production
                environments and enterprise reliability.
              </p>
            </StaggerIn>
          </div>

          <StaggerIn delay={0.1}>
            <div className={styles.techGrid}>
              {techItems.map((t, i) => (
                <div className={styles.techItem} key={i}>
                  <div className={styles.techItemIcon}>{t.icon}</div>
                  <span className={styles.techItemLabel}>{t.label}</span>
                  <div className={styles.techItemSubs}>
                    {t.subs.map((sub, j) => (
                      <span className={styles.techItemSub} key={j}>
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── BUSINESS VALUE ────────────────────────────────────────── */}
      <section className={styles.valueSection}>
        <div className={styles.valueLeft}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Business Impact</span>
            <h2 className={styles.sectionTitle}>
              Why Organizations
              <br />
              <em>Invest in Generative AI</em>
            </h2>
            <p className={styles.sectionDesc} style={{ marginBottom: "2rem" }}>
              Generative AI isn't just about efficiency — it's about creating
              capabilities that didn't exist before and building durable competitive advantage.
            </p>
            <div className={styles.valueHighlightBox}>
              <span className={styles.valueHighlightNum}>60%</span>
              <span className={styles.valueHighlightLabel}>
                Average operational cost reduction for our clients
              </span>
            </div>
          </StaggerIn>
        </div>

        <div>
          <StaggerIn delay={0.1}>
            <ul className={styles.valueList}>
              {benefits.map((b, i) => (
                <li className={styles.valueItem} key={i}>
                  <span className={styles.valueItemDot} />
                  <span className={styles.valueItemText}>{b}</span>
                </li>
              ))}
            </ul>
          </StaggerIn>
        </div>
      </section>

      {/* ── WHY CHOOSE US ─────────────────────────────────────────── */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <div className={styles.whyHeader}>
            <StaggerIn>
              <span className={styles.sectionEyebrow}>Why Us</span>
              <h2 className={styles.sectionTitle}>
                Built for Enterprise Scale
                <br />
                <em>and Long-Term Impact</em>
              </h2>
            </StaggerIn>
          </div>

          <div className={styles.whyGrid}>
            {whyCards.map((w, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardIcon}>{w.icon}</div>
                  <h3 className={styles.whyCardTitle}>{w.title}</h3>
                  <p className={styles.whyCardDesc}>{w.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES ─────────────────────────────────────────────── */}
      <section className={styles.useCasesSection}>
        <div className={styles.useCasesHeader}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Use Cases</span>
            <h2 className={styles.sectionTitle}>
              Real-World Applications
              <br />
              <em>of Generative AI</em>
            </h2>
          </StaggerIn>
          <StaggerIn delay={0.1}>
            <p className={styles.sectionDesc} style={{ marginBottom: 0 }}>
              From content automation to intelligent document processing — see how
              generative AI is reshaping entire industries and workflows.
            </p>
          </StaggerIn>
        </div>

        <div className={styles.useCasesGrid}>
          {useCases.map((uc, i) => (
            <StaggerIn key={i} delay={i * 0.06}>
              <div className={styles.useCaseCard}>
                <div className={styles.useCaseNum}>
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className={styles.useCaseTitle}>{uc.title}</h3>
                <p className={styles.useCaseDesc}>{uc.desc}</p>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── STATS BAND ────────────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── FAQ ───────────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <StaggerIn>
              <span className={styles.sectionEyebrow}>FAQ</span>
              <h2 className={styles.faqTitle}>
                Common
                <br />
                <em>Questions</em>
              </h2>
              <p className={styles.faqSubtitle}>
                Answers to the most frequently asked questions about our
                generative AI development services.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <div
                className={`${styles.faqItem} ${openFaq === i ? styles.open : ""}`}
                key={i}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                >
                  {f.q}
                  <span className={styles.faqChevron}>
                    <ChevronDown size={13} />
                  </span>
                </button>
                <div className={styles.faqAnswer}>
                  <p className={styles.faqAnswerInner}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Start Building Your
              <br />
              <em>AI-Driven Future</em>
            </h2>
            <p className={styles.ctaDesc}>
              Partner with us to design and deploy generative AI solutions
              tailored to your business needs — from strategy to production.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>Get Free Consultation</button>
              <button className={styles.btnGhost}>Discuss Your Use Case</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <div className={styles.contactLeft}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Contact</span>
            <h2 className={styles.contactTitle}>
              Let's Build
              <br />
              <em>Something Exceptional</em>
            </h2>
            <p className={styles.contactDesc}>
              Share your use case and we'll match you with the right generative AI
              strategy to meet your goals and timelines.
            </p>
            <div className={styles.contactMeta}>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                Typical response within 24 hours
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                Free initial consultation included
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                NDA available on request
              </div>
            </div>
          </StaggerIn>
        </div>

        <StaggerIn delay={0.1}>
          <form
            className={styles.contactForm}
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => e.preventDefault()}
          >
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>First Name</label>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="Alex"
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Last Name</label>
                <input
                  className={styles.formInput}
                  type="text"
                  placeholder="Johnson"
                />
              </div>
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Work Email</label>
              <input
                className={styles.formInput}
                type="email"
                placeholder="alex@company.com"
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Use Case / Industry</label>
              <select className={`${styles.formInput} ${styles.formSelect}`}>
                <option value="">Select your industry</option>
                <option>Finance & Banking</option>
                <option>Healthcare</option>
                <option>Retail & E-commerce</option>
                <option>Logistics & Supply Chain</option>
                <option>Legal & Compliance</option>
                <option>Enterprise SaaS</option>
                <option>Other</option>
              </select>
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Project Brief</label>
              <textarea
                className={styles.formTextarea}
                placeholder="Describe your generative AI challenge or opportunity..."
              />
            </div>
            <button className={styles.formSubmit} type="submit">
              Submit Enquiry
            </button>
          </form>
        </StaggerIn>
      </section>

    </div>
  );
}