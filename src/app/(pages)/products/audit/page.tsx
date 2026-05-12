import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Coming Soon",
  description: "This page is under construction.",
};

export default function StaticPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <section className="max-w-xl text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Page Under Construction
        </h1>

        <p className="text-gray-600 mb-6">
          This page is currently being worked on.  
          Please check back soon — exciting updates are on the way 🚀
        </p>

        <div className="text-sm text-gray-400">
          © {new Date().getFullYear()} Capco Consulting Services
        </div>
      </section>
    </main>
  );
}
