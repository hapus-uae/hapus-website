// Shared content types for HAPUS. All site content is authored as typed
// config in src/data/* — there is no CMS and no per-product routing.

export type Brand = {
  /** Stable slug, used as a key and for client-side filtering. */
  slug: string;
  name: string;
  /** One-line positioning shown on the brand tile / detail strip. */
  blurb: string;
  /** Partnership segment the brand sits in (e.g. "Power Tools"). */
  segment: string;
  /** Path under /public/assets/brands/. Optional — falls back to a wordmark tile. */
  logo?: string;
};

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  name: string;
  /** Internal catalogue reference, shown mono. Not a URL. */
  code: string;
  /** One-line descriptor under the name. */
  summary: string;
  /** Brand slug — must match a Brand in data/brands.ts. */
  brand: string;
  /** Specs revealed in the inline modal (no dedicated page). */
  specs: ProductSpec[];
  /** Longer description shown inside the inline modal. */
  detail?: string;
  /** Path under /public/assets/products/. Optional — placeholder otherwise. */
  image?: string;
  /** Flags a hero/flagship item for subtle emphasis in the grid. */
  featured?: boolean;
};

export type Category = {
  slug: string;
  name: string;
  /** Short descriptor for cards. */
  tagline: string;
  /** Longer lede for the category hero. */
  description: string;
  /** Two-digit catalogue index, e.g. "04". */
  index: string;
  /** Products that live on this category page (and only here). */
  products: Product[];
  /** Path under /public/assets/categories/. Optional — placeholder otherwise. */
  image?: string;
};

export type ServiceOffering = {
  title: string;
  description: string;
  /** Phosphor icon name resolved in the Service page. */
  icon: string;
};

export type TrainingProgram = {
  code: string;
  title: string;
  audience: string;
  format: string;
  duration: string;
  outcomes: string[];
  certification: string;
};

export type Job = {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  summary: string;
  responsibilities: string[];
};

export type Location = {
  name: string;
  role: string;
  address: string[];
  phone: string;
  email: string;
  hours: string;
  /** Google Maps embed query, e.g. "Dubai Investment Park". */
  mapQuery: string;
};
