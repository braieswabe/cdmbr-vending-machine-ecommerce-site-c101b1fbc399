"use client";

import { useState } from "react";
import { Check, Mail, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type NewsletterSignupProps = {
  title?: string;
  description?: string;
  placeholder?: string;
  buttonLabel?: string;
  className?: string;
  onSubmit?: (email: string) => Promise<void> | void;
};

export function NewsletterSignup({
  title = "Stay ahead with practical insights",
  description = "Get concise product updates, growth ideas, and launch-ready tips delivered monthly.",
  placeholder = "Enter your email address",
  buttonLabel = "Subscribe",
  className,
  onSubmit,
}: NewsletterSignupProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);

    if (!email.trim()) {
      setError("Please enter a valid email address.");
      return;
    }

    setStatus("loading");

    try {
      await onSubmit?.(email.trim());
      setStatus("success");
      setEmail("");
    } catch {
      setError("Something went wrong. Please try again.");
      setStatus("idle");
    }
  };

  return (
    <section
      className={cn(
        "rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-lg sm:p-8",
        className
      )}
      aria-labelledby="newsletter-signup-title"
    >
      <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-blue-100">
            <Mail className="h-3.5 w-3.5" />
            Newsletter
          </div>

          <h2
            id="newsletter-signup-title"
            className="text-2xl font-semibold tracking-tight sm:text-3xl"
          >
            {title}
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300 sm:text-base">
            {description}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-3">
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>

          <div className="flex flex-col gap-3 sm:flex-row">
            <input
              id="newsletter-email"
              type="email"
              autoComplete="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder={placeholder}
              className="h-12 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white placeholder:text-slate-300 outline-none ring-0 transition focus:border-blue-400 focus:bg-white/15"
            />

            <button
              type="submit"
              disabled={status === "loading"}
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 text-sm font-semibold text-white transition hover:bg-blue-500 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {status === "success" ? (
                <>
                  <Check className="h-4 w-4" />
                  Subscribed
                </>
              ) : (
                <>
                  {buttonLabel}
                  <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>
          </div>

          {error ? (
            <p className="text-sm text-rose-300">{error}</p>
          ) : (
            <p className="text-xs leading-5 text-slate-400">
              No spam. Unsubscribe anytime. We respect your inbox.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default NewsletterSignup;
