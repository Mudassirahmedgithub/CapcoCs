"use client";

// MachineLearningPage.tsx
// Premium Vercel / Stripe / OpenAI aesthetic
// CSS Module: mlpage.module.css  |  Globals: globals.css

import React, { useEffect, useRef, useState, ReactNode } from "react";
import {
  Brain,
  BarChart3,
  MessageSquare,
  Eye,
  Plug,
  TrendingUp,
  ShieldCheck,
  Lightbulb,
  Layers,
  CheckCircle2,
  Database,
  Cloud,
  Cpu,
  Zap,
  FlaskConical,
  Rocket,
  Activity,
  ChevronDown,
} from "lucide-react";
import styles from "./machine.module.css";

/* ─────────────────────────────────────────────────────────────
   TYPES
───────────────────────────────────────────────────────────── */

type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
};

type Solution = {
  title: string;
  description: string;
  points: string[];
  icon: ReactNode;
  tag: string;
};

type ProcessStep = {
  number: string;
  title: string;
  desc: string;
  icon: ReactNode;
};

type TechCategory = {
  label: string;
  items: string[];
  icon: ReactNode;
};

type WhyItem = {
  icon: ReactNode;
  title: string;
  desc: string;
};

type Industry = {
  sector: string;
  useCases: string[];
  icon: ReactNode;
};

type Stat = {
  num: string;
  label: string;
};

type Faq = {
  q: string;
  a: string;
};

/* ─────────────────────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────────────────────── */

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

/* ─────────────────────────────────────────────────────────────
   COMPONENTS
───────────────────────────────────────────────────────────── */

function StaggerIn({
  children,
  className,
  delay = 0,
  threshold = 0.1,
}: StaggerInProps): React.ReactElement {
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

type FaqItemProps = {
  q: string;
  a: string;
  index: number;
};

function FaqItem({ q, a, index }: FaqItemProps): React.ReactElement {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <StaggerIn delay={index * 0.06}>
      <div
        className={`${styles.faqItem} ${open ? styles.faqItemOpen : ""}`}
        onClick={() => setOpen((v) => !v)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && setOpen((v) => !v)}
      >
        <div className={styles.faqQuestion}>
          <span>{q}</span>
          <ChevronDown
            className={`${styles.faqChevron} ${open ? styles.faqChevronOpen : ""}`}
            size={18}
          />
        </div>
        <div className={`${styles.faqAnswer} ${open ? styles.faqAnswerOpen : ""}`}>
          <p>{a}</p>
        </div>
      </div>
    </StaggerIn>
  );
}

/* ─────────────────────────────────────────────────────────────
   PAGE DATA
───────────────────────────────────────────────────────────── */

const solutions: Solution[] = [
  {
    title: "Custom ML Model Development",
    description:
      "Bespoke supervised, unsupervised, and reinforcement learning models engineered around your data and business goals.",
    points: ["Feature engineering & preprocessing", "Model training & evaluation", "Production-ready deployment"],
    icon: <Brain size={20} />,
    tag: "Foundation",
  },
  {
    title: "Predictive Analytics & Forecasting",
    description:
      "Time-series models and demand intelligence that turn historical patterns into forward-looking business decisions.",
    points: ["Demand & trend forecasting", "Risk scoring models", "Decision support systems"],
    icon: <BarChart3 size={20} />,
    tag: "Analytics",
  },
  {
    title: "Natural Language Processing",
    description:
      "Language AI that reads, classifies, and understands unstructured text — from documents to real-time conversations.",
    points: ["Sentiment & intent analysis", "Conversational AI & chatbots", "Document intelligence & NER"],
    icon: <MessageSquare size={20} />,
    tag: "NLP",
  },
  {
    title: "Computer Vision & Image AI",
    description:
      "Visual intelligence systems that detect, classify, and inspect objects across images and video streams.",
    points: ["Object detection & tracking", "Facial recognition & analytics", "OCR & visual quality inspection"],
    icon: <Eye size={20} />,
    tag: "Vision",
  },
  {
    title: "ML Integration & Optimization",
    description:
      "Seamless deployment into your existing enterprise stack with continuous monitoring and automated retraining pipelines.",
    points: ["API-based model deployment", "Enterprise system integration", "Real-time drift monitoring"],
    icon: <Plug size={20} />,
    tag: "Platform",
  },
];

const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Data Collection & Preparation",
    desc: "Cleaning, transformation, and feature engineering to ensure model readiness and data quality.",
    icon: <Database size={18} />,
  },
  {
    number: "02",
    title: "Model Design & Selection",
    desc: "Algorithm selection across supervised, unsupervised, and reinforcement learning paradigms.",
    icon: <Layers size={18} />,
  },
  {
    number: "03",
    title: "Training & Validation",
    desc: "Iterative training loops with rigorous cross-validation, hyperparameter tuning, and performance benchmarks.",
    icon: <FlaskConical size={18} />,
  },
  {
    number: "04",
    title: "Deployment",
    desc: "Cloud-native or on-premise integration with CI/CD pipelines, containerisation, and scalable APIs.",
    icon: <Rocket size={18} />,
  },
  {
    number: "05",
    title: "Monitoring & Optimisation",
    desc: "Continuous improvement via real-time performance tracking, automated alerts, and model retraining cycles.",
    icon: <Activity size={18} />,
  },
];

const techCategories: TechCategory[] = [
  {
    label: "Frameworks",
    items: ["TensorFlow", "PyTorch", "Scikit-learn", "XGBoost", "Keras"],
    icon: <Brain size={18} />,
  },
  {
    label: "Cloud Platforms",
    items: ["AWS SageMaker", "Azure ML", "Google Vertex AI", "Databricks"],
    icon: <Cloud size={18} />,
  },
  {
    label: "Data & Storage",
    items: ["Apache Spark", "Hadoop", "Snowflake", "PostgreSQL", "Redis"],
    icon: <Database size={18} />,
  },
  {
    label: "Deployment",
    items: ["Docker", "Kubernetes", "MLflow", "BentoML", "FastAPI"],
    icon: <Cpu size={18} />,
  },
  {
    label: "MLOps & Monitoring",
    items: ["Weights & Biases", "Evidently AI", "Airflow", "Prefect"],
    icon: <Zap size={18} />,
  },
];

const whyItems: WhyItem[] = [
  {
    icon: <Lightbulb size={20} />,
    title: "Tailored Solutions",
    desc: "Custom-built models aligned with your data complexity and strategic business objectives.",
  },
  {
    icon: <Layers size={20} />,
    title: "End-to-End Development",
    desc: "Complete lifecycle management — from data engineering to production deployment and beyond.",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Scalable Architecture",
    desc: "Enterprise-grade systems engineered for performance, growth, and high-throughput inference.",
  },
  {
    icon: <ShieldCheck size={20} />,
    title: "Industry Expertise",
    desc: "Cross-domain experience translating into practical, real-world ML solutions that ship.",
  },
];

const industries: Industry[] = [
  {
    sector: "Finance",
    useCases: ["Fraud detection", "Credit scoring", "Algorithmic trading", "Risk modelling"],
    icon: <BarChart3 size={20} />,
  },
  {
    sector: "Healthcare",
    useCases: ["Diagnosis support", "Patient analytics", "Drug discovery", "Claims processing"],
    icon: <Activity size={20} />,
  },
  {
    sector: "Retail",
    useCases: ["Recommendation engines", "Demand forecasting", "Churn prediction", "Price optimisation"],
    icon: <TrendingUp size={20} />,
  },
  {
    sector: "Manufacturing",
    useCases: ["Predictive maintenance", "Quality inspection", "Supply chain ML", "Yield optimisation"],
    icon: <Cpu size={20} />,
  },
];

const stats: Stat[] = [
  { num: "150+", label: "Models Shipped" },
  { num: "40%", label: "Avg. Efficiency Gain" },
  { num: "99.2%", label: "Uptime SLA" },
  { num: "24/7", label: "Model Monitoring" },
];

const benefits: string[] = [
  "Reduce manual processing costs by up to 60%",
  "Accelerate decision cycles from days to seconds",
  "Surface insights hidden in unstructured data",
  "Scale intelligence across every business unit",
  "Continuously improve with production feedback loops",
];

const faqs: Faq[] = [
  {
    q: "What machine learning services do you offer?",
    a: "We provide end-to-end ML services including custom model development, predictive analytics, NLP, computer vision, MLOps, and seamless enterprise integration.",
  },
  {
    q: "How can machine learning benefit my business?",
    a: "Machine learning enables automation of repetitive tasks, surfaces actionable patterns in data, improves forecasting accuracy, and reduces operational overhead — delivering measurable ROI.",
  },
  {
    q: "Do you develop industry-specific solutions?",
    a: "Yes. Every model we build is domain-tailored — we account for industry-specific data characteristics, regulatory constraints, and business KPIs from day one.",
  },
  {
    q: "Can ML models integrate with existing systems?",
    a: "Absolutely. Our models are deployed via REST APIs, gRPC, or embedded SDKs and integrate seamlessly with CRMs, ERPs, data warehouses, and internal platforms.",
  },
  {
    q: "Are your solutions secure and scalable?",
    a: "Yes. All systems are built to enterprise-grade security standards — including data encryption, access control, audit logging, and SOC 2 compliant infrastructure.",
  },
];

/* ─────────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────────── */

export default function MachineLearningPage(): React.ReactElement {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState<boolean>(false);
  useEffect(() => {
    const handler = (): void => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why section */
  const [whyRef, whyVisible] = useInView(0.12);

  /* Process section */
  const [processRef, processVisible] = useInView(0.1);

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ──────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to build intelligent systems?</span>
        <button className={styles.stickyCtaBtn}>Get a Free Quote</button>
      </div>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGrid} />
        <div className={styles.heroGlow} />
        <div className={styles.heroGlowSecondary} />

        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Machine Learning Development
          </div>

          <h1 className={styles.heroTitle}>
            Machine Learning for
            <br />
            <em>Intelligent Business</em>
          </h1>

          <p className={styles.heroDesc}>
            We design and deploy advanced ML solutions that transform raw data into
            actionable intelligence — enabling smarter decisions, automation, and
            sustainable, compounding growth.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
            <button className={styles.btnGhost}>Talk to an ML Expert</button>
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

      {/* ── INTRO ───────────────────────────────────────────────── */}
      <section className={styles.introSection}>
        <StaggerIn>
          <span className={styles.sectionEyebrow}>From Data to Intelligence</span>
          <h2 className={styles.introTitle}>
            A Structured Lifecycle for
            <br />
            <em>Real Business Outcomes</em>
          </h2>
          <p className={styles.introDesc}>
            Our ML development approach follows a rigorous lifecycle — from data
            preparation and model engineering through to deployment and continuous
            optimisation. Each solution is architected to deliver measurable impact,
            improve operational efficiency, and unlock insights hidden within your data.
          </p>
        </StaggerIn>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <StaggerIn>
          <span className={styles.sectionEyebrow}>Process</span>
          <h2 className={styles.sectionTitle}>
            Our Machine Learning
            <br />
            <em>Development Process</em>
          </h2>
        </StaggerIn>

        <div
          ref={processRef}
          className={styles.processTrack}
        >
          {processSteps.map((step, i) => (
            <div
              key={i}
              className={styles.processStep}
              style={{
                opacity: processVisible ? 1 : 0,
                transform: processVisible ? "translateY(0)" : "translateY(32px)",
                transition: `opacity 0.7s ${i * 0.1}s cubic-bezier(0.22,1,0.36,1), transform 0.7s ${i * 0.1}s cubic-bezier(0.22,1,0.36,1)`,
              }}
            >
              <div className={styles.processStepNumber}>{step.number}</div>
              <div className={styles.processStepIconWrap}>{step.icon}</div>
              <h3 className={styles.processStepTitle}>{step.title}</h3>
              <p className={styles.processStepDesc}>{step.desc}</p>
              {i < processSteps.length - 1 && (
                <div className={styles.processConnector} />
              )}
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section className={styles.servicesSection}>
        <StaggerIn>
          <span className={styles.sectionEyebrow}>Services</span>
          <h2 className={styles.sectionTitle}>
            Core Machine Learning
            <br />
            <em>Services</em>
          </h2>
          <p className={styles.sectionDesc}>
            End-to-end capabilities across the full ML spectrum — from raw model
            development to production-grade deployment and continuous optimisation.
          </p>
        </StaggerIn>

        <div className={styles.servicesGrid}>
          {solutions.map((s, i) => (
            <StaggerIn key={i} delay={i * 0.08}>
              <div className={styles.serviceCard}>
                <div className={styles.cardGradientBorder} />
                <div className={styles.cardHeader}>
                  <div className={styles.cardIconWrap}>{s.icon}</div>
                  <span className={styles.cardTag}>{s.tag}</span>
                </div>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <p className={styles.cardDesc}>{s.description}</p>
                <ul className={styles.cardPoints}>
                  {s.points.map((pt, j) => (
                    <li key={j}>
                      <CheckCircle2 size={13} className={styles.pointIcon} />
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <div className={styles.techHeader}>
            <StaggerIn>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Technology
              </span>
              <h2 className={styles.techTitle}>
                Tools &amp; Technologies
                <br />
                <em>We Master</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                We leverage industry-standard ML frameworks, cloud platforms, and MLOps
                tooling to deliver scalable, high-performance production solutions.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.techGrid}>
            {techCategories.map((cat, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.techCard}>
                  <div className={styles.techCardIcon}>{cat.icon}</div>
                  <span className={styles.techCardLabel}>{cat.label}</span>
                  <ul className={styles.techItems}>
                    {cat.items.map((item, j) => (
                      <li key={j} className={styles.techChip}>{item}</li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────────── */}
      <section style={{ padding: "clamp(5rem,10vw,9rem) clamp(1.5rem,5vw,4rem)" }}>
        <div
          ref={whyRef}
          className={styles.whySection}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Why Choose Us</span>
            <h2 className={styles.whyTitle}>
              Why Businesses Choose
              <br />
              <em>Our ML Services</em>
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
                  Transform Your Business with Data-Driven Intelligence
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

      {/* ── STATS BAND ──────────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── INDUSTRIES ──────────────────────────────────────────── */}
      <section className={styles.industriesSection}>
        <StaggerIn>
          <span className={styles.sectionEyebrow}>Use Cases</span>
          <h2 className={styles.sectionTitle}>
            Machine Learning Across
            <br />
            <em>Industries</em>
          </h2>
          <p className={styles.sectionDesc}>
            Proven ML applications across finance, healthcare, retail, and manufacturing —
            each solution built around industry-specific data and constraints.
          </p>
        </StaggerIn>

        <div className={styles.industriesGrid}>
          {industries.map((ind, i) => (
            <StaggerIn key={i} delay={i * 0.09}>
              <div className={styles.industryCard}>
                <div className={styles.industryIconWrap}>{ind.icon}</div>
                <h3 className={styles.industrySector}>{ind.sector}</h3>
                <ul className={styles.industryList}>
                  {ind.useCases.map((uc, j) => (
                    <li key={j}>{uc}</li>
                  ))}
                </ul>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
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
                Everything you need to know about deploying machine learning
                in your enterprise environment.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <FaqItem key={i} q={f.q} a={f.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── MID CTA ─────────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Build Intelligent
              <br />
              <em>Systems?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Partner with us to develop scalable, data-driven machine learning
              solutions that deliver measurable business impact.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>Get a Free Quote</button>
              <button className={styles.btnGhostLight}>View Case Studies</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-white)" }}>
        <div className={styles.contactSection}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Contact</span>
              <h2 className={styles.contactTitle}>
                Talk to Our
                <br />
                <em>ML Experts</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your project and we'll help you find the right
                machine learning solution for your business needs.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Responding within 24 hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDotTeal} />
                  Free initial consultation
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
                  <label className={styles.formLabel}>Name</label>
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
                  <label className={styles.formLabel}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Country</label>
                  <input
                    type="text"
                    placeholder="United States"
                    className={styles.formInput}
                  />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Tell us about your data, use case, and goals..."
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