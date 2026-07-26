import Link from "next/link";
import type { Product } from "@/data/products";
import ProductImage from "./ProductImage";
import { ListedBadge, FreeFromPill } from "./Pills";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group rounded-2xl border border-forest/10 bg-cream-dark/40 overflow-hidden shadow-card hover:shadow-card-lg hover:-translate-y-0.5 hover:border-forest/25 transition-all flex flex-col">
      <Link href={`/product/${product.slug}`}>
        <ProductImage image={product.image} className="h-44 w-full" />
      </Link>
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center justify-between gap-2 mb-2.5">
          <ListedBadge />
          <span className="text-xs text-forest/50 whitespace-nowrap italic font-display">{product.listedDate}</span>
        </div>
        <p className="text-xs font-semibold text-forest/60 uppercase tracking-wide">{product.brand}</p>
        <Link href={`/product/${product.slug}`} className="font-display text-lg leading-snug mb-1.5 group-hover:underline decoration-forest/40 underline-offset-2">
          {product.name}
        </Link>
        <p className="text-xs text-forest/70 leading-relaxed line-clamp-2 mb-3.5">{product.whyListed}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {product.freeFrom.slice(0, 2).map((f) => (
            <FreeFromPill key={f}>{f}</FreeFromPill>
          ))}
        </div>

        <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-forest/10">
          <span className="font-display text-lg">${product.price}</span>
          <Link
            href={`/product/${product.slug}`}
            className="text-sm font-medium px-4 py-2 rounded-2xl bg-forest text-cream hover:bg-forest-light transition-colors"
          >
            View product
          </Link>
        </div>
      </div>
    </div>
  );
}
