export default function RetailSolution() {
  return (
    <main className="w-full min-h-screen bg-gray-50 py-20 px-6">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto text-center mb-20">
        <h1 className="text-5xl font-extrabold tracking-tight mb-4">Retail Solution</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          CAPCO CONSULTING SERVICES delivers modern, scalable retail management solutions
          that streamline operations, enhance customer experience, and empower data-driven growth.
        </p>
      </section>

      {/* Feature Grid */}
      <section className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
        <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold mb-3">Inventory Automation</h2>
          <p className="text-gray-600 leading-relaxed">
            Real‑time stock tracking, automated replenishment, and predictive insights
            that keep shelves full and operations smooth.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold mb-3">Billing & POS Management</h2>
          <p className="text-gray-600 leading-relaxed">
            Fast, secure, and intuitive billing systems with integrated POS features
            designed for high‑traffic retail environments.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold mb-3">Multi‑Store Synchronization</h2>
          <p className="text-gray-600 leading-relaxed">
            Centralize data, manage multiple branches, and monitor performance
            across all retail locations in real time.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold mb-3">Customer Insights & Loyalty</h2>
          <p className="text-gray-600 leading-relaxed">
            Understand customer preferences with analytics, loyalty programs, and repeat‑purchase insights.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold mb-3">Supply Chain Integration</h2>
          <p className="text-gray-600 leading-relaxed">
            Connect your vendors, streamline order cycles, and eliminate procurement bottlenecks.
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-md border hover:shadow-lg transition-all">
          <h2 className="text-2xl font-bold mb-3">Financial & Tax Compliance</h2>
          <p className="text-gray-600 leading-relaxed">
            Automated GST calculations, financial reports, and regulatory compliance made effortless.
          </p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-5xl mx-auto bg-white p-14 rounded-3xl shadow-xl border text-center">
        <h2 className="text-3xl font-extrabold mb-4">Transform Your Retail Operations</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
          Whether you are managing a single store or a multi‑location retail chain,
          CAPCO’s Retail Solution provides the technology, clarity, and control
          to scale with confidence.
        </p>
        <button className="px-8 py-3 rounded-xl border border-black text-black font-semibold hover:bg-black hover:text-white transition-all">
          Contact Us
        </button>
      </section>
    </main>
  );
}
