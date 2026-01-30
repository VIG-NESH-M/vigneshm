// ============================================================
// PROJECTS - Subtle Folio Style with Card Images
// ============================================================

import { ArrowUpRight } from "lucide-react";

interface Project {
  id: number;
  name: string;
  description: string;
  gradient: string;
  url: string;
}

const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Full Stack Development, UI Design",
    gradient: "from-blue-400 via-blue-500 to-indigo-600",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 2,
    name: "Task Manager App",
    description: "React, TypeScript, Node.js",
    gradient: "from-purple-400 via-purple-500 to-pink-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    description: "Data Visualization, API Development",
    gradient: "from-emerald-400 via-teal-500 to-cyan-500",
    url: "https://github.com/VIG-NESH-M",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Projects
          </h2>
          <a
            href="https://github.com/VIG-NESH-M"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            View All
          </a>
        </div>

        {/* Projects Grid */}
        <div className="space-y-6">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 transition-all">
                {/* Image/Gradient Area */}
                <div
                  className={`h-64 sm:h-80 bg-gradient-to-br ${project.gradient} relative`}
                >
                  {/* Overlay Pattern */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1)_0%,transparent_60%)]"></div>

                  {/* Arrow Icon */}
                  <div className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-5 h-5 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                      {project.name}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all shrink-0" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
