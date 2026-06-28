"use client";

import styles from "./ai.module.css";

// ─── Data ─────────────────────────────────────────────────────────────────────

const aiServices = [
  {
    category: "AI Agent Development",
    icon: "🤖",
    slug: "ai-agent-development",
    description:
      "Autonomous AI agents that reason, plan, and act — orchestrating multi-step workflows, decision pipelines, and business automation without human intervention.",
    keywords: ["Agentic AI", "Autonomous Systems", "Workflow Automation"],
  },
  {
    category: "AI Chatbot Development",
    icon: "💬",
    slug: "ai-chatbot-development",
    description:
      "Conversational AI solutions that handle customer support, sales qualification, and internal helpdesks — across web, mobile, and messaging platforms.",
    keywords: ["Conversational AI", "LLM Chatbots", "Customer Engagement"],
  },
  {
    category: "AI Consulting & Strategy",
    icon: "🧭",
    slug: "ai-consulting",
    description:
      "Strategic AI advisory services to identify high-value use cases, assess readiness, and build a phased AI adoption roadmap aligned to your business objectives.",
    keywords: ["AI Strategy", "AI Roadmap", "Digital Transformation"],
  },
  {
    category: "End-to-End AI Development",
    icon: "⚙️",
    slug: "ai-development",
    description:
      "Full-cycle AI solution design, model development, training, testing, and production deployment — engineered from first principles for your specific requirements.",
    keywords: ["Custom AI", "Model Development", "MLOps"],
  },
  {
    category: "AI Systems Integration",
    icon: "🔗",
    slug: "ai-integration",
    description:
      "Seamlessly embed AI capabilities into your existing ERP, CRM, data warehouses, and REST APIs — across AWS, Azure, and GCP — with zero disruption to operations.",
    keywords: ["AI Integration", "Enterprise AI", "Cloud AI"],
  },
  {
    category: "AI OCR & Document Processing",
    icon: "🖨️",
    slug: "ai-ocr",
    description:
      "Intelligent document processing using AI-powered OCR — extracting structured data from invoices, contracts, forms, and scanned records at enterprise scale.",
    keywords: ["AI OCR", "Document Automation", "IDP"],
  },
  {
    category: "Computer Vision Solutions",
    icon: "👁️",
    slug: "computer-vision",
    description:
      "Visual intelligence systems for image classification, object detection, quality inspection, and video analytics — purpose-built for industrial and commercial applications.",
    keywords: ["Computer Vision AI", "Object Detection", "Visual AI"],
  },
  {
    category: "Generative AI Consulting",
    icon: "💡",
    slug: "generative-ai-consulting",
    description:
      "Expert guidance on selecting the right foundation models, fine-tuning strategies, prompt engineering, RAG architectures, and responsible GenAI governance.",
    keywords: ["GenAI Strategy", "LLM Consulting", "Foundation Models"],
  },
  {
    category: "Generative AI Development",
    icon: "✨",
    slug: "generative-ai-development",
    description:
      "Building production-grade generative AI applications — custom LLM pipelines, RAG systems, content generation engines, and multi-modal AI products.",
    keywords: ["LLM Development", "RAG Systems", "GenAI Apps"],
  },
  {
    category: "Generative AI Solutions",
    icon: "🚀",
    slug: "generative-ai",
    description:
      "Deploying GenAI at scale — text, image, and code generation systems integrated into your products, platforms, and internal workflows.",
    keywords: ["Generative AI", "AI Content Generation", "Multimodal AI"],
  },
  {
    category: "Machine Learning & Predictive Analytics",
    icon: "📈",
    slug: "machine-learning",
    description:
      "Data-driven ML models for demand forecasting, fraud detection, customer churn prediction, recommendation engines, and operational optimization.",
    keywords: ["ML Models", "Predictive Analytics", "Data Science"],
  },
];

const processSteps = [
  {
    num: "01",
    title: "Discovery & Assessment",
    desc: "We audit your data landscape, identify high-ROI AI use cases, and assess your technology readiness — setting a clear foundation for success.",
  },
  {
    num: "02",
    title: "AI Strategy & Roadmap",
    desc: "A tailored AI transformation roadmap is crafted around your specific business goals, regulatory environment, and infrastructure constraints.",
  },
  {
    num: "03",
    title: "Build, Train & Deploy",
    desc: "Our engineers design, train, validate, and deploy the AI solution end-to-end — with rigorous testing and performance benchmarking before go-live.",
  },
  {
    num: "04",
    title: "Monitor, Scale & Optimise",
    desc: "Continuous MLOps monitoring, drift detection, retraining cycles, and iterative improvements keep your AI solution accurate and high-performing in production.",
  },
];

const whyItems = [
  {
    icon: "🎯",
    title: "Deep Domain Expertise",
    desc: "Specialist AI practitioners across healthcare, fintech, retail, logistics, manufacturing, and regulated industries — not generalists.",
  },
  {
    icon: "🔬",
    title: "Research-Backed Methodology",
    desc: "We apply the latest academic and industry research — from transformer architectures to agentic frameworks — to solve your real-world problems.",
  },
  {
    icon: "🛡️",
    title: "Responsible AI by Design",
    desc: "Fairness auditing, model explainability, data privacy, and governance controls are embedded into every solution — not bolted on after the fact.",
  },
  {
    icon: "⚡",
    title: "Rapid Time-to-Value",
    desc: "Agile delivery sprints and pre-built AI components get you from proof-of-concept to production in weeks, not months.",
  },
];

const industriesServed = [
  { name: "Financial Services & Fintech", icon: "🏦" },
  { name: "Healthcare & Life Sciences", icon: "🏥" },
  { name: "Retail & E-Commerce", icon: "🛍️" },
  { name: "Logistics & Supply Chain", icon: "🚚" },
  { name: "Manufacturing & Industry 4.0", icon: "🏭" },
  { name: "Insurance & Risk", icon: "📋" },
];

const faqs = [
  {
    q: "What AI development services does CAPCO Consulting offer?",
    a: "We offer a full spectrum of enterprise AI services — AI agent development, generative AI consulting and development, machine learning, computer vision, NLP, AI chatbots, AI-powered OCR, AI integration, and end-to-end AI strategy tailored to your industry.",
  },
  {
    q: "How long does it take to deploy an AI solution to production?",
    a: "Most enterprise AI projects reach production within 12 weeks on average. We accelerate delivery through agile sprints, pre-built AI components, and parallel workstreams — without compromising quality or robustness.",
  },
  {
    q: "Can you integrate AI into our existing systems and cloud infrastructure?",
    a: "Yes. We work natively across AWS, Azure, and GCP, and integrate AI into your existing ERP, CRM, data warehouse, and REST API stack with no full platform migration required.",
  },
  {
    q: "Do you monitor and maintain AI models after deployment?",
    a: "Absolutely. Our MLOps practice includes continuous drift detection, automated retraining triggers, performance dashboards, and versioned rollback capabilities to ensure models remain accurate in production.",
  },
  {
    q: "What industries do you serve with AI solutions?",
    a: "We serve healthcare, financial services, fintech, retail, logistics, manufacturing, insurance, and more — bringing domain-specific AI expertise and proven implementation frameworks to each vertical.",
  },
];

// ─── Component ────────────────────────────────────────────────────────────────

export default function AiPage() {
  return (
    <main id="main-content" aria-label="AI Services">

      {/* ── HERO ── */}
      <section
        className={styles.hero}
        aria-labelledby="hero-heading"
      >
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              {/* SEO: keyword-rich eyebrow as a nav landmark keyword */}
              <p className={styles.heroEyebrow} aria-hidden="true">
                AI Development &amp; Consulting Services
              </p>

              {/*
                SEO: H1 — primary keyword targeted:
                "AI Development Services" + brand + unique value prop.
                Keep H1 singular on the page and keyword-first.
              */}
              <h1 id="hero-heading" className={styles.heroTitle}>
                Enterprise AI Services
                <br />
                <em>Built to Deliver Real Results.</em>
              </h1>

              <p className={styles.heroSubtitle}>
                CAPCO Consulting designs, builds, and deploys{" "}
                <strong>enterprise AI solutions</strong> — from autonomous AI
                agents and generative AI to machine learning and computer vision
                — that drive measurable business impact across every stage of
                your digital transformation.
              </p>

              <div className={styles.heroActions}>
                <a
                  href="/contact"
                  className="btn btn-primary"
                  aria-label="Get a free AI consultation from CAPCO Consulting"
                >
                  Get a Free AI Consultation
                </a>
                <a
                  href="#ai-services"
                  className="btn btn-ghost"
                  aria-label="Explore our AI service portfolio"
                >
                  Explore AI Services
                </a>
              </div>
            </div>

            <div className={styles.heroVisual} aria-hidden="true">
              <div className={styles.heroOrbRing2} />
              <div className={styles.heroOrbRing} />
              <div className={styles.heroOrb}>
                <div className={styles.heroOrbInner}>
                  <span className={styles.heroOrbIcon}>🤖</span>
                </div>
              </div>
              <span className={styles.heroFloatDot} />
              <span className={styles.heroFloatDot2} />
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <div className={styles.statsBar} aria-label="CAPCO AI Services at a glance">
        <div className="container">
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <span className={styles.statValue}>
                <span className={styles.statAccent}>200</span>+
              </span>
              <span className={styles.statLabel}>AI Projects Delivered</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>
                <span className={styles.statAccent}>11</span>
              </span>
              <span className={styles.statLabel}>AI Specialisations</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>
                <span className={styles.statAccent}>98</span>%
              </span>
              <span className={styles.statLabel}>Client Satisfaction Rate</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>
                <span className={styles.statAccent}>6</span>yrs
              </span>
              <span className={styles.statLabel}>Enterprise AI Expertise</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── AI SERVICES ── */}
      <section
        className={styles.services}
        id="ai-services"
        aria-labelledby="services-heading"
      >
        <div className="container">
          <header className={styles.sectionHeader}>
            {/* SEO: keyword-rich eyebrow */}
            <p className={styles.sectionEyebrow}>
              Our AI Service Portfolio
            </p>

            {/*
              SEO: H2 — secondary keyword:
              "AI Development & Consulting Services"
            */}
            <h2 id="services-heading" className={styles.sectionTitle}>
              AI Development &amp; Consulting Services
            </h2>
            <p className={styles.sectionSubtitle}>
              A comprehensive suite of{" "}
              <strong>enterprise AI capabilities</strong> — from AI agents and
              generative AI to machine learning and computer vision — each
              engineered to solve specific business challenges and unlock
              measurable value for your organisation.
            </p>
          </header>

          <div className={styles.servicesGrid} role="list">
            {aiServices.map((service) => (
              <article
                key={service.slug}
                className={styles.serviceCard}
                role="listitem"
                aria-label={service.category}
              >
                <span className={styles.serviceIcon} aria-hidden="true">
                  {service.icon}
                </span>

                {/* SEO: H3 for each service — exact keyword match */}
                <h3 className={styles.serviceLabel}>{service.category}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>

                {/* Keyword chips — semantic signal for crawlers */}
                <ul className={styles.serviceKeywords} aria-label="Related keywords">
                  {service.keywords.map((kw) => (
                    <li key={kw} className={styles.serviceKeywordTag}>
                      {kw}
                    </li>
                  ))}
                </ul>

                <a
                  href={`/services/ai/${service.slug}`}
                  className={styles.serviceArrow}
                  aria-label={`Learn more about ${service.category}`}
                >
                  Learn more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── INDUSTRIES ── */}
      <section
        className={styles.industries}
        aria-labelledby="industries-heading"
      >
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>Industries We Serve</p>

            {/*
              SEO: H2 — "AI solutions for [industry]" keyword cluster
            */}
            <h2 id="industries-heading" className={styles.sectionTitle}>
              AI Solutions Across Every Industry
            </h2>
            <p className={styles.sectionSubtitle}>
              We bring domain-specific AI expertise to highly regulated and
              complex industries — delivering context-aware solutions that
              respect your industry's unique compliance, data, and operational
              requirements.
            </p>
          </header>

          <ul className={styles.industriesGrid} aria-label="Industries served">
            {industriesServed.map((industry) => (
              <li key={industry.name} className={styles.industryItem}>
                <span className={styles.industryIcon} aria-hidden="true">
                  {industry.icon}
                </span>
                <span className={styles.industryName}>{industry.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section
        className={styles.process}
        aria-labelledby="process-heading"
      >
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>How We Deliver AI</p>

            {/*
              SEO: H2 — "AI implementation process" / "how we work"
            */}
            <h2 id="process-heading" className={styles.sectionTitle}>
              Our AI Delivery Process
            </h2>
            <p className={styles.sectionSubtitle}>
              A structured, proven{" "}
              <strong>AI implementation methodology</strong> — from initial
              discovery through to production deployment and continuous
              optimisation — designed to maximise speed, quality, and long-term
              ROI.
            </p>
          </header>

          <ol className={styles.processSteps} aria-label="AI delivery process steps">
            {processSteps.map((step) => (
              <li key={step.num} className={styles.processStep}>
                <div
                  className={styles.processStepNum}
                  aria-label={`Step ${step.num}`}
                >
                  {step.num}
                </div>

                {/* SEO: H3 per process step — keyword-rich */}
                <h3 className={styles.processStepTitle}>{step.title}</h3>
                <p className={styles.processStepDesc}>{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section
        className={styles.why}
        aria-labelledby="why-heading"
      >
        <div className="container">
          <div className={styles.whyGrid}>
            <div>
              <p className={styles.sectionEyebrow}>Why Choose CAPCO for AI</p>

              {/*
                SEO: H2 — "AI consulting company" / "why us" keyword intent
              */}
              <h2 id="why-heading" className={styles.sectionTitle}>
                Your Trusted Enterprise AI Partner
              </h2>

              <ul className={styles.whyList} aria-label="Why choose CAPCO Consulting for AI">
                {whyItems.map((item) => (
                  <li key={item.title} className={styles.whyItem}>
                    <span className={styles.whyItemIcon} aria-hidden="true">
                      {item.icon}
                    </span>
                    <div className={styles.whyItemContent}>
                      {/* SEO: H3 per differentiator */}
                      <h3 className={styles.whyItemTitle}>{item.title}</h3>
                      <p className={styles.whyItemDesc}>{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Decorative AI performance metrics card */}
            <div className={styles.whyVisual} aria-hidden="true">
              <div className={styles.whyCard}>
                <div className={styles.whyCardHeader}>
                  <div className={styles.whyCardAvatar}>🤖</div>
                  <div>
                    <div className={styles.whyCardName}>AI Performance Report</div>
                    <div className={styles.whyCardRole}>Quarterly model insights</div>
                  </div>
                </div>

                <div className={styles.whyCardMetrics}>
                  <div className={styles.whyCardMetric}>
                    <span className={`${styles.whyCardMetricVal} ${styles.whyCardAccent}`}>
                      ↑ 3.4×
                    </span>
                    <span className={styles.whyCardMetricLabel}>Productivity Lift</span>
                  </div>
                  <div className={styles.whyCardMetric}>
                    <span className={`${styles.whyCardMetricVal} ${styles.whyCardAccent}`}>
                      −62%
                    </span>
                    <span className={styles.whyCardMetricLabel}>Manual Effort Reduced</span>
                  </div>
                  <div className={styles.whyCardMetric}>
                    <span className={styles.whyCardMetricVal}>99.2%</span>
                    <span className={styles.whyCardMetricLabel}>AI Model Uptime</span>
                  </div>
                  <div className={styles.whyCardMetric}>
                    <span className={styles.whyCardMetricVal}>12 wk</span>
                    <span className={styles.whyCardMetricLabel}>Avg. Time to Production</span>
                  </div>
                </div>

                <div>
                  <span className={styles.whyCardTag}>
                    Responsible AI Certified
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className={styles.faq}
        aria-labelledby="faq-heading"
      >
        <div className="container">
          <header className={styles.sectionHeader}>
            <p className={styles.sectionEyebrow}>
              Frequently Asked Questions
            </p>

            <h2
              id="faq-heading"
              className={styles.sectionTitle}
            >
              AI Services — Common Questions
            </h2>
          </header>

          <dl
            className={styles.faqList}
            aria-label="AI services FAQ"
          >
            {faqs.map((item, i) => (
              <div
                key={i}
                className={styles.faqItem}
              >
                {/* Question */}
                <dt className={styles.faqQuestion}>
                  <span
                    aria-hidden="true"
                    className={styles.faqIcon}
                  >
                    Q
                  </span>
                  {item.q}
                </dt>

                {/* Answer */}
                <dd className={styles.faqAnswer}>
                  <div className={styles.faqAnswerInner}>
                    {item.a}
                  </div>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* ── CTA ── */}
      <section
        className={styles.cta}
        aria-labelledby="cta-heading"
      >
        <div className="container">
          <div className={styles.ctaInner}>
            {/*
              SEO: H2 — CTA with brand + service keyword reinforcement.
            */}
            <h2 id="cta-heading" className={styles.ctaTitle}>
              Ready to Build Something
              <br />
              <em>Intelligent?</em>
            </h2>
            <p className={styles.ctaSubtitle}>
              Speak with our AI consulting team and discover how CAPCO
              Consulting can accelerate your AI transformation — from a single
              model to a full enterprise AI ecosystem.
            </p>
            <div className={styles.ctaActions}>
              <a
                href="/contact"
                className="btn btn-primary"
                aria-label="Start an AI project with CAPCO Consulting"
              >
                Start an AI Project
              </a>
              <a
                href="/services"
                className="btn btn-ghost"
                aria-label="View all CAPCO Consulting services"
              >
                View All Services
              </a>
            </div>
          </div>
          <div className={styles.ctaDecor} aria-hidden="true" />
          <div className={styles.ctaDecor2} aria-hidden="true" />
        </div>
      </section>

    </main>
  );
}