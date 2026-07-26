export type Category =
  | "Skincare & Personal Care"
  | "Baby & Kids"
  | "Clothing & Textiles"
  | "Water Filters"
  | "Home"
  | "Food & Supplements";

export type Product = {
  slug: string;
  brand: string;
  name: string;
  price: number;
  category: Category;
  image: string;
  listedDate: string;
  whyListed: string;
  freeFrom: string[];
  ingredients: { name: string; note?: string }[];
  assessments: {
    ingredientSafety: "Passed" | "Partial" | "Failed";
    packaging: "Passed" | "Partial" | "Failed";
    sourcing: "Passed" | "Partial" | "Failed";
    format: "Passed" | "Partial" | "Failed";
  };
  gaps: string[];
  brandUrl: string;
};

export const categories: { name: Category; count: number; comingSoon?: boolean; blurb: string }[] = [
  { name: "Skincare & Personal Care", count: 2873, blurb: "Deodorant, moisturiser, soap, haircare" },
  { name: "Baby & Kids", count: 1456, blurb: "Shampoo, sunscreen, lotion" },
  { name: "Clothing & Textiles", count: 1223, blurb: "Organic cotton, undyed wool" },
  { name: "Water Filters", count: 743, blurb: "RO systems, gravity filters" },
  { name: "Home", count: 1034, blurb: "Cleaners, candles, cookware" },
  { name: "Food & Supplements", count: 0, comingSoon: true, blurb: "Coming soon" },
];

export const products: Product[] = [
  {
    slug: "primally-pure-charcoal-deodorant",
    brand: "Primally Pure",
    name: "Charcoal Deodorant",
    price: 18,
    category: "Skincare & Personal Care",
    image: "deodorant",
    listedDate: "May 2, 2025",
    whyListed: "Baking-soda-free formula built on tallow and activated charcoal — no aluminum, no propylene glycol, no synthetic fragrance.",
    freeFrom: ["Aluminum", "Parabens", "Synthetic fragrance", "Propylene glycol"],
    ingredients: [
      { name: "Tallow" },
      { name: "Coconut oil" },
      { name: "Arrowroot powder" },
      { name: "Activated charcoal" },
      { name: "Candelilla wax" },
      { name: "Essential oil blend", note: "disclosed, under 1%" },
    ],
    assessments: { ingredientSafety: "Passed", packaging: "Passed", sourcing: "Partial", format: "Passed" },
    gaps: [
      "Tallow sourcing is disclosed as \"regeneratively farmed\" but the specific farm network isn't independently audited yet.",
    ],
    brandUrl: "https://example.com/primally-pure",
  },
  {
    slug: "thinkbaby-spf-50-sunscreen",
    brand: "Thinkbaby",
    name: "SPF 50 Sunscreen",
    price: 16,
    category: "Baby & Kids",
    image: "sunscreen",
    listedDate: "Apr 28, 2025",
    whyListed: "Mineral-only UV filter (non-nano zinc oxide), no oxybenzone, no synthetic fragrance, fragrance-free formula suitable for sensitive skin.",
    freeFrom: ["Oxybenzone", "Synthetic fragrance", "Nanoparticles", "Parabens"],
    ingredients: [
      { name: "Non-nano zinc oxide" },
      { name: "Sunflower oil" },
      { name: "Beeswax" },
      { name: "Vitamin E" },
      { name: "Aloe vera" },
    ],
    assessments: { ingredientSafety: "Passed", packaging: "Passed", sourcing: "Passed", format: "Passed" },
    gaps: ["Tube is recyclable in theory but curbside programs rarely accept it in practice."],
    brandUrl: "https://example.com/thinkbaby",
  },
  {
    slug: "dr-bronners-pure-castile-soap",
    brand: "Dr. Bronner's",
    name: "Pure Castile Soap",
    price: 10,
    category: "Skincare & Personal Care",
    image: "soap",
    listedDate: "Apr 25, 2025",
    whyListed: "18-ingredient transparent formula, certified organic oils, no synthetic detergents or preservatives.",
    freeFrom: ["Sulfates", "Synthetic fragrance", "Parabens", "Petroleum derivatives"],
    ingredients: [
      { name: "Organic coconut oil" },
      { name: "Organic olive oil" },
      { name: "Organic hemp oil" },
      { name: "Organic jojoba oil" },
      { name: "Citric acid" },
    ],
    assessments: { ingredientSafety: "Passed", packaging: "Passed", sourcing: "Passed", format: "Passed" },
    gaps: ["Concentrated formula can irritate if under-diluted — not a formula flaw, but worth flagging for first-time users."],
    brandUrl: "https://example.com/dr-bronners",
  },
  {
    slug: "organic-jaguar-beef-tallow-hair-clay",
    brand: "Organic Jaguar",
    name: "Beef Tallow Hair Clay",
    price: 24,
    category: "Skincare & Personal Care",
    image: "hairclay",
    listedDate: "Apr 22, 2025",
    whyListed: "Grass-fed tallow base with bentonite clay for hold, no silicones or petroleum-based waxes.",
    freeFrom: ["Silicones", "Petroleum derivatives", "Synthetic fragrance", "PEGs"],
    ingredients: [
      { name: "Grass-fed tallow" },
      { name: "Bentonite clay" },
      { name: "Beeswax" },
      { name: "Shea butter" },
      { name: "Essential oil blend", note: "disclosed" },
    ],
    assessments: { ingredientSafety: "Passed", packaging: "Partial", sourcing: "Passed", format: "Passed" },
    gaps: ["Packaging jar is glass but the lid is a non-recyclable composite."],
    brandUrl: "https://example.com/organic-jaguar",
  },
  {
    slug: "weleda-skin-food",
    brand: "Weleda",
    name: "Skin Food",
    price: 20,
    category: "Skincare & Personal Care",
    image: "skinfood",
    listedDate: "Apr 18, 2025",
    whyListed: "Long-standing certified-natural formula with plant oils and beeswax, no synthetic emulsifiers.",
    freeFrom: ["Synthetic fragrance", "Parabens", "Mineral oil", "Silicones"],
    ingredients: [
      { name: "Sunflower seed oil" },
      { name: "Beeswax" },
      { name: "Calendula extract" },
      { name: "Chamomile extract" },
      { name: "Rosemary extract" },
    ],
    assessments: { ingredientSafety: "Passed", packaging: "Passed", sourcing: "Passed", format: "Partial" },
    gaps: ["Rich texture isn't suited for very oily or acne-prone skin — a format fit issue, not a safety one."],
    brandUrl: "https://example.com/weleda",
  },
  {
    slug: "patagonia-organic-cotton-tshirt",
    brand: "Patagonia",
    name: "Organic Cotton T-Shirt",
    price: 45,
    category: "Clothing & Textiles",
    image: "tshirt",
    listedDate: "Apr 12, 2025",
    whyListed: "GOTS-certified organic cotton, low-impact dyes, no formaldehyde finishing agents.",
    freeFrom: ["Formaldehyde", "Synthetic dyes", "PFAS", "Flame retardants"],
    ingredients: [
      { name: "100% organic cotton" },
      { name: "Low-impact reactive dye" },
    ],
    assessments: { ingredientSafety: "Passed", packaging: "Passed", sourcing: "Passed", format: "Passed" },
    gaps: ["Dye lot color can vary slightly between production runs."],
    brandUrl: "https://example.com/patagonia",
  },
  {
    slug: "berkey-water-filter-system",
    brand: "Berkey",
    name: "Water Filter System",
    price: 280,
    category: "Water Filters",
    image: "waterfilter",
    listedDate: "Apr 8, 2025",
    whyListed: "Gravity-fed carbon block filtration removes heavy metals and chlorine byproducts without added plastics in the flow path.",
    freeFrom: ["Lead leaching", "BPA", "Chlorine byproducts", "Microplastics"],
    ingredients: [
      { name: "Carbon composite filter elements" },
      { name: "Stainless steel housing" },
    ],
    assessments: { ingredientSafety: "Passed", packaging: "Passed", sourcing: "Partial", format: "Passed" },
    gaps: ["Third-party lab results are published but not updated every batch."],
    brandUrl: "https://example.com/berkey",
  },
  {
    slug: "branch-basics-concentrate-cleaner",
    brand: "Branch Basics",
    name: "Concentrate Cleaner",
    price: 49,
    category: "Home",
    image: "cleaner",
    listedDate: "Apr 5, 2025",
    whyListed: "One plant-based concentrate replaces multiple single-use cleaners, no synthetic fragrance or optical brighteners.",
    freeFrom: ["Synthetic fragrance", "Optical brighteners", "Ammonia", "Chlorine"],
    ingredients: [
      { name: "Coconut-based surfactant" },
      { name: "Sodium citrate" },
      { name: "Sodium carbonate" },
      { name: "Water" },
    ],
    assessments: { ingredientSafety: "Passed", packaging: "Passed", sourcing: "Passed", format: "Passed" },
    gaps: ["Concentrate requires accurate dilution — over-diluting reduces effectiveness, not a safety concern."],
    brandUrl: "https://example.com/branch-basics",
  },
  {
    slug: "burts-bees-baby-shampoo",
    brand: "Burt's Bees",
    name: "Baby Shampoo",
    price: 8,
    category: "Baby & Kids",
    image: "babyshampoo",
    listedDate: "Mar 30, 2025",
    whyListed: "Tear-free formula built without sulfates or synthetic fragrance, uses mild coconut-derived cleansers.",
    freeFrom: ["Sulfates", "Synthetic fragrance", "Parabens", "Phthalates"],
    ingredients: [
      { name: "Coconut-derived cleanser" },
      { name: "Aloe leaf juice" },
      { name: "Chamomile extract" },
      { name: "Vitamin E" },
    ],
    assessments: { ingredientSafety: "Passed", packaging: "Passed", sourcing: "Partial", format: "Passed" },
    gaps: ["Natural fragrance blend is disclosed but exact botanical ratios are proprietary."],
    brandUrl: "https://example.com/burts-bees",
  },
  {
    slug: "mate-the-label-organic-ribbed-tank",
    brand: "MATE the Label",
    name: "Organic Ribbed Tank",
    price: 58,
    category: "Clothing & Textiles",
    image: "tank",
    listedDate: "Mar 24, 2025",
    whyListed: "Undyed, unbleached organic cotton with no synthetic finishing treatments.",
    freeFrom: ["Synthetic dyes", "Formaldehyde", "PFAS", "Chlorine bleach"],
    ingredients: [
      { name: "100% organic cotton, undyed" },
    ],
    assessments: { ingredientSafety: "Passed", packaging: "Passed", sourcing: "Passed", format: "Passed" },
    gaps: ["Natural cotton color varies slightly between harvests."],
    brandUrl: "https://example.com/mate-the-label",
  },
];

export function categorySlug(name: string) {
  return name.toLowerCase().replace(/&/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

export function getCategoryBySlug(slug: string) {
  return categories.find((c) => categorySlug(c.name) === slug);
}

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function getProductsByCategory(category: string) {
  return products.filter((p) => p.category === category);
}

export function getSimilarProducts(product: Product, count = 3) {
  return products
    .filter((p) => p.category === product.category && p.slug !== product.slug)
    .slice(0, count);
}

export function searchProducts(query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return products;
  return products.filter(
    (p) =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.freeFrom.some((f) => f.toLowerCase().includes(q))
  );
}
