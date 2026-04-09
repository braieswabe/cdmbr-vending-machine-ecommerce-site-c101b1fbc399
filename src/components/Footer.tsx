import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, Linkedin, Twitter, Instagram } from "lucide-react";

const pageLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Pricing", href: "/pricing" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Testimonials", href: "/testimonials" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Features", href: "/features" },
  { label: "Blog", href: "/blog" },
  { label: "Gallery", href: "/gallery" },
  { label: "Careers", href: "/careers" }
];

const socialLinks = [
  { label: "LinkedIn", href: "https://www.linkedin.com", icon: Linkedin },
  { label: "Twitter", href: "https://www.x.com", icon: Twitter },
  { label: "Instagram", href: "https://www.instagram.com", icon: Instagram }
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 text-sm font-bold text-white shadow-lg shadow-blue-500/20">
                P
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-base font-semibold text-white">Professional</span>
                <span className="text-sm text-slate-400">Website Studio</span>
              </span>
            </Link>

            <p className="mt-5 max-w-md text-sm leading-6 text-slate-400">
              We design polished, conversion-focused websites that help ambitious teams
              build trust, communicate value, and turn visitors into qualified leads.
            </p>

            <div className="mt-6 space-y-3 text-sm text-slate-300">
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-blue-400" />
                <a href="mailto:hello@professionalwebsite.com" className="transition hover:text-white">
                  hello@professionalwebsite.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-blue-400" />
                <a href="tel:+15551234567" className="transition hover:text-white">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span>Remote-first studio serving clients worldwide</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Pages
            </h2>
            <ul className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Social
            </h2>
            <div className="mt-5 space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-slate-400 transition hover:text-white"
                  >
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900">
                      <Icon className="h-4 w-4" />
                    </span>
                    {social.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-white">
              Newsletter
            </h2>
            <p className="mt-5 text-sm leading-6 text-slate-400">
              Get practical insights on web strategy, conversion design, and launch-ready
              content delivered monthly.
            </p>

            <form className="mt-5 space-y-3">
              <label className="sr-only" htmlFor="footer-email">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-2xl border border-slate-800 bg-slate-900 px-4 py-3 text-sm text-white placeholder:text-slate-500 outline-none transition focus:border-blue-500"
              />
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                Subscribe
                <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} Professional Website Studio. All rights reserved.</p>
          <p>Built for clarity, credibility, and conversion.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
