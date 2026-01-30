// ============================================================
// HERO - Subtle Folio Exact Style
// ============================================================

import { useState } from "react";
import { Copy, Check, Plus } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@vigneshm.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="pt-28 pb-8 px-4">
      <div className="max-w-xl mx-auto">
        {/* Main Card */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 shadow-sm border border-gray-100 dark:border-gray-800">
          {/* Header Row */}
          <div className="flex items-center justify-between mb-8">
            {/* Role with dot */}
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Full Stack Developer
              </span>
            </div>
            {/* Available Badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-xs font-semibold text-green-600 dark:text-green-400 uppercase tracking-wide">
                Available for Work
              </span>
            </div>
          </div>

          {/* Content with Avatar */}
          <div className="flex items-start justify-between gap-6">
            {/* Text Content */}
            <div className="flex-1">
              {/* Name */}
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
                I'm Vignesh M
              </h1>

              {/* Description */}
              <p className="text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                Full Stack Developer from India.
                <br />
                Currently building amazing web experiences.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:opacity-90 transition-all"
                >
                  <Plus className="w-4 h-4" />
                  Hire Me
                </a>
                <button
                  onClick={copyEmail}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 transition-all"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-green-500" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Email
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Avatar */}
            <div className="hidden sm:block shrink-0">
              <div className="w-28 h-28 rounded-full bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-100 dark:from-amber-900/30 dark:via-orange-900/30 dark:to-yellow-900/30 flex items-center justify-center overflow-hidden shadow-lg">
                <span className="text-5xl">👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
