// ============================================================
// HOME PAGE - SEO Optimized for VigneshM
// ============================================================

import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/hooks";
import {
  Button,
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui";
import { ROUTES } from "@/config/constants";

const skills = [
  {
    title: "React & TypeScript",
    description:
      "Building modern, type-safe applications with React 19 and TypeScript",
    icon: "⚛️",
  },
  {
    title: "Node.js & Python",
    description: "Backend development with Express, Django, and RESTful APIs",
    icon: "🔧",
  },
  {
    title: "Cloud & DevOps",
    description: "AWS, Docker, Kubernetes, and CI/CD pipeline expertise",
    icon: "☁️",
  },
  {
    title: "Database Design",
    description: "PostgreSQL, MongoDB, Redis for scalable data solutions",
    icon: "🗃️",
  },
  {
    title: "UI/UX Design",
    description: "Responsive designs with Tailwind CSS and modern frameworks",
    icon: "🎨",
  },
  {
    title: "Performance",
    description: "Code splitting, lazy loading, and optimization techniques",
    icon: "⚡",
  },
];

export default function HomePage() {
  useDocumentTitle("Vignesh M - Full Stack Developer | vigneshm.me");

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section - SEO Optimized */}
      <section
        className="text-center py-16 md:py-24"
        aria-labelledby="hero-heading"
      >
        <h1
          id="hero-heading"
          className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
        >
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
            Vignesh M
          </span>
        </h1>
        <p className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4">
          Full Stack Developer & Software Engineer
        </p>
        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          I'm VigneshM, a passionate developer specializing in React,
          TypeScript, Node.js, and cloud technologies. I build scalable web
          applications and deliver high-quality solutions for businesses
          worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={ROUTES.DASHBOARD}>
            <Button size="lg" className="w-full sm:w-auto">
              View My Work
            </Button>
          </Link>
          <a
            href="https://github.com/VIG-NESH-M"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View Vignesh M's GitHub profile"
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              GitHub Profile
            </Button>
          </a>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16" aria-labelledby="skills-heading">
        <h2
          id="skills-heading"
          className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-4"
        >
          Skills & Expertise
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          As a Full Stack Developer, I bring comprehensive expertise across the
          entire development stack
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => (
            <Card key={skill.title} hoverable>
              <CardHeader>
                <span className="text-4xl mb-2" role="img" aria-hidden="true">
                  {skill.icon}
                </span>
                <CardTitle>{skill.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{skill.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-16" aria-labelledby="about-heading">
        <Card variant="elevated" className="p-8">
          <h2
            id="about-heading"
            className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Vignesh M
          </h2>
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I'm Vignesh M (also known as VigneshM), a dedicated Full Stack
              Developer with years of experience building web applications. My
              journey in software development has equipped me with a deep
              understanding of both frontend and backend technologies.
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              I specialize in creating responsive, user-friendly interfaces
              using React and TypeScript, while also architecting robust backend
              systems with Node.js and Python. My expertise extends to database
              design, cloud deployment, and DevOps practices.
            </p>
            <p className="text-gray-600 dark:text-gray-400">
              Whether you're looking for a freelance developer or a full-time
              team member, I'm here to help bring your ideas to life. Let's
              build something amazing together!
            </p>
          </div>
        </Card>
      </section>

      {/* CTA Section */}
      <section className="py-16" aria-labelledby="cta-heading">
        <Card
          variant="elevated"
          className="bg-gradient-to-r from-primary-600 to-primary-700 text-white"
        >
          <div className="text-center py-8 px-4">
            <h2
              id="cta-heading"
              className="text-2xl md:text-3xl font-bold mb-4"
            >
              Let's Work Together
            </h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Looking to hire a skilled Full Stack Developer? I'm available for
              freelance projects, consulting, and full-time opportunities. Get
              in touch today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={ROUTES.PROFILE}>
                <Button variant="secondary" size="lg">
                  Contact Me
                </Button>
              </Link>
              <a
                href="https://linkedin.com/in/vigneshm"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Connect with Vignesh M on LinkedIn"
              >
                <Button
                  variant="ghost"
                  size="lg"
                  className="text-white border-white hover:bg-white/10"
                >
                  LinkedIn Profile
                </Button>
              </a>
            </div>
          </div>
        </Card>
      </section>
    </div>
  );
}
