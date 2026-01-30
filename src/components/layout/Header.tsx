// ============================================================
// HEADER COMPONENT
// ============================================================

import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "@/hooks";
import {
  selectIsAuthenticated,
  selectUser,
  selectTheme,
  selectSidebarOpen,
} from "@/store/selectors";
import { toggleTheme, toggleSidebar, logout } from "@/store";
import { ROUTES } from "@/config/constants";
import { Button, Avatar } from "@/components/ui";
import { cn } from "@/utils";

// Icons (inline SVG for zero dependencies)
const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 6h16M4 12h16M4 18h16"
    />
  </svg>
);

const SunIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const MoonIcon = () => (
  <svg
    className="w-5 h-5"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
    />
  </svg>
);

export function Header() {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const user = useAppSelector(selectUser);
  const theme = useAppSelector(selectTheme);
  const sidebarOpen = useAppSelector(selectSidebarOpen);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-gray-200 dark:border-gray-700 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
      <div className="flex h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Left side */}
        <div className="flex items-center gap-4">
          {isAuthenticated && (
            <button
              onClick={() => dispatch(toggleSidebar())}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
              aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
              <MenuIcon />
            </button>
          )}
          <Link to={ROUTES.HOME} className="flex items-center gap-2">
            <div className="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">R</span>
            </div>
            <span className="font-semibold text-xl text-gray-900 dark:text-white hidden sm:block">
              React Starter
            </span>
          </Link>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {/* Theme toggle */}
          <button
            onClick={() => dispatch(toggleTheme())}
            className={cn(
              "p-2 rounded-lg transition-colors",
              "hover:bg-gray-100 dark:hover:bg-gray-800",
              "text-gray-600 dark:text-gray-400",
            )}
            aria-label={
              theme === "dark" ? "Switch to light mode" : "Switch to dark mode"
            }
          >
            {theme === "dark" ? <SunIcon /> : <MoonIcon />}
          </button>

          {isAuthenticated ? (
            <div className="flex items-center gap-3">
              <Link to={ROUTES.PROFILE}>
                <Avatar
                  src={user?.avatar}
                  name={`${user?.firstName} ${user?.lastName}`}
                  size="sm"
                />
              </Link>
              <Button variant="ghost" size="sm" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          ) : (
            <div className="flex items-center gap-2">
              <Link to={ROUTES.LOGIN}>
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
              </Link>
              <Link to={ROUTES.REGISTER}>
                <Button variant="primary" size="sm">
                  Sign Up
                </Button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
