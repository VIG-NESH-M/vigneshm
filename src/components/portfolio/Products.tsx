// ============================================================
// PRODUCTS - Subtle Folio Exact Style (List with Tags)
// ============================================================

import { ExternalLink } from "lucide-react";

interface Product {
  id: number;
  name: string;
  tag: string;
  tagColor: string;
  icon: string;
  iconBg: string;
  url: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "React Starter Kit",
    tag: "GITHUB TEMPLATE",
    tagColor:
      "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    icon: "⚛️",
    iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 2,
    name: "Node.js API Boilerplate",
    tag: "OPEN SOURCE",
    tagColor:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    icon: "🟢",
    iconBg: "bg-gradient-to-br from-green-400 to-emerald-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 3,
    name: "TypeScript Utilities",
    tag: "NPM PACKAGE",
    tagColor: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    icon: "📦",
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 4,
    name: "Portfolio Template",
    tag: "VITE TEMPLATE",
    tagColor:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    icon: "🎨",
    iconBg: "bg-gradient-to-br from-purple-400 to-pink-500",
    url: "https://github.com/VIG-NESH-M",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-8 px-4">
      <div className="max-w-xl mx-auto">
        {/* Main Card */}
        <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 shadow-sm border border-gray-100 dark:border-gray-800">
          {/* Header */}
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
              <span className="text-sm font-medium text-gray-900 dark:text-white">
                Products
              </span>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Explore My Products
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm">
              Open source tools, templates, and resources I've created for the
              developer community.
            </p>
          </div>

          {/* Products List */}
          <div className="space-y-2 mt-6">
            {products.map((product) => (
              <a
                key={product.id}
                href={product.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-4 rounded-2xl hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
              >
                {/* Icon */}
                <div
                  className={`w-12 h-12 ${product.iconBg} rounded-2xl flex items-center justify-center text-xl shadow-lg shrink-0`}
                >
                  {product.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white">
                    {product.name}
                  </h3>
                </div>

                {/* Tag */}
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${product.tagColor} shrink-0`}
                >
                  {product.tag}
                </span>

                {/* External Link */}
                <ExternalLink className="w-4 h-4 text-gray-300 dark:text-gray-600 group-hover:text-gray-400 dark:group-hover:text-gray-500 transition-colors shrink-0" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
