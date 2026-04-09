import { ArrowRight } from "lucide-react";
import { Button } from "./Button";

type CTABannerProps = {
  headline: string;
  description: string;
  buttonLabel: string;
  buttonHref: string;
  className?: string;
};

export function CTABanner({
  headline,
  description,
  buttonLabel,
  buttonHref,
  className,
}: CTABannerProps) {
  return (
    <section
      className={`rounded-3xl bg-accent px-6 py-12 text-center text-accent-foreground shadow-lg sm:px-10 sm:py-16 ${className ?? ""}`}
    >
      <div className="mx-auto max-w-3xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent-foreground/80">
          Ready to move faster?
        </p>
        <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {headline}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-accent-foreground/90 sm:text-lg">
          {description}
        </p>
        <div className="mt-8">
          <Button href={buttonHref} variant="primary" size="lg" className="bg-background text-foreground hover:bg-background/90">
            {buttonLabel}
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

export default CTABanner;