// ============================================================
// HERO - Subtle Folio Style
// ============================================================

import { useState } from "react";
import { Copy, Check, ArrowRight } from "lucide-react";

export default function Hero() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@vigneshm.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 pt-24 pb-12"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            {/* Role Badge */}
            <div className="inline-block mb-6">
              <span className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Full Stack Developer
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-[1.1]">
              I'm Vignesh M
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-md leading-relaxed">
              Full Stack Developer from India. Currently building amazing web
              experiences and digital products.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:opacity-90 transition-all group"
              >
                Hire Me
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <button
                onClick={copyEmail}
                className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 font-medium hover:text-gray-900 dark:hover:text-white transition-colors"
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

          {/* Right - Avatar/Image */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Main Avatar */}
              <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl bg-gradient-to-br from-violet-100 via-purple-50 to-blue-100 dark:from-violet-900/30 dark:via-purple-900/20 dark:to-blue-900/30 overflow-hidden shadow-2xl">
                <div className="w-full h-full flex items-center justify-center">
                  {/* Placeholder Avatar - Replace with actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-violet-200 to-blue-200 dark:from-violet-800/50 dark:to-blue-800/50 flex items-center justify-center">
                    <span className="text-8xl sm:text-9xl font-bold text-white/80 dark:text-white/40">
                      V
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-400 rounded-full shadow-lg"></div>
              <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-blue-400 rounded-full shadow-lg"></div>
              <div className="absolute top-1/2 -left-6 w-4 h-4 bg-purple-400 rounded-full shadow-lg"></div>

              {/* Available Badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-100 dark:border-gray-800">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-gray-700 dark:text-gray-300">
                  Available for work
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
