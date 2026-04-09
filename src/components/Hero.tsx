import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

type HeroProps = {
  title: string;
  subtitle: string;
  ctaLabel: string;
  ctaHref: string;
  secondaryLabel?: string;
  secondaryHref?: string;
};

export function Hero({
  title,
  subtitle,
  ctaLabel,
  ctaHref,
  secondaryLabel,
  secondaryHref,
}: HeroProps) {
  return (
    <section className="relative isolate flex min-h-[500px] items-center overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-secondary px-6 py-20 text-white sm:px-8 lg:px-12">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_35%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.12),transparent_30%)]" />
      <div className="relative mx-auto w-full max-w-7xl">
        <div className="max-w-3xl">
          <p className="mb-4 inline-flex rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-medium text-white/90 backdrop-blur">
            Modern solutions for ambitious teams
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/85 sm:text-xl">
            {subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button href={ctaHref} variant="primary" size="lg" className="bg-white text-primary hover:bg-white/90">
              {ctaLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
            {secondaryLabel && secondaryHref ? (
              <Button href={secondaryHref} variant="outline" size="lg" className="border-white/25 bg-transparent text-white hover:bg-white/10 hover:border-white/40">
                {secondaryLabel}
              </Button>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;