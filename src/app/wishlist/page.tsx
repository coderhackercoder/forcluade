"use client";

import { useState } from "react";
import Link from "next/link";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import { HeartIcon } from "@/components/icons";

const saved = products.slice(0, 6);
const tabs = ["All saved", "Skincare picks", "Baby registry"];

export default function WishlistPage() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [showShare, setShowShare] = useState(false);

  if (!loggedIn) {
    return (
      <div className="mx-auto max-w-md px-6 py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-sage/60 flex items-center justify-center mx-auto mb-6">
          <HeartIcon className="w-7 h-7 text-forest" />
        </div>
        <h1 className="font-display text-3xl mb-3">Save products</h1>
        <p className="text-forest/70 mb-8">
          Create a free account to save vetted products, build custom lists, and share them with
          friends and family.
        </p>
        <button
          onClick={() => setLoggedIn(true)}
          className="px-6 py-3 rounded-2xl bg-forest text-cream font-medium hover:bg-forest-light transition-colors"
        >
          Create account
        </button>
        <p className="text-xs text-forest/50 mt-4">(Demo: click above to preview the signed-in view)</p>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
        <h1 className="font-display text-3xl">Your wishlist</h1>
        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowShare((s) => !s)}
            className="px-4 py-2 rounded-2xl border border-forest/20 text-sm font-medium hover:bg-forest/5 transition-colors"
          >
            Share list
          </button>
          <button
            onClick={() => setLoggedIn(false)}
            className="text-sm text-forest/50 hover:underline"
          >
            Log out
          </button>
        </div>
      </div>

      {showShare && (
        <div className="mb-6 rounded-xl border border-forest/15 bg-cream-dark/40 p-4 flex flex-col sm:flex-row items-center gap-3">
          <p className="text-sm text-forest/70 flex-1">
            Anyone with this link can view your list — they can&apos;t edit it or buy anything
            through it.
          </p>
          <code className="text-xs bg-cream px-3 py-2 rounded-full border border-forest/10 whitespace-nowrap">
            nontox.example/list/kaizen-{activeTab.toLowerCase().replace(/\s+/g, "-")}
          </code>
        </div>
      )}

      <div className="flex flex-wrap gap-2 mb-8">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActiveTab(t)}
            className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
              t === activeTab ? "bg-forest text-cream border-forest" : "border-forest/20 hover:bg-forest/5"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {saved.length === 0 ? (
        <p className="text-forest/60">
          Nothing saved yet.{" "}
          <Link href="/search" className="underline">
            Browse products
          </Link>{" "}
          to start a list.
        </p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
          {saved.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      )}
    </div>
  );
}
