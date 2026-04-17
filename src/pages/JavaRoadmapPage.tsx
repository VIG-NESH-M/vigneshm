// ============================================================
// JAVA ROADMAP PAGE - Embedded Interactive Roadmap
// ============================================================

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useDocumentTitle } from "@/hooks";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

export default function JavaRoadmapPage() {
  useDocumentTitle("Java Backend Roadmap | Vignesh M");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 text-gray-900 dark:text-neutral-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-8 px-3 sm:px-4">
        <div className="max-w-6xl mx-auto">
          <div className="mb-3 flex items-center justify-between gap-3">
            <Link
              to="/games"
              className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-900 rounded-full shadow-sm border border-gray-100 dark:border-neutral-800 text-xs font-medium text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Games
            </Link>

            <a
              href="/java_roadmap_responsive_tailwind.html"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-900 rounded-full shadow-sm border border-gray-100 dark:border-neutral-800 text-xs font-medium text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
            >
              Open full page
            </a>
          </div>

          <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-sm border border-gray-100 dark:border-neutral-800 overflow-hidden">
            <iframe
              src="/java_roadmap_responsive_tailwind.html"
              title="Java Backend Engineering Roadmap"
              className="w-full border-0"
              style={{ height: "calc(100vh - 170px)", minHeight: "700px" }}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
