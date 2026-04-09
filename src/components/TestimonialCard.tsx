import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export type TestimonialCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function TestimonialCard({ icon, title, description, className }: TestimonialCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className,
      )}
    >
      <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <h3 className="text-lg font-semibold tracking-tight text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">{description}</p>
    </article>
  );
}

export default TestimonialCard;
