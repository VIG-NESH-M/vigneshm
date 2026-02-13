// ============================================================
// ROUTE CONFIGURATION
// ============================================================

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazyLoad } from "./lazyLoad";

// Lazy load pages for code splitting
const PortfolioPage = lazyLoad(() => import("@/pages/Portfolio"));
const ProjectsPage = lazyLoad(() => import("@/pages/ProjectsPage"));
const ProjectDetailPage = lazyLoad(() => import("@/pages/ProjectDetailPage"));
const ProductsPage = lazyLoad(() => import("@/pages/ProductsPage"));
const ProductDetailPage = lazyLoad(() => import("@/pages/ProductDetailPage"));
const ExperiencePage = lazyLoad(() => import("@/pages/ExperiencePage"));
const ExperienceDetailPage = lazyLoad(
  () => import("@/pages/ExperienceDetailPage"),
);
const GitHubCalendarDemo = lazyLoad(() => import("@/pages/GitHubCalendarDemo"));
const GamesPage = lazyLoad(() => import("@/pages/GamesPage"));
const SudokuPage = lazyLoad(() => import("@/pages/SudokuPage"));
const Game2048Page = lazyLoad(() => import("@/pages/Game2048Page"));
const MemoryPage = lazyLoad(() => import("@/pages/MemoryPage"));
const NotFoundPage = lazyLoad(() => import("@/pages/NotFound"));

// Create router with route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
  {
    path: "/projects/:id",
    element: <ProjectDetailPage />,
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/products/:id",
    element: <ProductDetailPage />,
  },
  {
    path: "/experience",
    element: <ExperiencePage />,
  },
  {
    path: "/experience/:id",
    element: <ExperienceDetailPage />,
  },
  {
    path: "/github-calendar",
    element: <GitHubCalendarDemo />,
  },
  {
    path: "/games",
    element: <GamesPage />,
  },
  {
    path: "/sudoku",
    element: <SudokuPage />,
  },
  {
    path: "/2048",
    element: <Game2048Page />,
  },
  {
    path: "/memory",
    element: <MemoryPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

// Router Provider Component
export function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
