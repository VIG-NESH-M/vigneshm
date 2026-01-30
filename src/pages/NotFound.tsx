// ============================================================
// NOT FOUND PAGE (404) - Clean Minimal Design
// ============================================================

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/hooks";
import { useAppSelector } from "@/hooks";
import { selectTheme } from "@/store/selectors";

export default function NotFoundPage() {
  useDocumentTitle("Page Not Found | Vignesh M");
  const theme = useAppSelector(selectTheme);

  // Apply dark class to html element for Tailwind CSS v4
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex items-center justify-center px-4">
      <div className="text-center max-w-md mx-auto">
        {/* Avatar */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="w-full h-full rounded-2xl bg-gradient-to-br from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 flex items-center justify-center shadow-xl">
            <span className="text-5xl">😕</span>
          </div>
        </div>

        {/* Error Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 dark:bg-red-900/20 rounded-full mb-6">
          <span className="text-sm font-medium text-red-600 dark:text-red-400">
            ✦ Oops! 404
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
          Page not found.
        </h1>

        {/* Description */}
        <p className="text-gray-500 dark:text-gray-400 mb-8">
          The page is does not exist..
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/"
            className="flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            Back to Home
          </Link>
          <Link
            to="/#projects"
            className="flex items-center gap-2 px-6 py-3 border-2 border-gray-200 dark:border-gray-700 rounded-full font-medium text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:scale-105"
          >
            See My Work
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
}
