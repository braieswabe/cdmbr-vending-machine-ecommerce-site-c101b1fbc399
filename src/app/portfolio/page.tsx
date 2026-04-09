import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Proof of work that turns strong ideas into measurable results.",
  description: "Learn more about proof of work that turns strong ideas into measurable results.",
};

import Link from "next/link";
import { ArrowRight, BarChart3, CheckCircle2, Clock3, Globe2, Layers3, Sparkles, TrendingUp } from "lucide-react";
import { Breadcrumbs, Button, CaseStudyCard, CTABanner, FeatureCard, ImageGallery, ResponsiveGrid, SectionHeading, StatsRow } from "@/components";

const projects = [
  {
    title: "Northstar Finance Platform",
    description: "A polished product launch site and onboarding flow that helped the team turn complex financial services into a clear, conversion-friendly experience.",
    tags: ["Fintech", "UX Strategy", "Conversion"],
    image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Harbor Health Clinic Network",
    description: "A multi-location healthcare presence with improved service discovery, stronger local SEO, and a calmer booking journey for patients.",
    tags: ["Healthcare", "Local SEO", "Accessibility"],
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Summit Supply Co.",
    description: "A B2B ecommerce redesign that clarified product lines, reduced friction in the quote request process, and elevated trust for procurement teams.",
    tags: ["B2B", "Ecommerce", "Lead Gen"],
    image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Atlas Studio Rebrand",
    description: "A brand refresh and portfolio site that positioned the studio as a premium partner for ambitious founders and fast-moving teams.",
    tags: ["Branding", "Creative", "Portfolio"],
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Evergreen Property Group",
    description: "A real estate marketing experience built to showcase listings beautifully, support agent credibility, and drive more qualified inquiries.",
    tags: ["Real Estate", "Lead Quality", "Visual Design"],
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Pulse Analytics Dashboard",
    description: "A SaaS marketing site and product narrative that made a technical platform easier to understand for decision-makers and buyers.",
    tags: ["SaaS", "Messaging", "Analytics"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80",
  },
];

const highlights = [
  {
    icon: <Layers3 className="h-5 w-5" />,
    number: "01",
    title: "Discovery that sharpens the brief",
    description: "We align on audience, offer, and success metrics before design begins, so every page supports a clear business goal.",
  },
  {
    icon: <Sparkles className="h-5 w-5" />,
    number: "02",
    title: "Design that feels premium and purposeful",
    description: "Every layout balances visual polish with usability, helping visitors understand value quickly and take the next step.",
  },
  {
    icon: <TrendingUp className="h-5 w-5" />,
    number: "03",
    title: "Builds that support measurable growth",
    description: "From faster load times to stronger conversion paths, the final experience is designed to perform as well as it looks.",
  },
];

const metrics = [
  { label: "Average lift in qualified inquiries", value: "38%" },
  { label: "Projects delivered on or ahead of schedule", value: "96%" },
  { label: "Repeat clients and referrals", value: "72%" },
  { label: "Average stakeholder satisfaction", value: "4.9/5" },
];

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    alt: "Team collaborating around a product strategy session",
    caption: "Strategy workshops that turn goals into a clear execution plan.",
  },
  {
    src: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80",
    alt: "Designer reviewing interface layouts on a laptop",
    caption: "Conversion-focused UI systems with consistent hierarchy.",
  },
  {
    src: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80",
    alt: "Creative team presenting a polished brand concept",
    caption: "Brand systems that feel modern, credible, and memorable.",
  },
];

export default function PortfolioPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="border-b border-[var(--border)] bg-gradient-to-b from-white to-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Portfolio" }]} />
        </div>
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex items-center rounded-full border border-[var(--border)] bg-white px-3 py-1 text-sm font-medium text-[var(--primary)] shadow-sm">
              Selected work
            </span>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              Proof of work that turns strong ideas into measurable results.
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Explore a range of launches, redesigns, and brand experiences built to improve clarity, increase trust, and help teams win better opportunities.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href="/contact" size="lg">Discuss a similar project</Button>
              <Button href="/services" variant="secondary" size="lg">See how we work</Button>
            </div>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <FeatureCard icon={<Globe2 className="h-5 w-5" />} number="24" title="Markets served" description="From local service brands to national digital products." />
            <FeatureCard icon={<Clock3 className="h-5 w-5" />} number="6–10" title="Week launch windows" description="Focused delivery for teams that need momentum without compromise." />
            <FeatureCard icon={<CheckCircle2 className="h-5 w-5" />} number="100%" title="Custom execution" description="No templates, no filler—every build is tailored to the brief." />
            <FeatureCard icon={<BarChart3 className="h-5 w-5" />} number="4.9/5" title="Client satisfaction" description="Clear communication, thoughtful design, and dependable delivery." />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Project grid"
          title="A curated selection of work across industries and goals"
          description="Filter by category to quickly find examples that match your business model, audience, or visual direction."
        />
        <div className="mt-8 flex flex-wrap gap-3">
          {["All", "SaaS", "B2B", "Healthcare", "Branding", "Ecommerce"].map((item, index) => (
            <button
              key={item}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                index === 0
                  ? "border-[var(--primary)] bg-[var(--primary)] text-white"
                  : "border-[var(--border)] bg-white text-slate-700 hover:border-[var(--primary)] hover:text-[var(--primary)]"
              }`}
            >
              {item}
            </button>
          ))}
        </div>
        <ResponsiveGrid columns={3} className="mt-8">
          {projects.map((project) => (
            <article key={project.title} className="group overflow-hidden rounded-3xl border border-[var(--border)] bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/10 to-transparent opacity-0 transition group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 translate-y-4 p-5 opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">
                  <Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 shadow-sm">
                    Request a proposal <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-600">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-xl font-semibold text-slate-950">{project.title}</h2>
                <p className="text-sm leading-6 text-slate-600">{project.description}</p>
              </div>
            </article>
          ))}
        </ResponsiveGrid>
      </section>

      <section className="bg-slate-50 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Case study highlights"
            title="Three patterns that show up in the strongest projects"
            description="Each engagement starts with a business problem and ends with a clearer, more effective customer experience."
          />
          <ResponsiveGrid columns={3} className="mt-8">
            {highlights.map((item) => (
              <CaseStudyCard key={item.title} icon={item.icon} number={item.number} title={item.title} description={item.description} />
            ))}
          </ResponsiveGrid>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <StatsRow
          title="Results that matter to leadership teams"
          description="The strongest portfolio work does more than look good—it helps teams move faster, communicate better, and convert more of the right opportunities."
          stats={metrics}
        />
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ImageGallery
            title="Visual quality across every touchpoint"
            description="Consistent art direction, strong composition, and polished presentation help each project feel cohesive and credible."
            images={galleryImages}
          />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <CTABanner
          headline="Have a project in mind? Let’s shape it into something that performs."
          description="Share your goals, timeline, and audience. We’ll recommend a practical path forward and a proposal tailored to your needs."
          buttonLabel="Start the conversation"
          buttonHref="/contact"
        />
      </section>
    </main>
  );
}