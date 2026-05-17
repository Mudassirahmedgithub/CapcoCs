'use client';

import { useRef, useState, useEffect } from 'react';
import Link from 'next/link';
import styles from './services.module.css';

/* ── Data ── */
const services = [
  {
    category: 'Warehouse Management',
    icon: '🏭',
    description: 'Efficient warehouse operations and inventory control solutions.',
    base: 'warehouse-management',
    items: [
      { label: 'Inventory Management', icon: '📦', description: 'Real-time tracking and control of warehouse stock levels.' },
      { label: 'Order Fulfillment', icon: '🚚', description: 'Streamlined picking, packing, and shipping processes.' },
      { label: 'Warehouse Automation', icon: '🤖', description: 'Automated systems to improve speed and accuracy.' },
      { label: 'Stock Auditing & Reporting', icon: '📊', description: 'Accurate reporting and inventory reconciliation tools.' },
    ],
  },
  {
    category: 'Asset Management',
    icon: '📦',
    description: 'Comprehensive solutions for tracking and managing company assets.',
    base: 'asset-management',
    items: [
      { label: 'Asset Life Cycle Management', icon: '🔄', description: 'Manages assets from procurement and deployment to maintenance, depreciation, and disposal.' },
      { label: 'Asset Tracking', icon: '📍', description: 'Monitors asset location, usage, and status in real time to improve visibility and control.' },
      { label: 'Asset Financial & Compliance Management', icon: '📊', description: 'Tracks asset costs, depreciation, audits, and regulatory compliance to ensure financial accuracy.' },
      { label: 'Asset Work & Registry', icon: '🗂️', description: 'Centralized asset registry with automated work management.' },
      { label: 'Asset Inspection', icon: '🔍', description: 'Digital asset inspection workflows with real-time reporting.' },
      { label: 'RFID Solutions', icon: '📡', description: 'Automated tracking using RFID technology.' },
    ],
  },
  {
    category: 'Business Management & Consultancy',
    icon: '📊',
    description: 'Strategic advisory services to optimize operations and growth.',
    base: '',
    items: [
      { label: 'Business Management & Consultancy', icon: '📊', description: 'Strategic advisory services to optimize operations and growth.' },
    ],
  },
  {
    category: 'Digital Marketing',
    icon: '📣',
    description: 'Data-driven marketing strategies to grow your brand.',
    base: '',
    items: [
      { label: 'Digital Marketing', icon: '📣', description: 'Data-driven marketing strategies to grow your brand.' },
    ],
  },
  {
    category: 'Software Development',
    icon: '💻',
    description: 'Custom software solutions tailored to your business needs.',
    base: '',
    items: [
      { label: 'Software Development', icon: '💻', description: 'Custom software solutions tailored to your business needs.' },
    ],
  },
  {
    category: 'Data Governance & AI',
    icon: '📊',
    description: 'Trusted data management and intelligent AI-powered solutions.',
    base: '',
    items: [
      { label: 'Data Governance & AI', icon: '📊', description: 'Trusted data management and intelligent AI-powered solutions.' },
    ],
  },
  {
    category: 'IT Consulting Support',
    icon: '🧠',
    description: 'Expert technology consulting and reliable IT support services.',
    base: '',
    items: [
      { label: 'IT Consulting Support', icon: '🧠', description: 'Expert technology consulting and reliable IT support services.' },
    ],
  },
];

/* ── Helpers ── */
function slugify(str: string) {
  return str.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

/* ── Page ── */
export default function ServicesPage() {
  const [activeCategory, setActiveCategory] = useState(slugify(services[0].category));
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});

  // Update active tab on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id);
          }
        });
      },
      { rootMargin: '-30% 0px -60% 0px', threshold: 0 }
    );

    Object.values(sectionRefs.current).forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  function scrollToCategory(slug: string) {
    const el = sectionRefs.current[slug];
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveCategory(slug);
    }
  }

  return (
    <>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden="true" />
        <div className="container">
          <div className={styles.heroContent}>
            <span className={styles.heroEyebrow}>What We Do</span>
            <h1 className={styles.heroTitle}>
              Services built for <em>real operations</em>
            </h1>
            <p className={styles.heroDesc}>
              From warehouse floors to boardroom strategy, we deliver end-to-end solutions that drive efficiency, visibility, and growth across your entire business.
            </p>
          </div>
        </div>
      </section>

      {/* ── Sticky Category Nav ── */}
      <nav className={styles.categoryNav} aria-label="Service categories">
        <div className="container">
          <div className={styles.categoryNavInner}>
            {services.map((svc) => {
              const slug = slugify(svc.category);
              return (
                <button
                  key={slug}
                  className={`${styles.categoryTab} ${activeCategory === slug ? styles.active : ''}`}
                  onClick={() => scrollToCategory(slug)}
                  aria-current={activeCategory === slug ? 'true' : undefined}
                >
                  <span className={styles.categoryTabIcon}>{svc.icon}</span>
                  {svc.category}
                </button>
              );
            })}
          </div>
        </div>
      </nav>

      {/* ── Services Grid ── */}
      <section className={styles.servicesSection}>
        <div className="container">
          {services.map((svc) => {
            const slug = slugify(svc.category);
            const isSingle = svc.items.length === 1;

            return (
              <div
                key={slug}
                id={slug}
                className={styles.categoryBlock}
                ref={(el) => { sectionRefs.current[slug] = el; }}
              >
                {/* Category Header */}
                <div className={styles.categoryHeader}>
                  <div className={styles.categoryIconWrap} aria-hidden="true">
                    {svc.icon}
                  </div>
                  <div className={styles.categoryMeta}>
                    <h2 className={styles.categoryName}>{svc.category}</h2>
                    <p className={styles.categoryDesc}>{svc.description}</p>
                  </div>
                  {!isSingle && (
                    <span className={styles.categoryCount}>
                      {svc.items.length} services
                    </span>
                  )}
                </div>

                {/* Items */}
                <div className={`${styles.itemsGrid} ${isSingle ? styles.singleItem : ''}`}>
                  {svc.items.map((item) => (
                    <ServiceCard key={item.label} item={item} base={svc.base} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className="container">
          <div className={styles.ctaInner}>
            <div className={styles.ctaText}>
              <h2>Ready to transform your operations?</h2>
              <p>
                Talk to our team about the right mix of services for your business. No jargon — just clear solutions.
              </p>
            </div>
            <div className={styles.ctaActions}>
              <Link href="/contact" className="btn btn-primary">
                Get in Touch
              </Link>
              <Link href="/about" className="btn btn-ghost">
                Learn About Us
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* ── Service Card Sub-component ── */
interface ServiceItem {
  label: string;
  icon: string;
  description: string;
}

function ServiceCard({ item, base }: { item: ServiceItem; base: string }) {
  const content = (
    <div className={styles.serviceCard}>
      <span className={styles.serviceCardIcon}>{item.icon}</span>
      <div className={styles.serviceCardLabel}>{item.label}</div>
      <p className={styles.serviceCardDesc}>{item.description}</p>
    </div>
  );

  if (base) {
    const slug = slugify(item.label);
    return (
      <Link href={`/services/${base}/${slug}`} style={{ display: 'block', textDecoration: 'none' }}>
        {content}
      </Link>
    );
  }

  return content;
}