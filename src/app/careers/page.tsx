import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Build thoughtful products with people who care about the details and the outcome.",
  description: "Learn more about build thoughtful products with people who care about the details and the outcome.",
};

import Link from "next/link";
import { ArrowRight, BadgeCheck, BriefcaseBusiness, Clock3, HeartHandshake, MapPin, Sparkles, Users } from "lucide-react";
import { Button, CTABanner, SectionHeading } from "@/components";

const openRoles = [
  {
    title: "Senior Product Designer",
    location: "Remote, North America",
    type: "Full-time",
    summary:
      "Lead end-to-end product experiences, shape design systems, and partner closely with engineering and product to ship polished work.",
  },
  {
    title: "Full-Stack Engineer",
    location: "Hybrid, New York",
    type: "Full-time",
    summary:
      "Build fast, accessible web experiences with Next.js, React, and TypeScript while helping improve our internal tooling and delivery process.",
  },
  {
    title: "Content Strategist",
    location: "Remote, Global",
    type: "Contract to hire",
    summary:
      "Turn complex ideas into clear messaging, launch content, and conversion-focused pages that help customers understand value quickly.",
  },
];

const values = [
  {
    icon: Users,
    title: "Collaborative by default",
    description:
      "We work in small, focused teams where feedback is direct, respectful, and aimed at making the work better.",
  },
  {
    icon: Sparkles,
    title: "High standards, low ego",
    description:
      "We care deeply about craft, but we keep the process practical so great ideas can move from concept to launch.",
  },
  {
    icon: HeartHandshake,
    title: "People-first culture",
    description:
      "We support flexible work, sustainable pace, and a culture where people can do their best work without burnout.",
  },
  {
    icon: BadgeCheck,
    title: "Growth with clarity",
    description:
      "Every role has clear expectations, regular feedback, and room to stretch into new responsibilities over time.",
  },
];

const hiringSteps = [
  {
    step: "01",
    title: "Apply with intent",
    description:
      "Send us your resume, portfolio, or GitHub profile along with a short note about the kind of work you want to do next.",
  },
  {
    step: "02",
    title: "Intro conversation",
    description:
      "You’ll meet with a hiring manager to discuss your experience, goals, and how you like to collaborate.",
  },
  {
    step: "03",
    title: "Role-specific review",
    description:
      "Depending on the position, we may ask for a practical exercise or a portfolio walkthrough focused on real scenarios.",
  },
  {
    step: "04",
    title: "Team fit and offer",
    description:
      "Final conversations help us align on expectations, then we move quickly with a clear offer and onboarding plan.",
  },
];

export default function CareersPage() {
  return (
    <main>
      <section className="border-b border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,247,255,0.9))]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--muted-foreground)] shadow-sm">
                <BriefcaseBusiness className="h-4 w-4 text-[color:var(--primary)]" />
                Careers at a team that values clarity
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl lg:text-6xl">
                Build thoughtful products with people who care about the details and the outcome.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[color:var(--muted-foreground)]">
                We’re looking for curious, reliable, and collaborative people who want to do meaningful work.
                If you enjoy solving real problems, shipping polished experiences, and learning fast, you’ll fit
                right in.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#open-roles" size="lg">
                  View open roles
                </Button>
                <Button href="/contact" variant="secondary" size="lg">
                  Reach out to talent team
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-sm sm:col-span-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--primary)]/10 text-[color:var(--primary)]">
                  <Clock3 className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">Flexible, focused, sustainable</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                  We value deep work, clear priorities, and a pace that supports long-term quality rather than
                  short-term burnout.
                </p>
              </div>
              <div className="rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                  <MapPin className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">Remote-friendly</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                  Work where you do your best thinking, with intentional collaboration and strong documentation.
                </p>
              </div>
              <div className="rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">Room to grow</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                  We invest in learning, mentorship, and opportunities to expand your scope over time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="open-roles" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Open roles"
            title="Join the team"
            description="We’re hiring people who care about quality, communicate clearly, and want to make the experience better for customers and teammates alike."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {openRoles.map((role) => (
              <article key={role.title} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-[color:var(--foreground)]">{role.title}</h3>
                    <p className="mt-2 text-sm text-[color:var(--muted-foreground)]">{role.summary}</p>
                  </div>
                </div>
                <div className="mt-6 flex flex-wrap gap-2 text-sm">
                  <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--muted)] px-3 py-1 font-medium text-[color:var(--foreground)]">
                    <MapPin className="h-4 w-4 text-[color:var(--primary)]" />
                    {role.location}
                  </span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--muted)] px-3 py-1 font-medium text-[color:var(--foreground)]">
                    <BadgeCheck className="h-4 w-4 text-[color:var(--accent)]" />
                    {role.type}
                  </span>
                </div>
                <div className="mt-6">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[color:var(--primary)] transition hover:gap-3"
                  >
                    Apply for this role
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[color:var(--border)] bg-[color:var(--muted)]/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Culture and values"
            title="A workplace built for trust, craft, and momentum"
            description="We keep the environment supportive and the expectations clear so people can do their best work without unnecessary friction."
          />
          <div className="mt-10 grid gap-5 md:grid-cols-2">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-3xl border border-[color:var(--border)] bg-white p-6 shadow-sm">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--primary)]/10 text-[color:var(--primary)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Hiring process"
            title="What to expect when you apply"
            description="Our process is designed to be respectful of your time and transparent about what happens next."
          />
          <div className="mt-10 grid gap-5 lg:grid-cols-4">
            {hiringSteps.map((step) => (
              <div key={step.step} className="rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-sm">
                <div className="text-sm font-semibold text-[color:var(--primary)]">{step.step}</div>
                <h3 className="mt-3 text-lg font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--muted)]/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            headline="Think you’d be a great fit, even if the perfect role isn’t listed?"
            description="We’re always interested in meeting thoughtful people who bring strong judgment, curiosity, and a bias toward action."
            buttonLabel="Send your introduction"
            buttonHref="/contact"
          />
        </div>
      </section>
    </main>
  );
}