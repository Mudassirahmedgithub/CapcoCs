// AssetWorkRegistryPage.tsx
// Asset Work Registry — Premium page
// CSS Module: asset.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FileText,
  Database,
  Search,
  ShieldCheck,
  BarChart2,
  RefreshCw,
  Tag,
  MapPin,
  Layers,
  Clock,
  Link2,
  Cpu,
  CheckCircle2,
  Lightbulb,
  AlertTriangle,
  Globe,
} from "lucide-react";
import styles from "./asset.module.css";
import { ReactNode } from "react";

/* ── Types ──────────────────────────────────────────────────── */
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
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition: `opacity 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */

export default function AssetWorkRegistryPage() {
  /* Sticky CTA visibility */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 450);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* FAQ open state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Form state */
  const [submitted, setSubmitted] = useState(false);

  /* In-view for why section */
  const [whyRef, whyVisible] = useInView(0.15);

  /* ── Data ── */
  const stats = [
    { num: "10K+", label: "Assets Registered" },
    { num: "99.9%", label: "Data Accuracy" },
    { num: "40%", label: "Cost Savings" },
    { num: "Real‑Time", label: "Tracking" },
  ];

  const services = [
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Fixed Asset Register",
      desc: "Maintain a comprehensive record of all physical assets — machinery, equipment, vehicles, and infrastructure — with full lifecycle visibility.",
      points: ["Acquisition & disposal tracking", "Depreciation management", "Audit-ready records"],
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Digital Asset Registry",
      desc: "Centrally manage intangible assets including software licenses, IP, patents, trademarks, and digital media — all in a single, searchable database.",
      points: ["License expiry alerts", "IP compliance tracking", "Software inventory control"],
    },
    {
      icon: <Tag className="w-5 h-5" />,
      title: "Tagging & Identification",
      desc: "Assign unique identifiers to every asset through barcodes, QR codes, and RFID tags for seamless physical and digital tracking.",
      points: ["Barcode & QR code support", "RFID integration", "Mobile scan-and-record"],
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Lifecycle Management",
      desc: "Track every stage of an asset's life — from procurement and commissioning to maintenance, transfer, and decommissioning.",
      points: ["Planned maintenance scheduling", "Condition monitoring", "End-of-life planning"],
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      title: "Reporting & Analytics",
      desc: "Generate detailed reports on asset performance, utilisation, cost trends, and compliance for informed capital planning decisions.",
      points: ["Custom dashboards", "Depreciation forecasting", "Compliance reporting"],
    },
    {
      icon: <Link2 className="w-5 h-5" />,
      title: "System Integration",
      desc: "Connect your asset registry with ERP, CMMS, finance, and procurement systems to eliminate data silos and streamline workflows.",
      points: ["ERP & CMMS sync", "REST API access", "Finance system integration"],
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Asset Discovery",
      desc: "Identify and catalogue all assets via physical audit or data import.",
    },
    {
      num: "02",
      title: "Data Capture",
      desc: "Record attributes — location, value, condition, serial numbers — in a standardised format.",
    },
    {
      num: "03",
      title: "Tagging",
      desc: "Assign unique IDs with barcodes, QR codes, or RFID tags to each asset.",
    },
    {
      num: "04",
      title: "Registry Setup",
      desc: "Onboard all data into a centralised, cloud-based registry with role-based access.",
    },
    {
      num: "05",
      title: "Ongoing Audit",
      desc: "Schedule regular verification cycles to keep records accurate and compliant.",
    },
  ];

  const techFields = [
    { icon: <Tag className="w-4 h-4" />, label: "Asset ID & Serial No." },
    { icon: <MapPin className="w-4 h-4" />, label: "Physical Location" },
    { icon: <Clock className="w-4 h-4" />, label: "Purchase & Warranty Date" },
    { icon: <BarChart2 className="w-4 h-4" />, label: "Depreciation Method" },
    { icon: <RefreshCw className="w-4 h-4" />, label: "Maintenance History" },
    { icon: <ShieldCheck className="w-4 h-4" />, label: "Compliance Status" },
    { icon: <Layers className="w-4 h-4" />, label: "Category & Hierarchy" },
    { icon: <Cpu className="w-4 h-4" />, label: "Condition & Lifecycle Stage" },
  ];

  const whyItems = [
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Compliance-Ready Architecture",
      desc: "Built to meet audit standards and regulatory requirements with tamper-proof logs and role-based access controls.",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Eliminate Ghost Assets",
      desc: "Research shows 12–25% of assets in typical registers are ghost assets. Our verification workflow surfaces and removes them.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "Mobile-First Field Operations",
      desc: "Teams can scan, update, and verify assets on-site using any mobile device, keeping records accurate in real time.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Proactive Risk Management",
      desc: "Automated alerts for warranty expiry, maintenance overdue, and license renewal prevent costly surprises.",
    },
  ];

  const benefits = [
    "Eliminate ghost assets and reduce tax overpayment",
    "Accurate depreciation for financial statements",
    "Streamlined external audits and regulatory compliance",
    "Data-driven capital expenditure planning",
    "Reduced unplanned downtime via maintenance scheduling",
  ];

  const statsSection = [
    { num: "25", unit: "%", label: "Average Ghost Asset Rate Eliminated" },
    { num: "40", unit: "%", label: "Reduction in Maintenance Costs" },
    { num: "3×", unit: "", label: "Faster Audit Preparation" },
    { num: "98", unit: "%", label: "Client Retention Rate" },
  ];

  const faqs = [
    {
      q: "What is an Asset Work Registry?",
      a: "An Asset Work Registry is a centralised, structured system that records and tracks all assets an organisation owns or manages — covering physical, IT, and digital assets across their entire lifecycle.",
    },
    {
      q: "Which asset types can be registered?",
      a: "The registry supports fixed assets (machinery, buildings, vehicles), IT assets (hardware, software, licenses), and digital assets (intellectual property, media, patents). Custom categories are also supported.",
    },
    {
      q: "How does the platform handle ghost assets?",
      a: "Our verification workflow cross-checks registered records against physical audits, flagging discrepancies. Ghost assets — items recorded but no longer existing — are identified and processed for write-off, ensuring your books reflect reality.",
    },
    {
      q: "Can the registry integrate with our existing ERP system?",
      a: "Yes. We provide native integrations and a REST API for connecting with major ERP systems (SAP, Oracle, Microsoft Dynamics), CMMS platforms, and finance tools to eliminate duplicate data entry.",
    },
    {
      q: "How secure is the data stored in the registry?",
      a: "The platform uses enterprise-grade security including data encryption at rest and in transit, role-based access control, full audit trails, and compliance with relevant data protection regulations.",
    },
    {
      q: "Is mobile access supported for field teams?",
      a: "Absolutely. Field engineers and auditors can scan barcodes and QR codes, update asset status, and photograph assets directly from any mobile device — even in low-connectivity environments.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ──────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to bring order to your assets?</span>
        <button className={styles.stickyCtaBtn}>Request a Demo</button>
      </div>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Asset Work Registry
          </div>

          <h1 className={styles.heroTitle}>
            One Registry for
            <br />
            <em>Every Asset You Own</em>
          </h1>

          <p className={styles.heroDesc}>
            A centralised, audit-ready platform to register, track, and manage
            fixed, digital, and IT assets across their entire lifecycle — from
            acquisition to retirement.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
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

      {/* ── OVERVIEW ────────────────────────────────────────────── */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <StaggerIn>
            <div className={styles.overviewLeft}>
              <span className={styles.sectionEyebrow}>What We Do</span>
              <h2 className={styles.sectionTitle}>
                A Single Source of Truth
                <br />
                for <em>All Your Assets</em>
              </h2>
              <p className={styles.sectionDesc}>
                Most organisations manage 12–25% ghost assets — items recorded
                on the books that no longer exist. Our Asset Work Registry
                platform eliminates data gaps, centralises asset information, and
                gives every department an accurate, real-time view of your
                organisation's asset base.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.overviewRight}>
            {[
              {
                icon: <Search className="w-5 h-5" />,
                title: "Complete Asset Visibility",
                desc: "See every asset's location, condition, assignment, and history in a single dashboard — accessible from desktop or mobile.",
              },
              {
                icon: <ShieldCheck className="w-5 h-5" />,
                title: "Audit & Compliance Ready",
                desc: "All records include full audit trails, compliance status, and depreciation data — ready for internal reviews and external regulators.",
              },
              {
                icon: <BarChart2 className="w-5 h-5" />,
                title: "Smarter Capital Planning",
                desc: "Use live data to forecast maintenance needs, plan replacements, and optimise budget allocation across asset categories.",
              },
            ].map((f, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.overviewFeature}>
                  <div className={styles.overviewFeatureIcon}>{f.icon}</div>
                  <div>
                    <div className={styles.overviewFeatureTitle}>{f.title}</div>
                    <div className={styles.overviewFeatureDesc}>{f.desc}</div>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ────────────────────────────────────────────── */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Capabilities</span>
              <h2 className={styles.sectionTitle}>
                Everything Your Registry <em>Needs to Deliver</em>
              </h2>
              <p className={styles.sectionDesc} style={{ margin: "0 auto" }}>
                From tagging physical equipment to managing software licenses and
                intangible IP, our registry handles every asset class with
                precision and compliance built in.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.card}>
                  <div className={styles.cardAccent} />
                  <div className={styles.cardIconWrap}>{s.icon}</div>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.desc}</p>
                  <ul className={styles.cardPoints}>
                    {s.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────────── */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>How It Works</span>
              <h2 className={styles.sectionTitle}>
                From Audit to <em>Accurate Registry</em>
              </h2>
              <p className={styles.sectionDesc} style={{ margin: "0 auto" }}>
                Our structured onboarding process takes your organisation from
                scattered spreadsheets to a verified, real-time asset registry
                in a matter of weeks.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.09}>
                <div className={styles.processStep}>
                  <div className={styles.processStepNum}>{step.num}</div>
                  <div className={styles.processStepTitle}>{step.title}</div>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH FIELDS ─────────────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <div className={styles.techHeader}>
            <StaggerIn>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Data Architecture
              </span>
              <h2 className={styles.techTitle}>
                Every Field That
                <br />
                <em>Matters</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                Our registry captures a standardised, comprehensive set of data
                points for every asset — ensuring accuracy for financial
                reporting, maintenance planning, and regulatory compliance.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.techGrid}>
            {techFields.map((t, i) => (
              <StaggerIn key={i} delay={i * 0.05}>
                <div className={styles.techItem}>
                  <div className={styles.techItemIcon}>{t.icon}</div>
                  <span className={styles.techItemLabel}>{t.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ─────────────────────────────────────────────────── */}
      <section>
        <div
          ref={whyRef}
          className={styles.whySection}
          style={{
            opacity: whyVisible ? 1 : 0,
            transform: whyVisible ? "none" : "translateY(30px)",
            transition: "opacity 0.75s cubic-bezier(0.22,1,0.36,1), transform 0.75s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className={styles.whyLeft}>
            <span className={styles.sectionEyebrow}>Why Us</span>
            <h2 className={styles.sectionTitle}>
              Built for Teams That
              <br />
              <em>Can't Afford Gaps</em>
            </h2>
            <p className={styles.sectionDesc}>
              Whether you manage a fleet of machinery, a complex IT estate, or
              a portfolio of intellectual assets — our registry platform is
              built for accuracy, auditability, and scale.
            </p>

            <ul className={styles.benefitsList}>
              {benefits.map((b, i) => (
                <li className={styles.benefitItem} key={i}>
                  <span className={styles.benefitCheck}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.whyRight}>
            {whyItems.map((w, i) => (
              <div className={styles.whyItem} key={i}>
                <div className={styles.whyIconWrap}>{w.icon}</div>
                <div>
                  <div className={styles.whyItemTitle}>{w.title}</div>
                  <p className={styles.whyItemDesc}>{w.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ──────────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {statsSection.map((s, i) => (
          <StaggerIn key={i} delay={i * 0.08}>
            <div className={styles.statItem}>
              <div className={styles.statNum}>
                <span>{s.num}</span>{s.unit}
              </div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          </StaggerIn>
        ))}
      </div>

      {/* ── FAQ ─────────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.faqLeft}>
              <span className={styles.sectionEyebrow}>FAQ</span>
              <h2 className={styles.sectionTitle}>
                Common Questions
                <br />
                <em>Answered</em>
              </h2>
              <p className={styles.sectionDesc}>
                Have more questions? Reach out to our team and we'll walk you
                through how the registry fits your organisation's needs.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div
                  className={`${styles.faqItem} ${openFaq === i ? styles.open : ""}`}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {f.q}
                    <span className={styles.faqIcon}>+</span>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p className={styles.faqAnswerContent}>{f.a}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <StaggerIn>
          <div className={styles.ctaBandInner}>
            <h2 className={styles.ctaTitle}>
              Ready to Register
              <br />
              <em>Your Entire Asset Base?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Stop relying on disconnected spreadsheets. Get a single, verified
              registry that your finance, operations, and compliance teams can
              all trust.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnWhite}>Get a Free Consultation</button>
              <button className={styles.ctaBtnOutline}>View Case Studies</button>
            </div>
          </div>
        </StaggerIn>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <div className={styles.contactInner}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Get in Touch</span>
              <h2 className={styles.contactTitle}>
                Let's Build Your
                <br />
                <em>Asset Registry</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your asset base and current challenges. Our team
                will design a registry solution tailored to your industry and
                compliance requirements.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Response within 24 hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Free onboarding consultation included
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  No commitment required
                </div>
              </div>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>First Name</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Jane"
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Last Name</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Smith"
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email</label>
                  <input
                    className={styles.formInput}
                    type="email"
                    placeholder="jane@company.com"
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Company</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    placeholder="Acme Corp"
                  />
                </div>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Asset Type</label>
                <select className={styles.formSelect}>
                  <option value="">Select asset category</option>
                  <option value="fixed">Fixed / Physical Assets</option>
                  <option value="it">IT Assets & Software</option>
                  <option value="digital">Digital & IP Assets</option>
                  <option value="mixed">Mixed Portfolio</option>
                </select>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Tell us about your needs</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Describe your current asset management challenges, number of assets, and what you're hoping to achieve..."
                />
              </div>

              {submitted ? (
                <div className={styles.formSuccess}>
                  <CheckCircle2 className="w-4 h-4" />
                  Thank you! We'll be in touch within 24 hours.
                </div>
              ) : (
                <button
                  className={styles.formSubmit}
                  onClick={() => setSubmitted(true)}
                >
                  Send Enquiry
                </button>
              )}
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}