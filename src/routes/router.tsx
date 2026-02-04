// ============================================================
// ROUTE CONFIGURATION
// ============================================================

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazyLoad } from "./lazyLoad";

// Lazy load pages for code splitting
const PortfolioPage = lazyLoad(() => import("@/pages/Portfolio"));
const ProjectsPage = lazyLoad(() => import("@/pages/ProjectsPage"));
const ProductsPage = lazyLoad(() => import("@/pages/ProductsPage"));
const ExperiencePage = lazyLoad(() => import("@/pages/ExperiencePage"));
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
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/experience",
    element: <ExperiencePage />,
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
