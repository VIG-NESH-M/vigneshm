// ============================================================
// CONTACT - Subtle Folio "Let's Work Together" Style
// ============================================================

import { useState } from "react";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
  ArrowRight,
  Copy,
  Check,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
}

const socialLinks: SocialLink[] = [
  { name: "X", icon: Twitter, url: "https://twitter.com/vigneshm" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/vigneshm" },
  { name: "GitHub", icon: Github, url: "https://github.com/VIG-NESH-M" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/vigneshm" },
];

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("contact@vigneshm.me");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          {/* Main Heading */}
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            Let's work together.
          </h2>

          {/* Description */}
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10">
            Creating user experience and visually appealing designs
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <a
              href="mailto:contact@vigneshm.me"
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

          {/* Follow Me Section */}
          <div>
            <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
              Follow Me
            </h3>
            <div className="flex items-center justify-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:border-gray-300 dark:hover:border-gray-600 hover:scale-110 transition-all"
                  title={link.name}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
