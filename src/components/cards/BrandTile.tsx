import type { Brand } from "@/lib/types";
import { BrandLogo } from "@/components/cards/BrandLogo";

// Brand tile. Shows the logo file (grayscale → full on hover) when present, or a
// clean wordmark fallback. Drop logos at /public/assets/brands/<slug>.svg.
export function BrandTile({ brand }: { brand: Brand }) {
  return (
    <div className="group relative flex aspect-[5/3] flex-col justify-between border border-line bg-white p-5 transition-colors duration-300 hover:border-accent/40">
      <span className="font-mono text-[0.58rem] uppercase tracking-[0.2em] text-mute-2">
        {brand.segment}
      </span>

      <div className="flex flex-1 items-center justify-center py-3">
        <BrandLogo brand={brand} />
      </div>

      <span className="text-[0.7rem] leading-snug text-mute-2">
        {brand.blurb}
      </span>
    </div>
  );
}
