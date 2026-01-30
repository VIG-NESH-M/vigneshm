// ============================================================
// PRODUCTS - Subtle Folio Style
// ============================================================

import { ExternalLink } from "lucide-react";

interface Product {
  id: number;
  name: string;
  tag: string;
  gradient: string;
  url: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "React Starter Kit",
    tag: "TEMPLATE",
    gradient: "from-rose-400 via-fuchsia-500 to-indigo-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 2,
    name: "Node.js API Boilerplate",
    tag: "OPEN SOURCE",
    gradient: "from-green-400 via-emerald-500 to-teal-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 3,
    name: "TypeScript Utilities",
    tag: "LIBRARY",
    gradient: "from-blue-400 via-indigo-500 to-purple-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 4,
    name: "Portfolio Template",
    tag: "TEMPLATE",
    gradient: "from-amber-400 via-orange-500 to-red-500",
    url: "https://github.com/VIG-NESH-M",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="py-24 px-4 bg-gray-50 dark:bg-gray-900/50"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="text-sm font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
            Products
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {products.map((product) => (
            <a
              key={product.id}
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 transition-all hover:shadow-lg"
            >
              {/* Gradient Background */}
              <div
                className={`h-32 bg-gradient-to-br ${product.gradient} relative`}
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(255,255,255,0.15)_0%,transparent_50%)]"></div>
              </div>

              {/* Content */}
              <div className="p-5 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                    {product.name}
                  </h3>
                  <span className="text-xs font-medium text-gray-400 dark:text-gray-500 uppercase tracking-wider">
                    {product.tag}
                  </span>
                </div>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors shrink-0" />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
