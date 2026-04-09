import type { ReactNode } from "react";
import Link from "next/link";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type PricingTier = {
  name: string;
  price: string;
  description: string;
  features: string[];
  ctaLabel: string;
  ctaHref: string;
  popular?: boolean;
};

export type PricingTableProps = {
  tiers: PricingTier[];
  className?: string;
};

export function PricingTable({ tiers, className }: PricingTableProps) {
  return (
    <div className={cn("grid gap-6 lg:grid-cols-3", className)}>
      {tiers.map((tier) => (
        <article
          key={tier.name}
          className={cn(
            "relative flex h-full flex-col rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl",
            tier.popular ? "border-primary ring-1 ring-primary/20" : "border-border",
          )}
        >
          {tier.popular ? (
            <div className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
              Most popular
            </div>
          ) : null}

          <div>
            <h3 className="text-xl font-semibold tracking-tight text-foreground">{tier.name}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{tier.description}</p>
            <div className="mt-6 flex items-end gap-2">
              <span className="text-4xl font-bold tracking-tight text-foreground">{tier.price}</span>
              <span className="pb-1 text-sm text-muted-foreground">/month</span>
            </div>
          </div>

          <ul className="mt-8 space-y-3 text-sm text-foreground">
            {tier.features.map((feature) => (
              <li key={feature} className="flex items-start gap-3">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600">
                  <Check className="h-3.5 w-3.5" />
                </span>
                <span className="leading-6 text-muted-foreground">{feature}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8">
            <Link
              href={tier.ctaHref}
              className={cn(
                "inline-flex w-full items-center justify-center rounded-xl px-4 py-3 text-sm font-semibold transition-colors",
                tier.popular
                  ? "bg-primary text-primary-foreground hover:bg-primary/90"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/90",
              )}
            >
              {tier.ctaLabel}
            </Link>
          </div>
        </article>
      ))}
    </div>
  );
}

export default PricingTable;
