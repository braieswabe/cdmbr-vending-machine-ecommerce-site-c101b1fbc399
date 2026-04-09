import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type ResponsiveGridProps = {
  children: ReactNode;
  className?: string;
  columns?: 1 | 2 | 3 | 4;
  gap?: "sm" | "md" | "lg" | "xl";
  as?: "div" | "section" | "ul";
};

const columnClasses: Record<NonNullable<ResponsiveGridProps["columns"]>, string> = {
  1: "grid-cols-1",
  2: "grid-cols-1 md:grid-cols-2",
  3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 md:grid-cols-2 xl:grid-cols-4",
};

const gapClasses: Record<NonNullable<ResponsiveGridProps["gap"]>, string> = {
  sm: "gap-4",
  md: "gap-6",
  lg: "gap-8",
  xl: "gap-10",
};

export function ResponsiveGrid({
  children,
  className,
  columns = 3,
  gap = "lg",
  as: Component = "div",
}: ResponsiveGridProps) {
  return (
    <Component className={cn("grid", columnClasses[columns], gapClasses[gap], className)}>
      {children}
    </Component>
  );
}

export default ResponsiveGrid;
