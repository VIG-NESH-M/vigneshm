// ============================================================
// NAVBAR - Subtle Folio Style
// ============================================================

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectTheme } from "@/store/selectors";
import { toggleTheme } from "@/store";
import { Sun, Moon, Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Products", href: "#products" },
];

export default function Navbar() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 hidden md:block">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl px-6 py-3 border border-gray-200/50 dark:border-gray-800/50 shadow-sm">
            {/* Nav Links */}
            <div className="flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Side */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => dispatch(toggleTheme())}
                className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                {theme === "dark" ? (
                  <>
                    <Sun className="w-4 h-4" />
                    Light Mode
                  </>
                ) : (
                  <>
                    <Moon className="w-4 h-4" />
                    Dark Mode
                  </>
                )}
              </button>
              <a
                href="#contact"
                className="px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 md:hidden p-4">
        <div className="flex items-center justify-between p-4 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-sm">
          <span className="text-lg font-bold text-gray-900 dark:text-white">
            Vignesh M
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-600 dark:text-gray-400"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 p-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-200/50 dark:border-gray-800/50 shadow-lg">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-3 px-4 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white font-medium rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-3 block w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl text-center font-medium"
            >
              Hire Me
            </a>
          </div>
        )}
      </nav>
    </>
  );
}
