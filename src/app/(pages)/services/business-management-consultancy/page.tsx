"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Map,
  TrendingUp,
  ShieldCheck,
  Search,
  BarChart2,
  Target,
  Building2,
  FileText,
  Lightbulb,
  BookOpen,
  ChevronDown,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import styles from "./business.module.css";
import { ReactNode } from "react";

/* ── Types ─────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ──────────────── */
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

/* ── Stagger wrapper ────────────────────────────────── */
function StaggerIn({ children, className, delay = 0 }: StaggerInProps) {
  const [ref, visible] = useInView(0.1);
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

/* ── Data ───────────────────────────────────────────── */
const services = [
  {
    icon: <Map className="w-5 h-5" />,
    title: "Business Planning",
    desc: "A strategic roadmap for success, outlining objectives, market analysis, operations, and financial projections.",
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: "Business Valuation",
    desc: "Assessment of a company's economic value for transactions and strategic decisions.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Compliance Outsourcing",
    desc: "Comparative analysis evaluating financial data across periods for strategic planning.",
  },
  {
    icon: <Search className="w-5 h-5" />,
    title: "Due Diligence",
    desc: "Meticulous pre-transaction investigation ensuring accuracy in legal, financial, and operational aspects.",
  },
  {
    icon: <BarChart2 className="w-5 h-5" />,
    title: "Feasibility Assessment",
    desc: "Evaluates project viability by analyzing market conditions and financial implications.",
  },
  {
    icon: <Target className="w-5 h-5" />,
    title: "Strategic Planning",
    desc: "Meticulous process of defining organizational goals and developing success roadmaps.",
  },
  {
    icon: <Building2 className="w-5 h-5" />,
    title: "Organization Assessment",
    desc: "Evaluates organizational health by probing into culture, communication, and efficiency.",
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: "SOP Development",
    desc: "Creating precise, tailored protocols to streamline workflows and ensure consistency.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Strategic Consulting",
    desc: "Tailored insights to optimize business processes and capitalize on opportunities.",
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: "Policy and Procedure",
    desc: "Comprehensive analysis for knowledgeable lending decisions and credit appraisal.",
  },
];

const stats = [
  { num: "500+", label: "Clients Served" },
  { num: "15+", label: "Years Experience" },
  { num: "98%", label: "Satisfaction Rate" },
  { num: "40+", label: "Industries Covered" },
];

const whyUs = [
  {
    icon: <Target className="w-5 h-5" />,
    title: "Goal-Driven Strategy",
    desc: "We align every engagement with measurable outcomes tied directly to your business objectives.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Trusted & Confidential",
    desc: "Enterprise-grade confidentiality standards with full compliance and regulatory awareness.",
  },
  {
    icon: <Lightbulb className="w-5 h-5" />,
    title: "Industry-Specific Insight",
    desc: "Deep expertise across industries — finance, healthcare, retail, manufacturing, and beyond.",
  },
];

const faqs = [
  {
    q: "What industries do you specialize in?",
    a: "We serve clients across finance, healthcare, manufacturing, retail, technology, and real estate — with tailored approaches for each vertical.",
  },
  {
    q: "How long does a typical engagement take?",
    a: "Engagements vary by scope. Feasibility assessments may take 2–4 weeks, while full strategic planning cycles typically run 6–12 weeks.",
  },
  {
    q: "Do you offer ongoing advisory support?",
    a: "Yes. Many clients retain us on an ongoing basis for quarterly reviews, strategy updates, and compliance monitoring.",
  },
  {
    q: "What does the onboarding process look like?",
    a: "We begin with a discovery call, followed by a scoping document and proposal. Once aligned, our team mobilizes within 72 hours.",
  },
];

/* ── Page Component ──────────────────────────────────── */
export default function BusinessConsultancyPage() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.stickyVisible : ""}`}>
        <span className={styles.stickyText}>Ready to grow your business?</span>
        <button className={styles.stickyBtn}>Schedule a Consultation</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />

        <div className={styles.heroInner}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Business Management &amp; Consultancy
          </div>

          <h1 className={styles.heroTitle}>
            Transform Your Business
            <br />
            <em>With Innovative Solutions</em>
          </h1>

          <p className={styles.heroDesc}>
            Navigate the future of industry with our cutting-edge business
            management and consultancy services.
          </p>

          <div className={styles.heroCta}>
            <button className={`btn btn-primary ${styles.heroBtn}`}>
              Get a Free Consultation
            </button>
            <button className={`btn btn-ghost ${styles.heroBtnGhost}`}>
              Learn More
            </button>
          </div>
        </div>

        {/* Stats row */}
        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICES GRID ─────────────────────────────────── */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Our Expertise</span>
              <h2 className={styles.sectionTitle}>
                Business Management &amp; <em>Consultancy</em>
              </h2>
              <p className={styles.sectionDesc}>
                Comprehensive services designed to elevate your business at every
                stage — from planning to execution.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <StaggerIn key={i} delay={i * 0.055}>
                <div className={styles.serviceCard}>
                  <div className={styles.cardAccent} />
                  <div className={styles.cardIcon}>{s.icon}</div>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.desc}</p>
                  <span className={styles.cardArrow}>
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────── */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow} style={{ color: "var(--color-primary)" }}>
                Why Choose Us
              </span>
              <h2 className={styles.sectionTitle}>
                Built on <em>Trust &amp; Results</em>
              </h2>
              <p className={styles.sectionDesc}>
                A partner that understands your industry, your challenges, and your ambitions.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.whyGrid}>
            {whyUs.map((item, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>{item.icon}</div>
                  <h3 className={styles.whyTitle}>{item.title}</h3>
                  <p className={styles.whyDesc}>{item.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ──────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaBandOrb} />
        <div className={styles.ctaBandInner}>
          <StaggerIn>
            <h2 className={styles.ctaTitle}>
              Ready to Transform
              <br />
              <em>Your Business?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Let's discuss how we can help you achieve your business goals.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtn}>Start the Conversation</button>
              <button className={styles.ctaBtnOutline}>View Case Studies</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>FAQ</span>
              <h2 className={styles.sectionTitle}>
                Common <em>Questions</em>
              </h2>
            </div>
          </StaggerIn>

          <div className={styles.faqList}>
            {faqs.map((item, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div
                  className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}
                >
                  <button
                    className={styles.faqQ}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {item.q}
                    <ChevronDown className={`w-4 h-4 ${styles.faqChevron}`} />
                  </button>
                  <div className={styles.faqA}>
                    <p className={styles.faqAText}>{item.a}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <div className={styles.contactInner}>
          <div className={styles.contactLeft}>
            <StaggerIn>
              <span className={styles.eyebrow}>Get In Touch</span>
              <h2 className={styles.contactTitle}>
                Let's Build Something
                <br />
                <em>Remarkable</em>
              </h2>
              <p className={styles.contactDesc}>
                Share your goals and we'll craft a tailored plan to drive
                measurable results for your organisation.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.metaDot} />
                  Typical response within 24 hours
                </div>
                <div className={styles.contactMetaItem}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                  Free initial consultation
                </div>
                <div className={styles.contactMetaItem}>
                  <CheckCircle2 className="w-4 h-4" style={{ color: "var(--color-primary)" }} />
                  No obligation quote
                </div>
              </div>
            </StaggerIn>
          </div>

          <StaggerIn delay={0.15}>
            <div className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>First Name</label>
                  <input className={styles.formInput} type="text" placeholder="Jane" />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Last Name</label>
                  <input className={styles.formInput} type="text" placeholder="Doe" />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Email Address</label>
                <input className={styles.formInput} type="email" placeholder="jane@company.com" />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Company</label>
                <input className={styles.formInput} type="text" placeholder="Your company name" />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Service of Interest</label>
                <select className={styles.formInput}>
                  <option value="">Select a service…</option>
                  <option>Business Planning</option>
                  <option>Business Valuation</option>
                  <option>Compliance Outsourcing</option>
                  <option>Due Diligence</option>
                  <option>Feasibility Assessment</option>
                  <option>Strategic Planning</option>
                  <option>Organization Assessment</option>
                  <option>SOP Development</option>
                  <option>Strategic Consulting</option>
                  <option>Policy and Procedure</option>
                </select>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Tell us about your business goals…"
                  rows={4}
                />
              </div>
              <button className={styles.formSubmit}>Send Message</button>
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}