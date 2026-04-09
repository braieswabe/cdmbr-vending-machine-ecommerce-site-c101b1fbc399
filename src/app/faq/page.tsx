"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ChevronDown, Search, MessageCircleQuestion, ShieldCheck, Sparkles, Timer } from "lucide-react";
import { Button, CTABanner, Footer, NavBar, SectionHeading } from "@/components";

type FAQItem = {
  question: string;
  answer: string;
  category: "Services" | "Pricing" | "Process" | "Support" | "Logistics";
};

const faqItems: FAQItem[] = [
  {
    category: "Services",
    question: "What kinds of projects do you take on?",
    answer:
      "We work with businesses that need a polished digital presence, clearer messaging, and a website that supports growth. That includes brand refreshes, marketing sites, service pages, portfolio builds, and conversion-focused redesigns.",
  },
  {
    category: "Services",
    question: "Can you help if we already have a website?",
    answer:
      "Yes. Many clients come to us with an existing site that needs better structure, stronger visuals, or improved lead generation. We can refine what is working and rebuild what is holding you back.",
  },
  {
    category: "Pricing",
    question: "How do you price projects?",
    answer:
      "Pricing depends on scope, timeline, and complexity. We keep estimates transparent and practical, with clear deliverables so you know exactly what is included before work begins.",
  },
  {
    category: "Pricing",
    question: "Do you offer fixed pricing or custom quotes?",
    answer:
      "Both. Smaller, well-defined projects can be packaged with fixed pricing, while larger or more strategic engagements are quoted after a discovery call and scope review.",
  },
  {
    category: "Process",
    question: "What does your process look like?",
    answer:
      "Our process is simple: discovery, strategy, design, build, review, and launch. You get regular updates, clear milestones, and a collaborative experience without unnecessary complexity.",
  },
  {
    category: "Process",
    question: "How long does a typical project take?",
    answer:
      "Most projects take between 3 and 8 weeks depending on the size of the site, the amount of content, and how quickly feedback is provided. We will always share a realistic timeline upfront.",
  },
  {
    category: "Support",
    question: "Do you provide support after launch?",
    answer:
      "Yes. We can stay involved after launch for updates, refinements, and ongoing support. Many clients choose a monthly care plan so their site stays secure, current, and effective.",
  },
  {
    category: "Support",
    question: "Will I be able to update the site myself?",
    answer:
      "Absolutely. We build with maintainability in mind and can structure the site so your team can update content confidently. We also provide guidance where needed.",
  },
  {
    category: "Logistics",
    question: "What do you need from us to get started?",
    answer:
      "A short discovery call, your goals, any existing brand assets, and a sense of the pages or features you need. If you do not have everything ready, we can help you shape the plan.",
  },
  {
    category: "Logistics",
    question: "Do you work with clients remotely?",
    answer:
      "Yes. We collaborate with clients remotely and keep communication organized through email, calls, and shared project updates. If you are local, we are also happy to meet in person when possible.",
  },
];

const categories = ["All", "Services", "Pricing", "Process", "Support", "Logistics"] as const;

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<(typeof categories)[number]>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    return faqItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesQuery =
        query.trim().length === 0 ||
        `${item.question} ${item.answer} ${item.category}`.toLowerCase().includes(query.toLowerCase());
      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <NavBar />
      <main>
        <section className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--secondary)]/40 to-transparent">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="max-w-3xl">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--muted-foreground)] shadow-sm">
                <MessageCircleQuestion className="h-4 w-4 text-[var(--primary)]" />
                Answers that help you move forward faster
              </div>
              <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                Frequently asked questions, answered clearly
              </h1>
              <p className="mt-5 text-lg leading-8 text-[var(--muted-foreground)]">
                Find quick answers about services, pricing, process, support, and logistics. If you do not see
                what you need, our team is ready to help with a direct, no-pressure conversation.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href="/contact" variant="primary">
                  Contact support
                </Button>
                <Button href="/services" variant="secondary">
                  Explore services
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-6 lg:grid-cols-[280px_1fr]">
            <aside className="rounded-3xl border border-[var(--border)] bg-white p-5 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                Find answers fast
              </h2>
              <label className="mt-4 flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/30 px-4 py-3">
                <Search className="h-4 w-4 text-[var(--muted-foreground)]" />
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Search questions"
                  className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted-foreground)]"
                />
              </label>

              <div className="mt-5 space-y-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setActiveCategory(category)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left text-sm font-medium transition ${
                      activeCategory === category
                        ? "bg-[var(--primary)] text-white shadow-sm"
                        : "bg-[var(--secondary)]/30 text-[var(--foreground)] hover:bg-[var(--secondary)]/60"
                    }`}
                  >
                    <span>{category}</span>
                    <span className="text-xs opacity-80">{category === "All" ? faqItems.length : faqItems.filter((item) => item.category === category).length}</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-[var(--secondary)]/30 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ShieldCheck className="h-4 w-4 text-[var(--primary)]" />
                  Need a direct answer?
                </div>
                <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                  Send us your question and we will point you to the right next step within one business day.
                </p>
              </div>
            </aside>

            <div className="space-y-4">
              {filteredItems.length > 0 ? (
                filteredItems.map((item, index) => {
                  const isOpen = openIndex === index;
                  return (
                    <article key={`${item.category}-${item.question}`} className="rounded-3xl border border-[var(--border)] bg-white shadow-sm">
                      <button
                        type="button"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                      >
                        <div>
                          <div className="mb-2 inline-flex rounded-full bg-[var(--secondary)]/50 px-3 py-1 text-xs font-semibold text-[var(--primary)]">
                            {item.category}
                          </div>
                          <h3 className="text-lg font-semibold">{item.question}</h3>
                        </div>
                        <ChevronDown className={`h-5 w-5 shrink-0 transition ${isOpen ? "rotate-180" : ""}`} />
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-6 text-[var(--muted-foreground)]">
                          <p className="leading-7">{item.answer}</p>
                        </div>
                      )}
                    </article>
                  );
                })
              ) : (
                <div className="rounded-3xl border border-dashed border-[var(--border)] bg-white p-10 text-center shadow-sm">
                  <p className="text-lg font-semibold">No matching questions found.</p>
                  <p className="mt-2 text-[var(--muted-foreground)]">
                    Try a different keyword or browse another category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        <section className="border-y border-[var(--border)] bg-[var(--secondary)]/20">
          <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Still have questions?"
              title="Talk to a real person, not a ticket queue"
              description="If your question is specific to your project, we are happy to help you think through the best path forward."
            />
            <div className="mt-8 grid gap-4 md:grid-cols-3">
              {[
                {
                  icon: Timer,
                  title: "Fast response",
                  description: "We typically reply within one business day with a clear next step.",
                },
                {
                  icon: Sparkles,
                  title: "Practical guidance",
                  description: "Expect honest recommendations tailored to your goals and timeline.",
                },
                {
                  icon: MessageCircleQuestion,
                  title: "No-pressure conversation",
                  description: "Ask anything. We will help you decide whether we are the right fit.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
                  <item.icon className="h-6 w-6 text-[var(--primary)]" />
                  <h3 className="mt-4 text-lg font-semibold">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <CTABanner
            headline="Ready for a direct answer?"
            description="Reach out with your question, and we will help you understand the best next step for your project."
            buttonLabel="Contact us"
            buttonHref="/contact"
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}