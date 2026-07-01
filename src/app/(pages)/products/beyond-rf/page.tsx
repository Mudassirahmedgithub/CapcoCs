// BeyondRFPage.tsx
// Mobile Warehouse Management Solution for SAP EWM & SAP WM
// CSS Module: beyond.module.css  |  Globals: globals.css
// Built on the same design system as AIAgentDevelopmentPage for brand consistency

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Boxes,
  Smartphone,
  WifiOff,
  Truck,
  PackageCheck,
  ScanLine,
  PackagePlus,
  Printer,
  Layers,
  Bluetooth,
  Camera,
  Zap,
  Clock,
  TrendingUp,
  ShieldCheck,
  Cloud,
  RefreshCw,
  Rocket,
  ListChecks,
} from "lucide-react";
import styles from "./beyond.module.css";
import { ReactNode } from "react";

type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ────────────────────── */
function useInView(threshold = 0.15): [React.RefObject<HTMLDivElement>, boolean] {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return [ref, visible];
}

/* ── Stagger children hook ───────────────────────────────── */
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

export default function BeyondRFPage() {
  /* Sticky CTA visibility */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why-section in-view refs */
  const [whyRef, whyVisible] = useInView(0.15);

  /* ── Data ── */
  const whyCards = [
    {
      title: "Faster Data Capture & Productivity",
      description:
        "Beyond-RF uses a native mobile interface optimized for warehouse operations, letting users scan, capture, and process data significantly faster than browser-based RF screens.",
      points: [
        "Reduced transaction processing time",
        "Faster barcode scanning & validation",
        "Increased warehouse throughput",
      ],
      icon: <ScanLine className="w-5 h-5" />,
    },
    {
      title: "Intuitive Mobile Experience",
      description:
        "A familiar Android-based experience designed specifically for warehouse personnel, minimizing training requirements and accelerating user adoption.",
      points: [
        "User-friendly mobile screens",
        "Minimal learning curve",
        "Faster onboarding of warehouse staff",
      ],
      icon: <Smartphone className="w-5 h-5" />,
    },
    {
      title: "Rapid Deployment & Easy Integration",
      description:
        "Built entirely on standard SAP technologies, Beyond-RF integrates seamlessly with your existing landscape — no complex middleware required.",
      points: [
        "SAP-standard architecture",
        "Minimal system disruption",
        "Configured and operational within days",
      ],
      icon: <Rocket className="w-5 h-5" />,
    },
  ];

  const platforms = [
    { label: "SAP Extended Warehouse Management (Decentralized EWM)", icon: <Boxes className="w-5 h-5" /> },
    { label: "SAP S/4HANA Embedded EWM", icon: <Layers className="w-5 h-5" /> },
    { label: "SAP S/4HANA Cloud Warehouse Management", icon: <Cloud className="w-5 h-5" /> },
    { label: "SAP Warehouse Management (LE-WM)", icon: <Truck className="w-5 h-5" /> },
  ];

  const processes = [
    "Goods Receipt",
    "Putaway",
    "Picking",
    "Packing",
    "Replenishment",
    "Internal Warehouse Movements",
    "Inventory Counting",
    "Stock Transfers",
    "Shipping and Loading",
    "Handling Unit Management",
    "Label Printing",
  ];

  const deviceFeatures = [
    {
      icon: <ScanLine className="w-5 h-5" />,
      title: "Integrated Barcode Scanners",
      desc: "Native support for rugged handheld scanners built for warehouse environments.",
    },
    {
      icon: <Camera className="w-5 h-5" />,
      title: "Camera-Based Scanning",
      desc: "Capture barcodes and labels using the device camera when needed.",
    },
    {
      icon: <Bluetooth className="w-5 h-5" />,
      title: "Bluetooth Connectivity",
      desc: "Reliable Bluetooth-enabled printing for labels, shipping documents, and transactions.",
    },
    {
      icon: <Printer className="w-5 h-5" />,
      title: "Mobile Label Printing",
      desc: "Integrates directly with mobile printer software for on-the-spot label output.",
    },
  ];

  const offlineBenefits = [
    "Continue operations without interruption",
    "Eliminate productivity losses from network outages",
    "Support work in low-connectivity warehouse zones",
    "Improve operational reliability",
    "Ensure data integrity and synchronization",
  ];

  const stats = [
    { num: "Faster", label: "Scanning & Transactions" },
    { num: "Easier", label: "Onboarding & Adoption" },
    { num: "Lower", label: "Total Cost of Ownership" },
    { num: "Always-On", label: "Offline-Ready Operations" },
  ];

  const faqs = [
    {
      q: "What is Beyond-RF?",
      a: "Beyond-RF is a SAP-certified mobile warehouse management solution that replaces traditional RF barcode scanning with a modern, high-performance mobile data capture platform.",
    },
    {
      q: "Which SAP warehouse platforms does it support?",
      a: "Beyond-RF supports SAP Extended Warehouse Management (Decentralized EWM), SAP S/4HANA Embedded EWM, SAP S/4HANA Cloud Warehouse Management, and SAP Warehouse Management (LE-WM).",
    },
    {
      q: "How long does implementation take?",
      a: "Because Beyond-RF is built on standard SAP technologies with no complex middleware, organizations can typically have it configured and operational within a matter of days for standard warehouse processes.",
    },
    {
      q: "What happens if the warehouse loses network connectivity?",
      a: "Beyond-RF includes built-in offline functionality. Transaction data is securely stored on the device and automatically synchronized with SAP once connectivity is restored.",
    },
    {
      q: "What devices does Beyond-RF run on?",
      a: "Beyond-RF is optimized for Android rugged handheld devices, leveraging native capabilities such as integrated barcode scanners, cameras, and Bluetooth-enabled printing.",
    },
  ];

  return (
    <div className={styles.page}>



      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />

          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Mobile Warehouse Management for SAP
          </div>

          <h1 className={styles.heroTitle}>
            Modernize Your Warehouse
            <br />
            <em>with Beyond-RF</em>
          </h1>

          <p className={styles.heroDesc}>
            A SAP-certified mobile warehouse management solution that replaces traditional
            RF barcode scanning with a modern, high-performance mobile data capture platform
            — built for SAP EWM and SAP WM environments.
          </p>



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

      {/* ── PRODUCT VIDEO ──────────────────────────────────────── */}
      <section className={styles.videoSection}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>See It In Action</span>
          <h2 className={styles.sectionTitle}>
            Beyond-RF <em>In Your Warehouse</em>
          </h2>
          <p className={styles.sectionDesc}>
            Watch how Beyond-RF transforms everyday SAP warehouse transactions —
            from scanning to picking, packing, and shipping.
          </p>
        </StaggerIn>

        <StaggerIn delay={0.1}>
          <div className={styles.videoFrame}>
            <video
              className={styles.videoPlayer}
              src="/beyond-rf-demo.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              controls
            />
          </div>
        </StaggerIn>
      </section>

      {/* ── WHY CHOOSE BEYOND-RF ───────────────────────────────── */}
      <section className={styles.solutions}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>Why Beyond-RF</span>
          <h2 className={styles.sectionTitle}>
            Built for <em>Real Warehouse Speed</em>
          </h2>
          <p className={styles.sectionDesc}>
            Beyond-RF helps organizations modernize warehouse operations by replacing
            outdated RF technology with a powerful, user-friendly mobile solution built
            for today's digital supply chain.
          </p>
        </StaggerIn>

        <div className={styles.cardsGrid}>
          {whyCards.map((s, i) => (
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

      {/* ── SUPPORTED SAP PLATFORMS ────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <div className={styles.techHeader}>
            <StaggerIn>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Platforms
              </span>
              <h2 className={styles.techTitle}>
                Ready-to-Use for
                <br />
                <em>Every SAP Warehouse</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.15}>
              <p className={styles.techSubDesc}>
                Beyond-RF comes with a comprehensive suite of pre-built warehouse mobile
                applications that support standard SAP warehouse processes out of the box.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.platformGrid}>
            {platforms.map((t, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.platformItem}>
                  <div className={styles.platformIcon}>{t.icon}</div>
                  <span className={styles.platformLabel}>{t.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TYPICAL WAREHOUSE PROCESSES ────────────────────────── */}
      <section className={styles.processSection}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>
            <ListChecks className="w-4 h-4" style={{ display: "inline", marginRight: "0.3rem" }} />
            Processes Supported
          </span>
          <h2 className={styles.sectionTitle}>
            Every Step, <em>Covered</em>
          </h2>
          <p className={styles.sectionDesc}>
            From receiving to shipping, Beyond-RF supports the full range of standard
            warehouse processes across your SAP landscape.
          </p>
        </StaggerIn>

        <StaggerIn delay={0.1}>
          <div className={styles.tagGrid}>
            {processes.map((p, i) => (
              <span className={styles.tagItem} key={i}>
                <PackageCheck className={styles.tagItemIcon} size={14} />
                {p}
              </span>
            ))}
          </div>
        </StaggerIn>
      </section>

      {/* ── DEVICE FEATURES / OFFLINE — WHY US SPLIT ───────────── */}
      <section style={{ padding: "clamp(5rem,10vw,9rem) clamp(1.5rem,5vw,4rem)" }}>
        <div
          ref={whyRef}
          className={styles.whySection}
          style={{ padding: 0 }}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Mobile Hardware</span>
            <h2 className={styles.whyTitle}>
              Maximize the Value
              <br />
              of <em>Your Devices</em>
            </h2>
            <div className={styles.whyList}>
              {deviceFeatures.map((w, i) => (
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
                  Uninterrupted Operations with Offline Capability
                </h3>
              </div>
              <ul className={styles.benefitsList}>
                {offlineBenefits.map((b, i) => (
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

      {/* ── KEY BUSINESS BENEFITS BAND ─────────────────────────── */}
      <div className={styles.statsBand}>
        <div className={styles.statBlock}>
          <Zap className="w-6 h-6" style={{ color: "var(--color-white)", marginBottom: "0.6rem" }} />
          <span className={styles.statLabel}>Improve Warehouse Efficiency</span>
        </div>
        <div className={styles.statBlock}>
          <Clock className="w-6 h-6" style={{ color: "var(--color-white)", marginBottom: "0.6rem" }} />
          <span className={styles.statLabel}>Reduce Training Time</span>
        </div>
        <div className={styles.statBlock}>
          <ShieldCheck className="w-6 h-6" style={{ color: "var(--color-white)", marginBottom: "0.6rem" }} />
          <span className={styles.statLabel}>Increase Accuracy</span>
        </div>
        <div className={styles.statBlock}>
          <TrendingUp className="w-6 h-6" style={{ color: "var(--color-white)", marginBottom: "0.6rem" }} />
          <span className={styles.statLabel}>Lower Total Cost of Ownership</span>
        </div>
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
                Everything you need to know about deploying Beyond-RF
                across your SAP warehouse landscape.
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



    </div>
  );
}