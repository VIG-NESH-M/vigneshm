// ============================================================
// EXPERIENCE SECTION
// ============================================================

const experiences = [
  {
    id: 1,
    role: "Senior Full Stack Developer",
    company: "Tech Company",
    location: "Remote",
    duration: "2023 - Present",
    description: [
      "Lead development of scalable web applications using React and Node.js",
      "Architected microservices infrastructure handling 1M+ daily requests",
      "Mentored junior developers and conducted code reviews",
      "Improved application performance by 40% through optimization",
    ],
    current: true,
  },
  {
    id: 2,
    role: "Full Stack Developer",
    company: "Startup Inc.",
    location: "Bangalore, India",
    duration: "2021 - 2023",
    description: [
      "Built and maintained multiple React applications with TypeScript",
      "Developed RESTful APIs using Node.js and Express",
      "Implemented CI/CD pipelines reducing deployment time by 60%",
      "Collaborated with design team to implement responsive UI/UX",
    ],
    current: false,
  },
  {
    id: 3,
    role: "Frontend Developer",
    company: "Digital Agency",
    location: "Chennai, India",
    duration: "2019 - 2021",
    description: [
      "Created interactive web applications using React and Vue.js",
      "Optimized website performance achieving 95+ Lighthouse scores",
      "Integrated third-party APIs and payment gateways",
      "Worked closely with clients to gather requirements",
    ],
    current: false,
  },
];

const education = [
  {
    id: 1,
    degree: "Bachelor of Technology in Computer Science",
    institution: "Anna University",
    duration: "2015 - 2019",
    description:
      "Graduated with First Class Honors. Focused on Software Engineering and Web Technologies.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Work Experience */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="text-primary-600">💼</span> Work Experience
            </h3>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>

              {/* Experience Items */}
              <div className="space-y-8">
                {experiences.map((exp) => (
                  <div key={exp.id} className="relative pl-12">
                    {/* Timeline Dot */}
                    <div
                      className={`absolute left-2.5 top-1.5 w-3 h-3 rounded-full ${
                        exp.current
                          ? "bg-primary-600 ring-4 ring-primary-100 dark:ring-primary-900/50"
                          : "bg-gray-400 dark:bg-gray-600"
                      }`}
                    ></div>

                    <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                      <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                        <div>
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {exp.role}
                          </h4>
                          <p className="text-primary-600 dark:text-primary-400 font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-sm text-gray-500 dark:text-gray-400">
                            {exp.duration}
                          </span>
                          {exp.current && (
                            <span className="ml-2 px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs font-medium rounded-full">
                              Current
                            </span>
                          )}
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                        📍 {exp.location}
                      </p>
                      <ul className="space-y-2">
                        {exp.description.map((item, index) => (
                          <li
                            key={index}
                            className="text-gray-600 dark:text-gray-400 text-sm flex items-start gap-2"
                          >
                            <span className="text-primary-600 mt-1">▹</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 flex items-center gap-3">
              <span className="text-primary-600">🎓</span> Education
            </h3>

            <div className="space-y-6">
              {education.map((edu) => (
                <div
                  key={edu.id}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {edu.degree}
                  </h4>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {edu.institution}
                  </p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    📅 {edu.duration}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {edu.description}
                  </p>
                </div>
              ))}

              {/* Certifications */}
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                  🏆 Certifications
                </h4>
                <ul className="space-y-3">
                  <li className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    AWS Certified Developer
                  </li>
                  <li className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    Meta Front-End Developer
                  </li>
                  <li className="text-gray-600 dark:text-gray-400 text-sm flex items-center gap-2">
                    <span className="text-primary-600">✓</span>
                    Google Cloud Professional
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
