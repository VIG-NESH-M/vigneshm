// ============================================================
// PRODUCTS PAGE - Full Page View
// ============================================================

import { Link } from "react-router-dom";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { products, personalInfo } from "@/config";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-gray-200 dark:border-neutral-800">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center gap-4">
          <Link
            to="/"
            className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
          >
            <ArrowLeft className="w-5 h-5 text-gray-600 dark:text-neutral-400" />
          </Link>
          <div>
            <h1 className="text-lg font-bold text-gray-900 dark:text-white">
              Products
            </h1>
            <p className="text-xs text-gray-500 dark:text-neutral-400">
              {personalInfo.name}'s Open Source Work
            </p>
          </div>
        </div>
      </header>

      {/* Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        {/* Intro */}
        <div className="mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-3">
            My Products
          </h2>
          <p className="text-gray-600 dark:text-neutral-400 text-sm sm:text-base max-w-2xl">
            Open source tools, templates, and resources I've created for the
            developer community. Feel free to use them in your projects!
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid gap-4 sm:gap-6 sm:grid-cols-2">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white dark:bg-neutral-900 rounded-2xl p-5 sm:p-6 shadow-sm border border-gray-100 dark:border-neutral-800 hover:shadow-md hover:border-gray-200 dark:hover:border-neutral-700 transition-all"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${product.iconBg} rounded-xl flex items-center justify-center text-white shadow-lg shrink-0`}
                >
                  <product.icon className="w-6 h-6" strokeWidth={1.5} />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-base font-semibold text-gray-900 dark:text-white truncate">
                      {product.name}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-gray-400 dark:text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                  </div>
                  <span
                    className={`inline-block px-2.5 py-1 rounded-full text-xs font-semibold ${product.tagColor}`}
                  >
                    {product.tag}
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Empty State */}
        {products.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-neutral-400">
              No products to display yet.
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
