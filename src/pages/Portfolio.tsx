// ============================================================
// PORTFOLIO PAGE - Main Single Page Portfolio
// ============================================================

import { useEffect } from "react";
import { useDocumentTitle } from "@/hooks";
import { useAppSelector } from "@/hooks";
import { selectTheme } from "@/store/selectors";
import Hero from "@/components/portfolio/Hero";
import About from "@/components/portfolio/About";
import Skills from "@/components/portfolio/Skills";
import Projects from "@/components/portfolio/Projects";
import Experience from "@/components/portfolio/Experience";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Navbar from "@/components/portfolio/Navbar";

export default function Portfolio() {
  useDocumentTitle("Vignesh M | Full Stack Developer");
  const theme = useAppSelector(selectTheme);

  // Apply dark class to html element for Tailwind CSS v4
  useEffect(() => {
    const html = document.documentElement;
    if (theme === "dark") {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
