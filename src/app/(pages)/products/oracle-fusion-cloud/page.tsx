// app/oracle-fusion-cloud/page.tsx
// Oracle Fusion Cloud hub page
// CSS Module: oracle-fusion.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import styles from "./oracle.module.css";

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

export default function OracleFusionCloudPage() {
  /* ── Data ── */
  const solutions = [
    {
      label: "Financial Management",
      icon: "💰",
      description:
        "Enterprise financial planning, accounting, budgeting, and reporting — unified in one intelligent cloud platform for complete financial visibility.",
      href: "/services/oracle-fusion-cloud/financial-management",
    },
    {
      label: "Supply Chain & Operations",
      icon: "🏭",
      description:
        "Integrated supply chain, procurement, inventory, and production operations that adapt to market demands and drive operational excellence.",
      href: "/services/oracle-fusion-cloud/supply-chain-operations",
    },
    {
      label: "Human Capital Management (HCM)",
      icon: "👥",
      description:
        "Modern HR, workforce management, recruitment, and employee engagement tools built to attract, develop, and retain top talent.",
      href: "/services/oracle-fusion-cloud/human-capital-management",
    },
    {
      label: "Project & Performance Management",
      icon: "📊",
      description:
        "Project execution, enterprise performance management, and resource planning aligned to organisational goals and strategic outcomes.",
      href: "/services/oracle-fusion-cloud/project-performance-management",
    },
    {
      label: "Customer Experience (CX)",
      icon: "🤝",
      description:
        "Unified customer engagement, sales, and service management solutions that build lasting relationships and accelerate revenue growth.",
      href: "/services/oracle-fusion-cloud/customer-experience",
    },
    {
      label: "AI Analytics & Reporting",
      icon: "🧠",
      description:
        "AI-powered dashboards, KPI monitoring, analytics, and business insights that transform raw data into confident, real-time decisions.",
      href: "/services/oracle-fusion-cloud/ai-analytics-reporting",
    },
    {
      label: "ERP Implementation & Integration",
      icon: "⚙️",
      description:
        "Oracle Fusion ERP deployment, customisation, migration, and ongoing support services to maximise your platform investment.",
      href: "/services/oracle-fusion-cloud/erp-implementation-integration",
    },
  ];

  const overviewCards = [
    {
      title: "Unified Cloud Platform",
      desc: "One integrated suite covering finance, HR, supply chain, and CX — eliminating silos across your enterprise.",
    },
    {
      title: "AI-Driven Intelligence",
      desc: "Embedded AI and machine learning surface insights, automate routine tasks, and power smarter decisions.",
    },
    {
      title: "Enterprise Scalability",
      desc: "Designed to grow with your organisation — from regional deployments to global, multi-entity operations.",
    },
    {
      title: "Continuous Innovation",
      desc: "Oracle's quarterly updates ensure your platform evolves with industry standards without costly upgrades.",
    },
  ];

  const benefitCards = [
    {
      icon: "🔗",
      title: "Break Down Silos",
      desc: "Connect finance, HR, operations, and CX on a single platform to eliminate data fragmentation and duplicate processes.",
    },
    {
      icon: "⚡",
      title: "Accelerate Operations",
      desc: "Automate manual workflows and approval chains across departments, freeing teams to focus on high-value work.",
    },
    {
      icon: "📈",
      title: "Improve Financial Control",
      desc: "Gain real-time visibility into costs, budgets, and compliance obligations — enabling faster, more accurate reporting.",
    },
    {
      icon: "🌐",
      title: "Support Global Growth",
      desc: "Multi-currency, multi-language, and multi-entity capabilities support expansion into new markets with ease.",
    },
  ];

  const stats = [
    { num: "7+", label: "Cloud Modules" },
    { num: "99.9%", label: "Uptime SLA" },
    { num: "150+", label: "Countries Supported" },
    { num: "Real-Time", label: "AI Insights" },
  ];

  const faqs = [
    {
      q: "What is Oracle Fusion Cloud?",
      a: "Oracle Fusion Cloud is a suite of integrated, AI-powered enterprise applications covering ERP, HCM, SCM, CX, and analytics. It runs natively in the cloud, enabling organisations to modernise operations, reduce IT overhead, and access continuous innovation.",
    },
    {
      q: "How long does an Oracle Fusion Cloud implementation take?",
      a: "Implementation timelines vary based on scope and complexity. A focused module deployment (e.g. Financials or HCM) typically takes 3–6 months. Full enterprise rollouts spanning multiple modules and regions can take 9–18 months, depending on data migration complexity and customisation requirements.",
    },
    {
      q: "Can Oracle Fusion Cloud integrate with our existing systems?",
      a: "Yes. Oracle Fusion Cloud offers robust REST APIs, pre-built connectors, and Oracle Integration Cloud (OIC) to connect with legacy ERP systems, third-party SaaS applications, and on-premises databases with minimal disruption.",
    },
    {
      q: "What industries does Oracle Fusion Cloud serve?",
      a: "Oracle Fusion Cloud is used across manufacturing, retail, financial services, healthcare, public sector, utilities, and professional services. Its configurable architecture accommodates industry-specific processes and compliance requirements.",
    },
    {
      q: "How does your team support post-implementation?",
      a: "We provide end-to-end post-go-live support including hypercare periods, managed services, continuous optimisation, user training, and guidance on adopting new Oracle quarterly release features.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Oracle Fusion Cloud Solutions
          </div>

          <h1 className={styles.heroTitle}>
            Enterprise Transformation
            <br />
            <em>Powered by Oracle Fusion Cloud</em>
          </h1>

          <p className={styles.heroDesc}>
            Unify your finance, HR, supply chain, and customer experience on a single
            AI-driven cloud platform — accelerating growth, improving visibility, and
            driving smarter decisions across your organisation.
          </p>

          <div className={styles.heroActions}>
            <a href="#solutions" className={styles.btnPrimary}>Explore Modules</a>
            <a href="/contact" className={styles.btnGhost}>Book a Consultation</a>
          </div>
        </div>

        {/* Stats glass strip */}
        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ────────────────────────────────────────────── */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <StaggerIn>
            <div className={styles.overviewLeft}>
              <span className={styles.sectionEyebrow}>Why Oracle Fusion Cloud</span>
              <h2 className={styles.overviewTitle}>
                One Intelligent Platform for
                <br />
                <em>Every Enterprise Function</em>
              </h2>
              <p className={styles.overviewDesc}>
                Oracle Fusion Cloud integrates your most critical business functions into
                a single, AI-powered cloud suite — replacing fragmented systems with
                unified data, streamlined processes, and real-time intelligence.
              </p>
              <p className={styles.overviewDesc} style={{ marginTop: "1rem" }}>
                Whether you are modernising legacy ERP, scaling HR operations globally,
                or transforming your supply chain, Oracle Fusion Cloud provides the depth
                and breadth to meet you where you are and take you where you need to go.
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

      {/* ── SOLUTIONS GRID ──────────────────────────────────────── */}
      <section className={styles.solutions} id="solutions">
        <div className={styles.solutionsInner}>
          <StaggerIn>
            <div className={styles.solutionsHeader}>
              <span className={styles.sectionEyebrow}>Oracle Fusion Cloud Modules</span>
              <h2 className={styles.sectionTitle}>
                Integrated Modules for <em>Every Need</em>
              </h2>
              <p className={styles.sectionDesc}>
                Explore purpose-built cloud applications that connect your enterprise,
                automate workflows, and surface the intelligence that drives better outcomes.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.solutionsGrid}>
            {solutions.map((solution, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <a href={solution.href} className={styles.solutionCard}>
                  <div className={styles.solutionIconWrap}>{solution.icon}</div>
                  <h3 className={styles.solutionTitle}>{solution.label}</h3>
                  <p className={styles.solutionDesc}>{solution.description}</p>
                  <span className={styles.solutionLink}>Learn More →</span>
                </a>
              </StaggerIn>
            ))}
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

      {/* ── BUSINESS BENEFITS ───────────────────────────────────── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <StaggerIn>
            <div className={styles.benefitsLeft}>
              <span className={styles.sectionEyebrow}>Business Benefits</span>
              <h2 className={styles.benefitsTitle}>
                Built to Deliver <em>Real</em>
                <br />
                Enterprise Impact
              </h2>
              <p className={styles.benefitsSubdesc}>
                Oracle Fusion Cloud goes beyond software — it is a strategic enabler
                that connects your people, data, and processes to drive measurable
                business outcomes across the enterprise.
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

      {/* ── CTA BAND ────────────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <StaggerIn>
          <div className={styles.ctaBandInner}>
            <h2 className={styles.ctaBandTitle}>
              Ready to Modernise Your Enterprise?
            </h2>
            <p className={styles.ctaBandDesc}>
              Our Oracle-certified team guides you through every stage — from discovery
              and design to deployment, training, and continuous optimisation.
            </p>
            <div>
              <a href="/contact" className={styles.ctaBandBtn}>Request a Demo</a>
              <a href="#solutions" className={styles.ctaBandBtnOutline}>Explore Modules</a>
            </div>
          </div>
        </StaggerIn>
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
                Everything you need to know about implementing Oracle Fusion Cloud
                across your organisation with our expert team.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <details className={styles.faqItem} key={i}>
                  <summary>{f.q}</summary>
                  <p className={styles.faqAnswer}>{f.a}</p>
                </details>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}