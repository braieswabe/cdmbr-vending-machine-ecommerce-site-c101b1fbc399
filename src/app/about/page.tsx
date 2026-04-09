import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "We help ambitious teams show up with clarity, confidence, and
              credibility.",
  description: "Learn more about we help ambitious teams show up with clarity, confidence, and
              credibility.",
};

import { Breadcrumbs, FeatureCard, SectionHeading, TeamMemberCard } from "@/components";

const values = [
  {
    icon: "heart-handshake",
    title: "Partnership first",
    description:
      "We listen carefully, communicate clearly, and treat every project like a shared responsibility.",
  },
  {
    icon: "badge-check",
    title: "Quality without compromise",
    description:
      "We care about the details that shape trust: structure, clarity, polish, and consistency.",
  },
  {
    icon: "lightbulb",
    title: "Practical thinking",
    description:
      "We favor decisions that move the work forward and create measurable value for your business.",
  },
  {
    icon: "refresh-cw",
    title: "Continuous improvement",
    description:
      "We learn from every launch and use feedback to make the next version even stronger.",
  },
];

const team = [
  {
    icon: "user-circle",
    title: "Maya Chen — Founder & Strategy Lead",
    description:
      "Maya brings a calm, structured approach to brand positioning, project planning, and client communication.",
  },
  {
    icon: "pen-line",
    title: "Jordan Patel — Design Director",
    description:
      "Jordan shapes clean, modern interfaces that feel premium, readable, and easy to navigate.",
  },
  {
    icon: "code-2",
    title: "Elena Brooks — Technical Lead",
    description:
      "Elena turns design into fast, reliable experiences with a strong focus on performance and accessibility.",
  },
  {
    icon: "messages-square",
    title: "Sam Rivera — Client Success",
    description:
      "Sam keeps projects organized, timelines clear, and feedback loops efficient from kickoff to launch.",
  },
];

const milestones = [
  {
    year: "2019",
    title: "Founded with a simple goal",
    description:
      "We started by helping small teams present themselves with more clarity and confidence online.",
  },
  {
    year: "2021",
    title: "Expanded into full website builds",
    description:
      "As demand grew, we added design systems, content strategy, and development support under one roof.",
  },
  {
    year: "2023",
    title: "Refined a repeatable process",
    description:
      "We standardized our workflow to deliver faster launches without sacrificing quality or collaboration.",
  },
  {
    year: "Today",
    title: "Trusted by growing businesses",
    description:
      "We partner with teams that want a website they can be proud of and a process they can rely on.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <section className="bg-gradient-to-br from-background via-muted/30 to-primary/10">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <Breadcrumbs
            items={[
              { label: "Home", href: "/" },
              { label: "About" },
            ]}
          />
          <div className="mt-8 max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              About our company
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              We help ambitious teams show up with clarity, confidence, and
              credibility.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our work is built around a simple belief: when a business looks
              trustworthy and communicates clearly, it becomes easier for the
              right people to say yes.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Our story"
            title="Founded to make professional websites feel more human."
            description="We saw too many businesses with strong expertise and weak digital presentation. Our mission is to close that gap with thoughtful strategy, clean design, and dependable execution."
          />
          <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
              <h2 className="text-2xl font-semibold">Why we started</h2>
              <p className="mt-4 text-muted-foreground">
                Great companies often struggle to explain what makes them
                different. We built this studio to help them tell a sharper
                story, create a better first impression, and turn interest into
                action.
              </p>
              <p className="mt-4 text-muted-foreground">
                From the beginning, our focus has been on practical outcomes:
                better clarity, stronger trust, and a smoother path for people
                who are ready to engage.
              </p>
            </div>
            <div className="rounded-3xl bg-primary/5 p-8">
              <h2 className="text-2xl font-semibold">Mission</h2>
              <p className="mt-4 text-muted-foreground">
                To create polished, conversion-focused websites that help
                businesses communicate their value with confidence.
              </p>
              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                {[
                  "Clear messaging",
                  "Modern design",
                  "Reliable delivery",
                  "Long-term value",
                ].map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border bg-background px-4 py-4 text-sm font-medium"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Values"
            title="The principles that guide how we work."
            description="These commitments shape every conversation, every design decision, and every launch."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {values.map((value) => (
              <FeatureCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Team"
            title="A small, senior team with a hands-on approach."
            description="You work directly with people who care about the details and understand how to move a project from idea to launch."
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member) => (
              <TeamMemberCard key={member.title} {...member} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Milestones"
            title="A steady path of growth, learning, and better outcomes."
            description="Each milestone reflects a stronger process, deeper expertise, and a better experience for our clients."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-4">
            {milestones.map((milestone) => (
              <div
                key={milestone.year}
                className="rounded-3xl border border-border bg-card p-6 shadow-sm"
              >
                <p className="text-sm font-semibold text-primary">{milestone.year}</p>
                <h3 className="mt-3 text-xl font-semibold">{milestone.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {milestone.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10">
          <SectionHeading
            eyebrow="Why choose us"
            title="A dependable partner for teams that care about quality."
            description="We combine strategic thinking, polished design, and a collaborative process so your website feels as strong as your business."
          />
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {[
              {
                title: "Senior-level attention",
                text: "You get thoughtful guidance and direct communication from people who know how to make decisions count.",
              },
              {
                title: "Built for trust",
                text: "Every page is designed to help visitors understand your value quickly and feel confident taking the next step.",
              },
              {
                title: "Easy to work with",
                text: "We keep the process organized, responsive, and transparent so the experience feels smooth from start to finish.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-border bg-card p-8 shadow-sm"
              >
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-muted-foreground">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}