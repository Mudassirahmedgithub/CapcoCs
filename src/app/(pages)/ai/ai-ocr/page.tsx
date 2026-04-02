// AIOCRPage.tsx
// Premium AI OCR Solutions Page — Vercel / Stripe / OpenAI aesthetic
// CSS Module: aiocr.module.css | Globals: globals.css

"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import {
  FileText,
  CreditCard,
  Package,
  Container,
  Truck,
  Building2,
  Activity,
  ShoppingCart,
  Hospital,
  Zap,
  Target,
  TrendingUp,
  Link2,
  Cpu,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import styles from "./aiocr.module.css";

type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ────────────────────── */
function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement>(null);
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

/* ── Stagger children animation component ───────────────── */
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

/* ─────────────────────────────────────────────────────────── */

export default function AIOCRPage(): JSX.Element {
  /* Sticky CTA visibility */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = (): void => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* FAQ accordion state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Form state */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 4000);
  };

  /* ── Data ── */
  const stats = [
    { num: "99.8%", label: "Accuracy Rate" },
    { num: "10M+", label: "Docs Processed" },
    { num: "85%", label: "Cost Reduction" },
    { num: "<1s", label: "Avg Processing" },
  ];

  const useCases = [
    {
      title: "Document & Invoice Processing",
      description:
        "Automate extraction of key data from invoices and financial records for faster approvals and reduced manual errors.",
      icon: <FileText className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      title: "Identity & KYC Verification",
      description:
        "Extract and validate data from identity documents to streamline onboarding and compliance workflows.",
      icon: <CreditCard className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      title: "Manufacturing OCR",
      description:
        "Enable real-time recognition of labels, serial numbers, and product data directly from assembly lines.",
      icon: <Package className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      title: "Cargo & Container Recognition",
      description:
        "Digitize container IDs and cargo data to improve tracking and operational efficiency.",
      icon: <Container className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      title: "Logistics & Supply Chain OCR",
      description:
        "Automate document handling and shipment tracking across logistics networks.",
      icon: <Truck className="w-5 h-5" />,
      gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    },
  ];

  const approach = [
    {
      num: "01",
      title: "Requirement Analysis",
      desc: "Understand document types, workflows, and business goals",
    },
    {
      num: "02",
      title: "Model Customization",
      desc: "Train OCR models for your specific use case",
    },
    {
      num: "03",
      title: "Integration & Deployment",
      desc: "Connect with existing systems (ERP, CRM, etc.)",
    },
    {
      num: "04",
      title: "Optimization & Scaling",
      desc: "Improve accuracy and performance over time",
    },
  ];

  const benefits = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "High Accuracy Processing",
      desc: "Advanced models ensure precise data extraction across formats",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Automation at Scale",
      desc: "Reduce manual workload and processing time",
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Real-Time Insights",
      desc: "Capture and process data instantly from operations",
    },
    {
      icon: <Link2 className="w-5 h-5" />,
      title: "Seamless Integration",
      desc: "Works with existing enterprise systems",
    },
  ];

  const industries = [
    { icon: <Building2 className="w-5 h-5" />, label: "Finance & Banking" },
    { icon: <Hospital className="w-5 h-5" />, label: "Healthcare" },
    { icon: <Truck className="w-5 h-5" />, label: "Logistics & Transportation" },
    { icon: <ShoppingCart className="w-5 h-5" />, label: "Retail & E-commerce" },
    { icon: <Package className="w-5 h-5" />, label: "Manufacturing" },
  ];

  const faqs = [
    {
      q: "What is AI OCR and how is it different from traditional OCR?",
      a: "AI OCR uses machine learning and deep learning models to understand context, handle complex layouts, and adapt to different document types. Traditional OCR relies on pattern matching and predefined templates, making it less flexible and accurate.",
    },
    {
      q: "Can OCR be customized for specific industries?",
      a: "Yes. We train custom OCR models tailored to your industry's document types, terminology, and workflows. This ensures higher accuracy and better performance for your specific use cases.",
    },
    {
      q: "How accurate are AI-based OCR solutions?",
      a: "Our AI OCR solutions achieve 99%+ accuracy on standard documents. Accuracy varies based on document quality, complexity, and customization level. We continuously optimize models based on your data.",
    },
    {
      q: "Can it integrate with ERP or business systems?",
      a: "Absolutely. Our OCR solutions integrate seamlessly with popular ERP, CRM, and enterprise systems through APIs, webhooks, and custom connectors. We support SAP, Oracle, Salesforce, and more.",
    },
    {
      q: "What types of documents can be processed?",
      a: "We process invoices, receipts, contracts, forms, identity documents, shipping labels, medical records, and more. Our solutions handle both digital PDFs and scanned images, including handwritten text.",
    },
  ];

  return (
    <div className={styles.page}>
      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to automate with AI OCR?</span>
        <button className={styles.stickyCtaBtn}>Get a Free Consultation</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            AI-Powered OCR
          </div>

          <h1 className={styles.heroTitle}>
            Transform Documents Into
            <br />
            <em>Intelligent Data</em>
          </h1>

          <p className={styles.heroDesc}>
            Advanced OCR solutions that extract, process, and structure data from any
            document — built for teams that need accuracy, speed, and scale.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
            <button className={styles.btnGhost}>See Use Cases</button>
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

      {/* ── INTRO / VALUE PROP ─────────────────────────────────── */}
      <section className={styles.introSection}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>Overview</span>
          <h2 className={styles.sectionTitle}>
            Smarter Data Extraction with <em>AI OCR</em>
          </h2>
          <p className={styles.sectionDesc}>
            We help businesses automate data extraction from documents, images, and
            real-world environments using AI-powered OCR. From financial records to
            logistics operations, our solutions reduce manual effort and improve accuracy
            at scale.
          </p>
        </StaggerIn>
      </section>

      {/* ── USE CASES ──────────────────────────────────────────── */}
      <section className={styles.useCases}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>Solutions</span>
          <h2 className={styles.sectionTitle}>
            AI OCR Solutions <em>Across Industries</em>
          </h2>
        </StaggerIn>

        <div className={styles.cardsGrid}>
          {useCases.map((item, i) => (
            <StaggerIn key={i} delay={i * 0.08}>
              <div className={styles.useCaseCard}>
                <div
                  className={styles.cardGradient}
                  style={{ background: item.gradient }}
                />
                <div className={styles.cardIconWrap}>{item.icon}</div>
                <h3 className={styles.cardTitle}>{item.title}</h3>
                <p className={styles.cardDesc}>{item.description}</p>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── APPROACH / PROCESS ─────────────────────────────────── */}
      <section className={styles.approachSection}>
        <div className={styles.approachHeader}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Process</span>
            <h2 className={styles.approachTitle}>
              Our Approach to
              <br />
              <em>AI OCR Implementation</em>
            </h2>
          </StaggerIn>
        </div>

        <div className={styles.approachGrid}>
          {approach.map((step, i) => (
            <StaggerIn key={i} delay={i * 0.1}>
              <div className={styles.approachCard}>
                <div className={styles.approachNum}>{step.num}</div>
                <div className={styles.approachContent}>
                  <h3 className={styles.approachCardTitle}>{step.title}</h3>
                  <p className={styles.approachCardDesc}>{step.desc}</p>
                </div>
                <div className={styles.approachLine} />
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── BENEFITS ───────────────────────────────────────────── */}
      <section className={styles.benefitsSection}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>Benefits</span>
          <h2 className={styles.sectionTitle}>
            Why Businesses Choose <em>AI OCR</em>
          </h2>
        </StaggerIn>

        <div className={styles.benefitsGrid}>
          {benefits.map((item, i) => (
            <StaggerIn key={i} delay={i * 0.08}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIconWrap}>{item.icon}</div>
                <h3 className={styles.benefitTitle}>{item.title}</h3>
                <p className={styles.benefitDesc}>{item.desc}</p>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── TECHNOLOGY STACK ───────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Technology</span>
            <h2 className={styles.techTitle}>
              Technology Behind
              <br />
              <em>Our OCR Solutions</em>
            </h2>
            <p className={styles.techDesc}>
              We leverage modern AI and computer vision technologies to build scalable OCR
              systems, including deep learning models, cloud-based processing, and secure
              data pipelines.
            </p>
          </StaggerIn>

          <div className={styles.techStack}>
            <StaggerIn delay={0.1}>
              <div className={styles.techItem}>
                <Cpu className="w-5 h-5" />
                <span>Deep Learning</span>
              </div>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <div className={styles.techItem}>
                <Activity className="w-5 h-5" />
                <span>Computer Vision</span>
              </div>
            </StaggerIn>
            <StaggerIn delay={0.2}>
              <div className={styles.techItem}>
                <TrendingUp className="w-5 h-5" />
                <span>ML Pipelines</span>
              </div>
            </StaggerIn>
            <StaggerIn delay={0.25}>
              <div className={styles.techItem}>
                <Link2 className="w-5 h-5" />
                <span>Cloud Infrastructure</span>
              </div>
            </StaggerIn>
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ─────────────────────────────────────────── */}
      <section className={styles.industriesSection}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>Industries</span>
          <h2 className={styles.sectionTitle}>
            Industries <em>We Serve</em>
          </h2>
        </StaggerIn>

        <div className={styles.industriesGrid}>
          {industries.map((ind, i) => (
            <StaggerIn key={i} delay={i * 0.07}>
              <div className={styles.industryCard}>
                <div className={styles.industryIcon}>{ind.icon}</div>
                <span className={styles.industryLabel}>{ind.label}</span>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaContent}>
          <h2 className={styles.ctaTitle}>
            Ready to Automate Your
            <br />
            <em>Workflows with AI OCR?</em>
          </h2>
          <p className={styles.ctaDesc}>
            Let's build a solution tailored to your business needs and unlock faster,
            smarter operations.
          </p>
          <div className={styles.ctaActions}>
            <button className={styles.btnPrimary}>Start Your Project</button>
            <button className={styles.btnGhost}>Talk to an Expert</button>
          </div>
        </div>
      </section>

      {/* ── CONTACT FORM ───────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <div className={styles.contactLeft}>
          <span className={styles.sectionEyebrow}>Get in Touch</span>
          <h2 className={styles.contactTitle}>
            Let's Build <em>Together</em>
          </h2>
          <p className={styles.contactDesc}>
            Share your requirements and we'll get back to you with a tailored solution
            for your OCR needs.
          </p>
          <div className={styles.contactMeta}>
            <div className={styles.contactMetaItem}>
              <div className={styles.contactMetaDot} />
              <span>Typical response within 24 hours</span>
            </div>
          </div>
        </div>

        <form className={styles.contactForm} onSubmit={handleFormSubmit}>
          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Name</label>
              <input
                type="text"
                className={styles.formInput}
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Work Email</label>
              <input
                type="email"
                className={styles.formInput}
                placeholder="you@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
          </div>

          <div className={styles.formRow}>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Phone Number</label>
              <input
                type="tel"
                className={styles.formInput}
                placeholder="+1 (555) 000-0000"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Country</label>
              <input
                type="text"
                className={styles.formInput}
                placeholder="United States"
                value={formData.country}
                onChange={(e) => setFormData({ ...formData, country: e.target.value })}
              />
            </div>
          </div>

          <div className={styles.formField}>
            <label className={styles.formLabel}>Message</label>
            <textarea
              className={styles.formTextarea}
              placeholder="Tell us about your OCR requirements..."
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </div>

          <button type="submit" className={styles.formSubmit}>
            Send Message
          </button>

          {formSubmitted && (
            <div className={styles.successMsg}>
              <CheckCircle2 className="w-4 h-4" />
              Message sent successfully! We'll be in touch soon.
            </div>
          )}
        </form>
      </section>

      {/* ── FAQ SECTION ────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <span className={styles.sectionEyebrow}>FAQ</span>
            <h2 className={styles.faqTitle}>
              Frequently Asked
              <br />
              <em>Questions</em>
            </h2>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.open : ""}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  type="button"
                >
                  <span>{faq.q}</span>
                  <ChevronDown className={styles.faqIcon} />
                </button>
                <div className={styles.faqAnswer}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}