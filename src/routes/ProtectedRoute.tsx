// ============================================================
// PROTECTED ROUTE COMPONENT
// ============================================================

import { Navigate, useLocation } from "react-router-dom";
import { useAppSelector } from "@/hooks";
import { selectIsAuthenticated, selectUserRole } from "@/store/selectors";
import { ROUTES } from "@/config/constants";
import type { UserRole } from "@/types";

interface ProtectedRouteProps {
  children: React.ReactNode;
  allowedRoles?: UserRole[];
  redirectTo?: string;
}

/**
 * Route guard for authenticated routes
 * Redirects to login if not authenticated
 * Optionally checks for specific roles
 */
export function ProtectedRoute({
  children,
  allowedRoles,
  redirectTo = ROUTES.LOGIN,
}: ProtectedRouteProps) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const userRole = useAppSelector(selectUserRole);
  const location = useLocation();

  // Not authenticated - redirect to login
  if (!isAuthenticated) {
    return <Navigate to={redirectTo} state={{ from: location }} replace />;
  }

  // Role check - redirect to home if not authorized
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to={ROUTES.HOME} replace />;
  }

  return <>{children}</>;
}

/**
 * Route guard for public-only routes (e.g., login page)
 * Redirects to dashboard if already authenticated
 */
export function PublicOnlyRoute({
  children,
  redirectTo = ROUTES.DASHBOARD,
}: {
  children: React.ReactNode;
  redirectTo?: string;
}) {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const location = useLocation();

  // Get the intended destination from state
  const from =
    (location.state as { from?: Location })?.from?.pathname || redirectTo;

  if (isAuthenticated) {
    return <Navigate to={from} replace />;
  }

  return <>{children}</>;
}

export default ProtectedRoute;
