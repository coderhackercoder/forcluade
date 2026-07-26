import Link from "next/link";
import { notFound } from "next/navigation";
import { categories, getCategoryBySlug, getProductsByCategory, categorySlug } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import FilterSidebar from "@/components/FilterSidebar";

export function generateStaticParams() {
  return categories.filter((c) => !c.comingSoon).map((c) => ({ slug: categorySlug(c.name) }));
}

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);
  if (!category || category.comingSoon) notFound();

  const productList = getProductsByCategory(category.name);

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="text-sm text-forest/60 mb-4">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="/category/skincare-personal-care" className="hover:underline">Browse</Link>
        <span className="mx-2">/</span>
        <span className="text-forest">{category.name}</span>
      </div>

      <h1 className="font-display text-3xl mb-2">{category.name}</h1>
      <p className="text-forest/70 mb-6">{productList.length} vetted products meeting the NonTox standard</p>

      <div className="flex flex-wrap gap-2 mb-8">
        {categories.map((c) => (
          <Link
            key={c.name}
            href={c.comingSoon ? "#" : `/category/${categorySlug(c.name)}`}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              c.name === category.name
                ? "bg-forest text-cream border-forest"
                : "border-forest/20 hover:bg-forest/5"
            } ${c.comingSoon ? "opacity-50 pointer-events-none" : ""}`}
          >
            {c.name}
          </Link>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-10">
        <FilterSidebar />
        <div className="flex-1">
          {productList.length === 0 ? (
            <p className="text-forest/60">No products listed in this category yet.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {productList.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
