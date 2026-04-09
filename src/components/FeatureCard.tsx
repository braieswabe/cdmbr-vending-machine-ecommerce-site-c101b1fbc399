import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type FeatureCardProps = {
  icon?: ReactNode;
  number?: string;
  title: string;
  description: string;
  className?: string;
};

export function FeatureCard({
  icon,
  number,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
          {icon ?? (
            <span className="text-sm font-semibold">
              {number ?? "01"}
            </span>
          )}
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default FeatureCard;
