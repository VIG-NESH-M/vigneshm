// ============================================================
// FOOTER - Subtle Folio Exact Style (Simple & Clean)
// ============================================================

import { personalInfo } from "@/config";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 sm:py-8 px-3 sm:px-4">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <p className="text-[10px] sm:text-xs text-gray-400 dark:text-gray-500">
            © {currentYear} {personalInfo.name} – Built with ❤️ using React &
            Vite
          </p>
        </div>
      </div>
    </footer>
  );
}
