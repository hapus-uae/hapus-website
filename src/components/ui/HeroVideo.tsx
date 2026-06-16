"use client";

import { useEffect, useRef } from "react";

// Background video for the hero. Autoplays muted + looped (the only way browsers
// allow autoplay), is desaturated to stay within the monochrome system, and is
// purely decorative (aria-hidden). If the file is missing the element renders
// nothing and the blueprint background shows through. Honors reduced-motion.
export function HeroVideo({
  src,
  webm,
  poster,
  className = "",
}: {
  src: string;
  webm?: string;
  poster?: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      video.pause();
      return;
    }
    // Some browsers need an explicit play() after mount; ignore rejection
    // (e.g. low-power mode), the poster/fallback covers it.
    const attempt = video.play();
    if (attempt && typeof attempt.catch === "function") attempt.catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      className={className}
      autoPlay
      muted
      loop
      playsInline
      preload="metadata"
      poster={poster}
      aria-hidden
      tabIndex={-1}
    >
      {webm ? <source src={webm} type="video/webm" /> : null}
      <source src={src} type="video/mp4" />
    </video>
  );
}
