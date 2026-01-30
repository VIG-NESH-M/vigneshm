// ============================================================
// HERO - Clean Minimal Design (Like Brian Do)
// ============================================================

import { useState } from "react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@vigneshm.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12">
      <div className="max-w-2xl mx-auto text-center">
        {/* Available Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 rounded-full mb-8">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-green-700 dark:text-green-400">
            AVAILABLE FOR WORK
          </span>
        </div>

        {/* Role */}
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-4 flex items-center justify-center gap-2">
          <span>✦</span> Full Stack Developer
        </p>

        {/* Name */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 tracking-tight">
          I'm Vignesh M
        </h1>

        {/* Description */}
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed max-w-lg mx-auto">
          Full Stack Developer from India.
          <br />
          Currently building amazing web experiences.
        </p>

        {/* Avatar */}
        <div className="relative w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-10">
          <div className="w-full h-full rounded-3xl bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 flex items-center justify-center shadow-xl overflow-hidden">
            <span className="text-6xl sm:text-7xl">👨‍💻</span>
          </div>
          {/* Decorative dots */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full"></div>
          <div className="absolute -bottom-1 -left-1 w-4 h-4 bg-blue-400 rounded-full"></div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:opacity-90 transition-all hover:scale-105 shadow-lg"
          >
            <span>Hire Me</span>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <button
            onClick={copyEmail}
            className="flex items-center gap-2 px-6 py-3.5 border-2 border-gray-200 dark:border-gray-700 rounded-full font-medium text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:scale-105"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
            <span>{copied ? "Copied!" : "Copy Email"}</span>
          </button>
        </div>
      </div>
    </section>
  );
}
