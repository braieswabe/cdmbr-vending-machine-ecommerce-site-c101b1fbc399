import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Trusted by teams that want clarity, momentum, and measurable results.",
  description: "Learn more about trusted by teams that want clarity, momentum, and measurable results.",
};

import Link from "next/link";
import { ArrowRight, PlayCircle, Quote, Star } from "lucide-react";
import { Button, CTABanner, ResponsiveGrid, SectionHeading, StatsRow, TestimonialCard } from "@/components";

const testimonials = [
  {
    icon: <Quote className="h-5 w-5" />,
    title: "A partner who made the process feel easy",
    description: "“They translated a complicated service offering into a site that finally feels clear, credible, and easy to navigate. Our team saw better lead quality within the first month.”",
    name: "Maya Chen",
    role: "Marketing Director",
    company: "Northstar Finance",
    rating: 5,
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "Beautiful design with real business impact",
    description: "“We needed a premium look without sacrificing speed or usability. The final result elevated our brand and gave sales a stronger story to tell.”",
    name: "Jordan Ellis",
    role: "Founder",
    company: "Atlas Studio",
    rating: 5,
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "Clear communication from start to finish",
    description: "“Every milestone was explained clearly, every decision had a reason, and the launch landed on schedule. That level of reliability is rare.”",
    name: "Priya Nair",
    role: "Operations Lead",
    company: "Harbor Health",
    rating: 5,
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "Our conversion path is much stronger now",
    description: "“The new structure helped visitors understand our offer faster and made it easier for qualified buyers to request a quote.”",
    name: "Ethan Brooks",
    role: "VP of Sales",
    company: "Summit Supply Co.",
    rating: 5,
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "A thoughtful team that listens closely",
    description: "“They took the time to understand our audience and built a site that feels aligned with who we are and where we’re going.”",
    name: "Sofia Martinez",
    role: "Creative Director",
    company: "Evergreen Property Group",
    rating: 5,
  },
  {
    icon: <Quote className="h-5 w-5" />,
    title: "The best redesign we’ve launched",
    description: "“The messaging is sharper, the layout is cleaner, and the whole experience now supports the way our buyers actually make decisions.”",
    name: "Caleb Turner",
    role: "Product Marketing Manager",
    company: "Pulse Analytics",
    rating: 5,
  },
];

const summaryStats = [
  { label: "Average review score", value: "4.9/5" },
  { label: "Projects that led to repeat work", value: "72%" },
  { label: "Clients who would recommend us", value: "98%" },
  { label: "Average response time", value: "< 1 business day" },
];

export default function TestimonialsPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-[var(--border)] bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="max-w-3xl">
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-white px-3 py-1 text-sm font-medium text-[var(--primary)] shadow-sm">
              Client voices
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Trusted by teams that want clarity, momentum, and measurable results.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              These testimonials reflect what matters most: a smooth process, thoughtful communication, and work that helps businesses grow with confidence.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">Start your project</Button>
              <Button href="/portfolio" variant="secondary" size="lg">View selected work</Button>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonial list"
          title="Real feedback from clients across industries"
          description="From first-time founders to established teams, clients consistently value the same things: strategic thinking, polished execution, and dependable delivery."
        />
        <ResponsiveGrid columns={3} className="mt-8">
          {testimonials.map((item) => (
            <TestimonialCard
              key={item.name}
              icon={item.icon}
              title={item.title}
              description={
                <div className="space-y-4">
                  <p>{item.description}</p>
                  <div className="flex items-center gap-1 text-amber-500" aria-label={`${item.rating} out of 5 stars`}>
                    {Array.from({ length: item.rating }).map((_, index) => (
                      <Star key={index} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <div>
                    <p className="font-semibold text-slate-950">{item.name}</p>
                    <p className="text-sm text-slate-500">
                      {item.role} · {item.company}
                    </p>
                  </div>
                </div>
              }
            />
          ))}
        </ResponsiveGrid>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Video testimonials"
            title="Short-form feedback that adds another layer of trust"
            description="Recorded client reactions help future customers hear the confidence, clarity, and relief that come from a well-run project."
          />
          <ResponsiveGrid columns={2} className="mt-8">
            {[
              { title: "Launch recap from a fintech team", duration: "2:14", context: "How a clearer product story improved demo quality." },
              { title: "Brand refresh feedback from a studio founder", duration: "1:48", context: "Why the new site better reflects premium positioning." },
            ].map((video) => (
              <article key={video.title} className="overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm">
                <div className="relative aspect-video bg-gradient-to-br from-slate-900 to-slate-700">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/95 shadow-lg">
                      <PlayCircle className="h-8 w-8 text-[var(--primary)]" />
                    </div>
                  </div>
                  <div className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-sm font-medium text-white">
                    {video.duration}
                  </div>
                </div>
                <div className="space-y-2 p-6">
                  <h2 className="text-xl font-semibold text-slate-950">{video.title}</h2>
                  <p className="text-sm leading-6 text-slate-600">{video.context}</p>
                </div>
              </article>
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <StatsRow
          title="A strong reputation built on consistent delivery"
          description="The numbers below reflect the kind of experience clients can expect when strategy, design, and communication all work together."
          stats={summaryStats}
        />
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <CTABanner
          headline="Ready to work with a team clients are happy to recommend?"
          description="If you want a partner who communicates clearly and delivers polished work, we’d love to hear about your goals."
          buttonLabel="Schedule a consultation"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}