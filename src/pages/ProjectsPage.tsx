// ============================================================
// PROJECTS PAGE - Full Page View
// ============================================================

import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { projects, personalInfo } from "@/config";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-neutral-400" />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Projects
            </h1>
            <p className="text-xs text-gray-500 dark:text-neutral-400">
              {personalInfo.name}'s Work
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Intro */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            My Projects
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl">
            A collection of projects I've worked on, showcasing my expertise in
            full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-4 sm:gap-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-neutral-900 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-neutral-800 hover:shadow-md hover:border-gray-200 dark:hover:border-neutral-700 transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${project.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}
                >
                  <project.icon
                    className="w-6 sm:w-7 h-6 sm:h-7"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {project.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 dark:text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <p className="text-sm text-gray-500 dark:text-neutral-400 mb-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.description.split(", ").map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {projects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-neutral-400">
              No projects to display yet.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
