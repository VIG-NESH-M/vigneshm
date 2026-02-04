// ============================================================
// PRODUCT DETAIL PAGE - Subtle Folio Exact Style
// ============================================================

import { Link, useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ExternalLink,
  Download,
  CheckCircle2,
  Code2,
  Tag,
} from "lucide-react";
import { useDocumentTitle } from "@/hooks";
import { products } from "@/config";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

export default function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(id));

  useDocumentTitle(
    product ? `${product.name} | Vignesh M` : "Product Not Found",
  );

  if (!product) {
    return <Navigate to="/products" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-neutral-950 text-gray-900 dark:text-neutral-100 transition-colors duration-300">
      <Navbar />
      <main className="pt-24 pb-8 px-3 sm:px-4">
        <div className="max-w-xl mx-auto">
          {/* Back Button */}
          <div className="mb-3">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-3 py-2 bg-white dark:bg-neutral-900 rounded-full shadow-sm border border-gray-100 dark:border-neutral-800 text-xs font-medium text-gray-600 dark:text-neutral-400 hover:bg-gray-50 dark:hover:bg-neutral-800 transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to Products
            </Link>
          </div>

          {/* Header Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800 mb-3">
            <div className="flex items-start gap-3 sm:gap-4">
              {/* Icon */}
              <div
                className={`w-14 h-14 sm:w-16 sm:h-16 ${product.iconBg} rounded-xl sm:rounded-2xl flex items-center justify-center text-white shadow-lg shrink-0`}
              >
                <product.icon
                  className="w-7 sm:w-8 h-7 sm:h-8"
                  strokeWidth={1.5}
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
                  <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                    Product
                  </span>
                </div>
                <h1 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {product.name}
                </h1>
                <div className="flex flex-wrap items-center gap-2">
                  <span
                    className={`px-2 py-0.5 rounded-full text-[9px] sm:text-[10px] font-semibold ${product.tagColor}`}
                  >
                    {product.tag}
                  </span>
                  <span className="text-[10px] sm:text-xs text-gray-500 dark:text-neutral-400 flex items-center gap-1">
                    <Tag className="w-3 h-3" /> v{product.version}
                  </span>
                  {product.downloads && (
                    <span className="text-[10px] sm:text-xs text-gray-500 dark:text-neutral-400 flex items-center gap-1">
                      <Download className="w-3 h-3" /> {product.downloads}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Description Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800 mb-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                About
              </span>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-neutral-400 leading-relaxed">
              {product.longDescription}
            </p>
          </div>

          {/* Features Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800 mb-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                Features
              </span>
            </div>
            <div className="space-y-2">
              {product.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0" />
                  <span className="text-xs sm:text-sm text-gray-700 dark:text-neutral-300">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800 mb-3">
            <div className="flex items-center gap-2 mb-3">
              <span className="w-1.5 h-1.5 bg-orange-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                Built With
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {product.technologies.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-neutral-400 text-xs rounded-full flex items-center gap-1"
                >
                  <Code2 className="w-3 h-3" />
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Action Card */}
          <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800">
            <a
              href={product.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-xl font-medium text-sm hover:opacity-90 transition-opacity"
            >
              View on GitHub
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
