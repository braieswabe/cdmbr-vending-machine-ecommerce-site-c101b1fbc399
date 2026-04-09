import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description: "Learn more about features",
};

import Link from "next/link";
import { ArrowRight, BarChart3, Blocks, CalendarCheck, CheckCircle2, Cloud, Layers3, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { Button, CTABanner, FeatureCard, Hero, SectionHeading, StatsRow } from "@/components";

const featureGroups = [
  {
    title: "Strategy and planning",
    items: [
      "Clear positioning that turns complex offers into simple, compelling value",
      "Conversion-focused page structures designed to guide visitors to action",
      "Messaging frameworks that keep your brand consistent across every touchpoint",
    ],
  },
  {
    title: "Design and experience",
    items: [
      "Modern, responsive layouts that feel polished on every screen size",
      "Reusable UI sections for faster launches and easier future updates",
      "Accessible components with strong contrast, readable type, and clear hierarchy",
    ],
  },
  {
    title: "Growth and optimization",
    items: [
      "SEO-friendly page architecture that supports discoverability and authority",
      "Lead capture sections built to reduce friction and increase inquiries",
      "Analytics-ready layouts that make it easier to measure what is working",
    ],
  },
];

const deepDives = [
  {
    icon: <Sparkles className="h-5 w-5" />,
    title: "Launch-ready hero sections",
    description:
      "Lead with a clear promise, a strong CTA, and supporting proof so visitors understand your value in seconds.",
  },
  {
    icon: <Blocks className="h-5 w-5" />,
    title: "Modular content blocks",
    description:
      "Mix and match feature cards, testimonials, stats, and CTAs to build pages that stay consistent and easy to scale.",
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Trust-building details",
    description:
      "Use social proof, process clarity, and outcome-focused copy to remove hesitation and make next steps obvious.",
  },
];

const useCases = [
  {
    title: "For founders",
    description:
      "Present a sharper story to investors, customers, and early hires with a site that communicates momentum and credibility.",
  },
  {
    title: "For marketing teams",
    description:
      "Ship campaign pages faster with reusable sections that support launches, product updates, and lead generation.",
  },
  {
    title: "For service businesses",
    description:
      "Showcase expertise, explain your process, and make it easy for qualified prospects to book a call.",
  },
  {
    title: "For growing teams",
    description:
      "Keep your website aligned as your offer evolves with flexible content patterns and conversion-friendly layouts.",
  },
];

const integrations = [
  "CRM and lead routing workflows",
  "Email marketing and newsletter capture",
  "Analytics and conversion tracking",
  "Scheduling and booking tools",
  "Content management and publishing systems",
  "Design systems and reusable component libraries",
];

export default function FeaturesPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <Hero
        title="Features that help your website work harder"
        subtitle="Build a site that does more than look good. Our feature set is designed to clarify your offer, guide visitors to action, and support long-term growth."
        ctaLabel="Start a project"
        ctaHref="/contact"
        secondaryLabel="View pricing"
        secondaryHref="/pricing"
      />

      <section className="mx-auto max-w-7xl px-6 py-20">
        <StatsRow
          title="Built for clarity, speed, and conversion"
          description="Everything is structured to help visitors understand your value quickly and move confidently toward the next step."
          stats={[
            { label: "Core capabilities", value: "12+" },
            { label: "Reusable sections", value: "30+" },
            { label: "Mobile-first layouts", value: "100%" },
          ]}
        />
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Feature matrix"
          title="A structured system for better pages"
          description="Each capability supports a specific part of the visitor journey, from first impression to final conversion."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {featureGroups.map((group) => (
            <div key={group.title} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-[var(--foreground)]">{group.title}</h3>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted-foreground)]">
                {group.items.map((item) => (
                  <li key={item} className="flex gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[var(--accent)]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[var(--muted)]/40 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Feature deep dives"
            title="The details that make the difference"
            description="These are the building blocks that help your site feel polished, persuasive, and easy to maintain."
          />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {deepDives.map((feature) => (
              <FeatureCard key={feature.title} icon={feature.icon} title={feature.title} description={feature.description} />
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Use cases"
          title="Designed for the way teams actually work"
          description="Whether you are launching, scaling, or refining, the experience adapts to your goals."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {useCases.map((item) => (
            <div key={item.title} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <SectionHeading
          eyebrow="Integration highlights"
          title="Fits into the tools you already use"
          description="Connect your website to the systems that keep your team moving without adding unnecessary complexity."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {integrations.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-sm">
              <Cloud className="h-5 w-5 text-[var(--accent)]" />
              <span className="text-sm font-medium">{item}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <CTABanner
          headline="Ready to turn features into momentum?"
          description="Let’s build a site that explains your value clearly and gives visitors a reason to take the next step."
          buttonLabel="Book a consultation"
          buttonHref="/contact"
        />
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 text-sm text-[var(--muted-foreground)]">
          <Link href="/services" className="inline-flex items-center gap-2 font-medium text-[var(--foreground)] transition hover:text-[var(--primary)]">
            Explore services <ArrowRight className="h-4 w-4" />
          </Link>
          <Link href="/portfolio" className="inline-flex items-center gap-2 font-medium text-[var(--foreground)] transition hover:text-[var(--primary)]">
            See recent work <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}