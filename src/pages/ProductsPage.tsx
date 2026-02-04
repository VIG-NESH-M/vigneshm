// ============================================================
// PRODUCTS PAGE - Subtle Folio Exact Style
// ============================================================

import { Link } from "react-router-dom";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { useDocumentTitle } from "@/hooks";
import { products } from "@/config";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

export default function ProductsPage() {
  useDocumentTitle("Products | Vignesh M");

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 text-gray-900 dark:text-neutral-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-8 px-3 sm:px-4">
        <div className="max-w-xl mx-auto">
          {/* Back Button */}
          <div className="mb-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-900 rounded-full shadow-sm border border-gray-100 dark:border-neutral-800 text-xs font-medium text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Home
            </Link>
          </div>

          {/* Header Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800 mb-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                Products
              </span>
            </div>
            <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
              Explore My Products
            </h1>
            <p className="text-gray-500 dark:text-neutral-400 text-xs sm:text-sm">
              Open source tools, templates, and resources I've created for the
              developer community. Feel free to use them in your projects!
            </p>
          </div>

          {/* Products List Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800">
            <div className="space-y-1">
              {products.map((product) => (
                <Link
                  key={product.id}
                  to={`/products/${product.id}`}
                  className="group flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors"
                >
                  {/* Icon */}
                  <div
                    className={`w-10 h-10 sm:w-12 sm:h-12 ${product.iconBg} rounded-xl flex items-center justify-center text-white shadow-md shrink-0`}
                  >
                    <product.icon
                      className="w-5 sm:w-6 h-5 sm:h-6"
                      strokeWidth={1.5}
                    />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm sm:text-base font-medium text-gray-900 dark:text-white">
                      {product.name}
                    </h3>
                    <span
                      className={`inline-block px-1.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold ${product.tagColor} mt-1`}
                    >
                      {product.tag}
                    </span>
                  </div>

                  {/* Arrow */}
                  <ChevronRight className="w-4 h-4 text-gray-300 dark:text-neutral-600 group-hover:text-gray-400 dark:group-hover:text-neutral-500 transition-colors shrink-0" />
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {products.length === 0 && (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-neutral-400 text-sm">
                  No products to display yet.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
