export default function SoftwareDevelopment() {
  return (
    <main className="container py-20">
      <h1 className="text-4xl font-bold">Software Development Services</h1>

      <p className="mt-6 text-lg leading-relaxed max-w-3xl">
        <span className="font-semibold">CAPCO CONSULTING SERVICES</span> 
        delivers end-to-end software development services designed to help 
        businesses build secure, scalable, and high-performance applications. 
        Our engineering teams specialize in creating custom software solutions 
        that solve real-world problems, enhance operational efficiency, and 
        support long-term digital transformation.
      </p>

      {/* SECTION: Core Software Development Offerings */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Our Core Offerings</h2>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Custom Enterprise Software</li>
          <li>• ERP & CRM System Development</li>
          <li>• Automation & Workflow Software</li>
          <li>• SaaS (Software as a Service) Platform Development</li>
          <li>• Desktop & Cross-Platform Applications</li>
          <li>• API Development & System Integrations</li>
          <li>• Product Engineering & MVP Development</li>
        </ul>
      </section>

      {/* SECTION: Software Engineering Expertise */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Software Engineering Expertise</h2>

        <p className="mt-4 text-lg">We build robust, secure, enterprise-grade software using modern architectures:</p>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Microservices Architecture</li>
          <li>• Event-Driven Systems</li>
          <li>• Cloud-Native Development</li>
          <li>• Distributed Systems & High Availability</li>
          <li>• Secure Authentication & Authorization (IAM, OAuth, SSO)</li>
          <li>• DevOps Automation and CI/CD Pipelines</li>
        </ul>
      </section>

      {/* SECTION: Technology Stack */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Technology Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl">Backend</h3>
            <ul className="mt-3 space-y-2">
              <li>.NET Core</li>
              <li>Java Spring Boot</li>
              <li>Node.js</li>
              <li>Python (FastAPI, Django)</li>
              <li>PHP Laravel</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl">Frontend & UI</h3>
            <ul className="mt-3 space-y-2">
              <li>React.js</li>
              <li>Angular</li>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>Tailwind CSS</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl">Databases & Cloud</h3>
            <ul className="mt-3 space-y-2">
              <li>MySQL / PostgreSQL</li>
              <li>MS SQL Server</li>
              <li>MongoDB</li>
              <li>Azure / AWS / Google Cloud</li>
              <li>Docker & Kubernetes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION: Industry Applications */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Industry Applications</h2>

        <p className="mt-4 text-lg max-w-3xl">
          Our software development services are built to support diverse 
          industries and mission-critical operations.
        </p>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Financial Services & Banking Software</li>
          <li>• Supply Chain & Inventory Management Systems</li>
          <li>• Healthcare & Patient Management Platforms</li>
          <li>• Manufacturing & Production Automation</li>
          <li>• Human Resource & Payroll Systems</li>
          <li>• Logistics, Tracking & Fleet Management</li>
        </ul>
      </section>

      {/* SECTION: Why CAPCO */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Why Partner With CAPCO?</h2>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Strong engineering excellence and delivery standards</li>
          <li>• Deep expertise in enterprise technologies</li>
          <li>• Proven experience with mission-critical systems</li>
          <li>• Transparent project management & communication</li>
          <li>• Dedicated support, maintenance & enhancements</li>
          <li>• Focus on performance, security, and scalability</li>
        </ul>
      </section>

      {/* SECTION: CTA */}
      <section className="mt-16 p-10 border rounded-xl text-center">
        <h2 className="text-2xl font-semibold">Build High-Quality Software with Us</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Whether you’re developing a new software product or modernizing 
          an existing system, CAPCO CONSULTING SERVICES provides strategic 
          engineering expertise to bring your vision to life.
        </p>

        <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </main>
  );
}
