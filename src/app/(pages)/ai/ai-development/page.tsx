// AIDevelopmentPage.tsx
// Premium AI Development consulting page
// CSS Module: aidev.module.css | Globals: globals.css
// Strict TypeScript — no implicit any

"use client";

import React, {
  useEffect,
  useRef,
  useState,
  useCallback,
  ReactNode,
} from "react";
import {
  Brain,
  Bot,
  Eye,
  Sparkles,
  Cloud,
  BarChart3,
  CheckCircle2,
  ShieldCheck,
  Lightbulb,
  TrendingUp,
  Cpu,
  Database,
  Zap,
  GitBranch,
  Plus,
} from "lucide-react";
import styles from "./aidevelopment.module.css";

/* ─────────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────────── */

interface StaggerInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

interface ServiceCard {
  icon: ReactNode;
  title: string;
  description: string;
  points: string[];
}

interface ProcessStep {
  num: string;
  title: string;
}

interface TechCard {
  icon: ReactNode;
  label: string;
  sub: string;
}

interface WhyItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface Stat {
  num: string;
  label: string;
}

interface FaqItem {
  q: string;
  a: string;
}

interface Testimonial {
  text: string;
  initials: string;
  name: string;
  role: string;
}

interface BarRow {
  label: string;
  width: string;
  delay: string;
  value: string;
}

interface FormState {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/* ─────────────────────────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────────────────────────── */

function useInView(
  threshold = 0.15
): [React.RefObject<HTMLDivElement>, boolean] {
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

function StaggerIn({
  children,
  delay = 0,
  className,
}: StaggerInProps): React.JSX.Element {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={[styles.staggerIn, visible ? styles.visible : "", className ?? ""]
        .filter(Boolean)
        .join(" ")}
      style={{
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */

const PROCESS_STEPS: ProcessStep[] = [
  { num: "01", title: "Discovery & Use Case Analysis" },
  { num: "02", title: "Data Preparation & Strategy" },
  { num: "03", title: "Model Development & Training" },
  { num: "04", title: "Testing & Optimization" },
  { num: "05", title: "Deployment & Integration" },
  { num: "06", title: "Monitoring & Continuous Improvement" },
];

const SERVICE_CARDS: ServiceCard[] = [
  {
    icon: <Brain size={18} />,
    title: "Custom AI Solutions",
    description:
      "Build tailored AI applications designed for your specific business needs and workflows.",
    points: ["Domain-specific model development", "Seamless system integration"],
  },
  {
    icon: <Bot size={18} />,
    title: "Natural Language Processing",
    description:
      "Enable machines to understand, process, and generate human language at scale.",
    points: ["Chatbots & virtual assistants", "Sentiment analysis"],
  },
  {
    icon: <Eye size={18} />,
    title: "Computer Vision",
    description:
      "Turn images and video streams into real-time, actionable business insights.",
    points: ["Object detection & tracking", "Image recognition systems"],
  },
  {
    icon: <Sparkles size={18} />,
    title: "Generative AI",
    description:
      "Create intelligent content generation tools and AI copilots that amplify your team.",
    points: ["Text & image generation", "AI copilots & assistants"],
  },
  {
    icon: <Cloud size={18} />,
    title: "AI-as-a-Service (AIaaS)",
    description:
      "Access scalable AI solutions through the cloud — zero heavy infrastructure required.",
    points: ["Cloud-based AI deployment", "API integrations"],
  },
  {
    icon: <BarChart3 size={18} />,
    title: "Predictive Analytics",
    description:
      "Harness your data to forecast trends, behaviors, and outcomes with precision.",
    points: ["Demand forecasting", "Anomaly detection"],
  },
];

const TECH_CARDS: TechCard[] = [
  {
    icon: <Brain size={20} />,
    label: "TensorFlow & PyTorch",
    sub: "Deep learning model development and training at enterprise scale.",
  },
  {
    icon: <Cpu size={20} />,
    label: "OpenAI APIs",
    sub: "GPT-4, DALL·E, Whisper and the latest frontier models.",
  },
  {
    icon: <Database size={20} />,
    label: "Vector Databases",
    sub: "Pinecone, Weaviate, Qdrant for semantic search and RAG.",
  },
  {
    icon: <Cloud size={20} />,
    label: "Cloud Platforms",
    sub: "AWS SageMaker, Azure AI, Google Vertex AI and GCP.",
  },
  {
    icon: <GitBranch size={20} />,
    label: "MLOps & CI/CD",
    sub: "MLflow, DVC, and automated deployment pipelines.",
  },
  {
    icon: <Zap size={20} />,
    label: "LangChain & LlamaIndex",
    sub: "Agent orchestration and retrieval-augmented generation.",
  },
  {
    icon: <ShieldCheck size={20} />,
    label: "Responsible AI",
    sub: "Bias detection, explainability, and compliance tooling.",
  },
  {
    icon: <BarChart3 size={20} />,
    label: "Data Pipelines",
    sub: "Apache Spark, Kafka, dbt for scalable data engineering.",
  },
];

const TECH_BADGES: string[] = [
  "Python",
  "PyTorch",
  "TensorFlow",
  "OpenAI GPT-4",
  "Hugging Face",
  "LangChain",
  "AWS",
  "Azure",
  "GCP",
  "Kubernetes",
  "FastAPI",
  "PostgreSQL",
  "Pinecone",
  "Docker",
];

const WHY_ITEMS: WhyItem[] = [
  {
    icon: <Lightbulb size={16} />,
    title: "End-to-End AI Expertise",
    desc: "From strategy and architecture to deployment and monitoring — we own the full lifecycle.",
  },
  {
    icon: <TrendingUp size={16} />,
    title: "Scalable & Custom Solutions",
    desc: "Every system is engineered to grow with your business and adapt to changing requirements.",
  },
  {
    icon: <ShieldCheck size={16} />,
    title: "Responsible AI Practices",
    desc: "Ethical, transparent, and reliable AI with built-in bias detection and compliance.",
  },
  {
    icon: <Brain size={16} />,
    title: "Industry Experience",
    desc: "Proven delivery across healthcare, finance, retail, logistics, and enterprise operations.",
  },
  {
    icon: <CheckCircle2 size={16} />,
    title: "Outcome-Driven Approach",
    desc: "We measure success by measurable business impact — not just model accuracy.",
  },
];

const STATS: Stat[] = [
  { num: "150+", label: "Projects Delivered" },
  { num: "98%", label: "Client Satisfaction" },
  { num: "60%", label: "Avg. Cost Reduction" },
  { num: "8+", label: "Years AI Experience" },
];

const FAQ_ITEMS: FaqItem[] = [
  {
    q: "How long does a custom AI project take?",
    a: "Timelines vary by complexity. Discovery and prototyping typically take 2–4 weeks. A full production deployment ranges from 2 to 6 months, depending on data readiness and integration scope.",
  },
  {
    q: "Do you work with our existing tech stack?",
    a: "Yes. Our solutions integrate with your existing CRMs, ERPs, data warehouses, REST APIs, and cloud infrastructure — no rip-and-replace required.",
  },
  {
    q: "How do you ensure data privacy and security?",
    a: "We follow enterprise-grade security standards: end-to-end encryption, role-based access control, audit logging, and GDPR/SOC 2 compliance practices.",
  },
  {
    q: "What industries do you specialize in?",
    a: "We have deep expertise across healthcare, financial services, retail & e-commerce, logistics, manufacturing, and enterprise SaaS.",
  },
  {
    q: "Can you build multi-modal AI systems?",
    a: "Yes — we build systems that work across text, image, audio, and structured data, including multi-modal RAG pipelines and vision-language models.",
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    text: "Their team transformed our document processing workflow — what used to take a week now runs overnight with 97% accuracy. Exceptional engineering.",
    initials: "RS",
    name: "Ravi S.",
    role: "CTO, FinTech Startup",
  },
  {
    text: "The predictive analytics model they built reduced our inventory costs by 40% in the first quarter. Real business impact from day one.",
    initials: "PK",
    name: "Priya K.",
    role: "VP Operations, Retail Chain",
  },
  {
    text: "Not just vendors — they acted like a true AI partner. Deep knowledge, honest advice, and they actually shipped on time.",
    initials: "AM",
    name: "Alex M.",
    role: "Founder, HealthTech Startup",
  },
];

const BAR_ROWS: BarRow[] = [
  { label: "Accuracy", width: "96%", delay: "0.2s", value: "96%" },
  { label: "Speed", width: "88%", delay: "0.4s", value: "88%" },
  { label: "Reliability", width: "99%", delay: "0.6s", value: "99%" },
  { label: "Scalability", width: "91%", delay: "0.8s", value: "91%" },
];

const HIGHLIGHT_POINTS: string[] = [
  "Built for accuracy and usability across real-world conditions",
  "Designed to integrate with your existing systems and data",
  "Scalable architecture ready for future growth",
];

/* ─────────────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────────────── */

export default function AIDevelopmentPage(): React.JSX.Element {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState<boolean>(false);
  useEffect(() => {
    const handler = (): void => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* FAQ accordion */
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const toggleFaq = useCallback(
    (idx: number): void => setOpenFaq((prev) => (prev === idx ? null : idx)),
    []
  );

  /* Why section ref */
  const [whyRef, whyVisible] = useInView(0.15);

  /* Contact form */
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState<boolean>(false);

  const handleFormChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
      const { name, value } = e.target;
      setForm((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  const handleFormSubmit = useCallback(
    (e: React.FormEvent<HTMLButtonElement>): void => {
      e.preventDefault();
      setSubmitted(true);
    },
    []
  );

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ──────────────────────────────────────────── */}
      <div
        className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}
      >
        <span className={styles.stickyCtaText}>
          Ready to build your AI solution?
        </span>
        <button className={styles.stickyCtaBtn}>Get a Free Consultation</button>
      </div>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            AI Development Services
          </div>

          <h1 className={styles.heroTitle}>
            AI Development Services That
            <br />
            <em>Drive Real Business Impact</em>
          </h1>

          <p className={styles.heroDesc}>
            We design and build intelligent AI solutions that automate
            processes, enhance decision-making, and unlock new growth
            opportunities for businesses across industries.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>
              Get a Free Consultation
            </button>
            <button className={styles.btnGhost}>Talk to an AI Expert</button>
          </div>
        </div>

        {/* Stats row */}
        <div className={styles.heroStats}>
          {STATS.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <div className={styles.processHeader}>
            <StaggerIn>
              <h2 className={styles.processTitle}>
                Our Proven
                <br />
                <em>AI Development Process</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.1}>
              <p className={styles.processDesc}>
                Our streamlined process ensures every AI solution is scalable,
                efficient, and aligned with real business outcomes — from day
                one to production.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.processSteps}>
            {PROCESS_STEPS.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.processStep}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <span className={styles.stepTitle}>{step.title}</span>
                  <div className={styles.stepDash} />
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section className={styles.servicesSection}>
        <StaggerIn>
          <span className={styles.sectionEyebrow}>Services</span>
          <h2 className={styles.sectionTitle}>
            Our AI Development <em>Services</em>
          </h2>
          <p className={styles.sectionDesc}>
            From custom model training to production-grade integrations, we
            deliver AI capabilities that create measurable competitive
            advantage.
          </p>
        </StaggerIn>

        <div className={styles.cardsGrid}>
          {SERVICE_CARDS.map((card, i) => (
            <StaggerIn key={i} delay={i * 0.07}>
              <div className={styles.card}>
                <div className={styles.cardIconWrap}>{card.icon}</div>
                <h3 className={styles.cardTitle}>{card.title}</h3>
                <p className={styles.cardDesc}>{card.description}</p>
                <ul className={styles.cardPoints}>
                  {card.points.map((pt, j) => (
                    <li key={j}>{pt}</li>
                  ))}
                </ul>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── HIGHLIGHT FEATURE ───────────────────────────────────── */}
      <section className={styles.highlightSection}>
        <div className={styles.highlightInner}>
          <StaggerIn className={styles.highlightLeft}>
            <span className={styles.sectionEyebrow}>Featured</span>
            <h2 className={styles.highlightTitle}>
              Custom AI Development for{" "}
              <em>Unique Business Needs</em>
            </h2>
            <p className={styles.highlightDesc}>
              We design and develop AI solutions from the ground up, ensuring
              they align perfectly with your workflows, data, and business
              objectives.
            </p>
            <div className={styles.highlightPoints}>
              {HIGHLIGHT_POINTS.map((pt, i) => (
                <div className={styles.highlightPoint} key={i}>
                  <div className={styles.highlightPointIcon}>
                    <CheckCircle2 size={16} />
                  </div>
                  <span className={styles.highlightPointText}>{pt}</span>
                </div>
              ))}
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15} className={styles.highlightRight}>
            <div className={styles.highlightVisual}>
              <div className={styles.visualHeader}>
                <div className={styles.visualDot} />
                <div className={styles.visualDot} />
                <div className={styles.visualDot} />
                <span className={styles.visualTitle}>
                  model_performance.json
                </span>
              </div>
              <div className={styles.visualBody}>
                {BAR_ROWS.map((row, i) => (
                  <div className={styles.visualRow} key={i}>
                    <span className={styles.visualLabel}>{row.label}</span>
                    <div className={styles.visualBar}>
                      <div
                        className={styles.visualBarFill}
                        style={
                          {
                            "--bar-width": row.width,
                            "--bar-delay": row.delay,
                          } as React.CSSProperties
                        }
                      />
                    </div>
                    <span className={styles.visualBarNum}>{row.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techHeader}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Technology</span>
            <h2 className={styles.techTitle}>
              Our AI <em>Technology Stack</em>
            </h2>
          </StaggerIn>
          <StaggerIn delay={0.1}>
            <p className={styles.techSubDesc}>
              We use industry-leading tools and frameworks to deliver
              high-performance AI solutions built for production environments.
            </p>
          </StaggerIn>
        </div>

        <div className={styles.techGrid}>
          {TECH_CARDS.map((tc, i) => (
            <StaggerIn key={i} delay={i * 0.06}>
              <div className={styles.techCard}>
                <div className={styles.techCardIcon}>{tc.icon}</div>
                <span className={styles.techCardLabel}>{tc.label}</span>
                <span className={styles.techCardSub}>{tc.sub}</span>
              </div>
            </StaggerIn>
          ))}
        </div>

        <div className={styles.techBadges}>
          {TECH_BADGES.map((badge, i) => (
            <span className={styles.techBadge} key={i}>
              {badge}
            </span>
          ))}
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────── */}
      <section className={styles.whySection}>
        <div
          className={styles.whyInner}
          ref={whyRef as React.RefObject<HTMLDivElement>}
        >
          <div className={styles.whyLeft}>
            <StaggerIn>
              <span className={styles.whyEyebrow}>Why Us</span>
              <h2 className={styles.whyTitle}>
                Why Choose Our
                <br />
                <em>AI Development Services</em>
              </h2>
              <p className={styles.whyDesc}>
                We combine deep technical expertise with a business-first
                mindset — every AI system we build is designed to create
                measurable, lasting value.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.whyRight}>
            {WHY_ITEMS.map((item, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.whyItem}>
                  <div className={styles.whyIconWrap}>{item.icon}</div>
                  <div>
                    <div className={styles.whyItemTitle}>{item.title}</div>
                    <div className={styles.whyItemDesc}>{item.desc}</div>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ──────────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {STATS.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── TESTIMONIALS ────────────────────────────────────────── */}
      <section className={styles.testimonialsSection}>
        <div className={styles.testimonialsInner}>
          <StaggerIn>
            <div className={styles.testimonialsHeader}>
              <span className={styles.testimonialsEyebrow}>
                Client Feedback
              </span>
              <h2 className={styles.testimonialsTitle}>
                What Our Clients Say
              </h2>
            </div>
          </StaggerIn>

          <div className={styles.testimonialsGrid}>
            {TESTIMONIALS.map((t, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.testimonialCard}>
                  <span className={styles.testimonialQuote}>"</span>
                  <p className={styles.testimonialText}>{t.text}</p>
                  <div className={styles.testimonialAuthor}>
                    <div className={styles.testimonialAvatar}>
                      {t.initials}
                    </div>
                    <div>
                      <div className={styles.testimonialName}>{t.name}</div>
                      <div className={styles.testimonialRole}>{t.role}</div>
                    </div>
                  </div>
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
            <span className={styles.sectionEyebrow}>FAQ</span>
            <h2 className={styles.faqTitle}>
              Frequently
              <br />
              <em>Asked Questions</em>
            </h2>
            <p className={styles.faqSubtext}>
              Common questions about our AI development process, timelines, and
              capabilities.
            </p>
          </StaggerIn>

          <div className={styles.faqList}>
            {FAQ_ITEMS.map((item, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.open : ""}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => toggleFaq(i)}
                  aria-expanded={openFaq === i}
                >
                  <span className={styles.faqQuestionText}>{item.q}</span>
                  <span className={styles.faqChevron} aria-hidden="true">
                    <Plus size={12} />
                  </span>
                </button>
                <div className={styles.faqAnswer} aria-hidden={openFaq !== i}>
                  <p className={styles.faqAnswerInner}>{item.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ────────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <StaggerIn className={styles.contactLeft}>
          <span className={styles.sectionEyebrow}>Get Started</span>
          <h2 className={styles.contactTitle}>
            Ready to Transform
            <br />
            Your Business <em>with AI?</em>
          </h2>
          <p className={styles.contactDesc}>
            Tell us about your challenge. We'll respond within 24 hours with a
            tailored approach and a no-obligation consultation offer.
          </p>
          <div className={styles.contactMeta}>
            <div className={styles.contactMetaItem}>
              <span className={styles.contactMetaDot} />
              Response within 24 hours
            </div>
            <div className={styles.contactMetaItem}>
              <span className={styles.contactMetaDot} />
              Free initial consultation
            </div>
            <div className={styles.contactMetaItem}>
              <span className={styles.contactMetaDot} />
              No commitment required
            </div>
          </div>
        </StaggerIn>

        <StaggerIn delay={0.15}>
          <div className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="ai-name">
                  Name
                </label>
                <input
                  id="ai-name"
                  name="name"
                  type="text"
                  placeholder="Your full name"
                  className={styles.formInput}
                  value={form.name}
                  onChange={handleFormChange}
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel} htmlFor="ai-email">
                  Email
                </label>
                <input
                  id="ai-email"
                  name="email"
                  type="email"
                  placeholder="you@company.com"
                  className={styles.formInput}
                  value={form.email}
                  onChange={handleFormChange}
                />
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel} htmlFor="ai-phone">
                Phone
              </label>
              <input
                id="ai-phone"
                name="phone"
                type="tel"
                placeholder="+1 (555) 000-0000"
                className={styles.formInput}
                value={form.phone}
                onChange={handleFormChange}
              />
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel} htmlFor="ai-message">
                Message
              </label>
              <textarea
                id="ai-message"
                name="message"
                placeholder="Describe your AI challenge or project idea..."
                className={styles.formTextarea}
                value={form.message}
                onChange={handleFormChange}
              />
            </div>

            <button
              className={styles.formSubmit}
              onClick={handleFormSubmit}
              type="button"
            >
              Start Your AI Journey
            </button>

            {submitted && (
              <div className={styles.formSuccess}>
                <CheckCircle2 size={16} />
                Thank you! We'll be in touch within 24 hours.
              </div>
            )}
          </div>
        </StaggerIn>
      </section>

      {/* ── FINAL CTA ───────────────────────────────────────────── */}
      <section className={styles.finalCta}>
        <div className={styles.finalCtaGlow} />
        <StaggerIn className={styles.finalCtaInner}>
          <h2 className={styles.finalCtaTitle}>
            The Future of Your
            <br />
            Business Is <em>Intelligent</em>
          </h2>
          <p className={styles.finalCtaDesc}>
            Don't let your competitors define what AI looks like in your
            industry. Start building yours today.
          </p>
          <div className={styles.finalCtaActions}>
            <button className={styles.btnPrimary}>
              Get a Free Consultation
            </button>
            <button className={styles.btnGhost}>Talk to an AI Expert</button>
          </div>
        </StaggerIn>
      </section>
    </div>
  );
}