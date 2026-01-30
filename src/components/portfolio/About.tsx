// ============================================================
// ABOUT - Clean Minimal Design with Lucide Icons
// ============================================================

import { Sparkles, Download, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { personalInfo, stats, skills } from "@/config";

export default function About() {
  return (
    <section
      id="about"
      className="py-1.5 sm:py-2 px-3 sm:px-4 bg-gray-50 dark:bg-neutral-900/50"
    >
      <div className="max-w-3xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 items-start">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
              <Sparkles className="w-3.5 sm:w-4 h-3.5 sm:h-4" /> About Me
            </h2>

            {personalInfo.description.about.map((paragraph, index) => (
              <p
                key={index}
                className={`text-xs sm:text-sm text-gray-600 dark:text-neutral-400 ${
                  index === personalInfo.description.about.length - 1
                    ? "mb-5 sm:mb-6"
                    : "mb-3 sm:mb-4"
                } leading-relaxed`}
              >
                {paragraph}
              </p>
            ))}

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3 sm:flex sm:flex-wrap sm:gap-4 md:gap-6 mb-5 sm:mb-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center sm:text-left">
                  <div className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-[10px] sm:text-xs text-gray-500 dark:text-neutral-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV */}
            <a
              href={personalInfo.resume}
              download
              className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-[11px] sm:text-xs font-medium hover:opacity-90 transition-opacity"
            >
              <Download className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
              Download Resume
            </a>
          </div>

          {/* Right Column - Skills */}
          <div className="mt-2 md:mt-0">
            <h3 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white mb-2 sm:mb-3">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap gap-1 sm:gap-1.5">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium cursor-default hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Experience Card */}
            <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-white dark:bg-neutral-800 rounded-xl border border-gray-100 dark:border-neutral-700">
              <div className="flex items-start gap-2 sm:gap-3 mb-2 sm:mb-3">
                <div className="w-7 h-7 sm:w-8 sm:h-8 bg-blue-500 rounded-lg flex items-center justify-center text-white shrink-0">
                  <Briefcase className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
                </div>
                <div className="min-w-0">
                  <h4 className="text-xs sm:text-sm font-semibold text-gray-900 dark:text-white">
                    Senior Full Stack Developer
                  </h4>
                  <p className="text-[10px] sm:text-xs text-gray-500 dark:text-neutral-400">
                    2023 - Present
                  </p>
                </div>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-600 dark:text-neutral-400 leading-relaxed">
                Leading development of scalable web applications and mentoring
                junior developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
