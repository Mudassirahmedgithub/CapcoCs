export default function ERPCrm() {
  return (
    <main className="w-full min-h-screen bg-gray-50 py-20 px-6">
      <section className="max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <header className="text-center space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 tracking-tight">
            ERP & CRM Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            CAPCO Consulting Services delivers next-generation ERP and CRM systems that enable unified operations,
            intelligent automation, real-time data visibility, and end-to-end business optimization.
            Our solutions empower enterprises to scale, transform, and compete with confidence.
          </p>
        </header>

        {/* Core Sections */}
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-10 rounded-3xl shadow-lg space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Enterprise Resource Planning (ERP)</h2>
            <p className="text-gray-600 leading-relaxed">
              CAPCO’s ERP services unify core business processes—finance, supply chain, manufacturing,
              procurement, inventory, HR, and operations—under a single intelligent platform.
              Our modular and scalable ERP implementations reduce costs, eliminate manual bottlenecks,
              and provide real-time insights for faster decision-making.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Centralized process automation and workflow orchestration</li>
              <li>• Real-time dashboards for financial and operational monitoring</li>
              <li>• Inventory, logistics, and production management optimization</li>
              <li>• Multi-location, multi-currency, and multi-department support</li>
              <li>• Seamless cloud and hybrid deployment capabilities</li>
            </ul>
          </div>

          <div className="bg-white p-10 rounded-3xl shadow-lg space-y-6">
            <h2 className="text-3xl font-semibold text-gray-800">Customer Relationship Management (CRM)</h2>
            <p className="text-gray-600 leading-relaxed">
              CAPCO’s CRM solutions strengthen customer engagement with AI-driven sales pipelines,
              automated lead nurturing, personalized service delivery, and omnichannel communication.
              The result is faster sales cycles, higher retention, and improved customer satisfaction.
            </p>

            <ul className="space-y-3 text-gray-700">
              <li>• Lead tracking, scoring, and automated sales workflows</li>
              <li>• Customer lifecycle visibility with 360° interaction history</li>
              <li>• Campaign management and marketing automation</li>
              <li>• Integrated service desk and support ticketing</li>
              <li>• Advanced analytics to improve sales conversions</li>
            </ul>
          </div>
        </div>

        {/* Solutions Offered */}
        <section className="space-y-10">
          <h2 className="text-4xl font-bold text-gray-900 text-center">Solutions Offered Under ERP & CRM</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">MS Dynamics 365 F&O</h3>
              <p className="text-gray-600 leading-relaxed">
                Financial and operational automation for enterprises seeking real-time intelligence,
                global scalability, and seamless process modernization.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">MS Dynamics 365 Business Central</h3>
              <p className="text-gray-600 leading-relaxed">
                Unified ERP for small and mid-sized businesses offering finance, inventory,
                sales, and project management in one accessible system.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">MS Dynamics 365 Supply Chain</h3>
              <p className="text-gray-600 leading-relaxed">
                Intelligent supply chain automation with predictive insights,
                optimized warehouse operations, and integrated logistics control.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">MS Dynamics 365 Human Resource</h3>
              <p className="text-gray-600 leading-relaxed">
                Workforce management with employee self-service, talent acquisition,
                payroll integration, and performance tracking.
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-md p-8 space-y-4">
              <h3 className="text-xl font-semibold text-gray-800">MS Dynamics 365 Sales</h3>
              <p className="text-gray-600 leading-relaxed">
                AI-powered sales automation enabling predictive forecasting,
                pipeline management, and improved deal conversions.
              </p>
            </div>
          </div>
        </section>

        {/* Advantages */}
        <section className="bg-gray-900 text-white rounded-3xl p-12 space-y-8 mt-10">
          <h2 className="text-4xl font-semibold text-center">Why Choose CAPCO for ERP & CRM</h2>
          <ul className="space-y-4 text-gray-200 max-w-4xl mx-auto text-lg">
            <li>• End-to-end consulting: requirement analysis to deployment</li>
            <li>• Certified implementation specialists across Dynamics ecosystem</li>
            <li>• Rapid customization and seamless module integration</li>
            <li>• Scalable cloud, hybrid, and on-premise solutions</li>
            <li>• Robust security, governance, and data compliance adherence</li>
            <li>• 24/7 support, monitoring, and lifecycle maintenance</li>
          </ul>
        </section>
      </section>
    </main>
  );
}