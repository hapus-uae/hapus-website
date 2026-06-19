import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import { PlaceholderMedia } from "@/components/ui/PlaceholderMedia";
import { categoryItemCount } from "@/data/categories";
import type { Category } from "@/lib/types";

// Category card → links to the category catalogue page. `feature` enlarges the
// media for use in asymmetric grids.
export function CategoryCard({
  category,
  feature = false,
}: {
  category: Category;
  feature?: boolean;
}) {
  return (
    <Link
      href={`/products/${category.slug}`}
      className="group flex flex-col border border-line bg-panel/30 transition-colors duration-300 hover:bg-panel-2"
    >
      <div className="relative overflow-hidden">
        <div className="transition-transform duration-700 ease-[var(--ease-out-expo)] group-hover:scale-[1.04]">
          <PlaceholderMedia
            src={category.image}
            alt={category.name}
            label={category.name}
            code={`CAT ${category.index}`}
            ratio={feature ? "aspect-[16/10]" : "aspect-[4/3]"}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
        <span className="absolute left-4 top-4 font-mono text-[0.65rem] tracking-[0.2em] text-bone/70">
          {category.index}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5 lg:p-6">
        <div className="flex items-start justify-between gap-4">
          <h3
            className={`font-display font-semibold tracking-tight text-bone ${
              feature ? "text-2xl" : "text-xl"
            }`}
          >
            {category.name}
          </h3>
          <ArrowUpRight className="size-5 shrink-0 -translate-x-1 translate-y-1 text-mute-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 group-hover:text-bone group-hover:opacity-100" />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-mute">
          {category.tagline}
        </p>
        <div className="mt-5 flex items-center gap-3 border-t border-line-soft pt-4">
          <span className="font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mute-2">
            {category.groups.length} groups · {categoryItemCount(category)} lines
          </span>
          <span className="ml-auto font-mono text-[0.65rem] uppercase tracking-[0.16em] text-mute transition-colors group-hover:text-bone">
            View range
          </span>
        </div>
      </div>
    </Link>
  );
}
