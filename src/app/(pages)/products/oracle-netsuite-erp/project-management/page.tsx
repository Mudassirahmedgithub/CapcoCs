// ProjectManagementPage — page.tsx
// Oracle NetSuite Project Management content
// CSS Module: project.module.css | Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  FolderKanban,
  DollarSign,
  Users,
  TrendingUp,
  BarChart3,
  Clock,
  Target,
  FileText,
  CalendarCheck,
  Layers,
  ShieldCheck,
  Lightbulb,
  AlertCircle,
  LineChart,
} from "lucide-react";
import styles from "./project.module.css";
import { ReactNode } from "react";

/* ── Types ─────────────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ─────────────────────── */
function useInView(
  threshold = 0.15
): [React.RefObject<HTMLDivElement>, boolean] {
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

/* ── Stagger animation wrapper ─────────────────────────────── */
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

export default function ProjectManagementPage() {
  /* Sticky CTA visibility */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 400);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* Why-section in-view refs */
  const [whyRef, whyVisible] = useInView(0.15);
  const [featureRef, featureVisible] = useInView(0.15);

  /* ── Data ── */
  const capabilities = [
    {
      title: "Project Tracking",
      description:
        "Gain real-time visibility into project status, milestones, and deliverables across your entire portfolio with NetSuite's centralised project management dashboard.",
      points: [
        "Real-time project status updates",
        "Milestone & task management",
        "Gantt chart scheduling",
        "Cross-project portfolio views",
      ],
      icon: <FolderKanban className="w-5 h-5" />,
    },
    {
      title: "Project Budgeting",
      description:
        "Control costs and prevent overruns with integrated project budgeting that connects directly to your financial ledger, giving you live spend vs. budget visibility.",
      points: [
        "Live budget vs. actuals tracking",
        "Cost category management",
        "Budget revision workflows",
        "ERP-connected financial reporting",
      ],
      icon: <DollarSign className="w-5 h-5" />,
    },
    {
      title: "Resource Allocation",
      description:
        "Optimise workforce deployment by matching the right skills to the right projects at the right time — reducing bench time and eliminating resource conflicts.",
      points: [
        "Skill-based resource matching",
        "Availability & utilisation tracking",
        "Forecasted resource demand",
        "Team workload balancing",
      ],
      icon: <Users className="w-5 h-5" />,
    },
    {
      title: "Profitability Management",
      description:
        "Measure project health and margin at every stage. NetSuite connects project costs, revenue recognition, and billing for a complete picture of profitability.",
      points: [
        "Project margin analysis",
        "Revenue recognition automation",
        "Billing & invoicing integration",
        "Profitability forecasting",
      ],
      icon: <TrendingUp className="w-5 h-5" />,
    },
    {
      title: "Time & Expense Capture",
      description:
        "Streamline time entry and expense submission directly tied to projects, enabling accurate cost allocation and faster client billing cycles.",
      points: [
        "Mobile time entry",
        "Expense report automation",
        "Approval workflow routing",
        "Direct project cost allocation",
      ],
      icon: <Clock className="w-5 h-5" />,
    },
    {
      title: "Project Reporting & Analytics",
      description:
        "Deliver boardroom-ready insights with pre-built project dashboards, KPI scorecards, and customisable reports built on live ERP data.",
      points: [
        "Pre-built project KPI dashboards",
        "Custom report builder",
        "Variance & trend analysis",
        "Executive project scorecards",
      ],
      icon: <BarChart3 className="w-5 h-5" />,
    },
  ];

  const featureHighlights = [
    {
      icon: <Target className="w-5 h-5" />,
      title: "Milestone-Based Billing",
      desc: "Automate revenue recognition and invoicing tied to project milestone completions, reducing billing delays and disputes.",
    },
    {
      icon: <FileText className="w-5 h-5" />,
      title: "Contract & SOW Management",
      desc: "Manage project contracts and statements of work within NetSuite, ensuring every deliverable is tracked against agreed terms.",
    },
    {
      icon: <CalendarCheck className="w-5 h-5" />,
      title: "Baseline vs. Actuals Tracking",
      desc: "Compare planned schedules and budgets against real outcomes at any point in the project lifecycle to course-correct early.",
    },
    {
      icon: <AlertCircle className="w-5 h-5" />,
      title: "Risk & Issue Management",
      desc: "Capture, assign, and monitor project risks and issues with configurable severity ratings and escalation workflows.",
    },
  ];

  const modules = [
    { label: "Project Centre", icon: <FolderKanban className="w-5 h-5" /> },
    { label: "Budget Management", icon: <DollarSign className="w-5 h-5" /> },
    { label: "Resource Planning", icon: <Users className="w-5 h-5" /> },
    { label: "Time Tracking", icon: <Clock className="w-5 h-5" /> },
    { label: "Expense Management", icon: <FileText className="w-5 h-5" /> },
    { label: "Revenue Recognition", icon: <TrendingUp className="w-5 h-5" /> },
    { label: "Project Analytics", icon: <LineChart className="w-5 h-5" /> },
    { label: "Portfolio Dashboards", icon: <Layers className="w-5 h-5" /> },
  ];

  const whyItems = [
    {
      icon: <Lightbulb className="w-5 h-5" />,
      title: "Single Source of Truth",
      desc: "Eliminate fragmented spreadsheets. NetSuite unifies project data, financials, and resources in one cloud platform accessible from anywhere.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Built for Service Businesses",
      desc: "Purpose-built for professional services, IT, and consulting organisations — with industry-specific workflows out of the box.",
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Real-Time Financial Visibility",
      desc: "Project decisions connect directly to your general ledger — no reconciliation lag, no manual exports, no data gaps.",
    },
  ];

  const benefits = [
    "Reduce project cost overruns by up to 30%",
    "Improve resource utilisation across all projects",
    "Cut billing cycle time with automated invoicing",
    "Increase on-time project delivery rates",
    "Achieve full P&L visibility per project",
    "Eliminate manual reporting with live dashboards",
  ];

  const stats = [
    { num: "37%", label: "Reduction in Cost Overruns" },
    { num: "2×", label: "Faster Billing Cycles" },
    { num: "94%", label: "Resource Utilisation Rate" },
    { num: "100%", label: "Real-Time Data Visibility" },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Project Initiation",
      desc: "Define scope, budget, and team structure with linked contract and SOW templates.",
    },
    {
      num: "02",
      title: "Resource Planning",
      desc: "Match skills to tasks, forecast demand, and resolve conflicts before projects begin.",
    },
    {
      num: "03",
      title: "Execution & Tracking",
      desc: "Monitor milestones, capture time & expenses, and track actuals against budget in real time.",
    },
    {
      num: "04",
      title: "Billing & Revenue",
      desc: "Trigger automated invoicing and revenue recognition based on milestones or time & materials.",
    },
    {
      num: "05",
      title: "Closure & Analysis",
      desc: "Run post-project profitability reports and capture lessons learned for future bids.",
    },
  ];

  const dashboardProjects = [
    { label: "ERP Implementation – Apex Corp", pct: 78 },
    { label: "Cloud Migration – Redstone Ltd", pct: 54 },
    { label: "Digital Transformation – Velara", pct: 92 },
  ];

  const faqs = [
    {
      q: "What is NetSuite Project Management?",
      a: "NetSuite Project Management is a cloud-based module within the NetSuite ERP platform that enables organisations to plan, execute, track, and report on projects — integrating financials, resource management, time tracking, and billing in a single system.",
    },
    {
      q: "How does NetSuite handle project budgeting?",
      a: "NetSuite allows you to create detailed project budgets by cost category, track actuals in real time against the budget, manage budget revisions, and generate variance reports — all connected directly to your financial ledger for immediate accuracy.",
    },
    {
      q: "Can NetSuite manage resources across multiple projects?",
      a: "Yes. NetSuite's Resource Allocation module provides visibility into team availability, skill sets, and utilisation across all active and planned projects, helping managers prevent conflicts and optimise workforce deployment.",
    },
    {
      q: "How does revenue recognition work in NetSuite projects?",
      a: "NetSuite automates revenue recognition based on configurable rules aligned with ASC 606 and IFRS 15 standards. Revenue can be recognised by project milestones, percentage completion, or time and materials, with direct posting to the general ledger.",
    },
    {
      q: "Does NetSuite integrate with third-party project tools?",
      a: "NetSuite offers native integrations and open APIs that connect with tools like Salesforce, Microsoft Project, Jira, and various procurement and HR platforms, ensuring project data flows seamlessly across your technology stack.",
    },
    {
      q: "Is NetSuite suitable for professional services organisations?",
      a: "Absolutely. NetSuite is one of the leading platforms for professional services automation (PSA), serving IT services, consulting, engineering, and managed services firms who need to connect project delivery with financial performance.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>
          Ready to streamline project delivery?
        </span>
        <button className={styles.stickyCtaBtn}>Request a Demo</button>
      </div>

      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Oracle NetSuite — Project Management
          </div>

          <h1 className={styles.heroTitle}>
            Deliver Projects On Time,
            <br />
            <em>On Budget, At Margin</em>
          </h1>

          <p className={styles.heroDesc}>
            Unify project tracking, budgeting, resource allocation, and
            profitability management in one cloud ERP platform — built for
            professional services teams that need complete project-to-cash
            visibility.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Request a Free Demo</button>
            <button className={styles.btnGhost}>Explore NetSuite ERP</button>
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

      {/* ── CAPABILITIES ───────────────────────────────────────── */}
      <section className={styles.capabilities}>
        <StaggerIn className={styles.capabilitiesHeader}>
          <span className={styles.sectionEyebrow}>Core Capabilities</span>
          <h2 className={styles.sectionTitle}>
            Everything You Need to Manage
            <br />
            <em>Projects End-to-End</em>
          </h2>
          <p className={styles.sectionDesc}>
            NetSuite Project Management delivers a complete suite of tools that
            connect project operations with financial performance — from initial
            scoping to final invoicing.
          </p>
        </StaggerIn>

        <div className={styles.cardsGrid}>
          {capabilities.map((c, i) => (
            <StaggerIn key={i} delay={i * 0.07}>
              <div className={styles.card}>
                <div className={styles.cardBorderTop} />
                <div className={styles.cardIconWrap}>{c.icon}</div>
                <h3 className={styles.cardTitle}>{c.title}</h3>
                <p className={styles.cardDesc}>{c.description}</p>
                <ul className={styles.cardPoints}>
                  {c.points.map((p, j) => (
                    <li key={j}>{p}</li>
                  ))}
                </ul>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── FEATURE HIGHLIGHT ──────────────────────────────────── */}
      <section className={styles.featureSection}>
        <div className={styles.featureInner}>
          <div
            ref={featureRef}
            className={`${styles.featureLeft} ${featureVisible ? styles.visible : ""}`}
          >
            <span className={styles.sectionEyebrow}>Platform Highlights</span>
            <h2 className={styles.sectionTitle}>
              Advanced Features for
              <br />
              <em>Project-Driven Businesses</em>
            </h2>
            <p className={styles.sectionDesc}>
              Beyond basic task management — NetSuite delivers the financial
              depth and operational control that complex service delivery
              demands.
            </p>
            <div className={styles.featureList}>
              {featureHighlights.map((f, i) => (
                <div className={styles.featureItem} key={i}>
                  <div className={styles.featureItemIcon}>{f.icon}</div>
                  <div>
                    <div className={styles.featureItemTitle}>{f.title}</div>
                    <div className={styles.featureItemDesc}>{f.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div
            className={`${styles.featureRight} ${featureVisible ? styles.visible : ""}`}
          >
            {/* Dashboard mockup */}
            <div className={styles.dashboardCard}>
              <div className={styles.dashboardHeader}>
                <span className={styles.dashDot} />
                <span className={styles.dashDot} />
                <span className={styles.dashDot} />
                <span className={styles.dashboardTitle}>
                  Project Portfolio — Live
                </span>
              </div>
              <div className={styles.dashboardBody}>
                {/* Metrics */}
                <div className={styles.dashMetrics}>
                  <div className={styles.dashMetric}>
                    <span className={styles.dashMetricVal}>24</span>
                    <span className={styles.dashMetricLabel}>Active Projects</span>
                  </div>
                  <div className={styles.dashMetric}>
                    <span className={styles.dashMetricVal}>$4.2M</span>
                    <span className={styles.dashMetricLabel}>Budget in Flight</span>
                  </div>
                  <div className={styles.dashMetric}>
                    <span className={styles.dashMetricVal}>91%</span>
                    <span className={styles.dashMetricLabel}>On-Track Rate</span>
                  </div>
                </div>

                {/* Progress bars */}
                <div className={styles.dashProgress}>
                  {dashboardProjects.map((proj, i) => (
                    <div className={styles.dashProgressItem} key={i}>
                      <span className={styles.dashProgressLabel}>
                        {proj.label}
                      </span>
                      <div className={styles.dashProgressBar}>
                        <div
                          className={styles.dashProgressFill}
                          style={{ width: `${proj.pct}%` }}
                        />
                      </div>
                      <span className={styles.dashProgressPct}>
                        {proj.pct}%
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── MODULES GRID ───────────────────────────────────────── */}
      <section className={styles.modulesSection}>
        <StaggerIn>
          <div className={styles.modulesHeader}>
            <div>
              <span className={styles.sectionEyebrow}>NetSuite Modules</span>
              <h2 className={styles.sectionTitle}>
                A Complete Project
                <br />
                <em>Management Suite</em>
              </h2>
            </div>
            <p className={styles.sectionDesc}>
              Eight integrated modules working together to give your team a
              unified view of project performance, resource capacity, and
              financial outcomes — all within the NetSuite ERP ecosystem.
            </p>
          </div>
        </StaggerIn>

        <div className={styles.modulesGrid}>
          {modules.map((m, i) => (
            <StaggerIn key={i} delay={i * 0.06}>
              <div className={styles.moduleItem}>
                <div className={styles.moduleItemIcon}>{m.icon}</div>
                <span className={styles.moduleItemLabel}>{m.label}</span>
              </div>
            </StaggerIn>
          ))}
        </div>
      </section>

      {/* ── WHY NETSUITE ───────────────────────────────────────── */}
      <section style={{ background: "var(--color-off-white)" }}>
        <div
          ref={whyRef}
          className={styles.whySection}
        >
          <div className={`${styles.whyLeft} ${whyVisible ? styles.visible : ""}`}>
            <span className={styles.sectionEyebrow}>Why NetSuite</span>
            <h2 className={styles.whyTitle}>
              Why Leading Services Firms
              <br />
              <em>Choose NetSuite</em>
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
                  Transform Project Delivery with Integrated ERP
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

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section className={styles.processSection}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.processHeader}>
              <span className={styles.sectionEyebrow}>How It Works</span>
              <h2 className={styles.sectionTitle}>
                The NetSuite Project
                <br />
                <em>Lifecycle in 5 Steps</em>
              </h2>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.processStep}>
                  <div className={styles.processStepNum}>{step.num}</div>
                  <div className={styles.processStepTitle}>{step.title}</div>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

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
                Everything you need to know about NetSuite Project Management
                and how it integrates with your existing ERP environment.
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
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Get Started</span>
            <h2 className={styles.ctaTitle}>
              Ready to Take Control of
              <br />
              <em>Every Project?</em>
            </h2>
            <p className={styles.ctaDesc}>
              See how NetSuite Project Management connects your team,
              budget, and results — request a personalised demo today.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.btnPrimary}>Request a Free Demo</button>
              <button className={styles.btnGhost}>Download Datasheet</button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────────────── */}
      <section style={{ background: "var(--color-white)" }}>
        <div className={styles.contactSection}>
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Contact Us</span>
              <h2 className={styles.contactTitle}>
                Talk to a NetSuite
                <br />
                <em>Project Specialist</em>
              </h2>
              <p className={styles.contactDesc}>
                Tell us about your business, team size, and project management
                challenges — we'll help you find the right NetSuite
                configuration for your needs.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Responding within one business day
                </div>
                <div
                  className={styles.contactMetaItem}
                  style={{ gap: "0.75rem" }}
                >
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
                  Free consultation included
                </div>
                <div
                  className={styles.contactMetaItem}
                  style={{ gap: "0.75rem" }}
                >
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
                  <label className={styles.formLabel}>Phone</label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 000-0000"
                    className={styles.formInput}
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Company</label>
                  <input
                    type="text"
                    placeholder="Company Name"
                    className={styles.formInput}
                  />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Area of Interest</label>
                <select className={styles.formSelect}>
                  <option value="">Select a module</option>
                  <option>Project Tracking</option>
                  <option>Budget Management</option>
                  <option>Resource Allocation</option>
                  <option>Profitability Reporting</option>
                  <option>Full Project Management Suite</option>
                </select>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Message</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Tell us about your project management challenges, team size, and goals..."
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