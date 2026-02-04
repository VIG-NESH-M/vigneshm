// ============================================================
// EXPERIENCE PAGE - Subtle Folio Exact Style
// ============================================================

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Building2 } from "lucide-react";
import { useDocumentTitle, useAppSelector } from "@/hooks";
import { selectTheme } from "@/store/selectors";
import { experiences } from "@/config";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

export default function ExperiencePage() {
  useDocumentTitle("Experience | Vignesh M");
  const theme = useAppSelector(selectTheme);

  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 text-gray-900 dark:text-neutral-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-8 px-3 sm:px-4">
        <div className="max-w-xl mx-auto">
          {/* Back Button */}
          <div className="mb-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-900 rounded-full shadow-sm border border-gray-100 dark:border-neutral-800 text-xs font-medium text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
          </div>

          {/* Header Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800 mb-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                Experience
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              Work Experience
            </h1>
            <p className="text-gray-500 dark:text-neutral-400 text-xs sm:text-sm">
              My professional journey and the roles I've held throughout my
              career in software development.
            </p>
          </div>

          {/* Experience List Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800">
            <div className="space-y-3">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="p-3 sm:p-4 rounded-xl bg-gray-50 dark:bg-neutral-800/50"
                >
                  <div className="flex items-start gap-3">
                    {/* Icon */}
                    <div
                      className={`w-10 h-10 sm:w-12 sm:h-12 ${exp.iconBg} rounded-xl flex items-center justify-center text-white shadow-md shrink-0`}
                    >
                      <exp.icon
                        className="w-5 sm:w-6 h-5 sm:h-6"
                        strokeWidth={1.5}
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 min-w-0">
                      <div className="flex flex-wrap items-center gap-2 mb-1">
                        <h3 className="text-sm sm:text-base font-semibold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-[9px] sm:text-[10px] font-medium rounded-full">
                          {exp.period}
                        </span>
                      </div>

                      <div className="flex items-center gap-1.5 mb-2">
                        <Building2 className="w-3.5 h-3.5 text-gray-400 dark:text-neutral-500" />
                        <span className="text-xs font-medium text-gray-600 dark:text-neutral-300">
                          {exp.company}
                        </span>
                      </div>

                      <p className="text-[11px] sm:text-xs text-gray-500 dark:text-neutral-400 leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            {experiences.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-neutral-400 text-sm">
                  No experience to display yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
