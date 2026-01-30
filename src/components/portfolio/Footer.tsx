// ============================================================
// FOOTER - Subtle Folio Style
// ============================================================

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © {currentYear} Vignesh M – Portfolio
          </p>

          {/* Credits */}
          <p className="text-sm text-gray-400 dark:text-gray-500">
            Built with{" "}
            <a
              href="https://react.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              React
            </a>
            {" // "}
            <a
              href="https://vitejs.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Vite
            </a>
            {" // "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              Vercel
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
    </footer>
  );
}
