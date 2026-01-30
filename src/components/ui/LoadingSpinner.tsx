// ============================================================
// LOADING SPINNER COMPONENT
// ============================================================

import { cn } from "@/utils";
import type { BaseComponentProps } from "@/types";

interface LoadingSpinnerProps extends BaseComponentProps {
  size?: "sm" | "md" | "lg" | "xl";
  fullScreen?: boolean;
  text?: string;
}

const sizeClasses = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-3",
  lg: "h-12 w-12 border-4",
  xl: "h-16 w-16 border-4",
};

export function LoadingSpinner({
  size = "md",
  fullScreen = false,
  text,
  className,
}: LoadingSpinnerProps) {
  const spinner = (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3",
        className,
      )}
    >
      <div
        className={cn(
          "animate-spin rounded-full border-solid border-primary-600 border-t-transparent",
          sizeClasses[size],
        )}
        role="status"
        aria-label="Loading"
      />
      {text && (
        <p className="text-sm text-gray-500 dark:text-gray-400 animate-pulse">
          {text}
        </p>
      )}
    </div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
        {spinner}
      </div>
    );
  }

  return spinner;
}

export default LoadingSpinner;
