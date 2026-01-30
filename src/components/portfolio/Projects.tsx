// ============================================================
// PROJECTS - Clean Card Design with Lucide Icons
// ============================================================

import {
  ShoppingCart,
  CheckCircle,
  BarChart3,
  MessageCircle,
  Bot,
  Sparkles,
  ArrowRight,
  ChevronRight,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  icon: LucideIcon;
  color: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Full Stack Development, UI Design",
    icon: ShoppingCart,
    color: "bg-blue-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 2,
    name: "Task Manager App",
    description: "React, TypeScript, Node.js",
    icon: CheckCircle,
    color: "bg-purple-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    description: "Data Visualization, API Development",
    icon: BarChart3,
    color: "bg-green-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 4,
    name: "Social Platform",
    description: "Real-time, WebSocket, MongoDB",
    icon: MessageCircle,
    color: "bg-orange-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 5,
    name: "AI Chat Application",
    description: "OpenAI Integration, Python",
    icon: Bot,
    color: "bg-pink-500",
    url: "https://github.com/VIG-NESH-M",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
            <Sparkles className="w-5 h-5" /> Projects
          </h2>
          <a
            href="https://github.com/VIG-NESH-M"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Projects List */}
        <div className="space-y-3">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 p-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-gray-200 dark:hover:border-gray-700 hover:shadow-lg transition-all"
            >
              {/* Icon */}
              <div
                className={`w-12 h-12 ${project.color} rounded-xl flex items-center justify-center text-white shadow-lg shrink-0`}
              >
                <project.icon className="w-6 h-6" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-gray-900 dark:text-white truncate">
                  {project.name}
                </h3>
                <p className="text-sm text-gray-500 dark:text-gray-400 truncate">
                  {project.description}
                </p>
              </div>

              {/* Arrow */}
              <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:translate-x-1 transition-all shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
