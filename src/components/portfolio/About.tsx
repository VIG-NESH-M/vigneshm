// ============================================================
// ABOUT - Clean Minimal Design
// ============================================================

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
              <span>✦</span> About Me
            </h2>
            
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I'm a passionate Full Stack Developer with 5+ years of experience building 
              modern web applications. I specialize in React, TypeScript, and Node.js, 
              creating scalable and user-friendly digital experiences.
            </p>

            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">
              Based in India, I work with clients globally to bring their ideas to life. 
              I believe in clean code, great design, and continuous learning.
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
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
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
                <span
                  key={skill}
                  className="px-4 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Experience Card */}
            <div className="mt-8 p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center text-white text-lg">
                  💼
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
                Leading development of scalable web applications and mentoring junior developers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
