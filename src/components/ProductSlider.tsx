"use client";

import { useRef } from "react";
import Link from "next/link";
import type { Product } from "@/data/products";
import ProductCard from "./ProductCard";
import { ArrowRightIcon } from "./icons";

export default function ProductSlider({ products }: { products: Product[] }) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scroll(dir: -1 | 1) {
    trackRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  }

  return (
    <section className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex items-center justify-between mb-6">
        <h2 className="font-display text-2xl tracking-tight">Frequently listed products</h2>
        <div className="flex items-center gap-3">
          <Link href="/search" className="text-sm font-medium hover:underline underline-offset-4 hidden sm:inline">
            View all verified products
          </Link>
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll(-1)}
              aria-label="Scroll left"
              className="w-9 h-9 rounded-full border border-forest/25 bg-cream-dark/40 flex items-center justify-center shadow-sm hover:bg-forest/5"
            >
              <ArrowRightIcon className="w-4 h-4 rotate-180" />
            </button>
            <button
              onClick={() => scroll(1)}
              aria-label="Scroll right"
              className="w-9 h-9 rounded-full bg-forest text-cream flex items-center justify-center shadow-sticker hover:bg-forest-light"
            >
              <ArrowRightIcon className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div
        ref={trackRef}
        className="flex gap-5 overflow-x-auto scrollbar-none scroll-smooth snap-x"
      >
        {products.map((p) => (
          <div key={p.slug} className="min-w-[260px] max-w-[260px] snap-start">
            <ProductCard product={p} />
          </div>
        ))}
      </div>
    </section>
  );
}
