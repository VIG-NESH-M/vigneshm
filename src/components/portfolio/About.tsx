// ============================================================
// ABOUT - Clean Minimal Design with Lucide Icons
// ============================================================

import { Sparkles, Download, Briefcase } from "lucide-react";
import { Badge } from "@/components/ui/Badge";

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
];

const skills = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
];

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Info */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5" /> About Me
            </h2>

            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with 5+ years of experience
              building modern web applications. I specialize in React,
              TypeScript, and Node.js, creating scalable and user-friendly
              digital experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Based in India, I work with clients globally to bring their ideas
              to life. I believe in clean code, great design, and continuous
              learning.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-6 sm:gap-8 mb-8">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Download CV */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-5 py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-medium hover:opacity-90 transition-opacity"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Right Column - Skills */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
              Technologies I work with
            </h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="secondary"
                  className="px-4 py-2 rounded-full text-sm font-medium cursor-default hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* Experience Card */}
            <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white">
                  <Briefcase className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white">
                    Senior Full Stack Developer
                  </h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    2023 - Present
                  </p>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Leading development of scalable web applications and mentoring
                junior developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
