// ============================================================
// NOT FOUND PAGE (404)
// ============================================================

import { Link } from "react-router-dom";
import { useDocumentTitle } from "@/hooks";
import { Button } from "@/components/ui";
import { ROUTES } from "@/config/constants";

export default function NotFoundPage() {
  useDocumentTitle("Page Not Found");

  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-primary-600 dark:text-primary-400">
          404
        </h1>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-4">
          Page Not Found
        </h2>
        <p className="text-gray-500 dark:text-gray-400 mt-2 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. Perhaps you've
          mistyped the URL? Be sure to check your spelling.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Link to={ROUTES.HOME}>
            <Button size="lg">Go to Home</Button>
          </Link>
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.history.back()}
          >
            Go Back
          </Button>
        </div>
      </div>
    </div>
  );
}
