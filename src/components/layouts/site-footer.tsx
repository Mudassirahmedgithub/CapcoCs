"use client";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";

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
    "Hire a Developer Services",
    "Low-Code No-Code Services",
    "Machine Learning",
  ];


  const products = [
    "Manufacturing ERP",
    "HRMS",
    "CRM",
    "Asset Management",
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
    "Software Development",
    "Data Governance & AI",
    "IT Consulting Support",
  ];

  return (
    <footer className="relative text-white overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950/20 to-slate-950">
      {/* Animated background effects */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600 rounded-full blur-[140px] animate-pulse" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-indigo-600 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h60v60H0z' fill='none'/%3E%3Cpath d='M0 30h60M30 0v60' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E\")",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10 mb-12">

          {/* Company Info - Enhanced */}
          <div className="lg:col-span-1 md:col-span-3 sm:col-span-2">
            <div className="flex items-center gap-3 mb-6 flex-wrap">
              <div className="relative">
                <img
                  src="/favicon-96x96.png"
                  alt="Logo"
                  className="w-12 h-12 rounded-xl shadow-lg object-cover ring-2 ring-blue-500/30"
                />
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-500/20 to-transparent" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Capco Consulting Services
              </h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed mb-6 max-w-xs">
              Driving Your Vision with innovative digital solutions and cutting-edge technology consulting.
            </p>

            {/* Social Media - Enhanced */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider">Connect With Us</p>
              <div className="flex gap-3 flex-wrap">
                <a
                  href="https://facebook.com/CapcoConsultingServices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-blue-600 hover:to-blue-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 border border-slate-700/50"
                  aria-label="Facebook"
                >
                  <Facebook size={18} className="relative z-10" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://www.instagram.com/CapcoConsultingServices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-pink-600 hover:to-purple-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-pink-500/30 border border-slate-700/50"
                  aria-label="Instagram"
                >
                  <Instagram size={18} className="relative z-10" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://www.linkedin.com/company/CapcoConsultingServices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-blue-600 hover:to-blue-800 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-blue-500/30 border border-slate-700/50"
                  aria-label="LinkedIn"
                >
                  <Linkedin size={18} className="relative z-10" />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>

                <a
                  href="https://www.youtube.com/@CapcoConsultingServices"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-slate-800 to-slate-900 hover:from-red-600 hover:to-red-700 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-red-500/30 border border-slate-700/50"
                  aria-label="YouTube"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 relative z-10">
                    <path d="M23.498 6.186a2.996 2.996 0 0 0-2.111-2.12C19.465 3.5 12 3.5 12 3.5s-7.465 0-9.387.566a2.996 2.996 0 0 0-2.111 2.12A31.54 31.54 0 0 0 0 12c0 2.06.177 3.95.502 5.814a2.996 2.996 0 0 0 2.111 2.12C4.535 20.5 12 20.5 12 20.5s7.465 0 9.387-.566a2.996 2.996 0 0 0 2.111-2.12A31.54 31.54 0 0 0 24 12a31.54 31.54 0 0 0-.502-5.814ZM9.75 15.02V8.98L15.75 12l-6 3.02Z" />
                  </svg>
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
          </div>
          {/* AI */}
          <div>
            <h3 className="text-lg font-bold flex items-center mb-6 group cursor-default">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 mr-3 rounded-full group-hover:h-8 transition-all" />
              <span className="group-hover:text-blue-400 transition-colors">AI</span>
            </h3>

            <ul className="space-y-3">
              {ai.map((item, i) => (
                <li key={i}>
                  <a
                    href={`/digitalTransformation/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="group text-slate-400 text-sm flex items-center hover:text-blue-400 transition-all hover:translate-x-1"
                  >
                    <ChevronRight size={16} className="mr-2 text-slate-600 group-hover:text-blue-500 transition-colors" />
                    <span className="group-hover:font-medium">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-lg font-bold flex items-center mb-6 group cursor-default">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 mr-3 rounded-full group-hover:h-8 transition-all" />
              <span className="group-hover:text-blue-400 transition-colors">Products</span>
            </h3>

            <ul className="space-y-3">
              {products.map((item, i) => (
                <li key={i}>
                  <a
                    href={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="group text-slate-400 text-sm flex items-center hover:text-blue-400 transition-all hover:translate-x-1"
                  >
                    <ChevronRight size={16} className="mr-2 text-slate-600 group-hover:text-blue-500 transition-colors" />
                    <span className="group-hover:font-medium">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold flex items-center mb-6 group cursor-default">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 mr-3 rounded-full group-hover:h-8 transition-all" />
              <span className="group-hover:text-blue-400 transition-colors">Services</span>
            </h3>

            <ul className="space-y-3">
              {services.map((item, i) => (
                <li key={i}>
                  <a
                    href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="group text-slate-400 text-sm flex items-center hover:text-blue-400 transition-all hover:translate-x-1"
                  >
                    <ChevronRight size={16} className="mr-2 text-slate-600 group-hover:text-blue-500 transition-colors" />
                    <span className="group-hover:font-medium">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact - Enhanced */}
          <div>
            <h3 className="text-lg font-bold flex items-center mb-6 group cursor-default">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-500 to-blue-600 mr-3 rounded-full group-hover:h-8 transition-all" />
              <span className="group-hover:text-blue-400 transition-colors">Contact Us</span>
            </h3>

            <div className="space-y-5">
              <div className="group flex gap-4 text-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all flex-shrink-0">
                  <Phone size={18} className="text-blue-400" />
                </div>

                <div>
                  <p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">Call Us</p>
                  <a href="tel:+919999999999" className="font-semibold text-sm hover:text-blue-400 transition-colors block">
                    +91 8522915171
                  </a>
                  <a href="tel:+9999999999" className="font-semibold text-sm hover:text-blue-400 transition-colors block">
                    +974 307678363
                  </a>
                </div>
              </div>

              <a
                href="mailto:capcocsqa@gmail.com"
                className="group flex gap-4 text-slate-100 hover:text-blue-400 transition-all"
              >
                <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all flex-shrink-0">
                  <Mail size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">Email Us</p>
                  <p className="font-semibold text-sm break-all group-hover:text-blue-400 transition-colors">capcocsqa@gmail.com</p>
                </div>
              </a>

              <div className="group flex gap-4 text-slate-100">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl flex items-center justify-center border border-slate-700/50 group-hover:border-blue-500/50 group-hover:shadow-lg group-hover:shadow-blue-500/20 transition-all flex-shrink-0">
                  <MapPin size={18} className="text-blue-400" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 mb-1 font-medium uppercase tracking-wide">Locations</p>
                  <p className="font-semibold text-sm leading-relaxed">
                    Canada, Qatar, India
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Divider with gradient */}
        <div className="relative my-10">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-slate-800"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Bottom Footer - Enhanced */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-slate-500 text-sm flex items-center gap-2">
            <span>© {new Date().getFullYear()}</span>
            <span className="text-slate-700">•</span>
            <span className="font-semibold text-slate-400">Capco Consulting Services</span>
            <span className="text-slate-700">•</span>
            <span>All rights reserved.</span>
          </p>

          <div className="flex items-center gap-6 text-sm flex-wrap justify-center">
            <a href="/PrivacyPolicy" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1 group">
              Privacy Policy
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <span className="text-slate-700">|</span>
            <a href="/Terms" className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1 group">
              Terms & Conditions
              <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}