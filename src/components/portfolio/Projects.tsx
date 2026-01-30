// ============================================================
// PROJECTS - Subtle Folio Exact Style (List with Icons)
// ============================================================

import { ChevronRight, ArrowRight } from "lucide-react";
import { projects, socialLinks } from "@/config";

// Get GitHub URL from social links
const githubUrl =
  socialLinks.find((link) => link.name === "GitHub")?.url ||
  "https://github.com";

export default function Projects() {
  return (
    <section id="projects" className="py-6 sm:py-8 px-3 sm:px-4">
      <div className="max-w-xl mx-auto">
        {/* Main Card */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-gray-800">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-gray-400 uppercase tracking-wider">
                Projects
              </span>
            </div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 dark:bg-gray-800 rounded-full text-[10px] sm:text-xs font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              View All
              <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </a>
          </div>

          {/* Projects List */}
          <div className="space-y-1">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                {/* Icon */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 ${project.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-md shrink-0`}
                >
                  <project.icon
                    className="w-4 sm:w-5 h-4 sm:h-5"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">
                    {project.name}
                  </h3>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-gray-400 truncate">
                    {project.description}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-400 dark:group-hover:text-gray-500 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
