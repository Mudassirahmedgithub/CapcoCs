"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  BarChart3,
  ClipboardList,
  ScanLine,
  AlertTriangle,
  FileCheck,
  TrendingUp,
  Package,
  ShieldCheck,
  RefreshCw,
  Download,
  ChevronDown,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import styles from "./stock.module.css";
import { ReactNode } from "react";

/* ── Types ─────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ──────────────────── */
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

/* ── Stagger wrapper ────────────────────────────────────── */
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

/* ─────────────────────────────────────────────────────── */

export default function StockAuditingPage() {

  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* FAQ accordion */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Contact form */
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", company: "", email: "", phone: "", inventorySize: "", message: "",
  });
  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSubmit = (e: React.MouseEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  /* ── Data ── */
  const stats = [
    { num: "99.8%", label: "Accuracy Rate" },
    { num: "500+", label: "Audits Completed" },
    { num: "40%", label: "Loss Reduction" },
    { num: "Real-Time", label: "Reporting Engine" },
  ];

  const services = [
    {
      icon: <ScanLine className="w-5 h-5" />,
      title: "Physical Stock Audits",
      description: "Comprehensive on-site and cycle-count audits that reconcile physical inventory with system records using barcode, RFID, and manual verification.",
      features: ["Full & partial cycle counts", "Barcode & RFID scanning", "Discrepancy identification", "Real-time reconciliation reports"],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Inventory Analytics & Reporting",
      description: "Transform raw stock data into actionable intelligence. Custom dashboards and scheduled reports keep every stakeholder fully informed.",
      features: ["Live stock-level dashboards", "Movement & velocity reports", "Ageing & obsolescence tracking", "Custom KPI scorecards"],
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Variance & Loss Detection",
      description: "Pinpoint shrinkage, damage, mis-picks, and administrative errors before they compound into significant financial loss.",
      features: ["Root-cause variance analysis", "Shrinkage trend detection", "Supplier discrepancy tracking", "Theft & damage flags"],
    },
    {
      icon: <FileCheck className="w-5 h-5" />,
      title: "Compliance & Audit Trails",
      description: "Maintain complete, tamper-proof audit trails aligned with industry regulations and financial audit standards.",
      features: ["ISO & regulatory compliance", "Immutable audit log", "Document archiving", "External auditor access"],
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Perpetual Inventory Management",
      description: "Keep inventory records continuously up to date through automated transaction capture and exception-based correction workflows.",
      features: ["Automated transaction capture", "Exception-based alerts", "POS & WMS integration", "Same-day reconciliation"],
    },
    {
      icon: <Download className="w-5 h-5" />,
      title: "System Integration & Exports",
      description: "Connect your existing ERP, WMS, or POS to our auditing platform with zero disruption. Data flows seamlessly in every direction.",
      features: ["ERP & WMS connectors", "API-first architecture", "CSV / Excel / PDF exports", "BI tool integration"],
    },
  ];

  const process = [
    { step: "01", title: "Assessment", desc: "We evaluate your current inventory system, warehouse layout, and reporting gaps to design a tailored audit strategy." },
    { step: "02", title: "Setup & Integration", desc: "Our team connects your existing ERP, WMS, and POS systems — typically live within 48 hours, no downtime required." },
    { step: "03", title: "Audit Execution", desc: "Trained auditors and smart-scan technology run your physical counts with real-time discrepancy detection on-site." },
    { step: "04", title: "Report & Action Plan", desc: "You receive a comprehensive findings report plus a prioritised action plan to resolve variances and prevent recurrence." },
  ];

  const whyUs = [
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Audit-Grade Accuracy", desc: "Our dual-verification methodology and intelligent exception engine maintain an industry-leading 99.8% accuracy rate across all inventory categories." },
    { icon: <TrendingUp className="w-5 h-5" />, title: "Proven Loss Reduction", desc: "Clients consistently report 35–55% reduction in stock shrinkage within the first two audit cycles, directly improving gross margins." },
    { icon: <Package className="w-5 h-5" />, title: "Industry-Tailored Solutions", desc: "From retail and FMCG to pharmaceuticals, manufacturing, and logistics — our auditing frameworks adapt to your sector's unique compliance requirements." },
  ];

  const industries = [
    "Retail & E-Commerce", "Pharmaceuticals", "Food & Beverage",
    "Manufacturing", "Logistics & 3PL", "Healthcare", "Automotive Parts", "Electronics",
  ];

  const benefits = [
    "Eliminate manual counting errors with smart-scan technology",
    "Reduce inventory carrying costs through accurate demand data",
    "Pass financial and regulatory audits with confidence",
    "Detect and resolve shrinkage before year-end write-offs",
    "Make purchasing decisions backed by real-time stock visibility",
    "Improve supplier accountability with discrepancy evidence trails",
  ];

  const faqs = [
    { q: "How long does a full stock audit take?", a: "Duration depends on inventory size and location count. A single-site SME audit typically completes within 1–3 days. Large multi-site enterprises are planned in phases across 2–4 weeks with zero operational downtime." },
    { q: "Can you integrate with our existing ERP or WMS?", a: "Yes. We connect with SAP, Oracle NetSuite, Microsoft Dynamics, Fishbowl, Cin7, Unleashed, and most custom WMS/ERP platforms via REST API or direct data connectors." },
    { q: "What is a perpetual inventory audit?", a: "Unlike annual full counts, perpetual auditing continuously reconciles inventory by counting subsets of stock on a rolling schedule. This maintains near-perfect accuracy year-round and eliminates the disruption of large annual counts." },
    { q: "How do you handle discrepancies found during an audit?", a: "Every discrepancy is logged with location, quantity, probable cause category, and timestamp. We generate a root-cause analysis report and recommend corrective actions — from process changes to supplier claims." },
    { q: "Is our data secure during the audit process?", a: "Absolutely. All data is encrypted in transit and at rest, access is role-gated, and we maintain a complete chain-of-custody log. We operate under strict NDAs and GDPR/data-protection compliance frameworks." },
    { q: "Do you provide ongoing reporting after the initial audit?", a: "Yes. Most clients opt for our monthly or quarterly scheduled audits paired with a live reporting dashboard, giving continuous visibility rather than a single point-in-time snapshot." },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.stickyVisible : ""}`}>
        <span className={styles.stickyText}>Need a stock audit for your business?</span>
        <button className={styles.stickyBtn}>Request a Free Assessment</button>
      </div>

      {/* ── HERO ────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlowA} />
        <div className={styles.heroGlowB} />
        <div className={styles.heroInner}>

          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Stock Auditing & Reporting
          </div>

          <h1 className={styles.heroTitle}>
            Know Your Stock.<br />
            <em>Down to the Last Unit.</em>
          </h1>

          <p className={styles.heroDesc}>
            Precise inventory audits, real-time reporting, and loss-prevention intelligence
            — built for businesses that can't afford surprises on their balance sheet.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>
              Book a Free Audit Consultation
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className={styles.btnGhost}>See a Sample Report</button>
          </div>
        </div>

        {/* Stats bar */}
        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.statItem} key={i}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ─────────────────────────────────────────── */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <StaggerIn>
            <span className={styles.eyebrow}>Why Accurate Stock Data Matters</span>
            <h2 className={styles.overviewTitle}>
              Inventory Errors Cost More<br />Than You Think
            </h2>
            <p className={styles.overviewText}>
              Studies consistently show that retailers operate with an average inventory accuracy rate below 65%.
              The gap between what your system says you have and what's actually on your shelves translates
              directly into lost sales, overstocking costs, failed audits, and damaged supplier relationships.
              Our auditing and reporting services close that gap — permanently.
            </p>
          </StaggerIn>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────────────────── */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Our Services</span>
              <h2 className={styles.sectionTitle}>
                End-to-End Stock Auditing <em>& Reporting</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                From first count to final report — every stage of your inventory cycle, covered.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.serviceCard}>
                  <div className={styles.cardAccent} />
                  <div className={styles.serviceIcon}>{s.icon}</div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.description}</p>
                  <ul className={styles.featureList}>
                    {s.features.map((f, j) => (
                      <li key={j} className={styles.featureItem}>
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ─────────────────────────────────────────── */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>How It Works</span>
              <h2 className={styles.sectionTitle}>
                From Kickoff to <em>Clear Numbers</em>
              </h2>
              <p className={styles.sectionSubtitle}>Four structured steps — no surprises, no downtime.</p>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
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
        </div>
      </section>

      {/* ── BENEFITS BAND ───────────────────────────────────── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <StaggerIn>
            <div className={styles.benefitsLeft}>
              <span className={styles.eyebrowLight}>The Difference It Makes</span>
              <h2 className={styles.benefitsTitle}>
                Real Outcomes for <em>Operations Teams</em>
              </h2>
              <p className={styles.benefitsDesc}>
                Our clients don't just get a report — they get a competitive edge built
                on data they can actually trust.
              </p>
            </div>
          </StaggerIn>
          <div className={styles.benefitsRight}>
            {benefits.map((b, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.benefitRow}>
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{b}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ──────────────────────────────────────── */}
      <section className={styles.industries}>
        <div className={styles.industriesInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Industries We Serve</span>
              <h2 className={styles.sectionTitle}>Built for <em>Your Sector</em></h2>
              <p className={styles.sectionSubtitle}>
                Our auditing frameworks adapt to the specific compliance, speed, and accuracy
                demands of your industry.
              </p>
            </div>
          </StaggerIn>
          <div className={styles.industryTags}>
            {industries.map((ind, i) => (
              <StaggerIn key={i} delay={i * 0.04}>
                <span className={styles.industryTag}>{ind}</span>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ──────────────────────────────────────────── */}
      <section className={styles.whyUs}>
        <div className={styles.whyUsInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Why Choose Us</span>
              <h2 className={styles.sectionTitle}>
                The Auditing Partner <em>You Can Rely On</em>
              </h2>
            </div>
          </StaggerIn>
          <div className={styles.whyGrid}>
            {whyUs.map((w, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.whyCard}>
                  <div className={styles.whyIcon}>{w.icon}</div>
                  <h3 className={styles.whyTitle}>{w.title}</h3>
                  <p className={styles.whyDesc}>{w.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ────────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.eyebrowLight}>Get Started Today</span>
            <h2 className={styles.ctaTitle}>
              Stop Guessing.<br /><em>Start Knowing.</em>
            </h2>
            <p className={styles.ctaDesc}>
              Book a no-obligation consultation and we'll show you exactly where your inventory
              accuracy stands — and what it's costing you.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnPrimary}>
                Request a Free Audit
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className={styles.ctaBtnGhost}>Download Service Brochure</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── FAQ ─────────────────────────────────────────────── */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>FAQ</span>
              <h2 className={styles.sectionTitle}>Common <em>Questions</em></h2>
            </div>
          </StaggerIn>
          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}
              >
                <button
                  className={styles.faqQuestion}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  {f.q}
                  <ChevronDown className={`w-4 h-4 ${styles.faqChevron}`} />
                </button>
                <div className={styles.faqAnswer}>
                  <p className={styles.faqAnswerText}>{f.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────── */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.contactLeft}>
            <StaggerIn>
              <span className={styles.eyebrow}>Get in Touch</span>
              <h2 className={styles.contactTitle}>
                Let's Audit Your <em>Stock Together</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your business and inventory challenges. We'll respond
                within one business day with a tailored assessment plan.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.metaDot} />
                  Typically reply within 24 hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.metaDot} />
                  Free initial consultation included
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.metaDot} />
                  No long-term commitment required
                </div>
              </div>
            </StaggerIn>
          </div>

          <div className={styles.contactRight}>
            <div className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Full Name</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    name="name"
                    placeholder="Jane Smith"
                    value={formData.name}
                    onChange={handleFormChange}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Company</label>
                  <input
                    className={styles.formInput}
                    type="text"
                    name="company"
                    placeholder="Acme Logistics"
                    value={formData.company}
                    onChange={handleFormChange}
                  />
                </div>
              </div>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Email Address</label>
                  <input
                    className={styles.formInput}
                    type="email"
                    name="email"
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={handleFormChange}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Phone</label>
                  <input
                    className={styles.formInput}
                    type="tel"
                    name="phone"
                    placeholder="+91 98765 43210"
                    value={formData.phone}
                    onChange={handleFormChange}
                  />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Approximate Inventory Size</label>
                <select
                  className={styles.formInput}
                  name="inventorySize"
                  value={formData.inventorySize}
                  onChange={handleFormChange}
                >
                  <option value="">Select a range</option>
                  <option>Under 1,000 SKUs</option>
                  <option>1,000 – 10,000 SKUs</option>
                  <option>10,000 – 50,000 SKUs</option>
                  <option>50,000+ SKUs</option>
                </select>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Tell Us About Your Challenges</label>
                <textarea
                  className={styles.formTextarea}
                  name="message"
                  placeholder="Describe your current inventory process, pain points, or specific audit requirements..."
                  value={formData.message}
                  onChange={handleFormChange}
                />
              </div>
              {formSubmitted ? (
                <div className={styles.successMsg}>
                  <CheckCircle2 className="w-4 h-4" />
                  Thank you! We'll be in touch within one business day.
                </div>
              ) : (
                <button className={styles.formSubmit} onClick={handleSubmit}>
                  Send Enquiry
                  <ArrowRight className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}