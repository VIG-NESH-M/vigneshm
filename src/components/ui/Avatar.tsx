// ============================================================
// AVATAR COMPONENT
// ============================================================

import { forwardRef } from "react";
import type { ImgHTMLAttributes } from "react";
import { cn } from "@/utils";
import { getInitials } from "@/utils/format";

export interface AvatarProps extends Omit<
  ImgHTMLAttributes<HTMLImageElement>,
  "src"
> {
  src?: string | null;
  name?: string;
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  shape?: "circle" | "square";
}

const sizeClasses = {
  xs: "h-6 w-6 text-xs",
  sm: "h-8 w-8 text-sm",
  md: "h-10 w-10 text-base",
  lg: "h-12 w-12 text-lg",
  xl: "h-16 w-16 text-xl",
};

const shapeClasses = {
  circle: "rounded-full",
  square: "rounded-lg",
};

// Generate consistent color based on name
const getAvatarColor = (name: string): string => {
  const colors = [
    "bg-red-500",
    "bg-orange-500",
    "bg-amber-500",
    "bg-yellow-500",
    "bg-lime-500",
    "bg-green-500",
    "bg-emerald-500",
    "bg-teal-500",
    "bg-cyan-500",
    "bg-sky-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-violet-500",
    "bg-purple-500",
    "bg-fuchsia-500",
    "bg-pink-500",
  ];

  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }

  return colors[Math.abs(hash) % colors.length];
};

export const Avatar = forwardRef<HTMLDivElement, AvatarProps>(
  (
    { className, src, name = "", alt, size = "md", shape = "circle", ...props },
    ref,
  ) => {
    const initials = getInitials(name);
    const avatarColor = getAvatarColor(name);

    return (
      <div
        ref={ref}
        className={cn(
          "relative inline-flex items-center justify-center overflow-hidden",
          "font-medium text-white",
          sizeClasses[size],
          shapeClasses[shape],
          !src && avatarColor,
          className,
        )}
      >
        {src ? (
          <img
            src={src}
            alt={alt || name || "Avatar"}
            className={cn("h-full w-full object-cover", shapeClasses[shape])}
            {...props}
          />
        ) : (
          <span className="select-none">{initials || "?"}</span>
        )}
      </div>
    );
  },
);

Avatar.displayName = "Avatar";

export default Avatar;
