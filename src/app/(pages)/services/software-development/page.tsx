"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Code2,
  Server,
  Layers,
  Workflow,
  Cloud,
  Database,
  ShieldCheck,
  Zap,
  GitBranch,
  Monitor,
  Cpu,
  Globe,
  CheckCircle2,
  ArrowRight,
  Lightbulb,
  Users,
  BarChart3,
  Package,
} from "lucide-react";
import styles from "./software.module.css";
import { ReactNode } from "react";

/* ── Types ── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ── */
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

/* ── Stagger animation wrapper ── */
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

export default function SoftwareDevelopmentPage() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [whyRef, whyVisible] = useInView(0.15);

  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Data ── */
  const stats = [
    { num: "150+", label: "Projects Delivered" },
    { num: "99%", label: "Client Satisfaction" },
    { num: "40%", label: "Faster Time-to-Market" },
    { num: "10+", label: "Years of Expertise" },
  ];

  const offerings = [
    {
      title: "Custom Enterprise Software",
      description:
        "Tailor-made software systems engineered to match your exact operational workflows, business logic, and growth targets.",
      points: ["Built-to-spec architecture", "Scalable for enterprise load", "Long-term maintainability"],
      icon: <Code2 className="w-5 h-5" />,
    },
    {
      title: "ERP & CRM Development",
      description:
        "End-to-end ERP and CRM platforms that unify business data, automate processes, and give leadership full visibility.",
      points: ["Unified business data layer", "Customizable modules", "Third-party integrations"],
      icon: <Layers className="w-5 h-5" />,
    },
    {
      title: "Automation & Workflow Software",
      description:
        "Intelligent automation solutions that eliminate manual effort, reduce errors, and accelerate operational throughput.",
      points: ["Business process automation", "Rule-based workflows", "Audit trail & logging"],
      icon: <Workflow className="w-5 h-5" />,
    },
    {
      title: "SaaS Platform Development",
      description:
        "Full-featured, multi-tenant SaaS platforms with subscription management, billing, and cloud-native scalability.",
      points: ["Multi-tenant architecture", "Subscription & billing ready", "Global CDN deployment"],
      icon: <Cloud className="w-5 h-5" />,
    },
    {
      title: "API Development & Integrations",
      description:
        "Robust REST and GraphQL APIs that power seamless communication between your systems, partners, and third-party services.",
      points: ["RESTful & GraphQL APIs", "OAuth / SSO security", "Comprehensive API documentation"],
      icon: <GitBranch className="w-5 h-5" />,
    },
    {
      title: "Product Engineering & MVPs",
      description:
        "From concept to market-ready product — we help startups and enterprises validate ideas and ship fast with quality.",
      points: ["Lean MVP development", "Iterative delivery cycles", "Go-to-market strategy support"],
      icon: <Package className="w-5 h-5" />,
    },
  ];

  const techStack = [
    {
      category: "Backend",
      icon: <Server className="w-5 h-5" />,
      items: [".NET Core", "Java Spring Boot", "Node.js", "Python (FastAPI, Django)", "PHP Laravel"],
    },
    {
      category: "Frontend & UI",
      icon: <Monitor className="w-5 h-5" />,
      items: ["React.js", "Angular", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      category: "Databases & Cloud",
      icon: <Database className="w-5 h-5" />,
      items: ["MySQL / PostgreSQL", "MS SQL Server", "MongoDB", "Azure / AWS / GCP", "Docker & Kubernetes"],
    },
  ];

  const engineering = [
    { icon: <Cpu className="w-5 h-5" />, label: "Microservices Architecture" },
    { icon: <Zap className="w-5 h-5" />, label: "Event-Driven Systems" },
    { icon: <Cloud className="w-5 h-5" />, label: "Cloud-Native Development" },
    { icon: <Globe className="w-5 h-5" />, label: "Distributed High Availability" },
    { icon: <ShieldCheck className="w-5 h-5" />, label: "IAM, OAuth & SSO Security" },
    { icon: <GitBranch className="w-5 h-5" />, label: "DevOps & CI/CD Pipelines" },
  ];

  const industries = [
    { label: "Financial Services & Banking" },
    { label: "Supply Chain & Inventory Management" },
    { label: "Healthcare & Patient Platforms" },
    { label: "Manufacturing & Production Automation" },
    { label: "Human Resource & Payroll Systems" },
    { label: "Logistics, Tracking & Fleet Management" },
  ];

  const whyItems = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Engineering Excellence",
      desc: "Strong delivery standards and deep expertise in enterprise technologies that power mission-critical systems.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Transparent Communication",
      desc: "Dedicated project management, proactive updates, and clear milestone tracking throughout every engagement.",
    },
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Security & Scalability First",
      desc: "Every system is engineered for performance, enterprise-grade security, and long-term scalability from day one.",
    },
  ];

  const benefits = [
    "Reduce operational overhead significantly",
    "Accelerate time-to-market by 40%+",
    "Eliminate costly manual processes",
    "Enable data-driven decision making",
    "Future-proof your technology stack",
  ];

  const faqs = [
    {
      q: "What types of software does CAPCO build?",
      a: "We build custom enterprise software, ERP/CRM systems, SaaS platforms, automation tools, APIs, desktop applications, and full product engineering solutions — tailored to your industry and business needs.",
    },
    {
      q: "How long does a typical software project take?",
      a: "MVPs and smaller systems typically ship in 8–16 weeks. Enterprise-grade platforms and complex integrations can take 4–12 months depending on scope. We define timelines clearly during discovery.",
    },
    {
      q: "Do you support legacy system modernization?",
      a: "Absolutely. We have strong experience migrating legacy codebases to modern architectures including microservices, cloud-native, and containerized environments while maintaining business continuity.",
    },
    {
      q: "Which cloud platforms do you deploy to?",
      a: "We support Azure, AWS, and Google Cloud. Our teams are experienced in cloud-native development, Docker, Kubernetes, and hybrid cloud setups depending on your infrastructure requirements.",
    },
    {
      q: "What does post-launch support look like?",
      a: "We offer dedicated support, maintenance, and enhancement plans after delivery. This includes bug fixes, performance monitoring, feature iterations, and ongoing DevOps pipeline management.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>Ready to build your next software product?</span>
        <button className={styles.stickyCtaBtn}>Get a Free Quote</button>
      </div>

      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroInner}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Software Development Services
          </div>

          <h1 className={styles.heroTitle}>
            Build Software That
            <br />
            <em>Scales With You</em>
          </h1>

          <p className={styles.heroDesc}>
            CAPCO CONSULTING SERVICES delivers end-to-end software development designed to help
            businesses build secure, scalable, and high-performance applications that drive
            real-world impact.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
            <button className={styles.btnGhost}>
              View Our Work <ArrowRight className="w-4 h-4" />
            </button>
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

      {/* ── INTRO BAND ── */}
      <section className={styles.introBand}>
        <StaggerIn>
          <div className={styles.introInner}>
            <p className={styles.introText}>
              Our engineering teams specialize in creating custom software solutions that solve
              real-world problems, enhance operational efficiency, and support long-term digital
              transformation — from concept through to production.
            </p>
          </div>
        </StaggerIn>
      </section>

      {/* ── CORE OFFERINGS ── */}
      <section className={styles.offerings}>
        <div className={styles.sectionInner}>
          <StaggerIn delay={0}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Core Offerings</span>
              <h2 className={styles.sectionTitle}>
                Software Built for <em>Your Business</em>
              </h2>
              <p className={styles.sectionDesc}>
                From enterprise platforms to lean MVPs, we engineer software solutions that are
                robust, maintainable, and purpose-built for your industry.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.cardsGrid}>
            {offerings.map((item, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.card}>
                  <div className={styles.cardAccentBar} />
                  <div className={styles.cardIconWrap}>{item.icon}</div>
                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.cardDesc}>{item.description}</p>
                  <ul className={styles.cardPoints}>
                    {item.points.map((p, j) => (
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

      {/* ── ENGINEERING EXPERTISE ── */}
      <section className={styles.engineeringSection}>
        <div className={styles.engineeringInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow} style={{ color: "var(--color-primary)" }}>
                Engineering Expertise
              </span>
              <h2 className={styles.engineeringTitle}>
                Modern Architectures for
                <br />
                <em>Enterprise-Grade Systems</em>
              </h2>
              <p className={styles.engineeringDesc}>
                We build robust, secure software using proven patterns and modern infrastructure
                approaches — built to withstand real enterprise demands.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.engineeringGrid}>
            {engineering.map((item, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.engineeringItem}>
                  <div className={styles.engineeringItemIcon}>{item.icon}</div>
                  <span className={styles.engineeringItemLabel}>{item.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ── */}
      <section className={styles.techSection}>
        <div className={styles.sectionInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Technology Stack</span>
              <h2 className={styles.sectionTitle}>
                The Technologies We <em>Master</em>
              </h2>
              <p className={styles.sectionDesc}>
                Our teams are fluent across the full development spectrum — from backend APIs to
                cloud infrastructure and modern frontend frameworks.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.techGrid}>
            {techStack.map((cat, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.techCard}>
                  <div className={styles.techCardHeader}>
                    <div className={styles.techCardIcon}>{cat.icon}</div>
                    <span className={styles.techCardCategory}>{cat.category}</span>
                  </div>
                  <ul className={styles.techList}>
                    {cat.items.map((item, j) => (
                      <li key={j} className={styles.techListItem}>
                        <span className={styles.techDot} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section className={styles.industriesSection}>
        <div className={styles.sectionInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionEyebrow}>Industry Applications</span>
              <h2 className={styles.sectionTitle}>
                Built for <em>Mission-Critical</em> Operations
              </h2>
              <p className={styles.sectionDesc}>
                Our software development services support diverse industries where reliability,
                performance, and security are non-negotiable.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.industriesGrid}>
            {industries.map((ind, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.industryItem}>
                  <span className={styles.industryCheck}>✓</span>
                  <span className={styles.industryLabel}>{ind.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CAPCO ── */}
      <section
        style={{ padding: "clamp(5rem,10vw,9rem) clamp(1.5rem,5vw,4rem)", background: "var(--color-white)" }}
      >
        <div
          ref={whyRef}
          className={styles.whySection}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.whyVisible : ""}`}>
            <span className={styles.sectionEyebrow}>Why CAPCO</span>
            <h2 className={styles.whyTitle}>
              Why Businesses Choose
              <br />
              <em>CAPCO Engineering</em>
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

          <div className={`${styles.whyRight} ${whyVisible ? styles.whyVisible : ""}`}>
            <div className={styles.benefitsCard}>
              <div className={styles.benefitsCardHead}>
                <h3 className={styles.benefitsCardTitle}>
                  What You Gain When You Partner With CAPCO
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
              <div className={styles.benefitsCardFooter}>
                <p className={styles.benefitsFooterNote}>
                  Dedicated support, maintenance &amp; enhancements included post-delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAND ── */}
      <div className={styles.statsBand}>
        {stats.map((s, i) => (
          <div className={styles.statBlock} key={i}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── FAQ ── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.faqLeft}>
              <span className={styles.sectionEyebrow}>FAQ</span>
              <h2 className={styles.faqTitle}>
                Common Questions
                <br />
                <em>Answered</em>
              </h2>
              <p className={styles.faqSub}>
                Everything you need to know about working with CAPCO on your next software
                development project.
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

      {/* ── CTA SECTION ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Build High-Quality Software
              <br />
              <em>with CAPCO</em>
            </h2>
            <p className={styles.ctaDesc}>
              Whether you're developing a new software product or modernizing an existing
              system, CAPCO CONSULTING SERVICES provides strategic engineering expertise
              to bring your vision to life.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnPrimary}>Get a Free Consultation</button>
              <button className={styles.ctaBtnGhost}>Talk to Our Engineers</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section style={{ background: "var(--color-white)" }}>
        <div className={styles.contactSection}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Contact Us</span>
              <h2 className={styles.contactTitle}>
                Let&apos;s Build Something
                <br />
                <em>Remarkable Together</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your software challenge and we&apos;ll design the right
                engineering solution for your business.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDotGreen} />
                  Response within 24 hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDotTeal} />
                  Free initial consultation
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
                  <label className={styles.formLabel}>Company</label>
                  <input type="text" placeholder="Your Company Name" className={styles.formInput} />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Project Type</label>
                <select className={styles.formInput}>
                  <option value="">Select a service...</option>
                  <option>Custom Enterprise Software</option>
                  <option>ERP / CRM Development</option>
                  <option>SaaS Platform</option>
                  <option>API Development</option>
                  <option>Automation & Workflow</option>
                  <option>MVP / Product Engineering</option>
                  <option>Legacy Modernization</option>
                </select>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Project Details</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Tell us about your project, team size, timeline, and goals..."
                />
              </div>
              <button className={styles.formSubmit}>Submit Inquiry →</button>
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}