"use client";

import React from "react";
import Link from "next/link";

export default function MobileDeviceManagement() {
  return (
    <main className="min-h-screen bg-gray-950 text-gray-100">
      {/* HERO SECTION (Dark, tech-style) */}
      <section className="relative overflow-hidden py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.3),transparent)]" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Mobile Device Management (MDM)
          </h1>
          <p className="mt-6 text-lg text-gray-300 max-w-3xl">
            CAPCO’s Mobile Device Management Suite provides enterprise-grade
            control, security and automation for all corporate and BYOD mobile
            devices — enabling secure digital workplaces.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-md bg-indigo-600 font-medium text-white hover:bg-indigo-700"
            >
              Request Demo
            </Link>
            <a
              href="#capabilities"
              className="px-6 py-3 rounded-md border border-gray-700 bg-gray-900 text-gray-300 hover:bg-gray-800"
            >
              Explore Features
            </a>
          </div>
        </div>
      </section>

      {/* FEATURE GRID (Cyber-security style blocks) */}
      <section id="capabilities" className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-semibold">Capabilities</h2>
        <p className="mt-3 text-gray-400 max-w-2xl">
          A modern fleet management suite with enterprise-level security and
          automation.
        </p>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              title: "Unified Device Control",
              desc: "Manage Android, iOS, tablets, rugged devices and IoT endpoints from a single console.",
            },
            {
              title: "Real-time Monitoring",
              desc: "Track device activity, compliance status, usage data and location analytics.",
            },
            {
              title: "Policy Enforcement",
              desc: "Push security policies instantly — password rules, encryption, VPN, Wi-Fi and app usage.",
            },
            {
              title: "Application Management",
              desc: "Install, block, update or remotely wipe business apps with full visibility.",
            },
            {
              title: "Remote Lock & Wipe",
              desc: "Instant response to lost devices with full or selective wipe capabilities.",
            },
            {
              title: "BYOD Compliance",
              desc: "Ensure personal devices meet corporate security standards without invading privacy.",
            },
          ].map((f) => (
            <div
              key={f.title}
              className="p-6 bg-gray-900/60 border border-gray-800 rounded-xl hover:border-indigo-600 transition"
            >
              <h3 className="text-lg font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-sm text-gray-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DEVICE TYPES */}
      <section className="bg-gray-900 border-t border-gray-800 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-semibold">Supported Devices</h2>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
            {["Android", "iOS", "Windows Tablets", "Rugged Devices"].map(
              (d) => (
                <div
                  key={d}
                  className="p-4 text-center bg-gray-800 rounded-lg border border-gray-700"
                >
                  <div className="text-lg font-medium text-indigo-300">{d}</div>
                </div>
              )
            )}
          </div>
        </div>
      </section>

      {/* ARCHITECTURE SECTION - Clean diagram block */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold">Architecture Overview</h2>
        <p className="mt-3 text-gray-400 max-w-2xl">
          Enterprise-grade, cloud-first and scalable to thousands of devices.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="h-3 w-3 rounded-full bg-indigo-500 mt-2" />
              <div>
                <h4 className="font-semibold">Cloud Console</h4>
                <p className="text-sm text-gray-400 mt-1">
                  Admin dashboard for policy deployment, automation and
                  monitoring.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-3 w-3 rounded-full bg-indigo-500 mt-2" />
              <div>
                <h4 className="font-semibold">Secure Gateway</h4>
                <p className="text-sm text-gray-400 mt-1">
                  Encrypted communication for all devices with enterprise
                  authentication.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="h-3 w-3 rounded-full bg-indigo-500 mt-2" />
              <div>
                <h4 className="font-semibold">Device Agents</h4>
                <p className="text-sm text-gray-400 mt-1">
                  Lightweight client installed on devices for control and
                  automation.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border border-gray-800 rounded-xl p-8 h-64 flex items-center justify-center text-gray-500 text-sm">
            Architecture visualization placeholder
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-gray-900 border-t border-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-semibold">Pricing Model</h2>
          <p className="mt-4 text-gray-400">
            Licensing based on number of devices, automation modules and
            security add-ons.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 rounded-md bg-indigo-600 text-white hover:bg-indigo-700 font-medium"
            >
              Get Quote
            </Link>
            <a
              href="/resources/mdm-brochure.pdf"
              className="px-6 py-3 rounded-md bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700 font-medium"
            >
              Download Brochure
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-7xl mx-auto px-6 py-20">
        <h2 className="text-2xl font-semibold">FAQ</h2>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              q: "Does it support remote wipe?",
              a: "Yes, full and selective wipe are supported for both corporate and personal devices.",
            },
            {
              q: "Can we restrict app installations?",
              a: "Admins can fully control app permissions, block apps or deploy mandatory applications.",
            },
            {
              q: "Is location tracking available?",
              a: "Yes, real-time tracking and geofencing alerts are built-in for supported devices.",
            },
            {
              q: "Do you offer enterprise onboarding?",
              a: "CAPCO provides deployment, integration, training and long-term maintenance.",
            },
          ].map((item) => (
            <details
              key={item.q}
              className="p-5 rounded-lg bg-gray-900 border border-gray-800"
            >
              <summary className="font-medium cursor-pointer">{item.q}</summary>
              <p className="mt-2 text-sm text-gray-400">{item.a}</p>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}