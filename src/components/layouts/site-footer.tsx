"use client";

import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  ChevronRight,
} from "lucide-react";

export default function Footer() {
  const digitalTransformation = [
    "ERP & CRM",
    "Procurement Solutions",
    "Data & AI",
    "Robotics Process Automation",
    "Enterprise Warehouse Management",
  ];

  const products = [
    "Vertex HCM",
    "Campus Management",
    "Mobile Device Management",
    "Customized Manufacturing ERP",
    "Customized Procurement ERP",
    "Customized HRMS",
    "Retail Solution",
  ];

  const services = [
    "Web Development",
    "Software Development",
    "Mobile App Development",
    "Cloud Services",
    "Data Governance & AI",
    "IT Consulting Support",
  ];

  return (
    <footer className="relative text-white overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500 rounded-full blur-[120px]" />
      </div>

      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='40' height='40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0z' fill='none'/%3E%3Cpath d='M0 20h40M20 0v40' stroke='%23ffffff' stroke-width='0.5'/%3E%3C/svg%3E\")",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-5 sm:grid-cols-2 grid-cols-1 gap-12 mb-10">

          {/* Company Info */}
          <div>
            <div className="flex items-center gap-3 mb-4 flex-wrap">
              <img
                src="/favicon-96x96.png"
                alt="Logo"
                className="w-10 h-10 rounded-lg shadow-md object-cover"
              />
              <h3 className="text-2xl font-bold">Capco Consultating Services</h3>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">
              Driving Your Vision.
            </p>

            <div className="flex gap-3 mt-4">
              <a
                href="https://facebook.com/CapcoConsultingServices"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700/50 hover:bg-blue-600 transition-all hover:scale-105 border border-slate-600/30"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://www.instagram.com/CapcoConsultingServices"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700/50 hover:bg-blue-600 transition-all hover:scale-105 border border-slate-600/30"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.youtube.com/@CapcoConsultingServices"
                target="_blank"
                className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700/50 hover:bg-blue-600 transition-all hover:scale-105 border border-slate-600/30"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M23.498 6.186a2.996 2.996 0 0 0-2.111-2.12C19.465 3.5 12 3.5 12 3.5s-7.465 0-9.387.566a2.996 2.996 0 0 0-2.111 2.12A31.54 31.54 0 0 0 0 12c0 2.06.177 3.95.502 5.814a2.996 2.996 0 0 0 2.111 2.12C4.535 20.5 12 20.5 12 20.5s7.465 0 9.387-.566a2.996 2.996 0 0 0 2.111-2.12A31.54 31.54 0 0 0 24 12a31.54 31.54 0 0 0-.502-5.814ZM9.75 15.02V8.98L15.75 12l-6 3.02Z" />
                </svg>
              </a>
            </div>
          </div>

          {/* digital Transformation */}
          <div>
            <h3 className="text-lg font-bold flex items-center mb-4">
              <div className="w-1 h-6 bg-blue-500 mr-2" />
              Digital Transformation
            </h3>

            <ul className="space-y-2">
              {digitalTransformation.map((item, i) => (
                <li key={i}>
                  <a
                    href={`/digitalTransformation/${item.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`}
                    className="text-slate-300 text-sm flex items-center hover:text-blue-400 transition-colors"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="text-lg font-bold flex items-center mb-4">
              <div className="w-1 h-6 bg-blue-500 mr-2" />
              Products
            </h3>

            <ul className="space-y-2">
              {products.map((item, i) => (
                <li key={i}>
                  <a
                    href={`/products/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-slate-300 text-sm flex items-center hover:text-blue-400 transition-colors"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-lg font-bold flex items-center mb-4">
              <div className="w-1 h-6 bg-blue-500 mr-2" />
              Services
            </h3>

            <ul className="space-y-2">
              {services.map((item, i) => (
                <li key={i}>
                  <a
                    href={`/services/${item.toLowerCase().replace(/ /g, "-")}`}
                    className="text-slate-300 text-sm flex items-center hover:text-blue-400 transition-colors"
                  >
                    <ChevronRight size={16} className="mr-1" />
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-lg font-bold flex items-center mb-4">
              <div className="w-1 h-6 bg-blue-500 mr-2" />
              Contact Us
            </h3>

            <div className="space-y-5">
              <div className="flex gap-4 text-slate-100">
                <div className="w-11 h-11 bg-slate-700/60 rounded-lg flex items-center justify-center border border-slate-600/30">
                  <Phone size={18} />
                </div>

                <div>
                  <p className="text-xs text-slate-400 m-0">Call Us</p>
                  <a href="tel:+999999999" className="font-semibold text-sm hover:text-blue-400 block">
                    +91 999999999999
                  </a>
                  <a href="tel:+9999999999" className="font-semibold text-sm hover:text-blue-400 block">
                    +9999999999999
                  </a>
                </div>
              </div>

              <a
                href="mailto:capcocsqa@gmail.com"
                className="flex gap-4 text-slate-100 hover:text-blue-400 transition-colors"
              >
                <div className="w-11 h-11 bg-slate-700/60 rounded-lg flex items-center justify-center border border-slate-600/30">
                  <Mail size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 m-0">Email Us</p>
                  <p className="font-semibold text-sm break-all">capcocsqa@gmail.com</p>
                </div>
              </a>

              <div className="flex gap-4 text-slate-100">
                <div className="w-11 h-11 bg-slate-700/60 rounded-lg flex items-center justify-center border border-slate-600/30">
                  <MapPin size={18} />
                </div>
                <div>
                  <p className="text-xs text-slate-400 m-0">Location</p>
                  <p className="font-semibold text-sm">
                    Canada , Qatar <br /> India
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-700/50 my-8"></div>

        <div className="flex flex-col items-center gap-3">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} Capco Consulting Services. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm flex-wrap justify-center text-slate-400">
            <a href="/PrivacyPolicy" className="hover:text-blue-400 transition-colors">
              Privacy Policy
            </a>
            <span className="text-slate-600">|</span>
            <a href="/Terms" className="hover:text-blue-400 transition-colors">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
