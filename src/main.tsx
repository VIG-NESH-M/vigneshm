// ============================================================
// APP ENTRY POINT
// ============================================================

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { store } from "@/store";
import { queryClient } from "@/lib/queryClient";
import { env } from "@/config/env";
import App from "./App";

// Import styles
import "@/styles/main.css";

// Get root element
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found");
}

// Create React root and render app
createRoot(rootElement).render(
  <StrictMode>
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <App />
        {env.ENABLE_QUERY_DEVTOOLS && (
          <ReactQueryDevtools initialIsOpen={false} position="bottom" />
        )}
      </QueryClientProvider>
    </Provider>
  </StrictMode>,
);
