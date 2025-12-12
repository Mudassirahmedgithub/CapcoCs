"use client";

import React from "react";
import { motion } from "framer-motion";

export default function SolutionsPage() {
  const solutions = [
    {
      title: "Digital Transformation",
      desc:
        "Comprehensive modernization strategies integrating cloud adoption, automation, user experience redesign, and business-process transformation for scalable growth.",
    },
    {
      title: "ERP & CRM",
      desc:
        "Implementation and customization of enterprise resource planning and customer relationship management systems to unify operations and enhance customer engagement.",
    },
    {
      title: "Procurement Solutions",
      desc:
        "Digitize and automate procurement workflows with vendor management, RFQs, purchase approvals, contract lifecycle management, and real-time insights.",
    },
    {
      title: "Data & AI",
      desc:
        "Data pipelines, analytics, governance frameworks, machine learning models, and enterprise AI automation for intelligent decision-making.",
    },
    {
      title: "Robotics Process Automation",
      desc:
        "Automation of repetitive, rules-based business processes using RPA bots to improve efficiency, reduce errors, and optimize workload distribution.",
    },
    {
      title: "Enterprise Warehouse Management",
      desc:
        "End-to-end warehouse digitization including inventory controls, logistics automation, barcode/RFID integration, and real-time tracking systems.",
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
          Our Solutions
        </motion.h1>

        <p className="max-w-2xl mt-4 text-slate-700 text-lg">
          Capco Consulting Services delivers enterprise solutions tailored to transform operations, automate systems, unify data, and accelerate digital growth.
        </p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md border border-slate-200"
            >
              <h3 className="text-xl font-medium text-slate-900">{solution.title}</h3>
              <p className="mt-3 text-slate-700 text-sm leading-relaxed">{solution.desc}</p>
              <button className="mt-5 inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100">
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Why Choose Capco Solutions?</h2>
          <p className="mt-4 text-slate-700 max-w-3xl">
            Capco delivers scalable, enterprise-grade solutions designed around real-world business challenges. Each solution is engineered with long-term reliability, cross-platform compatibility, and security at its core.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <h4 className="text-lg font-medium text-slate-900">End-to-End Integration</h4>
              <p className="mt-2 text-slate-700 text-sm">Seamless multi-system connectivity across departments.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <h4 className="text-lg font-medium text-slate-900">Scalable & Flexible</h4>
              <p className="mt-2 text-slate-700 text-sm">Designed to evolve with your business needs and growth.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <h4 className="text-lg font-medium text-slate-900">Enterprise Security</h4>
              <p className="mt-2 text-slate-700 text-sm">Data protection, compliance, and secure architecture by default.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
