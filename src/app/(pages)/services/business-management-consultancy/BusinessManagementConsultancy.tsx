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
export default function BusinessManagementConsultancy() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className={styles.page}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />

        <div className={styles.heroInner}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Business Management &amp; Consultancy
          </div>

          {/* SEO: keyword-rich H1 */}
          <h1 className={styles.heroTitle}>
            Business Management &amp; Consultancy
            <br />
            <em>Services for Enterprise Growth</em>
          </h1>

          <p className={styles.heroDesc}>
            Navigate the future of industry with CAPCO's expert business
            management and consultancy services — from strategic planning and
            feasibility assessment to compliance outsourcing and SOP development.
          </p>
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
              {/* SEO: keyword-improved heading */}
              <h2 className={styles.sectionTitle}>
                Business Management &amp; <em>Consultancy Services</em>
              </h2>
              <p className={styles.sectionDesc}>
                Comprehensive business management and consultancy services designed
                to elevate your organisation at every stage — from planning to execution.
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
              {/* SEO: keyword-improved heading */}
              <h2 className={styles.sectionTitle}>
                Why Choose Our <em>Business Consultancy Services</em>
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
            {/* SEO: keyword-improved heading */}
            <h2 className={styles.ctaTitle}>
              Build a Stronger Business
              <br />
              <em>with CAPCO Consulting Services</em>
            </h2>
            <p className={styles.ctaDesc}>
              From strategic planning and business valuation to compliance outsourcing
              and SOP development, CAPCO Consulting Services equips your organisation
              with the frameworks and expertise needed for sustainable growth.
            </p>
          </StaggerIn>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────── */}
      {/* SEO: FAQ section with schema-compatible structure */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>FAQ</span>
              {/* SEO: keyword-improved heading */}
              <h2 className={styles.sectionTitle}>
                Business Management &amp; Consultancy — <em>FAQs</em>
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
                    aria-expanded={openFaq === i}
                  >
                    {item.q}
                    <ChevronDown className={`w-4 h-4 ${styles.faqChevron}`} />
                  </button>
                  <div className={styles.faqA} aria-hidden={openFaq !== i}>
                    <p className={styles.faqAText}>{item.a}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}