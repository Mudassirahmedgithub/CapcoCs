"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion"
import styles from "./aiconsulting.module.css"
import { ReactNode } from "react"
/* ─── DATA ─── */
const frameworkSteps = [
  { step: "01", title: "Discovery & Opportunity Mapping", desc: "We analyze business workflows, identify automation opportunities, and evaluate how AI can create measurable impact across your organization." },
  { step: "02", title: "Strategy & Architecture", desc: "Our experts design AI strategies, select the right tools, and define scalable architectures tailored to your business needs." },
  { step: "03", title: "Model Development & Integration", desc: "We build, train, and integrate machine learning models and AI solutions into your existing systems seamlessly." },
  { step: "04", title: "Deployment & Optimization", desc: "AI solutions are deployed securely and continuously optimized to ensure performance, scalability, and ROI." },
]

const services = [
  { icon: "✦", title: "Generative AI Solutions", items: ["Custom AI assistants powered by LLMs", "AI-driven content generation", "Intelligent chatbots & conversational systems", "Enterprise knowledge assistants"] },
  { icon: "◈", title: "Machine Learning & Model Engineering", items: ["Predictive analytics and forecasting", "Custom ML model design and training", "Data pipelines and model optimization", "ML deployment and monitoring"] },
  { icon: "⬡", title: "Robotic Process Automation", items: ["Business process automation", "Workflow optimization at scale", "Integration with enterprise systems", "Reduced manual operations"] },
  { icon: "◎", title: "Natural Language Processing", items: ["Text classification & sentiment analysis", "AI-powered document processing", "Voice and language-based applications", "Smart search & recommendation engines"] },
  { icon: "⊕", title: "AI-Powered Analytics", items: ["Data-driven decision support", "Real-time analytics dashboards", "Business intelligence powered by AI", "Predictive insights for growth"] },
]

const technologies = [
  { label: "TensorFlow" }, { label: "PyTorch" }, { label: "Scikit-learn" },
  { label: "OpenAI APIs" }, { label: "LangChain" }, { label: "LLM Fine-tuning" },
  { label: "AWS" }, { label: "Azure AI" }, { label: "Google Cloud AI" },
  { label: "Python" }, { label: "RPA Platforms" }, { label: "Microservices" },
]

const metrics = [
  { value: "3×", label: "Faster Deployment" },
  { value: "87%", label: "Automation Rate" },
  { value: "40+", label: "Enterprises Served" },
  { value: "$2B+", label: "Value Unlocked" },
]

const faqs = [
  { q: "What are AI consulting services?", a: "AI consulting helps businesses identify opportunities for automation, data intelligence, and machine learning. Experts assess your processes, create an AI strategy, and implement solutions that deliver measurable value." },
  { q: "How does the AI consulting process work?", a: "It involves discovery, strategy design, model development, integration, and ongoing optimization to ensure long-term success." },
  { q: "Which industries benefit from AI consulting?", a: "Healthcare, finance, retail, manufacturing, logistics, and technology benefit greatly from AI consulting and automation." },
  { q: "Do you provide implementation or only consulting?", a: "We provide both AI strategy consulting and full implementation support — end to end." },
  { q: "How do you ensure responsible AI usage?", a: "We follow ethical AI practices focused on transparency, fairness, security, and regulatory compliance at every stage." },
]

/* ─── ANIMATION VARIANTS ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] } }),
}
const fadeIn = {
  hidden: { opacity: 0 },
  visible: (i = 0) => ({ opacity: 1, transition: { duration: 0.5, delay: i * 0.08 } }),
}

/* ─── COMPONENTS ─── */
type AnimatedSectionProps = {
  children: ReactNode
  className?: string
}

function AnimatedSection({ children, className }: AnimatedSectionProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(ref, { once: true, margin: "-80px" })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  )
}

type GradientCardProps = {
  children: ReactNode
  className?: string
  delay?: number
}

function GradientCard({ children, className = "", delay = 0 }: GradientCardProps) {
  const [hovered, setHovered] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      className={`${styles.gradientCard} ${className}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
    >
      <div
        className={`${styles.gradientBorder} ${
          hovered ? styles.gradientBorderActive : ""
        }`}
      />
      <div className={styles.cardInner}>{children}</div>
    </motion.div>
  )
}

type CounterProps = {
  value: string
}

function Counter({ value }: CounterProps) {
  const [display, setDisplay] = useState("0")
  const ref = useRef<HTMLSpanElement | null>(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return

    const num = parseFloat(value.replace(/[^0-9.]/g, ""))
    const suffix = value.replace(/[0-9.]/g, "")

    let start = 0
    const duration = 1800

    const step = (timestamp: number) => { // ✅ FIXED
      if (!start) start = timestamp
      const progress = Math.min((timestamp - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)

      setDisplay(`${Math.floor(eased * num)}${suffix}`)

      if (progress < 1) requestAnimationFrame(step)
      else setDisplay(value)
    }

    requestAnimationFrame(step)
  }, [isInView, value])

  return <span ref={ref}>{display}</span>
}

type FAQ = {
  q: string
  a: string
}

type FAQItemProps = {
  faq: FAQ
  index: number
}

function FAQItem({ faq, index }: FAQItemProps) {
  const [open, setOpen] = useState(false)

  return (
    <motion.div
      variants={fadeUp}
      custom={index * 0.5}
      className={styles.faqItem}
      onClick={() => setOpen(!open)}
    >
      <div className={styles.faqQuestion}>
        <span>{faq.q}</span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.2 }}
          className={styles.faqIcon}
        >
          +
        </motion.span>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className={styles.faqAnswer}
          >
            <p>{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}



/* ─── NOISE OVERLAY ─── */
function Noise() {
  return <div className={styles.noise} aria-hidden />
}

/* ─── MAIN PAGE ─── */
export default function AIConsultingPage() {
  const heroRef = useRef(null)
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] })
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <main className={styles.page}>
      <Noise />
      
      {/* ── HERO ── */}
      <section className={styles.hero} ref={heroRef}>
        <div className={styles.heroBg} aria-hidden>
          <div className={styles.heroOrb1} />
          <div className={styles.heroOrb2} />
          <div className={styles.heroGrid} />
        </div>

        <motion.div className={styles.heroContent} style={{ y: heroY, opacity: heroOpacity }}>
          <motion.div variants={fadeIn} initial="hidden" animate="visible" custom={0} className={styles.heroBadge}>
            <span className={styles.heroBadgeDot} />
            AI Consulting & Intelligent Automation
          </motion.div>

          <motion.h1 variants={fadeUp} initial="hidden" animate="visible" custom={1} className={styles.heroHeading}>
            Architect the<br />
            <em className={styles.heroAccent}>intelligence</em><br />
            of tomorrow
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" custom={2} className={styles.heroSub}>
            Transform your business with AI-driven strategies, machine learning solutions,
            and intelligent automation designed to unlock insights and accelerate growth.
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={3} className={styles.heroCTAs}>
            <button className="btn btn-primary">Get a Free Consultation</button>
            <button className="btn btn-ghost">Talk to an AI Expert</button>
          </motion.div>

          {/* Metrics row */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={4} className={styles.heroMetrics}>
            {metrics.map((m, i) => (
              <div key={i} className={styles.metric}>
                <span className={styles.metricValue}><Counter value={m.value} /></span>
                <span className={styles.metricLabel}>{m.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </section>

      {/* ── FRAMEWORK ── */}
      <section className={styles.section}>
        <AnimatedSection className={styles.sectionInner}>
          <motion.div variants={fadeUp} className={styles.sectionLabel}>Our Process</motion.div>
          <motion.h2 variants={fadeUp} custom={0.5} className={styles.sectionHeading}>From Discovery to Deployment</motion.h2>
          <motion.p variants={fadeUp} custom={1} className={styles.sectionSub}>
            A rigorous, four-stage methodology that guides every AI initiative from idea to impact.
          </motion.p>

          <div className={styles.frameworkGrid}>
            {frameworkSteps.map((step, i) => (
              <GradientCard key={i} delay={i * 0.5}>
                <span className={styles.stepNumber}>{step.step}</span>
                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.desc}</p>
              </GradientCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── SERVICES ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <AnimatedSection className={styles.sectionInner}>
          <motion.div variants={fadeUp} className={styles.sectionLabel}>What We Deliver</motion.div>
          <motion.h2 variants={fadeUp} custom={0.5} className={styles.sectionHeading}>AI Consulting Services</motion.h2>
          <motion.p variants={fadeUp} custom={1} className={styles.sectionSub}>
            From strategy to implementation — every capability your organization needs.
          </motion.p>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <GradientCard key={i} delay={i * 0.4} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{s.icon}</span>
                <h3 className={styles.cardTitle}>{s.title}</h3>
                <ul className={styles.serviceList}>
                  {s.items.map((item, j) => (
                    <li key={j} className={styles.serviceItem}>
                      <span className={styles.bullet} />
                      {item}
                    </li>
                  ))}
                </ul>
              </GradientCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── TECH PILLS ── */}
      <section className={styles.section}>
        <AnimatedSection className={styles.sectionInner}>
          <motion.div variants={fadeUp} className={styles.sectionLabel}>Stack</motion.div>
          <motion.h2 variants={fadeUp} custom={0.5} className={styles.sectionHeading}>Technologies We Master</motion.h2>

          <div className={styles.techGrid}>
            {technologies.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeIn}
                custom={i * 0.3}
                className={styles.techPill}
                whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              >
                {t.label}
              </motion.div>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── WHY US ── */}
      <section className={`${styles.section} ${styles.sectionDark}`}>
        <AnimatedSection className={styles.sectionInner}>
          <motion.div variants={fadeUp} className={styles.sectionLabel}>Why Choose Us</motion.div>
          <motion.h2 variants={fadeUp} custom={0.5} className={styles.sectionHeading}>Built Different</motion.h2>

          <div className={styles.whyGrid}>
            {[
              { title: "End-to-End Expertise", desc: "From strategy to deployment, we manage the entire AI lifecycle — no handoffs, no gaps.", icon: "∞" },
              { title: "Business-Focused", desc: "Every AI solution is designed around real business challenges and measurable goals.", icon: "◎" },
              { title: "Industry Proven", desc: "Our expertise spans multiple industries, enabling practical and effective AI implementations.", icon: "✦" },
              { title: "Responsible AI", desc: "We prioritize transparency, fairness, and responsible practices in every solution we develop.", icon: "⬡" },
            ].map((f, i) => (
              <GradientCard key={i} delay={i * 0.4}>
                <span className={styles.whyIcon}>{f.icon}</span>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardDesc}>{f.desc}</p>
              </GradientCard>
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── CTA BANNER ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerBg} aria-hidden>
          <div className={styles.ctaOrb1} />
          <div className={styles.ctaOrb2} />
        </div>
        <AnimatedSection className={styles.ctaContent}>
          <motion.h2 variants={fadeUp} className={styles.ctaHeading}>
            Ready to transform<br />your business with AI?
          </motion.h2>
          <motion.p variants={fadeUp} custom={0.5} className={styles.ctaSub}>
            Our AI specialists are ready to explore how artificial intelligence can improve efficiency,
            unlock insights, and create new opportunities for growth.
          </motion.p>
          <motion.div variants={fadeUp} custom={1} className={styles.ctaBtns}>
            <button className="btn btn-primary">Book a Free Consultation</button>
            <button className="btn btn-ghost">Start Your AI Project</button>
          </motion.div>
        </AnimatedSection>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.section}>
        <AnimatedSection className={styles.sectionInner}>
          <motion.div variants={fadeUp} className={styles.sectionLabel}>FAQ</motion.div>
          <motion.h2 variants={fadeUp} custom={0.5} className={styles.sectionHeading}>Common Questions</motion.h2>

          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} index={i} />
            ))}
          </div>
        </AnimatedSection>
      </section>

      {/* ── FOOTER STRIP ── */}
      <section className={styles.footerStrip}>
        <p>We help organizations harness the power of AI to innovate faster, automate smarter, and build a sustainable competitive advantage.</p>
      </section>

    </main>
  )
}