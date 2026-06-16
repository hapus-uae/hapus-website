import Image from "next/image";

// Image with a graceful, intentional fallback. While real assets are pending,
// it renders an engineered "spec-frame" placeholder (blueprint grid, corner
// ticks, mono caption) so the layout reads as designed rather than broken.
// Drop a file at the given `src` path under /public and it renders via next/image.
export function PlaceholderMedia({
  src,
  alt,
  label,
  code,
  className = "",
  ratio = "aspect-[4/3]",
  sizes = "(max-width: 768px) 100vw, 50vw",
  priority = false,
  tone = "dark",
}: {
  src?: string;
  alt: string;
  label?: string;
  code?: string;
  className?: string;
  ratio?: string;
  sizes?: string;
  priority?: boolean;
  tone?: "dark" | "light";
}) {
  const surface =
    tone === "dark"
      ? "bg-panel text-mute"
      : "bg-[#e9e9e5] text-mute-2";

  return (
    <div
      className={`relative overflow-hidden ${ratio} ${surface} ${className}`}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <div className="absolute inset-0">
          <div className="blueprint absolute inset-0 opacity-70" aria-hidden />
          {/* corner registration ticks */}
          <div className="pointer-events-none absolute inset-0" aria-hidden>
            <span className="absolute left-3 top-3 size-3 border-l border-t border-current opacity-40" />
            <span className="absolute right-3 top-3 size-3 border-r border-t border-current opacity-40" />
            <span className="absolute bottom-3 left-3 size-3 border-b border-l border-current opacity-40" />
            <span className="absolute bottom-3 right-3 size-3 border-b border-r border-current opacity-40" />
          </div>
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
            <span
              aria-hidden
              className="font-display text-2xl font-semibold tracking-tight text-current/35"
            >
              {label ?? alt}
            </span>
            {code ? (
              <span className="font-mono text-[0.6rem] uppercase tracking-[0.24em] text-current/45">
                {code}
              </span>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
