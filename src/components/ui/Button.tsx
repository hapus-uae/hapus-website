import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { ArrowRight } from "@phosphor-icons/react/dist/ssr";

type Variant = "primary" | "outline" | "ghost" | "onPaper";
type Size = "md" | "lg";

const base =
  "group inline-flex items-center justify-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.18em] " +
  "transition-[transform,background-color,color,border-color] duration-300 ease-[var(--ease-out-expo)] " +
  "active:translate-y-[1px] select-none";

const sizes: Record<Size, string> = {
  md: "px-6 py-3.5",
  lg: "px-8 py-4.5",
};

// Brand button system. Primary = solid crimson; outline adapts to the section
// (dark text on light, light text on wine); onPaper = plum outline → crimson fill.
const variants: Record<Variant, string> = {
  primary:
    "border border-accent bg-accent text-white hover:bg-accent-2 hover:border-accent-2",
  outline:
    "border border-line text-bone hover:border-bone hover:bg-bone/5",
  ghost: "text-mute hover:text-accent",
  onPaper:
    "border border-plum/25 text-plum hover:bg-accent hover:text-white hover:border-accent",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
  children: ReactNode;
};

function Inner({
  children,
  withArrow,
}: {
  children: ReactNode;
  withArrow?: boolean;
}) {
  return (
    <>
      <span>{children}</span>
      {withArrow ? (
        <ArrowRight
          weight="bold"
          className="size-3.5 transition-transform duration-300 ease-[var(--ease-out-expo)] group-hover:translate-x-1"
        />
      ) : null}
    </>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  children,
  ...rest
}: CommonProps & { href: string } & Omit<
    ComponentProps<typeof Link>,
    "href" | "className" | "children"
  >) {
  return (
    <Link
      href={href}
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </Link>
  );
}

export function Button({
  variant = "primary",
  size = "md",
  withArrow = false,
  className = "",
  children,
  ...rest
}: CommonProps & ComponentProps<"button">) {
  return (
    <button
      className={`${base} ${sizes[size]} ${variants[variant]} ${className}`}
      {...rest}
    >
      <Inner withArrow={withArrow}>{children}</Inner>
    </button>
  );
}
