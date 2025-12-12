"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ProductsPage() {
  const products = [
    {
      title: "Vertex HCM",
      desc:
        "An advanced Human Capital Management platform that streamlines HR workflows, payroll, attendance, recruitment, and employee lifecycle management.",
    },
    {
      title: "Campus Management",
      desc:
        "A complete academic and administrative solution for schools, colleges, and universities with modules covering admissions, exams, fees, and student records.",
    },
    {
      title: "Mobile Device Management",
      desc:
        "Secure, monitor, and manage enterprise devices with centralized control, policy enforcement, and real-time tracking.",
    },
    {
      title: "Customized Manufacturing ERP",
      desc:
        "A tailored ERP solution for manufacturing units focusing on production planning, inventory tracking, QC, procurement, and end-to-end process automation.",
    },
    {
      title: "Customized Procurement ERP",
      desc:
        "Procurement automation platform with vendor management, RFQs, order tracking, approval workflows, and contract analytics.",
    },
    {
      title: "Customized HRMS",
      desc:
        "A flexible HRMS designed to adapt to complex organizational structures, payroll rules, compliance needs, and workforce automation.",
    },
    {
      title: "Retail Solution",
      desc:
        "A complete retail suite supporting POS, billing, stock management, CRM, analytics, loyalty systems, and multi-store operations.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-50 py-20 px-6 sm:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-4xl font-semibold text-slate-900 tracking-tight"
        >
          Our Products
        </motion.h1>

        <p className="max-w-2xl mt-4 text-slate-700 text-lg">
          Capco Consulting Services develops powerful enterprise products tailored to different industries, ensuring performance, scalability, and long-term business impact.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md border border-slate-200"
            >
              <h3 className="text-xl font-medium text-slate-900">{product.title}</h3>
              <p className="mt-3 text-slate-700 text-sm leading-relaxed">{product.desc}</p>
              <button className="mt-5 inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Why Capco Products Stand Out</h2>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Every product we build is designed with a strong engineering foundation, seamless user experience, and enterprise-grade security. Capco solutions adapt to diverse business environments while ensuring long-term reliability.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <h4 className="text-lg font-medium text-slate-900">Industry-Focused</h4>
              <p className="mt-2 text-slate-700 text-sm">Products designed for real-world business challenges.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <h4 className="text-lg font-medium text-slate-900">Enterprise Ready</h4>
              <p className="mt-2 text-slate-700 text-sm">Scalable, secure, reliable architectures for all industries.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <h4 className="text-lg font-medium text-slate-900">Customizable</h4>
              <p className="mt-2 text-slate-700 text-sm">Built to evolve with your business needs and growth.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}