"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import {
  Package,
  BarChart3,
  ScanBarcode,
  Truck,
  AlertTriangle,
  RefreshCcw,
  Warehouse,
  ShieldCheck,
  Zap,
  Globe,
  Layers,
  Settings2,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import styles from "./inventory.module.css";


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

/* ── Stagger reveal wrapper ─────────────────────────────────────── */
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
        transition: `opacity 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}


/* ─────────────────────────────────────────────────────────────────
   DATA
───────────────────────────────────────────────────────────────── */

const features = [
  {
    icon: <Package className="w-5 h-5" />,
    title: "Real-Time Stock Tracking",
    description:
      "Monitor every SKU, variant, and batch in real time across all your warehouses and sales channels — with zero manual effort.",
    points: [
      "Live stock level updates",
      "Multi-location visibility",
      "Batch & expiry tracking",
    ],
  },
  {
    icon: <ScanBarcode className="w-5 h-5" />,
    title: "Barcode & RFID Scanning",
    description:
      "Accelerate receiving, picking, and dispatching using barcode scanners and RFID readers integrated directly into your workflow.",
    points: [
      "1D / 2D barcode support",
      "RFID-enabled tracking",
      "Mobile scanner app",
    ],
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: "Smart Reorder Alerts",
    description:
      "Never run out of critical stock. Our intelligent engine triggers reorder alerts based on lead times, sales velocity, and safety stock levels.",
    points: [
      "Dynamic reorder points",
      "Supplier auto-notify",
      "Seasonal demand forecasting",
    ],
  },
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Purchase & Procurement",
    description:
      "Streamline your procurement cycle from purchase order creation to goods receipt verification — all in one unified platform.",
    points: [
      "PO creation & approval",
      "Vendor management",
      "Goods receipt matching",
    ],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Analytics & Reporting",
    description:
      "Deep inventory analytics covering turnover rates, dead stock, carrying costs, and demand forecasting — visualised in actionable dashboards.",
    points: [
      "Turnover & aging reports",
      "Cost of goods sold (COGS)",
      "Custom report builder",
    ],
  },
  {
    icon: <RefreshCcw className="w-5 h-5" />,
    title: "Returns & Adjustments",
    description:
      "Handle returns, write-offs, damaged goods, and manual adjustments with full audit trails and automated stock corrections.",
    points: [
      "RMA workflow",
      "Damage & write-off logs",
      "Automatic balance updates",
    ],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Connect Your Data",
    desc: "Integrate your existing ERP, e-commerce, POS, or spreadsheets in minutes with our pre-built connectors.",
  },
  {
    num: "02",
    title: "Map Your Inventory",
    desc: "Import your SKUs, categories, and warehouse locations. Our smart mapper handles duplicates and inconsistencies automatically.",
  },
  {
    num: "03",
    title: "Set Automation Rules",
    desc: "Define reorder points, approval workflows, and alert thresholds once — then let the system handle the rest.",
  },
  {
    num: "04",
    title: "Go Live & Scale",
    desc: "Launch in days, not months. As your business grows, our infrastructure scales with you across regions and channels.",
  },
];

const stats = [
  { num: "40", suffix: "%", label: "Reduction in Stockouts" },
  { num: "3×", suffix: "", label: "Faster Stock Audits" },
  { num: "99.9", suffix: "%", label: "Uptime SLA" },
  { num: "500", suffix: "+", label: "Enterprise Clients" },
];

const benefitCards = [
  {
    icon: <Warehouse className="w-5 h-5" />,
    title: "Multi-Warehouse Control",
    desc: "Manage stock across unlimited warehouses, zones, and bins from one screen.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Compliance Ready",
    desc: "Built-in audit trails, role-based access, and SOC 2 Type II certified infrastructure.",
  },
  {
    icon: <Zap className="w-5 h-5" />,
    title: "Instant Sync",
    desc: "Sub-second stock updates across all connected channels — no lag, no overselling.",
  },
  {
    icon: <Globe className="w-5 h-5" />,
    title: "Global Operations",
    desc: "Multi-currency, multi-language, and multi-timezone support out of the box.",
  },
];

const integrations = [
  { icon: <Layers className="w-4 h-4" />, label: "SAP ERP" },
  { icon: <Settings2 className="w-4 h-4" />, label: "Oracle NetSuite" },
  { icon: <RefreshCcw className="w-4 h-4" />, label: "Shopify" },
  { icon: <Globe className="w-4 h-4" />, label: "WooCommerce" },
  { icon: <Truck className="w-4 h-4" />, label: "Amazon FBA" },
  { icon: <BarChart3 className="w-4 h-4" />, label: "QuickBooks" },
  { icon: <Package className="w-4 h-4" />, label: "Xero" },
  { icon: <ScanBarcode className="w-4 h-4" />, label: "Zebra Scanners" },
  { icon: <Zap className="w-4 h-4" />, label: "Zapier" },
  { icon: <ShieldCheck className="w-4 h-4" />, label: "REST API" },
];

const faqs = [
  {
    q: "How quickly can we go live?",
    a: "Most businesses are fully operational within 5–10 business days. Our onboarding team handles data migration, initial configuration, and user training end-to-end.",
  },
  {
    q: "Does it work with our existing ERP?",
    a: "Yes. We offer pre-built connectors for SAP, Oracle NetSuite, Microsoft Dynamics, and 30+ other platforms. Custom API integrations are also available.",
  },
  {
    q: "Can we manage multiple warehouses?",
    a: "Absolutely. The platform supports unlimited warehouse locations, bin-level tracking, inter-warehouse transfers, and consolidated reporting across all sites.",
  },
  {
    q: "Is there a mobile application?",
    a: "Yes. Our iOS and Android apps support barcode scanning, stock adjustments, purchase order approvals, and real-time dashboards on the go.",
  },
  {
    q: "How is pricing structured?",
    a: "We offer transparent, usage-based tiers starting with a free trial. Plans scale by number of SKUs, users, and warehouse locations. No hidden fees.",
  },
  {
    q: "What level of support is included?",
    a: "All plans include 24/7 email support. Business and Enterprise plans include a dedicated account manager, SLA-backed response times, and priority phone support.",
  },
];

const benefitsBullets = [
  {
    title: "Eliminate Overstock & Stockouts",
    desc: "Intelligent demand forecasting prevents capital being tied up in excess inventory while ensuring critical items are always available.",
  },
  {
    title: "Cut Operational Costs",
    desc: "Automation reduces manual data entry by up to 80%, freeing your team for higher-value tasks.",
  },
  {
    title: "Full Traceability",
    desc: "End-to-end lot and serial number tracking supports recalls, warranty management, and compliance audits.",
  },
  {
    title: "Unified Omnichannel View",
    desc: "Sell across retail, wholesale, and e-commerce channels with a single source of truth for stock.",
  },
];

const heroStats = [
  { num: "500+", label: "Businesses Onboarded" },
  { num: "40%", label: "Fewer Stockouts" },
  { num: "3×", label: "Faster Audits" },
  { num: "99.9%", label: "Uptime SLA" },
];


/* ─────────────────────────────────────────────────────────────────
   PAGE COMPONENT
───────────────────────────────────────────────────────────────── */

export default function InventoryManagementPage() {
  /* Sticky CTA visibility */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 450);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* FAQ accordion state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Form state */
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", type: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  function handleFormChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to take control of your inventory?</span>
        <button className={styles.stickyCtaBtn}>Request a Free Demo</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Inventory Management
          </div>

          <h1 className={styles.heroTitle}>
            Inventory That
            <br />
            <em>Works as Hard as You Do</em>
          </h1>

          <p className={styles.heroDesc}>
            A unified platform to track, manage, and optimise your stock across every
            warehouse, channel, and fulfilment centre — in real time, at any scale.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Demo</button>
            <button className={styles.btnGhost}>Explore Features</button>
          </div>
        </div>

        {/* Glass stats row */}
        <div className={styles.heroStats}>
          {heroStats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ───────────────────────────────────────────────── */}
      <section className={styles.overview}>
        <StaggerIn>
          <div className={styles.overviewInner}>
            <span className={styles.sectionEyebrow}>Platform Overview</span>
            <h2 className={styles.sectionTitle}>
              One Platform. <em>Total Visibility.</em>
            </h2>
            <p className={styles.overviewDesc}>
              Whether you're managing 500 SKUs or 5 million, our inventory management
              system gives you real-time control over stock levels, purchase orders,
              supplier relationships, and fulfilment operations — all from a single,
              beautifully designed interface.
            </p>
          </div>
        </StaggerIn>
      </section>

      {/* ── FEATURES ───────────────────────────────────────────────── */}
      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <StaggerIn>
            <div className={styles.featuresHeader}>
              <span className={styles.sectionEyebrow}>Core Modules</span>
              <h2 className={styles.sectionTitle}>
                Everything You Need to <em>Run Lean</em>
              </h2>
              <p className={styles.sectionDesc}>
                Built for distributors, retailers, manufacturers, and 3PLs — our
                modules cover the full inventory lifecycle without the complexity.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.featureCard}>
                  <div className={styles.featureIconWrap}>{f.icon}</div>
                  <h3 className={styles.featureTitle}>{f.title}</h3>
                  <p className={styles.featureDesc}>{f.description}</p>
                  <ul className={styles.featureList}>
                    {f.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ───────────────────────────────────────────── */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.processHeader}>
              <span className={styles.sectionEyebrow}>How It Works</span>
              <h2 className={styles.sectionTitle}>
                Up and Running <em>in Days</em>
              </h2>
              <p className={styles.sectionDesc}>
                Our structured onboarding process ensures a smooth transition with
                zero disruption to your existing operations.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.processStep}>
                  <div className={styles.processStepNumber}>{step.num}</div>
                  <h4 className={styles.processStepTitle}>{step.title}</h4>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────────────────── */}
      <section className={styles.statsBand}>
        <div className={styles.statsBandInner}>
          {stats.map((s, i) => (
            <StaggerIn key={i} delay={i * 0.08}>
              <div className={styles.statItem}>
                <span className={styles.statNum}>
                  {s.num}<span>{s.suffix}</span>
                </span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── BENEFITS ───────────────────────────────────────────────── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <StaggerIn>
            <div className={styles.benefitsLeft}>
              <span className={styles.sectionEyebrow}>Why Choose Us</span>
              <h2 className={styles.benefitsTitle}>
                Built for Businesses
                <br />
                That <em>Can't Afford to Guess</em>
              </h2>
              <p className={styles.benefitsSubDesc}>
                From lean startups to enterprise supply chains, our platform adapts
                to how you work — not the other way around.
              </p>
              <ul className={styles.benefitsList}>
                {benefitsBullets.map((b, i) => (
                  <li key={i} className={styles.benefitItem}>
                    <div className={styles.benefitIcon}>
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <div className={styles.benefitText}>
                      <strong>{b.title}</strong>
                      {b.desc}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </StaggerIn>

          <div className={styles.benefitsRight}>
            {benefitCards.map((c, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.benefitCard}>
                  <div className={styles.benefitCardIcon}>{c.icon}</div>
                  <div>
                    <h4 className={styles.benefitCardTitle}>{c.title}</h4>
                    <p className={styles.benefitCardDesc}>{c.desc}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTEGRATIONS ───────────────────────────────────────────── */}
      <section className={styles.integrations}>
        <div className={styles.integrationsInner}>
          <StaggerIn>
            <div className={styles.integrationsHeader}>
              <span className={styles.sectionEyebrow}>Integrations</span>
              <h2 className={styles.sectionTitle}>
                Plays Well With <em>Your Entire Stack</em>
              </h2>
              <p className={styles.sectionDesc}>
                Connect your existing tools in minutes. Over 50 native integrations
                plus a full REST API and webhook system.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.integrationsGrid}>
            {integrations.map((item, i) => (
              <StaggerIn key={i} delay={i * 0.04}>
                <div className={styles.integrationChip}>
                  <div className={styles.integrationChipIcon}>{item.icon}</div>
                  <span className={styles.integrationChipLabel}>{item.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <StaggerIn>
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Stop Losing Money to
              <br />
              <em>Poor Inventory Visibility</em>
            </h2>
            <p className={styles.ctaDesc}>
              Join 500+ businesses that cut stockouts by 40% and reduced operational
              costs within their first quarter on the platform.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnPrimary}>Start Free Trial</button>
              <button className={styles.ctaBtnGhost}>Book a Live Demo</button>
            </div>
          </div>
        </StaggerIn>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────────── */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.faqHeader}>
              <span className={styles.sectionEyebrow}>FAQ</span>
              <h2 className={styles.sectionTitle}>
                Common <em>Questions</em>
              </h2>
              <p className={styles.sectionDesc}>
                Everything you need to know before getting started.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={`${styles.faqItem} ${openFaq === i ? styles.open : ""}`}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {faq.q}
                    <span className={styles.faqIcon}>+</span>
                  </button>
                  <div className={styles.faqAnswer}>
                    <div className={styles.faqAnswerContent}>{faq.a}</div>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────────── */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          {/* Left — info */}
          <StaggerIn>
        <span className={styles.sectionEyebrow}>Get In Touch</span>
              <h2 className={styles.contactTitle}>
                Let's Find the Right <em>Solution for You</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your inventory challenges and we'll map out how our
                platform fits your workflow — no obligation, no pressure.
              </p>

              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                 
              
              </div>
            </div>
          </StaggerIn>

          {/* Right — form */}
          <StaggerIn delay={0.1}>
            <form className={styles.contactForm} onSubmit={handleFormSubmit}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Full Name</label>
                  <input
                    className={styles.formInput}
                    name="name"
                    placeholder="Jane Smith"
                    value={form.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Company</label>
                  <input
                    className={styles.formInput}
                    name="company"
                    placeholder="Acme Corp"
                    value={form.company}
                    onChange={handleFormChange}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email</label>
                  <input
                    className={styles.formInput}
                    name="email"
                    type="email"
                    placeholder="jane@acmecorp.com"
                    value={form.email}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone (optional)</label>
                  <input
                    className={styles.formInput}
                    name="phone"
                    placeholder="+1 234 567 8901"
                    value={form.phone}
                    onChange={handleFormChange}
                  />
                </div>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Business Type</label>
                <select
                  className={styles.formSelect}
                  name="type"
                  value={form.type}
                  onChange={handleFormChange}
                  required
                >
                  <option value="">Select your industry…</option>
                  <option value="retail">Retail & E-Commerce</option>
                  <option value="manufacturing">Manufacturing</option>
                  <option value="distribution">Distribution & Wholesale</option>
                  <option value="logistics">Logistics & 3PL</option>
                  <option value="healthcare">Healthcare & Pharma</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Tell Us About Your Challenges</label>
                <textarea
                  className={styles.formTextarea}
                  name="message"
                  placeholder="Describe your current inventory pain points, number of SKUs, warehouses, etc."
                  value={form.message}
                  onChange={handleFormChange}
                  required
                />
              </div>

              <button className={styles.formSubmit} type="submit">
                Send Message → Get a Custom Demo
              </button>

              {submitted && (
                <div className={styles.successMsg}>
                  <CheckCircle2 className="w-4 h-4" />
                  Thank you! Our team will be in touch within 2 business hours.
                </div>
              )}
            </form>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}