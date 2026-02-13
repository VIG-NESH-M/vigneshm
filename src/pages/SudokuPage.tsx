// ============================================================
// SUDOKU PAGE - Subtle Folio Exact Style
// ============================================================

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { useDocumentTitle } from "@/hooks";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";
import { SudokuGame } from "@/components/game/sudoku";

export default function SudokuPage() {
  useDocumentTitle("Sudoku | Vignesh M");

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
            <SudokuGame />
          </div>

          {/* Keyboard Shortcuts */}
          <div className="mt-3 bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800">
            <h3 className="text-xs font-semibold text-gray-800 dark:text-gray-200 mb-3 uppercase tracking-wider">
              Keyboard Shortcuts
            </h3>
            <div className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs text-gray-500 dark:text-neutral-400">
              <div className="flex items-center justify-between">
                <span>Place number</span>
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-neutral-800 rounded text-[10px] font-mono">
                  1-9
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Erase</span>
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-neutral-800 rounded text-[10px] font-mono">
                  Del
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Toggle notes</span>
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-neutral-800 rounded text-[10px] font-mono">
                  N
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Hint</span>
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-neutral-800 rounded text-[10px] font-mono">
                  H
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Undo</span>
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-neutral-800 rounded text-[10px] font-mono">
                  Ctrl+Z
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Pause</span>
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-neutral-800 rounded text-[10px] font-mono">
                  P
                </kbd>
              </div>
              <div className="flex items-center justify-between">
                <span>Navigate</span>
                <kbd className="px-1.5 py-0.5 bg-gray-100 dark:bg-neutral-800 rounded text-[10px] font-mono">
                  ← ↑ ↓ →
                </kbd>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
