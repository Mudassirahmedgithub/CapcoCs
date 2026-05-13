// HumanCapitalManagementPage — page.tsx
// Oracle HCM-inspired content
// CSS Module: human.module.css | Globals: globals.css

"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Users,
  BarChart3,
  GraduationCap,
  HeartHandshake,
  Shield,
  Globe,
  Zap,
  Brain,
  ClipboardList,
  TrendingUp,
  Award,
  Target,
  Layers,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";
import styles from "./human.module.css";
import { ReactNode } from "react";

/* ── Types ─────────────────────────────────────────── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ──────────────── */
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

/* ── Stagger animation wrapper ─────────────────────── */
function StaggerIn({ children, className, delay = 0 }: StaggerInProps) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(22px)",
        transition: `opacity 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.7s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────── */

export default function HumanCapitalManagementPage() {
  /* Sticky CTA */
  const [stickyVisible, setStickyVisible] = useState(false);
  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 450);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* FAQ open state */
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  /* Form state */
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    employees: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSent(true);
  };

  /* ── Data ── */
  const stats = [
    { num: "6,000+", label: "Global Customers" },
    { num: "33M+",   label: "Employees Managed" },
    { num: "200+",   label: "Countries Supported" },
    { num: "99.9%",  label: "Uptime SLA" },
  ];

  const hcmModules = [
    {
      icon: <Users className="w-5 h-5" />,
      title: "Core HR & Workforce",
      description:
        "A single source of truth for all employee data. Manage global workforce structures, org charts, employment lifecycle events, and HR compliance across every country you operate in.",
      points: [
        "Centralised employee records",
        "Global org management",
        "Workforce lifecycle automation",
      ],
    },
    {
      icon: <GraduationCap className="w-5 h-5" />,
      title: "Talent Management",
      description:
        "Attract, develop, and retain the best talent with integrated recruiting, onboarding, performance management, and succession planning built on a unified data model.",
      points: [
        "AI-driven candidate matching",
        "Goal & performance tracking",
        "Succession & career pathing",
      ],
    },
    {
      icon: <BarChart3 className="w-5 h-5" />,
      title: "Workforce Intelligence",
      description:
        "Turn workforce data into strategic insight. Embedded analytics and AI-powered dashboards surface headcount trends, attrition risk, skills gaps, and labour cost drivers in real time.",
      points: [
        "Predictive attrition modelling",
        "Real-time headcount analytics",
        "Skills gap identification",
      ],
    },
    {
      icon: <HeartHandshake className="w-5 h-5" />,
      title: "Learning & Development",
      description:
        "Deliver personalised learning journeys at scale. Curate internal and third-party content, track completions, ensure mandatory compliance training, and measure programme ROI.",
      points: [
        "Personalised learning paths",
        "Compliance training tracking",
        "Learning ROI reporting",
      ],
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Payroll & Benefits",
      description:
        "Process payroll accurately and on time across multiple countries with automated tax calculations, benefits administration, and audit-ready compliance reporting built in.",
      points: [
        "Multi-country payroll engine",
        "Benefits enrolment & lifecycle",
        "Tax & compliance automation",
      ],
    },
    {
      icon: <Target className="w-5 h-5" />,
      title: "Workforce Planning",
      description:
        "Align workforce strategy with business goals. Model headcount scenarios, identify capacity gaps, and build dynamic plans that adapt to changing business conditions.",
      points: [
        "Headcount scenario modelling",
        "Capacity & demand planning",
        "Budget workforce alignment",
      ],
    },
  ];

  const features = [
    {
      icon: <Brain className="w-4 h-4" />,
      title: "AI & Machine Learning Built In",
      desc: "Oracle Fusion HCM embeds AI across every module — from candidate ranking to flight-risk detection — so your HR team makes smarter decisions faster.",
    },
    {
      icon: <Globe className="w-4 h-4" />,
      title: "Truly Global, Locally Compliant",
      desc: "Pre-built support for 200+ countries with localised payroll rules, statutory reporting, and labour law updates delivered automatically.",
    },
    {
      icon: <Shield className="w-4 h-4" />,
      title: "Enterprise-Grade Security",
      desc: "Role-based access controls, data residency options, SOC 2 Type II certification, and full audit trails protect sensitive workforce data end-to-end.",
    },
    {
      icon: <Zap className="w-4 h-4" />,
      title: "Continuous Quarterly Updates",
      desc: "No costly upgrades. Oracle delivers product innovation every quarter, automatically, so your organisation is always on the latest capabilities.",
    },
    {
      icon: <Layers className="w-4 h-4" />,
      title: "Open Integration Platform",
      desc: "REST APIs, pre-built connectors, and Oracle Integration Cloud make it simple to connect HCM with ERP, finance, and third-party tools.",
    },
    {
      icon: <TrendingUp className="w-4 h-4" />,
      title: "Employee Self-Service",
      desc: "A modern, mobile-first experience lets employees manage their own data, benefits, time-off, and career development without raising an IT ticket.",
    },
  ];

  const capabilities = [
    { icon: <Users className="w-5 h-5" />,        label: "Core HR" },
    { icon: <GraduationCap className="w-5 h-5" />, label: "Recruiting" },
    { icon: <ClipboardList className="w-5 h-5" />, label: "Payroll" },
    { icon: <BarChart3 className="w-5 h-5" />,    label: "Analytics" },
    { icon: <Award className="w-5 h-5" />,         label: "Performance" },
    { icon: <HeartHandshake className="w-5 h-5" />, label: "Benefits" },
    { icon: <Brain className="w-5 h-5" />,         label: "AI Insights" },
    { icon: <Globe className="w-5 h-5" />,         label: "Global Payroll" },
  ];

  const processSteps = [
    {
      num: "01",
      title: "Discovery & Assessment",
      desc: "We audit your current HR landscape, data maturity, and business objectives to map the right HCM configuration.",
    },
    {
      num: "02",
      title: "Solution Design",
      desc: "Our consultants design the module architecture, integration blueprint, and a phased rollout plan tailored to your workforce.",
    },
    {
      num: "03",
      title: "Guided Implementation",
      desc: "Rapid configuration, data migration, testing, and training delivered by certified Oracle HCM specialists.",
    },
    {
      num: "04",
      title: "Optimise & Scale",
      desc: "Ongoing health checks, quarterly roadmap sessions, and access to new Oracle innovations as your business grows.",
    },
  ];

  const whyItems = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Oracle Certified Partner",
      desc: "Our team holds Oracle Fusion HCM certifications across every product pillar — HR, Talent, Payroll, and Analytics.",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Rapid Time to Value",
      desc: "Pre-built accelerators, proven templates, and a structured methodology mean most deployments go live in weeks, not years.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security & Compliance First",
      desc: "We implement role-based access, data governance frameworks, and GDPR-aligned controls from day one.",
    },
    {
      icon: <HeartHandshake className="w-6 h-6" />,
      title: "Dedicated Success Team",
      desc: "A named HCM consultant, project manager, and change management lead are with you from kickoff through hyper-care.",
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI-Led HR Transformation",
      desc: "We help you activate Oracle's embedded AI capabilities — skills inference, flight-risk alerts, and intelligent automation.",
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Reach, Local Expertise",
      desc: "Delivery teams across North America, EMEA, and APAC with deep knowledge of local payroll legislation and labour law.",
    },
  ];

  const benefits = [
    "Up to 40% reduction in HR administrative burden",
    "Improve talent retention with data-driven insights",
    "Achieve full payroll compliance in 200+ countries",
    "Unified employee experience on any device",
    "Real-time workforce analytics and reporting",
    "Seamless integration with Oracle ERP & Finance",
    "AI-powered skills matching and succession planning",
    "Continuous innovation delivered quarterly",
  ];

  const faqs = [
    {
      q: "What is Oracle HCM Cloud?",
      a: "Oracle Human Capital Management (HCM) Cloud is a complete suite of HR applications — spanning core HR, talent acquisition, payroll, learning, workforce management, and analytics — delivered as a unified SaaS solution on Oracle Cloud Infrastructure. It gives organisations a single source of truth for all workforce data.",
    },
    {
      q: "How does Oracle HCM handle global payroll?",
      a: "Oracle Global Payroll is natively embedded within the HCM suite and supports legislatively compliant payroll processing in 200+ countries. It provides localised tax calculations, statutory reporting, and automatic regulatory updates, eliminating the need for standalone payroll vendors.",
    },
    {
      q: "Can Oracle HCM integrate with our existing ERP system?",
      a: "Yes. Oracle HCM includes a rich set of REST APIs, SOAP web services, and pre-built connectors for Oracle ERP, third-party HRIS platforms, time & attendance systems, and more. Oracle Integration Cloud (OIC) provides a low-code integration layer for complex environments.",
    },
    {
      q: "How long does an Oracle HCM implementation take?",
      a: "Implementation timelines vary based on scope, modules, and data complexity. A focused Core HR deployment can go live in 8–12 weeks using our rapid-start accelerators. A full-suite enterprise rollout including Global Payroll and Analytics typically takes 6–12 months. We provide a detailed project timeline during the discovery phase.",
    },
    {
      q: "What AI features are available in Oracle HCM?",
      a: "Oracle HCM embeds AI and ML throughout the suite: intelligent candidate ranking in Recruiting, dynamic skills inference in Talent Management, flight-risk prediction in Workforce Intelligence, personalised learning recommendations, and natural-language HR chatbots. New AI capabilities are added quarterly.",
    },
    {
      q: "Is Oracle HCM Cloud compliant with GDPR and data privacy regulations?",
      a: "Oracle HCM Cloud includes built-in tools to support GDPR and broader data privacy compliance — including data residency controls, purpose limitation settings, consent management, right-to-erasure workflows, and comprehensive audit trails. Our team configures these controls as part of every implementation.",
    },
  ];

  const employeeRanges = [
    "1 – 100",
    "101 – 500",
    "501 – 2,000",
    "2,001 – 10,000",
    "10,000+",
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.visible : ""}`}>
        <span className={styles.stickyCtaText}>
          Ready to modernise your HR operations?
        </span>
        <button className={styles.stickyCtaBtn}>Book a Demo</button>
      </div>

      {/* ── HERO ───────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Oracle HCM Cloud Solutions
          </div>

          <h1 className={styles.heroTitle}>
            Transform Your Workforce with
            <br />
            <em>Intelligent HCM</em>
          </h1>

          <p className={styles.heroDesc}>
            Unify every aspect of Human Capital Management — from hire to retire —
            on a single cloud platform powered by Oracle Fusion HCM and built-in AI.
          </p>

          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>
              Request a Free Demo
            </button>
            <button className={styles.btnGhost}>
              Explore HCM Modules
            </button>
          </div>
        </div>

        {/* Stats band */}
        <div className={styles.heroStats}>
          {stats.map((s, i) => (
            <div className={styles.heroStat} key={i}>
              <span className={styles.heroStatNum}>{s.num}</span>
              <span className={styles.heroStatLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── OVERVIEW ───────────────────────────────────── */}
      <section className={styles.overview}>
        <StaggerIn>
          <div className={styles.overviewInner}>
            <span className={styles.sectionEyebrow}>What is HCM?</span>
            <h2 className={styles.sectionTitle}>
              One Platform for Your <em>Entire Workforce</em>
            </h2>
            <p className={styles.sectionDesc}>
              Human Capital Management (HCM) is the set of practices and technologies
              organisations use to recruit, manage, develop, and optimise their workforce.
              Oracle Fusion HCM Cloud brings together Core HR, Payroll, Talent, Learning,
              and Workforce Analytics into a single, AI-powered platform — giving HR
              leaders a complete view of their people and the insights to act on it.
            </p>
          </div>
        </StaggerIn>
      </section>

      {/* ── SOLUTIONS / MODULES ────────────────────────── */}
      <section className={styles.solutions}>
        <div className={styles.solutionsInner}>
          <StaggerIn>
            <div className={styles.solutionsHeader}>
              <span className={styles.sectionEyebrow}>HCM Modules</span>
              <h2 className={styles.sectionTitle}>
                Everything HR Needs, <em>Connected</em>
              </h2>
              <p className={styles.sectionDesc}>
                Oracle HCM Cloud covers every stage of the employee lifecycle
                with purpose-built modules that share a single data model and
                deliver a consistent employee experience.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.cardsGrid}>
            {hcmModules.map((mod, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.card}>
                  <div className={styles.cardIcon}>{mod.icon}</div>
                  <h3 className={styles.cardTitle}>{mod.title}</h3>
                  <p className={styles.cardDesc}>{mod.description}</p>
                  <ul className={styles.cardPoints}>
                    {mod.points.map((pt, j) => (
                      <li key={j}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURES / WHY HCM ─────────────────────────── */}
      <section className={styles.features}>
        <div className={styles.featuresInner}>
          <StaggerIn>
            <div className={styles.featuresLeft}>
              <span className={styles.sectionEyebrow}>Platform Advantage</span>
              <h2 className={styles.featuresTitle}>
                Built for the <em>Modern Enterprise</em>
              </h2>
              <p className={styles.featuresDesc}>
                Oracle HCM Cloud goes beyond process automation. It delivers
                strategic workforce intelligence, embedded AI, and a consumer-grade
                employee experience that legacy HR systems simply cannot match.
              </p>
              <div className={styles.featuresBadges}>
                {["Oracle Fusion", "AI/ML Built-In", "GDPR Ready", "Global Payroll", "Mobile-First", "Open APIs"].map((b, i) => (
                  <span key={i} className={styles.badge}>{b}</span>
                ))}
              </div>
            </div>
          </StaggerIn>

          <div className={styles.featuresRight}>
            {features.map((f, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.featureItem}>
                  <div className={styles.featureItemIcon}>{f.icon}</div>
                  <div className={styles.featureItemContent}>
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── STATS BAND ─────────────────────────────────── */}
      <section className={styles.statsBand}>
        {[
          { num: "40%",    label: "Reduction in HR Admin Time" },
          { num: "3×",     label: "Faster Time-to-Hire" },
          { num: "25%",    label: "Improvement in Retention" },
          { num: "£2.8M",  label: "Avg. Annual Cost Saving" },
        ].map((s, i) => (
          <StaggerIn key={i} delay={i * 0.08}>
            <div className={styles.statItem}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          </StaggerIn>
        ))}
      </section>

      {/* ── CAPABILITIES ───────────────────────────────── */}
      <section className={styles.capabilities}>
        <div className={styles.capabilitiesInner}>
          <div className={styles.capabilitiesHeader}>
            <StaggerIn>
              <span className={styles.sectionEyebrow}>Capabilities</span>
              <h2 className={styles.sectionTitle}>
                The Full Spectrum of <em>HR Technology</em>
              </h2>
            </StaggerIn>
            <StaggerIn delay={0.1}>
              <p className={styles.sectionDesc}>
                From day-to-day HR operations to strategic workforce planning,
                Oracle HCM Cloud provides the full capability stack modern
                organisations require to stay competitive.
              </p>
            </StaggerIn>
          </div>

          <div className={styles.capabilitiesGrid}>
            {capabilities.map((cap, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.capabilityCard}>
                  <div className={styles.capabilityIcon}>{cap.icon}</div>
                  <span className={styles.capabilityLabel}>{cap.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────── */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.processHeader}>
              <span className={styles.sectionEyebrow}>How We Work</span>
              <h2 className={styles.sectionTitle}>
                Your HCM Journey, <em>Step by Step</em>
              </h2>
              <p className={styles.sectionDesc}>
                Our structured implementation methodology minimises risk, accelerates
                time to value, and ensures your team is fully equipped to maximise
                Oracle HCM Cloud from day one.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
                <div className={styles.processStep}>
                  <div className={styles.processStepNum}>{step.num}</div>
                  <h4 className={styles.processStepTitle}>{step.title}</h4>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ─────────────────────────────────────── */}
      <section className={styles.whyUs}>
        <div className={styles.whyUsInner}>
          <StaggerIn>
            <div className={styles.whyUsHeader}>
              <span className={styles.sectionEyebrow}>Why Choose Us</span>
              <h2 className={styles.sectionTitle}>
                Trusted Oracle HCM <em>Specialists</em>
              </h2>
              <p className={styles.sectionDesc}>
                We don't just implement software — we partner with your HR leadership
                to drive measurable workforce transformation backed by deep Oracle expertise.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.whyUsGrid}>
            {whyItems.map((item, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.whyUsCard}>
                  <div className={styles.whyUsIcon}>{item.icon}</div>
                  <h3 className={styles.whyUsCardTitle}>{item.title}</h3>
                  <p className={styles.whyUsCardDesc}>{item.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── BENEFITS BAND ──────────────────────────────── */}
      <section className={styles.benefits}>
        <div className={styles.benefitsInner}>
          <StaggerIn>
            <h2 className={styles.benefitsTitle}>
              The Business Case for <em>Oracle HCM</em>
            </h2>
          </StaggerIn>
          <StaggerIn delay={0.1}>
            <ul className={styles.benefitsList}>
              {benefits.map((b, i) => (
                <li key={i} className={styles.benefitItem}>{b}</li>
              ))}
            </ul>
          </StaggerIn>
        </div>
      </section>

      {/* ── FAQ ────────────────────────────────────────── */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.faqHeader}>
              <span className={styles.sectionEyebrow}>FAQs</span>
              <h2 className={styles.sectionTitle}>
                Common Questions About <em>Oracle HCM</em>
              </h2>
            </div>
          </StaggerIn>

          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`${styles.faqItem} ${openFaq === i ? styles.open : ""}`}
              >
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
            ))}
          </div>
        </div>
      </section>

      {/* ── CONTACT ────────────────────────────────────── */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          {/* Left */}
          <StaggerIn>
            <div className={styles.contactLeft}>
              <span className={styles.sectionEyebrow}>Get in Touch</span>
              <h2 className={styles.contactTitle}>
                Start Your <em>HCM Transformation</em>
              </h2>
              <p className={styles.contactDesc}>
                Whether you're evaluating Oracle HCM for the first time or looking
                to optimise an existing deployment, our specialists are ready to help.
                Tell us about your workforce and we'll tailor a roadmap for you.
              </p>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Oracle-certified HCM consultants available now
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  Typical first response within 2 business hours
                </div>
                <div className={styles.contactMetaItem}>
                  <span className={styles.contactMetaDot} />
                  No obligation — free initial discovery call
                </div>
              </div>
            </div>
          </StaggerIn>

          {/* Right — Form */}
          <StaggerIn delay={0.12}>
            <form
              className={styles.contactForm}
              onSubmit={handleSubmit}
            >
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>First Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="Jane"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Last Name</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="Smith"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Work Email</label>
                  <input
                    type="email"
                    className={styles.formInput}
                    placeholder="jane@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Company</label>
                  <input
                    type="text"
                    className={styles.formInput}
                    placeholder="Acme Corp"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div className={styles.formField}>
                <label className={styles.formLabel}>Number of Employees</label>
                <select
                  className={styles.formSelect}
                  value={formData.employees}
                  onChange={(e) => setFormData({ ...formData, employees: e.target.value })}
                  required
                >
                  <option value="" disabled>Select headcount range</option>
                  {employeeRanges.map((r, i) => (
                    <option key={i} value={r}>{r}</option>
                  ))}
                </select>
              </div>

              <div className={`${styles.formField} ${styles.formFieldFull}`}>
                <label className={styles.formLabel}>Tell us about your HCM needs</label>
                <textarea
                  className={styles.formTextarea}
                  placeholder="Describe your current HR challenges, modules of interest, or project timeline..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <button type="submit" className={styles.formSubmit}>
                Request a Free Consultation
              </button>

              {formSent && (
                <div className={styles.formSuccess}>
                  <CheckCircle2 className="w-4 h-4" />
                  Thank you! One of our HCM specialists will be in touch within 2 business hours.
                </div>
              )}
            </form>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}