// ============================================================
// CARD COMPONENT
// ============================================================

import { forwardRef } from "react";
import type { HTMLAttributes } from "react";
import { cn } from "@/utils";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "elevated" | "outlined";
  padding?: "none" | "sm" | "md" | "lg";
  hoverable?: boolean;
}

const variantClasses = {
  default: "bg-white dark:bg-gray-800",
  elevated: "bg-white dark:bg-gray-800 shadow-lg",
  outlined:
    "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700",
};

const paddingClasses = {
  none: "p-0",
  sm: "p-3",
  md: "p-5",
  lg: "p-8",
};

export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      className,
      variant = "outlined",
      padding = "md",
      hoverable = false,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-xl",
          variantClasses[variant],
          paddingClasses[padding],
          hoverable &&
            "transition-transform duration-200 hover:scale-[1.02] hover:shadow-lg cursor-pointer",
          className,
        )}
        {...props}
      >
        {children}
      </div>
    );
  },
);

Card.displayName = "Card";

// Card Header
export type CardHeaderProps = HTMLAttributes<HTMLDivElement>;

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn("flex flex-col space-y-1.5 pb-4", className)}
      {...props}
    />
  ),
);
CardHeader.displayName = "CardHeader";

// Card Title
export type CardTitleProps = HTMLAttributes<HTMLHeadingElement>;

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn(
        "text-xl font-semibold text-gray-900 dark:text-white",
        className,
      )}
      {...props}
    />
  ),
);
CardTitle.displayName = "CardTitle";

// Card Description
export type CardDescriptionProps = HTMLAttributes<HTMLParagraphElement>;

export const CardDescription = forwardRef<
  HTMLParagraphElement,
  CardDescriptionProps
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";

// Card Content
export type CardContentProps = HTMLAttributes<HTMLDivElement>;

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("", className)} {...props} />
  ),
);
CardContent.displayName = "CardContent";

// Card Footer
export type CardFooterProps = HTMLAttributes<HTMLDivElement>;

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "flex items-center pt-4 border-t border-gray-200 dark:border-gray-700",
        className,
      )}
      {...props}
    />
  ),
);
CardFooter.displayName = "CardFooter";

export default Card;
