import styles from './ai.module.css';

const aiServices = [
  {
    category: 'AI Agent Development',
    icon: '🤖',
    description: 'Autonomous AI agents that reason, plan, and act intelligently.',
  },
  {
    category: 'AI Chatbot Development',
    icon: '💬',
    description: 'Conversational AI solutions for customer engagement and support.',
  },
  {
    category: 'AI Consulting',
    icon: '🧭',
    description: 'Strategic AI guidance to accelerate business transformation.',
  },
  {
    category: 'AI Development',
    icon: '⚙️',
    description: 'End-to-end AI solution design and implementation.',
  },
  {
    category: 'AI Integration',
    icon: '🔗',
    description: 'Seamless integration of AI into existing systems.',
  },
  {
    category: 'AI OCR',
    icon: '🖨️',
    description: 'Intelligent document processing using OCR technology.',
  },
  {
    category: 'Computer Vision',
    icon: '👁️',
    description: 'Visual intelligence solutions for image and video analysis.',
  },
  {
    category: 'Generative AI Consulting',
    icon: '💡',
    description: 'Expert guidance on adopting generative AI solutions.',
  },
  {
    category: 'Generative AI Development',
    icon: '✨',
    description: 'Building advanced generative AI applications.',
  },
  {
    category: 'Generative AI',
    icon: '🚀',
    description: 'AI systems that generate text, images, and more.',
  },
  {
    category: 'Machine Learning',
    icon: '📈',
    description: 'Data-driven models that learn and improve over time.',
  },
];

const processSteps = [
  {
    num: '01',
    title: 'Discovery',
    desc: 'We analyse your business goals, data landscape, and existing systems.',
  },
  {
    num: '02',
    title: 'Strategy',
    desc: 'A tailored AI roadmap is crafted around your specific use cases.',
  },
  {
    num: '03',
    title: 'Build',
    desc: 'Our engineers design, train, and integrate the AI solution end-to-end.',
  },
  {
    num: '04',
    title: 'Scale',
    desc: 'Ongoing monitoring, optimisation, and iteration to maximise impact.',
  },
];

const whyItems = [
  {
    icon: '🎯',
    title: 'Domain-specific expertise',
    desc: 'Specialists across verticals — healthcare, fintech, retail, logistics and beyond.',
  },
  {
    icon: '🔬',
    title: 'Research-backed approach',
    desc: 'We apply cutting-edge techniques from the latest academic and industry research.',
  },
  {
    icon: '🛡️',
    title: 'Responsible AI by default',
    desc: 'Privacy, fairness, and explainability baked into every model we deliver.',
  },
  {
    icon: '⚡',
    title: 'Rapid time-to-value',
    desc: 'Agile sprints and pre-built components get you to production faster.',
  },
];

export default function AiPage() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroGrid}>
            <div className={styles.heroContent}>
              <span className={styles.heroEyebrow}>AI Services</span>
              <h1 className={styles.heroTitle}>
                Intelligence,<br />
                <em>built for your business.</em>
              </h1>
              <p className={styles.heroSubtitle}>
                From autonomous agents to generative AI, we design, build, and deploy
                AI solutions that create measurable impact — at every stage of your
                digital transformation.
              </p>
              <div className={styles.heroActions}>
                <a href="/contact" className="btn btn-primary">Get a free consultation</a>
                <a href="#services" className="btn btn-ghost">Explore services</a>
              </div>
            </div>

            <div className={styles.heroVisual}>
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

      {/* ── Stats Bar ── */}
      <div className={styles.statsBar}>
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
              <span className={styles.statLabel}>Client Satisfaction</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statValue}>
                <span className={styles.statAccent}>6</span>yrs
              </span>
              <span className={styles.statLabel}>Deep AI Expertise</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Services ── */}
      <section className={styles.services} id="services">
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>What we offer</span>
            <h2 className={styles.sectionTitle}>Our AI service portfolio</h2>
            <p className={styles.sectionSubtitle}>
              A comprehensive suite of AI capabilities, each crafted to solve real
              problems and unlock new possibilities for your organisation.
            </p>
          </div>

          <div className={styles.servicesGrid}>
            {aiServices.map((service) => (
              <article key={service.category} className={styles.serviceCard}>
                <span className={styles.serviceIcon}>{service.icon}</span>
                <h3 className={styles.serviceLabel}>{service.category}</h3>
                <p className={styles.serviceDesc}>{service.description}</p>
                <span className={styles.serviceArrow}>
                  Learn more →
                </span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className={styles.process}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>How we work</span>
            <h2 className={styles.sectionTitle}>
              A process built for <em>real outcomes</em>
            </h2>
            <p className={styles.sectionSubtitle}>
              We don't just build models — we engineer AI systems that slot into your
              business and keep getting better.
            </p>
          </div>

          <div className={styles.processSteps}>
            {processSteps.map((step) => (
              <div key={step.num} className={styles.processStep}>
                <div className={styles.processStepNum}>{step.num}</div>
                <h4 className={styles.processStepTitle}>{step.title}</h4>
                <p className={styles.processStepDesc}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Us ── */}
      <section className={styles.why}>
        <div className="container">
          <div className={styles.whyGrid}>
            <div>
              <span className={styles.sectionEyebrow}>Why choose us</span>
              <h2 className={styles.sectionTitle}>
                AI partners who go<br /><em>beyond the model</em>
              </h2>

              <div className={styles.whyList}>
                {whyItems.map((item) => (
                  <div key={item.title} className={styles.whyItem}>
                    <span className={styles.whyItemIcon}>{item.icon}</span>
                    <div className={styles.whyItemContent}>
                      <h4 className={styles.whyItemTitle}>{item.title}</h4>
                      <p className={styles.whyItemDesc}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative metrics card */}
            <div className={styles.whyVisual}>
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
                    <span className={`${styles.whyCardMetricVal} ${styles.whyCardAccent}`}>↑ 3.4×</span>
                    <span className={styles.whyCardMetricLabel}>Productivity lift</span>
                  </div>
                  <div className={styles.whyCardMetric}>
                    <span className={`${styles.whyCardMetricVal} ${styles.whyCardAccent}`}>−62%</span>
                    <span className={styles.whyCardMetricLabel}>Manual effort</span>
                  </div>
                  <div className={styles.whyCardMetric}>
                    <span className={styles.whyCardMetricVal}>99.2%</span>
                    <span className={styles.whyCardMetricLabel}>Model uptime</span>
                  </div>
                  <div className={styles.whyCardMetric}>
                    <span className={styles.whyCardMetricVal}>12 wk</span>
                    <span className={styles.whyCardMetricLabel}>Avg. to production</span>
                  </div>
                </div>

                <div>
                  <span className={styles.whyCardTag}>Responsible AI certified</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className="container">
          <div className={styles.ctaInner}>
            <h2 className={styles.ctaTitle}>
              Ready to build something<br /><em>intelligent?</em>
            </h2>
            <p className={styles.ctaSubtitle}>
              Talk to our AI team and discover how we can accelerate your
              transformation — from a single model to a full AI ecosystem.
            </p>
            <div className={styles.ctaActions}>
              <a href="/contact" className="btn btn-primary">Start a project</a>

            </div>
          </div>
          <div className={styles.ctaDecor} />
          <div className={styles.ctaDecor2} />
        </div>
      </section>
    </main>
  );
}