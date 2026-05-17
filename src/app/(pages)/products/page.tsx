import Link from "next/link"
import productsData from "@/app/data/header.config.json"
import styles from "./products.module.css"

const AI_FEATURES = [
  { icon: "📈", title: "AI Demand Forecasting" },
  { icon: "💬", title: "HR Chatbot" },
  { icon: "🛡️", title: "AI Fraud Detection" },
  { icon: "🎯", title: "AI Recruitment" },
]

const PLATFORM_MODULES = ["ERP", "HRMS", "CRM", "Procurement", "Finance", "Audit", "Retail", "AI"]

export default function ProductsPage() {
  const categories = productsData.products

  return (
    <main className={styles.page}>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>

          <span className={styles.heroEyebrow}>Product Suite</span>

          <h1 className={styles.heroTitle}>
            Powerful Business Software<br />
            for <em>Every Department</em>
          </h1>

          <p className={styles.heroDesc}>
            Explore our integrated suite of business applications designed
            to streamline operations, improve productivity, and drive growth.
          </p>

          <div className={styles.heroCta}>
            <Link href="#categories" className="btn btn-primary">
              Explore Solutions
            </Link>
            <Link href="/contact" className="btn btn-ghost">
              Book a Demo
            </Link>
          </div>

        </div>
      </section>

      {/* ── PLATFORM OVERVIEW ────────────────────────────────────── */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>

          <span className={styles.sectionEyebrow}>The Platform</span>
          <h2 className={styles.sectionTitle}>One Platform. Multiple Business Solutions.</h2>
          <p className={styles.sectionSubtitle}>
            Our platform connects ERP, HRMS, CRM, Procurement, Finance,
            and AI-powered analytics into one unified ecosystem.
          </p>

          <div className={styles.pillGrid}>
            {PLATFORM_MODULES.map((item) => (
              <div key={item} className={styles.pill}>
                {item}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CATEGORY GRID ────────────────────────────────────────── */}
      <section id="categories" className={styles.categories}>
        <div className={styles.categoriesInner}>

          <div className={styles.sectionHeader}>
            <span className={styles.sectionEyebrow}>Solutions</span>
            <h2 className={styles.sectionTitle}>Explore Our Product Suite</h2>
            <p className={styles.sectionSubtitle}>
              Purpose-built modules for every business function, all working together seamlessly.
            </p>
          </div>

          <div className={styles.categoryGrid}>
            {categories.map((category: any) => (
              <div key={category.base} className={styles.categoryCard}>

                <div className={styles.categoryIcon}>{category.icon}</div>

                <h3 className={styles.categoryName}>{category.category}</h3>

                <p className={styles.categoryDesc}>{category.description}</p>

                <ul className={styles.categoryList}>
                  {category.items.slice(0, 4).map((item: any) => (
                    <li key={item.label} className={styles.categoryListItem}>
                      {item.label}
                    </li>
                  ))}
                </ul>

                <Link href={`/products/${category.base}`} className={styles.categoryLink}>
                  View All →
                </Link>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── FULL PRODUCT LISTING ──────────────────────────────────── */}
      <section className={styles.listing}>
        <div className={styles.listingInner}>

          {categories.map((category: any) => (
            <div key={category.base} id={category.base} className={styles.listingGroup}>

              <div className={styles.listingGroupHeader}>
                <div className={styles.listingGroupMeta}>
                  <h2>
                    {category.icon} {category.category}
                  </h2>
                  <p>{category.description}</p>
                </div>

                <Link
                  href={`/products/${category.base}`}
                  className={styles.listingGroupLink}
                >
                  View {category.category} →
                </Link>
              </div>

              <div className={styles.productGrid}>
                {category.items.slice(0, 8).map((item: any) => (
                  <Link
                    key={item.label}
                    href={`/products/${category.base}/${item.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className={styles.productCard}
                  >
                    <div className={styles.productCardIcon}>{item.icon}</div>
                    <h4 className={styles.productCardName}>{item.label}</h4>
                    <p className={styles.productCardDesc}>{item.description}</p>
                  </Link>
                ))}
              </div>

            </div>
          ))}

        </div>
      </section>

      {/* ── AI SECTION ───────────────────────────────────────────── */}
      <section className={styles.ai}>
        <div className={styles.aiInner}>

          <span className={styles.sectionEyebrow}>Artificial Intelligence</span>
          <h2 className={styles.sectionTitle}>AI Powered Business Intelligence</h2>
          <p className={styles.sectionSubtitle}>
            Leverage artificial intelligence across HR, ERP, CRM, and finance
            to unlock predictive insights and automation.
          </p>

          <div className={styles.aiGrid}>
            {AI_FEATURES.map((feature) => (
              <div key={feature.title} className={styles.aiCard}>
                <div className={styles.aiCardIconWrap}>{feature.icon}</div>
                <h3 className={styles.aiCardTitle}>{feature.title}</h3>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── INTEGRATION BANNER ───────────────────────────────────── */}
      <section className={styles.integration}>
        <div className={styles.integrationInner}>

          <h2 className={styles.integrationTitle}>Everything Works Together</h2>
          <p className={styles.integrationDesc}>
            ERP, HRMS, CRM, Finance, Procurement, and Analytics all run on a
            unified platform designed for scalability, security, and performance.
          </p>

        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>

          <h2 className={styles.ctaTitle}>Ready to Transform Your Business?</h2>
          <p className={styles.ctaDesc}>
            Discover how our integrated business software can help you
            automate operations and accelerate growth.
          </p>

          <div className={styles.ctaButtons}>
            <Link href="/contact" className={styles.ctaBtnPrimary}>
              Request Demo
            </Link>
            <Link href="/contact" className={styles.ctaBtnGhost}>
              Contact Sales
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}