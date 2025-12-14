export default function AboutUs() {
  return (
    <main className="w-full py-20">
      <section className="container mx-auto max-w-6xl px-6">
        <div className="text-center mb-16">
          <h2 className="text-xl font-medium mt-4 opacity-80">
            Discover our mission, vision, and values that drive success.
          </h2>
          <h1 className="text-4xl font-bold tracking-tight">Capco Consulting Services</h1>
          <p className="text-lg mt-3">Driving Your Vision.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Who We Are</h2>
            <p className="leading-relaxed text-base opacity-80">
              Capco Consulting Services is a global technology consulting company dedicated to transforming
              businesses through innovative digital solutions, enterprise platforms, tailored products, and
              intelligent automation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
            <p className="leading-relaxed text-base opacity-80">
              To deliver enterprise-grade solutions that accelerate digital transformation and unlock long-term value.
            </p>
          </div>
        </div>

        {/* Digital Transformation */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center">Digital Transformation</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              
              "ERP & CRM",
              "Procurement Solutions",
              "Data & AI",
              "Robotics Process Automation",
              "Enterprise Warehouse Management",
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-2xl shadow-md border bg-black hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Vertex HCM",
              "Campus Management",
              "Mobile Device Management",
              "Customized Manufacturing ERP",
              "Customized Procurement ERP",
              "Customized HRMS",
              "Retail Solution",
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-2xl shadow-md border bg-black hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Services */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              "Web Development",
              "Software Development",
              "Mobile App Development",
              "Cloud Services",
              "Data Governance & AI",
              "IT Consulting Support",
            ].map((item, index) => (
              <div key={index} className="p-6 rounded-2xl shadow-md border bg-black hover:shadow-xl transition-all">
                <h3 className="text-xl font-semibold">{item}</h3>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Us — FIXED */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-10 text-center">Contact Us</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
            <div className="p-6 border rounded-xl shadow-sm bg-black">
              <h3 className="text-xl font-semibold mb-3">Call Us</h3>
              <p className="opacity-80">+91 999999999999</p>
              <p className="opacity-80">+9999999999999</p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm bg-black">
              <h3 className="text-xl font-semibold mb-3">Email Us</h3>
              <p className="opacity-80">capcocsqa@gmail.com</p>
            </div>

            <div className="p-6 border rounded-xl shadow-sm bg-black">
              <h3 className="text-xl font-semibold mb-3">Locations</h3>
              <p className="opacity-80">Canada, Qatar</p>
              <p className="opacity-80">India</p>
            </div>
          </div>
        </div>

        {/* Mission */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">Mission</h2>
          <p className="leading-relaxed text-base opacity-80">
            Our objective is to empower organizations across Qatar, India, and Canada by delivering tailor-made business solutions.
          </p>
        </div>

        {/* Vision */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-4">Vision</h2>
          <p className="leading-relaxed text-base opacity-80">
            To be a globally recognized consulting firm known for transforming businesses through innovative solutions.
          </p>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h2 className="text-3xl font-semibold mb-6">Values</h2>
          <p className="leading-relaxed text-base opacity-80">
            At CAPCO, we prioritize integrity, collaboration, excellence, and delivering impactful, customer-centric solutions.
          </p>
        </div>
      </section>
    </main>
  );
}
