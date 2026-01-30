// ============================================================
// PRODUCTS - Subtle Folio Exact Style (List with Tags)
// ============================================================

import { ExternalLink } from "lucide-react";
import { products } from "@/config";

export default function Products() {
  return (
    <section id="products" className="py-3 sm:py-4 px-3 sm:px-4">
      <div className="max-w-xl mx-auto">
        {/* Main Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800">
          {/* Header */}
          <div className="mb-3 sm:mb-4">
            <div className="flex items-center gap-2 mb-2 sm:mb-3">
              <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                Products
              </span>
            </div>
            <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-1">
              Explore My Products
            </h2>
            <p className="text-gray-500 dark:text-neutral-400 text-[10px] sm:text-xs">
              Open source tools, templates, and resources I've created for the
              developer community.
            </p>
          </div>

          {/* Products List */}
          <div className="space-y-1 mt-3 sm:mt-4">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 sm:gap-3 p-2.5 sm:p-3 rounded-xl hover:bg-gray-50 dark:hover:bg-neutral-800/50 transition-colors"
              >
                {/* Icon */}
                <div
                  className={`w-9 h-9 sm:w-10 sm:h-10 ${product.iconBg} rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-md shrink-0`}
                >
                  <product.icon
                    className="w-4 sm:w-5 h-4 sm:h-5"
                    strokeWidth={1.5}
                  />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-xs sm:text-sm font-medium text-gray-900 dark:text-white truncate">
                    {product.name}
                  </h3>
                </div>

                {/* Tag - Hidden on very small screens */}
                <span
                  className={`hidden xs:inline-block px-1.5 sm:px-2 py-0.5 rounded-full text-[8px] sm:text-[10px] font-semibold ${product.tagColor} shrink-0`}
                >
                  {product.tag}
                </span>

                {/* External Link */}
                <ExternalLink className="w-3 sm:w-3.5 h-3 sm:h-3.5 text-gray-300 dark:text-neutral-600 group-hover:text-gray-400 dark:group-hover:text-neutral-500 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
