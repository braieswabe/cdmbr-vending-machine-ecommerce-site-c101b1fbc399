import Image from "next/image";
import { cn } from "@/lib/utils";

export type GalleryImage = {
  src: string;
  alt: string;
  title?: string;
  description?: string;
  width?: number;
  height?: number;
};

export type ImageGalleryProps = {
  title?: string;
  description?: string;
  images: GalleryImage[];
  className?: string;
};

export function ImageGallery({ title = "Selected work and visual highlights", description, images, className }: ImageGalleryProps) {
  return (
    <section className={cn("w-full", className)}>
      {(title || description) && (
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-semibold tracking-tight text-[color:var(--foreground)] sm:text-4xl">
            {title}
          </h2>
          {description ? (
            <p className="mt-3 text-base leading-7 text-[color:var(--muted-foreground)] sm:text-lg">
              {description}
            </p>
          ) : null}
        </div>
      )}

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image) => (
          <figure
            key={`${image.src}-${image.alt}`}
            className="group overflow-hidden rounded-3xl border border-[color:var(--border)] bg-[color:var(--card)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="relative aspect-[4/3] overflow-hidden bg-[color:var(--muted)]">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            {(image.title || image.description) && (
              <figcaption className="space-y-1 p-5">
                {image.title ? (
                  <h3 className="text-lg font-semibold text-[color:var(--foreground)]">{image.title}</h3>
                ) : null}
                {image.description ? (
                  <p className="text-sm leading-6 text-[color:var(--muted-foreground)]">
                    {image.description}
                  </p>
                ) : null}
              </figcaption>
            )}
          </figure>
        ))}
      </div>
    </section>
  );
}

export default ImageGallery;
