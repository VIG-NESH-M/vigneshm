// ============================================================
// NOT FOUND PAGE (404)
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
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
          Sorry, the page you're looking for doesn't exist. Let me help you get
          back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link
            to="/"
            className="px-8 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
          >
            Back to Portfolio
          </Link>
          <button
            onClick={() => window.history.back()}
            className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-primary-900/20 font-medium rounded-lg transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
