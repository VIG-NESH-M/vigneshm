// ============================================================
// CENTRALIZED PORTFOLIO DATA
// ============================================================

import {
  Twitter,
  Instagram,
  Linkedin,
  Github,
  MessageCircle,
  ShoppingCart,
  CheckSquare,
  BarChart3,
  Atom,
  Server,
  Package,
  Palette,
  Code2,
  Briefcase,
  Laptop,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

// ============================================================
// PERSONAL INFO
// ============================================================

export const personalInfo = {
  name: "Vignesh M",
  role: "Full Stack Developer",
  location: "India",
  email: "contact@vigneshm.me",
  phone: "+917601913536",
  avatarIcon: Code2,
  description: {
    short: "Full Stack Developer from India.",
    extended: "Currently building amazing web experiences.",
    about: [
      "I'm a passionate Full Stack Developer with 5+ years of experience building modern web applications. I specialize in React, TypeScript, and Node.js, creating scalable and user-friendly digital experiences.",
      "Based in India, I work with clients globally to bring their ideas to life. I believe in clean code, great design, and continuous learning.",
    ],
  },
  availability: {
    status: true,
    text: "Available for Work",
  },
  resume: "/resume.pdf",
};

// ============================================================
// SOCIAL LINKS
// ============================================================

export interface SocialLink {
  name: string;
  icon: LucideIcon;
  url: string;
  bgColor: string;
  username?: string;
}

export const socialLinks: SocialLink[] = [
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://www.linkedin.com/in/vignezhm/",
    bgColor: "bg-gradient-to-br from-blue-500 to-blue-700",
    username: "vignezhm",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://www.instagram.com/vignezh_m",
    bgColor: "bg-gradient-to-br from-pink-500 to-purple-600",
    username: "vignezh_m",
  },
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com/VIG-NESH-M",
    bgColor: "bg-gradient-to-br from-gray-700 to-gray-900",
    username: "VIG-NESH-M",
  },
  {
    name: "WhatsApp",
    icon: MessageCircle,
    url: "https://wa.me/917601913536",
    bgColor: "bg-gradient-to-br from-green-400 to-green-600",
    username: "+917601913536",
  },
  {
    name: "X",
    icon: Twitter,
    url: "https://twitter.com/vigneshm",
    bgColor: "bg-gradient-to-br from-gray-700 to-gray-900",
    username: "vigneshm",
  },
];

// ============================================================
// STATS
// ============================================================

export interface Stat {
  label: string;
  value: string;
}

export const stats: Stat[] = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "50+" },
  { label: "Happy Clients", value: "30+" },
];

// ============================================================
// SKILLS
// ============================================================

export const skills: string[] = [
  "React.js",
  "TypeScript",
  "Node.js",
  "Python",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
  "Docker",
  "GraphQL",
];

// ============================================================
// PROJECTS
// ============================================================

export interface Project {
  id: number;
  name: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
  url: string;
}

export const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Full Stack Development, UI Design",
    icon: ShoppingCart,
    iconBg: "bg-gradient-to-br from-blue-400 to-indigo-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 2,
    name: "Task Manager App",
    description: "React, TypeScript, Node.js",
    icon: CheckSquare,
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    description: "Data Visualization, API Development",
    icon: BarChart3,
    iconBg: "bg-gradient-to-br from-orange-400 to-red-500",
    url: "https://github.com/VIG-NESH-M",
  },
];

// ============================================================
// PRODUCTS
// ============================================================

export interface Product {
  id: number;
  name: string;
  tag: string;
  tagColor: string;
  icon: LucideIcon;
  iconBg: string;
  url: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "React Starter Kit",
    tag: "GITHUB TEMPLATE",
    tagColor:
      "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
    icon: Atom,
    iconBg: "bg-gradient-to-br from-cyan-400 to-blue-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 2,
    name: "Node.js API Boilerplate",
    tag: "OPEN SOURCE",
    tagColor:
      "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    icon: Server,
    iconBg: "bg-gradient-to-br from-green-400 to-emerald-500",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 3,
    name: "TypeScript Utilities",
    tag: "NPM PACKAGE",
    tagColor: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    icon: Package,
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    url: "https://github.com/VIG-NESH-M",
  },
  {
    id: 4,
    name: "Portfolio Template",
    tag: "VITE TEMPLATE",
    tagColor:
      "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400",
    icon: Palette,
    iconBg: "bg-gradient-to-br from-purple-400 to-pink-500",
    url: "https://github.com/VIG-NESH-M",
  },
];

// ============================================================
// EXPERIENCE
// ============================================================

export interface Experience {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  icon: LucideIcon;
  iconBg: string;
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Staunch Info Solutions",
    period: "2022 - Present",
    description: "Architected and developed scalable enterprise applications using React, Angular, and Spring Boot. Led full-stack development initiatives, implemented microservices architecture, and optimized database performance for high-traffic systems.",
    icon: Briefcase,
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
  },
];

// ============================================================
// NAVIGATION
// ============================================================

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];
