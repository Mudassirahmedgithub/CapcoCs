export default function MobileAppDevelopment() {
  return (
    <main className="container py-20">
      <h1 className="text-4xl font-bold">Mobile App Development</h1>

      <p className="mt-6 text-lg leading-relaxed max-w-3xl">
        <span className="font-semibold">CAPCO CONSULTING SERVICES</span> builds
        high-performance, secure, and scalable mobile applications tailored to
        modern businesses. We develop apps that deliver seamless user
        experiences, integrate with enterprise systems, and support both iOS and
        Android platforms. Our mobile solutions are engineered for durability,
        speed, and long-term digital transformation.
      </p>

      {/* SECTION: Core Mobile Services */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Our Core Mobile Development Services</h2>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Native iOS Development (Swift)</li>
          <li>• Native Android Development (Kotlin, Java)</li>
          <li>• Cross-Platform Development (Flutter, React Native)</li>
          <li>• Enterprise Mobile Solutions</li>
          <li>• Mobile UI/UX Design & Prototyping</li>
          <li>• App Modernization & Migration</li>
          <li>• App Maintenance & Version Upgrades</li>
          <li>• Wearable and IoT-Integrated Apps</li>
        </ul>
      </section>

      {/* SECTION: App Capabilities */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Capabilities We Deliver</h2>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Real-time tracking & geolocation apps</li>
          <li>• E-commerce & mobile retail apps</li>
          <li>• Finance, banking, & payment-enabled apps</li>
          <li>• Healthcare & telemedicine mobile systems</li>
          <li>• Logistics & delivery management apps</li>
          <li>• Education & LMS mobile platforms</li>
          <li>• Customer relationship and service apps</li>
        </ul>
      </section>

      {/* SECTION: Technology Stack */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Technology Stack</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl">Native</h3>
            <ul className="mt-3 space-y-2">
              <li>Swift (iOS)</li>
              <li>Kotlin (Android)</li>
              <li>Java</li>
              <li>Objective-C (legacy)</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl">Cross Platform</h3>
            <ul className="mt-3 space-y-2">
              <li>Flutter</li>
              <li>React Native</li>
              <li>Ionic</li>
            </ul>
          </div>

          <div className="p-6 rounded-xl border">
            <h3 className="font-semibold text-xl">Backend & Cloud Integration</h3>
            <ul className="mt-3 space-y-2">
              <li>Node.js / Express</li>
              <li>.NET Core</li>
              <li>Firebase & Firestore</li>
              <li>AWS / Azure / Google Cloud</li>
              <li>REST & GraphQL APIs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SECTION: UI/UX Excellence */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">UI/UX Excellence</h2>

        <p className="mt-4 text-lg max-w-3xl">
          We build user-centered interfaces with intuitive navigation, clean
          layouts, and interactive design elements. Capco ensures every mobile
          product delivers smooth performance, accessibility, and modern user
          experience standards.
        </p>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Wireframing & Prototyping</li>
          <li>• High-fidelity UI design</li>
          <li>• Interaction design & micro-animations</li>
          <li>• Usability optimization & user testing</li>
        </ul>
      </section>

      {/* SECTION: Why CAPCO */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold">Why Clients Choose CAPCO</h2>

        <ul className="mt-4 space-y-3 text-lg">
          <li>• Strong expertise in enterprise-grade mobile systems</li>
          <li>• Highly scalable and secure architectures</li>
          <li>• Native-level performance with modern frameworks</li>
          <li>• Integration with ERP, CRM, and cloud services</li>
          <li>• End-to-end development lifecycle support</li>
          <li>• Long-term maintenance and enhancement services</li>
        </ul>
      </section>

      {/* SECTION: CTA */}
      <section className="mt-16 p-10 border rounded-xl text-center">
        <h2 className="text-2xl font-semibold">Build Powerful Mobile Apps With Us</h2>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          Whether it's a customer-facing mobile app, enterprise tool, or a
          next-generation digital product, 
          CAPCO CONSULTING SERVICES is ready to transform your ideas into 
          seamless mobile experiences.
        </p>

        <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg text-lg hover:bg-blue-700 transition">
          Contact Us
        </button>
      </section>
    </main>
  );
}
