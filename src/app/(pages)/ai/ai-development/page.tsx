"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView, AnimatePresence } from "framer-motion";

/* ─── Framer Motion variants ─── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

/* ─── Helpers ─── */
function AnimatedSection({ children, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.div
      ref={ref}
      variants={stagger}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ─── Gradient border card ─── */
function GradientCard({ children, className = "", delay = 0 }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={fadeUp}
      custom={delay}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`ai-grad-card ${hovered ? "ai-grad-card--hovered" : ""} ${className}`}
    >
      {children}
    </motion.div>
  );
}

/* ─── Sticky CTA bar ─── */
function StickyCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="ai-sticky-cta"
        >
          <span className="ai-sticky-cta__label">Ready to build with AI?</span>
          <div className="ai-sticky-cta__actions">
            <button className="btn btn-primary">Start a Project</button>
            <button className="btn btn-ghost">Book Consultation</button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Animated counter ─── */
function CountUp({ target, suffix = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = target / 60;
    const interval = setInterval(() => {
      start += step;
      if (start >= target) { setCount(target); clearInterval(interval); }
      else setCount(Math.floor(start));
    }, 16);
    return () => clearInterval(interval);
  }, [inView, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

/* ─── Particle dot background ─── */
function GridBackground() {
  return (
    <div className="ai-grid-bg" aria-hidden>
      <div className="ai-grid-bg__dots" />
      <div className="ai-grid-bg__glow ai-grid-bg__glow--1" />
      <div className="ai-grid-bg__glow ai-grid-bg__glow--2" />
    </div>
  );
}

/* ─── Floating badge ─── */
function Badge({ children }) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
      className="ai-badge"
    >
      <span className="ai-badge__dot" />
      {children}
    </motion.span>
  );
}

/* ─── Main Page ─── */
export default function AIDevelopmentPage() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const PROCESS = [
    { num: "01", title: "Discovery & Strategy", desc: "Map business goals, data landscape, and AI opportunity surface." },
    { num: "02", title: "Data Preparation", desc: "Collect, clean, and structure training datasets at production quality." },
    { num: "03", title: "Model Development", desc: "Design and train ML or deep learning models tailored to the problem." },
    { num: "04", title: "Integration & Testing", desc: "Embed AI into existing systems with rigorous accuracy benchmarks." },
    { num: "05", title: "Deployment & Optimization", desc: "Ship production systems with continuous monitoring and improvement loops." },
  ];

  const SERVICES = [
    { icon: "⬡", title: "Custom AI Solutions", desc: "Bespoke AI applications built around your workflows and data — not generic templates." },
    { icon: "◈", title: "Natural Language Processing", desc: "Systems that understand, generate, and reason over human language at scale." },
    { icon: "◉", title: "Computer Vision", desc: "Visual intelligence for detection, inspection, classification, and recognition." },
    { icon: "◇", title: "Generative AI Apps", desc: "Production-grade GenAI — text, image, code, and multimodal pipelines." },
    { icon: "△", title: "AI-as-a-Service", desc: "Scalable AI capabilities via cloud APIs with zero infrastructure burden." },
    { icon: "○", title: "MLOps & Infrastructure", desc: "End-to-end model lifecycle management: training, versioning, serving, drift detection." },
  ];

  const TECH = [
    { category: "Frameworks", items: ["TensorFlow", "PyTorch", "JAX", "Scikit-learn"] },
    { category: "Generative AI", items: ["OpenAI API", "LangChain", "LlamaIndex", "HuggingFace"] },
    { category: "Data", items: ["Apache Spark", "Pandas", "dbt", "Snowflake"] },
    { category: "Cloud", items: ["AWS SageMaker", "Google Vertex AI", "Azure ML", "Modal"] },
  ];

  const STATS = [
    { value: 150, suffix: "+", label: "AI models shipped" },
    { value: 40, suffix: "M+", label: "Predictions per day" },
    { value: 98, suffix: "%", label: "On-time delivery" },
    { value: 12, suffix: "x", label: "Avg. ROI for clients" },
  ];

  const FAQS = [
    { q: "What are AI development services?", a: "End-to-end design, training, and deployment of intelligent software that learns from your data and automates decision-making." },
    { q: "How long does it take to build an AI solution?", a: "MVPs typically take 6–12 weeks. Production-grade systems with complex integrations run 3–6 months." },
    { q: "Can solutions be customized to my industry?", a: "Yes — our models are trained on your domain data, tuned to your workflows, and refined continuously post-launch." },
    { q: "What industries benefit most from AI?", a: "Healthcare, fintech, logistics, retail, and manufacturing see the highest impact, but any data-rich domain qualifies." },
  ];

  const [openFAQ, setOpenFAQ] = useState(null);

  return (
    <>
      <style>{`
        /* ── Design tokens (mirroring globals) ── */
        :root {
          --c-primary: #46c0bf;
          --c-primary-dark: #2e9998;
          --c-primary-light: #d0f0ef;
          --c-ink: #0f1c1c;
          --c-ink-soft: #2c3e3e;
          --c-muted: #6e8585;
          --c-white: #ffffff;
          --c-off-white: #f7fafa;
          --c-border: #d8ecec;
          --font-sans: 'DM Sans', sans-serif;
          --font-serif: 'DM Serif Display', serif;
          --radius-sm: 4px;
          --radius-md: 6px;
          --transition-fast: 0.2s ease;
        }

        /* ── Shared utility ── */
        .ai-page { font-family: var(--font-sans); color: var(--c-ink); overflow-x: hidden; }
        .ai-container { width: min(1200px, 92%); margin: 0 auto; }

        /* ── Grid background ── */
        .ai-grid-bg {
          position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 0;
        }
        .ai-grid-bg__dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(70,192,191,0.18) 1px, transparent 1px);
          background-size: 36px 36px;
          mask-image: radial-gradient(ellipse 80% 60% at 50% 50%, black 40%, transparent 100%);
        }
        .ai-grid-bg__glow {
          position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.35;
        }
        .ai-grid-bg__glow--1 {
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(70,192,191,0.5), transparent 70%);
          top: -200px; left: 10%;
        }
        .ai-grid-bg__glow--2 {
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(46,153,152,0.4), transparent 70%);
          bottom: -100px; right: 5%;
        }

        /* ── Badge ── */
        .ai-badge {
          display: inline-flex; align-items: center; gap: 8px;
          font-family: var(--font-sans);
          font-size: 0.72rem; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
          color: var(--c-primary-dark);
          background: var(--c-primary-light);
          border: 1px solid rgba(70,192,191,0.4);
          border-radius: 100px; padding: 6px 14px;
          margin-bottom: 1.5rem;
        }
        .ai-badge__dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: var(--c-primary);
          animation: pulse 2s infinite;
        }
        @keyframes pulse {
          0%,100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.5); }
        }

        /* ── HERO ── */
        .ai-hero {
          position: relative; min-height: 100vh;
          display: flex; align-items: center;
          background: var(--c-ink);
          overflow: hidden;
        }
        .ai-hero__inner {
          position: relative; z-index: 1;
          padding: 120px 0 100px;
          text-align: center;
        }
        .ai-hero__eyebrow {
          display: inline-block;
          font-size: 0.75rem; font-weight: 600; letter-spacing: 0.14em;
          text-transform: uppercase; color: var(--c-primary);
          margin-bottom: 1.5rem;
        }
        .ai-hero h1 {
          font-family: var(--font-serif);
          font-size: clamp(3rem, 6vw, 5.5rem);
          font-weight: 400; line-height: 1.08;
          letter-spacing: -0.03em;
          color: var(--c-white);
          margin-bottom: 1.5rem;
        }
        .ai-hero h1 em {
          font-style: italic;
          background: linear-gradient(135deg, var(--c-primary), var(--c-primary-dark));
          -webkit-background-clip: text; -webkit-text-fill-color: transparent;
        }
        .ai-hero__sub {
          font-size: 1.15rem; color: rgba(255,255,255,0.55);
          max-width: 600px; margin: 0 auto 2.5rem;
          font-weight: 300; line-height: 1.7;
        }
        .ai-hero__actions { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }
        .ai-hero__noise {
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
          opacity: 0.06; pointer-events: none;
        }

        /* ── Stats bar ── */
        .ai-stats {
          background: var(--c-off-white);
          border-top: 1px solid var(--c-border);
          border-bottom: 1px solid var(--c-border);
          padding: 48px 0;
        }
        .ai-stats__grid {
          display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px;
          text-align: center;
        }
        @media (max-width: 680px) { .ai-stats__grid { grid-template-columns: repeat(2,1fr); } }
        .ai-stats__value {
          font-family: var(--font-serif);
          font-size: clamp(2.2rem, 3vw, 3rem);
          color: var(--c-ink); line-height: 1;
          margin-bottom: 6px;
        }
        .ai-stats__label { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.1em; color: var(--c-muted); font-weight: 600; }

        /* ── Process section ── */
        .ai-process { padding: 120px 0; background: var(--c-white); }
        .ai-process__heading { text-align: center; margin-bottom: 72px; }
        .ai-process__heading h2 { font-family: var(--font-serif); font-size: clamp(2rem,3vw,3rem); margin-bottom: 12px; }
        .ai-process__heading p { color: var(--c-muted); max-width: 560px; margin: 0 auto; }
        .ai-process__track {
          display: flex; gap: 0;
          position: relative;
        }
        .ai-process__track::before {
          content: '';
          position: absolute; top: 28px; left: 0; right: 0; height: 1px;
          background: linear-gradient(90deg, transparent, var(--c-primary), transparent);
          opacity: 0.4;
        }
        .ai-process__step {
          flex: 1; padding: 32px 24px 24px; text-align: center;
          position: relative;
        }
        .ai-process__num {
          display: inline-flex; align-items: center; justify-content: center;
          width: 56px; height: 56px; border-radius: 50%;
          border: 1px solid var(--c-border);
          background: var(--c-white);
          font-family: var(--font-sans); font-size: 0.72rem; font-weight: 700;
          letter-spacing: 0.05em; color: var(--c-primary-dark);
          margin-bottom: 20px;
          position: relative; z-index: 1;
          transition: all 0.3s ease;
        }
        .ai-process__step:hover .ai-process__num {
          background: var(--c-primary); color: white; border-color: var(--c-primary);
          transform: scale(1.1);
        }
        .ai-process__step h3 { font-family: var(--font-sans); font-size: 0.95rem; font-weight: 600; margin-bottom: 10px; }
        .ai-process__step p { font-size: 0.85rem; color: var(--c-muted); line-height: 1.6; }
        @media (max-width: 768px) {
          .ai-process__track { flex-direction: column; }
          .ai-process__track::before { display: none; }
        }

        /* ── Services ── */
        .ai-services { padding: 120px 0; background: var(--c-ink); }
        .ai-services__heading { text-align: center; margin-bottom: 72px; }
        .ai-services__heading h2 { font-family: var(--font-serif); font-size: clamp(2rem,3vw,3rem); color: var(--c-white); margin-bottom: 12px; }
        .ai-services__heading p { color: rgba(255,255,255,0.4); max-width: 560px; margin: 0 auto; }
        .ai-services__grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 1px; }
        @media (max-width: 900px) { .ai-services__grid { grid-template-columns: repeat(2,1fr); } }
        @media (max-width: 560px) { .ai-services__grid { grid-template-columns: 1fr; } }

        /* ── Gradient border card ── */
        .ai-grad-card {
          position: relative;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 0;
          padding: 40px 32px;
          cursor: default;
          transition: background 0.3s ease;
          overflow: hidden;
        }
        .ai-grad-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(70,192,191,0.08), transparent 60%);
          opacity: 0; transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .ai-grad-card--hovered::before { opacity: 1; }
        .ai-grad-card--hovered {
          border-color: rgba(70,192,191,0.3);
          background: rgba(70,192,191,0.05);
        }
        .ai-grad-card__icon {
          font-size: 1.6rem; margin-bottom: 20px; display: block;
          color: var(--c-primary); filter: drop-shadow(0 0 8px rgba(70,192,191,0.5));
        }
        .ai-grad-card h3 { font-family: var(--font-sans); font-size: 1rem; font-weight: 600; color: var(--c-white); margin-bottom: 10px; }
        .ai-grad-card p { font-size: 0.88rem; color: rgba(255,255,255,0.4); line-height: 1.7; }

        /* ── Feature callout ── */
        .ai-feature { padding: 120px 0; background: var(--c-white); }
        .ai-feature__inner {
          display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center;
        }
        @media (max-width: 800px) { .ai-feature__inner { grid-template-columns: 1fr; gap: 48px; } }
        .ai-feature__label {
          font-size: 0.72rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--c-primary); margin-bottom: 16px;
        }
        .ai-feature__visual {
          background: var(--c-ink);
          border-radius: 16px;
          aspect-ratio: 4/3;
          position: relative;
          overflow: hidden;
          display: flex; align-items: center; justify-content: center;
        }
        .ai-feature__visual-grid {
          position: absolute; inset: 0;
          background-image:
            linear-gradient(rgba(70,192,191,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(70,192,191,0.08) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .ai-feature__visual-content {
          position: relative; z-index: 1; text-align: center;
        }
        .ai-feature__orb {
          width: 120px; height: 120px; border-radius: 50%;
          background: radial-gradient(circle at 40% 40%, var(--c-primary), var(--c-primary-dark));
          margin: 0 auto 20px;
          box-shadow: 0 0 80px rgba(70,192,191,0.4);
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-16px); } }
        .ai-feature__pills {
          display: flex; flex-wrap: wrap; gap: 8px; justify-content: center;
        }
        .ai-feature__pill {
          font-size: 0.7rem; padding: 4px 12px; border-radius: 100px;
          border: 1px solid rgba(70,192,191,0.3);
          color: rgba(255,255,255,0.6);
          font-family: var(--font-sans);
        }
        .ai-feature__checklist { list-style: none; padding: 0; display: flex; flex-direction: column; gap: 14px; }
        .ai-feature__checklist li {
          display: flex; align-items: flex-start; gap: 12px;
          font-size: 0.95rem; color: var(--c-ink-soft);
        }
        .ai-feature__check {
          width: 20px; height: 20px; border-radius: 50%; flex-shrink: 0; margin-top: 2px;
          background: var(--c-primary-light);
          display: flex; align-items: center; justify-content: center;
          font-size: 0.6rem; color: var(--c-primary-dark); font-weight: 700;
        }

        /* ── Tech stack ── */
        .ai-tech { padding: 120px 0; background: var(--c-off-white); }
        .ai-tech__heading { text-align: center; margin-bottom: 72px; }
        .ai-tech__heading h2 { font-family: var(--font-serif); font-size: clamp(2rem,3vw,3rem); margin-bottom: 12px; }
        .ai-tech__heading p { color: var(--c-muted); }
        .ai-tech__grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
        @media (max-width: 720px) { .ai-tech__grid { grid-template-columns: repeat(2,1fr); } }
        .ai-tech__group {
          background: var(--c-white); border: 1px solid var(--c-border);
          border-radius: 12px; padding: 28px 24px;
          transition: border-color 0.3s, box-shadow 0.3s;
        }
        .ai-tech__group:hover {
          border-color: var(--c-primary);
          box-shadow: 0 4px 32px rgba(70,192,191,0.12);
        }
        .ai-tech__cat {
          font-size: 0.68rem; font-weight: 700; letter-spacing: 0.12em;
          text-transform: uppercase; color: var(--c-primary-dark); margin-bottom: 16px;
        }
        .ai-tech__item {
          font-size: 0.9rem; color: var(--c-ink-soft); padding: 8px 0;
          border-bottom: 1px solid var(--c-border); font-weight: 400;
          display: flex; align-items: center; gap: 8px;
        }
        .ai-tech__item:last-child { border-bottom: none; }
        .ai-tech__item::before {
          content: ''; width: 6px; height: 6px; border-radius: 50%;
          background: var(--c-primary); flex-shrink: 0;
        }

        /* ── Why us ── */
        .ai-why { padding: 120px 0; background: var(--c-white); }
        .ai-why__heading { text-align: center; margin-bottom: 72px; }
        .ai-why__heading h2 { font-family: var(--font-serif); font-size: clamp(2rem,3vw,3rem); margin-bottom: 12px; }
        .ai-why__grid { display: grid; grid-template-columns: repeat(4,1fr); gap: 24px; }
        @media (max-width: 800px) { .ai-why__grid { grid-template-columns: repeat(2,1fr); } }
        .ai-why__card {
          padding: 32px 24px;
          border: 1px solid var(--c-border);
          border-radius: 12px;
          position: relative; overflow: hidden;
          transition: border-color 0.3s, transform 0.3s;
        }
        .ai-why__card::after {
          content: '';
          position: absolute; bottom: 0; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--c-primary), var(--c-primary-dark));
          transform: scaleX(0); transform-origin: left;
          transition: transform 0.4s ease;
        }
        .ai-why__card:hover { border-color: var(--c-primary-light); transform: translateY(-4px); }
        .ai-why__card:hover::after { transform: scaleX(1); }
        .ai-why__card h3 { font-family: var(--font-sans); font-size: 0.95rem; font-weight: 600; margin-bottom: 10px; }
        .ai-why__card p { font-size: 0.85rem; color: var(--c-muted); line-height: 1.6; }

        /* ── CTA ── */
        .ai-cta {
          padding: 140px 0;
          background: var(--c-ink);
          position: relative; overflow: hidden; text-align: center;
        }
        .ai-cta__glow {
          position: absolute; inset: 0; pointer-events: none;
          background: radial-gradient(ellipse 60% 50% at 50% 50%, rgba(70,192,191,0.12), transparent);
        }
        .ai-cta__inner { position: relative; z-index: 1; }
        .ai-cta h2 { font-family: var(--font-serif); font-size: clamp(2.5rem,4vw,4rem); color: var(--c-white); margin-bottom: 16px; }
        .ai-cta p { color: rgba(255,255,255,0.45); font-size: 1.1rem; max-width: 520px; margin: 0 auto 40px; }
        .ai-cta__actions { display: flex; justify-content: center; gap: 12px; flex-wrap: wrap; }

        /* ── FAQ ── */
        .ai-faq { padding: 120px 0; background: var(--c-off-white); }
        .ai-faq__heading { text-align: center; margin-bottom: 64px; }
        .ai-faq__heading h2 { font-family: var(--font-serif); font-size: clamp(2rem,3vw,3rem); }
        .ai-faq__list { max-width: 720px; margin: 0 auto; display: flex; flex-direction: column; gap: 0; }
        .ai-faq__item {
          border-top: 1px solid var(--c-border);
          padding: 28px 0;
        }
        .ai-faq__item:last-child { border-bottom: 1px solid var(--c-border); }
        .ai-faq__q {
          display: flex; justify-content: space-between; align-items: center;
          cursor: pointer; font-weight: 600; font-size: 0.95rem; gap: 16px;
          background: none; border: none; width: 100%; text-align: left;
          color: var(--c-ink); font-family: var(--font-sans);
        }
        .ai-faq__toggle {
          width: 28px; height: 28px; border-radius: 50%; flex-shrink: 0;
          border: 1px solid var(--c-border); display: flex; align-items: center; justify-content: center;
          font-size: 1rem; transition: all 0.3s ease; color: var(--c-primary-dark);
        }
        .ai-faq__toggle--open {
          background: var(--c-primary); border-color: var(--c-primary); color: white; transform: rotate(45deg);
        }
        .ai-faq__a { font-size: 0.9rem; color: var(--c-muted); line-height: 1.7; padding-top: 12px; }

        /* ── Button system (mirrors globals) ── */
        .btn {
          font-family: var(--font-sans);
          font-size: 0.8rem; font-weight: 600; letter-spacing: 0.08em;
          text-transform: uppercase; padding: 0.9rem 2.2rem;
          border-radius: var(--radius-sm); cursor: pointer;
          display: inline-block; transition: all var(--transition-fast);
          border: 2px solid transparent; text-decoration: none;
        }
        .btn-primary { background: var(--c-primary); color: var(--c-white); border-color: var(--c-primary); }
        .btn-primary:hover { background: var(--c-primary-dark); border-color: var(--c-primary-dark); transform: translateY(-2px); box-shadow: 0 8px 24px rgba(70,192,191,0.25); }
        .btn-ghost { background: transparent; color: rgba(255,255,255,0.75); border-color: rgba(255,255,255,0.2); }
        .btn-ghost:hover { border-color: rgba(255,255,255,0.5); color: white; transform: translateY(-2px); }
        .btn-ghost-dark { background: transparent; color: var(--c-ink); border-color: var(--c-border); }
        .btn-ghost-dark:hover { border-color: var(--c-primary); color: var(--c-primary-dark); transform: translateY(-2px); }

        /* ── Sticky CTA ── */
        .ai-sticky-cta {
          position: fixed; bottom: 24px; left: 50%; transform: translateX(-50%);
          z-index: 999;
          background: var(--c-ink);
          border: 1px solid rgba(70,192,191,0.25);
          border-radius: 100px;
          padding: 10px 10px 10px 24px;
          display: flex; align-items: center; gap: 16px;
          box-shadow: 0 16px 64px rgba(0,0,0,0.4);
          backdrop-filter: blur(12px);
          white-space: nowrap;
        }
        .ai-sticky-cta__label { font-size: 0.85rem; color: rgba(255,255,255,0.6); font-family: var(--font-sans); }
        .ai-sticky-cta__actions { display: flex; gap: 8px; }
        .ai-sticky-cta .btn { padding: 0.6rem 1.4rem; font-size: 0.72rem; }
        @media (max-width: 560px) { .ai-sticky-cta__label { display: none; } .ai-sticky-cta { padding: 10px; } }
      `}</style>

      <div className="ai-page">
        <StickyCTA />

        {/* ── HERO ── */}
        <section className="ai-hero" ref={heroRef}>
          <GridBackground />
          <div className="ai-hero__noise" />
          <div className="ai-container" style={{ width: "100%" }}>
            <motion.div
              className="ai-hero__inner ai-container"
              style={{ y: heroY, opacity: heroOpacity }}
            >
              <Badge>AI Development Services</Badge>
              <motion.h1 variants={fadeUp} initial="hidden" animate="show">
                Build <em>intelligent</em> systems<br />that scale with you
              </motion.h1>
              <motion.p className="ai-hero__sub" variants={fadeUp} custom={1} initial="hidden" animate="show">
                We design, train, and ship AI solutions that automate workflows,
                unlock data insights, and compound value over time.
              </motion.p>
              <motion.div className="ai-hero__actions" variants={fadeUp} custom={2} initial="hidden" animate="show">
                <button className="btn btn-primary">Start Your AI Project</button>
                <button className="btn btn-ghost">Request a Consultation</button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ── STATS ── */}
        <section className="ai-stats">
          <div className="ai-container">
            <AnimatedSection className="ai-stats__grid">
              {STATS.map((s, i) => (
                <motion.div key={i} variants={fadeUp} custom={i}>
                  <div className="ai-stats__value">
                    <CountUp target={s.value} suffix={s.suffix} />
                  </div>
                  <div className="ai-stats__label">{s.label}</div>
                </motion.div>
              ))}
            </AnimatedSection>
          </div>
        </section>

        {/* ── PROCESS ── */}
        <section className="ai-process">
          <div className="ai-container">
            <AnimatedSection>
              <motion.div className="ai-process__heading" variants={fadeUp}>
                <h2>Our Proven Development Process</h2>
                <p>From concept to production — a structured path that delivers measurable outcomes at every stage.</p>
              </motion.div>
              <div className="ai-process__track">
                {PROCESS.map((step, i) => (
                  <motion.div key={i} className="ai-process__step" variants={fadeUp} custom={i}>
                    <div className="ai-process__num">{step.num}</div>
                    <h3>{step.title}</h3>
                    <p>{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── SERVICES ── */}
        <section className="ai-services">
          <div className="ai-container">
            <AnimatedSection>
              <motion.div className="ai-services__heading" variants={fadeUp}>
                <h2>What We Build</h2>
                <p>End-to-end AI development across the full spectrum of intelligent systems.</p>
              </motion.div>
              <div className="ai-services__grid">
                {SERVICES.map((svc, i) => (
                  <GradientCard key={i} delay={i}>
                    <span className="ai-grad-card__icon">{svc.icon}</span>
                    <h3>{svc.title}</h3>
                    <p>{svc.desc}</p>
                  </GradientCard>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FEATURE CALLOUT ── */}
        <section className="ai-feature">
          <div className="ai-container">
            <AnimatedSection className="ai-feature__inner">
              <motion.div variants={fadeUp}>
                <div className="ai-feature__label">Custom AI Solutions</div>
                <h2 style={{ fontFamily: "var(--font-serif)", fontSize: "clamp(2rem,3vw,2.8rem)", marginBottom: "1.5rem" }}>
                  Built around your data — not a template
                </h2>
                <p style={{ marginBottom: "2rem", lineHeight: 1.8 }}>
                  We develop AI systems from first principles, designed to align with your operational workflows and compound in value over time.
                </p>
                <ul className="ai-feature__checklist">
                  {[
                    "Models trained on your industry-specific data",
                    "Seamless integration with existing systems",
                    "Scalable architecture for future growth",
                    "Continuous monitoring and improvement loops",
                  ].map((item, i) => (
                    <li key={i}>
                      <span className="ai-feature__check">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "2.5rem" }}>
                  <button className="btn btn-primary">Discuss Your Project</button>
                </div>
              </motion.div>
              <motion.div variants={fadeUp} custom={1}>
                <div className="ai-feature__visual">
                  <div className="ai-feature__visual-grid" />
                  <div className="ai-feature__visual-content">
                    <div className="ai-feature__orb" />
                    <div className="ai-feature__pills">
                      {["NLP", "Vision", "GenAI", "MLOps", "RAG", "FineTuning"].map((t, i) => (
                        <span key={i} className="ai-feature__pill">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="ai-tech">
          <div className="ai-container">
            <AnimatedSection>
              <motion.div className="ai-tech__heading" variants={fadeUp}>
                <h2>Technology We Work With</h2>
                <p>Industry-leading frameworks and cloud platforms, assembled into reliable stacks.</p>
              </motion.div>
              <div className="ai-tech__grid">
                {TECH.map((group, i) => (
                  <motion.div key={i} className="ai-tech__group" variants={fadeUp} custom={i}>
                    <div className="ai-tech__cat">{group.category}</div>
                    {group.items.map((item, j) => (
                      <div key={j} className="ai-tech__item">{item}</div>
                    ))}
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="ai-why">
          <div className="ai-container">
            <AnimatedSection>
              <motion.div className="ai-why__heading" variants={fadeUp}>
                <h2>Why Businesses Choose Us</h2>
                <p style={{ color: "var(--c-muted)", marginTop: "8px" }}>Four pillars that define how we work.</p>
              </motion.div>
              <div className="ai-why__grid">
                {[
                  { title: "Full-Cycle Development", desc: "From strategy and data prep through deployment and ongoing optimization." },
                  { title: "Responsible AI", desc: "Transparency, fairness, and privacy baked into every system from day one." },
                  { title: "Scalable Architecture", desc: "Systems engineered to grow with your business without replatforming." },
                  { title: "Industry Expertise", desc: "Proven delivery across healthcare, fintech, retail, logistics, and manufacturing." },
                ].map((card, i) => (
                  <motion.div key={i} className="ai-why__card" variants={fadeUp} custom={i}>
                    <h3>{card.title}</h3>
                    <p>{card.desc}</p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="ai-cta">
          <div className="ai-cta__glow" />
          <div className="ai-container">
            <AnimatedSection className="ai-cta__inner">
              <motion.div variants={fadeUp}>
                <Badge>Let's build together</Badge>
              </motion.div>
              <motion.h2 variants={fadeUp} custom={1}>
                Ready to transform<br />your business with AI?
              </motion.h2>
              <motion.p variants={fadeUp} custom={2}>
                Partner with our team to design intelligent systems that drive innovation, efficiency, and measurable growth.
              </motion.p>
              <motion.div className="ai-cta__actions" variants={fadeUp} custom={3}>
                <button className="btn btn-primary">Start a Project</button>
                <button className="btn btn-ghost">Book a Free Consultation</button>
              </motion.div>
            </AnimatedSection>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="ai-faq">
          <div className="ai-container">
            <AnimatedSection>
              <motion.div className="ai-faq__heading" variants={fadeUp}>
                <h2>Frequently Asked Questions</h2>
              </motion.div>
              <div className="ai-faq__list">
                {FAQS.map((item, i) => (
                  <motion.div key={i} className="ai-faq__item" variants={fadeUp} custom={i}>
                    <button className="ai-faq__q" onClick={() => setOpenFAQ(openFAQ === i ? null : i)}>
                      <span>{item.q}</span>
                      <span className={`ai-faq__toggle ${openFAQ === i ? "ai-faq__toggle--open" : ""}`}>+</span>
                    </button>
                    <AnimatePresence>
                      {openFAQ === i && (
                        <motion.div
                          className="ai-faq__a"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                          style={{ overflow: "hidden" }}
                        >
                          {item.a}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </section>

      </div>
    </>
  );
}