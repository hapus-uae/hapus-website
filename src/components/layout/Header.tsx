"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { List, X, ArrowUpRight } from "@phosphor-icons/react";
import { Logo } from "@/components/ui/Logo";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { mainNav, megaMenuCategories } from "@/data/nav";
import { company } from "@/data/company";

// White header theme. Dark text / nav on a white bar; the mega-menu and mobile
// menu are light to match. `on-paper` flips focus rings to dark.
export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Adds a shadow once the page scrolls past a top sentinel (no scroll listener).
  useEffect(() => {
    const sentinel = document.getElementById("top-sentinel");
    if (!sentinel) return;
    const obs = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { rootMargin: "0px" }
    );
    obs.observe(sentinel);
    return () => obs.disconnect();
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/products"
      ? pathname.startsWith("/products")
      : pathname === href;

  return (
    <header
      className={`on-paper fixed inset-x-0 top-0 z-50 border-b border-black/10 bg-white transition-shadow duration-300 ${
        scrolled || megaOpen
          ? "shadow-[0_10px_30px_-18px_rgba(0,0,0,0.35)]"
          : ""
      }`}
      onMouseLeave={() => setMegaOpen(false)}
    >
      <Container className="flex h-[var(--header-h,72px)] items-center justify-between">
        <Logo />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) =>
            item.hasMega ? (
              <div
                key={item.href}
                onMouseEnter={() => setMegaOpen(true)}
                className="relative"
              >
                <Link
                  href={item.href}
                  aria-expanded={megaOpen}
                  className={`px-4 py-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                    isActive(item.href) ? "text-accent" : "text-ink/55 hover:text-ink"
                  }`}
                >
                  {item.label}
                </Link>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 font-mono text-[0.7rem] font-semibold uppercase tracking-[0.16em] transition-colors ${
                  isActive(item.href) ? "text-ink" : "text-ink/55 hover:text-ink"
                }`}
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/contact" variant="onPaper" size="md" withArrow>
            Enquire
          </ButtonLink>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          className="inline-flex size-10 items-center justify-center text-ink lg:hidden"
          aria-label="Open menu"
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen(true)}
        >
          <List weight="bold" className="size-6" />
        </button>
      </Container>

      {/* Mega-menu (desktop) — category names only, no per-product links */}
      <AnimatePresence>
        {megaOpen ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => setMegaOpen(false)}
            className="absolute inset-x-0 top-full hidden border-b border-black/10 bg-white lg:block"
          >
            <Container className="grid grid-cols-12 gap-x-8 gap-y-2 py-10">
              <div className="col-span-3">
                <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/40 mb-4">
                  Our solutions
                </p>
                <p className="max-w-[24ch] text-sm leading-relaxed text-ink/55">
                  Everything we supply, grouped by what your business does.
                  Products are shown on the category page.
                </p>
                <ButtonLink
                  href="/products"
                  variant="onPaper"
                  size="md"
                  withArrow
                  className="mt-6"
                >
                  All solutions
                </ButtonLink>
              </div>
              <ul className="col-span-9 grid grid-cols-2 gap-x-8 xl:grid-cols-3">
                {megaMenuCategories.map((cat) => (
                  <li key={cat.href}>
                    <Link
                      href={cat.href}
                      className="group flex items-baseline gap-3 border-b border-black/10 py-3 transition-colors hover:border-black/30"
                    >
                      <span className="font-mono text-[0.65rem] text-ink/40">
                        {cat.index}
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-medium text-ink">
                          {cat.name}
                        </span>
                        <span className="block text-xs text-ink/45">
                          {cat.tagline}
                        </span>
                      </span>
                      <ArrowUpRight className="size-3.5 -translate-x-1 text-ink/40 opacity-0 transition-all group-hover:translate-x-0 group-hover:opacity-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </Container>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Mobile full-screen menu */}
      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col bg-white lg:hidden"
          >
            <div className="flex h-[var(--header-h,72px)] items-center justify-between border-b border-black/10 px-5 sm:px-8">
              <Logo onNavigate={() => setMobileOpen(false)} />
              <button
                type="button"
                className="inline-flex size-10 items-center justify-center text-ink"
                aria-label="Close menu"
                onClick={() => setMobileOpen(false)}
              >
                <X weight="bold" className="size-6" />
              </button>
            </div>

            <nav
              className="flex-1 overflow-y-auto px-5 pb-10 pt-4 sm:px-8"
              aria-label="Mobile"
              onClick={() => setMobileOpen(false)}
            >
              <ul className="divide-y divide-black/10">
                {mainNav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="flex items-center justify-between py-4 font-display text-2xl font-semibold tracking-tight text-ink"
                    >
                      {item.label}
                      <ArrowUpRight className="size-5 text-ink/40" />
                    </Link>
                  </li>
                ))}
              </ul>

              <p className="font-mono text-[0.7rem] uppercase tracking-[0.2em] text-ink/40 mb-3 mt-8">
                Solutions
              </p>
              <ul className="grid grid-cols-1 gap-px">
                {megaMenuCategories.map((cat) => (
                  <li key={cat.href}>
                    <Link
                      href={cat.href}
                      className="flex items-baseline gap-3 py-2.5 text-sm text-ink/60"
                    >
                      <span className="font-mono text-[0.65rem] text-ink/40">
                        {cat.index}
                      </span>
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-10 flex flex-col gap-3">
                <ButtonLink href="/contact" variant="onPaper" size="lg" withArrow>
                  Request a quote
                </ButtonLink>
                <a
                  href={`tel:${company.phoneHref}`}
                  className="py-2 text-center font-mono text-[0.7rem] uppercase tracking-[0.18em] text-ink/55"
                >
                  {company.phoneDisplay}
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
