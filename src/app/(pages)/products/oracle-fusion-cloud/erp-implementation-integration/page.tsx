"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Settings2,
  BarChart3,
  RefreshCw,
  Shield,
  Layers,
  Plug,
  ArrowRight,
  CheckCircle2,
  Database,
  Cloud,
  Workflow,
  Globe,
  Cpu,
  Lock,
} from "lucide-react";
import { ReactNode } from "react";
import styles from "./erp.module.css";

/* ── Scroll-triggered visibility hook ────────────────────── */
function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setVisible(true); obs.disconnect(); }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Stagger-in wrapper ───────────────────────────────────── */
type StaggerInProps = { children: ReactNode; className?: string; delay?: number };
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

/* ─────────────────────────────────────────────────────────── */

export default function ERPImplementationPage() {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why section in-view */
  const [whyRef, whyVisible] = useInView(0.15);

  /* FAQ state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Data ── */
  const stats = [
    { num: "300+", label: "ERP Projects Delivered" },
    { num: "97%", label: "On-Time Go-Live Rate" },
    { num: "40%", label: "Avg. Process Efficiency Gain" },
    { num: "15+", label: "Industries Served" },
  ];

  const services = [
    {
      icon: <Settings2 className="w-5 h-5" />,
      title: "ERP Implementation",
      description:
        "End-to-end Oracle ERP Cloud deployment — from business process mapping and system design through data migration, user training, and hypercare support.",
      features: [
        "Fit-gap analysis & roadmap planning",
        "Agile-based phased rollouts",
        "Data cleansing & migration",
        "Post go-live hypercare support",
      ],
    },
    {
      icon: <Plug className="w-5 h-5" />,
      title: "ERP Integration",
      description:
        "Seamless integration of Oracle ERP with your existing ecosystem — CRMs, HCMs, third-party logistics, payment gateways, and proprietary platforms.",
      features: [
        "REST & SOAP API orchestration",
        "Oracle Integration Cloud (OIC)",
        "Real-time & batch data sync",
        "Pre-built adapter configuration",
      ],
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "ERP Upgrades & Migration",
      description:
        "Modernise legacy on-premise ERP environments with a structured migration to Oracle Fusion Cloud ERP, preserving business continuity throughout.",
      features: [
        "Legacy system decommissioning",
        "Cloud-readiness assessments",
        "Configuration & extension migration",
        "Zero-downtime cutover strategies",
      ],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Analytics & Reporting",
      description:
        "Unlock actionable insights with Oracle Analytics Cloud embedded in your ERP — enabling real-time dashboards, AI-driven forecasting, and compliance reporting.",
      features: [
        "OTBI & BI Publisher reports",
        "Oracle Analytics Cloud (OAC)",
        "Financial close & consolidation",
        "Regulatory & audit-ready reports",
      ],
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Managed ERP Services",
      description:
        "Ongoing managed services that keep your Oracle ERP environment optimised, secure, and always aligned to the latest quarterly update releases.",
      features: [
        "Quarterly update management",
        "Continuous performance tuning",
        "Security patch administration",
        "24/7 monitoring & incident response",
      ],
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Custom Extensions & Configuraton",
      description:
        "Oracle Visual Builder, APEX, and PaaS extensions that tailor ERP functionality to unique business rules without compromising upgrade paths.",
      features: [
        "Oracle Visual Builder Studio",
        "Personalisation & flexfield config",
        "Workflow & approval automation",
        "Custom report & print layout builds",
      ],
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Assessment",
      desc: "We audit your current landscape, understand business objectives, and define the scope, risks, and success criteria for your ERP programme.",
    },
    {
      num: "02",
      title: "Solution Design",
      desc: "Our architects design the future-state solution — module configuration, integration architecture, data model, and security framework.",
    },
    {
      num: "03",
      title: "Build & Configure",
      desc: "We build and configure the ERP environment in iterative sprints, conducting unit and integration testing at every milestone.",
    },
    {
      num: "04",
      title: "Data Migration",
      desc: "Legacy data is extracted, cleansed, transformed, and validated against Oracle data models before mock and final loads.",
    },
    {
      num: "05",
      title: "UAT & Training",
      desc: "End-users validate the system against real business scenarios. Role-based training ensures adoption from day one.",
    },
    {
      num: "06",
      title: "Go-Live & Hypercare",
      desc: "A controlled cutover followed by intensive hypercare support stabilises operations and resolves any post-production issues quickly.",
    },
  ];

  const integrations = [
    { label: "Oracle Integration Cloud", icon: <Cloud className="w-5 h-5" /> },
    { label: "Salesforce CRM", icon: <Globe className="w-5 h-5" /> },
    { label: "Workday HCM", icon: <Cpu className="w-5 h-5" /> },
    { label: "SAP to Oracle Migration", icon: <RefreshCw className="w-5 h-5" /> },
    { label: "Custom REST / SOAP APIs", icon: <Workflow className="w-5 h-5" /> },
    { label: "Data Warehouse & BI", icon: <Database className="w-5 h-5" /> },
    { label: "eCommerce Platforms", icon: <Layers className="w-5 h-5" /> },
    { label: "Compliance & Security", icon: <Lock className="w-5 h-5" /> },
  ];

  const whyItems = [
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Oracle-Certified Consultants",
      desc: "Our team holds Oracle Cloud certifications across Financials, SCM, HCM, and Integration — backed by hundreds of real-world project hours.",
    },
    {
      icon: <Workflow className="w-5 h-5" />,
      title: "Full-Lifecycle Delivery",
      desc: "From initial discovery through managed services post go-live, we are with you at every stage — no hand-off to a junior bench team.",
    },
    {
      icon: <Shield className="w-5 h-5" />,
      title: "Risk-First Methodology",
      desc: "Our structured risk register, cutover planning, and hypercare protocols are designed to protect your business during every critical transition.",
    },
  ];

  const benefits = [
    "Accelerate financial close cycles by up to 50%",
    "Achieve real-time supply chain visibility",
    "Eliminate manual reconciliation with automated controls",
    "Reduce IT infrastructure costs with cloud ERP",
    "Scale globally with multi-currency, multi-ledger support",
    "Maintain compliance with built-in regulatory frameworks",
  ];

  const faqs = [
    {
      q: "How long does a typical Oracle ERP Cloud implementation take?",
      a: "Duration depends on scope and complexity. A focused single-module implementation (e.g., Oracle Financials Cloud) typically takes 4–6 months. A full-suite multi-module Oracle Fusion rollout across multiple countries may take 12–18 months. We provide a detailed project plan after the discovery phase.",
    },
    {
      q: "Can you integrate Oracle ERP with our existing Salesforce CRM?",
      a: "Yes. We use Oracle Integration Cloud (OIC) and certified Salesforce adapters to create real-time, bi-directional data flows between Oracle ERP and Salesforce — syncing customers, orders, invoices, and revenue recognition data seamlessly.",
    },
    {
      q: "Do you support migration from on-premise Oracle E-Business Suite to Oracle Cloud?",
      a: "Absolutely. We have extensive experience migrating from Oracle EBS R12 and 11i to Oracle Fusion Cloud ERP. Our methodology covers configuration lift, custom extension re-engineering, data migration, and a structured cutover plan that minimises downtime.",
    },
    {
      q: "What Oracle modules do you implement?",
      a: "We cover the full Oracle Cloud suite: Financials (GL, AP, AR, Fixed Assets), Procurement, Project Portfolio Management, Supply Chain Management, Manufacturing, HCM, Payroll, and Oracle Analytics Cloud. We also implement Oracle EPM for planning and consolidation.",
    },
    {
      q: "How do you handle quarterly Oracle Cloud updates?",
      a: "Oracle releases mandatory quarterly updates to all Cloud customers. Our managed services team reviews release notes, tests critical configurations in your test environment, and manages the update process end-to-end — so your team is never caught off-guard.",
    },
    {
      q: "What does your post-go-live support look like?",
      a: "We provide a hypercare period (typically 4–8 weeks) with dedicated on-site and remote support. After hypercare, we offer flexible managed service plans ranging from a small retainer for break-fix to a full application management service (AMS) arrangement.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ────────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.stickyVisible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to modernise your ERP?</span>
        <button className={styles.stickyCtaBtn}>Get a Free Assessment</button>
      </div>

      {/* ── HERO ──────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Oracle ERP Implementation &amp; Integration
          </div>

          <h1 className={styles.heroTitle}>
            Transform Your Enterprise
            <br />
            <em>with Oracle ERP Cloud</em>
          </h1>

          <p className={styles.heroDesc}>
            Expert Oracle ERP implementation, integration, and managed services — designed
            to unify your finance, supply chain, and operations on a single intelligent platform.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Schedule a Free Consultation</button>
            <button className={styles.btnGhost}>Explore Our Services</button>
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

      {/* ── OVERVIEW ──────────────────────────────────────────────── */}
      <section className={styles.overview}>
        <StaggerIn>
          <div className={styles.overviewInner}>
            <span className={styles.sectionEyebrow}>What We Do</span>
            <h2 className={styles.overviewTitle}>
              Oracle ERP Expertise <em>From Day One to Day Infinity</em>
            </h2>
            <p className={styles.overviewBody}>
              Oracle ERP Cloud (Fusion) gives enterprises a unified foundation for financials,
              procurement, project management, supply chain, and human capital management.
              But the real value is unlocked through precise implementation, deep integrations,
              and continuous optimisation — and that is exactly what we deliver.
            </p>
            <p className={styles.overviewBody} style={{ marginTop: "1.25rem" }}>
              Our certified Oracle consultants bring together best-practice methodology, hands-on
              configuration experience, and rigorous change management to make your ERP programme
              a business transformation — not just a technology project.
            </p>
          </div>
        </StaggerIn>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────── */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Services</span>
              <h2 className={styles.sectionTitle}>
                End-to-End Oracle ERP <em>Services</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to implement, integrate, and evolve your Oracle ERP investment.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{s.icon}</div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.description}</p>
                  <ul className={styles.serviceFeatures}>
                    {s.features.map((f, j) => (
                      <li className={styles.serviceFeature} key={j}>{f}</li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────── */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Methodology</span>
              <h2 className={styles.sectionTitle}>
                Our Proven <em>Implementation Methodology</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                A structured, low-risk delivery framework built on Oracle's AIM methodology
                and modern agile practices.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.processStep}>
                  <span className={styles.processNum}>{step.num}</span>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ──────────────────────────────────────────── */}
      <section className={styles.integrations}>
        <div className={styles.integrationsInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Integrations
              </span>
              <h2 className={styles.integrationsTitle}>
                Connect Oracle ERP
                <br />
                <em>with Your Entire Ecosystem</em>
              </h2>
            </div>
          </StaggerIn>
          <StaggerIn delay={0.1}>
            <p className={styles.integrationsSubDesc}>
              We architect robust integration layers that connect Oracle ERP Cloud with your CRM,
              HCM, logistics platforms, and proprietary applications — using Oracle Integration
              Cloud, REST APIs, and purpose-built adapters.
            </p>
          </StaggerIn>

          <div className={styles.integrationsGrid}>
            {integrations.map((item, i) => (
              <StaggerIn key={i} delay={i * 0.05}>
                <div className={styles.integrationItem}>
                  <div className={styles.integrationIcon}>{item.icon}</div>
                  <span className={styles.integrationLabel}>{item.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ────────────────────────────────────────────────── */}
      <section className={styles.whySection}>
        <div
          ref={whyRef}
          className={styles.whyInner}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.whyVisible : ""}`}>
            <span className={styles.sectionEyebrow}>Why Choose Us</span>
            <h2 className={styles.whyTitle}>
              Why Enterprises Trust
              <br />
              <em>Our ERP Practice</em>
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

          <div className={`${styles.whyRight} ${whyVisible ? styles.whyVisible : ""}`}>
            <div className={styles.benefitsCard}>
              <div className={styles.benefitsCardHead}>
                <h3 className={styles.benefitsCardTitle}>
                  What Your Business Gains with Oracle ERP Cloud
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
          <StaggerIn>
            <div className={styles.faqLeft}>
              <span className={styles.sectionEyebrow}>FAQ</span>
              <h2 className={styles.faqTitle}>
                Frequently Asked
                <br />
                <em>Questions</em>
              </h2>
              <p className={styles.faqSub}>
                Everything you need to know about Oracle ERP implementation,
                integration, and support.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <div
                  className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}
                  key={i}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {f.q}
                    <span className={styles.faqIcon}>+</span>
                  </button>
                  <div className={styles.faqAnswerWrap}>
                    <p className={styles.faqAnswer}>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Modernise Your
              <br />
              <em>Enterprise with Oracle ERP?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Talk to our certified Oracle consultants about your business goals —
              we will design the right ERP strategy for you.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnPrimary}>
                Book a Free Discovery Call
                <ArrowRight className="w-4 h-4" style={{ display: "inline", marginLeft: "0.5rem" }} />
              </button>
              <button className={styles.ctaBtnGhost}>View Case Studies</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ───────────────────────────────────────────────── */}
      <section className={styles.contactWrapper}>
        <div className={styles.contactSection}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Contact</span>
              <h2 className={styles.contactTitle}>
                Talk to Our
                <br />
                <em>ERP Consultants</em>
              </h2>
              <p className={styles.contactDesc}>
                Share your project goals and we will connect you with the right
                Oracle specialist within one business day.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Response within 24 business hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDotTeal} />
                  Free initial consultation included
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
                  <label className={styles.formLabel}>Full Name</label>
                  <input type="text" placeholder="Jane Smith" className={styles.formInput} />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email</label>
                  <input type="email" placeholder="jane@company.com" className={styles.formInput} />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Company</label>
                  <input type="text" placeholder="Acme Corporation" className={styles.formInput} />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Service Interest</label>
                  <select className={styles.formInput} defaultValue="">
                    <option value="" disabled>Select a service…</option>
                    <option>ERP Implementation</option>
                    <option>ERP Integration</option>
                    <option>ERP Upgrade / Migration</option>
                    <option>Analytics &amp; Reporting</option>
                    <option>Managed ERP Services</option>
                    <option>Custom Extensions</option>
                  </select>
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Project Details</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Tell us about your current ERP landscape, timeline, and goals..."
                />
              </div>
              <button className={styles.formSubmit}>Submit Enquiry</button>
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}