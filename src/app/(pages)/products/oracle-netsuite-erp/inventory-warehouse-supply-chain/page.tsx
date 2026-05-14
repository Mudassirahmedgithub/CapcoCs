// InventoryWarehousePage.tsx
// Oracle NetSuite ERP — Inventory, Warehouse & Supply Chain
// CSS Module: inventory.module.css  |  Globals: globals.css

"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import {
  Package,
  Warehouse,
  BarChart3,
  Truck,
  RefreshCw,
  ScanBarcode,
  ShieldCheck,
  Settings2,
  Globe,
  Boxes,
  ClipboardList,
  Zap,
  TrendingUp,
  Network,
  Layers,
  Lock,
} from "lucide-react";
import styles from "./inventory.module.css";


/* ── Scroll-triggered visibility hook ────────────────────────── */
type UseInViewReturn = [React.RefObject<HTMLDivElement>, boolean];

function useInView(threshold = 0.15): UseInViewReturn {
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


/* ── Stagger-in animation wrapper ─────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

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


/* ═══════════════════════════════════════════════════════════════ */

export default function InventoryWarehousePage() {

  /* Sticky CTA scroll trigger */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why-section reveal */
  const [whyRef, whyVisible] = useInView(0.15);

  /* ── Data ────────────────────────────────────────────────────── */

  const stats = [
    { num: "99.9%", label: "Inventory Accuracy" },
    { num: "40%",   label: "Reduction in Carrying Costs" },
    { num: "3×",    label: "Faster Order Fulfilment" },
    { num: "Real-Time", label: "Visibility Across Sites" },
  ];

  const capabilities = [
    {
      icon: <Package className="w-5 h-5" />,
      title: "Inventory Control & Tracking",
      desc: "Maintain real-time inventory counts across multiple locations with lot, serial, and bin-level tracking built directly into NetSuite ERP.",
      points: [
        "Multi-location & multi-subsidiary inventory",
        "Lot and serial number tracking",
        "Bin and shelf-level management",
      ],
    },
    {
      icon: <Warehouse className="w-5 h-5" />,
      title: "Warehouse Management (WMS)",
      desc: "Streamline every warehouse operation — from receiving and putaway to pick, pack, and ship — with NetSuite's embedded WMS module.",
      points: [
        "Directed putaway & wave picking",
        "Mobile barcode scanning (RF)",
        "Slotting optimisation & cycle counts",
      ],
    },
    {
      icon: <Truck className="w-5 h-5" />,
      title: "Supply Chain Management",
      desc: "Gain end-to-end visibility from supplier to customer with demand-driven replenishment, vendor portals, and landed-cost tracking.",
      points: [
        "Purchase order & vendor management",
        "Demand planning & reorder points",
        "Landed cost & duty allocation",
      ],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Demand Planning & Forecasting",
      desc: "Use historical sales data and statistical models to forecast demand, reduce stockouts, and minimise excess inventory across every SKU.",
      points: [
        "Statistical demand forecasting",
        "Safety stock optimisation",
        "ABC/XYZ inventory classification",
      ],
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Procurement & Replenishment",
      desc: "Automate purchase orders based on reorder points or min/max rules and accelerate approval workflows to keep stock levels optimal.",
      points: [
        "Automated PO generation",
        "Multi-vendor sourcing rules",
        "Approval workflow automation",
      ],
    },
    {
      icon: <ScanBarcode className="w-5 h-5" />,
      title: "Order Fulfilment & 3PL",
      desc: "Connect your order management, warehouse operations, and third-party logistics partners on a single platform for seamless fulfilment.",
      points: [
        "Omni-channel order routing",
        "3PL & drop-ship integration",
        "Returns management (RMA)",
      ],
    },
  ];

  const overviewStats = [
    { num: "99.9%", label: "Pick Accuracy" },
    { num: "40%",   label: "Cost Reduction" },
    { num: "60+",   label: "Countries Supported" },
    { num: "24/7",  label: "Real-Time Visibility" },
  ];

  const integrations = [
    {
      icon: <Globe className="w-5 h-5" />,
      label: "EDI & 3PL Connectors",
      sub: "SPS Commerce, TrueCommerce",
    },
    {
      icon: <Boxes className="w-5 h-5" />,
      label: "eCommerce Platforms",
      sub: "Shopify, Magento, BigCommerce",
    },
    {
      icon: <Truck className="w-5 h-5" />,
      label: "Shipping & Logistics",
      sub: "FedEx, UPS, DHL, ShipStation",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      label: "Advanced Analytics",
      sub: "NetSuite SuiteAnalytics, Tableau",
    },
    {
      icon: <Settings2 className="w-5 h-5" />,
      label: "Manufacturing ERP",
      sub: "Work orders, BOM, MRP modules",
    },
    {
      icon: <Network className="w-5 h-5" />,
      label: "Supplier Portals",
      sub: "Vendor Self-Service & PO collaboration",
    },
    {
      icon: <ScanBarcode className="w-5 h-5" />,
      label: "Barcode & RFID",
      sub: "Zebra, Honeywell, Datalogic",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      label: "Compliance & Audit",
      sub: "SOX, FDA 21 CFR Part 11, GS1",
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Gap Analysis",
      desc: "We audit your current inventory processes and map them against NetSuite's native capabilities to identify quick wins and configuration requirements.",
    },
    {
      num: "02",
      title: "Solution Design & Configuration",
      desc: "Our consultants configure NetSuite — items, locations, transaction flows, approval workflows, and reporting — aligned to your exact operation.",
    },
    {
      num: "03",
      title: "Data Migration & Integration",
      desc: "We migrate historical inventory data, open POs, and master records; then wire in your WMS, eCommerce, and logistics platforms.",
    },
    {
      num: "04",
      title: "Training, Go-Live & Support",
      desc: "Warehouse staff and buyers receive role-based training before a supervised go-live, with ongoing managed-services support post-launch.",
    },
  ];

  const whyItems = [
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Proven NetSuite Expertise",
      desc: "Over a decade of hands-on NetSuite implementations across distribution, wholesale, and manufacturing verticals.",
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "End-to-End Supply Chain Coverage",
      desc: "From demand planning and procurement to warehouse execution and last-mile logistics — one unified platform, one implementation partner.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Compliance-Ready Architecture",
      desc: "Pre-built controls for SOX, FDA serialisation, GS1 labelling, and customs compliance so you stay audit-ready from day one.",
    },
  ];

  const benefits = [
    "Eliminate spreadsheet-based inventory tracking",
    "Reduce dead stock and overstock by up to 40%",
    "Achieve 99.9% pick and ship accuracy",
    "Automate replenishment and cut stockouts",
    "Gain real-time visibility across every location",
    "Close the books faster with perpetual inventory",
  ];

  const faqs = [
    {
      q: "What inventory methods does NetSuite support?",
      a: "NetSuite supports Average Cost, FIFO, LIFO, Specific Identification, and Standard Cost valuation — switchable by item class. It also handles lot and serial number tracking with full traceability from supplier to end customer.",
    },
    {
      q: "How does NetSuite WMS differ from basic inventory management?",
      a: "NetSuite WMS adds directed putaway logic, wave and batch picking, RF mobile scanning, bin management, and slotting recommendations on top of core inventory. It is designed for high-volume distribution centres that need to eliminate paper-based processes.",
    },
    {
      q: "Can NetSuite handle multi-location and multi-company inventory?",
      a: "Yes. NetSuite's OneWorld module provides a single instance to manage inventory across unlimited subsidiaries, warehouses, and countries, with intercompany transfers, consolidated reporting, and local currency support built in.",
    },
    {
      q: "How long does a NetSuite Inventory implementation take?",
      a: "A focused inventory and WMS implementation typically takes 8–16 weeks depending on data complexity, number of locations, and integration requirements. Phased approaches that start with core inventory and add WMS later are also common.",
    },
    {
      q: "Does NetSuite integrate with our existing 3PL or shipping carriers?",
      a: "NetSuite has native EDI capabilities and pre-built connectors for major 3PLs and carriers including FedEx, UPS, DHL, ShipBob, and third-party logistics platforms. Custom REST/SOAP API integrations are also fully supported.",
    },
    {
      q: "How does NetSuite support demand planning and reorder automation?",
      a: "NetSuite calculates reorder points and preferred stock levels using historical usage, lead times, and safety stock formulas. When stock falls below the reorder point, the system automatically generates purchase orders or transfer orders for buyer review.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>
          Optimise your warehouse with NetSuite
        </span>
        <button className={styles.stickyCtaBtn}>Get a Free Demo</button>
      </div>


      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>

          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Oracle NetSuite ERP · Inventory &amp; Supply Chain
          </div>

          <h1 className={styles.heroTitle}>
            Unify Your Warehouse,
            <br />
            <em>Inventory &amp; Supply Chain</em>
          </h1>

          <p className={styles.heroDesc}>
            Eliminate stockouts, reduce carrying costs, and achieve real-time
            visibility across every location — powered by Oracle NetSuite's
            cloud-native inventory and warehouse management platform.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
            <button className={styles.btnGhost}>Watch Platform Demo</button>
          </div>
        </div>

        {/* Glass stats row */}
        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>


      {/* ── OVERVIEW STRIP ─────────────────────────────────────── */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <StaggerIn>
            <div className={styles.overviewLeft}>
              <span className={styles.sectionEyebrow}>Platform Overview</span>
              <h2 className={styles.overviewTitle}>
                One Platform for
                <br />
                <em>Every Inventory Challenge</em>
              </h2>
              <p className={styles.overviewDesc}>
                NetSuite's unified cloud ERP eliminates siloed spreadsheets and
                disconnected point solutions, giving your team a single source
                of truth from purchase order to customer delivery — across every
                warehouse, channel, and subsidiary.
              </p>
              <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
                <button className={styles.btnPrimary}>Explore NetSuite</button>
                <button className={styles.btnGhostDark}>Download Brochure</button>
              </div>
            </div>
          </StaggerIn>

          <StaggerIn delay={0.15}>
            <div className={styles.overviewRight}>
              {overviewStats.map((s, i) => (
                <div className={styles.overviewStat} key={i}>
                  <span className={styles.overviewStatNum}>{s.num}</span>
                  <span className={styles.overviewStatLabel}>{s.label}</span>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>


      {/* ── CAPABILITIES CARDS ─────────────────────────────────── */}
      <section className={styles.capabilities}>
        <div className={styles.capabilitiesInner}>
          <StaggerIn>
            <div className={styles.capabilitiesHeader}>
              <span className={styles.sectionEyebrow}>Core Capabilities</span>
              <h2 className={styles.sectionTitle}>
                Everything You Need to
                <em> Run Lean Operations</em>
              </h2>
              <p className={styles.sectionDesc} style={{ margin: "0 auto" }}>
                From real-time inventory visibility and directed warehouse
                workflows to automated replenishment and end-to-end supply chain
                traceability — NetSuite covers the full operational lifecycle.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.cardsGrid}>
            {capabilities.map((c, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.card}>
                  <div className={styles.cardBorderTop} />
                  <div className={styles.cardIconWrap}>{c.icon}</div>
                  <h3 className={styles.cardTitle}>{c.title}</h3>
                  <p className={styles.cardDesc}>{c.desc}</p>
                  <ul className={styles.cardPoints}>
                    {c.points.map((p, j) => (
                      <li key={j}>{p}</li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── INTEGRATIONS / TECH ────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <div className={styles.techHeader}>
            <div className={styles.techTitleBlock}>
              <StaggerIn>
                <span
                  className={styles.sectionEyebrow}
                  style={{ color: "var(--color-primary)" }}
                >
                  Integrations &amp; Ecosystem
                </span>
                <h2 className={styles.techTitle}>
                  Connects to Your
                  <br />
                  <em>Entire Stack</em>
                </h2>
              </StaggerIn>
            </div>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                NetSuite integrates natively with leading EDI providers, 3PLs,
                eCommerce platforms, barcode hardware, and shipping carriers —
                so your data flows seamlessly without manual re-keying.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.techGrid}>
            {integrations.map((t, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.techItem}>
                  <div className={styles.techItemIcon}>{t.icon}</div>
                  <span className={styles.techItemLabel}>{t.label}</span>
                  <span className={styles.techItemSub}>{t.sub}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.processHeader}>
              <span className={styles.sectionEyebrow}>Implementation</span>
              <h2 className={styles.sectionTitle}>
                How We Deploy
                <em> Your NetSuite Solution</em>
              </h2>
              <p className={styles.sectionDesc} style={{ margin: "0 auto" }}>
                A structured, four-phase methodology refined across hundreds of
                inventory and warehouse implementations worldwide.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.processStep}>
                  <div className={styles.processStepNum}>{step.num}</div>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>


      {/* ── WHY US ─────────────────────────────────────────────── */}
      <section
        style={{
          background: "var(--color-off-white)",
          borderTop: "1px solid var(--color-border)",
          borderBottom: "1px solid var(--color-border)",
        }}
      >
        <div
          ref={whyRef}
          className={styles.whySection}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Why Choose Us</span>
            <h2 className={styles.whyTitle}>
              The NetSuite Partner
              <br />
              <em>Built for Operations</em>
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
                  Transform Your Inventory Operations with NetSuite
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
        {[
          { num: "500+", label: "Implementations Delivered" },
          { num: "40%",  label: "Average Cost Reduction" },
          { num: "99.9%", label: "Inventory Accuracy" },
          { num: "48hr", label: "Average Go-Live Readiness" },
        ].map((s, i) => (
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
                Common questions about NetSuite inventory management,
                warehouse operations, and implementation timelines.
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


      {/* ── CTA SECTION ────────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Modernise Your
              <br />
              <em>Warehouse &amp; Inventory?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Speak with a NetSuite supply chain specialist and receive a
              tailored demo built around your operations — at no cost.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaPrimaryBtn}>Book a Free Demo</button>
              <button className={styles.ctaSecondaryBtn}>Download Case Study</button>
            </div>
          </StaggerIn>
        </div>
      </section>


      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-white)" }}>
        <div className={styles.contactSection}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Contact</span>
              <h2 className={styles.contactTitle}>
                Talk to Our
                <br />
                <em>NetSuite Experts</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your warehouse size, current systems, and key
                pain points — we'll map out the right NetSuite configuration
                for your business.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Responding within 24 hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--color-primary)",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
                  Free initial discovery call
                </div>
                <div className={styles.contactMetaItem}>
                  <span
                    style={{
                      width: 7,
                      height: 7,
                      borderRadius: "50%",
                      background: "var(--color-primary)",
                      display: "inline-block",
                      flexShrink: 0,
                    }}
                  />
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
                  <label className={styles.formLabel}>Company</label>
                  <input
                    type="text"
                    placeholder="Acme Distribution Ltd"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Number of Warehouses</label>
                  <select className={styles.formSelect}>
                    <option value="">Select range</option>
                    <option>1 location</option>
                    <option>2–5 locations</option>
                    <option>6–20 locations</option>
                    <option>20+ locations</option>
                  </select>
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Current System</label>
                  <input
                    type="text"
                    placeholder="QuickBooks, SAP, spreadsheets…"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={styles.formInput}
                  />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Tell us about your challenges</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Describe your biggest inventory or warehouse pain points, team size, and go-live timeline…"
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