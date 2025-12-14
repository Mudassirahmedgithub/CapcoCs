"use client"

import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    consent: false,
  });

  const [selected, setSelected] = useState<{ [group: string]: string[] }>({
    digitalTransformation: [],
    Products: [],
    Services: [],
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{ ok: boolean; message: string } | null>(null);

  const OPTIONS = {
    Solutions: [
      "Digital Transformation",
      "ERP & CRM",
      "Procurement Solutions",
      "Data & AI",
      "Robotics Process Automation",
      "Enterprise Warehouse Management",
    ],
    Products: [
      "Vertex HCM",
      "Campus Management",
      "Mobile Device Management",
      "Customized Manufacturing ERP",
      "Customized Procurement ERP",
      "Customized HRMS",
      "Retail Solution",
    ],
    Services: [
      "Web Development",
      "Software Development",
      "Mobile App Development",
      "Cloud Services",
      "Data Governance & AI",
      "IT Consulting Support",
    ],
  } as const;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    if (type === "checkbox" && name === "consent") {
      setForm((s) => ({ ...s, consent: checked }));
      return;
    }
    setForm((s) => ({ ...s, [name]: value }));
  }

  function toggleOption(group: string, option: string) {
    setSelected((prev) => {
      const set = new Set(prev[group]);
      if (set.has(option)) set.delete(option);
      else set.add(option);
      return { ...prev, [group]: Array.from(set) };
    });
  }

  function validate() {
    if (!form.name.trim()) return "Please enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) return "Please enter a valid email.";
    if (!form.message.trim()) return "Please enter a message so we know how to help.";
    if (!form.consent) return "Please accept privacy terms to continue.";
    return null;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus(null);
    const err = validate();
    if (err) {
      setStatus({ ok: false, message: err });
      return;
    }
    setLoading(true);
    try {
      // Replace the endpoint below with your real API route or form handler (Netlify, Vercel, etc.)
      const payload = { ...form, selected };
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to submit.\nCheck server logs or configure /api/contact.");
      setStatus({ ok: true, message: "Thanks — your message has been sent. We will contact you shortly." });
      setForm({ name: "", email: "", phone: "", company: "", message: "", consent: false });
      setSelected({ Solutions: [], Products: [], Services: [] });
    } catch (err: any) {
      setStatus({ ok: false, message: err?.message || "Submission failed." });
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen bg-slate-50 p-6 sm:p-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
        <section className="lg:col-span-1">
          <h1 className="text-3xl font-semibold leading-tight">Contact Capco Consulting Services</h1>
          <p className="mt-4 text-slate-700">Reach out for product demos, custom solutions, or to discuss implementation and support.</p>

          <div className="mt-6 space-y-4">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="text-sm font-medium text-slate-600">Office</h3>
              <p className="mt-1 text-sm text-slate-700">Capco Consulting Services Pvt Ltd<br/>Hyderabad, India</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="text-sm font-medium text-slate-600">Phone</h3>
              <a href="tel:+911234567890" className="mt-1 block text-sm text-slate-700">+91 9999999999</a>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="text-sm font-medium text-slate-600">Email</h3>
              <a href="mailto:contact@capco.example" className="mt-1 block text-sm text-slate-700">contact@capcocs.com</a>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="text-sm font-medium text-slate-600">Office hours</h4>
            <p className="mt-1 text-sm text-slate-700">Mon — Fri: 9:00 — 18:00 IST</p>
          </div>

          <div className="mt-6 bg-white rounded-lg overflow-hidden shadow-sm">
            <div className="w-full h-48">
              {/* Replace the src with a real Google Maps embed or a static image */}
              <iframe
                title="Capco Office Location"
                src="https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
              />
            </div>
          </div>
        </section>

        <section className="lg:col-span-2">
          <div className="bg-white rounded-lg p-8 shadow">
            <h2 className="text-2xl font-semibold">Start a conversation</h2>
            <p className="mt-2 text-slate-600">Tell us which product, service or solution you are interested in and a brief on your requirement.</p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-6" noValidate>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Full name</span>
                  <input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-200 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none p-2"
                    placeholder="Your full name"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Email</span>
                  <input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-200 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none p-2"
                    placeholder="you@company.com"
                    required
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Phone</span>
                  <input
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-200 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none p-2"
                    placeholder="+91 98765 43210"
                  />
                </label>

                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Company</span>
                  <input
                    name="company"
                    value={form.company}
                    onChange={handleChange}
                    className="mt-1 block w-full rounded-md border-slate-200 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none p-2"
                    placeholder="Company name (optional)"
                  />
                </label>
              </div>

              <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {Object.keys(OPTIONS).map((group) => (
                  <div key={group} className="p-4 border rounded-md bg-slate-50">
                    <legend className="text-sm font-semibold text-slate-700">{group}</legend>
                    <div className="mt-2 space-y-2">
                      {OPTIONS[group as keyof typeof OPTIONS].map((opt) => (
                        <label key={opt} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            name={`${group}:${opt}`}
                            checked={selected[group]?.includes(opt) ?? false}
                            onChange={() => toggleOption(group, opt)}
                            className="h-4 w-4 rounded border-slate-300 focus:ring-2 focus:ring-indigo-500"
                          />
                          <span className="ml-2 text-slate-700">{opt}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}
              </fieldset>

              <div>
                <label className="block">
                  <span className="text-sm font-medium text-slate-700">Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={6}
                    className="mt-1 block w-full rounded-md border-slate-200 shadow-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none p-2"
                    placeholder="Briefly describe your requirement, timeline and budget (if any)"
                    required
                  />
                </label>
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={form.consent}
                  onChange={(e) => setForm((s) => ({ ...s, consent: e.target.checked }))}
                  className="h-4 w-4 rounded border-slate-300 focus:ring-2 focus:ring-indigo-500 mt-1"
                />
                <label htmlFor="consent" className="text-sm text-slate-700">
                  I agree to the processing of my personal data in accordance with the privacy policy.
                </label>
              </div>

              <div className="flex items-center gap-4">
                <button
                  type="submit"
                  className="inline-flex items-center justify-center rounded-md bg-indigo-600 text-white px-5 py-2 text-sm font-medium shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send message"}
                </button>

                <div className="text-sm">
                  {status && (
                    <p className={status.ok ? "text-green-600" : "text-red-600"}>{status.message}</p>
                  )}
                </div>
              </div>

              <div className="text-xs text-slate-500">We will only use your information to respond to your inquiry. By submitting this form you consent to processing as described.</div>
            </form>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="text-sm font-medium text-slate-600">Request a demo</h3>
              <p className="mt-2 text-sm text-slate-700">Interested in a product walkthrough? Indicate the product above and we'll schedule a demo.</p>
            </div>
            <div className="rounded-lg bg-white p-4 shadow-sm">
              <h3 className="text-sm font-medium text-slate-600">Support & implementation</h3>
              <p className="mt-2 text-sm text-slate-700">For support queries, include account details and priority so we can route to the correct team.</p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
