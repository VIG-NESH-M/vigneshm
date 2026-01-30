// ============================================================
// FOOTER - Subtle Folio Exact Style (Simple & Clean)
// ============================================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-400 dark:text-gray-500">
            © {currentYear} Vignesh M – Built with ❤️ using React & Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
