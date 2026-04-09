"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Building2, Clock3, Mail, MapPin, Phone, Send } from "lucide-react";
import { Button, Footer, NavBar, SectionHeading } from "@/components";

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (field: keyof typeof formState) => (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState((current) => ({ ...current, [field]: event.target.value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <NavBar />
      <main>
        <section className="border-b border-[var(--border)] bg-gradient-to-b from-[var(--secondary)]/40 to-transparent">
          <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-sm font-medium text-[var(--muted-foreground)] shadow-sm">
                  <Mail className="h-4 w-4 text-[var(--primary)]" />
                  Let’s start a conversation
                </div>
                <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
                  Tell us what you need, and we’ll help you map the next step
                </h1>
                <p className="mt-5 max-w-2xl text-lg leading-8 text-[var(--muted-foreground)]">
                  Whether you are exploring a new website, improving an existing one, or looking for ongoing support,
                  we make it easy to reach out. Expect a thoughtful reply within one business day.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Button href="#contact-form" variant="primary">
                    Start the form
                  </Button>
                  <Button href="/services" variant="secondary">
                    Review services
                  </Button>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <div className="grid gap-4 sm:grid-cols-2">
                  {[
                    { label: "Response time", value: "Within 1 business day" },
                    { label: "Project fit", value: "Strategy, design, and build" },
                    { label: "Working style", value: "Clear, collaborative, efficient" },
                    { label: "Location", value: "Remote-friendly, local by request" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl bg-[var(--secondary)]/30 p-4">
                      <p className="text-sm text-[var(--muted-foreground)]">{item.label}</p>
                      <p className="mt-1 font-semibold">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-form" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <form onSubmit={handleSubmit} className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm sm:p-8">
              <SectionHeading
                eyebrow="Project inquiry"
                title="Share a few details about your goals"
                description="The more context you provide, the better we can recommend a practical next step."
              />
              <div className="mt-8 grid gap-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="grid gap-2">
                    <span className="text-sm font-medium">Name</span>
                    <input
                      value={formState.name}
                      onChange={handleChange("name")}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/20 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                      placeholder="Your full name"
                      required
                    />
                  </label>
                  <label className="grid gap-2">
                    <span className="text-sm font-medium">Email</span>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={handleChange("email")}
                      className="rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/20 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                      placeholder="you@company.com"
                      required
                    />
                  </label>
                </div>

                <label className="grid gap-2">
                  <span className="text-sm font-medium">Phone</span>
                  <input
                    type="tel"
                    value={formState.phone}
                    onChange={handleChange("phone")}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/20 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                    placeholder="(555) 123-4567"
                    required
                  />
                </label>

                <label className="grid gap-2">
                  <span className="text-sm font-medium">Message</span>
                  <textarea
                    value={formState.message}
                    onChange={handleChange("message")}
                    rows={6}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--secondary)]/20 px-4 py-3 outline-none transition focus:border-[var(--primary)]"
                    placeholder="Tell us about your project, timeline, and what success looks like."
                    required
                  />
                </label>

                <Button type="submit" variant="primary" className="w-full sm:w-auto">
                  Send inquiry
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>

            <div className="space-y-6">
              <div className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <SectionHeading
                  eyebrow="Direct contact"
                  title="Reach us the way that works best for you"
                  description="If you prefer a quick call or a direct email, here are the best ways to get in touch."
                />
                <div className="mt-6 space-y-4">
                  <a href="mailto:hello@studioexample.com" className="flex items-center gap-3 rounded-2xl border border-[var(--border)] px-4 py-3 transition hover:bg-[var(--secondary)]/30">
                    <Mail className="h-5 w-5 text-[var(--primary)]" />
                    <span className="font-medium">hello@studioexample.com</span>
                  </a>
                  <a href="tel:+15551234567" className="flex items-center gap-3 rounded-2xl border border-[var(--border)] px-4 py-3 transition hover:bg-[var(--secondary)]/30">
                    <Phone className="h-5 w-5 text-[var(--primary)]" />
                    <span className="font-medium">+1 (555) 123-4567</span>
                  </a>
                  <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] px-4 py-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
                    <div>
                      <p className="font-medium">120 Market Street, Suite 400</p>
                      <p className="text-sm text-[var(--muted-foreground)]">San Francisco, CA 94105</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 rounded-2xl border border-[var(--border)] px-4 py-3">
                    <Clock3 className="mt-0.5 h-5 w-5 text-[var(--primary)]" />
                    <div>
                      <p className="font-medium">Business hours</p>
                      <p className="text-sm text-[var(--muted-foreground)]">Monday–Friday, 9:00 AM–5:00 PM PT</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-[var(--secondary)]/20 p-6">
                <div className="flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-[var(--muted-foreground)]">
                  <Building2 className="h-4 w-4 text-[var(--primary)]" />
                  Office location
                </div>
                <div className="mt-4 aspect-[4/3] rounded-3xl border border-dashed border-[var(--border)] bg-white p-6">
                  <div className="flex h-full items-center justify-center text-center">
                    <div>
                      <p className="text-lg font-semibold">Map placeholder</p>
                      <p className="mt-2 text-sm text-[var(--muted-foreground)]">
                        Embed your preferred map provider here to help visitors find the office quickly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-white p-6 shadow-sm">
                <h2 className="text-xl font-semibold">Prefer a different way to connect?</h2>
                <p className="mt-2 text-sm leading-6 text-[var(--muted-foreground)]">
                  You can also review our services, browse recent work, or jump straight to the FAQ if you need a quick answer first.
                </p>
                <div className="mt-5 flex flex-wrap gap-3">
                  <Link href="/faq" className="inline-flex items-center gap-2 rounded-full bg-[var(--secondary)]/40 px-4 py-2 text-sm font-medium transition hover:bg-[var(--secondary)]/70">
                    View FAQ <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link href="/portfolio" className="inline-flex items-center gap-2 rounded-full bg-[var(--secondary)]/40 px-4 py-2 text-sm font-medium transition hover:bg-[var(--secondary)]/70">
                    See portfolio <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}