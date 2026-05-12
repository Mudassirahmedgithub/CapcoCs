"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Megaphone,
  Globe,
  Server,
  Search,
  BarChart3,
  Target,
  Palette,
  Video,
  MessageSquare,
  Star,
  Users,
  CheckCircle2,
  ArrowRight,
  TrendingUp,
  Mail,
  Phone,
  MapPin,
  ChevronDown,
} from "lucide-react";
import styles from "./digital.module.css";
import { ReactNode } from "react";

/* ── Types ── */
type StaggerInProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/* ── Scroll-triggered visibility hook ── */
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

/* ── Stagger animation wrapper ── */
function StaggerIn({ children, className, delay = 0 }: StaggerInProps) {
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

/* ── FAQ Item ── */
function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className={`${styles.faqItem} ${open ? styles.open : ""}`}>
      <button className={styles.faqQuestion} onClick={() => setOpen(!open)}>
        <span>{q}</span>
        <ChevronDown className={styles.faqIcon} size={20} />
      </button>
      <div className={styles.faqAnswer}>
        <p className={styles.faqAnswerContent}>{a}</p>
      </div>
    </div>
  );
}

/* ─────────────────────────── MAIN PAGE ─────────────────────────── */
export default function DigitalMarketingPage() {
  const [stickyVisible, setStickyVisible] = useState(false);

  useEffect(() => {
    const handler = () => setStickyVisible(window.scrollY > 500);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  /* ── Services Data ── */
  const services = [
    {
      icon: <Palette size={22} />,
      title: "Brand Development",
      desc: "Building a distinctive and memorable brand identity that resonates with your target audience.",
      features: ["Visual identity & logo design", "Brand guidelines & voice", "Competitor positioning analysis"],
    },
    {
      icon: <Globe size={22} />,
      title: "Website Designing & Domains",
      desc: "Creating aesthetically appealing, user-friendly websites with personalized domain registrations.",
      features: ["Custom UI/UX design", "Domain registration & DNS", "Mobile-first responsive builds"],
    },
    {
      icon: <Server size={22} />,
      title: "Web, Cloud & Server Hosting",
      desc: "Providing secure and reliable hosting solutions tailored to your business needs.",
      features: ["99.9% uptime guarantee", "SSL & security hardening", "Auto-scaling cloud infra"],
    },
    {
      icon: <Search size={22} />,
      title: "SEO & App Store Optimization",
      desc: "Enhancing online visibility and driving organic traffic through effective SEO and ASO techniques.",
      features: ["On-page & technical SEO", "Keyword research & strategy", "App Store ranking boosts"],
    },
    {
      icon: <Megaphone size={22} />,
      title: "Campaign Development & Strategy",
      desc: "Crafting innovative marketing campaigns with clear strategies to drive engagement and conversions.",
      features: ["Multi-channel campaign design", "A/B testing & optimization", "Performance tracking dashboards"],
    },
    {
      icon: <Target size={22} />,
      title: "Go-To-Market Strategy",
      desc: "Designing actionable, results-driven marketing strategies to position your brand for success.",
      features: ["Market research & analysis", "Launch roadmap planning", "Revenue growth frameworks"],
    },
    {
      icon: <Palette size={22} />,
      title: "Graphic Design",
      desc: "Creating high-quality graphics that communicate your message and captivate your audience.",
      features: ["Social media creatives", "Print & digital collateral", "Infographics & brand assets"],
    },
    {
      icon: <Video size={22} />,
      title: "Video Marketing",
      desc: "Utilizing the power of video to engage, inform, and connect with customers across platforms.",
      features: ["Reels, shorts & explainers", "YouTube channel strategy", "Video ad production"],
    },
    {
      icon: <MessageSquare size={22} />,
      title: "SMS, Email & WhatsApp Marketing",
      desc: "Reaching customers effectively through targeted SMS, email campaigns, and WhatsApp messaging.",
      features: ["Automated drip sequences", "List segmentation & hygiene", "WhatsApp Business integration"],
    },
    {
      icon: <Star size={22} />,
      title: "Online Reputation Management",
      desc: "Managing and enhancing your online reputation to build trust and credibility with your audience.",
      features: ["Review monitoring & response", "Negative content suppression", "Brand sentiment analysis"],
    },
    {
      icon: <Users size={22} />,
      title: "Customer Relationship Management",
      desc: "Implementing CRM solutions to streamline communication, track interactions, and improve efficiency.",
      features: ["CRM setup & customization", "Sales pipeline automation", "Customer journey mapping"],
    },
  ];

  /* ── Stats ── */
  const stats = [
    { num: "500+", label: "Brands Launched" },
    { num: "97%", label: "Client Retention" },
    { num: "3×", label: "Avg. ROI Delivered" },
    { num: "10+", label: "Years of Expertise" },
  ];

  /* ── Why Us ── */
  const whyUs = [
    {
      icon: <TrendingUp size={22} />,
      title: "Results-Driven Approach",
      desc: "Every campaign is built around measurable KPIs and continuously optimized for maximum return.",
    },
    {
      icon: <Target size={22} />,
      title: "Full-Stack Marketing",
      desc: "From brand creation to customer retention — we handle every stage of your marketing lifecycle.",
    },
    {
      icon: <Star size={22} />,
      title: "Industry-Specific Expertise",
      desc: "Tailored strategies for e-commerce, SaaS, healthcare, real estate, and consumer brands.",
    },
  ];

  /* ── FAQs ── */
  const faqs = [
    {
      q: "What digital marketing services do you specialize in?",
      a: "We offer end-to-end digital marketing — from brand identity and web design to SEO, paid campaigns, social media, reputation management, and CRM implementation.",
    },
    {
      q: "How soon can I expect results from SEO?",
      a: "SEO typically shows measurable movement within 60–90 days, with compounding results over 6–12 months. Paid campaigns can show results within days of launch.",
    },
    {
      q: "Do you work with small businesses and startups?",
      a: "Absolutely. We craft scalable strategies suited to your stage — whether you're a bootstrapped startup or an established enterprise looking to expand.",
    },
    {
      q: "Can you manage our complete online presence?",
      a: "Yes. We offer retainer packages that cover your entire digital footprint — website, SEO, social, ads, email marketing, reputation, and analytics in one place.",
    },
    {
      q: "How do you measure and report campaign performance?",
      a: "We build custom dashboards with clear KPIs — impressions, clicks, conversions, CAC, and ROI — and deliver monthly reports with strategic recommendations.",
    },
  ];

  return (
    <div className={styles.page}>

      {/* ── STICKY CTA ── */}
      <div className={`${styles.stickyCta} ${stickyVisible ? styles.stickyVisible : ""}`}>
        <span className={styles.stickyText}>Ready to grow your business online?</span>
        <button className={styles.stickyBtn}>Get Free Strategy Call</button>
      </div>

      {/* ══════════════════════════════════════
          HERO
      ══════════════════════════════════════ */}
      <section className={styles.hero}>
        <div className={styles.heroOrb1} />
        <div className={styles.heroOrb2} />
        <div className={styles.heroInner}>
          <div className={styles.heroPill}>
            <span className={styles.pillDot} />
            Digital Marketing & Business Consulting
          </div>

          <h1 className={styles.heroTitle}>
            Grow Smarter.
            <br />
            <em>Market Bolder.</em>
          </h1>

          <p className={styles.heroDesc}>
            Full-spectrum digital marketing and business consulting — brand strategy,
            web, SEO, campaigns, and reputation management — all under one roof,
            engineered for measurable growth.
          </p>

          <div className={styles.heroCta}>
            <button className={`${styles.btn} ${styles.btnPrimary}`}>
              Start Your Growth Journey
            </button>
            <button className={`${styles.btn} ${styles.btnGhost}`}>
              Explore Services
            </button>
          </div>
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

      {/* ══════════════════════════════════════
          OVERVIEW
      ══════════════════════════════════════ */}
      <section className={styles.overview}>
        <div className={styles.overviewInner}>
          <StaggerIn>
            <span className={styles.eyebrow}>What We Do</span>
            <h2 className={styles.overviewTitle}>
              Every Channel. <em>One Partner.</em>
            </h2>
            <p className={styles.overviewDesc}>
              We combine brand strategy, creative execution, and data-driven marketing
              to build businesses that stand out, scale up, and stay ahead. Whether you
              need a full rebrand, a high-converting website, or a 360° digital
              marketing engine — we deliver it all with precision and intent.
            </p>
          </StaggerIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          SERVICES GRID
      ══════════════════════════════════════ */}
      <section className={styles.services}>
        <div className={styles.servicesInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>Our Services</span>
              <h2 className={styles.sectionTitle}>
                11 Services. <em>Infinite Possibilities.</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                A comprehensive suite of digital marketing solutions designed to
                amplify your brand at every customer touchpoint.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <StaggerIn key={i} delay={i * 0.05}>
                <div className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>{s.icon}</div>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <ul className={styles.serviceFeatures}>
                    {s.features.map((f, j) => (
                      <li key={j} className={styles.serviceFeature}>{f}</li>
                    ))}
                  </ul>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          PROCESS
      ══════════════════════════════════════ */}
      <section className={styles.process}>
        <div className={styles.processInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>How We Work</span>
              <h2 className={styles.sectionTitle}>
                From Discovery to <em>Domination</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                A proven four-stage framework that transforms business goals into
                trackable digital growth.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.processSteps}>
            {[
              { num: "01", title: "Discovery & Audit", desc: "Deep-dive into your brand, market, competitors, and current digital performance to identify opportunities." },
              { num: "02", title: "Strategy & Roadmap", desc: "Build a channel-specific growth plan with clear milestones, KPIs, and resource allocation." },
              { num: "03", title: "Execution & Launch", desc: "Design, build, and activate — campaigns, creatives, SEO, and web properties go live on schedule." },
              { num: "04", title: "Optimize & Scale", desc: "Continuous monitoring, A/B testing, and iteration to compound growth month over month." },
            ].map((step, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.processStep}>
                  <span className={styles.processNum}>{step.num}</span>
                  <h3 className={styles.processStepTitle}>{step.title}</h3>
                  <p className={styles.processStepDesc}>{step.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          WHY US
      ══════════════════════════════════════ */}
      <section className={styles.whyUs}>
        <div className={styles.whyUsInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow} style={{ color: "var(--color-primary)" }}>Why Choose Us</span>
              <h2 className={styles.sectionTitle}>
                Strategy Meets <em>Execution</em>
              </h2>
            </div>
          </StaggerIn>

          <div className={styles.whyUsGrid}>
            {whyUs.map((w, i) => (
              <StaggerIn key={i} delay={i * 0.1}>
                <div className={styles.whyUsCard}>
                  <div className={styles.whyUsIcon}>{w.icon}</div>
                  <h3 className={styles.whyUsTitle}>{w.title}</h3>
                  <p className={styles.whyUsDesc}>{w.desc}</p>
                </div>
              </StaggerIn>
            ))}
          </div>

          {/* Benefits checklist */}
          <StaggerIn delay={0.3}>
            <div className={styles.benefitsList}>
              {[
                "Dedicated account manager & strategy team",
                "Transparent monthly reporting & dashboards",
                "Flexible retainer or project-based engagements",
                "Proven frameworks across 15+ industries",
                "Integrated approach: brand + digital + growth",
              ].map((b, i) => (
                <div key={i} className={styles.benefitItem}>
                  <CheckCircle2 size={18} className={styles.benefitIcon} />
                  <span>{b}</span>
                </div>
              ))}
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CTA BANNER
      ══════════════════════════════════════ */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <StaggerIn>
            <h2 className={styles.ctaTitle}>
              Your Next 10× Growth <em>Starts Here</em>
            </h2>
            <p className={styles.ctaDesc}>
              Partner with a team that treats your business like their own.
              Book a free 30-minute strategy session today.
            </p>
            <div className={styles.ctaActions}>
              <button className={`${styles.btn} ${styles.btnWhite}`}>
                Book Free Consultation
              </button>
              <button className={`${styles.btn} ${styles.btnOutlineWhite}`}>
                View Case Studies
              </button>
            </div>
          </StaggerIn>
        </div>
      </section>

      {/* ══════════════════════════════════════
          FAQ
      ══════════════════════════════════════ */}
      <section className={styles.faq}>
        <div className={styles.faqInner}>
          <StaggerIn>
            <div className={styles.sectionHeader}>
              <span className={styles.eyebrow}>FAQ</span>
              <h2 className={styles.sectionTitle}>
                Common <em>Questions</em>
              </h2>
              <p className={styles.sectionSubtitle}>
                Everything you need to know before partnering with us.
              </p>
            </div>
          </StaggerIn>

          <div className={styles.faqList}>
            {faqs.map((f, i) => (
              <StaggerIn key={i} delay={i * 0.06}>
                <FaqItem q={f.q} a={f.a} />
              </StaggerIn>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════
          CONTACT
      ══════════════════════════════════════ */}
      <section className={styles.contact}>
        <div className={styles.contactInner}>
          <div className={styles.contactLeft}>
            <StaggerIn>
              <span className={styles.eyebrow}>Contact Us</span>
              <h2 className={styles.contactTitle}>
                Let's Build Something <em>Great</em>
              </h2>
              <p className={styles.contactDesc}>
                Fill in the form and our team will reach out within 24 hours
                with a tailored proposal for your business.
              </p>
            </StaggerIn>

            <StaggerIn delay={0.15}>
              <div className={styles.contactMeta}>
                <div className={styles.contactMetaItem}>
                  <span className={styles.metaDot} />
                  Available Mon–Sat, 9 AM – 7 PM IST
                </div>
                <div className={styles.contactMetaItem}>
                  <Mail size={14} />
                  hello@youragency.com
                </div>
                <div className={styles.contactMetaItem}>
                  <Phone size={14} />
                  +91 98765 43210
                </div>
                <div className={styles.contactMetaItem}>
                  <MapPin size={14} />
                  Hyderabad, India
                </div>
              </div>
            </StaggerIn>
          </div>

          <StaggerIn delay={0.1}>
            <div className={styles.contactForm}>
              <div className={styles.formRow}>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>First Name</label>
                  <input className={styles.formInput} type="text" placeholder="Arjun" />
                </div>
                <div className={styles.formField}>
                  <label className={styles.formLabel}>Last Name</label>
                  <input className={styles.formInput} type="text" placeholder="Sharma" />
                </div>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Email Address</label>
                <input className={styles.formInput} type="email" placeholder="arjun@company.com" />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Business Name</label>
                <input className={styles.formInput} type="text" placeholder="Your Company Pvt. Ltd." />
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Service You're Interested In</label>
                <select className={styles.formInput}>
                  <option value="">Select a service…</option>
                  <option>Brand Development</option>
                  <option>Website Designing & Domains</option>
                  <option>SEO & ASO</option>
                  <option>Campaign Development & Strategy</option>
                  <option>Go-To-Market Strategy</option>
                  <option>Graphic Design</option>
                  <option>Video Marketing</option>
                  <option>SMS, Email & WhatsApp Marketing</option>
                  <option>Online Reputation Management</option>
                  <option>CRM Implementation</option>
                  <option>Full Package</option>
                </select>
              </div>
              <div className={styles.formField}>
                <label className={styles.formLabel}>Tell Us About Your Goals</label>
                <textarea className={styles.formTextarea} placeholder="What are you trying to achieve in the next 6–12 months?" />
              </div>
              <button className={styles.formSubmit}>
                Send Message <ArrowRight size={16} style={{ display: "inline", marginLeft: "0.4rem" }} />
              </button>
            </div>
          </StaggerIn>
        </div>
      </section>

    </div>
  );
}