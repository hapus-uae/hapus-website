# Image assets

Until real images are added, the site renders tasteful monochrome "spec-frame"
placeholders automatically — nothing looks broken. To swap in real photography,
drop files here and point the content data at them.

## Where files go

| Folder         | For                | Reference in data file            |
| -------------- | ------------------ | --------------------------------- |
| `categories/`  | Category card art  | `src/data/categories.ts` → `image`|
| `products/`    | Product card art   | `src/data/categories.ts` → product `image` |
| `brands/`      | Brand logos (SVG)  | `src/data/brands.ts` → `logo`     |
| `hero/`        | Hero background video + poster | used directly in the home hero |

### Hero background video

The home hero plays a looping background video. Drop these files in `hero/`:

- `hero/hero.mp4` — required (H.264 MP4)
- `hero/hero.webm` — optional, smaller/better-quality alternative
- `hero/hero-poster.jpg` — still frame shown before the video loads / on reduced-motion

It is rendered desaturated and dimmed automatically to stay monochrome and keep
the headline readable. Until the files exist, the blueprint background shows
through. Keep it short (8–15 s), muted, and ideally already low-key / industrial
footage. Recommended ~1920×1080, compressed for web (a few MB).

## How to wire one up

1. Add the file, e.g. `public/assets/products/kx-v7.jpg`.
2. Set the path in the matching data entry:

   ```ts
   {
     id: "kx-v7",
     name: "Korvex V7 Imaging Aligner",
     image: "/assets/products/kx-v7.jpg", // <- add this line
     ...
   }
   ```

That's it — `PlaceholderMedia` switches from the placeholder to an optimised
`next/image` automatically.

## Recommendations

- Products / categories: landscape 4:3, ~1200×900, JPG or WebP.
- Brand logos: single-colour SVG (they are shown grayscale, inverting on hover).
- Keep everything monochrome / desaturated to suit the black-and-white system.
