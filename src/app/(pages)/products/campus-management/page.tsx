"use client";

import React from "react";
import Link from "next/link";

export default function CampusManagement() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-900">
      <section className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm font-medium text-indigo-600">Product</p>
              <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight">
                Campus Management System
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-gray-700">
                CAPCO’s Campus Management System is a modern, end-to-end academic
                and administrative platform built for schools, colleges, and
                universities. It centralises admissions, academics, examination
                workflows, finance, hostel operations, transport, placements,
                and student lifecycle management — creating a unified digital
                campus.
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
                      <div className="h-3 w-20 rounded-full bg-indigo-200" />
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
              <div className="mt-2 text-xs text-gray-500">Illustrative UI</div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold">Core capabilities</h2>
            <p className="mt-3 text-gray-600">
              A unified digital platform for institutions to manage complete
              student lifecycle and key operational processes.
            </p>

            <dl className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="rounded-lg bg-white p-6 shadow">
                <dt className="font-semibold">Admissions Management</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Online applications, merit lists, counselling, enrolment and
                  onboarding workflows.
                </dd>
              </div>

              <div className="rounded-lg bg-white p-6 shadow">
                <dt className="font-semibold">Academic Management</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Timetables, attendance, faculty allocation, credit system and
                  academic progress tracking.
                </dd>
              </div>

              <div className="rounded-lg bg-white p-6 shadow">
                <dt className="font-semibold">Examinations & Results</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Exam scheduling, evaluation, grade publishing, transcripts and
                  automated result processing.
                </dd>
              </div>

              <div className="rounded-lg bg-white p-6 shadow">
                <dt className="font-semibold">Finance & Fees</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Fee collection, instalment tracking, scholarships,
                  reconciliation and financial reporting.
                </dd>
              </div>

              <div className="rounded-lg bg-white p-6 shadow">
                <dt className="font-semibold">Hostel & Transport</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  Room allocation, mess management, bus routes, GPS tracking and
                  safety compliance.
                </dd>
              </div>

              <div className="rounded-lg bg-white p-6 shadow">
                <dt className="font-semibold">Student Lifecycle</dt>
                <dd className="mt-2 text-sm text-gray-600">
                  ID cards, certificates, grievances, counselling and alumni
                  workflows.
                </dd>
              </div>
            </dl>
          </div>

          <aside className="space-y-6">
            <div className="rounded-lg bg-indigo-600/5 p-6">
              <h3 className="text-lg font-semibold">Why CAPCO Campus Suite</h3>
              <p className="mt-2 text-sm text-gray-700">
                Developed with deep institutional understanding, CAPCO ensures
                seamless implementation, reduced manual workload and fully
                compliant academic operations.
              </p>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <h4 className="font-semibold">Ideal for</h4>
              <ul className="mt-3 text-sm text-gray-600 space-y-2 list-disc list-inside">
                <li>Schools, colleges and universities</li>
                <li>Institutions with large student volumes</li>
                <li>Multi-campus or autonomous institutions</li>
              </ul>
            </div>

            <div className="rounded-lg bg-white p-6 shadow">
              <h4 className="font-semibold">Deployment options</h4>
              <p className="mt-2 text-sm text-gray-600">
                Cloud-first architecture with options for private cloud or hybrid
                environments.
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
              "Digital Admissions",
              "Learning Management System (LMS)",
              "NAAC / Accreditation Tools",
              "Examination Automation",
              "Hostel & Mess Management",
              "Transport GPS Suite",
              "Library Management",
              "Placement & Career Services",
            ].map((m) => (
              <div key={m} className="rounded-lg p-4 bg-white shadow">
                <h5 className="font-semibold">{m}</h5>
                <p className="mt-2 text-sm text-gray-600">
                  Module overview and how it enhances campus operations.
                </p>
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
              <li>Requirement gathering across all departments.</li>
              <li>Solution blueprint and workflow designing.</li>
              <li>System configuration, integrations and migrations.</li>
              <li>Faculty & admin training with testing cycles.</li>
              <li>Go-live, support and optimisation.
              </li>
            </ol>
          </div>

          <div>
            <h3 className="text-lg font-semibold">Success metrics</h3>
            <ul className="mt-4 space-y-3 text-gray-700 list-disc list-inside">
              <li>Reduced administrative load</li>
              <li>Improved academic process transparency</li>
              <li>Better attendance and performance tracking</li>
              <li>Efficient digital examinations & record systems</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 border-t">
        <div className="max-w-4xl mx-auto px-6 py-16 text-center">
          <h2 className="text-2xl font-bold">Pricing & engagement</h2>
          <p className="mt-3 text-gray-600">
            Pricing varies based on number of students, modules required,
            integrations and SLA expectations. Flexible licensing options
            available.
          </p>

          <div className="mt-6 flex justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-md bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700"
            >
              Request proposal
            </Link>
            <a
              href="/resources/campus-management-brochure.pdf"
              className="inline-flex items-center rounded-md border border-gray-200 px-6 py-3 bg-white text-gray-700 font-medium"
            >
              Download brochure
            </a>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold">Frequently asked questions</h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <details className="p-4 bg-white rounded shadow">
            <summary className="font-semibold">Do you support multi-campus structures?</summary>
            <p className="mt-2 text-sm text-gray-600">
              Yes, the platform natively supports multi-campus and autonomous structures with centralised control.
            </p>
          </details>

          <details className="p-4 bg-white rounded shadow">
            <summary className="font-semibold">Is LMS integrated?</summary>
            <p className="mt-2 text-sm text-gray-600">
              Yes, LMS is fully integrated with courses, attendance, exams and faculty workflows.
            </p>
          </details>

          <details className="p-4 bg-white rounded shadow">
            <summary className="font-semibold">Can it integrate with biometric or GPS devices?</summary>
            <p className="mt-2 text-sm text-gray-600">
              Yes, attendance devices, bus GPS systems and ID scanners can be integrated.
            </p>
          </details>

          <details className="p-4 bg-white rounded shadow">
            <summary className="font-semibold">Do you offer post-implementation support?</summary>
            <p className="mt-2 text-sm text-gray-600">
              CAPCO provides 24/7 support, maintenance, patch updates and operational optimisation.
            </p>
          </details>
        </div>
      </section>

      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold">CAPCO Consulting Services</div>
            <div className="text-xs text-gray-500">Enabling modern education infrastructure.</div>
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