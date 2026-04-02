import Link from "next/link"
import productsData from "@/app/data/navigation.json"

export default function ProductsPage() {
  const categories = productsData.products

  return (
    <main className="w-full">

      {/* HERO */}
      <section className="py-24 bg-gradient-to-b from-slate-50 to-white text-center">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-5xl font-bold mb-6">
            Powerful Business Software for Every Department
          </h1>

          <p className="text-lg text-gray-600 mb-8">
            Explore our integrated suite of business applications designed
            to streamline operations, improve productivity, and drive growth.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="#categories"
              className="px-6 py-3 bg-black text-white rounded-lg"
            >
              Explore Solutions
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border rounded-lg"
            >
              Book Demo
            </Link>
          </div>
        </div>
      </section>

      {/* PLATFORM OVERVIEW */}
      <section className="py-20 border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            One Platform. Multiple Business Solutions
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Our platform connects ERP, HRMS, CRM, Procurement, Finance,
            and AI-powered analytics into one unified ecosystem.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {["ERP", "HRMS", "CRM", "Procurement", "Finance", "Audit", "Retail", "AI"].map(
              (item) => (
                <div
                  key={item}
                  className="border rounded-xl p-6 text-center bg-white shadow-sm"
                >
                  <span className="text-lg font-semibold">{item}</span>
                </div>
              )
            )}
          </div>

        </div>
      </section>

      {/* CATEGORY GRID */}
      <section id="categories" className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-12 text-center">
            Explore Our Product Suite
          </h2>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-8">

            {categories.map((category: any) => (
              <div
                key={category.base}
                className="bg-white rounded-xl border p-6 hover:shadow-md transition"
              >

                <div className="text-3xl mb-4">{category.icon}</div>

                <h3 className="text-xl font-semibold mb-2">
                  {category.category}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {category.description}
                </p>

                <ul className="text-sm text-gray-500 space-y-1 mb-4">
                  {category.items.slice(0, 4).map((item: any) => (
                    <li key={item.label}>• {item.label}</li>
                  ))}
                </ul>

                <Link
                  href={`/products/${category.base}`}
                  className="text-sm font-medium text-blue-600"
                >
                  View All →
                </Link>

              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CATEGORY + ITEMS PREVIEW */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 space-y-24">

          {categories.map((category: any) => (
            <div key={category.base} id={category.base}>

              <div className="flex justify-between items-center mb-8">
                <div>
                  <h2 className="text-3xl font-bold">
                    {category.icon} {category.category}
                  </h2>

                  <p className="text-gray-600 mt-2">
                    {category.description}
                  </p>
                </div>

                <Link
                  href={`/products/${category.base}`}
                  className="text-sm font-semibold"
                >
                  View {category.category} →
                </Link>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

                {category.items.slice(0, 8).map((item: any) => (
                  <Link
                    key={item.label}
                    href={`/products/${category.base}/${item.label
                      .toLowerCase()
                      .replace(/\s+/g, "-")}`}
                    className="border rounded-lg p-5 hover:shadow-md transition"
                  >
                    <div className="text-xl mb-2">{item.icon}</div>

                    <h4 className="font-semibold mb-2">
                      {item.label}
                    </h4>

                    <p className="text-sm text-gray-600">
                      {item.description}
                    </p>
                  </Link>
                ))}

              </div>

            </div>
          ))}

        </div>
      </section>

      {/* AI SECTION */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            AI Powered Business Intelligence
          </h2>

          <p className="text-gray-600 mb-10">
            Leverage artificial intelligence across HR, ERP, CRM,
            and finance to unlock predictive insights and automation.
          </p>

          <div className="grid md:grid-cols-4 gap-6">

            {[
              "AI Demand Forecasting",
              "HR Chatbot",
              "AI Fraud Detection",
              "AI Recruitment",
            ].map((ai) => (
              <div
                key={ai}
                className="p-6 border rounded-xl bg-white"
              >
                🤖 {ai}
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* PLATFORM INTEGRATION */}
      <section className="py-24 border-t border-b">
        <div className="max-w-6xl mx-auto px-6 text-center">

          <h2 className="text-3xl font-bold mb-6">
            Everything Works Together
          </h2>

          <p className="text-gray-600 max-w-3xl mx-auto">
            ERP, HRMS, CRM, Finance, Procurement, and Analytics
            all run on a unified platform designed for scalability,
            security, and performance.
          </p>

        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <div className="max-w-4xl mx-auto px-6">

          <h2 className="text-3xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>

          <p className="text-gray-600 mb-8">
            Discover how our integrated business software
            can help you automate operations and accelerate growth.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              href="/contact"
              className="px-6 py-3 bg-black text-white rounded-lg"
            >
              Request Demo
            </Link>

            <Link
              href="/contact"
              className="px-6 py-3 border rounded-lg"
            >
              Contact Sales
            </Link>
          </div>

        </div>
      </section>

    </main>
  )
}