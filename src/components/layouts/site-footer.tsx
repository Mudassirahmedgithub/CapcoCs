"use client";
import Image from "next/image";
import {
  Mail,
  MapPin,
  Phone,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import styles from "./footer.module.css";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const ai = [
    "AI Agent Development",
    "AI Chatbot Development",
    "AI Consulting",
  ];

  const products = [
    "Oracle Fusion Cloud",
    "Oracle NetSuite ERP",
    "Beyond RF",
  ];

  const services = [
    "Warehouse Management",
    "Asset Management",
    "Business Management & Consultancy",
    "Digital Marketing",
    "Software Development",
    "Data Governance & AI",
    "IT Consulting Support",
  ];

  return (
    <>
      <footer className={styles.footerRoot}>
        {/* Accent bar */}
        <div className={styles.footerAccentBar} />

        {/* Ambient blobs */}
        <div className={`${styles.footerBlob} ${styles.footerBlob1}`} />
        <div className={`${styles.footerBlob} ${styles.footerBlob2}`} />

        {/* Dot grid */}
        <div className={styles.footerGrid} />

        <div className={styles.footerInner}>
          <div className={styles.footerGridMain}>

            {/* ── Brand ── */}
            <div className={styles.footerBrand}>
              <div className={styles.footerLogoRow}>
                <Image
                  src="/ForFooter.svg"
                  alt="Capco Consulting Services Logo"
                  width={220}
                  height={40}
                  priority
                />
                <span className={styles.footerBrandName}>Capco Consulting Services</span>
              </div>
              <p className={styles.footerTagline}>
                Driving your vision forward with innovative digital solutions and cutting-edge technology consulting.
              </p>

              <p className={styles.footerSocialLabel}>Connect with us</p>
              <div className={styles.footerSocials}>

                <a href="https://facebook.com/Capcocs" target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.fb}`} aria-label="Facebook">
                  <FaFacebook size={16} />
                </a>
                <a href="https://www.instagram.com/Capcocs" target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.ig}`} aria-label="Instagram">
                  <FaInstagram size={16} />
                </a>
                <a href="https://www.linkedin.com/company/CapcoConsultingServices" target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles.li}`} aria-label="LinkedIn">
                  <FaLinkedin size={16} />
                </a>
                <a href="https://www.youtube.com/@Capcocs" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="YouTube" style={{ color: '#7ab8b8' }}
                  onMouseEnter={e => { e.currentTarget.style.background = '#ff0000'; e.currentTarget.style.borderColor = '#ff0000'; e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#111c1c'; e.currentTarget.style.borderColor = '#1e3030'; e.currentTarget.style.color = '#7ab8b8'; }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="17" height="17">
                    <path d="M23.498 6.186a2.996 2.996 0 0 0-2.111-2.12C19.465 3.5 12 3.5 12 3.5s-7.465 0-9.387.566a2.996 2.996 0 0 0-2.111 2.12A31.54 31.54 0 0 0 0 12c0 2.06.177 3.95.502 5.814a2.996 2.996 0 0 0 2.111 2.12C4.535 20.5 12 20.5 12 20.5s7.465 0 9.387-.566a2.996 2.996 0 0 0 2.111-2.12A31.54 31.54 0 0 0 24 12a31.54 31.54 0 0 0-.502-5.814ZM9.75 15.02V8.98L15.75 12l-6 3.02Z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* ── AI ── */}
            <div>
              <h3 className={styles.footerColHeading}>AI</h3>
              <ul className={styles.footerNavList}>
                {ai.map((item, i) => (
                  <li key={i}>
                    <a href={`/ai/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className={styles.footerNavLink}>
                      <ChevronRight size={12} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Products ── */}
            <div>
              <h3 className={styles.footerColHeading}>Products</h3>
              <ul className={styles.footerNavList}>
                {products.map((item, i) => (
                  <li key={i}>
                    <a href={`/products/${item.toLowerCase().replace(/ /g, "-")}`} className={styles.footerNavLink}>
                      <ChevronRight size={12} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Services ── */}
            <div>
              <h3 className={styles.footerColHeading}>Services</h3>
              <ul className={styles.footerNavList}>
                {services.map((item, i) => (
                  <li key={i}>
                    <a href={`/services/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className={styles.footerNavLink}>
                      <ChevronRight size={12} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact ── */}
            <div className={styles.footerContact}>
              <h3 className={styles.footerColHeading}>Contact Us</h3>

              <a href="mailto:info@capcocs.com" style={{ textDecoration: "none" }}>
                <div className={styles.footerContactItem}>
                  <div className={styles.contactIconWrap}>
                    <Mail size={17} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Email Us</p>
                    <p className={styles.contactValue}>info@capcocs.com</p>
                  </div>
                </div>
              </a>

              <a href="tel:+974 50520211" style={{ textDecoration: "none" }}>
                <div className={styles.footerContactItem}>
                  <div className={styles.contactIconWrap}>
                    <Phone size={17} />
                  </div>
                  <div>
                    <p className={styles.contactLabel}>Call Us</p>
                    <p className={styles.contactValue}>+974 50520211</p>
                  </div>
                </div>
              </a>

              <div className={styles.footerContactItem}>
                <div className={styles.contactIconWrap}>
                  <MapPin size={17} />
                </div>
                <div>
                  <p className={styles.contactLabel}>Locations</p>
                  <p className={styles.contactValue}>Canada · Qatar · India</p>
                </div>
              </div>
            </div>
          </div>
          {/* Divider */}
          <div className={styles.footerDivider} />

          {/* Bottom bar */}
          <div className={styles.footerBottom}>
            <p className={styles.footerCopy}>
              © {new Date().getFullYear()}
              <span style={{ color: '#1e3030' }}>•</span>
              <strong>Capco Consulting Services</strong>
              <span style={{ color: '#1e3030' }}>•</span>
              All rights reserved.
            </p>
            <div className={styles.footerLegal}>
              <a href="/PrivacyPolicy" className={styles.footerLegalLink}>
                Privacy Policy <ArrowUpRight size={12} />
              </a>
              <span className={styles.footerLegalSep}>|</span>
              <a href="/Terms" className={styles.footerLegalLink}>
                Terms & Conditions <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}