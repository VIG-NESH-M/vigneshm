// ============================================================
// CONTACT - Design Inquiry Style with Lucide Icons
// ============================================================

import { useState } from "react";
import type { FormEvent } from "react";
import {
  Twitter,
  Instagram,
  Github,
  Linkedin,
  CheckCircle,
  Zap,
  ArrowLeft,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Textarea } from "@/components/ui/Textarea";
import type { LucideIcon } from "lucide-react";

interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
}

const socialLinks: SocialLink[] = [
  { name: "X", icon: Twitter, url: "https://twitter.com/vigneshm" },
  { name: "Instagram", icon: Instagram, url: "https://instagram.com/vigneshm" },
  { name: "GitHub", icon: Github, url: "https://github.com/VIG-NESH-M" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com/in/vigneshm" },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Left - Form */}
          <div className="lg:col-span-3 p-6 sm:p-8 bg-white dark:bg-gray-900 rounded-3xl border border-gray-100 dark:border-gray-800">
            {/* Header */}
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white">
                Hire Me
              </h2>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-green-50 dark:bg-green-900/20 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                <span className="text-xs font-medium text-green-700 dark:text-green-400">
                  AVAILABLE FOR WORK
                </span>
              </div>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
              Design Inquiry
            </h3>
            <p className="text-gray-500 dark:text-gray-400 mb-8">
              Got an idea and need design help? Reach out now
            </p>

            {submitted ? (
              <div className="py-12 text-center">
                <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Sent!
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  I'll get back to you soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    type="text"
                    placeholder="Name"
                    required
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    className="bg-gray-50 dark:bg-gray-800 border-0"
                  />
                  <Input
                    type="email"
                    placeholder="Email"
                    required
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    className="bg-gray-50 dark:bg-gray-800 border-0"
                  />
                </div>
                <Textarea
                  placeholder="Message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="bg-gray-50 dark:bg-gray-800 border-0"
                />
                <Button type="submit" className="w-full py-4 h-auto">
                  Submit Inquiry
                </Button>
              </form>
            )}
          </div>

          {/* Right - Social Links */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-4 flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Follow Me
              </h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 flex items-center justify-center bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:border-gray-300 dark:hover:border-gray-600 hover:scale-110 transition-all"
                    title={link.name}
                  >
                    <link.icon className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="p-6 bg-gray-50 dark:bg-gray-900 rounded-2xl border border-gray-100 dark:border-gray-800">
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Quick Contact
              </p>
              <a
                href="mailto:contact@vigneshm.me"
                className="text-lg font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
              >
                contact@vigneshm.me
              </a>
              <div className="mt-4">
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                  Location
                </p>
                <p className="font-medium text-gray-900 dark:text-white">
                  India (Remote)
                </p>
              </div>
            </div>

            {/* Response Time */}
            <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-2xl">
              <p className="text-sm text-blue-600 dark:text-blue-400 mb-1 flex items-center gap-2">
                <Zap className="w-4 h-4" /> Fast Response
              </p>
              <p className="font-medium text-gray-900 dark:text-white">
                Usually within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
