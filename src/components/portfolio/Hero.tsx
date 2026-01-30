// ============================================================
// HERO - Clean Minimal Design with Lucide Icons
// ============================================================

import { useState } from "react";
import { Sparkles, ArrowRight, Copy, Check, Code2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

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
      className="min-h-screen flex items-center justify-center px-4 pt-24 pb-12"
    >
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
          <Sparkles className="w-4 h-4" /> Full Stack Developer
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
            <Code2 className="w-16 h-16 sm:w-20 sm:h-20 text-gray-700 dark:text-gray-300" />
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
            <ArrowRight className="w-4 h-4" />
          </a>
          <Button
            variant="outline"
            onClick={copyEmail}
            className="rounded-full px-6 py-3.5 hover:scale-105 transition-transform"
          >
            {copied ? (
              <Check className="w-4 h-4" />
            ) : (
              <Copy className="w-4 h-4" />
            )}
            <span>{copied ? "Copied!" : "Copy Email"}</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
