// ============================================================
// PORTFOLIO PAGE - Subtle Folio Exact Style
// ============================================================

import { useDocumentTitle } from "@/hooks";
import Hero from "@/components/portfolio/Hero";
import Experience from "@/components/portfolio/Experience";
import Projects from "@/components/portfolio/Projects";
import Products from "@/components/portfolio/Products";
import Contact from "@/components/portfolio/Contact";
import Footer from "@/components/portfolio/Footer";
import Navbar from "@/components/portfolio/Navbar";

export default function Portfolio() {
  useDocumentTitle("Vignesh M | Full Stack Developer");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 text-gray-900 dark:text-neutral-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-8">
        <Hero />
        <Experience />
        <Projects />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
