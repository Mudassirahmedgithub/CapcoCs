// ERPImplementationPage.tsx
// NetSuite / Oracle ERP Implementation Support
// CSS Module: erp.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Settings2,
  BarChart3,
  ShieldCheck,
  RefreshCcw,
  Users2,
  Layers,
  Database,
  ClipboardList,
  CheckCircle2,
  PhoneCall,
  Lightbulb,
  Globe2,
  ArrowRight,
} from "lucide-react";
import styles from "./erp.module.css";
import { ReactNode } from "react";

/* ── Types ─────────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ───────────────────────── */
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

/* ── Stagger animation wrapper ───────────────────────────────── */
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

/* ─────────────────────────────────────────────────────────────── */

export default function ERPImplementationPage() {
  /* Sticky CTA visibility */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const [whyRef, whyVisible] = useInView(0.15);

  /* ── Data ── */
  const services = [
    {
      icon: <Settings2 className="w-5 h-5" />,
      title: "NetSuite Implementation",
      description:
        "End-to-end Oracle NetSuite deployment configured to your business model — from chart of accounts to go-live.",
      points: ["Full lifecycle deployment", "Business-process alignment", "Custom configuration & scripting"],
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Data Migration & Integration",
      description:
        "Seamless migration of legacy ERP, CRM, and financial data into NetSuite with full audit trails and zero data loss.",
      points: ["Legacy system migration", "ETL & data cleansing", "REST/SOAP API integrations"],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Financial Management",
      description:
        "Configure NetSuite's core financials — GL, AR, AP, fixed assets, multi-book accounting, and real-time dashboards.",
      points: ["Multi-currency & multi-entity", "Revenue recognition (ASC 606)", "Automated close processes"],
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Supply Chain & Inventory",
      description:
        "Streamline procurement, warehouse management, and demand planning with NetSuite's built-in supply chain suite.",
      points: ["Demand-driven replenishment", "Multi-location inventory", "Vendor portal & PO automation"],
    },
    {
      icon: <Users2 className="w-5 h-5" />,
      title: "CRM & Customer Center",
      description:
        "Unify sales, customer support, and service delivery on a single platform connected directly to finance and operations.",
      points: ["Quote-to-cash automation", "Case & SLA management", "360° customer visibility"],
    },
    {
      icon: <RefreshCcw className="w-5 h-5" />,
      title: "Ongoing Managed Services",
      description:
        "Post-go-live support, release management, and continuous optimisation to grow your NetSuite investment over time.",
      points: ["Release upgrade management", "SLA-backed helpdesk", "Performance tuning & reporting"],
    },
  ];

  const methodology = [
    {
      step: "01",
      title: "Discovery & Blueprint",
      desc: "We map your current processes, define future-state workflows, and produce a detailed implementation blueprint.",
    },
    {
      step: "02",
      title: "Configuration & Build",
      desc: "Scripting, customisation, workflows, and integrations are built to your approved design with iterative sign-off.",
    },
    {
      step: "03",
      title: "Data Migration & Testing",
      desc: "Legacy data is cleansed, transformed, and validated across UAT cycles before production cut-over.",
    },
    {
      step: "04",
      title: "Training & Go-Live",
      desc: "Role-based training, hyper-care support, and a managed go-live ensure a smooth production launch.",
    },
    {
      step: "05",
      title: "Optimise & Scale",
      desc: "Continuous improvement cycles, new module roll-outs, and quarterly reviews keep your NetSuite fit-for-purpose.",
    },
  ];

  const whyItems = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Oracle NetSuite Partner",
      desc: "Certified implementation partner with deep product expertise across every NetSuite module and vertical.",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Industry-Specific Solutions",
      desc: "Pre-built accelerators for manufacturing, distribution, professional services, SaaS, and non-profit sectors.",
    },
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: "Global Delivery Capability",
      desc: "Multi-country rollouts, multi-currency, multi-tax, and multi-subsidiary support with local compliance built in.",
    },
  ];

  const outcomes = [
    "Reduce month-end close from days to hours",
    "Eliminate manual data entry across departments",
    "Gain real-time visibility into cash flow and inventory",
    "Scale operations without adding headcount",
    "Pass audit with confidence using full transaction trails",
  ];

  const stats = [
    { num: "350+", label: "NetSuite Implementations" },
    { num: "98%", label: "On-Time Go-Lives" },
    { num: "40%", label: "Avg. Efficiency Gain" },
    { num: "24/7", label: "Managed Support" },
  ];

  const modules = [
    { label: "Financial Management", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Order Management", icon: <ClipboardList className="w-5 h-5" /> },
    { label: "Supply Chain", icon: <Layers className="w-5 h-5" /> },
    { label: "CRM", icon: <Users2 className="w-5 h-5" /> },
    { label: "HR & Payroll", icon: <Users2 className="w-5 h-5" /> },
    { label: "Analytics & SuiteAnalytics", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "SuiteCommerce", icon: <Globe2 className="w-5 h-5" /> },
    { label: "Project Management", icon: <Settings2 className="w-5 h-5" /> },
  ];

  const faqs = [
    {
      q: "How long does a NetSuite implementation typically take?",
      a: "Implementation timelines vary by scope. A mid-market single-entity deployment typically runs 3–5 months, while multi-subsidiary or highly customised rollouts can take 6–12 months. We provide a fixed-scope timeline during the Blueprint phase.",
    },
    {
      q: "Can you migrate data from our existing ERP or accounting system?",
      a: "Yes. We have proven migration tooling and methodology for legacy ERPs, Sage, QuickBooks, Microsoft Dynamics, SAP, and custom systems. All data is validated against your NetSuite configuration before cut-over.",
    },
    {
      q: "Do you support NetSuite customisation and SuiteScript development?",
      a: "Absolutely. Our certified SuiteScript 2.x developers build custom workflows, scripts, saved searches, and SuiteApps to extend NetSuite beyond standard functionality wherever business requirements demand it.",
    },
    {
      q: "What industries do you specialise in for NetSuite?",
      a: "We have deep domain expertise in manufacturing, wholesale distribution, professional services, SaaS/software, non-profit, and retail. Each sector comes with an accelerator built on hundreds of real-world implementations.",
    },
    {
      q: "What happens after go-live?",
      a: "We offer SLA-backed managed services covering helpdesk support, quarterly business reviews, release management across NetSuite's bi-annual updates, and proactive optimisation of your configuration as your business grows.",
    },
    {
      q: "How do you handle multi-subsidiary or international rollouts?",
      a: "NetSuite OneWorld is purpose-built for global operations. We configure intercompany transactions, consolidation rules, local tax compliance, and multi-currency accounting across all your legal entities in a single NetSuite account.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to modernise your ERP?</span>
        <button className={styles.stickyCtaBtn}>Book a Free Assessment</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Oracle NetSuite ERP
          </div>

          <h1 className={styles.heroTitle}>
            ERP Implementation
            <br />
            <em>Done Right, First Time</em>
          </h1>

          <p className={styles.heroDesc}>
            Expert NetSuite implementation, integration, and managed services — helping
            fast-growing businesses consolidate their operations on a single cloud ERP platform.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Assessment</button>
            <button className={styles.btnGhost}>View Our Methodology</button>
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

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section className={styles.services}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>Services</span>
          <h2 className={styles.sectionTitle}>
            Everything You Need to
            <br />
            <em>Go Live with Confidence</em>
          </h2>
          <p className={styles.sectionDesc}>
            From initial scoping through to ongoing managed services, we cover every phase
            of your NetSuite journey — so your team can focus on running the business.
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

      {/* ── MODULES BAND ────────────────────────────────────────── */}
      <section className={styles.modulesSection}>
        <div className={styles.modulesInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
              NetSuite Modules
            </span>
            <h2 className={styles.modulesSectionTitle}>
              The Full Suite, Configured
              <br />
              <em>for Your Business</em>
            </h2>
          </StaggerIn>

          <StaggerIn delay={0.12}>
            <p className={styles.modulesDesc}>
              We implement and optimise every NetSuite module — from core financials and
              supply chain to CRM, ecommerce, and workforce management.
            </p>
          </StaggerIn>

          <div className={styles.modulesGrid}>
            {modules.map((m, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.moduleItem}>
                  <div className={styles.moduleItemIcon}>{m.icon}</div>
                  <span className={styles.moduleItemLabel}>{m.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────────── */}
      <section className={styles.whyOuter}>
        <div ref={whyRef} className={styles.whySection}>
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Why Us</span>
            <h2 className={styles.whyTitle}>
              Why Businesses Choose
              <br />
              <em>Our NetSuite Practice</em>
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
                  Real Outcomes, Measured in Business Results
                </h3>
              </div>
              <ul className={styles.benefitsList}>
                {outcomes.map((b, i) => (
                  <li className={styles.benefitItem} key={i}>
                    <span className={styles.benefitCheck}>
                      <CheckCircle2 className="w-4 h-4" />
                    </span>
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

      {/* ── METHODOLOGY ─────────────────────────────────────────── */}
      <section className={styles.methodSection}>
        <StaggerIn>
          <span className={styles.sectionEyebrow}>Our Process</span>
          <h2 className={styles.sectionTitle}>
            A Proven Five-Phase
            <br />
            <em>Implementation Method</em>
          </h2>
          <p className={styles.sectionDesc}>
            Built on hundreds of successful NetSuite go-lives, our methodology
            minimises risk, controls scope, and delivers predictable outcomes.
          </p>
        </StaggerIn>

        <div className={styles.methodSteps}>
          {methodology.map((m, i) => (
            <StaggerIn key={i} delay={i * 0.08}>
              <div className={styles.methodStep}>
                <div className={styles.methodStepNum}>{m.step}</div>
                <div className={styles.methodStepBody}>
                  <h3 className={styles.methodStepTitle}>{m.title}</h3>
                  <p className={styles.methodStepDesc}>{m.desc}</p>
                </div>
                {i < methodology.length - 1 && (
                  <div className={styles.methodArrow}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
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
                Common questions about NetSuite licensing,
                implementation timelines, and our delivery approach.
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

      {/* ── CTA SECTION ─────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Unify Your Business
              <br />
              <em>on NetSuite?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Book a free ERP assessment and let our consultants map out your
              ideal NetSuite implementation roadmap.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>Book a Free Assessment</button>
              <button className={styles.btnGhostLight}>Download ERP Guide</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section className={styles.contactOuter}>
        <div className={styles.contactSection}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Contact</span>
              <h2 className={styles.contactTitle}>
                Talk to an ERP
                <br />
                <em>Implementation Specialist</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your business, your current systems, and your
                growth goals — we'll design the right NetSuite solution for you.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Response within 1 business day
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDotTeal} />
                  Free scoping consultation
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDotTeal} />
                  Fixed-price project options available
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
                  <label className={styles.formLabel}>Company Name</label>
                  <input type="text" placeholder="Acme Corp" className={styles.formInput} />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Company Size</label>
                  <select className={styles.formInput}>
                    <option value="">Select…</option>
                    <option>1–50 employees</option>
                    <option>51–200 employees</option>
                    <option>201–1,000 employees</option>
                    <option>1,000+ employees</option>
                  </select>
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Current ERP / System</label>
                  <input type="text" placeholder="QuickBooks, SAP, Sage…" className={styles.formInput} />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Go-Live Target</label>
                  <input type="text" placeholder="Q3 2025, ASAP…" className={styles.formInput} />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Tell Us About Your Project</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Describe your current challenges, key modules needed, and what success looks like…"
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