import type { ReactNode } from "react";

// Seamless CSS marquee. Renders the children twice and translates the track by
// -50% so the loop is continuous. Pauses on hover (handled in globals.css).
// Pure CSS — safe as a Server Component.
export function Marquee({
  children,
  className = "",
  reverse = false,
}: {
  children: ReactNode;
  className?: string;
  /** Scroll right-to-left by default; set true to scroll the opposite way. */
  reverse?: boolean;
}) {
  return (
    <div className={`mask-x overflow-hidden ${className}`}>
      <div className={`marquee-track${reverse ? " is-reverse" : ""}`}>
        <div className="flex shrink-0 items-center" aria-hidden={false}>
          {children}
        </div>
        <div className="flex shrink-0 items-center" aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}
