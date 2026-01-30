// ============================================================
// NAVBAR - Clean Minimal Design
// ============================================================

import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { selectTheme } from "@/store/selectors";
import { toggleTheme } from "@/store";

const navIcons = [
  { name: "Home", href: "#home", icon: "🏠" },
  { name: "About", href: "#about", icon: "👤" },
  { name: "Projects", href: "#projects", icon: "💼" },
  { name: "Contact", href: "#contact", icon: "✉️" },
];

export default function Navbar() {
  const dispatch = useAppDispatch();
  const theme = useAppSelector(selectTheme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      {/* Desktop Navbar - Fixed Top */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 p-1.5 bg-white dark:bg-gray-900 rounded-full shadow-lg border border-gray-100 dark:border-gray-800">
        {navIcons.map((item) => (
          <a
            key={item.name}
            href={item.href}
            className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-lg"
            title={item.name}
          >
            {item.icon}
          </a>
        ))}
        <button
          onClick={() => dispatch(toggleTheme())}
          className="p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-lg"
          title="Toggle theme"
        >
          {theme === "dark" ? "☀️" : "🌙"}
        </button>
        <a
          href="#contact"
          className="ml-2 px-5 py-2.5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
        >
          Hire Me
        </a>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-4 left-4 right-4 z-50 md:hidden">
        <div className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800">
          <span className="text-lg font-bold text-gray-900 dark:text-white">VM</span>
          <div className="flex items-center gap-2">
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            >
              {isMobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="mt-2 p-4 bg-white dark:bg-gray-900 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-800 animate-fadeIn">
            {navIcons.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center gap-3 py-3 px-2 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
              >
                <span className="text-xl">{item.icon}</span>
                <span className="font-medium text-gray-700 dark:text-gray-300">{item.name}</span>
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
