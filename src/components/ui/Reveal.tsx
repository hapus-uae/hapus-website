"use client";

import {
  useEffect,
  useRef,
  useState,
  type ElementType,
  type ReactNode,
} from "react";

// Scroll-reveal wrapper. Uses IntersectionObserver (never scroll listeners) and
// animates only transform/opacity via the hapus-reveal keyframe. `delay` staggers
// items in a group; reduced-motion users get the content immediately (handled in CSS).
const revealKeyframe = {
  up: "hapus-reveal",
  left: "hapus-reveal-left",
  right: "hapus-reveal-right",
} as const;

export function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
  once = true,
  from = "up",
}: {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
  once?: boolean;
  /** Direction the element animates in from. */
  from?: "up" | "left" | "right";
}) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true);
            if (once) observer.unobserve(entry.target);
          } else if (!once) {
            setShown(false);
          }
        });
      },
      { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={className}
      style={{
        opacity: shown ? undefined : 0,
        animation: shown
          ? `${revealKeyframe[from]} 0.85s var(--ease-out-expo) ${delay}ms both`
          : undefined,
      }}
    >
      {children}
    </Tag>
  );
}
