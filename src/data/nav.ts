import { categories } from "@/data/categories";

// Primary navigation. The Products entry opens a mega-menu listing every
// category (names only — there are no per-product links).
export const mainNav = [
  { label: "Products", href: "/products", hasMega: true },
  { label: "Brands", href: "/brands" },
  { label: "Service", href: "/service" },
  { label: "Training", href: "/training" },
  { label: "About", href: "/about" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

export const megaMenuCategories = categories.map((c) => ({
  index: c.index,
  name: c.name,
  href: `/products/${c.slug}`,
  tagline: c.tagline,
}));

export const footerProductLinks = categories.map((c) => ({
  name: c.name,
  href: `/products/${c.slug}`,
}));
