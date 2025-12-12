import React from "react";

export default function DataAndAI() {
  return (
    <main className="container mx-auto px-4 py-20">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          Data & AI Solutions
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Transform your business with CAPCO’s cutting-edge Data & AI solutions. From
          data-driven insights to AI-powered automation, we help you unlock the full
          potential of your data to drive innovation and business growth.
        </p>
      </section>

      {/* Why Choose Us Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold mb-4">Data Strategy & Governance</h3>
          <p className="text-gray-600">
            Establish a robust data strategy and governance framework to ensure
            compliance, reliability, and actionable insights across your organization.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold mb-4">Advanced Analytics</h3>
          <p className="text-gray-600">
            Leverage predictive analytics, machine learning, and statistical modeling to
            uncover hidden trends and optimize business decisions.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-8 text-center hover:shadow-2xl transition">
          <h3 className="text-2xl font-semibold mb-4">AI & Automation</h3>
          <p className="text-gray-600">
            Implement AI-driven automation solutions to improve efficiency, reduce
            operational costs, and deliver enhanced customer experiences.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="mb-20">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Data & AI Services
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Data Engineering</h3>
            <p className="text-gray-600">
              Design, build, and maintain scalable data pipelines and architectures to
              ensure data is ready for analysis and AI applications.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">AI Model Development</h3>
            <p className="text-gray-600">
              Develop custom machine learning and AI models tailored to your business
              challenges for smarter decision-making.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Business Intelligence</h3>
            <p className="text-gray-600">
              Transform raw data into interactive dashboards and reports for actionable
              insights across all business units.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">AI-Powered Automation</h3>
            <p className="text-gray-600">
              Automate repetitive business processes with intelligent AI solutions that
              increase efficiency and reduce errors.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Cloud AI Solutions</h3>
            <p className="text-gray-600">
              Integrate AI and analytics in the cloud to enable scalable, secure, and
              high-performance data operations.
            </p>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Data Consulting</h3>
            <p className="text-gray-600">
              Get expert guidance on data strategy, architecture, and AI adoption to
              accelerate your digital transformation journey.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center bg-blue-600 text-white py-16 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">
          Ready to unlock the power of Data & AI?
        </h2>
        <p className="mb-8">
          Partner with CAPCO Consulting Services to drive innovation, efficiency, and
          smarter business decisions with AI and data-driven solutions.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Get in Touch
        </a>
      </section>
    </main>
  );
}
