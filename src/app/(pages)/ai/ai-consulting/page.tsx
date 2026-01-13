import Image from "next/image";

export default function ProcurementSolutions() {
  return (
    <main className="container mx-auto py-16 px-4 md:px-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Procurement Solutions
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Streamline your procurement processes with Capco Consulting Services. 
          Our solutions help organizations optimize sourcing, manage suppliers efficiently, 
          and achieve cost savings across the enterprise.
        </p>
      </section>

      {/* Features Section */}
      <section className="grid gap-12 md:grid-cols-3 mb-16">
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">End-to-End Procurement</h2>
          <p className="text-gray-600">
            From requisition to payment, manage your procurement lifecycle with complete visibility and control.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Supplier Management</h2>
          <p className="text-gray-600">
            Efficiently onboard, evaluate, and manage supplier relationships to ensure quality and compliance.
          </p>
        </div>
        <div className="bg-white shadow-lg rounded-xl p-6 text-center">
          <h2 className="text-2xl font-semibold mb-3">Analytics & Insights</h2>
          <p className="text-gray-600">
            Leverage advanced analytics to monitor spending, identify trends, and make data-driven decisions.
          </p>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Why Choose Capco Procurement Solutions?</h2>
        <div className="grid gap-10 md:grid-cols-3">
          <div className="flex flex-col items-center text-center">
            <Image src="/icons/efficiency.svg" alt="Efficiency" width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4">Operational Efficiency</h3>
            <p className="text-gray-600 mt-2">
              Automate routine tasks and accelerate procurement cycles.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/icons/cost-savings.svg" alt="Cost Savings" width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4">Cost Optimization</h3>
            <p className="text-gray-600 mt-2">
              Identify savings opportunities and optimize your spend.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Image src="/icons/compliance.svg" alt="Compliance" width={80} height={80} />
            <h3 className="text-xl font-semibold mt-4">Compliance & Risk Management</h3>
            <p className="text-gray-600 mt-2">
              Ensure procurement policies are met and reduce supplier risks.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center">
        <h2 className="text-3xl font-bold mb-6">Transform Your Procurement Today</h2>
        <p className="text-gray-600 mb-6 max-w-xl mx-auto">
          Partner with Capco Consulting Services to implement cutting-edge procurement solutions that drive efficiency, savings, and growth.
        </p>
        <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition">
          Get Started
        </button>
      </section>
    </main>
  );
}
