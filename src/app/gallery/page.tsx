import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "A gallery built to help people see the quality before they ever book a call.",
  description: "Learn more about a gallery built to help people see the quality before they ever book a call.",
};

import Link from "next/link";
import { Camera, ChevronLeft, ChevronRight, Grid3X3, Layers3, Sparkles, ZoomIn } from "lucide-react";
import { Button, CTABanner, ImageGallery, SectionHeading } from "@/components";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80",
    alt: "Modern office lobby with warm lighting and natural textures",
    caption: "Reception spaces designed to feel calm, premium, and easy to navigate.",
  },
  {
    src: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1200&q=80",
    alt: "Creative team collaborating around a large table",
    caption: "Workshops and planning sessions that turn strategy into clear next steps.",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80",
    alt: "Minimal product display with soft shadows and clean composition",
    caption: "Product imagery with consistent framing for polished campaigns and launches.",
  },
  {
    src: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=1200&q=80",
    alt: "Architectural interior with strong lines and natural light",
    caption: "Spaces captured with attention to scale, texture, and visual rhythm.",
  },
  {
    src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1200&q=80",
    alt: "Team presenting a project update in a bright meeting room",
    caption: "Client-facing moments that communicate confidence and momentum.",
  },
  {
    src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1200&q=80",
    alt: "Stylish workspace with plants, books, and soft daylight",
    caption: "Lifestyle details that make a brand feel human, modern, and credible.",
  },
];

const categories = [
  "All work",
  "Interiors",
  "Brand moments",
  "Product detail",
  "Team culture",
  "Campaigns",
];

export default function GalleryPage() {
  return (
    <main>
      <section className="border-b border-[color:var(--border)] bg-[linear-gradient(180deg,rgba(255,255,255,0.96),rgba(245,247,255,0.9))]">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-white px-4 py-2 text-sm font-medium text-[color:var(--muted-foreground)] shadow-sm">
                <Camera className="h-4 w-4 text-[color:var(--primary)]" />
                Visual showcase
              </div>
              <h1 className="text-4xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-5xl lg:text-6xl">
                A gallery built to help people see the quality before they ever book a call.
              </h1>
              <p className="mt-6 text-lg leading-8 text-[color:var(--muted-foreground)]">
                Browse a curated collection of spaces, products, and brand moments designed to communicate
                craft, consistency, and attention to detail. Every image is chosen to help visitors imagine
                what similar work could look like for them.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Button href="#gallery-grid" size="lg">
                  Explore the gallery
                </Button>
                <Button href="/portfolio" variant="secondary" size="lg">
                  View related portfolio
                </Button>
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--primary)]/10 text-[color:var(--primary)]">
                  <Grid3X3 className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">Consistent presentation</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                  Unified aspect ratios and clean spacing make the collection easy to scan on any screen.
                </p>
              </div>
              <div className="rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--accent)]/15 text-[color:var(--accent)]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">Premium visual tone</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                  Soft light, subtle shadows, and authentic scenes create a polished but approachable feel.
                </p>
              </div>
              <div className="rounded-3xl border border-[color:var(--border)] bg-white p-5 shadow-sm sm:col-span-2">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[color:var(--secondary)] text-[color:var(--secondary-foreground)]">
                  <Layers3 className="h-6 w-6" />
                </div>
                <h2 className="text-lg font-semibold">Built for browsing</h2>
                <p className="mt-2 text-sm leading-6 text-[color:var(--muted-foreground)]">
                  Visitors can move from overview to detail quickly, then jump to related services or portfolio
                  work when they are ready to take the next step.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="gallery-grid" className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Image grid"
            title="Browse the work at a glance"
            description="A responsive gallery layout that keeps the focus on imagery while making it easy to compare styles, settings, and project types."
          />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((image, index) => (
              <article
                key={image.src}
                className="group overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--muted)]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/0 to-transparent opacity-80" />
                  <div className="absolute left-4 top-4 inline-flex items-center rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[color:var(--foreground)] backdrop-blur">
                    0{index + 1}
                  </div>
                </div>
                <div className="p-5">
                  <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">{image.caption}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-[color:var(--border)] bg-[color:var(--muted)]/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Lightbox view"
            title="Open a closer look at the details"
            description="When a visitor wants more context, the gallery can lead them into a focused view with captions, navigation cues, and a clear path to inquire."
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="overflow-hidden rounded-3xl border border-[color:var(--border)] bg-white shadow-sm">
              <div className="relative aspect-[16/10]">
                <img
                  src="https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1600&q=80"
                  alt="Bright studio interior with editorial styling"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <ZoomIn className="h-4 w-4" />
                    Expanded view
                  </div>
                  <p className="mt-2 max-w-xl text-sm leading-6 text-white/85">
                    A closer look at composition, lighting, and material choices helps clients understand the
                    level of finish they can expect.
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {[
                "Use captions to explain the goal of each shot, not just what is visible.",
                "Add previous and next controls so visitors can move through the collection with ease.",
                "Pair every image with a short note about the project, location, or creative intent.",
                "Link from the lightbox to services and contact so interest can turn into action quickly.",
              ].map((item) => (
                <div key={item} className="flex gap-3 rounded-2xl border border-[color:var(--border)] bg-white p-4 shadow-sm">
                  <div className="mt-1 h-2.5 w-2.5 rounded-full bg-[color:var(--primary)]" />
                  <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Categories"
            title="Organize the collection by what matters most"
            description="Simple filters help visitors narrow the gallery by project type, style, or use case without losing the sense of momentum."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {categories.map((category, index) => (
              <button
                key={category}
                className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                  index === 0
                    ? "border-[color:var(--primary)] bg-[color:var(--primary)] text-white shadow-sm"
                    : "border-[color:var(--border)] bg-white text-[color:var(--muted-foreground)] hover:border-[color:var(--primary)] hover:text-[color:var(--foreground)]"
                }`}
                type="button"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[color:var(--muted)]/30 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <CTABanner
            headline="Have a project that deserves a stronger visual story?"
            description="We can help you create imagery that feels cohesive, credible, and ready to support sales, marketing, and hiring."
            buttonLabel="Start a conversation"
            buttonHref="/contact"
          />
          <div className="mt-6 flex flex-col items-center justify-center gap-3 text-sm text-[color:var(--muted-foreground)] sm:flex-row">
            <Link href="/services" className="inline-flex items-center gap-1 font-medium text-[color:var(--primary)] hover:underline">
              Explore services
              <ChevronRight className="h-4 w-4" />
            </Link>
            <span className="hidden sm:block">•</span>
            <Link href="/portfolio" className="inline-flex items-center gap-1 font-medium text-[color:var(--primary)] hover:underline">
              See related portfolio work
              <ChevronLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}