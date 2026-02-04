// ============================================================
// PROJECTS PAGE - Subtle Folio Exact Style
// ============================================================

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { useDocumentTitle, useAppSelector } from "@/hooks";
import { selectTheme } from "@/store/selectors";
import { projects } from "@/config";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

export default function ProjectsPage() {
  useDocumentTitle("Projects | Vignesh M");
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
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                Projects
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              My Projects
            </h1>
            <p className="text-gray-500 dark:text-neutral-400 text-xs sm:text-sm">
              A collection of projects I've worked on, showcasing my expertise
              in full-stack development, UI/UX design, and problem-solving.
            </p>
          </div>

          {/* Projects List Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800">
            <div className="space-y-1">
              {projects.map((project) => (
                <a
                  key={project.id}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${project.iconBg} rounded-xl flex items-center justify-center text-white shadow-md shrink-0`}
                  >
                    <project.icon
                      className="w-5 sm:w-6 h-5 sm:h-6"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                    <p className="text-[10px] sm:text-xs text-gray-500 dark:text-neutral-400 truncate">
                      {project.description}
                    </p>
                  </div>

                  {/* External Link */}
                  <ExternalLink className="w-4 h-4 text-gray-300 dark:text-neutral-600 group-hover:text-gray-400 dark:group-hover:text-neutral-500 transition-colors shrink-0" />
                </a>
              ))}
            </div>

            {/* Empty State */}
            {projects.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-neutral-400 text-sm">
                  No projects to display yet.
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
