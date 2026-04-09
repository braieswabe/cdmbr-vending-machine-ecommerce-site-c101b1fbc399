import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Clear, conversion-focused services for teams that want a stronger digital presence.",
  description: "Learn more about clear, conversion-focused services for teams that want a stronger digital presence.",
};

import Link from "next/link";
import { ArrowRight, CheckCircle2, Compass, Layers3, Rocket, ShieldCheck, Sparkles, Workflow } from "lucide-react";
import { Breadcrumbs, Button, CTABanner, FAQAccordion, FeatureCard, SectionHeading } from "@/components";

const services = [
  {
    icon: <Compass className="h-6 w-6" />,
    title: "Strategy & Positioning",
    description:
      "Clarify your message, sharpen your offer, and align your website around the outcomes your buyers care about most.",
    deliverables: ["Audience and competitor review", "Messaging framework", "Homepage and conversion map"],
    outcome: "A clearer story that helps the right clients say yes faster.",
  },
  {
    icon: <Layers3 className="h-6 w-6" />,
    title: "Website Design & Build",
    description:
      "Modern, responsive pages designed to look polished, load quickly, and guide visitors toward action.",
    deliverables: ["Sitemap and wireframes", "Custom UI design", "Next.js implementation"],
    outcome: "A high-performing site that feels premium on every screen size.",
  },
  {
    icon: <Workflow className="h-6 w-6" />,
    title: "Conversion Optimization",
    description:
      "Improve the parts of your site that influence trust, clarity, and lead generation without a full redesign.",
    deliverables: ["CTA and form review", "Section-by-section improvements", "Analytics-ready recommendations"],
    outcome: "More qualified inquiries from the traffic you already have.",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Ongoing Support",
    description:
      "Keep your site current with updates, landing pages, and performance-minded improvements after launch.",
    deliverables: ["Monthly content updates", "Landing page support", "Priority fixes and enhancements"],
    outcome: "A website that stays accurate, useful, and easy to evolve.",
  },
  {
    icon: <Sparkles className="h-6 w-6" />,
    title: "Brand Refresh",
    description:
      "Refine your visual identity so your digital presence feels consistent, credible, and memorable.",
    deliverables: ["Visual direction", "Typography and color guidance", "Reusable brand components"],
    outcome: "A more cohesive brand experience across every touchpoint.",
  },
  {
    icon: <Rocket className="h-6 w-6" />,
    title: "Launch Support",
    description:
      "Coordinate the final details so your new site goes live smoothly and with confidence.",
    deliverables: ["Pre-launch QA", "Redirect and SEO checks", "Launch-day support"],
    outcome: "A clean launch with fewer surprises and less downtime.",
  },
];

const processSteps = [
  "Discovery call to understand your goals, timeline, and current challenges.",
  "Scope and proposal with clear deliverables, milestones, and investment.",
  "Design and build with regular reviews so progress stays visible.",
  "Launch and handoff with documentation, training, and next-step recommendations.",
];

const engagementModels = [
  {
    title: "Project-Based",
    description: "Best for a defined website, redesign, or campaign with a clear start and finish.",
  },
  {
    title: "Retainer",
    description: "Ideal for teams that need ongoing design, content, or optimization support each month.",
  },
  {
    title: "Consulting",
    description: "Perfect for leadership teams that want strategic guidance before making a bigger investment.",
  },
];

const faqItems = [
  {
    question: "How do I know which service is the right fit?",
    answer:
      "Start with your immediate goal. If you need clarity, choose strategy. If you need a new site, choose design and build. If you already have traffic but want better results, choose optimization.",
  },
  {
    question: "What is the typical timeline?",
    answer:
      "Most focused projects take 3 to 8 weeks depending on scope, feedback speed, and content readiness. Larger engagements are mapped into phases so you always know what comes next.",
  },
  {
    question: "Can you work with our existing brand and content?",
    answer:
      "Yes. We can build on what you already have, refine it, or create a more complete system if the current materials need a stronger foundation.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--secondary)]/40 to-transparent">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Services" }]} />
        </div>
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex rounded-full border border-[var(--border)] bg-[var(--card)] px-3 py-1 text-sm font-medium text-[var(--muted-foreground)] shadow-sm">
              Services built to move buyers from interest to action
            </span>
            <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
              Clear, conversion-focused services for teams that want a stronger digital presence.
            </h1>
            <p className="mt-6 text-lg leading-8 text-[var(--muted-foreground)]">
              Whether you need a sharper message, a better website, or ongoing support after launch, our services are
              designed to help you attract the right clients and make it easier for them to choose you.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">
                Request a consultation
              </Button>
              <Button href="/pricing" variant="secondary" size="lg">
                View pricing
              </Button>
            </div>
          </div>

          <div className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                "Strategy that clarifies your offer",
                "Design that builds trust quickly",
                "Builds that are responsive and fast",
                "Support that keeps momentum going",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--background)] p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
                  <p className="text-sm leading-6">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Service list"
          title="Everything you need to launch with confidence."
          description="Choose a focused engagement or combine services into a full website and growth system."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <FeatureCard key={service.title} icon={service.icon} title={service.title} description={service.description} />
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--secondary)]/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="How we work"
            title="A simple process that keeps projects moving."
            description="You get clear milestones, thoughtful feedback loops, and a final result that is ready to ship."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-4">
            {processSteps.map((step, index) => (
              <div key={step} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--primary)] text-sm font-semibold text-[var(--primary-foreground)]">
                  {index + 1}
                </div>
                <p className="mt-4 text-base leading-7 text-[var(--foreground)]">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <SectionHeading
          eyebrow="Service detail blocks"
          title="Choose the level of support that matches your current stage."
          description="Each service can stand alone or be combined into a broader engagement depending on your goals."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {engagementModels.map((model) => (
            <div key={model.title} className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
              <h3 className="text-xl font-semibold">{model.title}</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{model.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          {services.slice(0, 2).map((service) => (
            <div key={service.title} className="rounded-3xl border border-[var(--border)] bg-[var(--background)] p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <div className="rounded-2xl bg-[var(--primary)]/10 p-3 text-[var(--primary)]">{service.icon}</div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
              </div>
              <p className="mt-4 text-[var(--muted-foreground)]">{service.description}</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">Deliverables</p>
                  <ul className="mt-3 space-y-2">
                    {service.deliverables.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm leading-6">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--primary)]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">Expected outcome</p>
                  <p className="mt-3 text-sm leading-6 text-[var(--foreground)]">{service.outcome}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-[var(--border)] bg-[var(--secondary)]/30">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
          <SectionHeading
            eyebrow="FAQ preview"
            title="A few quick answers before you reach out."
            description="If you still have questions, we can walk through the details on a discovery call."
          />
          <div className="mt-10">
            <FAQAccordion items={faqItems} />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <CTABanner
          headline="Ready to choose the right service?"
          description="Tell us what you are trying to improve, and we will recommend the most effective path forward."
          buttonLabel="Book a discovery call"
          buttonHref="/contact"
        />
        <div className="mt-6 flex justify-center">
          <Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-medium text-[var(--primary)] hover:underline">
            Compare packages <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}