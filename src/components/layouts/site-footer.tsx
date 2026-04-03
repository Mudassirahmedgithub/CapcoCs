"use client";
import Image from "next/image";
import {
  Mail,
  MapPin,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import './footer.css';
export default function Footer() {
  const ai = [
    "AI Agent Development",
    "AI Chatbot Development",
    "AI Consulting",
    "AI Development",
    "AI Integration",
    "AI OCR",
    "Computer Vision",
    "Generative AI Consulting",
    "Generative AI Development",
    "Generative AI",
    "Machine Learning",
  ];

  const products = [
    "Asset Management",
    "Manufacturing ERP",
    "HRMS",
    "CRM",
    "Audit",
    "Accounting",
    "LMS",
    "Expense Management",
    "HIMS",
    "Legal",
    "POS",
    "Procurement",
    "Project Management",
    "Recruitment",
    "Retail",
    "Rewards",
    "Upskill",
  ];

  const services = [
    "Warehouse",
    "Asset Management",
    "Business Management & Consultancy",
    "Digital Marketing",
    "Asset Tagging & Tracking Solution",
    "Human Resource Management",
    "Software Development",
    "Data Governance & AI",
    "IT Consulting Support",
  ];

  return (
    <>


      <footer className="footer-root">
        {/* Accent bar */}
        <div className="footer-accent-bar" />

        {/* Ambient blobs */}
        <div className="footer-blob footer-blob-1" />
        <div className="footer-blob footer-blob-2" />

        {/* Dot grid */}
        <div className="footer-grid" />

        <div className="footer-inner">
          <div className="footer-grid-main">

            {/* ── Brand ── */}
            <div className="footer-brand">
              <div className="footer-logo-row">
                <Image
                  src="/ForFooter.svg"
                  alt="Capco Consulting Services Logo"
                  width={110}
                  height={28}
                  priority
                />
                <span className="footer-brand-name">Capco Consulting Services</span>
              </div>
              <p className="footer-tagline">
                Driving your vision forward with innovative digital solutions and cutting-edge technology consulting.
              </p>

              <p className="footer-social-label">Connect with us</p>
              <div className="footer-socials">
                
                <a href="https://facebook.com/Capcocs" target="_blank" rel="noopener noreferrer" className="social-btn fb" aria-label="Facebook">
                  <FaFacebook size={16} />
                </a>
                <a href="https://www.instagram.com/Capcocs" target="_blank" rel="noopener noreferrer" className="social-btn ig" aria-label="Instagram">
                  <FaInstagram size={16} />
                </a>
                <a href="https://www.linkedin.com/company/CapcoConsultingServices" target="_blank" rel="noopener noreferrer" className="social-btn li" aria-label="LinkedIn">
                  <FaLinkedin size={16} />
                </a>
                <a href="https://www.youtube.com/@Capcocs" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="YouTube" style={{ color: '#7ab8b8' }}
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
              <h3 className="footer-col-heading">AI</h3>
              <ul className="footer-nav-list">
                {ai.map((item, i) => (
                  <li key={i}>
                    <a href={`/ai/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`} className="footer-nav-link">
                      <ChevronRight size={12} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Products ── */}
            <div>
              <h3 className="footer-col-heading">Products</h3>
              <ul className="footer-nav-list">
                {products.map((item, i) => (
                  <li key={i}>
                    <a href={`/products/${item.toLowerCase().replace(/ /g, "-")}`} className="footer-nav-link">
                      <ChevronRight size={12} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Services ── */}
            <div>
              <h3 className="footer-col-heading">Services</h3>
              <ul className="footer-nav-list">
                {services.map((item, i) => (
                  <li key={i}>
                    <a href={`/services/${item.toLowerCase().replace(/ /g, "-")}`} className="footer-nav-link">
                      <ChevronRight size={12} />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Contact ── */}
            <div className="footer-contact">
              <h3 className="footer-col-heading">Contact Us</h3>

              <a href="mailto:capcocsqa@gmail.com" style={{ textDecoration: 'none' }}>
                <div className="footer-contact-item">
                  <div className="contact-icon-wrap">
                    <Mail size={17} />
                  </div>
                  <div>
                    <p className="contact-label">Email Us</p>
                    <p className="contact-value">capcocsqa@gmail.com</p>
                  </div>
                </div>
              </a>

              <div className="footer-contact-item">
                <div className="contact-icon-wrap">
                  <MapPin size={17} />
                </div>
                <div>
                  <p className="contact-label">Locations</p>
                  <p className="contact-value">Canada · Qatar · India</p>
                </div>
              </div>
            </div>

          </div>

          {/* Divider */}
          <div className="footer-divider" />

          {/* Bottom bar */}
          <div className="footer-bottom">
            <p className="footer-copy">
              © {new Date().getFullYear()}
              <span style={{ color: '#1e3030' }}>•</span>
              <strong>Capco Consulting Services</strong>
              <span style={{ color: '#1e3030' }}>•</span>
              All rights reserved.
            </p>
            <div className="footer-legal">
              <a href="/PrivacyPolicy" className="footer-legal-link">
                Privacy Policy <ArrowUpRight size={12} />
              </a>
              <span className="footer-legal-sep">|</span>
              <a href="/Terms" className="footer-legal-link">
                Terms & Conditions <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

        </div>
      </footer>
    </>
  );
}