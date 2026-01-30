// ============================================================
// ROUTE CONFIGURATION
// ============================================================

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { lazyLoad } from "./lazyLoad";

// Lazy load Portfolio page for code splitting
const PortfolioPage = lazyLoad(() => import("@/pages/Portfolio"));
const NotFoundPage = lazyLoad(() => import("@/pages/NotFound"));

// Create router with route configuration
const router = createBrowserRouter([
  {
    path: "/",
    element: <PortfolioPage />,
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
