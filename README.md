# HAPUS — automotive & industrial solutions site

A multi-page brochure-and-catalogue website for **HAPUS General Trading L.L.C –
S.P.C**, an automotive & industrial solutions distributor in the UAE (HQ Abu
Dhabi, branch Dubai). Marketing pages plus a category-based solutions catalogue
that drives enquiries — **no e-commerce, no per-product pages, no cart**.

Built with **Next.js 16 (App Router) + Tailwind CSS v4**, statically generated,
fully typed. Monochrome design system, accessible (WCAG AA), SEO-ready.

> Note: product cards under each category are **representative** of the
> equipment classes HAPUS supplies per brand — replace with real SKUs, specs
> and images when available.

## Quick start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build (static)
npm run start    # serve the production build
npm run lint
```

## Architecture

```
src/
  app/                     App Router pages (all statically generated)
    page.tsx               Home
    products/page.tsx      Products overview (categories grid)
    products/[category]/   Category catalogue page (the only place products live)
    brands/ service/ training/ about/ careers/ contact/
    sitemap.ts robots.ts not-found.tsx layout.tsx
  components/
    layout/                Header (mega-menu + mobile), Footer, FloatingContact
    ui/                    Button, Container, SectionHeading, Reveal, Marquee,
                           PlaceholderMedia, PageHero, CTABand, Logo
    cards/                 CategoryCard, BrandTile, LocationCard
    products/ProductGrid   Catalogue grid: brand filter + inline spec modal
    forms/                 ContactForm, CareersForm
  data/                    ← all editable content lives here (typed)
    company.ts categories.ts brands.ts services.ts training.ts jobs.ts nav.ts
  lib/types.ts             Content type definitions
public/assets/             Drop real images here (see assets/README.md)
```

## Editing content

Everything is plain typed config — no CMS:

- **Company / contact / branches** → `src/data/company.ts`
- **Categories & products** → `src/data/categories.ts` (add a product by appending
  to a category's `products` array; specs show in the inline modal)
- **Brands** → `src/data/brands.ts`
- **Services / training / jobs** → respective files
- **Navigation** is derived automatically from categories.

The mega-menu, footer category list, sitemap and product filters all update from
this data — no other edits needed.

### No per-product pages — by design

Products are shown only on their category page as cards. "View specs" opens an
inline modal; it never links to a dedicated URL. This is intentional scope.

## Design system

Monochrome (off-black surfaces, near-white text, hairline borders). Tokens live
in `src/app/globals.css` under `@theme`. Type: **Archivo** (display) + **Geist**
(body) + **Geist Mono** (technical labels). Motion is restrained — scroll reveals
via `IntersectionObserver`, transform/opacity only.

## Images

The site ships with intentional monochrome placeholders so it looks finished with
zero assets. To add real photography, see [`public/assets/README.md`](public/assets/README.md).

## Contact / careers forms

Forms validate client-side and hand off to the visitor's email client via
`mailto:` — **no backend is wired**, so nothing is sent without the visitor's
action. To deliver server-side, POST the form payload to a route handler (e.g.
`app/api/contact/route.ts`) at the marked spot in `ContactForm.tsx` /
`CareersForm.tsx`, and connect your email provider.

## Deployment

Static output deploys anywhere; Vercel is the natural target. Update `company.url`
in `src/data/company.ts` to the production domain so canonical URLs, OpenGraph and
the sitemap are correct.

