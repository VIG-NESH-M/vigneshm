// ============================================================
// HERO - Subtle Folio Exact Style
// ============================================================

import { useState } from "react";
import { Copy, Check, Plus } from "lucide-react";
import { personalInfo } from "@/config";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="pt-2 sm:pt-3 pb-1.5 sm:pb-2 px-3 sm:px-4">
      <div className="max-w-xl mx-auto">
        {/* Main Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-4 sm:mb-5 flex-wrap gap-2">
            {/* Role with dot */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                {personalInfo.role}
              </span>
            </div>
            {/* Available Badge */}
            {personalInfo.availability.status && (
              <div className="flex items-center gap-1.5 px-2 sm:px-2.5 py-1 bg-green-50 dark:bg-green-900/20 rounded-full">
                <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-[9px] sm:text-[10px] font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                  {personalInfo.availability.text}
                </span>
              </div>
            )}
          </div>

          {/* Content with Avatar */}
          <div className="flex items-start justify-between gap-4 sm:gap-6">
            {/* Text Content */}
            <div className="flex-1">
              {/* Name */}
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 leading-tight">
                I'm {personalInfo.name}
              </h1>

              {/* Description */}
              <p className="text-xs sm:text-sm text-gray-500 dark:text-neutral-400 mb-4 sm:mb-5 leading-relaxed">
                {personalInfo.description.short}
                <br className="hidden sm:block" />
                <span className="sm:hidden"> </span>
                {personalInfo.description.extended}
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-2">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-gray-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-[11px] sm:text-xs font-medium hover:opacity-90 transition-all"
                >
                  <Plus className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                  Hire Me
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 sm:py-2 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-full text-[11px] sm:text-xs font-medium text-gray-700 dark:text-neutral-300 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Avatar */}
            <div className="hidden xs:block shrink-0">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden shadow-lg ring-2 ring-gray-100 dark:ring-neutral-700">
                <img
                  src="/myImage.jpg"
                  alt={personalInfo.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
