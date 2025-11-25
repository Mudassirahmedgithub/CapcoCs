export default function HomePage() {
  return (
    <main className="container py-20">
      <section className="space-y-6">
        <h1 className="text-5xl font-bold tracking-tight">Complete Honesty and Transparency</h1>
        <p className="text-lg leading-relaxed max-w-3xl">
          CAPCO is a globally recognized consulting firm committed to empowering organizations across Qatar, India, and Canada. With a focus on tailored business solutions, operational efficiency, and long-term success, CAPCO serves as a trusted partner in consulting, human resource management, and technology services. Through innovation, sustainability, and collaboration, CAPCO fosters growth while championing diversity and inclusion.
        </p>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-semibold mb-6">Our Core Values</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-lg">
          <li className="p-4 rounded-2xl shadow bg-black">Quality</li>
          <li className="p-4 rounded-2xl shadow bg-black">Client Satisfaction</li>
          <li className="p-4 rounded-2xl shadow bg-black">Excellence</li>
          <li className="p-4 rounded-2xl shadow bg-black">Safety</li>
          <li className="p-4 rounded-2xl shadow bg-black">Out of the box solutions</li>
          <li className="p-4 rounded-2xl shadow bg-black">Integrity, Loyalty and Confidentiality</li>
        </ul>
      </section>

      <section className="mt-16 space-y-4 max-w-3xl">
        <h2 className="text-3xl font-semibold">About CAPCO</h2>
        <p className="text-lg leading-relaxed">
          At CAPCO, we specialize in empowering businesses across Qatar, India, and Canada with innovative solutions and strategies. We are committed to transforming organizations by fostering resilience, optimizing operational efficiency, and driving sustainable growth. Through collaborative partnerships, we address complex challenges and deliver lasting value to our clients, employees, and communities.
        </p>
      </section>
    </main>
  );
}
