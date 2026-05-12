"use client";

import React, { useEffect, useRef, useState, ReactNode } from "react";
import {
  Database,
  ShieldCheck,
  FileSearch,
  Lock,
  ClipboardList,
  RefreshCw,
  Brain,
  BarChart2,
  Layers,
  Zap,
  MessageSquare,
  Eye,
  AlertTriangle,
  Activity,
  Server,
  GitBranch,
  Cloud,
  Cpu,
  CheckCircle2,
  ArrowRight,
  Boxes,
  Network,
  FlaskConical,
} from "lucide-react";
import styles from "./data.module.css";

/* ── Scroll-triggered visibility hook ───────────────────── */
function useInView(threshold = 0.12): [React.RefObject<HTMLDivElement>, boolean] {
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

type StaggerProps = { children: ReactNode; className?: string; delay?: number };

function StaggerIn({ children, className, delay = 0 }: StaggerProps) {
  const [ref, visible] = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.75s ${delay}s cubic-bezier(0.22,1,0.36,1), transform 0.75s ${delay}s cubic-bezier(0.22,1,0.36,1)`,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────── */

export default function DataGovernancePage() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 450);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Data ── */
  const governanceServices = [
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Enterprise Data Governance Frameworks",
      desc: "Design and implement org-wide governance policies, ownership structures, and stewardship programs that ensure data integrity at every layer.",
    },
    {
      icon: <CheckCircle2 className="w-5 h-5" />,
      title: "Data Quality Management & Validation",
      desc: "Automated pipelines that profile, cleanse, and continuously monitor data quality, catching anomalies before they reach production.",
    },
    {
      icon: <Database className="w-5 h-5" />,
      title: "Master Data Management (MDM)",
      desc: "Create a single source of truth for critical business entities — customers, products, vendors — across distributed enterprise systems.",
    },
    {
      icon: <FileSearch className="w-5 h-5" />,
      title: "Metadata Management & Data Cataloging",
      desc: "Build searchable, lineage-aware data catalogs that make your data assets discoverable and auditable across every department.",
    },
    {
      icon: <Lock className="w-5 h-5" />,
      title: "Data Security, Compliance & Access Controls",
      desc: "Role-based access management, encryption-at-rest, and fine-grained entitlements engineered to meet enterprise security standards.",
    },
    {
      icon: <ClipboardList className="w-5 h-5" />,
      title: "Audit Trails & Regulatory Reporting",
      desc: "End-to-end audit logging and automated compliance reports for GDPR, HIPAA, ISO 27001, and other global regulatory frameworks.",
    },
    {
      icon: <RefreshCw className="w-5 h-5" />,
      title: "Data Lifecycle Management",
      desc: "Define retention policies, archival strategies, and automated deletion workflows that keep your data estate lean, compliant, and cost-efficient.",
    },
  ];

  const aiServices = [
    {
      icon: <BarChart2 className="w-5 h-5" />,
      title: "Predictive Analytics & Forecasting",
      desc: "Machine learning models that surface business trends early — from demand forecasting to revenue projection and churn prediction.",
    },
    {
      icon: <Brain className="w-5 h-5" />,
      title: "Machine Learning Model Development",
      desc: "End-to-end ML development: data prep, feature engineering, training, evaluation, and production-ready deployment pipelines.",
    },
    {
      icon: <Network className="w-5 h-5" />,
      title: "Deep Learning Solutions",
      desc: "Neural architectures for complex problems — image recognition, sequence modeling, and multi-modal enterprise applications.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "AI-powered Automation & Intelligent Workflows",
      desc: "Replace brittle rule-based systems with adaptive AI workflows that learn, adjust, and scale with your operational demands.",
    },
    {
      icon: <MessageSquare className="w-5 h-5" />,
      title: "Natural Language Processing (NLP)",
      desc: "Document understanding, sentiment analysis, entity extraction, and conversational AI that turns unstructured text into actionable intelligence.",
    },
    {
      icon: <Eye className="w-5 h-5" />,
      title: "Computer Vision & Image Processing",
      desc: "Real-time visual inspection, object detection, and image classification systems for manufacturing, retail, healthcare, and logistics.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5" />,
      title: "Anomaly Detection & Risk Prediction",
      desc: "Proactive detection systems that flag fraud, operational failures, and data drift before they become costly business incidents.",
    },
    {
      icon: <Activity className="w-5 h-5" />,
      title: "MLOps & Model Lifecycle Management",
      desc: "Continuous training, monitoring, versioning, and redeployment pipelines that keep your models accurate, explainable, and production-ready.",
    },
  ];

  const engineeringServices = [
    {
      icon: <Server className="w-5 h-5" />,
      title: "Data Warehousing & Lakehouse Architecture",
      desc: "Design modern analytical platforms that unify structured and unstructured data with full ACID compliance and sub-second query performance.",
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "ETL / ELT Pipeline Development",
      desc: "Robust, observable data pipelines with error handling, schema evolution support, and lineage tracking baked in from day one.",
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Real-Time Data Streaming",
      desc: "Event-driven architectures using Kafka and Flink that deliver millisecond-latency insights to operational systems and dashboards.",
    },
    {
      icon: <Boxes className="w-5 h-5" />,
      title: "Big Data Processing",
      desc: "Petabyte-scale workloads on Spark and Hadoop with cost-optimized cluster configurations and intelligent autoscaling.",
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud Data Platforms",
      desc: "Native implementations on Azure Data Factory, AWS Glue, BigQuery, and Databricks — architected for cloud-native performance.",
    },
  ];

  const useCases = [
    { icon: "📊", label: "Customer analytics & retention prediction" },
    { icon: "💹", label: "Sales forecasting & revenue optimization" },
    { icon: "🔒", label: "Fraud detection & risk management" },
    { icon: "🚚", label: "Supply chain & demand prediction" },
    { icon: "🤖", label: "Intelligent chatbots & virtual assistants" },
    { icon: "📄", label: "Document processing & automation" },
    { icon: "🏥", label: "Healthcare diagnostics & patient analytics" },
  ];

  const techStack = [
    {
      category: "Data Engineering",
      icon: <Server className="w-5 h-5" />,
      tools: ["Apache Spark / Hadoop", "Azure Data Factory", "AWS Glue & EMR", "Google BigQuery", "Databricks"],
    },
    {
      category: "Machine Learning",
      icon: <FlaskConical className="w-5 h-5" />,
      tools: ["TensorFlow", "PyTorch", "Scikit-Learn", "Hugging Face Transformers", "XGBoost / LightGBM"],
    },
    {
      category: "DevOps & MLOps",
      icon: <Cpu className="w-5 h-5" />,
      tools: ["Docker & Kubernetes", "MLflow", "Airflow", "GitHub Actions / Azure DevOps", "CI/CD for ML Pipelines"],
    },
  ];

  const whyItems = [
    { icon: <ShieldCheck className="w-5 h-5" />, title: "Robust, Scalable Solutions", desc: "Enterprise-grade architectures built to grow with your data volume and organizational complexity." },
    { icon: <Brain className="w-5 h-5" />, title: "Cross-Domain Expertise", desc: "Deep specialization across AI, ML, cloud platforms, and data engineering under one roof." },
    { icon: <ClipboardList className="w-5 h-5" />, title: "Governance-First Approach", desc: "Proven frameworks for regulatory compliance and data quality that protect and unlock business value." },
    { icon: <Activity className="w-5 h-5" />, title: "Lifecycle Management", desc: "Dedicated support, monitoring, and continuous optimization from deployment through maturity." },
    { icon: <BarChart2 className="w-5 h-5" />, title: "Business-First Mindset", desc: "Every solution is anchored to measurable outcomes — cost reduction, revenue growth, and operational efficiency." },
  ];

  const faqs = [
    { q: "What does a Data Governance framework include?", a: "It covers data ownership, stewardship roles, quality standards, lineage tracking, access policies, and compliance procedures — all mapped to your organizational structure and regulatory environment." },
    { q: "How do you ensure regulatory compliance with GDPR and HIPAA?", a: "We build automated audit trails, data classification systems, consent management workflows, and access control layers aligned with each regulation's specific requirements." },
    { q: "What AI use cases do you specialize in for enterprise?", a: "Customer analytics, demand forecasting, fraud detection, NLP for document automation, and intelligent workflow orchestration are our most common enterprise implementations." },
    { q: "Can you integrate your solutions with our existing cloud infrastructure?", a: "Yes — we work natively across AWS, Azure, and GCP, and integrate with existing data warehouses, ERP/CRM systems, and REST APIs without requiring a full platform migration." },
    { q: "Do you provide ongoing model monitoring after deployment?", a: "Absolutely. Our MLOps practice includes continuous drift detection, retraining triggers, performance dashboards, and versioned rollback capabilities to keep models accurate in production." },
  ];

  const stats = [
    { num: "150+", label: "Governance Frameworks Delivered" },
    { num: "99%", label: "Compliance Audit Pass Rate" },
    { num: "70%", label: "Avg. Data Pipeline Efficiency Gain" },
    { num: "24/7", label: "Monitoring & Support" },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ─────────────────────────── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.stickyVisible : ""}`}>
        <span className={styles.stickyText}>Ready to build your data foundation?</span>
        <button className={styles.stickyBtn}>Talk to an Expert</button>
      </div>

      {/* ── HERO ──────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlowA} />
        <div className={styles.heroGlowB} />
        <div className={styles.heroContent}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Data Governance & AI Services
          </div>
          <h1 className={styles.heroTitle}>
            Govern Your Data.
            <br />
            <em>Power Your Intelligence.</em>
          </h1>
          <p className={styles.heroDesc}>
            CAPCO CONSULTING SERVICES helps organizations build strong data foundations and intelligent systems
            that drive measurable business value. Our Data Governance and AI services ensure your data is
            accurate, secure, compliant, and strategically deployed to power automation, decision-making,
            and digital transformation.
          </p>
          <div className={styles.heroActions}>
            <button className={styles.btnPrimary}>Get a Free Consultation</button>
            <button className={styles.btnGhost}>
              Explore Services <ArrowRight className="w-4 h-4" />
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

      {/* ── DATA GOVERNANCE SECTION ───────────── */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Core Services
              </span>
              <h2 className={styles.sectionTitle}>
                Data Governance <em>Services</em>
              </h2>
              <p className={styles.sectionDesc}>
                We establish governance frameworks that ensure data quality, security, consistency,
                and regulatory compliance across your entire organization.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.cardsGrid}>
            {governanceServices.map((s, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.card}>
                  <div className={styles.cardAccent} />
                  <div className={styles.cardIcon}>{s.icon}</div>
                  <h3 className={styles.cardTitle}>{s.title}</h3>
                  <p className={styles.cardDesc}>{s.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AI & ML SECTION ───────────────────── */}
      <section className={styles.servicesSectionAlt}>
        <div className={styles.sectionInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                AI & Machine Learning
              </span>
              <h2 className={styles.sectionTitle}>
                AI & Machine Learning <em>Services</em>
              </h2>
              <p className={styles.sectionDesc}>
                CAPCO builds advanced AI systems to automate workflows, optimize operations, and deliver
                predictive insights that help organizations stay ahead of the competition.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.cardsGridWide}>
            {aiServices.map((s, i) => (
              <StaggerIn key={i} delay={i * 0.055}>
                <div className={styles.cardWide}>
                  <div className={styles.cardIconCircle}>{s.icon}</div>
                  <div>
                    <h3 className={styles.cardWideTitle}>{s.title}</h3>
                    <p className={styles.cardWideDesc}>{s.desc}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── DATA ENGINEERING SECTION ──────────── */}
      <section className={styles.servicesSection}>
        <div className={styles.sectionInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Data Engineering
              </span>
              <h2 className={styles.sectionTitle}>
                Data Engineering & <em>Architecture</em>
              </h2>
              <p className={styles.sectionDesc}>
                Strong AI begins with a strong data foundation. We design and implement enterprise-grade
                data pipelines and architectures optimized for speed, reliability, and scalability.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.cardsGridFull}>
            {engineeringServices.map((s, i) => (
              <StaggerIn key={i} delay={i * 0.07}>
                <div className={styles.cardFull}>
                  <div className={styles.cardFullIcon}>{s.icon}</div>
                  <h3 className={styles.cardFullTitle}>{s.title}</h3>
                  <p className={styles.cardFullDesc}>{s.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── USE CASES BAND ────────────────────── */}
      <section className={styles.useCasesSection}>
        <div className={styles.sectionInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow} style={{ color: "var(--color-primary-dark)" }}>
                <span className={styles.eyebrowDot} />
                Real-World Impact
              </span>
              <h2 className={styles.sectionTitle}>
                Enterprise AI <em>Use Cases</em>
              </h2>
            </div>
          </StaggerIn>

          <div className={styles.useCasesGrid}>
            {useCases.map((u, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <div className={styles.useCaseItem}>
                  <span className={styles.useCaseEmoji}>{u.icon}</span>
                  <span className={styles.useCaseLabel}>{u.label}</span>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── TECH STACK ────────────────────────── */}
      <section className={styles.techSection}>
        <div className={styles.techInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow} style={{ color: "rgba(255,255,255,0.6)", borderColor: "rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.08)" }}>
                <span style={{ background: "rgba(255,255,255,0.5)", borderRadius: "50%", width: 6, height: 6, display: "inline-block" }} />
                Technology Stack
              </span>
              <h2 className={styles.techTitle}>
                The Stack That Powers <em>Every Solution</em>
              </h2>
              <p className={styles.techDesc}>
                Battle-tested tools, frameworks, and cloud platforms chosen for production reliability
                and enterprise scale.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.techGrid}>
            {techStack.map((cat, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.techCard}>
                  <div className={styles.techCardHeader}>
                    <div className={styles.techCardIcon}>{cat.icon}</div>
                    <h3 className={styles.techCardTitle}>{cat.category}</h3>
                  </div>
                  <ul className={styles.techList}>
                    {cat.tools.map((t, j) => (
                      <li key={j} className={styles.techItem}>
                        <span className={styles.techDot} />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CAPCO ─────────────────────────── */}
      <section className={styles.whySection}>
        <div className={styles.sectionInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Why Choose CAPCO
              </span>
              <h2 className={styles.sectionTitle}>
                Built for <em>Enterprise Confidence</em>
              </h2>
            </div>
          </StaggerIn>

          <div className={styles.whyGrid}>
            {whyItems.map((w, i) => (
              <StaggerIn key={i} delay={i * 0.08}>
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

      {/* ── FAQ ───────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>
                <span className={styles.eyebrowDot} />
                Common Questions
              </span>
              <h2 className={styles.sectionTitle}>
                Frequently <em>Asked Questions</em>
              </h2>
            </div>
          </StaggerIn>

          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <StaggerIn key={i} delay={i * 0.05}>
                <div className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}>
                  <button
                    className={styles.faqQuestion}
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  >
                    {f.q}
                    <span className={styles.faqIcon}>{openFaq === i ? "−" : "+"}</span>
                  </button>
                  <div className={styles.faqAnswer}>
                    <p className={styles.faqAnswerText}>{f.a}</p>
                  </div>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA SECTION ───────────────────────── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner}>
          <StaggerIn>
            <span className={styles.ctaEyebrow}>Start Today</span>
            <h2 className={styles.ctaTitle}>
              Build Intelligent,
              <br />
              <em>Data-Driven Systems with CAPCO</em>
            </h2>
            <p className={styles.ctaDesc}>
              From data governance frameworks to advanced AI solutions, CAPCO CONSULTING SERVICES ensures
              your organization is ready for the future of intelligence and automation.
            </p>
            <div className={styles.ctaActions}>
              <button className={styles.ctaBtnPrimary}>Get a Free Consultation</button>
              <button className={styles.ctaBtnGhost}>View Case Studies</button>
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}