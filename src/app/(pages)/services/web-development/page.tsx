export default function WebDevelopment() {
  return (
    <main className="container py-20">
      <h1 className="text-4xl font-bold">Web Development Services</h1>

      <p className="mt-6 text-lg leading-relaxed max-w-3xl">
        At <span className="font-semibold">CAPCO CONSULTING SERVICES</span>, we
        deliver high-performance, secure, and scalable web solutions tailored to
        the specific needs of modern businesses. Our web development division
        blends advanced technologies, future-proof architectures, and
        industry-driven design standards to help companies accelerate digital
        transformation and achieve long-term growth.
      </p>

      {/* SECTION: What We Deliver */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">What We Deliver</h2>
        <ul className="mt-4 space-y-3 text-lg">
          <li>• Full-stack Web Applications</li>
          <li>• Custom Business Portals & Dashboards</li>
          <li>• E-commerce Platforms</li>
          <li>• Mobile-Responsive Websites</li>
          <li>• API-Driven Enterprise Systems</li>
          <li>• CMS-Based Websites (WordPress, Headless CMS)</li>
          <li>• Cloud-Ready and Scalable Applications</li>
        </ul>
      </section>

      {/* SECTION: Technology Stack */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Technology Stack</h2>
        <p className="mt-4 text-lg">We use modern, enterprise-grade technologies:</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl">Frontend</h3>
            <ul className="mt-3 space-y-2">
              <li>React.js</li>
              <li>Next.js</li>
              <li>HTML / CSS / Tailwind</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl">Backend</h3>
            <ul className="mt-3 space-y-2">
              <li>Node.js / Express</li>
              <li>.NET Core</li>
              <li>Java Spring Boot</li>
              <li>REST & GraphQL APIs</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl">Database & Cloud</h3>
            <ul className="mt-3 space-y-2">
              <li>MySQL / PostgreSQL</li>
              <li>MongoDB</li>
              <li>Azure / AWS / GCP</li>
              <li>DevOps & CI/CD Pipelines</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION: Industry-Focused Solutions */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Industry-Focused Solutions</h2>
        <p className="mt-4 text-lg max-w-3xl">
          We understand diverse industry requirements and design solutions
          aligned with real-world business workflows.
        </p>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Finance & Banking Portals</li>
          <li>• Real Estate & Property Management Systems</li>
          <li>• Healthcare Management Solutions</li>
          <li>• Retail & E-commerce Applications</li>
          <li>• Manufacturing & Supply Chain Platforms</li>
          <li>• LMS and Training Systems</li>
        </ul>
      </section>

      {/* SECTION: Why Capco */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Why CAPCO?</h2>
        <ul className="mt-4 space-y-3 text-lg">
          <li>• 100% scalable and secure architectures</li>
          <li>• Enterprise-level development standards</li>
          <li>• SEO-optimized and performance-optimized builds</li>
          <li>• Rigorous quality assurance and testing</li>
          <li>• Transparent timelines and delivery models</li>
          <li>• End-to-end support and maintenance</li>
        </ul>
      </section>

      {/* SECTION: CTA */}
      <section className="mt-16 p-10 border rounded-xl text-center">
        <h2 className="text-2xl font-semibold">Let’s Build Your Digital Future</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          CAPCO CONSULTING SERVICES is your trusted partner for modern web
          transformation. Whether you need a dynamic customer-facing website or a
          complex enterprise platform, our team is ready to deliver.
        </p>

        <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </main>
  );
}
