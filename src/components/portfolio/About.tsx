// ============================================================
// ABOUT SECTION
// ============================================================

export default function About() {
  return (
    <section id="about" className="py-20 px-4 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Info Card */}
          <div className="relative">
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                  <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    5+
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Years Experience
                  </p>
                </div>
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                  <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    50+
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Projects Completed
                  </p>
                </div>
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                  <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    30+
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Happy Clients
                  </p>
                </div>
                <div className="text-center p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl">
                  <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">
                    10+
                  </span>
                  <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                    Technologies
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Text Content */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              I'm Vignesh M, a Full Stack Developer based in India
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
              With over 5 years of experience in software development, I
              specialize in building modern web applications using cutting-edge
              technologies. My journey in tech started with a passion for
              problem-solving and has evolved into expertise across the full
              development stack.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              I believe in writing clean, maintainable code and creating
              intuitive user experiences. Whether it's a startup MVP or an
              enterprise application, I bring the same level of dedication and
              attention to detail to every project.
            </p>

            {/* Info List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="flex items-center gap-3">
                <span className="text-primary-600 dark:text-primary-400">
                  📍
                </span>
                <span className="text-gray-700 dark:text-gray-300">India</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-600 dark:text-primary-400">
                  💼
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Available for Work
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-600 dark:text-primary-400">
                  🎓
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  B.Tech in Computer Science
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-primary-600 dark:text-primary-400">
                  🌐
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Remote Friendly
                </span>
              </div>
            </div>

            {/* Download CV Button */}
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
