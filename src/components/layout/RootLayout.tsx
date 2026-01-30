// ============================================================
// ROOT LAYOUT COMPONENT
// ============================================================

import { Outlet } from "react-router-dom";
import { useAppSelector } from "@/hooks";
import { selectIsAuthenticated, selectSidebarOpen } from "@/store/selectors";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Footer } from "./Footer";
import { cn } from "@/utils";

export function RootLayout() {
  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const sidebarOpen = useAppSelector(selectSidebarOpen);

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-950">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main
          className={cn(
            "flex-1 transition-all duration-300",
            isAuthenticated && sidebarOpen && "lg:ml-64",
          )}
        >
          <div className="min-h-[calc(100vh-4rem)] p-4 sm:p-6 lg:p-8">
            <Outlet />
          </div>
          <Footer />
        </main>
      </div>
    </div>
  );
}

export default RootLayout;
