"use client";
import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import styles from "./aichatbot.module.css";

/* ─── Animation helpers ──────────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1], delay },
});

const stagger = (i: number, base: number = 0) => fadeUp(base + i * 0.08);

/* ─── Data ───────────────────────────────────────────────────── */
const solutions = [
  {
    icon: "💬",
    title: "Customer Support Chatbots",
    desc: "Provide 24/7 automated support that resolves tickets instantly and reduces team workload by up to 70%.",
  },
  {
    icon: "🚀",
    title: "Sales & Lead Generation",
    desc: "Convert visitors into qualified leads with intelligent conversations and smart product recommendations.",
  },
  {
    icon: "🏢",
    title: "HR & Employee Helpdesk",
    desc: "Help employees access HR policies, submit requests, and get instant, accurate assistance.",
  },
  {
    icon: "🎙️",
    title: "AI Voice Assistants",
    desc: "Enable natural voice-based interactions for customer service and smart assistant automation.",
  },
  {
    icon: "🏥",
    title: "Industry-Specific Chatbots",
    desc: "Custom chatbots built deep for healthcare, banking, retail, and education workflows.",
  },
];

const industries = [
  { label: "Healthcare", icon: "🏥" },
  { label: "Banking & Finance", icon: "🏦" },
  { label: "Retail & E-commerce", icon: "🛍️" },
  { label: "Education", icon: "🎓" },
  { label: "Insurance", icon: "🛡️" },
  { label: "Technology", icon: "💻" },
];

const process = [
  {
    title: "Strategy & Discovery",
    desc: "Analyze business goals and map conversational AI opportunities with measurable impact.",
  },
  {
    title: "Conversation Design",
    desc: "Design natural, goal-oriented dialogue flows that delight users at every touchpoint.",
  },
  {
    title: "AI Model Training",
    desc: "Train on NLP models and domain knowledge bases for precise, contextual responses.",
  },
  {
    title: "Integration",
    desc: "Connect with CRM, ERP, knowledge bases, and internal systems seamlessly.",
  },
  {
    title: "Deployment",
    desc: "Launch across websites, apps, messaging platforms, and voice channels simultaneously.",
  },
  {
    title: "Continuous Optimization",
    desc: "Improve performance through analytics, A/B testing, and ongoing model training.",
  },
];

const tech = [
  "Natural Language Processing",
  "Large Language Models",
  "Voice AI & Speech Recognition",
  "Cloud Infrastructure",
  "API & Enterprise Integrations",
  "RAG Pipelines",
  "Vector Databases",
];

const benefits = [
  {
    icon: "⚡",
    title: "End-to-End Development",
    desc: "Strategy, design, deployment and optimization — fully managed.",
  },
  {
    icon: "🌐",
    title: "Omnichannel Deployment",
    desc: "Web, apps, voice, SMS, WhatsApp — your chatbot goes everywhere.",
  },
  {
    icon: "🗣️",
    title: "100+ Languages",
    desc: "Multilingual AI that communicates natively in your customers' language.",
  },
  {
    icon: "🔒",
    title: "Enterprise Security",
    desc: "SOC 2 aligned practices and compliance standards built in from day one.",
  },
];

const faqs = [
  {
    q: "What exactly are AI chatbots?",
    a: "AI chatbots are conversational systems that use natural language processing and machine learning to understand user intent and provide accurate, automated responses — available 24/7 without human intervention.",
  },
  {
    q: "Can chatbots integrate with our CRM or ERP?",
    a: "Yes. We integrate with Salesforce, HubSpot, SAP, and most major platforms via API. If you have a custom stack, we build bespoke connectors.",
  },
  {
    q: "Do you develop voice-based AI assistants?",
    a: "Absolutely. We build voice-enabled chatbots supporting natural spoken conversations across IVR, smart speakers, and mobile.",
  },
  {
    q: "How accurate are AI chatbots?",
    a: "Accuracy continuously improves through interaction data, domain-specific training, and feedback loops — typically reaching 90%+ accuracy within weeks of deployment.",
  },
  {
    q: "Which industries benefit most?",
    a: "Healthcare, banking, retail, education, and insurance see the highest ROI — but any business with high-volume, repetitive communication is an ideal candidate.",
  },
];

/* ─── FAQ Item ───────────────────────────────────────────────── */
function FaqItem({ faq }: { faq: { q: string; a: string } }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={styles.faqItem} onClick={() => setOpen(!open)}>
      <div className={styles.faqQuestion}>
        <span className={styles.faqQ}>{faq.q}</span>
        <span className={styles.faqChevron}>{open ? "−" : "+"}</span>
      </div>
      <AnimatePresence>
        {open && (
          <motion.p
            className={styles.faqA}
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: "auto", marginTop: "0.75rem" }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            {faq.a}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

/* ─── Animated Card ──────────────────────────────────────────── */
function Card({
  icon,
  title,
  desc,
  number,
  dark,
  delay = 0,
}: {
  icon?: string;
  title: string;
  desc: string;
  number?: number;
  dark: boolean;
  delay?: number;
}) {
  return (
    <motion.div
      className={`${styles.gradCard} ${dark ? styles.gradCardDark : ""}`}
      {...stagger(0, delay)}
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
    >
      <div className={styles.cardGlow} />
      {number !== undefined && (
        <div className={styles.cardNumber}>{String(number + 1).padStart(2, "0")}</div>
      )}
      {icon && (
        <div className={`${styles.iconBadge} ${dark ? styles.iconBadgeDark : ""}`}>
          {icon}
        </div>
      )}
      <h3 className={`${styles.cardTitle} ${dark ? styles.cardTitleDark : styles.cardTitleLight}`}>
        {title}
      </h3>
      <p className={`${styles.cardDesc} ${dark ? styles.cardDescDark : styles.cardDescLight}`}>
        {desc}
      </p>
    </motion.div>
  );
}

/* ─── Page ───────────────────────────────────────────────────── */
export default function AIChatbotDevelopmentPage() {
  return (
    <main style={{ background: "var(--color-white)", color: "var(--color-ink)" }}>

      {/* ── Sticky CTA ── */}
      <div className={styles.stickyCta}>
        <span className={styles.stickyCtaLabel}>Ready to get started?</span>
        <button className={styles.stickyCtaBtn}>Free Consultation →</button>
      </div>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />

        <motion.div {...fadeUp(0)}>
          <span className={styles.heroPill}>
            <span className={styles.pillDot} />
            Conversational AI Platform
          </span>
        </motion.div>

        <motion.h1 className={styles.heroHeadline} {...fadeUp(0.1)}>
          Build AI chatbots that{" "}
          <em>actually convert</em>
        </motion.h1>

        <motion.p className={styles.heroSub} {...fadeUp(0.2)}>
          Intelligent, multilingual, enterprise-ready chatbots that automate support,
          generate leads, and scale customer experiences across every channel.
        </motion.p>

        <motion.div className={styles.heroActions} {...fadeUp(0.3)}>
          <button className={styles.btnPrimary}>Get a Free Consultation</button>
          <button className={styles.btnGhost}>
            <span>▶</span> See how it works
          </button>
        </motion.div>

        <motion.div className={styles.heroStats} {...fadeUp(0.45)}>
          {[
            { n: "98%", label: "Customer Satisfaction" },
            { n: "70%", label: "Ticket Deflection" },
            { n: "100+", label: "Languages Supported" },
            { n: "24/7", label: "Always On" },
          ].map((s, i) => (
            <div className={styles.statItem} key={i}>
              <div className={styles.statNumber}>{s.n}</div>
              <div className={styles.statLabel}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </section>

      {/* ── Intro split ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.introSplit}>
            <motion.div {...fadeUp(0)}>
              <span className={styles.sectionLabel}>Why conversational AI</span>
              <h2 className={`${styles.sectionTitle} ${styles.titleLight}`}>
                Transform how customers interact with your brand
              </h2>
              <div className={styles.divider} />
              <p className={styles.sectionDesc}>
                Our AI chatbots combine cutting-edge NLP, enterprise integrations, and
                behavioural intelligence — delivering instant, personalised responses
                across every touchpoint at scale.
              </p>
              <br />
              <p className={styles.sectionDesc}>
                Whether automating support, qualifying leads, or assisting employees,
                our solutions are built to measurably move the metrics that matter.
              </p>
            </motion.div>

            <motion.div {...fadeUp(0.15)}>
              <div className={styles.introVisual}>
                <div className={styles.introVisualBg} />
                <div className={styles.chatPreview}>
                  <div className={`${styles.chatBubble} ${styles.chatBubbleUser}`}>
                    What's my order status?
                  </div>
                  <div className={`${styles.chatBubble} ${styles.chatBubbleBot}`}>
                    Your order #4821 is out for delivery today. Expected by 3 PM! 📦
                  </div>
                  <div className={`${styles.chatBubble} ${styles.chatBubbleUser}`}>
                    Can I change the address?
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Solutions ── */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <motion.div className={styles.headerCenter} {...fadeUp(0)}>
            <span className={styles.sectionLabel}>Solutions</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleDark}`}>
              Every use case, covered
            </h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
          </motion.div>

          <div className={styles.solutionsGrid}>
            {solutions.map((s, i) => (
              <Card key={i} icon={s.icon} title={s.title} desc={s.desc} dark delay={i * 0.07} />
            ))}
          </div>
        </div>
      </section>

      {/* ── Industries ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.headerCenter} {...fadeUp(0)}>
            <span className={styles.sectionLabel}>Industries</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleLight}`}>
              Built for your sector
            </h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
          </motion.div>

          <div className={styles.industriesGrid}>
            {industries.map((item, i) => (
              <motion.div
                key={i}
                className={styles.industryCard}
                {...stagger(i, 0.05)}
                whileHover={{ scale: 1.03 }}
              >
                <div style={{ fontSize: "1.4rem", marginBottom: "0.4rem" }}>{item.icon}</div>
                {item.label}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.sectionMid}>
        <div className={styles.container}>
          <motion.div className={styles.headerCenter} {...fadeUp(0)}>
            <span className={styles.sectionLabel}>How we work</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleDark}`}>
              From idea to production
            </h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
          </motion.div>

          <div className={styles.processGrid}>
            {process.map((step, i) => (
              <Card
                key={i}
                number={i}
                title={step.title}
                desc={step.desc}
                dark
                delay={i * 0.07}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ── Technology ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div {...fadeUp(0)}>
            <span className={styles.sectionLabel}>Technology</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleLight}`}>
              Powered by the latest stack
            </h2>
            <div className={styles.divider} />
          </motion.div>

          <motion.div className={styles.techGrid} {...fadeUp(0.1)}>
            {tech.map((item, i) => (
              <motion.span
                key={i}
                className={styles.techPill}
                initial={{ opacity: 0, scale: 0.88 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                whileHover={{ scale: 1.06 }}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Why choose us ── */}
      <section className={styles.sectionDark}>
        <div className={styles.container}>
          <motion.div className={styles.headerCenter} {...fadeUp(0)}>
            <span className={styles.sectionLabel}>Why us</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleDark}`}>
              What sets us apart
            </h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
          </motion.div>

          <div className={styles.benefitsGrid}>
            {benefits.map((b, i) => (
              <Card key={i} icon={b.icon} title={b.title} desc={b.desc} dark delay={i * 0.08} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <motion.div {...fadeUp(0)}>
          <h2 className={styles.ctaHeading}>
            Ready to make your brand <em>always available?</em>
          </h2>
          <p className={styles.ctaSub}>
            Build intelligent chatbots that automate interactions, improve engagement, and scale your operations overnight.
          </p>
          <button className={styles.ctaBtn}>Start for free →</button>
        </motion.div>
      </section>

      {/* ── Contact Form ── */}
      <section className={styles.formSection}>
        <div className={styles.container}>
          <motion.div className={styles.headerCenter} {...fadeUp(0)}>
            <span className={styles.sectionLabel}>Get in touch</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleLight}`}>
              Request a consultation
            </h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
          </motion.div>

          <motion.div className={styles.formGrid} {...fadeUp(0.1)}>
            <input className={styles.formInput} placeholder="Full name" />
            <input className={styles.formInput} placeholder="Phone number" />
            <input className={`${styles.formInput} ${styles.formFull}`} placeholder="Work email" />
            <input className={styles.formInput} placeholder="Country" />
            <input className={styles.formInput} placeholder="Company" />
            <textarea
              className={`${styles.formInput} ${styles.formFull}`}
              placeholder="Tell us about your project"
              rows={4}
            />
            <button className={styles.formSubmit}>Send request →</button>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className={styles.section}>
        <div className={styles.container}>
          <motion.div className={styles.headerCenter} {...fadeUp(0)}>
            <span className={styles.sectionLabel}>FAQ</span>
            <h2 className={`${styles.sectionTitle} ${styles.titleLight}`}>
              Common questions
            </h2>
            <div className={`${styles.divider} ${styles.dividerCenter}`} />
          </motion.div>

          <motion.div className={styles.faqList} {...fadeUp(0.1)}>
            {faqs.map((faq, i) => (
              <FaqItem key={i} faq={faq} />
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}