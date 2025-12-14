import React from "react";

export default function RPA() {
  return (
    <main className="bg-gray-900 text-gray-100 min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-24 bg-gradient-to-r from-blue-800 to-purple-700">
        <h1 className="text-5xl font-bold mb-4">Robotics Process Automation</h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-200">
          Revolutionize your business processes with CAPCO’s RPA solutions. Automate
          repetitive tasks, reduce errors, and improve efficiency with intelligent
          software robots.
        </p>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-blue-900 transition">
          <h3 className="text-2xl font-semibold mb-3">Efficiency Boost</h3>
          <p className="text-gray-300">
            Automate repetitive, manual tasks to save time and allow your workforce to
            focus on strategic initiatives.
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-blue-900 transition">
          <h3 className="text-2xl font-semibold mb-3">Accuracy & Compliance</h3>
          <p className="text-gray-300">
            Minimize human errors and ensure strict adherence to compliance and
            regulatory standards.
          </p>
        </div>
        <div className="bg-gray-800 rounded-xl p-8 text-center hover:bg-blue-900 transition">
          <h3 className="text-2xl font-semibold mb-3">Scalability</h3>
          <p className="text-gray-300">
            Scale your automation across multiple processes and departments with ease,
            handling complex workflows seamlessly.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-850">
        <h2 className="text-3xl font-bold text-center mb-12">Our RPA Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Process Assessment & Discovery</h3>
            <p className="text-gray-300">
              Identify automation opportunities and analyze workflows to implement RPA
              effectively.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Bot Development & Deployment</h3>
            <p className="text-gray-300">
              Develop intelligent software robots tailored to your business processes
              and deploy them securely across systems.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">RPA Integration</h3>
            <p className="text-gray-300">
              Integrate automation with existing systems, databases, and applications
              for seamless operations.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Monitoring & Support</h3>
            <p className="text-gray-300">
              Continuous monitoring, maintenance, and support to ensure optimal bot
              performance and business continuity.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">RPA Training & Consulting</h3>
            <p className="text-gray-300">
              Equip your teams with RPA skills and best practices to maximize
              automation benefits.
            </p>
          </div>
          <div className="bg-gray-800 rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">AI & Cognitive Automation</h3>
            <p className="text-gray-300">
              Enhance your automation with AI-driven decision-making, OCR, and
              cognitive capabilities for complex tasks.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-16 bg-gradient-to-r from-purple-700 to-blue-800 rounded-xl mx-6 md:mx-20 mt-12">
        <h2 className="text-3xl font-bold mb-4">Start Your RPA Journey Today</h2>
        <p className="mb-8">
          Partner with CAPCO Consulting Services to automate business processes,
          increase efficiency, and achieve digital transformation with RPA.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-gray-900 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>
    </main>
  );
}
