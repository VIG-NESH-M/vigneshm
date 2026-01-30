// ============================================================
// PORTFOLIO PAGE - Subtle Folio Exact Style
// ============================================================

import { useEffect } from "react";
import { useDocumentTitle } from "@/hooks";
import { useAppSelector } from "@/hooks";
import { selectTheme } from "@/store/selectors";
import Hero from "@/components/portfolio/Hero";
import Projects from "@/components/portfolio/Projects";
import Products from "@/components/portfolio/Products";
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
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 text-gray-900 dark:text-neutral-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-8">
        <Hero />
        <Projects />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
