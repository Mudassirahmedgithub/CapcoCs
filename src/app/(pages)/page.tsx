"use client";
import styles from './home.module.css';
import * as THREE from "three";
import React, { useEffect, useRef, useState } from "react";
import {
  Sparkles,
  TrendingUp,
  Users,
  Shield,
  Lightbulb,
  Heart,
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
/* ─────────────────────────────
   PARTICLE HERO (Three.js)
───────────────────────────── */
function ParticleHero() {
  const mountRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!mountRef.current) return;

    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0f1c1c, 0.003);

    const camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 50;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    mountRef.current.appendChild(renderer.domElement);

    const particleSystems: THREE.Points[] = [];

    const createParticleSystem = (
      count: number,
      color: THREE.ColorRepresentation,
      size: number,
      spread: number
    ): THREE.Points => {
      const geometry = new THREE.BufferGeometry();
      const positions = new Float32Array(count * 3);
      const velocities = new Float32Array(count * 3);

      for (let i = 0; i < count * 3; i += 3) {
        positions[i] = (Math.random() - 0.5) * spread;
        positions[i + 1] = (Math.random() - 0.5) * spread;
        positions[i + 2] = (Math.random() - 0.5) * spread;
        velocities[i] = (Math.random() - 0.5) * 0.012;
        velocities[i + 1] = (Math.random() - 0.5) * 0.012;
        velocities[i + 2] = (Math.random() - 0.5) * 0.012;
      }

      geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
      geometry.setAttribute("velocity", new THREE.BufferAttribute(velocities, 3));

      const material = new THREE.PointsMaterial({
        color,
        size,
        transparent: true,
        opacity: 0.6,
        blending: THREE.AdditiveBlending,
      });

      return new THREE.Points(geometry, material);
    };

    particleSystems.push(createParticleSystem(5000, 0x46c0bf, 0.55, 220));
    particleSystems.push(createParticleSystem(2000, 0x2e9998, 0.4, 170));
    particleSystems.push(createParticleSystem(800,  0xd0f0ef, 1.1, 110));

    particleSystems.forEach((ps) => scene.add(ps));

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", handleMouseMove);

    let frame = 0;
    let animId: number;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      frame += 0.006;

      particleSystems.forEach((system, index) => {
        system.rotation.y += 0.00015 * (index + 1);
        system.rotation.x += 0.00008 * (index + 1);
        system.rotation.x += mouseRef.current.y * 0.0002;
        system.rotation.y += mouseRef.current.x * 0.0002;

        const pos = system.geometry.attributes.position.array as Float32Array;
        const vel = system.geometry.attributes.velocity.array as Float32Array;

        for (let i = 0; i < pos.length; i += 3) {
          pos[i + 1] += Math.sin(frame + pos[i] * 0.012) * 0.012;
          pos[i] += vel[i];
          pos[i + 1] += vel[i + 1];
          pos[i + 2] += vel[i + 2];
        }
        system.geometry.attributes.position.needsUpdate = true;
      });

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      mountRef.current?.removeChild(renderer.domElement);
      particleSystems.forEach((p) => {
        p.geometry.dispose();
        if (Array.isArray(p.material)) {
          p.material.forEach((m) => m.dispose());
        } else {
          p.material.dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} className={styles.heroCanvas} />;
}

/* ─────────────────────────────
   CORE VALUES DATA
───────────────────────────── */
const coreValues = [
  { title: "Innovation",    desc: "Forward-thinking solutions to complex business challenges.", icon: Lightbulb, index: "01" },
  { title: "Integrity",     desc: "Complete honesty and transparency in everything we do.",   icon: Shield,    index: "02" },
  { title: "Client Focus",  desc: "Our clients' success is at the heart of every decision.",  icon: Heart,     index: "03" },
  { title: "Collaboration", desc: "Great results come from strong partnerships and teamwork.", icon: Users,     index: "04" },
  { title: "Growth",        desc: "Continuously evolving to help businesses scale and thrive.", icon: TrendingUp, index: "05" },
  { title: "Excellence",    desc: "Highest standards in every delivery and execution.",        icon: Sparkles,  index: "06" },
];

const stats = [
  { number: "500+", label: "Projects Delivered",  sub: "Across industries" },
  { number: "50+",  label: "Global Clients",       sub: "On 3 continents" },
  { number: "15+",  label: "Years Experience",     sub: "In the field" },
  { number: "98%",  label: "Client Satisfaction",  sub: "Retention rate" },
];

const services = [
  { title: "IT Consulting",     desc: "Strategic technology advisory that aligns your IT vision with business outcomes." },
  { title: "Cloud Transformation", desc: "Accelerate your move to the cloud with risk-managed, enterprise-grade migration." },
  { title: "HR Solutions",      desc: "Talent acquisition, workforce planning, and HR process optimization at scale." },
  { title: "Business Strategy", desc: "Market analysis, growth frameworks, and execution roadmaps for lasting impact." },
];

/* ─────────────────────────────
   HOME PAGE
───────────────────────────── */
export default function HomePage() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const anim = (delay = 0) => ({
    opacity: isLoaded ? 1 : 0,
    transform: isLoaded ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
  });

  return (
    <div>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <ParticleHero />
        <div className={styles.heroVignette} />
        <div className={styles.heroOverlayBottom} />

        {/* Floating top-right tag */}
        <div className={styles.heroFloatTag} style={anim(0.6)}>
          <span className={styles.floatTagLine} />
          EST. 2009
        </div>

        {/* Scroll indicator */}
        <div className={styles.heroScrollHint}>
          <ChevronDown size={16} />
        </div>

        <div className={styles.heroContent}>
          <div className="container">
            <div className={styles.heroInner}>

              <div className={styles.heroBadge} style={anim(0)}>
                <span className={styles.heroBadgeDot} />
                Global IT & Business Consulting
              </div>

              <h1 className={styles.heroHeading} style={anim(0.12)}>
                Engineering<br />
                <em className={styles.heroAccent}>Digital</em><br />
                Excellence
              </h1>

              <div className={styles.heroRule} style={anim(0.22)} />

              <p className={styles.heroSubtext} style={anim(0.28)}>
                Strategic IT consulting, cloud transformation, and scalable technology
                solutions — trusted by global enterprises across Qatar, India &amp; Canada.
              </p>

              <div className={styles.heroActions} style={anim(0.38)}>
                <a href="/contact" className={styles.heroCta}>
                  Begin the Journey
                  <ArrowRight size={16} />
                </a>
                <a href="/work" className={styles.heroCtaGhost}>
                  View Our Work
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Side vertical text */}
        <div className={styles.heroSideText}>CAPCO — 2025</div>
      </section>

      {/* ── MARQUEE STRIP ── */}
      <div className={styles.marqueeStrip}>
        <div className={styles.marqueeTrack}>
          {["IT Consulting", "Cloud Migration", "HR Solutions", "Business Strategy", "Digital Transformation", "Operational Excellence",
            "IT Consulting", "Cloud Migration", "HR Solutions", "Business Strategy", "Digital Transformation", "Operational Excellence"].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>
              <span className={styles.marqueeDot} />
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* ── COMPANY INTRO ── */}
      <section className={styles.intro}>
        <div className={styles.introDecor} />
        <div className="container">
          <div className={styles.introGrid}>
            <div className={styles.introLeft}>
              <span className={styles.sectionLabel}>Who We Are</span>
              <h2 className={styles.introHeading}>
                A Trusted Partner<br />
                <em className={styles.introAccent}>Built on Honesty</em>
              </h2>
              <div className={styles.introDecorLine} />
            </div>
            <div className={styles.introRight}>
              <p className={styles.introText}>
                CAPCO is a globally recognized consulting firm committed to empowering
                organizations across Qatar, India, and Canada. With a focus on tailored
                business solutions, operational efficiency, and long-term success, CAPCO
                serves as a trusted partner in consulting, human resource management, and
                technology services.
              </p>
              <a href="/about" className={styles.introLink}>
                Our Story <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section className={styles.stats}>
        <div className={styles.statsNoise} />
        <div className="container">
          <div className={styles.statsGrid}>
            {stats.map((s, i) => (
              <div className={styles.statItem} key={i}>
                <div className={styles.statIndex}>0{i + 1}</div>
                <div className={styles.statNumber}>{s.number}</div>
                <div className={styles.statLabel}>{s.label}</div>
                <div className={styles.statSub}>{s.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className={styles.services}>
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>What We Do</span>
            <h2 className={styles.sectionHeading}>Our Services</h2>
          </div>
          <div className={styles.servicesGrid}>
            {services.map((s, i) => (
              <div className={styles.serviceItem} key={i}>
                <div className={styles.serviceNum}>0{i + 1}</div>
                <div className={styles.serviceBody}>
                  <h3 className={styles.serviceTitle}>{s.title}</h3>
                  <p className={styles.serviceDesc}>{s.desc}</p>
                  <a href="/services" className={styles.serviceLink}>
                    Explore <ArrowUpRight size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className={styles.values}>
        <div className={styles.valuesBg} />
        <div className="container">
          <div className={styles.sectionHeader}>
            <span className={styles.sectionLabel}>Our Principles</span>
            <h2 className={styles.sectionHeading}>
              Core Values That<br />Drive Excellence
            </h2>
          </div>

          <div className={styles.valuesGrid}>
            {coreValues.map((v, i) => {
              const Icon = v.icon;
              return (
                <div className={styles.valueCard} key={i}>
                  <div className={styles.valueCardTop}>
                    <span className={styles.valueIndex}>{v.index}</span>
                    <div className={styles.valueIcon}>
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                  </div>
                  <h3 className={styles.valueTitle}>{v.title}</h3>
                  <p className={styles.valueDesc}>{v.desc}</p>
                  <div className={styles.valueCardHoverBar} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className={styles.about}>
        <div className="container">
          <div className={styles.aboutGrid}>

            <div className={styles.aboutImageWrap}>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=900&q=85"
                alt="Team collaboration"
                className={styles.aboutImg}
              />
              <div className={styles.aboutImgOverlay} />
              <div className={styles.aboutImgTag}>
                Building Tomorrow, Together
              </div>
              <div className={styles.aboutFloatCard}>
                <div className={styles.aboutFloatNum}>98%</div>
                <div className={styles.aboutFloatLabel}>Client Satisfaction</div>
              </div>
              <div className={styles.aboutFloatCard2}>
                <div className={styles.aboutFloatNum2}>500+</div>
                <div className={styles.aboutFloatLabel}>Projects Delivered</div>
              </div>
            </div>

            <div className={styles.aboutContent}>
              <span className={styles.sectionLabel}>About CAPCO</span>
              <h2 className={styles.aboutHeading}>
                Empowering<br />
                <em className={styles.aboutHeadingAccent}>Business Growth</em><br />
                Globally
              </h2>
              <div className={styles.aboutDivider} />
              <p className={styles.aboutText}>
                At CAPCO, we specialize in empowering businesses across Qatar, India,
                and Canada with innovative solutions and strategies. We are committed
                to transforming organizations by fostering resilience, optimizing
                operational efficiency, and driving sustainable growth.
              </p>
              <p className={styles.aboutText}>
                Through collaborative partnerships, we address complex challenges and
                deliver lasting value to our clients, employees, and communities.
              </p>

              <div className={styles.aboutMeta}>
                <div className={styles.aboutMetaItem}>
                  <div className={styles.aboutMetaNum}>15+</div>
                  <div className={styles.aboutMetaLabel}>Years of excellence</div>
                </div>
                <div className={styles.aboutMetaDivider} />
                <div className={styles.aboutMetaItem}>
                  <div className={styles.aboutMetaNum}>3</div>
                  <div className={styles.aboutMetaLabel}>Countries served</div>
                </div>
                <div className={styles.aboutMetaDivider} />
                <div className={styles.aboutMetaItem}>
                  <div className={styles.aboutMetaNum}>50+</div>
                  <div className={styles.aboutMetaLabel}>Global clients</div>
                </div>
              </div>

              <a href="/about" className={styles.aboutCta}>
                Learn More About Us
                <ArrowRight size={16} />
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaGlow} />
        <div className={styles.ctaGrid} />

        <div className="container">
          <div className={styles.ctaInner}>
            <span className={styles.ctaEyebrow}>Let's Work Together</span>
            <h2 className={styles.ctaHeading}>
              Ready to Transform<br />
              <em className={styles.ctaAccent}>Your Business?</em>
            </h2>
            <p className={styles.ctaText}>
              Join forward-thinking organizations that trust CAPCO for world-class consulting services.
            </p>
            <div className={styles.ctaActions}>
              <a href="/contact" className={styles.ctaBtnPrimary}>
                Get in Touch
                <ArrowRight size={16} />
              </a>
              <a href="/products" className={styles.ctaBtnOutline}>
                View Our Products
              </a>
            </div>
          </div>
        </div>

        <div className={styles.ctaBottomText}>CAPCO CONSULTING — GLOBAL</div>
      </section>
    </div>
  );
}