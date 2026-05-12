"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Warehouse,
  Bot,
  BarChart3,
  ScanLine,
  Truck,
  PackageCheck,
  ShieldCheck,
  Zap,
  Workflow,
  Database,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Clock,
  TrendingUp,
  Users,
} from "lucide-react";
import styles from "./warehouse.module.css";
import { ReactNode } from "react";

/* ── Scroll-triggered visibility hook ────────────────────── */
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

type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Stagger animation wrapper ───────────────────────────── */
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

/* ── Data ── */
const stats = [
  { num: "40%", label: "Faster Order Fulfilment" },
  { num: "99.8%", label: "Inventory Accuracy" },
  { num: "60%", label: "Labour Cost Reduction" },
  { num: "24/7", label: "Autonomous Operations" },
];

const solutions = [
  {
    icon: <Bot className="w-5 h-5" />,
    title: "Autonomous Mobile Robots",
    description:
      "Deploy fleets of intelligent AMRs that navigate dynamically, pick items, and restock shelves — without fixed rails or human guidance.",
    points: ["Adaptive path planning", "Fleet orchestration", "Safe human coexistence"],
  },
  {
    icon: <ScanLine className="w-5 h-5" />,
    title: "Computer Vision & QC",
    description:
      "AI-powered cameras inspect every item at line-speed, detecting defects, verifying barcodes, and flagging mis-picks in real time.",
    points: ["99.9% defect detection", "Real-time barcode validation", "Automated rejection systems"],
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: "Demand Forecasting",
    description:
      "Machine learning models trained on your SKU history, seasonality, and market signals to predict demand and optimize stock levels.",
    points: ["Reduce overstock by 35%", "Prevent stockouts proactively", "Auto replenishment triggers"],
  },
  {
    icon: <Workflow className="w-5 h-5" />,
    title: "Warehouse Management AI",
    description:
      "An intelligent layer over your WMS that dynamically assigns tasks, prioritises orders, and continuously rebalances workloads.",
    points: ["Smart slotting & zoning", "Real-time task assignment", "ERP & WMS integration"],
  },
  {
    icon: <Truck className="w-5 h-5" />,
    title: "Smart Dock & Yard Management",
    description:
      "Coordinate inbound and outbound trucks, dock doors, and yard movements using AI-driven scheduling and IoT sensors.",
    points: ["Reduce truck dwell time", "Automated dock assignment", "Live yard visibility"],
  },
  {
    icon: <PackageCheck className="w-5 h-5" />,
    title: "Automated Sorting & Packing",
    description:
      "High-throughput AI sorters and robotic packing cells that handle thousands of SKUs, drastically cutting manual labour.",
    points: ["Multi-SKU sorting at scale", "Carton right-sizing AI", "Seamless conveyor integration"],
  },
];

const process = [
  {
    step: "01",
    title: "Discovery & Audit",
    desc: "We map your current warehouse flows, identify bottlenecks, and model the automation ROI specific to your operations.",
  },
  {
    step: "02",
    title: "Solution Design",
    desc: "Our engineers design a custom automation blueprint — hardware, software, integrations — aligned to your throughput targets.",
  },
  {
    step: "03",
    title: "Pilot Deployment",
    desc: "We run a controlled pilot in a live section of your warehouse, measuring KPIs and fine-tuning before full rollout.",
  },
  {
    step: "04",
    title: "Scale & Optimise",
    desc: "Full deployment across your facility, with continuous AI model retraining and 24/7 monitoring from our operations team.",
  },
];

const techStack = [
  { label: "Computer Vision", icon: <ScanLine className="w-5 h-5" /> },
  { label: "Robotics & AMR", icon: <Bot className="w-5 h-5" /> },
  { label: "ML Forecasting", icon: <TrendingUp className="w-5 h-5" /> },
  { label: "IoT Sensors", icon: <Cpu className="w-5 h-5" /> },
  { label: "Cloud & Edge", icon: <Database className="w-5 h-5" /> },
  { label: "Real-time Analytics", icon: <BarChart3 className="w-5 h-5" /> },
];

const whyItems = [
  {
    icon: <Zap className="w-5 h-5" />,
    title: "End-to-End Ownership",
    desc: "From site survey to hypercare post-launch, we own every layer — hardware, software, and operations.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5" />,
    title: "Enterprise-Grade Reliability",
    desc: "99.95% uptime SLAs, built-in redundancy, and ISO-compliant security architecture throughout.",
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: "Industry Specialists",
    desc: "Our team has automated warehouses for e-commerce, 3PL, cold chain, and manufacturing sectors.",
  },
];

const benefits = [
  "Cut fulfilment errors by up to 95%",
  "Reclaim floor space with smarter slotting",
  "Scale throughput without hiring headcount",
  "Real-time visibility across every SKU",
  "Faster returns processing & reverse logistics",
];

const faqs = [
  {
    q: "How long does a typical warehouse automation deployment take?",
    a: "A focused pilot can be live in 8–12 weeks. Full-facility rollouts typically run 4–9 months depending on scope, integration complexity, and site size.",
  },
  {
    q: "Can your systems integrate with our existing WMS or ERP?",
    a: "Yes. Our platform integrates with SAP, Oracle, Manhattan Associates, Blue Yonder, and any WMS or ERP that exposes a REST or EDI interface.",
  },
  {
    q: "Do we need to shut down operations during installation?",
    a: "No. Our phased deployment methodology keeps your facility running throughout. We automate zone by zone to ensure zero downtime.",
  },
  {
    q: "What happens when something breaks?",
    a: "Every deployment includes a 24/7 remote operations centre, predictive maintenance alerts, and on-site SLA response times as fast as 4 hours.",
  },
  {
    q: "What ROI should we expect?",
    a: "Most clients see full ROI within 18–30 months. Typical gains include a 40% increase in throughput, 60% labour cost reduction, and near-perfect inventory accuracy.",
  },
];

/* ───────────────────────────────────────────────────── */

export default function WarehouseAutomationPage() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const [whyRef, whyVisible] = useInView(0.15);

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Transform your warehouse today</span>
        <button className={styles.stickyCtaBtn}>Get a Free Assessment</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Warehouse Automation
          </div>

          <h1 className={styles.heroTitle}>
            Automate Your Warehouse.
            <br />
            <em>Unlock Peak Efficiency.</em>
          </h1>

          <p className={styles.heroDesc}>
            AI-driven robots, computer vision, and intelligent software that work
            together to slash costs, eliminate errors, and scale your operations
            without scaling headcount.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Assessment</button>
            <button className={styles.btnGhost}>
              Watch It in Action <ArrowRight className="w-4 h-4" style={{ display: "inline", marginLeft: "0.4rem" }} />
            </button>
          </div>
        </div>

        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ───────────────────────────────────────── */}
      <section className={styles.overview}>
        <StaggerIn>
          <div className={styles.overviewInner}>
            <span className={styles.sectionEyebrow}>Overview</span>
            <h2 className={styles.overviewTitle}>
              The Modern Warehouse Runs on <em>Intelligent Automation</em>
            </h2>
            <p className={styles.overviewDesc}>
              Consumer expectations have changed permanently. Same-day delivery, zero-error
              orders, and seamless returns are now table stakes. We help distribution centres,
              3PLs, and manufacturers achieve all three — by weaving AI, robotics, and
              real-time data into every inch of your operation.
            </p>
          </div>
        </StaggerIn>
      </section>

      {/* ── SOLUTIONS ──────────────────────────────────────── */}
      <section className={styles.solutions}>
        <StaggerIn delay={0}>
          <span className={styles.sectionEyebrow}>Solutions</span>
          <h2 className={styles.sectionTitle}>
            Automation for <em>Every Corner of Your Facility</em>
          </h2>
          <p className={styles.sectionDesc}>
            From goods-in to goods-out, our modular automation platform covers
            every stage of your warehouse operation with purpose-built AI.
          </p>
        </StaggerIn>

        <div className={styles.cardsGrid}>
          {solutions.map((s, i) => (
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

      {/* ── PROCESS ────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow}>How It Works</span>
            <h2 className={styles.sectionTitle}>
              From Concept to <em>Fully Running Facility</em>
            </h2>
            <p className={styles.sectionDesc} style={{ maxWidth: "56ch", margin: "0 auto 4rem" }}>
              Our proven four-phase methodology minimises disruption while
              delivering measurable results at every milestone.
            </p>
          </StaggerIn>
          <div className={styles.processSteps}>
            {process.map((p, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.processStep}>
                  <span className={styles.processStepNum}>{p.step}</span>
                  <h3 className={styles.processStepTitle}>{p.title}</h3>
                  <p className={styles.processStepDesc}>{p.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ─────────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <StaggerIn>
            <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
              Technology
            </span>
            <h2 className={styles.techTitle}>
              Powered by the Best
              <br />
              <em>Industrial AI Stack</em>
            </h2>
            <p className={styles.techSubDesc}>
              We integrate battle-tested hardware platforms with custom-built AI software,
              connected via a unified cloud and edge architecture designed for warehouse-grade reliability.
            </p>
          </StaggerIn>
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

      {/* ── WHY US ─────────────────────────────────────────── */}
      <section className={styles.whySectionWrap}>
        <div
          ref={whyRef}
          className={styles.whySection}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Why Us</span>
            <h2 className={styles.whyTitle}>
              Why Operations Leaders Choose
              <br />
              <em>Our Platform</em>
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
                <Clock className="w-5 h-5" style={{ color: "var(--color-primary)" }} />
                <h3 className={styles.benefitsCardTitle}>
                  What You Gain With Automation
                </h3>
              </div>
              <ul className={styles.benefitsList}>
                {benefits.map((b, i) => (
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

      {/* ── STATS BAND ─────────────────────────────────────── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── FAQ ────────────────────────────────────────────── */}
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
                Everything you need to know before starting your
                warehouse automation journey.
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
                  <div className={styles.faqAnswerWrap}>
                    <p className={styles.faqAnswer}>{f.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CTA SECTION ────────────────────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Build the Warehouse
              <br />
              <em>of the Future?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Book a free operational assessment and receive a custom automation
              roadmap tailored to your facility, volume, and growth targets.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnPrimary}>Book Free Assessment</button>
              <button className={styles.ctaBtnGhost}>Download Case Study</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────── */}
      <section className={styles.contactSection}>
        <StaggerIn>
          <div className={styles.contactLeft}>
            <span className={styles.sectionEyebrow}>Contact</span>
            <h2 className={styles.contactTitle}>
              Talk to Our
              <br />
              <em>Automation Experts</em>
            </h2>
            <p className={styles.contactDesc}>
              Tell us about your facility — size, volume, current pain points —
              and we'll map out a solution designed around your operation.
            </p>
            <div className={styles.contactMeta}>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDotGreen} />
                Response within 24 hours
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDotTeal} />
                Free operational assessment included
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
                <input type="text" placeholder="Jane Smith" className={styles.formInput} />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Work Email</label>
                <input type="email" placeholder="jane@company.com" className={styles.formInput} />
              </div>
            </div>
            <div className={styles.formRow}>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Phone</label>
                <input type="tel" placeholder="+1 (555) 000-0000" className={styles.formInput} />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Facility Size (sq ft)</label>
                <input type="text" placeholder="e.g. 50,000 sq ft" className={styles.formInput} />
              </div>
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Current Challenge</label>
              <select className={styles.formSelect}>
                <option value="">Select your primary challenge</option>
                <option>Order accuracy & picking errors</option>
                <option>Labour costs & availability</option>
                <option>Throughput & capacity limits</option>
                <option>Inventory visibility & accuracy</option>
                <option>Returns & reverse logistics</option>
              </select>
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>Message</label>
              <textarea
                className={styles.formTextarea}
                placeholder="Tell us about your operation, volume, current systems, and goals..."
              />
            </div>
            <button className={styles.formSubmit}>Submit Enquiry</button>
          </div>
        </StaggerIn>
      </section>

    </div>
  );
}