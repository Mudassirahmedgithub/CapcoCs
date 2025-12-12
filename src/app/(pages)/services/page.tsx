"use client";

import React from "react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      title: "Web Development",
      desc:
        "End-to-end responsive website development using modern frameworks, scalable architectures, and enterprise-grade security standards.",
    },
    {
      title: "Software Development",
      desc:
        "Custom enterprise software solutions designed to automate workflows, optimize business operations, and enable significant cost efficiency.",
    },
    {
      title: "Mobile App Development",
      desc:
        "Native and cross-platform applications with seamless UI/UX, performance optimization, and long-term maintainability.",
    },
    {
      title: "Cloud Services",
      desc:
        "Cloud migration, deployment, scaling, and infrastructure optimization using AWS, Azure, GCP and private-cloud systems.",
    },
    {
      title: "Data Governance & AI",
      desc:
        "Enterprise data pipelines, governance frameworks, ML models, analytics dashboards, and AI automation to unlock data-driven decisions.",
    },
    {
      title: "IT Consulting Support",
      desc:
        "Technical consulting, architecture reviews, implementation support, product audits, and long-term IT strategy planning.",
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
          Our Services
        </motion.h1>

        <p className="max-w-2xl mt-4 text-slate-700 text-lg">
          Capco Consulting Services delivers high-performance digital solutions across web, mobile, cloud, and AI ecosystems.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-md border border-slate-200"
            >
              <h3 className="text-xl font-medium text-slate-900">{service.title}</h3>
              <p className="mt-3 text-slate-700 text-sm leading-relaxed">{service.desc}</p>
              <button
                className="mt-5 inline-flex items-center rounded-xl border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100"
              >
                Learn More
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 bg-white border border-slate-200 rounded-2xl p-10 shadow-sm">
          <h2 className="text-2xl font-semibold text-slate-900">Why Choose Capco?</h2>
          <p className="mt-4 text-slate-700 max-w-3xl">
            We combine industry experience with advanced technologies to deliver solutions that are scalable, secure, and business-focused.
            Every service we offer is built on strong engineering foundations and a client-first approach.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <h4 className="text-lg font-medium text-slate-900">End-to-End Execution</h4>
              <p className="mt-2 text-slate-700 text-sm">From planning to deployment to long-term support.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <h4 className="text-lg font-medium text-slate-900">Enterprise-Level Engineering</h4>
              <p className="mt-2 text-slate-700 text-sm">Best practices, optimized workflows, and secure designs.</p>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-6 text-center shadow-sm">
              <h4 className="text-lg font-medium text-slate-900">Client-Focused Delivery</h4>
              <p className="mt-2 text-slate-700 text-sm">Built for your business goals and scalable growth.</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}