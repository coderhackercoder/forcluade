import Link from "next/link";
import { categories, categorySlug as slugify } from "@/data/products";
import { ArrowRightIcon, LeafIcon } from "./icons";

export default function CategoryRow() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12">
      <h2 className="font-display text-2xl tracking-tight mb-6">Browse by category</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
        {categories.map((c) => {
          const card = (
            <div
              className={`h-full rounded-2xl border border-forest/10 bg-cream-dark/50 p-4 flex flex-col justify-between shadow-card transition-all ${
                c.comingSoon ? "opacity-60" : "hover:-translate-y-0.5 hover:shadow-card-lg hover:border-forest/20"
              }`}
            >
              <div className="w-9 h-9 rounded-full bg-sage/70 flex items-center justify-center mb-3 shadow-sm">
                <LeafIcon className="w-4 h-4 text-forest-light" />
              </div>
              <div>
                <p className="text-sm font-semibold leading-snug">{c.name}</p>
                <p className="text-xs text-forest/60 mt-1">
                  {c.comingSoon ? "Coming soon" : `${c.count.toLocaleString()} products`}
                </p>
              </div>
            </div>
          );
          return c.comingSoon ? (
            <div key={c.name}>{card}</div>
          ) : (
            <Link key={c.name} href={`/category/${slugify(c.name)}`}>
              {card}
            </Link>
          );
        })}
        <Link href="/category/skincare-personal-care" className="h-full">
          <div className="h-full rounded-2xl bg-forest text-cream p-4 flex flex-col items-center justify-center gap-2 shadow-card hover:bg-forest-light hover:-translate-y-0.5 hover:shadow-card-lg transition-all">
            <div className="w-9 h-9 rounded-full bg-cream/15 flex items-center justify-center">
              <ArrowRightIcon className="w-4 h-4" />
            </div>
            <span className="text-sm font-semibold text-center">View all categories</span>
          </div>
        </Link>
      </div>
    </section>
  );
}
