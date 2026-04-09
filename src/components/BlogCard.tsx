import { cn } from "@/lib/utils";

export type BlogCardProps = {
  icon?: React.ReactNode;
  number?: string;
  title: string;
  description: string;
  className?: string;
};

export function BlogCard({ icon, number, title, description, className }: BlogCardProps) {
  return (
    <article
      className={cn(
        "group rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
        className,
      )}
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[color:var(--primary)] to-[color:var(--secondary)] text-white shadow-sm">
          {icon ?? (
            <span className="text-sm font-semibold">{number ?? "01"}</span>
          )}
        </div>

        <div className="min-w-0">
          <h3 className="text-xl font-semibold tracking-tight text-[color:var(--foreground)] transition-colors duration-300 group-hover:text-[color:var(--primary)]">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-6 text-[color:var(--muted-foreground)] sm:text-base">
            {description}
          </p>
        </div>
      </div>
    </article>
  );
}

export default BlogCard;
