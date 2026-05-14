// AssetTrackingPage — page.tsx
// CSS Module: asset.module.css  |  Globals: globals.css
// Brand: DM Sans + DM Serif Display, teal (#46c0bf) palette

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  MapPin,
  BarChart2,
  ShieldCheck,
  Zap,
  RefreshCw,
  Bell,
  Cpu,
  Globe,
  Database,
  Lock,
  Layers,
  Wifi,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { ReactNode } from "react";
import styles from "./asset.module.css";

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

export default function AssetTrackingPage() {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why section in-view */
  const [whyRef, whyVisible] = useInView(0.15);

  /* FAQ open state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Data ─────────────────────────────────────────────────── */
  const stats = [
    { num: "500K+", label: "Assets Tracked" },
    { num: "99.9%", label: "Uptime SLA" },
    { num: "40%", label: "Cost Reduction" },
    { num: "Real-Time", label: "Location Updates" },
  ];

  const solutions = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Real-Time Location Tracking",
      description:
        "Monitor every asset's exact location across your entire operation with live GPS, RFID, and BLE-powered tracking dashboards.",
      points: [
        "GPS, RFID & BLE integration",
        "Live map dashboards",
        "Geo-fencing & zone alerts",
      ],
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      title: "Asset Lifecycle Management",
      description:
        "Manage the full lifecycle of every asset — from procurement and deployment to maintenance scheduling and retirement.",
      points: [
        "Depreciation & cost tracking",
        "Maintenance scheduling",
        "Audit-ready reporting",
      ],
    },
    {
      icon: <Bell className="w-5 h-5" />,
      title: "Smart Alerts & Notifications",
      description:
        "Receive instant, intelligent alerts for asset movement, utilization anomalies, maintenance due dates, and threshold breaches.",
      points: [
        "Threshold-based alerting",
        "Custom notification rules",
        "Multi-channel delivery (SMS, email, app)",
      ],
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Predictive Maintenance",
      description:
        "Leverage AI-driven insights to predict equipment failures before they occur, reducing downtime and repair costs significantly.",
      points: [
        "Condition-based monitoring",
        "Failure prediction models",
        "Automated work order creation",
      ],
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Multi-Site Asset Control",
      description:
        "Centrally manage assets spread across warehouses, job sites, offices, and remote locations from a single unified platform.",
      points: [
        "Unified asset registry",
        "Cross-site transfer tracking",
        "Role-based access control",
      ],
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Compliance & Security",
      description:
        "Stay audit-ready with automated compliance reporting, tamper detection, and enterprise-grade data encryption at every layer.",
      points: [
        "ISO & GDPR compliance support",
        "Tamper detection alerts",
        "End-to-end data encryption",
      ],
    },
  ];

  const techStack = [
    { label: "GPS / RFID / BLE", icon: <Wifi className="w-5 h-5" /> },
    { label: "IoT Sensors", icon: <Cpu className="w-5 h-5" /> },
    { label: "Cloud Infrastructure", icon: <Globe className="w-5 h-5" /> },
    { label: "Time-Series Databases", icon: <Database className="w-5 h-5" /> },
    { label: "AI & Analytics", icon: <Zap className="w-5 h-5" /> },
    { label: "Enterprise Security", icon: <Lock className="w-5 h-5" /> },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Asset Discovery & Tagging",
      desc: "We audit your existing inventory and deploy the right tagging technology — GPS trackers, RFID tags, or BLE beacons — across all your assets.",
    },
    {
      num: "02",
      title: "Platform Configuration",
      desc: "Your tracking platform is configured with custom dashboards, alert rules, user roles, and integrations with your existing ERP or CMMS systems.",
    },
    {
      num: "03",
      title: "Live Deployment & Training",
      desc: "Go live with full onboarding support. Your team receives training sessions and documentation to get up to speed immediately.",
    },
    {
      num: "04",
      title: "Ongoing Optimisation",
      desc: "Continuous monitoring, predictive analytics tuning, and quarterly business reviews ensure your asset tracking ROI grows over time.",
    },
  ];

  const whyItems = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "End-to-End Implementation",
      desc: "From hardware selection and tagging to software configuration, integrations, and team training — we handle everything.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Enterprise-Grade Security",
      desc: "SOC 2 compliant infrastructure with data encryption, role-based access, audit trails, and tamper detection built in.",
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      title: "Industry Expertise",
      desc: "Purpose-built solutions for manufacturing, logistics, healthcare, construction, facilities management, and retail.",
    },
  ];

  const benefits = [
    "Cut asset loss and shrinkage by up to 70%",
    "Reduce maintenance costs through predictive scheduling",
    "Eliminate manual audits with real-time inventory visibility",
    "Improve equipment utilisation rates significantly",
    "Ensure compliance with automated audit-ready reports",
  ];

  const faqs = [
    {
      q: "What types of assets can be tracked?",
      a: "Our platform supports virtually any asset — vehicles, heavy equipment, IT hardware, medical devices, tools, pallets, containers, and high-value inventory. We match the right tracking technology (GPS, RFID, BLE) to the asset type and use case.",
    },
    {
      q: "How does real-time tracking work indoors?",
      a: "Indoor tracking uses BLE beacons and RFID readers deployed across your facility to triangulate asset positions with room-level accuracy. This works seamlessly in warehouses, hospitals, manufacturing floors, and office buildings.",
    },
    {
      q: "Can the platform integrate with our existing systems?",
      a: "Yes. We offer pre-built integrations with major ERP systems (SAP, Oracle, Microsoft Dynamics), CMMS platforms, and REST API access for custom integrations with your internal tools and databases.",
    },
    {
      q: "What is the typical ROI timeline?",
      a: "Most clients see a positive ROI within 6–12 months through reduced asset loss, lower maintenance costs, and improved utilisation. We provide ROI modelling during the discovery phase based on your specific asset portfolio.",
    },
    {
      q: "Is the solution scalable for large enterprises?",
      a: "Absolutely. Our cloud-native architecture scales to hundreds of thousands of assets across multiple sites globally. We support enterprise SLAs with 99.9% uptime guarantees and dedicated infrastructure options.",
    },
  ];

  /* ── JSX ──────────────────────────────────────────────────── */
  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ──────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to take control of your assets?</span>
        <button className={styles.stickyCtaBtn}>Book a Free Demo</button>
      </div>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Asset Tracking Solutions
          </div>

          <h1 className={styles.heroTitle}>
            Track Every Asset.
            <br />
            <em>Everywhere. Always.</em>
          </h1>

          <p className={styles.heroDesc}>
            Enterprise asset tracking powered by GPS, RFID, and IoT — giving
            operations teams real-time visibility, predictive intelligence, and
            complete control over every asset in their portfolio.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Demo</button>
            <button className={styles.btnGhost}>Explore Solutions</button>
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

      {/* ── SOLUTIONS GRID ──────────────────────────────────── */}
      <section className={styles.solutions}>
        <StaggerIn>
          <span className={styles.sectionEyebrow}>Solutions</span>
          <h2 className={styles.sectionTitle}>
            Everything You Need to
            <br />
            <em>Manage Your Assets</em>
          </h2>
          <p className={styles.sectionDesc}>
            From real-time location tracking to predictive maintenance and
            compliance reporting — our platform covers every stage of the asset
            lifecycle in one unified system.
          </p>
        </StaggerIn>

        <div className={styles.cardsGrid}>
          {solutions.map((s, i) => (
            <StaggerIn key={i} delay={i * 0.06}>
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

      {/* ── HOW IT WORKS ────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.processHeader}>
              <span className={styles.sectionEyebrow}>How It Works</span>
              <h2 className={styles.sectionTitle}>
                Up & Running in
                <br />
                <em>Four Simple Steps</em>
              </h2>
              <p className={styles.sectionDesc}>
                Our structured implementation methodology gets your team
                tracking assets with full visibility in weeks, not months.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.processStep}>
                  <div className={styles.processNum}>{step.num}</div>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                  {i < processSteps.length - 1 && (
                    <div className={styles.processArrow}>
                      <ArrowRight size={16} />
                    </div>
                  )}
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ──────────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <div className={styles.techHeader}>
            <StaggerIn>
              <span className={styles.sectionEyebrow}>Technology</span>
              <h2 className={styles.techTitle}>
                Powered by the Right
                <br />
                <em>Hardware & Software</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                We integrate best-in-class tracking hardware with a cloud-native
                software platform — purpose-built for enterprise reliability,
                scale, and security.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.techGrid}>
            {techStack.map((t, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.techItem}>
                  <div className={styles.techItemIcon}>{t.icon}</div>
                  <span className={styles.techItemLabel}>{t.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────── */}
      <section className={styles.whyOuter}>
        <div
          ref={whyRef}
          className={styles.whySection}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Why Us</span>
            <h2 className={styles.whyTitle}>
              Why Enterprises Trust
              <br />
              <em>Our Tracking Platform</em>
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
                  Unlock Measurable ROI Across Your Asset Portfolio
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

      {/* ── STATS BAND ──────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── FAQ ─────────────────────────────────────────────── */}
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
                Everything you need to know about enterprise asset tracking,
                implementation, and ROI.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <div
                  key={i}
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
                    <p className={styles.faqAnswerText}>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CTA SECTION ─────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Transform
              <br />
              <em>Your Asset Operations?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Join hundreds of enterprises that have eliminated asset loss,
              cut maintenance costs, and unlocked full operational visibility.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>Book a Free Demo</button>
              <button className={styles.btnGhostLight}>View Case Studies</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section className={styles.contactWrapper}>
        <div className={styles.contactSection}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Contact</span>
              <h2 className={styles.contactTitle}>
                Talk to an
                <br />
                <em>Asset Tracking Expert</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your asset portfolio and operational challenges.
                We'll recommend the right tracking solution and walk you through
                the implementation process.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Responding within 24 hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDotTeal} />
                  Free scoping consultation included
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
                  <input
                    type="text"
                    placeholder="Jane Smith"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email</label>
                  <input
                    type="email"
                    placeholder="jane@company.com"
                    className={styles.formInput}
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Industry</label>
                  <select className={styles.formInput}>
                    <option value="">Select your industry</option>
                    <option>Manufacturing</option>
                    <option>Logistics & Warehousing</option>
                    <option>Healthcare</option>
                    <option>Construction</option>
                    <option>Facilities Management</option>
                    <option>Retail</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Tell us about your asset portfolio, current challenges, and what you'd like to achieve..."
                />
              </div>
              <button className={styles.formSubmit}>Submit Inquiry</button>
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}