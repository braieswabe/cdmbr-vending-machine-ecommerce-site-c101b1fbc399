import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

export type TeamMemberCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
};

export function TeamMemberCard({
  icon,
  title,
  description,
  className,
}: TeamMemberCardProps) {
  return (
    <article
      className={cn(
        "group rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg",
        className
      )}
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-md ring-1 ring-black/5 transition-transform duration-300 group-hover:scale-105">
        <span className="text-xl font-semibold leading-none">{icon}</span>
      </div>

      <h3 className="text-lg font-semibold tracking-tight text-slate-900">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">{description}</p>
    </article>
  );
}

export default TeamMemberCard;
