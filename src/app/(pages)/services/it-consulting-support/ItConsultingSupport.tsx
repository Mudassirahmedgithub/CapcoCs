"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Map,
  Layers,
  GitBranch,
  Zap,
  Cpu,
  Server,
  Cloud,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ArrowRight,
  BarChart2,
  Users,
  Award,
  TrendingUp,
} from "lucide-react";
import styles from "./it.module.css";
import { ReactNode } from "react";

/* ── Scroll-triggered visibility hook ────────────────────── */
function useInView(threshold = 0.12): [React.RefObject<HTMLDivElement>, boolean] {
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

/* ── Stagger animation wrapper ───────────────────────────── */
type FadeInProps = { children: ReactNode; className?: string; delay?: number };
function FadeIn({ children, className, delay = 0 }: FadeInProps) {
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

/* ─────────────────────────────────────────────────────────── */

export default function ITConsultingPage() {
  const [stickyVisible, setStickyVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Data ── */
  const services = [
    {
      icon: <Map className="w-5 h-5" />,
      title: "IT Strategy & Roadmapping",
      desc: "Aligning your technology vision with business goals through detailed assessments and future-ready roadmaps.",
      points: ["Technology gap analysis", "Long-term IT planning", "Business-tech alignment"],
    },
    {
      icon: <Layers className="w-5 h-5" />,
      title: "Digital Transformation Consulting",
      desc: "Enabling organizations to adopt modern technology stacks, cloud solutions, and automation frameworks.",
      points: ["Legacy modernization", "Cloud adoption strategy", "Automation frameworks"],
    },
    {
      icon: <GitBranch className="w-5 h-5" />,
      title: "Enterprise Architecture Design",
      desc: "Designing scalable, secure, and high-performance architectures for enterprise systems.",
      points: ["Scalable system design", "Security-first architecture", "Integration blueprints"],
    },
    {
      icon: <Zap className="w-5 h-5" />,
      title: "Process Optimization & Automation",
      desc: "Identifying inefficiencies and implementing AI-driven automation, RPA, and workflow enhancements.",
      points: ["Workflow automation (RPA)", "AI-driven efficiency gains", "Operational cost reduction"],
    },
    {
      icon: <Cpu className="w-5 h-5" />,
      title: "Technology Stack Advisory",
      desc: "Helping you choose the right tools, frameworks, platforms, and integrations for long-term success.",
      points: ["Vendor evaluation", "Framework selection", "Integration planning"],
    },
    {
      icon: <Server className="w-5 h-5" />,
      title: "IT Infrastructure Assessment",
      desc: "Evaluating servers, networks, storage, and security to improve performance and reduce costs.",
      points: ["Performance benchmarking", "Network & storage audits", "Cost optimization"],
    },
    {
      icon: <Cloud className="w-5 h-5" />,
      title: "Cloud & Migration Consulting",
      desc: "Expert guidance in cloud assessment, migration planning, optimization, and hybrid cloud models.",
      points: ["Cloud readiness assessment", "Migration execution plans", "Hybrid cloud strategy"],
    },
    {
      icon: <ShieldCheck className="w-5 h-5" />,
      title: "Cybersecurity Consulting",
      desc: "Strengthening your security posture through audits, compliance checks, risk mitigation, and threat modeling.",
      points: ["Security posture audits", "Compliance & risk reviews", "Threat modeling"],
    },
  ];

  const whyItems = [
    {
      icon: <Award className="w-5 h-5" />,
      title: "Deep Industry Expertise",
      desc: "Expert consultants with extensive cross-industry technology and business experience spanning finance, healthcare, retail, and more.",
    },
    {
      icon: <TrendingUp className="w-5 h-5" />,
      title: "End-to-End Guidance",
      desc: "From initial strategy and design through execution, deployment, and ongoing support — we stay with you at every stage.",
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: "Customized Solutions",
      desc: "Tailored consulting engagements built around your unique business objectives, constraints, and long-term vision.",
    },
    {
      icon: <BarChart2 className="w-5 h-5" />,
      title: "Scalability & ROI Focus",
      desc: "Every recommendation is evaluated for scalability, performance, and measurable return on investment.",
    },
  ];

  const stats = [
    { num: "150+", label: "Projects Delivered" },
    { num: "98%", label: "Client Satisfaction" },
    { num: "40%", label: "Avg. Cost Savings" },
    { num: "12+", label: "Years Experience" },
  ];

  const processSteps = [
    { num: "01", title: "Discovery & Assessment", desc: "We audit your current IT landscape, identify gaps, and understand your business objectives." },
    { num: "02", title: "Strategy & Roadmap", desc: "We design a clear, phased technology roadmap aligned to your growth strategy." },
    { num: "03", title: "Solution Design", desc: "Architecture, tool selection, and process blueprints are crafted for your environment." },
    { num: "04", title: "Execution & Support", desc: "We guide implementation, track KPIs, and provide ongoing advisory support." },
  ];

  const faqs = [
    {
      q: "What industries do you serve?",
      a: "We serve clients across finance, healthcare, retail, manufacturing, logistics, and technology sectors. Our consultants bring domain-specific expertise combined with deep technical knowledge.",
    },
    {
      q: "How long does a typical IT consulting engagement take?",
      a: "Timelines vary based on scope. A focused assessment may take 2–4 weeks, while a full digital transformation roadmap engagement can span 3–6 months. We tailor every engagement to your needs.",
    },
    {
      q: "Can you work with our existing IT team?",
      a: "Absolutely. We work alongside your internal teams in a collaborative advisory capacity, upskilling staff and ensuring knowledge transfer throughout the engagement.",
    },
    {
      q: "Do you provide post-engagement support?",
      a: "Yes. We offer ongoing advisory retainers so you always have access to expert guidance as your business and technology landscape evolves.",
    },
    {
      q: "How do you ensure recommendations are cost-effective?",
      a: "Every recommendation is evaluated against ROI benchmarks, TCO analysis, and your budget constraints. We prioritize practical, high-impact improvements over unnecessary complexity.",
    },
  ];

  return (
    <div className={styles.page}>


      {/* ── HERO ───────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroOrbA} />
        <div className={styles.heroOrbB} />
        <div className={styles.heroInner}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            IT Consulting Services
          </div>

          <h1 className={styles.heroTitle}>
            Strategic IT Consulting
            <br />
            <em>Built for What's Next</em>
          </h1>

          <p className={styles.heroDesc}>
            CAPCO CONSULTING SERVICES provides strategic, end-to-end IT consulting
            solutions designed to help businesses modernize, transform, and stay competitive
            in a fast-changing technology landscape.
          </p>
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
          <FadeIn>
            <span className={styles.eyebrow}>Our Expertise</span>
            <h2 className={styles.overviewTitle}>
              IT Consulting <em>Expertise</em>
            </h2>
            <p className={styles.overviewDesc}>
              From strategic roadmapping to hands-on architecture design, our consultants
              deliver measurable transformation across every layer of your technology ecosystem.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ── SERVICES GRID ──────────────────────────────────────── */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <FadeIn key={i} delay={i * 0.06}>
                <div className={styles.serviceCard}>
                  <div className={styles.cardTopBar} />
                  <div className={styles.serviceIconWrap}>{s.icon}</div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <ul className={styles.servicePoints}>
                    {s.points.map((p, j) => (
                      <li key={j} className={styles.servicePoint}>
                        <CheckCircle2 className="w-4 h-4" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ────────────────────────────────────────────── */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <FadeIn>
            <span className={styles.eyebrow}>How We Work</span>
            <h2 className={styles.processTitle}>
              Our Consulting <em>Process</em>
            </h2>
            <p className={styles.processSubtitle}>
              A proven four-step engagement model that delivers clarity, confidence, and results.
            </p>
          </FadeIn>
          <div className={styles.processSteps}>
            {processSteps.map((step, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={styles.processStep}>
                  <span className={styles.processStepNum}>{step.num}</span>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY CAPCO ──────────────────────────────────────────── */}
      <section className={styles.whySection}>
        <div className={styles.whyInner}>
          <div className={styles.whyLeft}>
            <FadeIn>
              <span className={styles.eyebrow} style={{ color: "var(--color-primary)" }}>
                Why Choose CAPCO
              </span>
              <h2 className={styles.whyTitle}>
                Expert Guidance.
                <br />
                <em>Lasting Results.</em>
              </h2>
              <p className={styles.whyDesc}>
                CAPCO CONSULTING SERVICES ensures your IT ecosystem is optimized,
                future-ready, and aligned with your business vision — empowering your
                organization to innovate and grow confidently.
              </p>
              <button className={styles.btnPrimary} style={{ marginTop: "2rem" }}>
                Start Your Transformation
                <ArrowRight className="w-4 h-4" />
              </button>
            </FadeIn>
          </div>
          <div className={styles.whyRight}>
            {whyItems.map((item, i) => (
              <FadeIn key={i} delay={i * 0.1}>
                <div className={styles.whyCard}>
                  <div className={styles.whyCardIcon}>{item.icon}</div>
                  <div>
                    <h4 className={styles.whyCardTitle}>{item.title}</h4>
                    <p className={styles.whyCardDesc}>{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA BAND ───────────────────────────────────────────── */}
      <section className={styles.ctaBand}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaInner}>
          <FadeIn>
            <h2 className={styles.ctaTitle}>
              Ready to Modernize
              <br />
              <em>Your IT Ecosystem?</em>
            </h2>
            <p className={styles.ctaDesc}>
              Transparent communication, continuous support, and solutions
              tailored to your business objectives. Let&apos;s build your roadmap.
            </p>
          </FadeIn>
        </div>
      </section>
      {/* ── FAQ ────────────────────────────────────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          <FadeIn>
            <span className={styles.eyebrow}>FAQs</span>
            <h2 className={styles.faqTitle}>
              Common <em>Questions</em>
            </h2>
          </FadeIn>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.07}>
                <div
                  className={`${styles.faqItem} ${openFaq === i ? styles.faqOpen : ""}`}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <button className={styles.faqQuestion}>
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 ${styles.faqChevron}`} />
                  </button>
                  <div className={styles.faqAnswer}>
                    <p className={styles.faqAnswerText}>{faq.a}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}