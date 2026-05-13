"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Package,
  BarChart3,
  Truck,
  Factory,
  ShoppingCart,
  ClipboardList,
  Network,
  ShieldCheck,
  Zap,
  TrendingUp,
  Globe,
  Cpu,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import styles from "./supply.module.css";
import { ReactNode } from "react";

/* ── Types ─────────────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ──────────────────────────── */
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

/* ── Stagger wrapper ────────────────────────────────────────────── */
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

export default function SupplyChainPage() {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why-section in-view */
  const [whyRef, whyVisible] = useInView(0.15);

  /* FAQ open state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* ── Data ──────────────────────────────────────────────────── */
  const stats = [
    { num: "10,000+", label: "Enterprises Worldwide" },
    { num: "17×", label: "Gartner Leader Recognition" },
    { num: "99.9%", label: "Platform Uptime" },
    { num: "40%", label: "Avg. Cost Reduction" },
  ];

  const modules = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Supply Chain Planning",
      description:
        "Intelligent demand management and supply planning powered by AI and machine learning. Forecast accurately, reduce disruptions, and synchronise end-to-end across customers, contract manufacturers, and suppliers.",
      points: [
        "AI-driven demand forecasting",
        "Multi-echelon replenishment automation",
        "Scenario modelling & backlog management",
      ],
    },
    {
      icon: <Package className="w-5 h-5" />,
      title: "Inventory Management",
      description:
        "Optimise inventory levels across your global network to minimise holding costs and avoid stockouts. Gain real-time visibility across multiple sites with automated replenishment triggers.",
      points: [
        "Real-time multi-site visibility",
        "Demand-driven replenishment",
        "Working capital optimisation",
      ],
    },
    {
      icon: <ShoppingCart className="w-5 h-5" />,
      title: "Procurement & Sourcing",
      description:
        "Streamline source-to-pay with intelligent procurement automation. Manage supplier relationships, enforce contract compliance, and accelerate purchasing cycles across your entire spend.",
      points: [
        "Automated procurement cycles",
        "Supplier collaboration portal",
        "Contract compliance enforcement",
      ],
    },
    {
      icon: <Factory className="w-5 h-5" />,
      title: "Manufacturing & Smart Ops",
      description:
        "Modernise shop floor execution with Oracle Smart Operations — AI-powered capabilities to increase factory throughput, reduce unplanned downtime, enhance quality, and improve production visibility.",
      points: [
        "AI-powered shop floor scheduling",
        "IoT-driven quality control",
        "Integrated MES & maintenance",
      ],
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Logistics & Transportation",
      description:
        "Maximise perfect order fulfilment while minimising logistics costs. Oracle Transportation Management delivers real-time shipment tracking, route optimisation, and automated global trade compliance.",
      points: [
        "Real-time shipment tracking",
        "Freight cost optimisation",
        "Global trade compliance automation",
      ],
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Order Management",
      description:
        "Accelerate order execution and enhance the customer experience with omnichannel fulfilment. Integrate pricing, order orchestration, and dynamic global order promising in a single platform.",
      points: [
        "Omnichannel order orchestration",
        "Dynamic pricing management",
        "Global order promising",
      ],
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Product Lifecycle Management",
      description:
        "Connect design, procurement, and manufacturing teams on a unified digital thread. Accelerate time-to-market, reduce product costs, and maintain a single source of truth for all product master data.",
      points: [
        "Unified digital product thread",
        "BOM & change management",
        "Cross-team collaboration hub",
      ],
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Analytics & AI Agents",
      description:
        "Embedded AI agents and pre-built analytics dashboards surface insights across every layer of your supply chain. Automate root-cause analysis, prescribe corrective actions, and track KPIs in real time.",
      points: [
        "Predictive disruption alerts",
        "AI-prescribed corrective actions",
        "Real-time operational dashboards",
      ],
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Design & Assess",
      desc: "Map your current supply chain maturity, identify capability gaps, and define the optimal Oracle Cloud SCM architecture for your industry.",
    },
    {
      num: "02",
      title: "Plan & Configure",
      desc: "Build demand, supply, and production plans. Configure modules incrementally — from planning to procurement to logistics — with minimal business disruption.",
    },
    {
      num: "03",
      title: "Execute & Integrate",
      desc: "Automate supply chain execution across manufacturing, logistics, and order management. Integrate seamlessly with ERP, CRM, and third-party systems.",
    },
    {
      num: "04",
      title: "Optimise & Scale",
      desc: "Leverage AI agents and embedded analytics to continuously improve performance, respond to disruptions, and scale operations globally.",
    },
  ];

  const whyItems = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "17× Gartner Magic Quadrant Leader",
      desc: "Oracle is recognised as a Leader in Supply Chain Planning, Transportation Management, and Warehouse Management — year after year.",
    },
    {
      icon: <Globe className="w-5 h-5" />,
      title: "End-to-End Cloud Platform",
      desc: "From design to delivery, Oracle Fusion Cloud SCM connects every supply chain function — planning, procurement, manufacturing, and logistics — on one unified platform.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Resilient by Design",
      desc: "Real-time analytics, AI-powered alerts, and scenario planning help organisations respond rapidly to disruptions before they impact customers.",
    },
  ];

  const benefits = [
    "Reduce inventory costs by up to 20% with AI-driven planning",
    "Cut logistics spend and improve perfect order fulfilment",
    "Increase factory throughput and reduce unplanned downtime",
    "Automate compliance across global trade operations",
    "Gain end-to-end supply chain visibility in real time",
    "Deploy incrementally — with minimal risk and lower cost",
  ];

  const techPillars = [
    { label: "AI & Machine Learning", icon: <Cpu className="w-5 h-5" /> },
    { label: "IoT Integration", icon: <Network className="w-5 h-5" /> },
    { label: "Embedded Analytics", icon: <BarChart3 className="w-5 h-5" /> },
    { label: "Cloud Infrastructure", icon: <Globe className="w-5 h-5" /> },
    { label: "Blockchain & Traceability", icon: <ShieldCheck className="w-5 h-5" /> },
    { label: "AI Agents for SCM", icon: <Zap className="w-5 h-5" /> },
  ];

  const faqs = [
    {
      q: "What is Oracle Fusion Cloud SCM?",
      a: "Oracle Fusion Cloud Supply Chain & Manufacturing (SCM) is a comprehensive, cloud-native platform that connects every link in the supply chain — from demand planning and procurement to manufacturing, logistics, and order management — on a single, integrated system.",
    },
    {
      q: "How does Oracle SCM use AI and machine learning?",
      a: "Oracle embeds AI and ML throughout the platform: generating more accurate demand forecasts, detecting lead-time deviations, prescribing corrective actions, automating replenishment, and powering AI Agents that help operations teams make faster, smarter decisions.",
    },
    {
      q: "Can Oracle SCM integrate with our existing ERP and third-party systems?",
      a: "Yes. Oracle Cloud SCM integrates seamlessly with Oracle ERP, Oracle HCM, and a wide range of third-party CRMs, ERPs, and logistics platforms via standard REST APIs, pre-built adapters, and Oracle Integration Cloud.",
    },
    {
      q: "Which industries does Oracle Cloud SCM support?",
      a: "Oracle SCM supports a broad range of industries including high-tech and electronics manufacturing, retail and consumer goods, healthcare and life sciences, industrial manufacturing, automotive, and project-based organisations.",
    },
    {
      q: "How does Oracle help build supply chain resilience?",
      a: "Oracle provides real-time analytics, AI-driven disruption alerts, multi-tier supply chain collaboration, and scenario planning tools so organisations can proactively respond to demand shifts, supplier delays, and market volatility before they escalate.",
    },
    {
      q: "What is Oracle Smart Operations?",
      a: "Oracle Smart Operations is a set of AI-powered capabilities within Oracle Fusion Cloud Manufacturing and Maintenance. It helps organisations increase factory productivity, improve quality, reduce unplanned downtime, and gain greater visibility across production operations.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ──────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to modernise your supply chain?</span>
        <button className={styles.stickyCtaBtn}>Request a Demo</button>
      </div>

      {/* ── HERO ────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Oracle Fusion Cloud SCM
          </div>

          <h1 className={styles.heroTitle}>
            Supply Chains Built to
            <br />
            <em>Outpace Change</em>
          </h1>

          <p className={styles.heroDesc}>
            Connect planning, procurement, manufacturing, and logistics on one
            intelligent platform — powered by AI, real-time data, and Oracle's
            17× Gartner-recognised supply chain expertise.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Request a Free Demo</button>
            <button className={styles.btnGhost}>Explore the Platform</button>
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
        <StaggerIn>
          <div className={styles.overviewInner}>
            <span className={styles.sectionEyebrow}>Platform Overview</span>
            <h2 className={styles.overviewTitle}>
              One Platform. <em>Every Link in the Chain.</em>
            </h2>
            <p className={styles.overviewDesc}>
              Oracle Fusion Cloud Supply Chain &amp; Manufacturing seamlessly connects your entire value chain
              — from demand forecasting and strategic sourcing to factory execution and last-mile delivery.
              With built-in AI, IoT, and analytics, organisations gain the real-time visibility and intelligent
              automation needed to respond quickly to changing demand, supply disruptions, and market conditions.
            </p>
          </div>
        </StaggerIn>
      </section>

      {/* ── MODULES ─────────────────────────────────────────────── */}
      <section className={styles.modules}>
        <div className={styles.modulesInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Core Modules</span>
              <h2 className={styles.sectionTitle}>
                End-to-End Supply Chain <em>Capabilities</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                Incrementally adopt the modules you need — each designed to integrate
                seamlessly and deliver value from day one.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.modulesGrid}>
            {modules.map((m, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.moduleCard}>
                  <div className={styles.moduleCardTop} />
                  <div className={styles.moduleIconWrap}>{m.icon}</div>
                  <h3 className={styles.moduleTitle}>{m.title}</h3>
                  <p className={styles.moduleDesc}>{m.description}</p>
                  <ul className={styles.modulePoints}>
                    {m.points.map((p, j) => (
                      <li key={j}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH PILLARS ────────────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <div className={styles.techHeader}>
            <StaggerIn>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Technology
              </span>
              <h2 className={styles.techTitle}>
                The Intelligence Behind
                <br />
                <em>Every Decision</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                Oracle Cloud SCM embeds modern AI, IoT, blockchain, and analytics
                directly into every supply chain function — not as add-ons, but as
                core capabilities built for production environments.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.techGrid}>
            {techPillars.map((t, i) => (
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

      {/* ── HOW IT WORKS ────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>How It Works</span>
              <h2 className={styles.sectionTitle}>
                From Implementation
                <br />
                <em>to Operational Excellence</em>
              </h2>
            </div>
          </StaggerIn>

          <div className={styles.processGrid}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.processCard}>
                  <span className={styles.processNum}>{step.num}</span>
                  <h3 className={styles.processTitle}>{step.title}</h3>
                  <p className={styles.processDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ORACLE ──────────────────────────────────────────── */}
      <section style={{ padding: "clamp(5rem,10vw,9rem) clamp(1.5rem,5vw,4rem)" }}>
        <div
          ref={whyRef}
          className={styles.whySection}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Why Oracle</span>
            <h2 className={styles.whyTitle}>
              Why Industry Leaders Choose
              <br />
              <em>Oracle Cloud SCM</em>
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
                  Measurable Impact Across Your Supply Chain
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

      {/* ── STATS BAND ──────────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

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
                Everything you need to know about Oracle Fusion Cloud Supply
                Chain &amp; Manufacturing.
              </p>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.faqList}>
              {faqs.map((f, i) => (
                <div
                  className={`${styles.faqItem} ${openFaq === i ? styles.open : ""}`}
                  key={i}
                >
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {f.q}
                    <ChevronDown className={styles.faqIcon} size={18} />
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

      {/* ── CTA SECTION ─────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Transform Your
              <br />
              <em>Supply Chain Operations?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Join over 10,000 enterprises worldwide running mission-critical
              supply chains on Oracle Fusion Cloud SCM.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnPrimary}>Request a Free Demo</button>
              <button className={styles.ctaBtnGhost}>View Customer Stories</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <StaggerIn>
          <div className={styles.contactLeft}>
            <span className={styles.sectionEyebrow}>Contact</span>
            <h2 className={styles.contactTitle}>
              Talk to a Supply Chain
              <br />
              <em>Expert Today</em>
            </h2>
            <p className={styles.contactDesc}>
              Tell us about your supply chain challenges and we'll help you
              find the right Oracle Cloud SCM solution for your business.
            </p>
            <div className={styles.contactMeta}>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} />
                Responding within 24 hours
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} style={{ background: "var(--color-primary)", boxShadow: "none" }} />
                Free initial consultation
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDot} style={{ background: "var(--color-primary)", boxShadow: "none" }} />
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
                <label className={styles.formLabel}>Industry</label>
                <input type="text" placeholder="Manufacturing, Retail…" className={styles.formInput} />
              </div>
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Tell us about your supply chain challenge</label>
              <textarea
                className={styles.formTextarea}
                placeholder="Describe your current pain points, team size, and what you're hoping to achieve..."
              />
            </div>
            <button className={styles.formSubmit}>Submit Inquiry</button>
          </div>
        </StaggerIn>
      </section>

    </div>
  );
}