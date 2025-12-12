export default function CloudServices() {
  return (
    <main className="container py-20">
      <h1 className="text-4xl font-bold">Cloud Services</h1>

      <p className="mt-6 text-lg leading-relaxed max-w-3xl">
        <span className="font-semibold">CAPCO CONSULTING SERVICES</span> provides
        fully managed, secure, and scalable cloud solutions that empower
        businesses to accelerate digital transformation. We help organizations
        migrate, optimize, automate, and modernize their infrastructure across
        leading cloud platforms. From strategy to implementation, we ensure
        operational excellence, cost efficiency, and enterprise-grade security.
      </p>

      {/* SECTION: Core Cloud Services */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Our Core Cloud Service Offerings</h2>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Cloud Consulting & Strategy</li>
          <li>• Cloud Migration (Lift & Shift / Re-architect / Re-platform)</li>
          <li>• Infrastructure Modernization</li>
          <li>• Cloud-Native Application Development</li>
          <li>• Cloud Security, Compliance & Auditing</li>
          <li>• Managed Cloud Services</li>
          <li>• DevOps Automation & CI/CD Pipelines</li>
          <li>• Serverless Architecture & Microservices</li>
          <li>• Backup, Disaster Recovery & High Availability</li>
        </ul>
      </section>

      {/* SECTION: Cloud Platforms */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Cloud Platforms We Support</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl">Microsoft Azure</h3>
            <ul className="mt-3 space-y-2">
              <li>Azure Virtual Machines</li>
              <li>Azure App Services</li>
              <li>Azure Kubernetes Service</li>
              <li>Azure SQL & Storage</li>
              <li>Azure DevOps</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl">Amazon Web Services (AWS)</h3>
            <ul className="mt-3 space-y-2">
              <li>EC2 / ECS / Lambda</li>
              <li>S3, DynamoDB, RDS</li>
              <li>AWS CloudFormation</li>
              <li>AWS API Gateway</li>
              <li>AWS IAM Security</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl">Google Cloud Platform (GCP)</h3>
            <ul className="mt-3 space-y-2">
              <li>Compute Engine</li>
              <li>Cloud Run & Kubernetes</li>
              <li>BigQuery & Cloud SQL</li>
              <li>Cloud Storage</li>
              <li>GCP Identity & Security</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION: DevOps & Automation */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">DevOps & Cloud Automation</h2>

        <p className="mt-4 text-lg max-w-3xl">
          CAPCO integrates DevOps practices to accelerate development, reduce 
          deployment errors, and improve operational efficiency across cloud 
          environments.
        </p>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• CI/CD Pipeline Development</li>
          <li>• Infrastructure as Code (IaC) using Terraform / ARM / CloudFormation</li>
          <li>• Automated Monitoring & Logging</li>
          <li>• Containerization using Docker & Kubernetes</li>
          <li>• Observability & Performance Optimization</li>
        </ul>
      </section>

      {/* SECTION: Cloud Security */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Cloud Security & Compliance</h2>

        <p className="mt-4 text-lg max-w-3xl">
          Security is at the foundation of every cloud solution we build. We 
          ensure your infrastructure meets global standards and industry 
          regulations.
        </p>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Identity & Access Management (IAM)</li>
          <li>• Network Security & Firewall Policies</li>
          <li>• Encryption (Data in Transit & At Rest)</li>
          <li>• Vulnerability Assessments</li>
          <li>• Security Audits & Compliance (ISO, GDPR, SOC 2)</li>
        </ul>
      </section>

      {/* SECTION: Industries */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Industries We Serve</h2>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Finance & Banking</li>
          <li>• Manufacturing & Supply Chain</li>
          <li>• Healthcare & Pharmaceuticals</li>
          <li>• Retail & E-commerce</li>
          <li>• Real Estate</li>
          <li>• IT & SaaS Platforms</li>
        </ul>
      </section>

      {/* SECTION: Why CAPCO */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Why Choose CAPCO for Cloud Services?</h2>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Expertise across all major cloud platforms</li>
          <li>• Cost-efficient and performance-driven cloud solutions</li>
          <li>• 24/7 monitoring, support, and managed services</li>
          <li>• Highly secure, compliant, and reliable architectures</li>
          <li>• Experience with enterprise-scale cloud deployments</li>
        </ul>
      </section>

      {/* SECTION: CTA */}
      <section className="mt-16 p-10 border rounded-xl text-center">
        <h2 className="text-2xl font-semibold">Transform Your Business with Cloud Power</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          CAPCO CONSULTING SERVICES helps you unlock cloud scalability, 
          efficiency, and resilience—tailored to your industry and goals.
        </p>

        <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </main>
  );
}
