// ============================================================
// GITHUB CALENDAR DEMO PAGE
// ============================================================

import { ArrowLeft, Github, Calendar, Activity } from "lucide-react";
import { Link } from "react-router-dom";
import { GitHubCalendar } from "@/components/ui";
import type { ContributionDay } from "@/components/ui";

// Sample contribution data spanning the past year
const contributionData: ContributionDay[] = [
  { date: "2025-10-13", count: 3 },
  { date: "2025-05-12", count: 1 },
  { date: "2025-09-11", count: 2 },
  { date: "2025-09-10", count: 5 },
  { date: "2024-09-13", count: 2 },
  { date: "2024-09-15", count: 0 },
  { date: "2024-09-20", count: 4 },
  { date: "2024-10-01", count: 1 },
  { date: "2024-10-05", count: 3 },
  { date: "2024-10-10", count: 0 },
  { date: "2024-10-15", count: 2 },
  { date: "2024-10-20", count: 5 },
  { date: "2024-11-02", count: 1 },
  { date: "2024-11-07", count: 3 },
  { date: "2024-11-12", count: 4 },
  { date: "2024-11-18", count: 0 },
  { date: "2024-11-25", count: 2 },
  { date: "2024-12-01", count: 3 },
  { date: "2024-12-05", count: 1 },
  { date: "2024-12-10", count: 0 },
  { date: "2024-12-15", count: 4 },
  { date: "2024-12-20", count: 2 },
  { date: "2024-12-25", count: 0 },
  { date: "2025-01-03", count: 3 },
  { date: "2025-01-08", count: 1 },
  { date: "2025-01-15", count: 5 },
  { date: "2025-01-20", count: 2 },
  { date: "2025-01-25", count: 0 },
  { date: "2025-02-01", count: 4 },
  { date: "2025-02-07", count: 3 },
  { date: "2025-02-12", count: 1 },
  { date: "2025-02-18", count: 0 },
  { date: "2025-02-25", count: 2 },
  { date: "2025-03-02", count: 5 },
  { date: "2025-03-08", count: 3 },
  { date: "2025-03-15", count: 1 },
  { date: "2025-03-20", count: 0 },
  { date: "2025-03-25", count: 4 },
  { date: "2025-04-01", count: 2 },
  { date: "2025-04-07", count: 0 },
  { date: "2025-04-12", count: 3 },
  { date: "2025-04-18", count: 1 },
  { date: "2025-04-25", count: 5 },
  { date: "2025-05-01", count: 2 },
  { date: "2025-05-07", count: 0 },
  { date: "2025-06-01", count: 4 },
  { date: "2025-06-10", count: 3 },
  { date: "2025-06-15", count: 1 },
  { date: "2025-07-01", count: 0 },
  { date: "2025-07-10", count: 2 },
  { date: "2025-08-01", count: 5 },
  { date: "2025-08-15", count: 3 },
  { date: "2025-09-01", count: 1 },
];

// Custom color themes for demonstration
const blueTheme = ["#ebedf0", "#c6e6ff", "#79c0ff", "#388bfd", "#1f6feb"];
const purpleTheme = ["#ebedf0", "#e0c3fc", "#c084fc", "#a855f7", "#7c3aed"];
const orangeTheme = ["#ebedf0", "#fed7aa", "#fdba74", "#fb923c", "#ea580c"];

export default function GitHubCalendarDemo() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header */}
      <header className="border-b border-gray-700/50 bg-gray-900/80 backdrop-blur-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Portfolio</span>
            </Link>
            <div className="flex items-center gap-2">
              <Github className="w-6 h-6 text-emerald-400" />
              <span className="font-semibold">GitHub Calendar Demo</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-full mb-6">
            <Activity className="w-4 h-4 text-emerald-400" />
            <span className="text-sm text-emerald-400">UI Component Demo</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            GitHub Calendar Component
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A customizable contribution calendar component inspired by GitHub's
            activity graph. Perfect for showcasing coding activity, habits, or
            any time-series data.
          </p>
        </div>

        {/* Default Theme */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-emerald-400" />
            <h2 className="text-2xl font-semibold">
              Default Theme (GitHub Green)
            </h2>
          </div>
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 overflow-x-auto">
            <GitHubCalendar data={contributionData} />
          </div>
        </section>

        {/* Blue Theme */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-blue-400" />
            <h2 className="text-2xl font-semibold">Blue Theme</h2>
          </div>
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 overflow-x-auto">
            <GitHubCalendar data={contributionData} colors={blueTheme} />
          </div>
        </section>

        {/* Purple Theme */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-purple-400" />
            <h2 className="text-2xl font-semibold">Purple Theme</h2>
          </div>
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 overflow-x-auto">
            <GitHubCalendar data={contributionData} colors={purpleTheme} />
          </div>
        </section>

        {/* Orange Theme */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Calendar className="w-5 h-5 text-orange-400" />
            <h2 className="text-2xl font-semibold">Orange Theme</h2>
          </div>
          <div className="bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 overflow-x-auto">
            <GitHubCalendar data={contributionData} colors={orangeTheme} />
          </div>
        </section>

        {/* Usage Section */}
        <section className="bg-gray-800/30 border border-gray-700/50 rounded-xl p-8">
          <h2 className="text-2xl font-semibold mb-6">Component Props</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-3 px-4 text-gray-400 font-medium">Prop</th>
                  <th className="py-3 px-4 text-gray-400 font-medium">Type</th>
                  <th className="py-3 px-4 text-gray-400 font-medium">
                    Description
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-700/50">
                  <td className="py-3 px-4 font-mono text-emerald-400">data</td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-300">
                    ContributionDay[]
                  </td>
                  <td className="py-3 px-4 text-gray-400">
                    Array of objects with date (ISO string) and count (number)
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-mono text-emerald-400">
                    colors
                  </td>
                  <td className="py-3 px-4 font-mono text-sm text-gray-300">
                    string[]
                  </td>
                  <td className="py-3 px-4 text-gray-400">
                    Optional 5-color array for the intensity scale (default:
                    GitHub greens)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-700/50 mt-12 py-8 text-center text-gray-500">
        <p>Built with React, TypeScript, and Tailwind CSS</p>
      </footer>
    </div>
  );
}
