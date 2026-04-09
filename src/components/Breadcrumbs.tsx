import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = {
  label: string;
  href?: string;
};

export type BreadcrumbsProps = {
  items: BreadcrumbItem[];
  className?: string;
};

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  if (!items.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className={cn("w-full", className)}
    >
      <ol className="flex flex-wrap items-center gap-2 text-sm text-slate-600">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          const isLink = Boolean(item.href) && !isLast;

          return (
            <li key={`${item.label}-${index}`} className="flex items-center gap-2">
              {isLink ? (
                <Link
                  href={item.href as string}
                  className="rounded-md px-1.5 py-1 font-medium text-slate-600 transition-colors hover:text-blue-700 hover:underline hover:underline-offset-4"
                >
                  {item.label}
                </Link>
              ) : (
                <span
                  aria-current={isLast ? "page" : undefined}
                  className={cn(
                    "rounded-md px-1.5 py-1 font-medium",
                    isLast ? "text-slate-900" : "text-slate-500"
                  )}
                >
                  {item.label}
                </span>
              )}

              {!isLast && (
                <ChevronRight
                  aria-hidden="true"
                  className="h-4 w-4 shrink-0 text-slate-400"
                />
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumbs;
