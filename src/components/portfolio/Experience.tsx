// ============================================================
// EXPERIENCE - Subtle Folio Exact Style (List with Icons)
// ============================================================

import { ChevronRight, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { experiences } from "@/config";

export default function Experience() {
  return (
    <section id="experience" className="py-1.5 sm:py-2 px-3 sm:px-4">
      <div className="max-w-xl mx-auto">
        {/* Main Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                Experience
              </span>
            </div>
            <Link
              to="/experience"
              className="flex items-center gap-1 px-2.5 sm:px-3 py-1 sm:py-1.5 bg-gray-100 dark:bg-neutral-800 rounded-full text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
            >
              View All
              <ArrowRight className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
            </Link>
          </div>

          {/* Experience List */}
          <div className="space-y-1">
            {experiences.map((exp) => (
              <div
                key={exp.id}
                className="group flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                {/* Icon */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 ${exp.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-md shrink-0`}
                >
                  <exp.icon
                    className="w-4 sm:w-5 h-4 sm:h-5"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">
                      {exp.title}
                    </h3>
                    <span className="text-[9px] sm:text-[10px] px-1.5 py-0.5 bg-gray-100 dark:bg-neutral-800 text-gray-500 dark:text-neutral-400 rounded-full whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-neutral-400 truncate">
                    {exp.company} • {exp.description}
                  </p>
                </div>

                {/* Arrow */}
                <ChevronRight className="w-3.5 sm:w-4 h-3.5 sm:h-4 text-gray-300 dark:text-neutral-600 group-hover:text-gray-400 dark:group-hover:text-neutral-500 transition-colors shrink-0" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
