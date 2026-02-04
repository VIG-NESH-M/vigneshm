// ============================================================
// EXPERIENCE DETAIL PAGE - Subtle Folio Exact Style
// ============================================================

import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  Building2,
  MapPin,
  Calendar,
  Briefcase,
  CheckCircle2,
  Code2,
  Trophy,
} from "lucide-react";
import { useDocumentTitle } from "@/hooks";
import { experiences } from "@/config";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

export default function ExperienceDetailPage() {
  const { id } = useParams<{ id: string }>();
  const experience = experiences.find((e) => e.id === Number(id));

  useDocumentTitle(
    experience
      ? `${experience.title} at ${experience.company} | Vignesh M`
      : "Experience Not Found",
  );

  if (!experience) {
    return <Navigate to="/experience" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 text-gray-900 dark:text-neutral-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-8 px-3 sm:px-4">
        <div className="max-w-xl mx-auto">
          {/* Back Button */}
          <div className="mb-3">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-900 rounded-full shadow-sm border border-gray-100 dark:border-neutral-800 text-xs font-medium text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Experience
            </Link>
          </div>

          {/* Header Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800 mb-3">
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Icon */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 ${experience.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}
              >
                <experience.icon
                  className="w-7 sm:w-8 h-7 sm:h-8"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                  <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                    Experience
                  </span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">
                  {experience.title}
                </h1>
                <div className="flex items-center gap-1.5 mb-2">
                  <Building2 className="w-3.5 h-3.5 text-gray-500 dark:text-neutral-400" />
                  <span className="text-sm font-medium text-gray-700 dark:text-neutral-300">
                    {experience.company}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="text-[10px] sm:text-xs text-gray-500 dark:text-neutral-400 flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {experience.period}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 dark:text-neutral-400 flex items-center gap-1">
                    <MapPin className="w-3 h-3" /> {experience.location}
                  </span>
                  <span className="px-2 py-0.5 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 rounded-full text-[9px] sm:text-[10px] font-medium flex items-center gap-1">
                    <Briefcase className="w-3 h-3" /> {experience.type}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* About Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800 mb-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                About the Role
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
              {experience.longDescription}
            </p>
          </div>

          {/* Responsibilities Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800 mb-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                Key Responsibilities
              </span>
            </div>
            <div className="space-y-2">
              {experience.responsibilities.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800 mb-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                Key Achievements
              </span>
            </div>
            <div className="space-y-2">
              {experience.achievements.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <Trophy className="w-4 h-4 text-yellow-500 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                Technologies Used
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {experience.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 text-xs rounded-full flex items-center gap-1"
                >
                  <Code2 className="w-3 h-3" />
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
