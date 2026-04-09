import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Practical ideas for clearer messaging, stronger pages, and better results",
  description: "Learn more about practical ideas for clearer messaging, stronger pages, and better results",
};

import Link from "next/link";
import { ArrowRight, CalendarDays, ChevronRight, Clock3, Filter, PenTool, Search, Sparkles } from "lucide-react";
import { BlogCard, Button, NewsletterSignup, SectionHeading } from "@/components";

const featuredPost = {
  title: "How to build a website that earns trust before the first call",
  excerpt:
    "The strongest websites do three things well: they explain the offer clearly, prove the outcome, and make the next step feel easy. Here is the framework we use to do exactly that.",
  category: "Strategy",
  date: "April 9, 2026",
  readTime: "8 min read",
};

const posts = [
  {
    category: "Design",
    title: "7 layout decisions that improve conversion on service pages",
    excerpt:
      "From hero hierarchy to CTA placement, these practical choices help visitors understand your offer faster and act with more confidence.",
    date: "April 2, 2026",
    author: "Maya Chen",
  },
  {
    category: "SEO",
    title: "A simple content structure for ranking and readability",
    excerpt:
      "Learn how to organize pages so they serve both search engines and real people without sounding robotic or overstuffed.",
    date: "March 28, 2026",
    author: "Jordan Lee",
  },
  {
    category: "Brand",
    title: "What makes a website feel premium, even before the visuals",
    excerpt:
      "Premium perception comes from clarity, consistency, and confidence in the message as much as it does from color and imagery.",
    date: "March 21, 2026",
    author: "Ava Patel",
  },
  {
    category: "Growth",
    title: "How to turn a homepage into a better lead generator",
    excerpt:
      "A homepage should do more than introduce your business. It should guide the right visitor toward the right action with minimal friction.",
    date: "March 14, 2026",
    author: "Maya Chen",
  },
  {
    category: "Content",
    title: "Writing concise copy that still feels persuasive",
    excerpt:
      "Short copy can still be compelling when it focuses on outcomes, removes ambiguity, and speaks directly to the reader's priorities.",
    date: "March 7, 2026",
    author: "Jordan Lee",
  },
  {
    category: "Product",
    title: "When to add a feature page and what it should include",
    excerpt:
      "Feature pages work best when they answer specific questions, show practical use cases, and connect capabilities to business value.",
    date: "February 28, 2026",
    author: "Ava Patel",
  },
];

const topics = ["All topics", "Strategy", "Design", "SEO", "Brand", "Growth", "Content", "Product"];

export default function BlogPage() {
  return (
    <main className="bg-[var(--background)] text-[var(--foreground)]">
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_0.6fr] lg:items-start">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--card)] px-4 py-2 text-sm font-medium text-[var(--muted-foreground)] shadow-sm">
              <PenTool className="h-4 w-4 text-[var(--accent)]" />
              Insights for teams that want a better website
            </div>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Practical ideas for clearer messaging, stronger pages, and better results
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
              Our blog shares concise, actionable guidance on web strategy, content, design, and conversion. Every article is written to help you make smarter decisions and ship with confidence.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="/contact">Talk to our team</Button>
              <Button href="/services" variant="secondary">
                Explore services
              </Button>
            </div>
          </div>

          <aside className="rounded-3xl border border-[var(--border)] bg-[var(--card)] p-6 shadow-sm">
            <div className="flex items-center gap-2 text-sm font-semibold text-[var(--muted-foreground)]">
              <Filter className="h-4 w-4" />
              Browse by topic
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {topics.map((topic) => (
                <Link
                  key={topic}
                  href="/blog"
                  className="rounded-full border border-[var(--border)] px-3 py-2 text-sm font-medium text-[var(--foreground)] transition hover:border-[var(--primary)] hover:text-[var(--primary)]"
                >
                  {topic}
                </Link>
              ))}
            </div>
            <div className="mt-8 rounded-2xl bg-[var(--muted)]/50 p-4">
              <div className="flex items-center gap-2 text-sm font-semibold">
                <Search className="h-4 w-4 text-[var(--accent)]" />
                What readers come here for
              </div>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[var(--muted-foreground)]">
                <li className="flex gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  Better homepage and service page messaging
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  SEO-friendly content structure
                </li>
                <li className="flex gap-2">
                  <ChevronRight className="mt-0.5 h-4 w-4 shrink-0 text-[var(--primary)]" />
                  Conversion tips for growing teams
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionHeading
          eyebrow="Featured article"
          title={featuredPost.title}
          description={featuredPost.excerpt}
        />
        <div className="mt-8 overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-sm">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="bg-gradient-to-br from-[var(--primary)] via-[var(--accent)] to-[var(--secondary)] p-10 text-white">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                {featuredPost.category}
              </div>
              <h2 className="mt-6 text-3xl font-semibold tracking-tight sm:text-4xl">{featuredPost.title}</h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-white/90">{featuredPost.excerpt}</p>
              <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-white/85">
                <span className="inline-flex items-center gap-2">
                  <CalendarDays className="h-4 w-4" />
                  {featuredPost.date}
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock3 className="h-4 w-4" />
                  {featuredPost.readTime}
                </span>
              </div>
              <div className="mt-8">
                <Button href="/contact" variant="secondary">
                  Discuss your content strategy
                </Button>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[var(--muted)]/40 p-10">
              <div className="aspect-[4/3] w-full rounded-3xl border border-dashed border-[var(--border)] bg-[linear-gradient(135deg,rgba(59,130,246,0.12),rgba(16,185,129,0.12))] p-6 shadow-inner">
                <div className="flex h-full flex-col justify-between rounded-2xl bg-[var(--card)] p-6">
                  <div className="space-y-3">
                    <div className="h-3 w-24 rounded-full bg-[var(--primary)]/20" />
                    <div className="h-8 w-3/4 rounded-full bg-[var(--foreground)]/10" />
                    <div className="h-8 w-5/6 rounded-full bg-[var(--foreground)]/10" />
                    <div className="h-8 w-2/3 rounded-full bg-[var(--foreground)]/10" />
                  </div>
                  <div className="rounded-2xl bg-[var(--muted)] p-4 text-sm text-[var(--muted-foreground)]">
                    A featured article preview designed to feel editorial, credible, and easy to scan.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <SectionHeading
          eyebrow="Latest articles"
          title="Fresh ideas for teams building with intent"
          description="Browse practical posts on messaging, design, SEO, and growth."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.map((post, index) => (
            <article key={post.title} className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--card)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <div className="aspect-[16/10] bg-gradient-to-br from-[var(--primary)]/15 via-[var(--accent)]/10 to-[var(--secondary)]/20 p-6">
                <div className="flex h-full items-end">
                  <div className="rounded-full bg-[var(--card)] px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                    Article {index + 1}
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between gap-4 text-xs font-semibold uppercase tracking-wide text-[var(--muted-foreground)]">
                  <span>{post.category}</span>
                  <span>{post.date}</span>
                </div>
                <h3 className="mt-4 text-xl font-semibold leading-tight">{post.title}</h3>
                <p className="mt-3 text-sm leading-6 text-[var(--muted-foreground)]">{post.excerpt}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-sm font-medium text-[var(--foreground)]">{post.author}</span>
                  <Link href="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary)] transition hover:gap-3">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <NewsletterSignup />
      </section>
    </main>
  );
}