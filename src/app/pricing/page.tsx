"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Breadcrumbs, Button, FAQAccordion, SectionHeading } from "@/components";

type BillingCycle = "monthly" | "annual";

const tiers = [
  {
    name: "Starter",
    recommended: false,
    monthly: 1800,
    annual: 19440,
    description: "For focused updates, landing pages, or a polished small-site launch.",
    features: [
      "Strategy call and project plan",
      "Up to 5 core pages",
      "Responsive design and build",
      "Basic SEO setup",
      "One revision round",
    ],
  },
  {
    name: "Growth",
    recommended: true,
    monthly: 4200,
    annual: 45360,
    description: "For teams that need a stronger website and a smoother path to leads.",
    features: [
      "Everything in Starter",
      "Up to 10 pages",
      "Messaging refinement",
      "Conversion-focused sections",
      "Two revision rounds",
      "Launch support",
    ],
  },
  {
    name: "Scale",
    recommended: false,
    monthly: 7800,
    annual: 84240,
    description: "For larger teams that want a strategic partner and ongoing optimization.",
    features: [
      "Everything in Growth",
      "Custom integrations",
      "Advanced analytics guidance",
      "Priority support",
      "Monthly optimization review",
      "Dedicated launch coordination",
    ],
  },
];

const comparisonRows = [
  ["Strategy workshop", "Included", "Included", "Included"],
  ["Custom design system", "Basic", "Expanded", "Advanced"],
  ["Copy refinement", "Optional", "Included", "Included"],
  ["SEO foundation", "Included", "Included", "Included"],
  ["Post-launch support", "7 days", "14 days", "30 days"],
];

const addOns = [
  "Extra page design and build",
  "Brand refresh and visual direction",
  "Copywriting for service pages and case studies",
  "Monthly optimization and content updates",
  "Analytics setup and reporting dashboard",
];

const faqItems = [
  {
    question: "Do you offer monthly and annual billing?",
    answer:
      "Yes. You can review pricing by month or by year. Annual billing is shown as a discounted total for teams that want to commit longer term.",
  },
  {
    question: "Can the scope be customized?",
    answer:
      "Absolutely. We can adjust page counts, add integrations, or tailor the process to match your timeline and internal resources.",
  },
  {
    question: "What happens after I choose a plan?",
    answer:
      "We schedule a discovery call, confirm scope, and send a clear proposal. Once approved, we map the project and begin with strategy.",
  },
];

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");

  const formattedTiers = useMemo(
    () =>
      tiers.map((tier) => ({
        ...tier,
        price: billingCycle === "monthly" ? tier.monthly : tier.annual,
        suffix: billingCycle === "monthly" ? "/mo" : "/yr",
      })),
    [billingCycle]
  );

  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--secondary)]/40 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Pricing" }]} />
        </div>
        <div className="mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8 lg:py-24">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-sm font-medium text-[var(--muted-foreground)] shadow-sm">
            <Sparkles className="h-4 w-4 text-[var(--primary)]" />
            Transparent pricing with no surprises
          </span>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            Pricing that makes it easy to choose the right level of support.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
            Compare packages by outcome, not jargon. Every tier is designed to help you move faster, stay on budget,
            and know exactly what is included before you commit.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] p-1 shadow-sm">
            <button
              type="button"
              onClick={() => setBillingCycle("monthly")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                billingCycle === "monthly"
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle("annual")}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                billingCycle === "annual"
                  ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                  : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
              }`}
            >
              Annual
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Pricing cards"
          title="Choose a package that matches your current goals."
          description="Each plan includes a clear scope, practical deliverables, and a path to launch without guesswork."
          align="center"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {formattedTiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative rounded-3xl border p-6 shadow-sm ${
                tier.recommended
                  ? "border-[var(--primary)] bg-[var(--card)] ring-1 ring-[var(--primary)]/20"
                  : "border-[var(--border)] bg-[var(--card)]"
              }`}
            >
              {tier.recommended ? (
                <span className="absolute right-5 top-5 rounded-full bg-[var(--primary)] px-3 py-1 text-xs font-semibold text-[var(--primary-foreground)]">
                  Recommended
                </span>
              ) : null}
              <h2 className="text-2xl font-semibold">{tier.name}</h2>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{tier.description}</p>
              <div className="mt-6 flex items-end gap-2">
                <span className="text-4xl font-semibold">${tier.price.toLocaleString()}</span>
                <span className="pb-1 text-sm text-[var(--muted-foreground)]">{tier.suffix}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm leading-6">
                    <Check className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" className="w-full">
                  Get started
                </Button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--secondary)]/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="Comparison table"
            title="See the differences at a glance."
            description="Use this side-by-side view to compare what is included across each package."
          />
          <div className="mt-10 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
            <div className="grid grid-cols-4 border-b border-[var(--border)] bg-[var(--secondary)]/40 px-6 py-4 text-sm font-semibold">
              <div>Feature</div>
              <div>Starter</div>
              <div>Growth</div>
              <div>Scale</div>
            </div>
            {comparisonRows.map(([feature, starter, growth, scale]) => (
              <div key={feature} className="grid grid-cols-4 border-b border-[var(--border)] px-6 py-4 text-sm last:border-b-0">
                <div className="font-medium">{feature}</div>
                <div>{starter}</div>
                <div>{growth}</div>
                <div>{scale}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Add-ons"
          title="Extend your package when you need more support."
          description="Add the pieces that help your team move faster without rebuilding the entire scope."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {addOns.map((item) => (
            <div key={item} className="rounded-2xl border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm">
              <p className="text-sm font-medium">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--secondary)]/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="FAQ"
            title="Common pricing questions, answered."
            description="If you need a custom scope, we can tailor a proposal after a quick discovery call."
          />
          <div className="mt-10">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-8 shadow-sm sm:p-10">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-semibold tracking-tight">Not sure which package fits best?</h2>
              <p className="mt-3 text-[var(--muted-foreground)]">
                We will help you choose the right scope, timeline, and investment based on your goals.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Talk to sales
              </Button>
              <Button href="/services" variant="secondary" size="lg">
                Explore services
              </Button>
            </div>
          </div>
          <div className="mt-6">
            <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:underline">
              Request a custom quote <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}