// ============================================================
// NAVBAR - Subtle Folio Exact Style (Icon-only Pill)
// ============================================================

import { useState, useEffect } from "react";
import { Home, User, Briefcase, Lock, Plus, Sun, Moon } from "lucide-react";

const navIcons = [
  { name: "Home", href: "#home", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Projects", href: "#projects", icon: Briefcase },
  { name: "Products", href: "#products", icon: Lock },
];

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("Home");
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Check for saved theme or system preference
    const savedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle("dark", savedTheme === "dark");
    } else if (systemPrefersDark) {
      setTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  return (
    <>
      {/* Desktop Navbar - Centered Floating Pill */}
      <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="flex items-center gap-1 p-1.5 bg-white dark:bg-neutral-900 rounded-full shadow-md border border-gray-100 dark:border-neutral-800">
          {/* Nav Icons */}
          {navIcons.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setActiveNav(item.name)}
              className={`p-2.5 rounded-full transition-all ${
                activeNav === item.name
                  ? "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white"
                  : "text-gray-500 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 hover:text-gray-700 dark:hover:text-neutral-300"
              }`}
              title={item.name}
            >
              <item.icon className="w-4 h-4" strokeWidth={1.5} />
            </a>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2.5 rounded-full transition-all text-gray-500 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 hover:text-gray-700 dark:hover:text-neutral-300"
            title={
              theme === "light" ? "Switch to dark mode" : "Switch to light mode"
            }
          >
            {theme === "light" ? (
              <Moon className="w-4 h-4" strokeWidth={1.5} />
            ) : (
              <Sun className="w-4 h-4" strokeWidth={1.5} />
            )}
          </button>

          {/* Hire Me Button */}
          <a
            href="#contact"
            className="ml-0.5 flex items-center gap-1.5 px-4 py-2 bg-gray-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-xs font-medium hover:opacity-90 transition-opacity"
          >
            <Plus className="w-3.5 h-3.5" />
            Hire Me
          </a>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="fixed top-3 left-3 right-3 z-50 md:hidden">
        <div className="flex items-center justify-between p-2 bg-white dark:bg-neutral-900 rounded-xl shadow-md border border-gray-100 dark:border-neutral-800">
          <div className="flex items-center gap-0.5">
            {navIcons.slice(0, 4).map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setActiveNav(item.name)}
                className={`p-2 rounded-full transition-all ${
                  activeNav === item.name
                    ? "bg-gray-100 dark:bg-neutral-800 text-gray-900 dark:text-white"
                    : "text-gray-500 dark:text-neutral-400"
                }`}
              >
                <item.icon className="w-4 h-4" strokeWidth={1.5} />
              </a>
            ))}
            {/* Mobile Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full transition-all text-gray-500 dark:text-neutral-400"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4" strokeWidth={1.5} />
              ) : (
                <Sun className="w-4 h-4" strokeWidth={1.5} />
              )}
            </button>
          </div>
          <a
            href="#contact"
            className="flex items-center gap-1 px-3 py-1.5 bg-gray-900 dark:bg-white text-white dark:text-neutral-900 rounded-full text-xs font-medium"
          >
            <Plus className="w-3.5 h-3.5" />
            Hire Me
          </a>
        </div>
      </nav>
    </>
  );
}
