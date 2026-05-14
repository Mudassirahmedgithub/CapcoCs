// AssetInspectionPage.tsx
// CSS Module: asset.module.css  |  Globals: globals.css
// Brand-consistent with globals.css tokens (DM Sans + DM Serif Display, teal palette)

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  ScanSearch,
  ShieldCheck,
  Activity,
  Cpu,
  Radio,
  Layers,
  AlertTriangle,
  BarChart3,
  Wrench,
  CheckCircle2,
  Zap,
  Globe,
  Eye,
  Database,
} from "lucide-react";
import styles from "./asset.module.css";
import { ReactNode } from "react";

/* ── Types ─────────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ──────────────────────── */
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

/* ── Stagger wrapper ────────────────────────────────────────── */
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

export default function AssetInspectionPage() {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 450);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why section */
  const [whyRef, whyVisible] = useInView(0.15);

  /* FAQ open state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Data ── */
  const stats = [
    { num: "60%", label: "Reduction in O&M Costs" },
    { num: "30min", label: "vs 2-Week Manual Reviews" },
    { num: "99.4%", label: "Defect Detection Accuracy" },
    { num: "24/7", label: "Autonomous Monitoring" },
  ];

  const services = [
    {
      icon: <Eye className="w-5 h-5" />,
      title: "AI Visual Inspection",
      description:
        "Computer vision models analyse RGB and thermal imagery captured by fixed cameras, drones, or mobile devices to detect surface defects, corrosion, and anomalies in real time.",
      points: ["Corrosion & crack detection", "Thermal profiling", "Automated defect alerting"],
    },
    {
      icon: <Radio className="w-5 h-5" />,
      title: "Drone & Robotic Inspection",
      description:
        "Integrate autonomous UAVs and ground robots into your inspection program. Our platform ingests data from any hardware source and converts imagery into time-series insights.",
      points: ["Hardware-agnostic integration", "Geo-tagged defect mapping", "Remote mission control"],
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "Predictive Maintenance",
      description:
        "Machine learning models continuously monitor asset health signals and predict failure before it occurs — enabling condition-based maintenance scheduling and zero unplanned downtime.",
      points: ["Real-time anomaly scoring", "Failure probability forecasting", "Automated work-order creation"],
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Digital Twin Integration",
      description:
        "Link inspection data to live digital twins for full asset lifecycle visibility. Overlay inspection results with GIS, engineering drawings, and historical maintenance records.",
      points: ["360° asset context", "Risk-based inspection planning", "Compliance-ready audit trails"],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Inspection Analytics Dashboard",
      description:
        "A unified analytics layer that aggregates inspection results across your entire asset fleet, highlights risk hotspots, and surfaces actionable KPIs for operations teams.",
      points: ["Fleet-wide risk dashboards", "Trend analysis & reporting", "Custom KPI configuration"],
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Compliance & Audit Management",
      description:
        "Digitise inspection checklists and automate compliance workflows to meet ISO 55001, API 510/570, and other regulatory frameworks — reducing audit prep time by up to 80%.",
      points: ["Regulatory framework mapping", "Automated checklist enforcement", "Immutable audit records"],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Asset Discovery & Baseline",
      desc: "We catalogue your asset register, classify criticality tiers, and establish a baseline condition model from existing inspection records and imagery.",
    },
    {
      step: "02",
      title: "Sensor & Data Integration",
      desc: "Connect cameras, drones, IoT sensors, and existing CMMS/EAM platforms via our open API layer — no rip-and-replace required.",
    },
    {
      step: "03",
      title: "AI Model Training & Validation",
      desc: "Purpose-built computer vision and ML models are trained on your specific asset types, environments, and defect classes, then validated against ground-truth inspections.",
    },
    {
      step: "04",
      title: "Deployment & Live Monitoring",
      desc: "Autonomous inspection runs are launched across your fleet. Real-time alerts, reports, and work orders are generated and routed to the right teams instantly.",
    },
  ];

  const industries = [
    { label: "Oil & Gas", icon: <Zap className="w-5 h-5" /> },
    { label: "Power Generation", icon: <Activity className="w-5 h-5" /> },
    { label: "Manufacturing", icon: <Cpu className="w-5 h-5" /> },
    { label: "Utilities & Grid", icon: <Radio className="w-5 h-5" /> },
    { label: "Petrochemicals", icon: <Database className="w-5 h-5" /> },
    { label: "Mining", icon: <Globe className="w-5 h-5" /> },
  ];

  const whyItems = [
    {
      icon: <ScanSearch className="w-5 h-5" />,
      title: "End-to-End Platform",
      desc: "From data capture to AI analysis to maintenance dispatch — one platform, no integration headaches.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Enterprise-Grade Security",
      desc: "SOC 2 compliant, air-gapped deployment options, and full data residency control for regulated industries.",
    },
    {
      icon: <Wrench className="w-5 h-5" />,
      title: "Industry-Specific Models",
      desc: "Pre-trained computer vision models for oil & gas, power, and manufacturing — not generic classifiers.",
    },
  ];

  const benefits = [
    "Reduce O&M costs by up to 60%",
    "Cut inspection cycle time from weeks to hours",
    "Eliminate hazardous manual inspections",
    "Achieve full regulatory compliance",
    "Extend asset lifespan with predictive care",
    "Centralise data across your entire fleet",
  ];

  const faqs = [
    {
      q: "What types of assets can your platform inspect?",
      a: "Our platform is industry-agnostic and has been deployed across pipelines, pressure vessels, transformers, wind turbines, transmission lines, manufacturing equipment, and offshore platforms. If a camera can see it, our AI can analyse it.",
    },
    {
      q: "Do we need to replace our existing CMMS or EAM system?",
      a: "No. Our platform integrates with existing systems including IBM Maximo, SAP PM, Infor EAM, and ServiceNow via standard REST APIs. Inspection insights flow directly into your existing maintenance workflows.",
    },
    {
      q: "How accurate is the AI defect detection?",
      a: "Our production models achieve 99.4% defect detection accuracy on trained asset classes, validated against expert inspector ground truth. Models continuously improve as new inspection data is ingested.",
    },
    {
      q: "Can we deploy on-premise or in a private cloud?",
      a: "Yes. We offer cloud SaaS, private cloud, and fully air-gapped on-premise deployments to meet data residency and security requirements in regulated industries.",
    },
    {
      q: "How long does implementation take?",
      a: "A standard deployment with API integrations and model training typically completes in 6–10 weeks. Proof-of-concept engagements covering a single asset class can be live in under 4 weeks.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.stickyVisible : ""}`}>
        <span className={styles.stickyCtaText}>See how we transform asset inspections</span>
        <button className={styles.stickyCtaBtn}>Request a Demo</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroGlowSecondary} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            AI-Powered Asset Inspection
          </div>

          <h1 className={styles.heroTitle}>
            Inspect Smarter.
            <br />
            <em>Operate Safer.</em>
          </h1>

          <p className={styles.heroDesc}>
            Autonomous computer vision and machine learning that transforms manual,
            hazardous asset inspections into real-time, data-driven intelligence —
            across your entire fleet.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Assessment</button>
            <button className={styles.btnGhost}>See How It Works</button>
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

      {/* ── OVERVIEW ───────────────────────────────────────────── */}
      <section className={styles.overview}>
        <StaggerIn>
          <div className={styles.overviewInner}>
            <span className={styles.sectionEyebrow}>The Problem</span>
            <h2 className={styles.overviewTitle}>
              Traditional Inspections Are <em>Broken</em>
            </h2>
            <p className={styles.overviewDesc}>
              Manual inspection is resource-intensive, dangerous in confined or elevated spaces,
              and creates bottlenecks that delay maintenance decisions. Sensors miss surface
              defects. Spreadsheets lose data. And your best inspectors are spending weeks
              reviewing images that AI can assess in minutes.
            </p>
            <div className={styles.overviewPillRow}>
              <span className={styles.overviewPill}><AlertTriangle className="w-4 h-4" /> Safety Risks</span>
              <span className={styles.overviewPill}><CheckCircle2 className="w-4 h-4" /> Data Silos</span>
              <span className={styles.overviewPill}><Activity className="w-4 h-4" /> Slow Turnaround</span>
              <span className={styles.overviewPill}><Wrench className="w-4 h-4" /> Reactive Maintenance</span>
            </div>
          </div>
        </StaggerIn>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section className={styles.services}>
        <StaggerIn>
          <span className={styles.sectionEyebrow}>What We Do</span>
          <h2 className={styles.sectionTitle}>
            Full-Spectrum <em>Inspection Intelligence</em>
          </h2>
          <p className={styles.sectionDesc}>
            From visual AI to predictive analytics, our platform covers every stage of the
            asset inspection lifecycle — cutting costs, improving safety, and delivering
            actionable insights faster than any human-only process.
          </p>
        </StaggerIn>

        <div className={styles.servicesGrid}>
          {services.map((s, i) => (
            <StaggerIn key={i} delay={i * 0.07}>
              <div className={styles.serviceCard}>
                <div className={styles.cardAccent} />
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

      {/* ── INDUSTRIES ─────────────────────────────────────────── */}
      <section className={styles.industrySection}>
        <div className={styles.industryInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
              Industries
            </span>
            <h2 className={styles.industryTitle}>
              Built for the
              <br />
              <em>World's Hardest Environments</em>
            </h2>
          </StaggerIn>
          <div className={styles.industryGrid}>
            {industries.map((ind, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.industryItem}>
                  <div className={styles.industryIcon}>{ind.icon}</div>
                  <span className={styles.industryLabel}>{ind.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────── */}
      <section className={styles.processSection}>
        <StaggerIn>
          <span className={styles.sectionEyebrow}>How It Works</span>
          <h2 className={styles.sectionTitle}>
            Live in Weeks,
            <br />
            <em>Not Years</em>
          </h2>
          <p className={styles.sectionDesc}>
            Our structured deployment methodology gets your first autonomous inspection
            running within weeks — without disrupting existing operations.
          </p>
        </StaggerIn>
        <div className={styles.processGrid}>
          {process.map((p, i) => (
            <StaggerIn key={i} delay={i * 0.1}>
              <div className={styles.processCard}>
                <span className={styles.processStep}>{p.step}</span>
                <h3 className={styles.processTitle}>{p.title}</h3>
                <p className={styles.processDesc}>{p.desc}</p>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────────── */}
      <section className={styles.whySection}>
        <div
          ref={whyRef}
          className={styles.whyInner}
        >
          <div
            className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}
            style={{ transition: "opacity 0.7s 0s cubic-bezier(0.22,1,0.36,1), transform 0.7s 0s cubic-bezier(0.22,1,0.36,1)" }}
          >
            <span className={styles.sectionEyebrow}>Why Choose Us</span>
            <h2 className={styles.whyTitle}>
              Why Leading Industrial
              <br />
              <em>Operators Trust Us</em>
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

          <div
            className={`${styles.whyRight} ${whyVisible ? styles.visible : ""}`}
            style={{ transition: "opacity 0.7s 0.15s cubic-bezier(0.22,1,0.36,1), transform 0.7s 0.15s cubic-bezier(0.22,1,0.36,1)" }}
          >
            <div className={styles.benefitsCard}>
              <div className={styles.benefitsCardHead}>
                <h3 className={styles.benefitsCardTitle}>
                  What You Get with Autonomous Inspection
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

      {/* ── STATS BAND ─────────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── FAQ ────────────────────────────────────────────────── */}
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
                Everything you need to know about deploying autonomous
                asset inspection at enterprise scale.
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

      {/* ── CTA SECTION ────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Modernise Your
              <br />
              <em>Asset Inspection Programme?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Join leading industrial operators who have replaced manual inspection
              bottlenecks with autonomous AI intelligence. Start with a free assessment.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnPrimary}>Get a Free Assessment</button>
              <button className={styles.ctaBtnGhost}>View Case Studies</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <StaggerIn>
          <div className={styles.contactLeft}>
            <span className={styles.sectionEyebrow}>Contact</span>
            <h2 className={styles.contactTitle}>
              Talk to an
              <br />
              <em>Inspection Expert</em>
            </h2>
            <p className={styles.contactDesc}>
              Tell us about your asset fleet, current inspection challenges, and we'll
              design a solution that fits your operations.
            </p>
            <div className={styles.contactMeta}>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                Responding within 24 hours
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaBullet} />
                Free initial consultation included
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaBullet} />
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
                <input type="text" placeholder="Acme Energy Ltd." className={styles.formInput} />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Industry</label>
                <select className={styles.formInput}>
                  <option value="">Select industry</option>
                  <option>Oil &amp; Gas</option>
                  <option>Power Generation</option>
                  <option>Manufacturing</option>
                  <option>Utilities</option>
                  <option>Mining</option>
                  <option>Petrochemicals</option>
                  <option>Other</option>
                </select>
              </div>
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Tell us about your inspection challenges</label>
              <textarea
                className={styles.formTextarea}
                placeholder="Describe your asset types, fleet size, current inspection methods, and key pain points..."
              />
            </div>
            <button className={styles.formSubmit}>Submit Enquiry</button>
          </div>
        </StaggerIn>
      </section>

    </div>
  );
}