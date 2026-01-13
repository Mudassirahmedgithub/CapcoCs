import React from "react";

export default function EnterpriseWarehouseManagement() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-indigo-700 to-indigo-900 text-white py-28 text-center">
        <h1 className="text-5xl font-bold mb-4">Enterprise Warehouse Management</h1>
        <p className="max-w-3xl mx-auto text-lg">
          Optimize, automate, and transform your warehouse operations with CAPCO’s
          Enterprise Warehouse Management solutions. Drive efficiency, accuracy, and
          seamless supply chain integration.
        </p>
      </section>

      {/* Core Features Section */}
      <section className="py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-10">
        <div className="bg-gray-100 rounded-xl p-8 text-center shadow hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">Inventory Optimization</h3>
          <p className="text-gray-700">
            Maintain optimal stock levels, reduce wastage, and improve order fulfillment
            accuracy with advanced inventory management tools.
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl p-8 text-center shadow hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">Automated Workflows</h3>
          <p className="text-gray-700">
            Streamline warehouse operations using automated processes for picking,
            packing, and shipping to maximize productivity.
          </p>
        </div>
        <div className="bg-gray-100 rounded-xl p-8 text-center shadow hover:shadow-xl transition">
          <h3 className="text-2xl font-semibold mb-3">Real-Time Analytics</h3>
          <p className="text-gray-700">
            Gain actionable insights with real-time dashboards and reporting on warehouse
            performance, inventory movement, and logistics efficiency.
          </p>
        </div>
      </section>

      {/* Solutions & Services Section */}
      <section className="py-20 px-6 md:px-20 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-12">Our EWM Solutions</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Warehouse Automation</h3>
            <p className="text-gray-700">
              Implement robotics, conveyors, and automated storage/retrieval systems
              for efficient warehouse operations.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Order Fulfillment & Shipping</h3>
            <p className="text-gray-700">
              Ensure timely and accurate order processing through optimized picking,
              packing, and shipping workflows.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Supply Chain Integration</h3>
            <p className="text-gray-700">
              Connect warehouse management with procurement, logistics, and sales for
              end-to-end visibility and efficiency.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">IoT & Sensor Integration</h3>
            <p className="text-gray-700">
              Monitor stock levels, equipment health, and warehouse conditions with
              IoT devices for predictive management.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">AI-Powered Insights</h3>
            <p className="text-gray-700">
              Utilize AI for demand forecasting, predictive maintenance, and workflow
              optimization.
            </p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-3">Compliance & Security</h3>
            <p className="text-gray-700">
              Ensure warehouse operations meet regulatory standards while safeguarding
              inventory and sensitive data.
            </p>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="text-center py-20 bg-indigo-900 text-white rounded-xl mx-6 md:mx-20 mt-12">
        <h2 className="text-3xl font-bold mb-4">Elevate Your Warehouse Operations</h2>
        <p className="mb-8 max-w-2xl mx-auto">
          Partner with CAPCO Consulting Services to implement enterprise-grade warehouse
          management solutions, optimize logistics, and achieve operational excellence.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-indigo-900 font-semibold px-8 py-4 rounded-lg shadow hover:bg-gray-100 transition"
        >
          Connect with Us
        </a>
      </section>
    </main>
  );
}
