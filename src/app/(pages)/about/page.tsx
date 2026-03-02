import Link from "next/link";
import styles from './about.module.css';

export default function AboutPage() {
  return (
    <main className={styles.aboutRoot}>

      {/* ─── HERO ─── */}
      <section className={styles.hero}>
        <div className={styles.heroNoise} />
        <div className={styles.heroRule} />

        <div className={styles.heroInner}>
          <div className={styles.heroEyebrow}>Capco Consulting Services</div>

          <h1 className={styles.heroHeadline}>
            Strategy Meets <em>Intelligent</em> Technology
          </h1>

          <p className={styles.heroSub}>
            Consulting. AI. Enterprise Solutions. Engineered for
            sustainable growth across Canada, Qatar, and India.
          </p>

          <div className={styles.heroCtas}>
            {/* btn-primary and btn-ghost are global classes from globals.css */}
            <Link href="/services" className="btn btn-primary">
              Explore Services
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Contact Us
            </Link>
          </div>
        </div>

        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>3</span>
            <span className={styles.heroStatLabel}>Countries Served</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>10+</span>
            <span className={styles.heroStatLabel}>Solutions Delivered</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>AI</span>
            <span className={styles.heroStatLabel}>First Approach</span>
          </div>
          <div className={styles.heroStat}>
            <span className={styles.heroStatNum}>360°</span>
            <span className={styles.heroStatLabel}>Consulting Coverage</span>
          </div>
        </div>
      </section>

      {/* ─── ABOUT OVERVIEW ─── */}
      <section className={styles.aboutSection}>
        <div className={styles.aboutLeft}>
          <div className={styles.sectionLabel}>About Us</div>
          <h2 className={styles.aboutHeading}>
            Precision-built for enterprise transformation
          </h2>
          <p className={styles.aboutBody}>
            Capco Consulting Services is a strategic consulting and technology
            firm enabling business excellence across Canada, Qatar, and India.
          </p>
          <p className={styles.aboutBody}>
            We deliver tailored consulting frameworks, enterprise-grade
            technology solutions, and AI-powered platforms designed to drive
            measurable growth and operational resilience.
          </p>
          <p className={styles.aboutBody}>
            Our work is grounded in strategic precision, disciplined execution,
            and long-term value creation through intelligent transformation.
          </p>
        </div>

        <div className={styles.aboutRight}>
          {[
            { num: "3",   text: "Countries Served" },
            { num: "10+", text: "Solutions Delivered" },
            { num: "AI",  text: "Enterprise Expertise" },
            { num: "E2E", text: "Consulting Coverage" },
          ].map((card) => (
            <div className={styles.aboutCard} key={card.text}>
              <div className={styles.aboutCardNum}>{card.num}</div>
              <div className={styles.aboutCardText}>{card.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── MISSION & VISION ─── */}
      <section className={styles.mvSection}>
        <div className={styles.mvInner}>
          <div className={styles.mvHeader}>
            <h2 className={styles.mvHeading}>
              Built on<br /><em>purpose.</em>
            </h2>
          </div>

          <div className={styles.mvGrid}>
            <div className={styles.mvCard}>
              <div className={styles.mvCardTag}>01 — Mission</div>
              <div className={styles.mvCardTitle}>What We Strive For</div>
              <p className={styles.mvCardBody}>
                To empower organizations across Qatar, India, and Canada by
                delivering bespoke business solutions and advanced technology
                strategies that enhance efficiency, innovation, and sustainable
                success.
              </p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvCardTag}>02 — Vision</div>
              <div className={styles.mvCardTitle}>Where We're Headed</div>
              <p className={styles.mvCardBody}>
                To be globally recognized as a premier consulting and technology
                firm transforming enterprises through innovation, strategic
                leadership, and responsible value creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CORE VALUES ─── */}
      <section className={styles.valuesSection}>
        <div className={styles.valuesHeader}>
          <h2 className={styles.valuesHeading}>
            Core<br />Values
          </h2>
          <div className={styles.valuesDivider} />
        </div>

        <div className={styles.valuesList}>
          {[
            { title: "Integrity",          desc: "Transparency, accountability, and ethical responsibility in every engagement." },
            { title: "Excellence",         desc: "Uncompromising standards of quality, precision, and performance." },
            { title: "Client Commitment",  desc: "Aligned success through measurable and meaningful outcomes." },
            { title: "Collaboration",      desc: "Trusted partnerships built on shared objectives and mutual growth." },
            { title: "Innovation",         desc: "Forward-looking solutions using AI, automation, and emerging technologies." },
          ].map((v, i) => (
            <div className={styles.valueItem} key={v.title}>
              <div className={styles.valueNum}>0{i + 1}</div>
              {/* FIX: was value-title / value-desc (kebab), must be camelCase for CSS Modules */}
              <div className={styles.valueTitle}>{v.title}</div>
              <div className={styles.valueDesc}>{v.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── JOURNEY ─── */}
      <section className={styles.journeySection}>
        <div className={styles.journeyInner}>
          <div>
            {/* FIX: removed inline style referencing --rust (not in globals.css) */}
            <div className={styles.sectionLabel}>Our Journey</div>
            <h2 className={styles.journeyHeading}>
              A track record<br />of <em>bold</em> moves
            </h2>
          </div>

          <ol className={styles.timeline}>
            {[
              "Founded with a disciplined focus on strategic consulting — bridging gaps between ambition and execution.",
              "Expanded into digital and enterprise technology, developing end-to-end implementation capabilities.",
              "Integrated AI across service offerings, empowering clients with intelligent, data-driven decisions.",
              "Established a global presence across three continents, delivering transformation at scale.",
            ].map((text, i) => (
              <li className={styles.timelineItem} key={i}>
                <span className={styles.timelineIdx}>0{i + 1}</span>
                <p className={styles.timelineText}>{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ─── STATS BAND ─── */}
      <div className={styles.statsBand}>
        {[
          { num: "3",    label: "Global Locations" },
          { num: "10+",  label: "Enterprise Platforms Delivered" },
          { num: "∞",    label: "AI Solutions Implemented" },
          { num: "100%", label: "Client Commitment" },
        ].map((s) => (
          <div className={styles.statBlock} key={s.label}>
            <span className={styles.statNum}>{s.num}</span>
            <span className={styles.statLabel}>{s.label}</span>
          </div>
        ))}
      </div>

      {/* ─── CTA ─── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaHeading}>
            Ready to<br />transform your<br /><em>business?</em>
          </h2>
          <div className={styles.ctaActions}>
            <Link href="/contact" className="btn btn-primary" style={{ textAlign: "center" }}>
              Schedule a Consultation
            </Link>
            <a
              href="mailto:info@capcocs.com"
              className="btn btn-ghost"
              style={{ textAlign: "center" }}
            >
              Email Us
            </a>
          </div>
        </div>
      </section>

    </main>
  );
}