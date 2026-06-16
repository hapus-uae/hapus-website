"use client";

import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Plus, X, ArrowUpRight } from "@phosphor-icons/react";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { ButtonLink } from "@/components/ui/Button";
import { brandBySlug } from "@/data/brands";
import type { Product } from "@/lib/types";

// Catalogue grid for a single category. Provides a light client-side brand
// filter and an inline spec modal — products are NEVER linked to their own URL.
export function ProductGrid({
  products,
  categorySlug,
  categoryName,
}: {
  products: Product[];
  categorySlug: string;
  categoryName: string;
}) {
  const [active, setActive] = useState<string>("all");
  const [selected, setSelected] = useState<Product | null>(null);

  // Brands present in this category, in first-seen order.
  const brandFilters = useMemo(() => {
    const seen = new Set<string>();
    const list: { slug: string; name: string }[] = [];
    for (const p of products) {
      if (!seen.has(p.brand)) {
        seen.add(p.brand);
        list.push({ slug: p.brand, name: brandBySlug(p.brand)?.name ?? p.brand });
      }
    }
    return list;
  }, [products]);

  const visible = useMemo(
    () => (active === "all" ? products : products.filter((p) => p.brand === active)),
    [products, active]
  );

  // Esc closes the modal; lock scroll while open.
  useEffect(() => {
    if (!selected) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [selected]);

  return (
    <div>
      {/* Brand filter */}
      {brandFilters.length > 1 ? (
        <div className="mb-10 flex flex-wrap items-center gap-2">
          <span className="label mr-2">Filter</span>
          <FilterChip
            label="All"
            count={products.length}
            active={active === "all"}
            onClick={() => setActive("all")}
          />
          {brandFilters.map((b) => (
            <FilterChip
              key={b.slug}
              label={b.name}
              count={products.filter((p) => p.brand === b.slug).length}
              active={active === b.slug}
              onClick={() => setActive(b.slug)}
            />
          ))}
        </div>
      ) : null}

      {/* Grid */}
      {visible.length > 0 ? (
        <motion.ul
          layout
          className="grid grid-cols-1 gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {visible.map((product) => (
              <motion.li
                layout
                key={product.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProductCard
                  product={product}
                  onOpen={() => setSelected(product)}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
      ) : (
        <div className="border border-line bg-panel/30 p-16 text-center">
          <p className="font-display text-2xl font-semibold tracking-tight text-bone">
            Nothing under this brand yet
          </p>
          <p className="mx-auto mt-3 max-w-[40ch] text-sm text-mute">
            We carry more than the lines listed here. Tell us what you need and
            we will source it.
          </p>
          <ButtonLink
            href={`/contact?category=${categorySlug}`}
            variant="outline"
            size="md"
            withArrow
            className="mt-6"
          >
            Ask about {categoryName}
          </ButtonLink>
        </div>
      )}

      {/* Inline spec modal */}
      <SpecModal
        product={selected}
        onClose={() => setSelected(null)}
        categorySlug={categorySlug}
      />
    </div>
  );
}

function FilterChip({
  label,
  count,
  active,
  onClick,
}: {
  label: string;
  count: number;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`inline-flex items-center gap-2 border px-4 py-2 font-mono text-[0.65rem] uppercase tracking-[0.14em] transition-colors duration-200 active:translate-y-[1px] ${
        active
          ? "border-accent bg-accent text-white"
          : "border-line text-mute hover:border-accent/60 hover:text-bone"
      }`}
    >
      {label}
      <span className={active ? "text-white/65" : "text-mute-2"}>{count}</span>
    </button>
  );
}

function ProductCard({
  product,
  onOpen,
}: {
  product: Product;
  onOpen: () => void;
}) {
  const brand = brandBySlug(product.brand);

  return (
    <article className="group flex h-full flex-col bg-surface transition-colors duration-300 hover:bg-panel">
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]">
          <PlaceholderMedia
            src={product.image}
            alt={product.name}
            label={brand?.name ?? product.name}
            code={product.code}
            ratio="aspect-[4/3]"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        </div>
        {brand ? (
          <span className="absolute left-4 top-4 border border-accent/15 bg-pink px-2.5 py-1 font-mono text-[0.55rem] uppercase tracking-[0.16em] text-accent">
            {brand.name}
          </span>
        ) : null}
        {product.featured ? (
          <span className="absolute right-4 top-4 rounded-full bg-accent px-2.5 py-1 font-mono text-[0.5rem] uppercase tracking-[0.16em] text-white">
            Flagship
          </span>
        ) : null}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-semibold leading-tight tracking-tight text-bone">
            {product.name}
          </h3>
        </div>
        <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mute-2">
          {product.code}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-mute">{product.summary}</p>

        <button
          type="button"
          onClick={onOpen}
          className="mt-5 inline-flex items-center gap-2 self-start border-t border-line-soft pt-4 font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mute transition-colors hover:text-bone"
          aria-haspopup="dialog"
        >
          <Plus weight="bold" className="size-3.5" />
          View specs
        </button>
      </div>
    </article>
  );
}

function SpecModal({
  product,
  onClose,
  categorySlug,
}: {
  product: Product | null;
  onClose: () => void;
  categorySlug: string;
}) {
  const brand = product ? brandBySlug(product.brand) : undefined;

  return (
    <AnimatePresence>
      {product ? (
        <motion.div
          className="fixed inset-0 z-50 flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
        >
          <button
            type="button"
            aria-label="Close specifications"
            onClick={onClose}
            className="absolute inset-0 bg-ink/80 backdrop-blur-sm"
          />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={`${product.name} specifications`}
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 24, opacity: 0 }}
            transition={{ type: "spring", stiffness: 280, damping: 30 }}
            className="relative z-10 max-h-[88dvh] w-full max-w-3xl overflow-y-auto border border-line bg-panel"
          >
            <div className="grid gap-0 md:grid-cols-2">
              <div className="relative border-b border-line md:border-b-0 md:border-r">
                <PlaceholderMedia
                  src={product.image}
                  alt={product.name}
                  label={brand?.name ?? product.name}
                  code={product.code}
                  ratio="aspect-[4/3] md:aspect-auto md:h-full"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>

              <div className="p-6 sm:p-8">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    {brand ? (
                      <p className="label mb-2">{brand.name}</p>
                    ) : null}
                    <h2 className="font-display text-2xl font-semibold tracking-tight text-bone">
                      {product.name}
                    </h2>
                    <p className="mt-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-mute-2">
                      {product.code}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={onClose}
                    autoFocus
                    aria-label="Close"
                    className="inline-flex size-9 shrink-0 items-center justify-center border border-line text-mute transition-colors hover:border-bone/60 hover:text-bone"
                  >
                    <X weight="bold" className="size-4" />
                  </button>
                </div>

                {product.detail ? (
                  <p className="mt-5 text-sm leading-relaxed text-mute">
                    {product.detail}
                  </p>
                ) : (
                  <p className="mt-5 text-sm leading-relaxed text-mute">
                    {product.summary}
                  </p>
                )}

                <dl className="mt-6 divide-y divide-line-soft border-t border-line-soft">
                  {product.specs.map((spec) => (
                    <div
                      key={spec.label}
                      className="flex items-baseline justify-between gap-6 py-3"
                    >
                      <dt className="font-mono text-[0.62rem] uppercase tracking-[0.14em] text-mute-2">
                        {spec.label}
                      </dt>
                      <dd className="text-right text-sm font-medium text-bone">
                        {spec.value}
                      </dd>
                    </div>
                  ))}
                </dl>

                <ButtonLink
                  href={`/contact?category=${categorySlug}&product=${encodeURIComponent(
                    product.name
                  )}`}
                  variant="primary"
                  size="md"
                  withArrow
                  className="mt-7 w-full"
                >
                  Enquire about this
                </ButtonLink>
                <p className="mt-3 flex items-center gap-1.5 font-mono text-[0.6rem] uppercase tracking-[0.14em] text-mute-2">
                  <ArrowUpRight className="size-3" />
                  Specs as a guide — final configuration confirmed on quotation
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
