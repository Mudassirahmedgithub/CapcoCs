export default function DigitalTransformation() {
  return (
    <main className="w-full min-h-screen bg-gray-50 py-20 px-6">
      <section className="max-w-6xl mx-auto space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
            Digital Transformation
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            CAPCO Consulting Services empowers organizations to modernize their operations,
            optimize performance, and accelerate growth with a full suite of digital
            transformation capabilities.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white shadow-md rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Enterprise Modernization</h2>
            <p className="text-gray-600">
              Transform legacy systems into scalable, cloud-ready and high-performance ecosystems.
              We align business processes with modern technology to maximize efficiency.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Technology Integration</h2>
            <p className="text-gray-600">
              Seamless integration of enterprise applications, automation tools, cloud solutions,
              and advanced analytics to create unified, data-driven workflows.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">Process Digitization</h2>
            <p className="text-gray-600">
              Automate manual operations, streamline communication, and enhance customer
              interactions using cutting-edge digital platforms.
            </p>
          </div>

          <div className="bg-white shadow-md rounded-2xl p-8 space-y-4">
            <h2 className="text-2xl font-semibold text-gray-800">AI & Data-Driven Operations</h2>
            <p className="text-gray-600">
              Enable smart decision-making with predictive analytics, machine learning, and
              intelligent automation tailored to organizational needs.
            </p>
          </div>
        </div>

        <section className="bg-gray-900 text-white rounded-2xl p-10 space-y-6 mt-10">
          <h2 className="text-3xl font-semibold">How CAPCO Drives Digital Transformation</h2>
          <ul className="space-y-4 text-gray-200">
            <li>• Assess business readiness and digital maturity</li>
            <li>• Implement scalable cloud-native architectures</li>
            <li>• Introduce automation for operational excellence</li>
            <li>• Integrate ERP, CRM, AI, and analytics platforms</li>
            <li>• Create seamless, customer-centric digital journeys</li>
          </ul>
        </section>
      </section>
    </main>
  );
}
