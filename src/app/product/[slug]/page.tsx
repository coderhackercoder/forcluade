import Link from "next/link";
import { notFound } from "next/navigation";
import { products, getProductBySlug, getSimilarProducts, categorySlug } from "@/data/products";
import ProductImage from "@/components/ProductImage";
import ProductCard from "@/components/ProductCard";
import { FreeFromPill } from "@/components/Pills";
import { CheckIcon } from "@/components/icons";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

const assessmentLabels: Record<string, string> = {
  ingredientSafety: "Ingredient safety",
  packaging: "Packaging",
  sourcing: "Sourcing",
  format: "Format",
};

function AssessmentBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Passed: "bg-sage/70 text-forest",
    Partial: "bg-kraft/50 text-[#7a5a24]",
    Failed: "bg-blush/70 text-[#8b5842]",
  };
  return (
    <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full ${styles[status]}`}>
      {status}
    </span>
  );
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const similar = getSimilarProducts(product);

  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <div className="text-sm text-forest/60 mb-6">
        <Link href="/" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href={`/category/${categorySlug(product.category)}`} className="hover:underline">
          {product.category}
        </Link>
        <span className="mx-2">/</span>
        <span className="text-forest">{product.name}</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <ProductImage image={product.image} className="h-[420px] w-full rounded-3xl" />

        <div>
          <p className="text-sm font-semibold text-forest/60 uppercase tracking-wide mb-1">
            {product.brand}
          </p>
          <h1 className="font-display text-3xl mb-3">{product.name}</h1>
          <p className="text-2xl font-semibold mb-6">${product.price}</p>

          <a
            href={product.brandUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-2xl bg-forest text-cream font-medium hover:bg-forest-light transition-colors mb-2"
          >
            Buy from brand
          </a>
          <p className="text-xs text-forest/60 mb-8">
            Sold directly by brand. NonTox does not sell products.
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {product.freeFrom.map((f) => (
              <FreeFromPill key={f}>{f}</FreeFromPill>
            ))}
          </div>

          <div className="rounded-2xl bg-cream-dark/40 border border-forest/10 p-5">
            <h2 className="font-semibold mb-2">Why it&apos;s listed</h2>
            <p className="text-sm text-forest/75 leading-relaxed">{product.whyListed}</p>
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-xl font-semibold mb-5">Assessment</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {Object.entries(product.assessments).map(([key, status]) => (
            <div key={key} className="rounded-2xl bg-cream-dark/40 border border-forest/10 p-5">
              <p className="text-sm font-semibold mb-2">{assessmentLabels[key]}</p>
              <AssessmentBadge status={status} />
            </div>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <details className="rounded-2xl bg-cream-dark/40 border border-forest/10 p-5" open>
          <summary className="font-semibold cursor-pointer select-none">Ingredient list</summary>
          <div className="flex flex-wrap gap-2 mt-4">
            {product.ingredients.map((ing) => (
              <span
                key={ing.name}
                title={ing.note}
                className="inline-flex items-center gap-1.5 rounded-full bg-sage/60 text-forest text-xs font-medium px-3 py-1.5"
              >
                <CheckIcon className="w-3 h-3" />
                {ing.name}
                {ing.note && <span className="text-forest/50 italic">({ing.note})</span>}
              </span>
            ))}
          </div>
        </details>
      </div>

      {product.gaps.length > 0 && (
        <div className="mb-16 rounded-2xl border border-kraft-dark/50 bg-kraft/20 p-6">
          <h2 className="font-semibold mb-3">Known gaps</h2>
          <ul className="space-y-2">
            {product.gaps.map((g) => (
              <li key={g} className="text-sm text-forest/80 leading-relaxed flex gap-2">
                <span className="text-kraft-dark">•</span>
                {g}
              </li>
            ))}
          </ul>
        </div>
      )}

      {similar.length > 0 && (
        <div>
          <h2 className="text-xl font-semibold mb-5">Similar products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {similar.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
