// app/asset-management/AssetManagementPage.tsx
// Premium Asset Management hub page — client component
// CSS Module: asset.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./asset.module.css";

/* ── Scroll-triggered visibility hook ─────────────────────── */
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

/* ── Stagger-in wrapper ─────────────────────────────────────── */
type StaggerInProps = { children: ReactNode; className?: string; delay?: number };

function StaggerIn({ children, className, delay = 0 }: StaggerInProps) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1),
                     transform 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */

export default function AssetManagementPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Data ── */
  const solutions = [
    {
      title: "Asset Life Cycle Management",
      icon: "🔄",
      description:
        "Manage assets through every stage of their lifecycle, from procurement and deployment to maintenance, depreciation, and retirement.",
      href: "/services/asset-management/asset-life-cycle-management",
    },
    {
      title: "Asset Tracking",
      icon: "📍",
      description:
        "Track asset locations, usage, and operational status in real time to improve visibility and accountability.",
      href: "/services/asset-management/asset-tracking",
    },
    {
      title: "Asset Financial & Compliance Management",
      icon: "📊",
      description:
        "Monitor asset costs, depreciation, audits, and compliance requirements with centralised reporting and controls.",
      href: "/services/asset-management/asset-financial-compliance-management",
    },
    {
      title: "Asset Work & Registry",
      icon: "🗂️",
      description:
        "Maintain a centralised asset registry with streamlined work management and operational workflows.",
      href: "/services/asset-management/asset-work-registry",
    },
    {
      title: "Asset Inspection",
      icon: "🔍",
      description:
        "Digitise inspection workflows with real-time reporting, issue tracking, and maintenance visibility.",
      href: "/services/asset-management/asset-inspection",
    },
    {
      title: "RFID Solutions",
      icon: "📡",
      description:
        "Enable automated asset identification and tracking using RFID technology for faster and more accurate operations.",
      href: "/services/asset-management/rfid-solutions",
    },
  ];

  const overviewCards = [
    {
      title: "Improved Visibility",
      desc: "Gain real-time insights into asset location, usage, and operational status.",
    },
    {
      title: "Operational Efficiency",
      desc: "Reduce manual processes and automate asset workflows organisation-wide.",
    },
    {
      title: "Compliance & Accuracy",
      desc: "Maintain accurate records for audits, reporting, and regulatory requirements.",
    },
    {
      title: "Scalable Solutions",
      desc: "Adapt asset management processes seamlessly as your organisation grows.",
    },
  ];

  const benefitCards = [
    {
      icon: "📉",
      title: "Reduce Asset Loss",
      desc: "Track and monitor assets accurately to minimise misplacement and unauthorised usage across all locations.",
    },
    {
      icon: "⚡",
      title: "Increase Productivity",
      desc: "Simplify asset workflows and reduce time spent on manual administration and paperwork.",
    },
    {
      icon: "🧠",
      title: "Enhance Decision Making",
      desc: "Use accurate asset data and reporting to support smarter planning and investment decisions.",
    },
    {
      icon: "🚀",
      title: "Enable Digital Transformation",
      desc: "Leverage automation, RFID, and centralised systems to modernise asset management processes.",
    },
  ];

  const stats = [
    { num: "10K+", label: "Assets Managed" },
    { num: "99%", label: "Tracking Accuracy" },
    { num: "40%", label: "Cost Reduction" },
    { num: "Real-Time", label: "Visibility" },
  ];

  const faqs = [
    {
      q: "What is asset lifecycle management?",
      a: "Asset lifecycle management covers every stage of an asset's life — from procurement, deployment, and maintenance to depreciation and retirement — giving your organisation complete control and visibility at every step.",
    },
    {
      q: "How does real-time asset tracking work?",
      a: "Our tracking solutions use GPS, RFID, and IoT integrations to monitor asset locations and operational status in real time, accessible via a centralised dashboard.",
    },
    {
      q: "Can these solutions handle compliance requirements?",
      a: "Yes. Our Asset Financial & Compliance Management module provides centralised audit trails, depreciation schedules, and regulatory reporting to keep your organisation compliant.",
    },
    {
      q: "Is RFID technology difficult to implement?",
      a: "Not at all. Our RFID solutions are designed for rapid deployment with minimal disruption. We support you through hardware selection, configuration, and integration with your existing systems.",
    },
    {
      q: "Are the solutions scalable for large enterprises?",
      a: "Absolutely. Our platform is built to scale from SMBs to large enterprises, supporting thousands of assets across multiple sites and geographies.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Asset Management Solutions
          </div>

          <h1 className={styles.heroTitle}>
            Modern Asset Management for
            <br />
            <em>Better Visibility &amp; Control</em>
          </h1>

          <p className={styles.heroDesc}>
            Streamline the way your organisation tracks, manages, and optimises assets
            across their entire lifecycle — reducing losses, ensuring compliance, and
            powering smarter decisions.
          </p>

          <div className={styles.heroActions}>
            <a href="#solutions" className={styles.btnPrimary}>Explore Solutions</a>
          </div>
        </div>

        {/* Stats glass row */}
        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ───────────────────────────────────────── */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <StaggerIn>
            <div className={styles.overviewLeft}>
              <span className={styles.sectionEyebrow}>Why Asset Management Matters</span>
              <h2 className={styles.overviewTitle}>
                Centralise, Track &amp; <em>Optimise</em>
                <br />
                Your Critical Business Assets
              </h2>
              <p className={styles.overviewDesc}>
                Effective asset management gives organisations complete visibility into
                physical and digital assets, helping teams reduce operational downtime,
                improve asset utilisation, and maintain accurate asset records.
              </p>
              <p className={styles.overviewDesc} style={{ marginTop: "1rem" }}>
                Whether you need real-time tracking, lifecycle management, financial
                compliance, inspections, or RFID-powered automation, our solutions are
                designed to support organisations of all sizes across multiple industries.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.overviewRight}>
              {overviewCards.map((card, i) => (
                <div className={styles.overviewCard} key={i}>
                  <h3 className={styles.overviewCardTitle}>{card.title}</h3>
                  <p className={styles.overviewCardDesc}>{card.desc}</p>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── SOLUTIONS GRID ─────────────────────────────────── */}
      <section className={styles.solutions} id="solutions">
        <div className={styles.solutionsInner}>
          <StaggerIn>
            <div className={styles.solutionsHeader}>
              <span className={styles.sectionEyebrow}>Our Asset Management Solutions</span>
              <h2 className={styles.sectionTitle}>
                Specialised Solutions for <em>Every Need</em>
              </h2>
              <p className={styles.sectionDesc}>
                Discover dedicated solutions designed to help businesses manage asset
                lifecycles, tracking, inspections, compliance, and automation more effectively.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.solutionsGrid}>
            {solutions.map((solution, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <a href={solution.href} className={styles.solutionCard}>
                  <div className={styles.solutionIconWrap}>{solution.icon}</div>
                  <h3 className={styles.solutionTitle}>{solution.title}</h3>
                  <p className={styles.solutionDesc}>{solution.description}</p>
                  <span className={styles.solutionLink}>Learn More →</span>
                </a>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── BUSINESS BENEFITS ──────────────────────────────── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <StaggerIn>
            <div className={styles.benefitsLeft}>
              <span className={styles.sectionEyebrow}>Business Benefits</span>
              <h2 className={styles.benefitsTitle}>
                Designed to Support <em>Smarter</em>
                <br />
                Asset Operations
              </h2>
              <p className={styles.benefitsSubdesc}>
                Our platform helps organisations across industries cut losses, boost
                productivity, and make better decisions backed by accurate asset data.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.benefitsRight}>
              {benefitCards.map((card, i) => (
                <div className={styles.benefitCard} key={i}>
                  <div className={styles.benefitCardIcon}>{card.icon}</div>
                  <h3 className={styles.benefitCardTitle}>{card.title}</h3>
                  <p className={styles.benefitCardDesc}>{card.desc}</p>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Common Questions</span>
              <h2 className={styles.sectionTitle}>
                Asset Management Services — <em>FAQs</em>
              </h2>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <div
                  key={i}
                  className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                  >
                    {f.q}
                    <span className={styles.faqIcon} aria-hidden="true">
                      {openFaq === i ? "−" : "+"}
                    </span>
                  </button>
                  <div className={styles.faqAnswer} aria-hidden={openFaq !== i}>
                    <p className={styles.faqAnswerText}>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <StaggerIn>
          <span className={styles.ctaEyebrow}>Start Today</span>
          <h2 className={styles.ctaTitle}>
            Manage Your Assets Smarter,
            <br />
            <em>At Every Stage of the Lifecycle</em>
          </h2>
          <p className={styles.ctaDesc}>
            From real-time tracking and RFID automation to lifecycle management and
            regulatory compliance, CAPCO Consulting Services equips your organisation with
            the tools to manage assets with complete visibility and control.
          </p>
        </StaggerIn>
      </section>

    </div>
  );
}