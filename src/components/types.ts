/**
 * Shared component prop types used across generated pages.
 *
 * Components and pages should import these types to ensure prop data
 * matches the expected shape, preventing TypeScript build failures.
 */

export type SocialProofItem = {
  label: string;
  value: string;
  icon?: string;
};

export type LogoItem = {
  name: string;
  src?: string;
  alt?: string;
};

export type TestimonialItem = {
  quote: string;
  author: string;
  role?: string;
  rating?: number;
  icon?: React.ReactNode;
  description?: React.ReactNode;
};

export type ComparisonColumn = {
  key: string;
  label: string;
  highlighted?: boolean;
};

export type ComparisonRow = {
  feature: string;
  values: Record<string, boolean | string>;
};

export type GalleryItem = {
  id: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  category?: string;
};

export type PricingTier = {
  name: string;
  price: string;
  period?: string;
  description?: string;
  features: string[];
  highlighted?: boolean;
  ctaText?: string;
  ctaHref?: string;
};

export type TeamMember = {
  name: string;
  role: string;
  bio?: string;
  imageUrl?: string;
};

export type FAQItem = {
  question: string;
  answer: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon?: React.ReactNode;
};

export type NavLink = {
  label: string;
  href: string;
};

export type StatItem = {
  value: string;
  label: string;
};
