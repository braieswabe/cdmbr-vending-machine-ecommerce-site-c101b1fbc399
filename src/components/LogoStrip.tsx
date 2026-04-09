import Image from "next/image";
import { cn } from "@/lib/utils";

export type LogoItem = {
  name: string;
  src?: string;
  width?: number;
  height?: number;
};

export type LogoStripProps = {
  title?: string;
  logos: LogoItem[];
  className?: string;
};

export function LogoStrip({ title = "Trusted by teams that value clarity and momentum", logos, className }: LogoStripProps) {
  return (
    <section className={cn("w-full", className)} aria-label={title}>
      <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
        <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[color:var(--muted-foreground)]">
          {title}
        </h2>
        <p className="text-sm text-[color:var(--muted-foreground)]">
          Consistent delivery, thoughtful communication, and measurable outcomes.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        {logos.map((logo) => (
          <div
            key={logo.name}
            className="flex h-20 items-center justify-center rounded-2xl border border-[color:var(--border)] bg-[color:var(--card)] px-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            {logo.src ? (
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width ?? 120}
                height={logo.height ?? 40}
                className="h-auto max-h-10 w-auto object-contain opacity-80 transition-opacity duration-300 hover:opacity-100"
              />
            ) : (
              <span className="text-center text-sm font-medium text-[color:var(--foreground)]">
                {logo.name}
              </span>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default LogoStrip;
