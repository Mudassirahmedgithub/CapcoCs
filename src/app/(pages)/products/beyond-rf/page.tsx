import { Wrench, Rocket, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function WorkInProgressPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 px-6">
      <div className="max-w-xl text-center">
        <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-indigo-500/10 ring-1 ring-indigo-500/20">
          <Wrench className="h-10 w-10 text-indigo-400" />
        </div>

        <span className="inline-flex items-center gap-2 rounded-full border border-indigo-500/20 bg-indigo-500/10 px-4 py-1 text-sm font-medium text-indigo-300">
          <Rocket className="h-4 w-4" />
          Work In Progress
        </span>

        <h1 className="mt-6 text-4xl font-bold tracking-tight text-white sm:text-5xl">
          We're Building Something Awesome 🚀
        </h1>

        <p className="mt-4 text-lg leading-8 text-slate-400">
          This page is currently under development. We're working hard to bring
          you an amazing experience. Please check back soon!
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-6 py-3 font-medium text-white transition hover:bg-indigo-500"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <button
            disabled
            className="cursor-not-allowed rounded-lg border border-slate-700 px-6 py-3 font-medium text-slate-500"
          >
            Coming Soon
          </button>
        </div>

        <div className="mt-12 border-t border-slate-800 pt-6 text-sm text-slate-500">
          Thanks for your patience ❤️
        </div>
      </div>
    </main>
  );
}