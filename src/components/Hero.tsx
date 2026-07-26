import Link from "next/link";
import { SearchIcon } from "./icons";

const popular = ["natural deodorant", "baby shampoo", "RO water filter", "fragrance-free moisturiser"];

export default function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-14 pb-16 grid grid-cols-1 lg:grid-cols-[280px_1fr_280px] gap-8 items-center overflow-hidden">
      <div className="hidden lg:block relative" />

      <div className="text-center max-w-2xl mx-auto">
        <h1 className="font-display text-4xl sm:text-5xl md:text-[3.6rem] leading-[1.03] tracking-[-0.02em] mb-6">
          Find products that are <em className="italic">not</em> trying to kill you.
        </h1>
        <p className="text-forest/70 text-lg mb-9 font-light">
          Search through 100+ products that follow our strict nontoxic standard.
        </p>

        <form action="/search" className="relative max-w-xl mx-auto mb-5">
          <SearchIcon className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-forest/50" />
          <input
            name="q"
            placeholder="search vetted products, brands, or ingredients..."
            className="w-full rounded-full border border-forest/20 bg-cream-dark/40 pl-12 pr-32 py-4 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/15 shadow-card"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2.5 rounded-2xl bg-forest text-cream text-sm font-medium hover:bg-forest-light transition-colors"
          >
            Search
          </button>
        </form>

        <div className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-sm text-forest/60">
          <span>Popular searches:</span>
          {popular.map((p, i) => (
            <span key={p} className="flex items-center gap-2">
              <Link href={`/search?q=${encodeURIComponent(p)}`} className="underline decoration-forest/30 underline-offset-2 hover:text-forest hover:decoration-forest">
                {p}
              </Link>
              {i < popular.length - 1 && <span className="text-forest/30">·</span>}
            </span>
          ))}
        </div>
      </div>

      <div className="hidden lg:block relative" />
    </section>
  );
}
