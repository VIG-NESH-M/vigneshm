// ============================================================
// LAZY LOAD COMPONENTS WITH SUSPENSE
// ============================================================

import { lazy, Suspense, ComponentType, ReactNode } from "react";
import { LoadingSpinner } from "@/components/ui";

/**
 * Create a lazy-loaded component with automatic Suspense wrapper
 * Useful for code splitting
 */
export function lazyLoad<T extends ComponentType<P>, P extends object>(
  importFn: () => Promise<{ default: T }>,
  fallback: ReactNode = <LoadingSpinner fullScreen />,
): ComponentType<P> {
  const LazyComponent = lazy(importFn);

  return function LazyWrapper(props: P) {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...props} />
      </Suspense>
    );
  };
}

export default lazyLoad;
