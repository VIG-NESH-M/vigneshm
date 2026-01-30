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
    <section id="projects" className="py-8 px-4">
      <div className="max-w-xl mx-auto">
        {/* Main Card */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Projects
              </span>
            </div>
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 px-4 py-2 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              View All
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Projects List */}
          <div className="space-y-2">
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${project.iconBg} rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}
                >
                  <project.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {project.name}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronRight className="w-5 h-5 text-gray-300 dark:text-gray-600 group-hover:text-gray-400 dark:group-hover:text-gray-500 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
