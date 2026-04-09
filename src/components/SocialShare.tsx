"use client";

import { useMemo } from "react";
import type { ComponentType } from "react";
import { Facebook, Linkedin, Link2, Mail, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export type SocialShareProps = {
  title: string;
  url: string;
  description?: string;
  className?: string;
};

type ShareLink = {
  label: string;
  href: string;
  icon: ComponentType<{ className?: string }>;
};

export function SocialShare({
  title,
  url,
  description,
  className,
}: SocialShareProps) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);
  const encodedDescription = encodeURIComponent(description ?? title);

  const links = useMemo<ShareLink[]>(
    () => [
      {
        label: "X",
        href: `https://twitter.com/intent/tweet?text=${encodedTitle}&url=${encodedUrl}`,
        icon: Twitter,
      },
      {
        label: "LinkedIn",
        href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
        icon: Linkedin,
      },
      {
        label: "Facebook",
        href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
        icon: Facebook,
      },
      {
        label: "Email",
        href: `mailto:?subject=${encodedTitle}&body=${encodedDescription}%0A%0A${encodedUrl}`,
        icon: Mail,
      },
    ],
    [encodedDescription, encodedTitle, encodedUrl]
  );

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      window.prompt("Copy this link", url);
    }
  };

  return (
    <section
      aria-label="Share this page"
      className={cn(
        "rounded-2xl border border-slate-200 bg-white p-5 shadow-sm",
        className
      )}
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-base font-semibold text-slate-900">Share this page</h2>
          <p className="mt-1 text-sm leading-6 text-slate-600">
            Help others discover this resource by sharing it with your network.
          </p>
        </div>

        <button
          type="button"
          onClick={copyToClipboard}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700"
        >
          <Link2 className="h-4 w-4" />
          Copy link
        </button>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {links.map(({ label, href, icon: Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700 hover:shadow-md"
          >
            <Icon className="h-4 w-4" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}

export default SocialShare;