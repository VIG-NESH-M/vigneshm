// ============================================================
// LAZY LOAD COMPONENTS WITH SUSPENSE
// ============================================================

import { lazy, Suspense } from "react";
import type { ComponentType, ReactNode, JSX } from "react";
import { LoadingSpinner } from "@/components/ui";

/**
 * Create a lazy-loaded component with automatic Suspense wrapper
 * Useful for code splitting
 */
export function lazyLoad<P extends object = object>(
  importFn: () => Promise<{ default: ComponentType<P> }>,
  fallback: ReactNode = <LoadingSpinner fullScreen />,
): ComponentType<P> {
  const LazyComponent = lazy(importFn);

  return function LazyWrapper(props: P) {
    return (
      <Suspense fallback={fallback}>
        <LazyComponent {...(props as P & JSX.IntrinsicAttributes)} />
      </Suspense>
    );
  };
}

export default lazyLoad;
