// ============================================================
// EXPERIENCE PAGE - Full Page View
// ============================================================

import { Link } from "react-router-dom";
import { ArrowLeft, Calendar, Building2 } from "lucide-react";
import { experiences, personalInfo } from "@/config";

export default function ExperiencePage() {
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
              Experience
            </h1>
            <p className="text-xs text-gray-500 dark:text-neutral-400">
              {personalInfo.name}'s Career Journey
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Intro */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            Work Experience
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl">
            My professional journey and the roles I've held throughout my
            career in software development.
          </p>
        </div>

        {/* Experience Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="relative bg-white dark:bg-neutral-900 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-neutral-800"
            >
              {/* Timeline connector */}
              {index < experiences.length - 1 && (
                <div className="absolute left-8 sm:left-9 top-full w-0.5 h-6 bg-gray-200 dark:bg-neutral-700" />
              )}

              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 sm:w-14 sm:h-14 ${exp.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}
                >
                  <exp.icon
                    className="w-6 sm:w-7 h-6 sm:h-7"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-base sm:text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <span className="px-2.5 py-1 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 text-xs font-medium rounded-full">
                      {exp.period}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 mb-3">
                    <Building2 className="w-4 h-4 text-gray-400 dark:text-neutral-500" />
                    <span className="text-sm font-medium text-gray-700 dark:text-neutral-300">
                      {exp.company}
                    </span>
                  </div>

                  <p className="text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {experiences.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-neutral-400">
              No experience to display yet.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
