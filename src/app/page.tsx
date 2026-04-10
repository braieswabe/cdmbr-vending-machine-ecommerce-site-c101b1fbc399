import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A polished digital presence that helps your business win better opportunities.",
  description:
    "Learn more about a polished digital presence that helps your business win better opportunities.",
};

import Link from "next/link";
import {
  Button,
  CTABanner,
  FeatureCard,
  Hero,
  LogoStrip,
  ResponsiveGrid,
  SectionHeading,
  StatsRow,
  TestimonialCard,
} from "@/components";

const trustedLogos = [
  { name: "Northstar Health" },
  { name: "Aster & Co." },
  { name: "Summit Retail" },
  { name: "BluePeak Finance" },
  { name: "Harborline Studio" },
  { name: "Vertex Labs" },
];

const benefits = [
  {
    icon: "sparkles",
    title: "Clear strategy, not guesswork",
    description:
      "We turn scattered ideas into a focused plan that aligns your team, your timeline, and your growth goals.",
  },
  {
    icon: "shield-check",
    title: "Reliable delivery",
    description:
      "Expect proactive communication, clean execution, and a process designed to keep projects moving without surprises.",
  },
  {
    icon: "trending-up",
    title: "Built for measurable outcomes",
    description:
      "Every engagement is shaped around the results that matter most: more qualified leads, stronger trust, and better conversion.",
  },
  {
    icon: "users",
    title: "A partner your team can trust",
    description:
      "We work like an extension of your business, bringing senior-level thinking and hands-on support from day one.",
  },
  {
    icon: "layout-dashboard",
    title: "Modern, polished presentation",
    description:
      "Your brand deserves a digital presence that feels credible, current, and easy to navigate on every device.",
  },
  {
    icon: "message-circle-more",
    title: "Simple next steps",
    description:
      "From first call to final handoff, we make it easy to understand what happens next and how to get started.",
  },
];

const services = [
  {
    icon: "compass",
    number: "01",
    title: "Strategy & planning",
    description:
      "Define the right message, structure, and priorities before design or development begins.",
  },
  {
    icon: "pen-tool",
    number: "02",
    title: "Design & build",
    description:
      "Create a polished experience that looks sharp, loads fast, and supports your business goals.",
  },
  {
    icon: "bar-chart-3",
    number: "03",
    title: "Launch & optimize",
    description:
      "Go live with confidence, then refine based on real feedback, performance, and conversion data.",
  },
];

const testimonials = [
  {
    icon: "quote",
    title: "“The process was refreshingly clear.”",
    description:
      "We went from a vague idea to a polished launch in weeks. The team kept everything organized and made the decisions feel easy.",
  },
  {
    icon: "star",
    title: "“Our site finally reflects our quality.”",
    description:
      "The new experience feels premium, credible, and much easier for prospects to understand. It has already improved inbound inquiries.",
  },
  {
    icon: "thumbs-up",
    title: "“Fast, thoughtful, and dependable.”",
    description:
      "Communication was excellent, the work was sharp, and the final result exceeded what we expected from the first conversation.",
  },
];

const stats = [
  { value: "120+", label: "projects launched" },
  { value: "98%", label: "client satisfaction" },
  { value: "3.2x", label: "average lead lift" },
  { value: "24h", label: "typical response time" },
];

export default function HomePage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-primary via-primary/90 to-secondary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10 lg:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium backdrop-blur">
                Professional websites that build trust and drive action
              </span>
              <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
                A polished digital presence that helps your business win better
                opportunities.
              </h1>
              <p className="mt-6 text-lg leading-8 text-primary-foreground/85 sm:text-xl">
                We design and build modern websites for teams that want clarity,
                credibility, and a smoother path from first visit to first
                conversation.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="/contact" size="lg" variant="secondary">
                  Book a discovery call
                </Button>
                <Button
                  href="/portfolio"
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-primary-foreground hover:bg-white/10"
                >
                  View selected work
                </Button>
              </div>
              <div className="mt-8 flex flex-wrap gap-4 text-sm text-primary-foreground/80">
                <span>Fast turnaround</span>
                <span>Conversion-focused design</span>
                <span>Mobile-first experience</span>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 -z-10 rounded-[2rem] bg-white/10 blur-3xl" />
              <div className="overflow-hidden rounded-[2rem] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur">
                <div className="rounded-[1.5rem] bg-background p-6 text-foreground">
                  <div className="flex items-center justify-between border-b border-border pb-4">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">
                        Launch-ready website
                      </p>
                      <p className="text-xl font-semibold">Built for momentum</p>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                      Live in weeks
                    </div>
                  </div>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-2xl bg-muted p-4">
                      <p className="text-sm text-muted-foreground">Primary CTA</p>
                      <p className="mt-2 text-lg font-semibold">
                        Request a quote
                      </p>
                    </div>
                    <div className="rounded-2xl bg-muted p-4">
                      <p className="text-sm text-muted-foreground">Secondary CTA</p>
                      <p className="mt-2 text-lg font-semibold">
                        Explore services
                      </p>
                    </div>
                    <div className="rounded-2xl bg-muted p-4 sm:col-span-2">
                      <p className="text-sm text-muted-foreground">
                        What visitors get
                      </p>
                      <p className="mt-2 text-lg font-semibold">
                        Clear messaging, strong visuals, and a frictionless path
                        to contact
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 py-10 sm:px-8 lg:px-10">
          <LogoStrip logos={trustedLogos} />
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Why teams choose us"
            title="Everything your website needs to feel credible, clear, and conversion-ready."
            description="We focus on the details that shape trust: strong positioning, thoughtful design, and a smooth experience from the first click."
          />
          <ResponsiveGrid columns={3} className="mt-12">
            {benefits.map((benefit) => (
              <FeatureCard key={benefit.title} {...benefit} />
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Core services"
            title="A simple process that takes you from idea to launch."
            description="Whether you need a new site or a sharper digital presence, we keep the work structured, collaborative, and easy to follow."
          />
          <ResponsiveGrid columns={3} className="mt-12">
            {services.map((service) => (
              <FeatureCard key={service.title} {...service} />
            ))}
          </ResponsiveGrid>

          <div className="mt-12 grid gap-6 rounded-3xl border border-border bg-card p-8 shadow-sm lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <p className="text-3xl font-semibold tracking-tight text-foreground">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="How it works"
            title="A straightforward process that keeps momentum high."
            description="You always know what happens next, what we need from you, and how each step moves the project forward."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                step: "01",
                title: "Discovery",
                text: "We clarify goals, audience, and the outcomes that matter most to your business.",
              },
              {
                step: "02",
                title: "Design & build",
                text: "We shape the content, visuals, and interactions into a polished experience.",
              },
              {
                step: "03",
                title: "Launch & support",
                text: "We launch with confidence and help you refine the site as real feedback comes in.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm"
              >
                <p className="text-sm font-semibold text-primary">{item.step}</p>
                <h3 className="mt-4 text-2xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Client feedback"
            title="Proof that the experience feels as good as the result."
            description="Our clients value clarity, responsiveness, and a final product that makes their business look as strong as it truly is."
          />
          <ResponsiveGrid columns={3} className="mt-12">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.title} {...testimonial} />
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <CTABanner
            headline="Ready for a website that helps your business stand out?"
            description="Let’s build a polished experience that earns trust, explains your value, and makes it easier for the right people to reach out."
            buttonLabel="Start your project"
            buttonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}
