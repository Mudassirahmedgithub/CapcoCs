// GenerativeAIPage.tsx
// Premium Generative AI page — consistent with AIAgentDevelopmentPage
// CSS Module: genai.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  FileText,
  Building2,
  Lightbulb,
  Plug,
  Brain,
  Cpu,
  Cloud,
  Database,
  Zap,
  ShieldCheck,
  BarChart3,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import styles from "./gai.module.css";
import { ReactNode } from "react";

/* ── Types ──────────────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type ServiceCard = {
  icon: ReactNode;
  title: string;
  description: string;
  points: string[];
};

type TechItem = {
  label: string;
  sublabel: string;
  icon: ReactNode;
};

type WhyItem = {
  icon: ReactNode;
  title: string;
  desc: string;
};

type Stat = {
  num: string;
  label: string;
};

type Faq = {
  q: string;
  a: string;
};

type ProcessStep = {
  num: string;
  title: string;
  desc: string;
};

/* ── Scroll-triggered visibility hook ─────────────────────────── */
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

/* ── Stagger-in wrapper ────────────────────────────────────────── */
function StaggerIn({ children, className, delay = 0 }: StaggerInProps): JSX.Element {
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

/* ── FAQ Item ──────────────────────────────────────────────────── */
type FaqItemProps = { faq: Faq };
function FaqItem({ faq }: FaqItemProps): JSX.Element {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <div
      className={`${styles.faqItem} ${open ? styles.faqOpen : ""}`}
      onClick={() => setOpen((p) => !p)}
    >
      <div className={styles.faqQuestion}>
        <span>{faq.q}</span>
        <ChevronDown className={`${styles.faqChevron} ${open ? styles.faqChevronOpen : ""}`} size={18} />
      </div>
      {open && <p className={styles.faqAnswer}>{faq.a}</p>}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────── */

export default function GenerativeAIPage(): JSX.Element {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState<boolean>(false);
  useEffect(() => {
    const handler = (): void => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why section refs */
  const [whyRef, whyVisible] = useInView(0.15);

  /* ── Data ── */
  const processSteps: ProcessStep[] = [
    { num: "01", title: "Discovery & Strategy", desc: "We align on your business goals, data landscape, and the right generative AI approach." },
    { num: "02", title: "Model Selection", desc: "Choosing the optimal foundation model — GPT-4, Gemini, Claude, or open-source alternatives." },
    { num: "03", title: "Custom Development", desc: "Fine-tuning, RAG pipelines, and domain-specific prompt engineering for your use case." },
    { num: "04", title: "Integration", desc: "Seamlessly connect AI outputs to your CRM, ERP, CMS, or internal tools via APIs." },
    { num: "05", title: "Deployment & Optimization", desc: "Production deployment with monitoring, feedback loops, and continuous improvement." },
  ];

  const services: ServiceCard[] = [
    {
      icon: <Sparkles size={20} />,
      title: "Custom Generative AI Applications",
      description: "Build AI solutions tailored to your business workflows and use cases.",
      points: ["Domain-specific AI models", "Workflow integration", "Secure and scalable architecture"],
    },
    {
      icon: <FileText size={20} />,
      title: "AI for Content Creation",
      description: "Automate and scale content generation across platforms.",
      points: ["Text, image, and media generation", "Marketing content automation", "Personalization at scale"],
    },
    {
      icon: <Building2 size={20} />,
      title: "Enterprise AI Platforms",
      description: "Deploy robust AI platforms built for enterprise needs.",
      points: ["High-performance infrastructure", "Governance & compliance", "Scalable architecture"],
    },
    {
      icon: <Lightbulb size={20} />,
      title: "AI Consulting & Strategy",
      description: "Define the right AI roadmap for your business.",
      points: ["Use case identification", "ROI-focused planning", "Technology selection"],
    },
    {
      icon: <Plug size={20} />,
      title: "AI Integration & Support",
      description: "Seamlessly integrate AI into your existing systems.",
      points: ["API integrations", "Continuous optimization", "Ongoing support"],
    },
  ];

  const techStack: TechItem[] = [
    { label: "OpenAI / LLMs", sublabel: "GPT-4, o1, Embeddings", icon: <Brain size={20} /> },
    { label: "LangChain / LlamaIndex", sublabel: "RAG & orchestration", icon: <Zap size={20} /> },
    { label: "TensorFlow / PyTorch", sublabel: "Custom model training", icon: <Cpu size={20} /> },
    { label: "Vector Databases", sublabel: "Pinecone, Weaviate, pgvector", icon: <Database size={20} /> },
    { label: "AWS / Azure / GCP", sublabel: "Cloud-native deployment", icon: <Cloud size={20} /> },
    { label: "Anthropic Claude", sublabel: "Long-context reasoning", icon: <Sparkles size={20} /> },
  ];

  const whyItems: WhyItem[] = [
    {
      icon: <Zap size={20} />,
      title: "End-to-End Development",
      desc: "Complete lifecycle support from idea to deployment — strategy, build, integrate, monitor.",
    },
    {
      icon: <Building2 size={20} />,
      title: "Industry-Focused Solutions",
      desc: "Customized AI systems tailored to healthcare, retail, finance, legal, and enterprise.",
    },
    {
      icon: <BarChart3 size={20} />,
      title: "Scalable Architecture",
      desc: "Built to grow with your business — handle millions of requests without breaking a sweat.",
    },
    {
      icon: <ShieldCheck size={20} />,
      title: "Expert Team & Support",
      desc: "Continuous improvements, technical excellence, and dedicated account management.",
    },
  ];

  const benefits: string[] = [
    "Automate content workflows, saving 40+ hours/week",
    "Personalize customer experiences at enterprise scale",
    "Accelerate product development with AI assistance",
    "Reduce content production costs by up to 70%",
    "Drive innovation through AI-first strategies",
  ];

  const stats: Stat[] = [
    { num: "150+", label: "AI Systems Built" },
    { num: "97%", label: "Client Satisfaction" },
    { num: "70%", label: "Cost Reduction" },
    { num: "5×", label: "Faster Time-to-Market" },
  ];

  const faqs: Faq[] = [
    { q: "What is generative AI?", a: "Generative AI refers to systems that can create content such as text, images, audio, and more using advanced machine learning models trained on large datasets." },
    { q: "How can it help my business?", a: "It improves efficiency, automates content creation, enhances personalization, accelerates research, and significantly reduces operational costs." },
    { q: "Do you offer custom solutions?", a: "Yes, every solution we build is tailored to your specific business needs, domain, data sources, and technology ecosystem." },
    { q: "Can it integrate with existing systems?", a: "Absolutely. Our solutions are designed to integrate seamlessly with CRMs, ERPs, content platforms, and any REST API-enabled system." },
    { q: "Do you provide support after deployment?", a: "Yes, we offer continuous monitoring, model optimization, performance tuning, and dedicated technical support post-deployment." },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ────────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to build with Generative AI?</span>
        <button className={styles.stickyCtaBtn}>Get a Free Consultation</button>
      </div>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroOrb} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Generative AI Development
          </div>

          <h1 className={styles.heroTitle}>
            Transform Ideas into
            <br />
            <em>Intelligent AI Solutions</em>
          </h1>

          <p className={styles.heroDesc}>
            From strategy to deployment, we help businesses build powerful generative AI
            systems that automate creativity, enhance productivity, and drive innovation.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
            <button className={styles.btnGhost}>Talk to an AI Expert</button>
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

      {/* ── PROCESS ──────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Our Approach</span>
            <h2 className={styles.sectionTitle}>
              Our Generative AI
              <br />
              <em>Development Approach</em>
            </h2>
            <p className={styles.sectionDesc}>
              We follow a structured approach to turn your ideas into scalable AI solutions.
              From understanding your business goals to deploying production-ready systems,
              we ensure measurable impact at every stage.
            </p>
          </StaggerIn>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.processStep}>
                  <div className={styles.processStepNum}>{step.num}</div>
                  <div className={styles.processStepLine} />
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────────── */}
      <section className={styles.servicesSection}>
        <div className={styles.servicesInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Services</span>
            <h2 className={styles.sectionTitle}>
              Our Generative <em>AI Services</em>
            </h2>
            <p className={styles.sectionDesc}>
              Tailored solutions designed to solve real business challenges and unlock new opportunities.
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
                      <li key={j}>
                        <CheckCircle2 size={13} />
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

      {/* ── TECH STACK ───────────────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <div className={styles.techHeader}>
            <StaggerIn>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Technology
              </span>
              <h2 className={styles.techTitle}>
                Technologies
                <br />
                <em>We Use</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                We leverage advanced AI frameworks, tools, and cloud platforms to build
                reliable and high-performance generative AI solutions.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.techGrid}>
            {techStack.map((t, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.techItem}>
                  <div className={styles.techItemIcon}>{t.icon}</div>
                  <div>
                    <span className={styles.techItemLabel}>{t.label}</span>
                    <span className={styles.techItemSub}>{t.sublabel}</span>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ───────────────────────────────────────────────── */}
      <section style={{ padding: "clamp(5rem,10vw,9rem) clamp(1.5rem,5vw,4rem)" }}>
        <div
          ref={whyRef}
          className={styles.whySection}
          style={{ padding: 0 }}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Why Us</span>
            <h2 className={styles.whyTitle}>
              Why Choose Us for
              <br />
              <em>Generative AI</em>
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
                  Unlock the Full Power of Generative AI
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

      {/* ── STATS BAND ───────────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── FAQ ──────────────────────────────────────────────────── */}
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
                Everything you need to know about generative AI
                and how we build it for your business.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <FaqItem key={i} faq={f} />
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CTA SECTION ──────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Build with
              <br />
              <em>Generative AI?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Connect with our experts to explore how generative AI can
              transform your business — from content to code to intelligence.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>Get a Free Consultation</button>
              <button className={styles.btnGhost}>Contact Us Today</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ──────────────────────────────────────────────── */}
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
                generative AI solution for your business needs.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Responding within 24 hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDotPrimary} />
                  Free initial consultation
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDotPrimary} />
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
                  <label className={styles.formLabel}>Contact Number</label>
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
              <button className={styles.formSubmit}>Get Started</button>
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}