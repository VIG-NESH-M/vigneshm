// ============================================================
// HOME PAGE
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

const features = [
  {
    title: "React 19",
    description:
      "Latest React with Concurrent Features and Server Components support",
    icon: "⚛️",
  },
  {
    title: "TypeScript",
    description: "Fully typed with strict TypeScript configuration",
    icon: "📘",
  },
  {
    title: "Vite 7",
    description: "Lightning fast HMR and optimized build with Vite",
    icon: "⚡",
  },
  {
    title: "Redux Toolkit",
    description: "State management with Redux Toolkit and typed hooks",
    icon: "🔄",
  },
  {
    title: "TanStack Query",
    description: "Powerful data fetching and caching with React Query",
    icon: "📊",
  },
  {
    title: "Tailwind CSS",
    description: "Utility-first CSS framework for rapid UI development",
    icon: "🎨",
  },
];

export default function HomePage() {
  useDocumentTitle("Home");

  return (
    <div className="max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center py-16 md:py-24">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
          Modern React{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-400">
            Starter Template
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8">
          A production-ready React application with TypeScript, Redux Toolkit,
          TanStack Query, React Router, and Tailwind CSS. Built with best
          practices and industry standards.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to={ROUTES.REGISTER}>
            <Button size="lg" className="w-full sm:w-auto">
              Get Started
            </Button>
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" size="lg" className="w-full sm:w-auto">
              View on GitHub
            </Button>
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12">
          Features
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <Card key={feature.title} hoverable>
              <CardHeader>
                <span className="text-4xl mb-2">{feature.icon}</span>
                <CardTitle>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <Card
          variant="elevated"
          className="bg-gradient-to-r from-primary-600 to-primary-700 text-white"
        >
          <div className="text-center py-8 px-4">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to build something amazing?
            </h2>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Start building your next project with this production-ready
              template. It includes everything you need to create a scalable
              React application.
            </p>
            <Link to={ROUTES.REGISTER}>
              <Button variant="secondary" size="lg">
                Create Your Account
              </Button>
            </Link>
          </div>
        </Card>
      </section>
    </div>
  );
}
