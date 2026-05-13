"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  HeartHandshake,
  BarChart3,
  Megaphone,
  MessageSquare,
  ShieldCheck,
  Zap,
  Globe2,
  Layers,
  RefreshCw,
  TrendingUp,
  PhoneCall,
} from "lucide-react";
import { ReactNode } from "react";
import styles from "./customer.module.css";

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

/* ── Stagger-in animation wrapper ────────────────────────── */
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

/* ─────────────────────────────────────────────────────────── */

export default function CustomerExperiencePage() {
  /* Sticky CTA bar */
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

  /* ── Data ── */
  const stats = [
    { num: "3.8×", label: "Customer Retention Lift" },
    { num: "40%", label: "Faster Case Resolution" },
    { num: "99.9%", label: "Platform Uptime SLA" },
    { num: "180+", label: "Countries Supported" },
  ];

  const solutions = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Unified Customer Profiles",
      description:
        "Aggregate data from every touchpoint — web, mobile, service, and in-store — into a single, real-time customer record that every team can act on.",
      points: ["360-degree customer view", "Real-time data unification", "Cross-channel identity resolution"],
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Service & Support Management",
      description:
        "Deliver consistent, high-quality service at scale with AI-assisted case routing, knowledge bases, and self-service portals that reduce resolution times.",
      points: ["Intelligent case routing", "Self-service portals", "SLA & escalation management"],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Sales Force Automation",
      description:
        "Equip your sales teams with pipeline visibility, opportunity scoring, and guided selling tools that accelerate deals and maximize revenue.",
      points: ["Pipeline & forecast management", "AI-driven opportunity scoring", "Configure-price-quote (CPQ)"],
    },
    {
      icon: <Megaphone className="w-5 h-5" />,
      title: "Marketing Engagement",
      description:
        "Orchestrate personalised, data-driven campaigns across email, social, SMS, and paid channels — from a single platform, with real-time analytics.",
      points: ["Cross-channel campaign orchestration", "Audience segmentation & A/B testing", "Real-time engagement analytics"],
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Digital Customer Engagement",
      description:
        "Meet customers where they are — chat, messaging, video, and social — with AI-powered assistants that handle routine interactions around the clock.",
      points: ["Omnichannel messaging hub", "AI chatbots & virtual agents", "Proactive outreach & notifications"],
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Customer Analytics & Insights",
      description:
        "Turn customer data into competitive advantage with predictive analytics, churn modelling, sentiment analysis, and executive dashboards.",
      points: ["Predictive churn & LTV modelling", "Sentiment & NPS tracking", "Executive-ready dashboards"],
    },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discover & Map",
      desc: "We audit your existing CX landscape, identify friction points, and map the entire customer journey across channels.",
    },
    {
      num: "02",
      title: "Design & Configure",
      desc: "Our architects design a unified CX platform tailored to your industry, business model, and brand standards.",
    },
    {
      num: "03",
      title: "Integrate & Migrate",
      desc: "Seamless integration with your ERP, e-commerce, and back-office systems; zero-disruption data migration included.",
    },
    {
      num: "04",
      title: "Deploy & Optimise",
      desc: "Go live with confidence. Continuous A/B testing, analytics review, and quarterly optimisation sprints keep performance at its peak.",
    },
  ];

  const techPillars = [
    { label: "Oracle CX Cloud", icon: <Globe2 className="w-5 h-5" /> },
    { label: "AI & Machine Learning", icon: <Zap className="w-5 h-5" /> },
    { label: "Data Unification (CDP)", icon: <Layers className="w-5 h-5" /> },
    { label: "Real-Time Personalisation", icon: <RefreshCw className="w-5 h-5" /> },
    { label: "Enterprise Security", icon: <ShieldCheck className="w-5 h-5" /> },
    { label: "Open APIs & Integrations", icon: <PhoneCall className="w-5 h-5" /> },
  ];

  const whyItems = [
    {
      icon: <Globe2 className="w-5 h-5" />,
      title: "End-to-End CX Ownership",
      desc: "From strategy and design to implementation and ongoing success management — we own the outcome, not just the delivery.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Enterprise-Grade Reliability",
      desc: "Built on Oracle's global cloud infrastructure with 99.9% uptime SLAs, SOC 2 compliance, and end-to-end data encryption.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "Proven Industry Expertise",
      desc: "Deep domain knowledge across retail, financial services, telecoms, and B2B manufacturing — solving CX challenges unique to your sector.",
    },
  ];

  const benefits = [
    "Reduce customer churn by up to 35%",
    "Increase NPS scores within 90 days",
    "Unify data silos across your organisation",
    "Empower agents with AI-assisted workflows",
    "Drive measurable revenue from every interaction",
  ];

  const faqs = [
    {
      q: "What is Oracle Customer Experience (CX)?",
      a: "Oracle CX is an integrated suite of cloud applications spanning marketing, sales, service, and commerce. It connects every customer interaction into a unified data model, enabling organisations to deliver personalised, consistent experiences at scale.",
    },
    {
      q: "How does Oracle CX unify sales, service, and marketing?",
      a: "Oracle CX shares a single customer data layer across all modules. When a service agent resolves a case, that context is immediately visible to marketing for suppression or follow-up campaigns, and to sales for upsell opportunity detection — eliminating siloed handoffs.",
    },
    {
      q: "Can Oracle CX integrate with our existing ERP and back-office systems?",
      a: "Yes. Oracle CX ships with prebuilt connectors for Oracle ERP, NetSuite, Salesforce, SAP, and hundreds of other platforms. Our integration layer uses REST/SOAP APIs and event-driven streaming to ensure real-time data flow without batch lag.",
    },
    {
      q: "How long does a typical CX implementation take?",
      a: "A focused service or sales cloud implementation typically goes live in 8–14 weeks. Full omnichannel CX programmes with data migration, custom integrations, and change management usually run 4–9 months, depending on scope.",
    },
    {
      q: "What kind of AI capabilities are included?",
      a: "Oracle CX embeds AI across the suite: next-best-action recommendations for sales reps, sentiment analysis for service queues, predictive audience segmentation for marketing, and AI-driven chatbots for digital service — all powered by Oracle AI Services and integrated ML pipelines.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.stickyCtaVisible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to transform your customer experience?</span>
        <button className={styles.stickyCtaBtn}>Request a Demo</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Oracle Customer Experience
          </div>

          <h1 className={styles.heroTitle}>
            Unified Engagement Across
            <br />
            <em>Sales, Service & Commerce</em>
          </h1>

          <p className={styles.heroDesc}>
            Connect every customer interaction — from first click to lifetime loyalty — on a single,
            AI-powered platform built for enterprise scale.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
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

      {/* ── OVERVIEW ───────────────────────────────────────────── */}
      <section className={styles.overview}>
        <StaggerIn>
          <div className={styles.overviewInner}>
            <span className={styles.sectionEyebrow}>Overview</span>
            <h2 className={styles.overviewTitle}>
              Every Interaction,<br /><em>One Connected Experience</em>
            </h2>
            <p className={styles.overviewDesc}>
              Oracle Customer Experience (CX) is a comprehensive cloud suite that unifies
              marketing, sales, service, and commerce on a shared data foundation. By eliminating
              silos and embedding AI at every layer, Oracle CX helps organisations anticipate
              customer needs, personalise engagement at scale, and build relationships that last.
            </p>
          </div>
        </StaggerIn>
      </section>

      {/* ── SOLUTIONS ──────────────────────────────────────────── */}
      <section className={styles.solutions}>
        <div className={styles.solutionsInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Solutions</span>
              <h2 className={styles.sectionTitle}>
                CX Solutions for <em>Modern Enterprises</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                A complete portfolio of cloud applications — each powerful alone, transformational together.
              </p>
            </div>
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
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Our Approach</span>
              <h2 className={styles.sectionTitle}>
                How We Deliver <em>CX Transformation</em>
              </h2>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.processStep}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <h3 className={styles.stepTitle}>{step.title}</h3>
                  <p className={styles.stepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH PILLARS ───────────────────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Technology
              </span>
              <h2 className={styles.techTitle}>
                The Platform Behind
                <br />
                <em>Every Experience</em>
              </h2>
              <p className={styles.techSubDesc}>
                Oracle CX is built on proven, enterprise-grade technology pillars — giving your teams
                the speed, intelligence, and security they need to compete.
              </p>
            </div>
          </StaggerIn>

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

      {/* ── WHY US ─────────────────────────────────────────────── */}
      <section className={styles.whySection}>
        <div
          ref={whyRef}
          className={styles.whySectionInner}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Why Us</span>
            <h2 className={styles.whyTitle}>
              Why Enterprises Choose
              <br />
              <em>Our CX Practice</em>
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
                  Measurable Outcomes You Can Expect
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
                Everything you need to know about Oracle CX and how we implement it for your organisation.
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
                  <div className={styles.faqAnswer}>
                    <p className={styles.faqAnswerContent}>{f.a}</p>
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
              Ready to Unify Your
              <br />
              <em>Customer Experience?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Let our Oracle CX specialists design a solution tailored to your business,
              customers, and growth objectives.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnPrimary}>Request a Demo</button>
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
              Talk to Our
              <br />
              <em>CX Specialists</em>
            </h2>
            <p className={styles.contactDesc}>
              Tell us about your customer experience challenges and we'll match you
              with the right Oracle CX solution and implementation roadmap.
            </p>
            <div className={styles.contactMeta}>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDotGreen} />
                Response within 24 hours
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDotTeal} />
                Free initial discovery session
              </div>
              <div className={styles.contactMetaItem}>
                <span className={styles.contactMetaDotTeal} />
                No obligation required
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
                <label className={styles.formLabel}>Company</label>
                <input type="text" placeholder="Acme Corp" className={styles.formInput} />
              </div>
            </div>
            <div className={styles.formField}>
              <label className={styles.formLabel}>How can we help?</label>
              <textarea
                className={styles.formTextarea}
                placeholder="Describe your CX goals, current challenges, and team size..."
              />
            </div>
            <button className={styles.formSubmit}>Submit Inquiry</button>
          </div>
        </StaggerIn>
      </section>

    </div>
  );
}