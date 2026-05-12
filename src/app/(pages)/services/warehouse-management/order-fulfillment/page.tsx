"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Package,
  Truck,
  BarChart3,
  ScanLine,
  Warehouse,
  RefreshCw,
  ClipboardList,
  ShieldCheck,
  Zap,
  CheckCircle2,
  ArrowRight,
  MapPin,
  Clock,
  TrendingUp,
  ChevronDown,
} from "lucide-react";
import styles from "./order.module.css";
import { ReactNode } from "react";

/* ── Types ─────────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

type FaqItem = {
  q: string;
  a: string;
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

/* ── Stagger animation wrapper ──────────────────────────────── */
function StaggerIn({ children, className, delay = 0 }: StaggerInProps) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

/* ── FAQ Accordion Item ─────────────────────────────────────── */
function FaqAccordion({ item }: { item: FaqItem }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.open : ""}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        <span>{item.q}</span>
        <ChevronDown className={styles.faqIcon} size={18} />
      </button>
      <div className={styles.faqAnswer}>
        <p className={styles.faqAnswerContent}>{item.a}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */

export default function OrderFulfillmentPage() {
  /* Sticky CTA visibility */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Data ── */
  const stats = [
    { num: "99.8%", label: "Order Accuracy" },
    { num: "3x", label: "Faster Dispatch" },
    { num: "40%", label: "Cost Reduction" },
    { num: "Real-time", label: "Inventory Visibility" },
  ];

  const services = [
    {
      icon: <ScanLine size={22} />,
      title: "Inbound Receiving & Put-Away",
      desc: "Automate GRN creation, barcode scanning, and intelligent slotting so every SKU lands in the right bin — instantly.",
      features: [
        "Barcode & QR scanning at dock",
        "Smart bin allocation engine",
        "Discrepancy alerts & PO matching",
        "Putaway route optimization",
      ],
    },
    {
      icon: <Warehouse size={22} />,
      title: "Real-Time Inventory Management",
      desc: "Live stock levels, expiry tracking, and multi-location visibility across every zone of your warehouse.",
      features: [
        "SKU-level live tracking",
        "FIFO / FEFO rotation rules",
        "Multi-warehouse sync",
        "Low-stock threshold alerts",
      ],
    },
    {
      icon: <ClipboardList size={22} />,
      title: "Order Processing & Picking",
      desc: "Wave, batch, and zone picking strategies with digital pick lists pushed to handheld devices.",
      features: [
        "Wave & batch picking modes",
        "Digital pick-list dispatch",
        "Pick confirmation scanning",
        "Error-proof guided workflow",
      ],
    },
    {
      icon: <Package size={22} />,
      title: "Packing & Labelling",
      desc: "Intelligent carton selection, automated label printing, and compliance documentation — all at the packing station.",
      features: [
        "Carton size recommendation",
        "Auto label & invoice print",
        "Fragile & hazmat flags",
        "Weight & dimension capture",
      ],
    },
    {
      icon: <Truck size={22} />,
      title: "Dispatch & Carrier Integration",
      desc: "Manifest generation, carrier selection, and last-mile handoff with end-to-end shipment tracking.",
      features: [
        "Multi-carrier rate shopping",
        "Auto manifest generation",
        "AWB & tracking sync",
        "Proof-of-dispatch records",
      ],
    },
    {
      icon: <RefreshCw size={22} />,
      title: "Returns & Reverse Logistics",
      desc: "Streamlined RMA workflows, automated QC inspection, and restocking or write-off decisions — zero manual paperwork.",
      features: [
        "Customer-initiated RMA portal",
        "Automated quality inspection",
        "Restock vs. quarantine routing",
        "Refund trigger on receipt",
      ],
    },
  ];

  const process = [
    {
      step: "01",
      title: "Order Received",
      desc: "Orders from all channels — eComm, B2B, marketplace — flow into a single queue automatically.",
    },
    {
      step: "02",
      title: "Slot & Allocate",
      desc: "System assigns optimal pick location and bin, accounting for weight, zone, and carrier cut-offs.",
    },
    {
      step: "03",
      title: "Pick & Pack",
      desc: "Pickers follow digital guided routes. Packing station verifies every item before sealing.",
    },
    {
      step: "04",
      title: "Ship & Track",
      desc: "Carrier label generated, manifested, and tracking ID shared with customer — all in one click.",
    },
  ];

  const metrics = [
    { icon: <TrendingUp size={20} />, label: "Order Throughput", value: "+180%" },
    { icon: <Clock size={20} />, label: "Pick-to-Ship Time", value: "< 2 hrs" },
    { icon: <MapPin size={20} />, label: "Bin Utilization", value: "92%" },
    { icon: <CheckCircle2 size={20} />, label: "Return Resolution", value: "< 24 hrs" },
  ];

  const whyUs = [
    {
      icon: <Zap size={22} />,
      title: "Plug-and-Play Integration",
      desc: "Connect to your existing ERP, OMS, and carrier APIs within days — not months. Minimal disruption, maximum gain.",
    },
    {
      icon: <ShieldCheck size={22} />,
      title: "Built for Compliance",
      desc: "GST-ready, audit-trail enabled, and aligned with major e-commerce platform SLAs so you always stay audit-ready.",
    },
    {
      icon: <BarChart3 size={22} />,
      title: "Data-Driven Operations",
      desc: "Live dashboards, predictive stock alerts, and performance analytics that turn warehouse data into actionable decisions.",
    },
  ];

  const faqs: FaqItem[] = [
    {
      q: "What is a Warehouse Management System (WMS)?",
      a: "A WMS is software that controls and optimises the movement and storage of materials within a warehouse. It manages everything from receiving and put-away to picking, packing, dispatch, and returns.",
    },
    {
      q: "Can the system integrate with our existing ERP or OMS?",
      a: "Yes. Our platform offers pre-built connectors for SAP, Oracle, Tally, Unicommerce, Shopify, Magento, and more. Custom API integration is also supported.",
    },
    {
      q: "How quickly can we go live?",
      a: "Most implementations go live within 4–8 weeks, depending on the complexity of your operations and integrations. We handle configuration, data migration, and staff training.",
    },
    {
      q: "Does it support multi-warehouse operations?",
      a: "Absolutely. You can manage multiple warehouses, dark stores, or fulfilment centres from a single dashboard with real-time inventory sync across all locations.",
    },
    {
      q: "How does returns management work?",
      a: "Customers initiate an RMA via a self-service portal. Once the item is received, our QC workflow guides your team through inspection decisions — restock, quarantine, or write-off — and triggers the appropriate refund or credit.",
    },
    {
      q: "Is the platform cloud-based?",
      a: "Yes. Our solution is cloud-native, ensuring high availability, automatic updates, and zero infrastructure overhead on your side. On-premise deployment is available for enterprise requirements.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyText}>Modernise your warehouse operations today</span>
        <button className={styles.stickyBtn}>Book a Free Demo</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />

        <div className={styles.heroInner}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Warehouse Management & Order Fulfilment
          </div>

          <h1 className={styles.heroTitle}>
            From Dock to <em>Doorstep</em>,<br />
            Delivered with Precision
          </h1>

          <p className={styles.heroDesc}>
            End-to-end order fulfilment software that connects your warehouse, carriers, and
            customers — eliminating delays, errors, and guesswork at every step.
          </p>

          <div className={styles.heroCta}>
            <button className={styles.btnPrimary}>
              Get a Free Demo
              <ArrowRight size={16} />
            </button>
            <button className={styles.btnGhost}>Explore Features</button>
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
        <div className={styles.overviewInner}>
          <StaggerIn>
            <span className={styles.eyebrow}>Why It Matters</span>
            <h2 className={styles.overviewTitle}>
              Fulfilment Failures Cost More Than You Think
            </h2>
            <p className={styles.overviewDesc}>
              Missed SLAs, stockouts, mispicks, and manual reconciliation drain your margins
              silently. Our warehouse management platform digitises every touchpoint — from
              inbound receiving to last-mile dispatch — giving your operations team the speed,
              accuracy, and visibility they need to scale confidently.
            </p>
          </StaggerIn>

          {/* Metric pills */}
          <div className={styles.metricRow}>
            {metrics.map((m, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.metricCard}>
                  <span className={styles.metricIcon}>{m.icon}</span>
                  <span className={styles.metricValue}>{m.value}</span>
                  <span className={styles.metricLabel}>{m.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ───────────────────────────────────────────── */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Core Modules</span>
              <h2 className={styles.sectionTitle}>
                Every Stage of Fulfilment,<br /><em>Covered</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                A complete suite of tools that work together — so your operations run as one
                seamless, intelligent system.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{s.icon}</div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <ul className={styles.serviceFeatures}>
                    {s.features.map((f, j) => (
                      <li key={j} className={styles.serviceFeature}>{f}</li>
                    ))}
                  </ul>
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
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>How It Works</span>
              <h2 className={styles.sectionTitle}>
                Four Steps from <em>Order to Delivery</em>
              </h2>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
            {process.map((p, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.processStep}>
                  <div className={styles.processStepNum}>{p.step}</div>
                  {i < process.length - 1 && <div className={styles.processConnector} />}
                  <h3 className={styles.processStepTitle}>{p.title}</h3>
                  <p className={styles.processStepDesc}>{p.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────────────── */}
      <section className={styles.whyUs}>
        <div className={styles.whyUsInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow} style={{ color: "var(--color-primary)" }}>
                Why Choose Us
              </span>
              <h2 className={styles.whyUsTitle}>
                Built for <em>Operators</em>,<br />
                Not Just Administrators
              </h2>
              <p className={styles.sectionSubtitle} style={{ color: "rgba(255,255,255,0.55)" }}>
                We understand the floor-level reality of warehouse operations. Our tools are
                designed for the people actually doing the work.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.whyUsGrid}>
            {whyUs.map((w, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.whyUsCard}>
                  <div className={styles.whyUsIcon}>{w.icon}</div>
                  <h3 className={styles.whyUsCardTitle}>{w.title}</h3>
                  <p className={styles.whyUsCardDesc}>{w.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <StaggerIn>
            <h2 className={styles.ctaBandTitle}>
              Ready to Transform Your<br />
              <em>Warehouse Operations?</em>
            </h2>
            <p className={styles.ctaBandDesc}>
              Join hundreds of warehouses that have eliminated mispicks, slashed dispatch times,
              and gained real-time control over their inventory.
            </p>
            <div className={styles.ctaBandActions}>
              <button className={styles.ctaBandBtn}>Book a Free Demo</button>
              <button className={styles.ctaBandBtnGhost}>View Case Studies</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>FAQ</span>
              <h2 className={styles.sectionTitle}>
                Questions We Hear <em>Often</em>
              </h2>
            </div>
          </StaggerIn>

          <div className={styles.faqList}>
            {faqs.map((item, i) => (
              <StaggerIn key={i} delay={i * 0.05}>
                <FaqAccordion item={item} />
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.contactLeft}>
            <StaggerIn>
              <span className={styles.eyebrow}>Get in Touch</span>
              <h2 className={styles.contactTitle}>
                Let's Build Your<br />
                <em>Fulfilment Engine</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your warehouse — volume, channels, current pain points — and our
                solutions team will design a roadmap tailored to you.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.metaDot} />
                  Typical response within 4 business hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.metaDot} />
                  No commitment required for the first consultation
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.metaDot} />
                  Free operational audit included
                </div>
              </div>
            </StaggerIn>
          </div>

          <div className={styles.contactRight}>
            <StaggerIn delay={0.1}>
              <div className={styles.contactForm}>
                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>First Name</label>
                    <input className={styles.formInput} type="text" placeholder="Arjun" />
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Last Name</label>
                    <input className={styles.formInput} type="text" placeholder="Sharma" />
                  </div>
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email</label>
                  <input className={styles.formInput} type="email" placeholder="arjun@company.com" />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Company Name</label>
                  <input className={styles.formInput} type="text" placeholder="Acme Logistics Pvt. Ltd." />
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Warehouse Size</label>
                    <select className={styles.formInput}>
                      <option value="">Select range</option>
                      <option>Under 5,000 sq ft</option>
                      <option>5,000 – 20,000 sq ft</option>
                      <option>20,000 – 50,000 sq ft</option>
                      <option>50,000+ sq ft</option>
                    </select>
                  </div>
                  <div className={styles.formField}>
                    <label className={styles.formLabel}>Daily Order Volume</label>
                    <select className={styles.formInput}>
                      <option value="">Select range</option>
                      <option>Under 100 orders/day</option>
                      <option>100 – 500 orders/day</option>
                      <option>500 – 2,000 orders/day</option>
                      <option>2,000+ orders/day</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Current Pain Points</label>
                  <textarea
                    className={styles.formTextarea}
                    placeholder="Describe your key operational challenges — mispicks, slow dispatch, inventory inaccuracies, returns handling…"
                  />
                </div>
                <button className={styles.formSubmit}>
                  Send My Requirements
                  <ArrowRight size={15} />
                </button>
              </div>
            </StaggerIn>
          </div>
        </div>
      </section>

    </div>
  );
}