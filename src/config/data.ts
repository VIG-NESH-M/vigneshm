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
  longDescription: string;
  icon: LucideIcon;
  iconBg: string;
  url: string;
  technologies: string[];
  features: string[];
  year: string;
  status: "Completed" | "In Progress" | "Maintenance";
}

export const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    description: "Full Stack Development, UI Design",
    longDescription: "A comprehensive e-commerce solution featuring product catalog management, shopping cart functionality, secure payment processing, and order tracking. Built with modern technologies to ensure scalability and performance.",
    icon: ShoppingCart,
    iconBg: "bg-gradient-to-br from-blue-400 to-indigo-500",
    url: "https://github.com/VIG-NESH-M",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux", "Tailwind CSS"],
    features: ["User Authentication", "Product Search & Filters", "Shopping Cart", "Payment Integration", "Order Management", "Admin Dashboard"],
    year: "2024",
    status: "Completed",
  },
  {
    id: 2,
    name: "Task Manager App",
    description: "React, TypeScript, Node.js",
    longDescription: "A powerful task management application designed to help teams collaborate effectively. Features include real-time updates, task assignments, progress tracking, and comprehensive reporting capabilities.",
    icon: CheckSquare,
    iconBg: "bg-gradient-to-br from-violet-500 to-purple-600",
    url: "https://github.com/VIG-NESH-M",
    technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "Socket.io", "Docker"],
    features: ["Real-time Collaboration", "Task Assignments", "Progress Tracking", "Notifications", "Team Management", "Analytics Dashboard"],
    year: "2023",
    status: "Completed",
  },
  {
    id: 3,
    name: "Analytics Dashboard",
    description: "Data Visualization, API Development",
    longDescription: "An interactive analytics dashboard that transforms complex data into actionable insights. Features customizable widgets, real-time data streaming, and exportable reports for business intelligence.",
    icon: BarChart3,
    iconBg: "bg-gradient-to-br from-orange-400 to-red-500",
    url: "https://github.com/VIG-NESH-M",
    technologies: ["React", "D3.js", "Python", "FastAPI", "Redis", "AWS"],
    features: ["Interactive Charts", "Real-time Data", "Custom Widgets", "Export Reports", "Data Filtering", "User Permissions"],
    year: "2024",
    status: "In Progress",
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
  description: string;
  longDescription: string;
  features: string[];
  technologies: string[];
  version: string;
  downloads?: string;
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
    description: "Production-ready React template with best practices",
    longDescription: "A comprehensive React starter template designed for rapid development. Includes authentication, state management, routing, and a component library following industry best practices.",
    features: ["TypeScript Support", "Redux Toolkit", "React Router", "Tailwind CSS", "Testing Setup", "CI/CD Ready"],
    technologies: ["React 18", "TypeScript", "Vite", "Redux", "Tailwind"],
    version: "2.0.0",
    downloads: "1.2k",
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
    description: "Express.js boilerplate with authentication & database",
    longDescription: "A production-ready Node.js API boilerplate with Express.js, featuring JWT authentication, database integration, input validation, error handling, and comprehensive logging.",
    features: ["JWT Authentication", "MongoDB Integration", "Input Validation", "Error Handling", "Rate Limiting", "API Documentation"],
    technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger"],
    version: "1.5.0",
    downloads: "850",
  },
  {
    id: 3,
    name: "TypeScript Utilities",
    tag: "NPM PACKAGE",
    tagColor: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    icon: Package,
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    url: "https://github.com/VIG-NESH-M",
    description: "Collection of TypeScript utility functions",
    longDescription: "A lightweight collection of TypeScript utility functions for common operations. Includes array manipulation, string formatting, date handling, and validation helpers.",
    features: ["Tree Shakeable", "Zero Dependencies", "Full TypeScript", "Well Documented", "Unit Tested", "ESM & CJS"],
    technologies: ["TypeScript", "Jest", "Rollup"],
    version: "3.1.0",
    downloads: "2.5k",
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
    description: "Modern portfolio template with dark mode",
    longDescription: "A beautiful, responsive portfolio template built with React and Tailwind CSS. Features smooth animations, dark mode support, and easy customization through a central config file.",
    features: ["Dark Mode", "Responsive Design", "SEO Optimized", "Fast Loading", "Easy Customization", "Contact Form"],
    technologies: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    version: "1.0.0",
    downloads: "500",
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
  longDescription: string;
  icon: LucideIcon;
  iconBg: string;
  location: string;
  type: "Full-time" | "Part-time" | "Contract" | "Freelance";
  responsibilities: string[];
  achievements: string[];
  technologies: string[];
}

export const experiences: Experience[] = [
  {
    id: 1,
    title: "Full Stack Developer",
    company: "Staunch Info Solutions",
    period: "2022 - Present",
    description: "Architected and developed scalable enterprise applications using React, Angular, and Spring Boot. Led full-stack development initiatives, implemented microservices architecture, and optimized database performance for high-traffic systems.",
    longDescription: "As a Full Stack Developer at Staunch Info Solutions, I lead the development of enterprise-grade web applications serving thousands of users. I work across the entire technology stack, from designing responsive user interfaces to implementing robust backend services and managing database architectures.",
    icon: Briefcase,
    iconBg: "bg-gradient-to-br from-blue-500 to-indigo-600",
    location: "India",
    type: "Full-time",
    responsibilities: [
      "Lead development of enterprise web applications using React and Angular",
      "Design and implement RESTful APIs using Spring Boot and Node.js",
      "Architect microservices-based solutions for scalable applications",
      "Collaborate with cross-functional teams to deliver client solutions",
      "Mentor junior developers and conduct code reviews",
      "Optimize application performance and database queries",
    ],
    achievements: [
      "Reduced application load time by 40% through optimization",
      "Led team of 5 developers on enterprise project delivery",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Built reusable component library used across 10+ projects",
    ],
    technologies: ["React", "Angular", "Spring Boot", "Node.js", "PostgreSQL", "MongoDB", "Docker", "AWS", "Redis", "GraphQL"],
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
