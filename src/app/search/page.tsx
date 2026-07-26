import { searchProducts } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";
import { SearchIcon } from "@/components/icons";

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q = "" } = await searchParams;
  const results = searchProducts(q);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <form action="/search" className="relative max-w-xl mb-6">
        <SearchIcon className="w-5 h-5 absolute left-5 top-1/2 -translate-y-1/2 text-forest/50" />
        <input
          name="q"
          defaultValue={q}
          placeholder="search vetted products, brands, or ingredients..."
          className="w-full rounded-full border border-forest/15 bg-cream pl-12 pr-32 py-4 text-sm outline-none focus:border-forest focus:ring-2 focus:ring-forest/15 shadow-card"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-5 py-2.5 rounded-2xl bg-forest text-cream text-sm font-medium hover:bg-forest-light transition-colors"
        >
          Search
        </button>
      </form>

      <p className="text-forest/70 mb-8">
        {results.length} result{results.length === 1 ? "" : "s"}
        {q ? (
          <>
            {" "}
            for <span className="font-semibold text-forest">&ldquo;{q}&rdquo;</span>
          </>
        ) : null}
      </p>

      <div className="flex flex-col lg:flex-row gap-10">
        <FilterSidebar />
        <div className="flex-1">
          {results.length === 0 ? (
            <p className="text-forest/60">
              No vetted products match that search yet. Try a different ingredient or brand name.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {results.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
