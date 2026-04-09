"use client";

import { useState } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type FormState = {
  name: string;
  email: string;
  company: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

export type ContactFormProps = {
  className?: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  company: "",
  message: "",
};

function validate(values: FormState) {
  const errors: FormErrors = {};

  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Tell us a little about your goals.";

  return errors;
}

export function ContactForm({ className }: ContactFormProps) {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitted(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const nextErrors = validate(values);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    window.setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setValues(initialState);
    }, 700);
  }

  const fieldBase =
    "mt-2 w-full rounded-xl border bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20";

  return (
    <form onSubmit={handleSubmit} className={cn("rounded-3xl border border-border bg-card p-6 shadow-sm sm:p-8", className)}>
      <div className="grid gap-5">
        <div className="grid gap-5 md:grid-cols-2">
          <label className="block">
            <span className="text-sm font-medium text-foreground">Full name</span>
            <input
              name="name"
              value={values.name}
              onChange={handleChange}
              className={cn(fieldBase, errors.name ? "border-red-500" : "border-border")}
              placeholder="Jordan Lee"
              autoComplete="name"
            />
            {errors.name ? <p className="mt-2 text-sm text-red-600">{errors.name}</p> : null}
          </label>

          <label className="block">
            <span className="text-sm font-medium text-foreground">Work email</span>
            <input
              name="email"
              type="email"
              value={values.email}
              onChange={handleChange}
              className={cn(fieldBase, errors.email ? "border-red-500" : "border-border")}
              placeholder="jordan@company.com"
              autoComplete="email"
            />
            {errors.email ? <p className="mt-2 text-sm text-red-600">{errors.email}</p> : null}
          </label>
        </div>

        <label className="block">
          <span className="text-sm font-medium text-foreground">Company</span>
          <input
            name="company"
            value={values.company}
            onChange={handleChange}
            className={cn(fieldBase, "border-border")}
            placeholder="Northstar Studio"
            autoComplete="organization"
          />
        </label>

        <label className="block">
          <span className="text-sm font-medium text-foreground">Project details</span>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={5}
            className={cn(fieldBase, errors.message ? "border-red-500" : "border-border", "resize-y")}
            placeholder="Tell us what you're building, your timeline, and what success looks like."
          />
          {errors.message ? <p className="mt-2 text-sm text-red-600">{errors.message}</p> : null}
        </label>

        {submitted ? (
          <div className="flex items-center gap-2 rounded-xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm text-emerald-700">
            <CheckCircle2 className="h-4 w-4" />
            Thanks — your message is in. We’ll reply within one business day.
          </div>
        ) : null}

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70"
        >
          <Send className="h-4 w-4" />
          {isSubmitting ? "Sending..." : "Send inquiry"}
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
