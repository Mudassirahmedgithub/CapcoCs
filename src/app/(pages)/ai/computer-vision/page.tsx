// ComputerVisionPage.tsx
// Premium Computer Vision Services Page — Vercel / Stripe / OpenAI aesthetic
// CSS Module: computervision.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Eye,
  Camera,
  Scan,
  Package,
  ShoppingBag,
  Heart,
  ShieldAlert,
  Cpu,
  Cloud,
  Zap,
  CheckCircle2,
  Layers,
  Search,
  Video,
  Brain,
} from "lucide-react";
import styles from "./cv.module.css";
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

/* ── Stagger children component ───────────────────────────────── */
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

export default function ComputerVisionPage(): React.ReactElement {
  /* Sticky CTA visibility */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = (): void => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why-section in-view refs */
  const [whyRef, whyVisible] = useInView(0.15);

  /* ── Data ── */
  const services = [
    {
      title: "AI-Powered Quality Inspection",
      description:
        "Automate inspection workflows using AI to detect defects, inconsistencies, and anomalies with high precision.",
      points: [
        "Detect defects and irregularities",
        "Improve product quality consistency",
        "Reduce manual inspection effort",
      ],
      icon: <Search className="w-5 h-5" />,
    },
    {
      title: "Object & Facial Recognition",
      description:
        "Identify and verify objects or individuals using advanced recognition algorithms.",
      points: [
        "Real-time object detection",
        "Facial recognition systems",
        "Security and identity verification",
      ],
      icon: <Eye className="w-5 h-5" />,
    },
    {
      title: "Cargo, Container & Product Scanning",
      description:
        "Enable intelligent scanning for logistics and supply chain operations.",
      points: [
        "Automated cargo inspection",
        "Barcode and label detection",
        "Faster processing at checkpoints",
      ],
      icon: <Package className="w-5 h-5" />,
    },
    {
      title: "Retail & Smart Analytics",
      description: "Gain insights into customer behavior and store performance.",
      points: [
        "Footfall analysis",
        "Shelf monitoring",
        "Customer behavior insights",
      ],
      icon: <ShoppingBag className="w-5 h-5" />,
    },
    {
      title: "Healthcare Imaging Solutions",
      description: "Enhance diagnostics with AI-powered medical image analysis.",
      points: [
        "Image-based diagnostics",
        "Pattern detection in scans",
        "Clinical decision support",
      ],
      icon: <Heart className="w-5 h-5" />,
    },
    {
      title: "Surveillance & Smart Cities",
      description: "Build safer environments with intelligent monitoring systems.",
      points: [
        "Video surveillance analytics",
        "Traffic monitoring",
        "Public safety systems",
      ],
      icon: <ShieldAlert className="w-5 h-5" />,
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Use Case Discovery",
      desc: "Understand business needs and define vision use cases.",
    },
    {
      num: "02",
      title: "Data Collection & Preparation",
      desc: "Gather and label high-quality visual datasets.",
    },
    {
      num: "03",
      title: "Model Development",
      desc: "Train and optimize AI models for accuracy.",
    },
    {
      num: "04",
      title: "Integration & Deployment",
      desc: "Deploy on cloud, edge, or hybrid systems.",
    },
    {
      num: "05",
      title: "Monitoring & Optimization",
      desc: "Continuously improve performance post-deployment.",
    },
  ];

  const techStack = [
    { label: "TensorFlow", icon: <Brain className="w-5 h-5" /> },
    { label: "PyTorch", icon: <Cpu className="w-5 h-5" /> },
    { label: "OpenCV", icon: <Camera className="w-5 h-5" /> },
    { label: "YOLO / CNN", icon: <Layers className="w-5 h-5" /> },
    { label: "Cloud (AWS, Azure, GCP)", icon: <Cloud className="w-5 h-5" /> },
    { label: "Edge AI Devices", icon: <Zap className="w-5 h-5" /> },
  ];

  const whyItems = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Full-Cycle Development",
      desc: "From concept to deployment and beyond.",
    },
    {
      icon: <Video className="w-5 h-5" />,
      title: "Cross-Industry Experience",
      desc: "Solutions tailored for multiple domains.",
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Scalable Architecture",
      desc: "Built for cloud, edge, or hybrid environments.",
    },
    {
      icon: <Scan className="w-5 h-5" />,
      title: "AI + OCR Integration",
      desc: "Combine visual recognition with text extraction for complete automation.",
    },
  ];

  const stats = [
    { num: "500+", label: "Vision Models Deployed" },
    { num: "99.2%", label: "Detection Accuracy" },
    { num: "50%", label: "Processing Time Saved" },
    { num: "24/7", label: "Real-time Monitoring" },
  ];

  const faqs = [
    {
      q: "What is computer vision?",
      a: "Computer vision enables machines to interpret and analyze visual data such as images and videos.",
    },
    {
      q: "How is it different from OCR?",
      a: "OCR extracts text from images, while computer vision analyzes the entire visual context.",
    },
    {
      q: "Can it improve operational efficiency?",
      a: "Yes, it reduces manual effort, improves accuracy, and speeds up processes.",
    },
    {
      q: "Can solutions run on edge devices?",
      a: "Yes, models can be deployed on edge devices for real-time processing.",
    },
    {
      q: "What industries benefit most from computer vision?",
      a: "Manufacturing, retail, healthcare, logistics, smart cities, and security industries see significant benefits.",
    },
  ];

  return (
    <div className={styles.page}>
      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to unlock visual intelligence?</span>
        <button className={styles.stickyCtaBtn}>Get a Free Consultation</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Computer Vision Solutions
          </div>

          <h1 className={styles.heroTitle}>
            Transform Visual Data into
            <br />
            <em>Intelligent Decisions</em>
          </h1>

          <p className={styles.heroDesc}>
            We design and deploy advanced computer vision solutions that automate processes, improve accuracy, and unlock actionable insights across industries.
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

      {/* ── INTRO OVERVIEW ─────────────────────────────────────── */}
      <section className={styles.introSection}>
        <StaggerIn delay={0}>
          <h2 className={styles.introTitle}>
            End-to-End <em>Computer Vision</em> Solutions
          </h2>
          <p className={styles.introDesc}>
            Our computer vision services enable businesses to interpret and act on visual data in real time. From image recognition to intelligent video analytics, we build scalable solutions tailored to real-world environments.
          </p>
        </StaggerIn>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section className={styles.services}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>Services</span>
          <h2 className={styles.sectionTitle}>
            Vision Systems for <em>Every Industry</em>
          </h2>
          <p className={styles.sectionDesc}>
            From quality control to smart city infrastructure, our computer vision solutions drive automation and intelligence at scale.
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

      {/* ── PROCESS SECTION ────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.processHeader}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>Process</span>
            <h2 className={styles.processTitle}>
              Our Computer Vision
              <br />
              <em>Development Approach</em>
            </h2>
          </StaggerIn>
        </div>

        <div className={styles.processTimeline}>
          {processSteps.map((step, i) => (
            <StaggerIn key={i} delay={i * 0.08}>
              <div className={styles.processStep}>
                <div className={styles.processNum}>{step.num}</div>
                <div className={styles.processContent}>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
                {i < processSteps.length - 1 && (
                  <div className={styles.processConnector} />
                )}
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
              <span
                className={styles.sectionEyebrow}
                style={{ color: "var(--color-primary)" }}
              >
                Technology
              </span>
              <h2 className={styles.techTitle}>
                Technology Stack
                <br />
                <em>We Use</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                We leverage modern AI frameworks and tools to build reliable and scalable computer vision systems.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.techGrid}>
            {techStack.map((tech, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.techCard}>
                  <div className={styles.techCardIcon}>{tech.icon}</div>
                  <span className={styles.techCardLabel}>{tech.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ───────────────────────────────────────── */}
      <section className={styles.whySection} ref={whyRef}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>Why Choose Us</span>
          <h2 className={styles.whyTitle}>
            Why Choose Our <em>Computer Vision</em> Expertise
          </h2>
        </StaggerIn>

        <div className={styles.whyGrid}>
          {whyItems.map((item, i) => (
            <StaggerIn key={i} delay={i * 0.08}>
              <div
                className={styles.whyCard}
                style={{
                  opacity: whyVisible ? 1 : 0,
                  transform: whyVisible
                    ? "translateY(0)"
                    : "translateY(20px)",
                  transition: `opacity 0.6s ${i * 0.1}s ease, transform 0.6s ${
                    i * 0.1
                  }s ease`,
                }}
              >
                <div className={styles.whyCardIcon}>{item.icon}</div>
                <h3 className={styles.whyCardTitle}>{item.title}</h3>
                <p className={styles.whyCardDesc}>{item.desc}</p>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <div className={styles.faqLeft}>
            <StaggerIn>
              <span className={styles.sectionEyebrow}>FAQ</span>
              <h2 className={styles.faqTitle}>
                Frequently Asked
                <br />
                <em>Questions</em>
              </h2>
            </StaggerIn>
          </div>

          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <StaggerIn key={i} delay={i * 0.05}>
                <details className={styles.faqItem}>
                  <summary className={styles.faqQ}>{faq.q}</summary>
                  <p className={styles.faqA}>{faq.a}</p>
                </details>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaContent}>
          <StaggerIn delay={0}>
            <h2 className={styles.ctaTitle}>
              Ready to Turn Visual Data into
              <br />
              <em>Business Value?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Let's build intelligent vision systems tailored to your needs.
            </p>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>Get a Free Consultation</button>
              <button className={styles.btnGhost}>Talk to Our Experts</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT FORM ───────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <div className={styles.contactLeft}>
          <StaggerIn>
            <h2 className={styles.contactTitle}>
              Let's Build Your
              <br />
              <em>Vision Solution</em>
            </h2>
            <p className={styles.contactDesc}>
              Share your requirements and we'll get back to you within 24 hours with a tailored proposal.
            </p>
            <div className={styles.contactMeta}>
              <div className={styles.contactMetaItem}>
                <div className={styles.contactMetaDot} />
                <span>Response within 24 hours</span>
              </div>
              <div className={styles.contactMetaItem}>
                <CheckCircle2 className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                <span>Free initial consultation</span>
              </div>
              <div className={styles.contactMetaItem}>
                <CheckCircle2 className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                <span>No commitment required</span>
              </div>
            </div>
          </StaggerIn>
        </div>

        <StaggerIn delay={0.1}>
          <div className={styles.contactForm}>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Name</label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="Your full name"
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Email</label>
                <input
                  type="email"
                  className={styles.formInput}
                  placeholder="you@company.com"
                />
              </div>
            </div>

            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Contact Number</label>
                <input
                  type="tel"
                  className={styles.formInput}
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Country</label>
                <input
                  type="text"
                  className={styles.formInput}
                  placeholder="United States"
                />
              </div>
            </div>

            <div className={styles.formField}>
              <label className={styles.formLabel}>Message</label>
              <textarea
                className={styles.formTextarea}
                placeholder="Tell us about your computer vision requirements..."
              />
            </div>

            <button className={styles.formSubmit}>Submit Inquiry</button>
          </div>
        </StaggerIn>
      </section>
    </div>
  );
}