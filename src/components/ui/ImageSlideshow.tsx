"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

// Crossfading image slideshow. Stacks every image in the (relative) parent and
// fades between them on an interval — animating opacity only. Fills its parent,
// so the parent must be `relative` with a fixed aspect ratio.
export function ImageSlideshow({
  images,
  intervalMs = 2000,
  fadeMs = 1000,
  sizes,
}: {
  images: { src: string; alt: string }[];
  intervalMs?: number;
  fadeMs?: number;
  sizes?: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const id = setInterval(
      () => setActive((i) => (i + 1) % images.length),
      intervalMs,
    );
    return () => clearInterval(id);
  }, [images.length, intervalMs]);

  return (
    <>
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes={sizes}
          priority={i === 0}
          style={{ transitionDuration: `${fadeMs}ms` }}
          className={`object-cover transition-opacity ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
    </>
  );
}
