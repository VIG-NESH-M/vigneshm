// ============================================================
// MEMORY PAGE - Subtle Folio Style
// ============================================================

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useDocumentTitle } from "@/hooks";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { MemoryGame } from "@/components/game/memory";

export default function MemoryPage() {
  useDocumentTitle("Memory Match | Vignesh M");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 text-gray-900 dark:text-neutral-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-8 px-3 sm:px-4">
        <div className="max-w-xl mx-auto">
          {/* Back Button */}
          <div className="mb-3">
            <Link
              to="/games"
              className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-900 rounded-full shadow-sm border border-gray-100 dark:border-neutral-800 text-xs font-medium text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Games
            </Link>
          </div>

          {/* Game Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-6 shadow-sm border border-gray-100 dark:border-neutral-800">
            <MemoryGame />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
