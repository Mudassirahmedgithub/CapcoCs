"use client";

import React from "react";
import { Users, BarChart3, ClipboardList, Shield, Workflow, CheckCircle } from "lucide-react";

export default function CustomizedHRMSPage() {
  const pillars = [
    {
      title: "Unified Workforce Hub",
      desc: "A central HR command center designed to streamline employee data, workflows, and compliance for organisations of all sizes.",
      icon: <Users className="w-7 h-7" />,
    },
    {
      title: "Automated HR Operations",
      desc: "Reduce manual work with automated onboarding, attendance, leave, payroll, and workforce planning.",
      icon: <Workflow className="w-7 h-7" />,
    },
    {
      title: "Secure & Compliant",
      desc: "Role-based permissions, complete audit trails, encrypted databases, GDPR-ready architecture.",
      icon: <Shield className="w-7 h-7" />,
    },
  ];

  const modules = [
    { name: "Employee Management", info: "Personal files, documents, lifecycle tracking" },
    { name: "Attendance & Leave", info: "Geo-fencing, biometric & shift support" },
    { name: "Payroll Engine", info: "Configurable salary structures, payslips, compliance" },
    { name: "Recruitment & ATS", info: "Job postings, screening, interview workflows" },
    { name: "Performance Management", info: "OKRs, appraisals, KPIs, 360° reviews" },
    { name: "Training & LMS", info: "Skill mapping, learning paths, certifications" },
    { name: "Travel & Expense", info: "Approvals, reimbursements, policy checks" },
    { name: "Analytics & Insights", info: "Attrition patterns, productivity heatmaps" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* HERO */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 leading-tight">
            Customized HRMS Suite
          </h1>
          <p className="mt-5 text-lg text-slate-700">
            Designed by CAPCO CONSULTING SERVICES, this HRMS adapts to your organisational structure, HR policies, workflows, and cultural DNA — not the other way around.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a className="px-6 py-3 bg-slate-900 text-white rounded-lg shadow hover:opacity-95" href="#demo">
              Request Demo
            </a>
            <a className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100" href="#modules">
              Explore Modules
            </a>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {pillars.map((p) => (
            <div key={p.title} className="p-8 rounded-2xl bg-white shadow border text-center">
              <div className="flex justify-center mb-4 text-slate-800">{p.icon}</div>
              <h3 className="text-xl font-semibold text-slate-900">{p.title}</h3>
              <p className="mt-3 text-slate-600 text-sm">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold text-slate-900">HRMS Modules</h2>
        <p className="text-slate-600 mt-2">Choose only what you need — scale anytime.</p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m) => (
            <div key={m.name} className="p-6 bg-white border rounded-xl shadow-sm">
              <div className="flex items-center gap-3">
                <Users className="w-5 h-5 text-slate-700" />
                <h4 className="font-semibold text-slate-900">{m.name}</h4>
              </div>
              <p className="mt-2 text-sm text-slate-600">{m.info}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PERFORMANCE BLOCK */}
      <section className="bg-slate-900 text-white py-20 mt-10">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold">Data-Driven HR Decisions</h3>
            <p className="mt-4 text-slate-200 text-sm">
              Get visibility into productivity patterns, salary distributions, workforce health, attendance anomalies, and engagement levels with advanced analytics.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 mt-1" /> Custom dashboards & KPI trackers</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 mt-1" /> Attrition & performance forecasting</li>
              <li className="flex items-start gap-3"><CheckCircle className="w-4 h-4 mt-1" /> Automated HR compliance reports</li>
            </ul>
          </div>

          <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-xl">
            <div className="flex items-center gap-3">
              <BarChart3 className="w-6 h-6 text-slate-700" />
              <div className="text-lg font-semibold">HR Productivity Snapshot</div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-6 text-center">
              <div>
                <div className="text-3xl font-extrabold">32%</div>
                <div className="text-xs text-slate-600">Reduction in manual tasks</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">4x</div>
                <div className="text-xs text-slate-600">Faster onboarding</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">99.1%</div>
                <div className="text-xs text-slate-600">Payroll Accuracy</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold">24/7</div>
                <div className="text-xs text-slate-600">Self-service availability</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="demo" className="max-w-7xl mx-auto px-6 py-20">
        <div className="bg-white border rounded-2xl shadow-sm p-10 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Build Your Tailored HR Ecosystem</h3>
            <p className="mt-3 text-slate-600 text-sm">
              Share your HR challenges and priorities — CAPCO’s experts will prepare a customised roadmap and implementation plan.
            </p>
          </div>

          <form className="space-y-5">
            <div>
              <label className="text-sm text-slate-700">Company</label>
              <input className="w-full mt-1 border rounded-md px-3 py-2" placeholder="Your company name" />
            </div>

            <div>
              <label className="text-sm text-slate-700">Email</label>
              <input className="w-full mt-1 border rounded-md px-3 py-2" placeholder="your@company.com" />
            </div>

            <div>
              <label className="text-sm text-slate-700">Key HR Requirements</label>
              <textarea
                className="w-full mt-1 border rounded-md px-3 py-2"
                rows={4}
                placeholder="Recruitment, payroll, performance, compliance, integrations..."
              />
            </div>

            <button
              type="button"
              className="px-6 py-3 bg-slate-900 text-white rounded-lg hover:opacity-95"
            >
              Request Consultation
            </button>
          </form>
        </div>
      </section>

      <footer className="py-10 border-t">
        <div className="max-w-7xl mx-auto px-6 text-sm text-slate-600 flex items-center justify-between">
          <div>© {new Date().getFullYear()} CAPCO CONSULTING SERVICES</div>
          <div>Privacy · Terms · Contact</div>
        </div>
      </footer>
    </main>
  );
}
