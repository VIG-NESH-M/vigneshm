// ============================================================
// ROUTE CONFIGURATION
// ============================================================

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ROUTES } from "@/config/constants";
import { lazyLoad } from "./lazyLoad";
import { ProtectedRoute, PublicOnlyRoute } from "./ProtectedRoute";

// Layout
import RootLayout from "@/components/layout/RootLayout";

// Lazy load pages for code splitting
const HomePage = lazyLoad(() => import("@/pages/Home"));
const DashboardPage = lazyLoad(() => import("@/pages/Dashboard"));
const LoginPage = lazyLoad(() => import("@/pages/auth/Login"));
const RegisterPage = lazyLoad(() => import("@/pages/auth/Register"));
const UsersPage = lazyLoad(() => import("@/pages/users/Users"));
const UserDetailPage = lazyLoad(() => import("@/pages/users/UserDetail"));
const PostsPage = lazyLoad(() => import("@/pages/posts/Posts"));
const PostDetailPage = lazyLoad(() => import("@/pages/posts/PostDetail"));
const ProfilePage = lazyLoad(() => import("@/pages/Profile"));
const SettingsPage = lazyLoad(() => import("@/pages/Settings"));
const NotFoundPage = lazyLoad(() => import("@/pages/NotFound"));

// Create router with route configuration
const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: ROUTES.DASHBOARD,
        element: (
          <ProtectedRoute>
            <DashboardPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.LOGIN,
        element: (
          <PublicOnlyRoute>
            <LoginPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: ROUTES.REGISTER,
        element: (
          <PublicOnlyRoute>
            <RegisterPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: ROUTES.USERS,
        element: (
          <ProtectedRoute>
            <UsersPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.USER_DETAIL,
        element: (
          <ProtectedRoute>
            <UserDetailPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.POSTS,
        element: (
          <ProtectedRoute>
            <PostsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.POST_DETAIL,
        element: (
          <ProtectedRoute>
            <PostDetailPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.PROFILE,
        element: (
          <ProtectedRoute>
            <ProfilePage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.SETTINGS,
        element: (
          <ProtectedRoute>
            <SettingsPage />
          </ProtectedRoute>
        ),
      },
      {
        path: ROUTES.NOT_FOUND,
        element: <NotFoundPage />,
      },
    ],
  },
]);

// Router Provider Component
export function AppRouter() {
  return <RouterProvider router={router} />;
}

export default AppRouter;
