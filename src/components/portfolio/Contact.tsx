// ============================================================
// CONTACT - Subtle Folio Exact Style (Form with Follow Me)
// ============================================================

import { useState } from "react";
import { Send } from "lucide-react";
import { socialLinks, personalInfo } from "@/config";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
    alert("Thank you for your inquiry! I'll get back to you soon.");
  };

  return (
    <section id="contact" className="py-1.5 sm:py-2 px-3 sm:px-4">
      <div className="max-w-xl mx-auto space-y-3 sm:space-y-4">
        {/* Hire Me Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800">
          {/* Header */}
          <div className="flex items-center justify-between mb-3 sm:mb-4 flex-wrap gap-2">
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
              <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
                Hire Me
              </span>
            </div>
            {personalInfo.availability.status && (
              <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-[9px] sm:text-[10px] font-semibold rounded-full uppercase">
                {personalInfo.availability.text}
              </span>
            )}
          </div>

          {/* Title */}
          <h2 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white mb-3 sm:mb-4">
            Design Inquiry
          </h2>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-2.5 sm:space-y-3">
            <div>
              <label className="block text-[10px] sm:text-xs font-medium text-gray-700 dark:text-neutral-300 mb-1 sm:mb-1.5">
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Your name"
                required
                className="w-full px-3 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg text-xs sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] sm:text-xs font-medium text-gray-700 dark:text-neutral-300 mb-1 sm:mb-1.5">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                placeholder="Your email"
                required
                className="w-full px-3 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg text-xs sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <div>
              <label className="block text-[10px] sm:text-xs font-medium text-gray-700 dark:text-neutral-300 mb-1 sm:mb-1.5">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                placeholder="Tell me about your project..."
                required
                rows={3}
                className="w-full px-3 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-lg text-xs sm:text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
              />
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-1.5 px-4 py-2 sm:py-2.5 bg-gray-900 dark:bg-white text-white dark:text-neutral-900 rounded-lg text-xs sm:text-sm font-medium hover:opacity-90 transition-all disabled:opacity-50"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  Submit Inquiry
                  <Send className="w-3 sm:w-3.5 h-3 sm:h-3.5" />
                </>
              )}
            </button>
          </form>
        </div>

        {/* Follow Me Card */}
        <div className="bg-white dark:bg-neutral-900 rounded-2xl p-4 sm:p-5 shadow-sm border border-gray-100 dark:border-neutral-800">
          {/* Header */}
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span>
            <span className="text-[10px] sm:text-xs font-medium text-gray-600 dark:text-neutral-400 uppercase tracking-wider">
              Follow Me
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-wrap">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-9 h-9 sm:w-10 sm:h-10 ${link.bgColor} rounded-lg sm:rounded-xl flex items-center justify-center text-white hover:scale-105 transition-transform shadow-md`}
                title={link.name}
              >
                <link.icon className="w-3.5 sm:w-4 h-3.5 sm:h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
