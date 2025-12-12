"use client";

import React from "react";
import { Check, Truck, Box, Server, Settings, GitPullRequest } from "lucide-react";

export default function CustomizedProcurementERPPage() {
  const features = [
    {
      title: "End-to-end Procurement Workflows",
      desc: "Requisition to payment automation with configurable approval chains to match your governance.",
      icon: <Truck className="w-6 h-6" />,
    },
    {
      title: "Supplier Lifecycle Management",
      desc: "Centralized supplier profiles, qualification, performance scoring, and onboarding automation.",
      icon: <Box className="w-6 h-6" />,
    },
    {
      title: "Spend Analytics & Compliance",
      desc: "Real-time dashboards, anomaly detection, and audit trails for regulatory and policy compliance.",
      icon: <Server className="w-6 h-6" />,
    },
    {
      title: "Catalog & Contract Management",
      desc: "Catalog control, contract terms capture, renewal alerts and embedded price-management tools.",
      icon: <GitPullRequest className="w-6 h-6" />,
    },
    {
      title: "Custom Integrations",
      desc: "ERP, warehouse, payment gateways and 3rd-party logistics connectors with event-driven sync.",
      icon: <Settings className="w-6 h-6" />,
    },
  ];

  const modules = [
    { name: "Requisition & Approval", hint: "Role-based approvals, multi-level workflows" },
    { name: "Sourcing & RFx", hint: "Auction, sealed bids, reverse auctions" },
    { name: "PO & Order Management", hint: "Split PO, blanket orders, change orders" },
    { name: "Invoice Matching", hint: "2-way/3-way matching and exceptions queue" },
    { name: "Supplier Portal", hint: "Self-service onboarding & invoice submission" },
    { name: "Analytics", hint: "Custom KPIs, exportable reports, alerts" },
  ];

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-slate-900">
              Customized Procurement ERP
            </h1>
            <p className="mt-6 text-lg text-slate-700">
              CAPCO CONSULTING SERVICES delivers a procurement platform tailored to enterprise
              processes — reduce maverick spend, shorten cycle time, and build resilient supplier
              relationships with a solution that fits your organisation, not the other way around.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-slate-900 text-white px-5 py-3 rounded-lg shadow hover:opacity-95"
              >
                Request a Demo
              </a>

              <a
                href="#modules"
                className="inline-flex items-center gap-2 border border-slate-200 px-5 py-3 rounded-lg text-slate-700 hover:bg-slate-100"
              >
                View Modules
              </a>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-white shadow-sm">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Rapid Deployment</p>
                  <p className="text-sm text-slate-600">Config templates and phased rollout options</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-full bg-white shadow-sm">
                  <Check className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">Secure & Compliant</p>
                  <p className="text-sm text-slate-600">Role-based access and audit-ready logs</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-2xl bg-white p-8 shadow-lg border">
              <div className="text-sm text-slate-500 uppercase font-medium">Snapshot</div>
              <h3 className="mt-4 text-2xl font-bold text-slate-900">Procurement Suite — At a glance</h3>

              <ul className="mt-6 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <Truck className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Cycle Time Reduction</div>
                    <div className="text-sm text-slate-600">Automate approvals & supplier responses</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <Server className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Visibility & Control</div>
                    <div className="text-sm text-slate-600">Unified view of spend, POs and contracts</div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <div className="p-3 bg-slate-50 rounded-lg">
                    <Box className="w-5 h-5 text-slate-700" />
                  </div>
                  <div>
                    <div className="font-semibold text-slate-800">Supplier Collaboration</div>
                    <div className="text-sm text-slate-600">Portal-driven communication and docs exchange</div>
                  </div>
                </li>
              </ul>

              <div className="mt-6 border-t pt-6 flex items-center justify-between">
                <div>
                  <div className="text-xs text-slate-500">Typical ROI (12 months)</div>
                  <div className="text-xl font-bold text-slate-900">7–15% reduction in procurement spend</div>
                </div>
                <div className="text-sm text-slate-600">Scale: SME → Global Enterprise</div>
              </div>
            </div>

            <div className="absolute -right-8 -bottom-8 w-40 h-40 rounded-lg bg-gradient-to-tr from-slate-100 to-white opacity-80 transform rotate-6" />
          </div>
        </div>
      </section>

      <section id="modules" className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-slate-900">Modules</h2>
          <p className="mt-2 text-slate-600">Pick and choose modules to match your procurement maturity.</p>

          <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {modules.map((m) => (
              <div key={m.name} className="p-5 bg-slate-50 rounded-xl border">
                <div className="font-semibold text-slate-800">{m.name}</div>
                <div className="text-sm text-slate-600 mt-2">{m.hint}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900">Why choose CAPCO's customised ERP?</h3>
            <ul className="mt-6 space-y-4">
              {features.map((f) => (
                <li key={f.title} className="flex gap-4">
                  <div className="p-3 rounded-lg bg-slate-100">{f.icon}</div>
                  <div>
                    <div className="font-semibold text-slate-800">{f.title}</div>
                    <div className="text-sm text-slate-600">{f.desc}</div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 bg-slate-50 rounded-2xl border">
            <h4 className="text-lg font-semibold text-slate-900">Implementation approach</h4>
            <ol className="mt-4 space-y-4 list-decimal list-inside text-sm text-slate-700">
              <li><strong>Discover:</strong> Process workshops, stakeholder mapping, current-state assessment.</li>
              <li><strong>Design:</strong> Config-driven templates, integrations, security design and pilot plan.</li>
              <li><strong>Build & Test:</strong> Iterative sprints, data migration and acceptance testing.</li>
              <li><strong>Rollout:</strong> Phased go-live with training, SLA, and hypercare support.</li>
            </ol>

            <div className="mt-6">
              <div className="text-sm text-slate-600">Estimated timeline</div>
              <div className="mt-2 font-bold text-slate-900">8–20 weeks (depends on scope & integrations)</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-xl font-bold text-slate-900">Case study (example)</h3>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            <div className="p-5 bg-slate-50 rounded-xl border">
              <div className="font-semibold">Global Manufacturer</div>
              <div className="text-sm text-slate-600 mt-2">Reduced PO cycle time by 45% and consolidated 18 supplier contracts.
              </div>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border">
              <div className="font-semibold">Retail Chain</div>
              <div className="text-sm text-slate-600 mt-2">Automated catalog updates and avoided 12% maverick spend across categories.
              </div>
            </div>

            <div className="p-5 bg-slate-50 rounded-xl border">
              <div className="font-semibold">Logistics Provider</div>
              <div className="text-sm text-slate-600 mt-2">Integrated TMS and invoicing to enable near real-time reconciliation.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-gradient-to-r from-white to-slate-50 rounded-2xl p-8 border shadow-sm">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900">Let's build your tailored procurement platform</h3>
              <p className="mt-3 text-slate-600">Share your priorities and constraints — we'll map a solution roadmap and provide a commercial proposal.</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-700">
                <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-1 text-emerald-600" /> Rapid scoping workshop</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-1 text-emerald-600" /> Integration readiness assessment</li>
                <li className="flex items-start gap-3"><Check className="w-4 h-4 mt-1 text-emerald-600" /> Fixed-price pilot option</li>
              </ul>
            </div>

            <form className="space-y-4 bg-white p-6 rounded-lg border">
              <div>
                <label className="block text-sm text-slate-700">Company</label>
                <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Your company name" />
              </div>

              <div>
                <label className="block text-sm text-slate-700">Email</label>
                <input className="mt-1 w-full rounded-md border px-3 py-2" placeholder="your@company.com" />
              </div>

              <div>
                <label className="block text-sm text-slate-700">Short brief</label>
                <textarea className="mt-1 w-full rounded-md border px-3 py-2" placeholder="Key challenges, systems to integrate, timeline" rows={4} />
              </div>

              <div className="flex items-center gap-3">
                <button type="button" className="px-4 py-2 bg-slate-900 text-white rounded-md">Request callback</button>
                <button type="button" className="px-4 py-2 border rounded-md">Download brochure</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <footer className="border-t py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-slate-600">© {new Date().getFullYear()} CAPCO CONSULTING SERVICES</div>
          <div className="text-sm text-slate-600">Privacy · Terms · Contact</div>
        </div>
      </footer>
    </main>
  );
}
