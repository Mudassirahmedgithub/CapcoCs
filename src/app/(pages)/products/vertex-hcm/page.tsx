"use client";

import React from "react";
import Link from "next/link";

export default function VertexHCM() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-medium text-indigo-600">Product</p>
              <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Vertex HCM
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                A comprehensive Human Capital Management (HCM) solution powered
                by Vertex — designed to simplify payroll, benefits, talent
                lifecycle and workforce intelligence for enterprises. Vertex
                HCM brings modern HR processes and analytics together to help
                organisations attract, develop and retain talent at scale.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-5 py-3 text-white font-medium shadow-sm hover:bg-indigo-700"
                >
                  Contact Sales
                </Link>

                <a
                  href="#features"
                  className="inline-flex items-center justify-center rounded-md border border-gray-200 px-5 py-3 bg-white text-gray-700 font-medium hover:bg-gray-50"
                >
                  See features
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-[16/10] w-full rounded-2xl bg-gradient-to-tr from-indigo-100 to-white p-6 shadow-md">
                <div className="h-full w-full flex flex-col justify-center items-start gap-4">
                  <div className="w-full flex justify-between items-start">
                    <div>
                      <div className="h-3 w-16 rounded-full bg-indigo-200" />
                      <div className="mt-2 h-4 w-28 rounded-md bg-indigo-300" />
                    </div>
                    <div className="text-sm text-gray-500">Demo preview</div>
                  </div>

                  <div className="mt-6 w-full space-y-3">
                    <div className="h-3 w-3/4 rounded bg-white/70 shadow-inner" />
                    <div className="h-3 w-1/2 rounded bg-white/60 shadow-inner" />
                    <div className="h-2 w-1/4 rounded bg-white/50 shadow-inner" />
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-gray-500">Illustrative UI</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Core capabilities</h2>
            <p className="mt-3 text-gray-600">
              Vertex HCM centralises HR, payroll and talent operations, while
              providing analytics and automation to reduce operational
              overhead.
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-lg bg-white p-6 shadow">
                <dt className="font-semibold">Payroll & Compliance</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Multi-country payroll, tax calculations, statutory reports
                  and audit-ready processes.
                </dd>
              </div>

              <div className="rounded-lg bg-white p-6 shadow">
                <dt className="font-semibold">Core HR & Benefits</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Employee records, benefits administration, onboarding and
                  lifecycle workflows.
                </dd>
              </div>

              <div className="rounded-lg bg-white p-6 shadow">
                <dt className="font-semibold">Talent & Performance</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Goal setting, performance reviews, learning and succession
                  planning.
                </dd>
              </div>

              <div className="rounded-lg bg-white p-6 shadow">
                <dt className="font-semibold">Workforce Analytics</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Real-time dashboards, attrition prediction signals and headcount
                  planning tools.
                </dd>
              </div>

              <div className="rounded-lg bg-white p-6 shadow">
                <dt className="font-semibold">Time & Attendance</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Shift scheduling, time capture (biometric/geo), leave
                  management and labour cost controls.
                </dd>
              </div>

              <div className="rounded-lg bg-white p-6 shadow">
                <dt className="font-semibold">Integrations</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Pre-built connectors for ERP, finance, identity providers and
                  third-party payroll engines.
                </dd>
              </div>
            </dl>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg bg-indigo-600/5 p-6">
              <h3 className="text-lg font-semibold">Why CAPCO + Vertex</h3>
              <p className="mt-2 text-sm text-gray-700">
                CAPCO Consulting Services pairs implementation expertise with
                Vertex HCM's powerful platform — delivering faster time-to-value,
                lower technical debt and HR transformation best practices.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <h4 className="font-semibold">Ideal for</h4>
              <ul className="mt-3 text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>Global enterprises with complex payroll needs</li>
                <li>Companies undergoing digital HR transformation</li>
                <li>Organisations seeking modern workforce analytics</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <h4 className="font-semibold">Delivery options</h4>
              <p className="mt-2 text-sm text-gray-600">
                Cloud, private cloud, or hybrid deployments. Managed services
                and support packages available.
              </p>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold">Modules & Add-ons</h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Global Payroll Engine",
              "Benefits Administration",
              "Learning Management",
              "Talent Acquisition",
              "Analytics & BI",
              "Workforce Planning",
              "Timekeeping & Scheduling",
              "Compliance Center",
            ].map((m) => (
              <div key={m} className="rounded-lg p-4 bg-white shadow">
                <h5 className="font-semibold">{m}</h5>
                <p className="mt-2 text-sm text-gray-600">Brief overview of the module and how it helps HR and payroll teams.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          <div>
            <h2 className="text-2xl font-bold">Implementation approach</h2>
            <ol className="mt-6 space-y-4 list-decimal list-inside text-gray-700">
              <li>
                Discover & Assess — Current-state HR processes, technical
                landscape and compliance requirements.
              </li>
              <li>Design — Solution blueprint, integrations, data model and security.</li>
              <li>Build & Configure — System setup, data migration and custom
                adaptions where needed.</li>
              <li>Testing & Training — End-to-end testing, pilot and HR user
                training.
              </li>
              <li>Go-live & Support — Cutover, hypercare and ongoing managed
                services.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Success metrics</h3>
            <ul className="mt-4 space-y-3 text-gray-700 list-disc list-inside">
              <li>Reduction in payroll processing time</li>
              <li>Improved payroll accuracy & reduced audit findings</li>
              <li>Time-to-hire improvements and increased retention</li>
              <li>Faster reporting and data-driven HR decisions</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold">Pricing & engagement</h2>
          <p className="mt-3 text-gray-600">
            Pricing depends on scope: number of employees, countries, modules
            and SLAs. We offer flexible pricing — subscription, usage-based or
            fixed-price engagement for implementations.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link href="/contact" className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700">Request proposal</Link>
            <a href="/resources/vertex-hcm-brochure.pdf" className="inline-flex items-center rounded-md border border-gray-200 px-6 py-3 bg-white text-gray-700 font-medium">Download brochure</a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold">Frequently asked questions</h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <details className="p-4 bg-white rounded shadow">
            <summary className="font-semibold">What is the typical implementation timeline?</summary>
            <p className="mt-2 text-sm text-gray-600">Typical implementations range from 12-36 weeks depending on scope.</p>
          </details>

          <details className="p-4 bg-white rounded shadow">
            <summary className="font-semibold">How do you handle data migration?</summary>
            <p className="mt-2 text-sm text-gray-600">We use a mix of automated ETL tools and controlled manual validation cycles to ensure accurate migration and reconciliation.</p>
          </details>

          <details className="p-4 bg-white rounded shadow">
            <summary className="font-semibold">Can Vertex HCM integrate with our ERP or finance system?</summary>
            <p className="mt-2 text-sm text-gray-600">Yes — CAPCO builds and maintains connectors or leverages existing middleware to integrate Vertex HCM with ERP, payroll and identity systems.</p>
          </details>

          <details className="p-4 bg-white rounded shadow">
            <summary className="font-semibold">What support options are available after go-live?</summary>
            <p className="mt-2 text-sm text-gray-600">We offer tiered support: 24/7 managed services, business-hours support, and runbook-backed incident response.</p>
          </details>
        </div>
      </section>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold">CAPCO Consulting Services</div>
            <div className="text-xs text-gray-500">Delivering enterprise solutions and transformation.</div>
          </div>

          <div className="flex gap-4 items-center">
            <a href="/contact" className="text-sm font-medium text-indigo-600">Contact</a>
            <a href="/privacy" className="text-sm text-gray-500">Privacy</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
