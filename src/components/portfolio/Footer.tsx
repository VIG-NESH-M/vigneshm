// ============================================================
// FOOTER - Clean Minimal Design with Lucide Icons
// ============================================================

import { Twitter, Instagram, Github, Linkedin, Heart } from "lucide-react";
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400 text-center sm:text-left">
            © {currentYear} Vignesh M · All rights reserved
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-400 hidden sm:inline">
              Follow Me
            </span>
            <div className="flex gap-2">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  title={link.name}
                >
                  <link.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Credit */}
        <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center gap-1">
          Built with React + TypeScript · Designed with{" "}
          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
        </p>
      </div>
    </footer>
  );
}
