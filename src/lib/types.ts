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

export type ProductGroup = {
  /** Sub-category heading within a category, e.g. "Surface Preparation". */
  name: string;
  /** Equipment classes under this group — names only. No SKUs, no per-item pages. */
  items: string[];
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
  /** Sub-groups of equipment classes shown on the category page. */
  groups: ProductGroup[];
  /** Brand slugs represented here — must match a Brand in data/brands.ts. */
  brands?: string[];
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
  /** Topics covered in the program — the PDF "Coverage" list. */
  coverage: string[];
  /** What participants can do after the program — practical learning outcomes. */
  outcomes?: string[];
  /** Who the program is for — the PDF "Target Audience" list. Omitted where the
   * source document lists none (e.g. cleaning equipment, EV safety awareness). */
  audience?: string[];
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
