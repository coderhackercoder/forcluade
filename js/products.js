const PRODUCTS = [
  {
    id: "primally-pure-charcoal-deodorant",
    brand: "Primally Pure",
    name: "Charcoal Deodorant",
    category: "skincare",
    categoryLabel: "Skincare & Personal Care",
    subcategory: "deodorant",
    price: 18,
    listedDate: "2025-05-02",
    freeFrom: ["Synthetic fragrance", "Parabens", "Aluminum"],
    why: "Anhydrous formula needs no preservatives, food-grade ingredients only, plastic-free packaging.",
    art: "tube",
    tone: 1
  },
  {
    id: "thinkbaby-spf50-sunscreen",
    brand: "Thinkbaby",
    name: "SPF 50 Sunscreen",
    category: "baby",
    categoryLabel: "Baby & Kids",
    subcategory: "sun-care",
    price: 16,
    listedDate: "2025-04-28",
    freeFrom: ["Oxybenzone", "Parabens", "Phthalates"],
    why: "Non-nano zinc oxide only, fragrance free, formulated for infant skin.",
    art: "bottle",
    tone: 2
  },
  {
    id: "dr-bronners-pure-castile-soap",
    brand: "Dr. Bronner's",
    name: "Pure Castile Soap",
    category: "skincare",
    categoryLabel: "Skincare & Personal Care",
    subcategory: "body",
    price: 10,
    listedDate: "2025-04-25",
    freeFrom: ["Synthetic fragrance", "Sulfates", "Parabens"],
    why: "Certified organic, biodegradable, no synthetic ingredients.",
    art: "jar",
    tone: 3
  },
  {
    id: "organic-jaguar-beef-tallow-hair-clay",
    brand: "Organic Jaguar",
    name: "Beef Tallow Hair Clay",
    category: "skincare",
    categoryLabel: "Skincare & Personal Care",
    subcategory: "hair",
    price: 24,
    listedDate: "2025-04-22",
    freeFrom: ["Petroleum derivatives", "Synthetic fragrance", "PEGs"],
    why: "Water-free formula, single origin grass-fed tallow, no preservatives needed.",
    art: "tin",
    tone: 1
  },
  {
    id: "weleda-skin-food",
    brand: "Weleda",
    name: "Skin Food",
    category: "skincare",
    categoryLabel: "Skincare & Personal Care",
    subcategory: "face",
    price: 20,
    listedDate: "2025-04-18",
    freeFrom: ["Parabens", "Mineral oils", "Synthetic fragrance"],
    why: "Plant-based only, no petroleum derivatives, COSMOS certified.",
    art: "tin",
    tone: 2
  },
  {
    id: "patagonia-organic-cotton-tshirt",
    brand: "Patagonia",
    name: "Organic Cotton T-Shirt",
    category: "clothing",
    categoryLabel: "Clothing & Textiles",
    subcategory: "tops",
    price: 45,
    listedDate: "2025-03-14",
    freeFrom: ["AZO dyes", "Formaldehyde", "PFAS"],
    why: "GOTS certified, no synthetic dyes, traceable supply chain.",
    art: "shirt",
    tone: 3
  },
  {
    id: "berkey-water-filter-system",
    brand: "Berkey",
    name: "Water Filter System",
    category: "water-filters",
    categoryLabel: "Water Filters",
    subcategory: "countertop",
    price: 280,
    listedDate: "2025-03-05",
    freeFrom: ["Chlorine", "Heavy metals", "PFAS", "Lead", "Arsenic", "Microplastics"],
    why: "Exceeds NSF 58 reverse osmosis standard.",
    art: "filter",
    tone: 1
  },
  {
    id: "branch-basics-concentrate-cleaner",
    brand: "Branch Basics",
    name: "Concentrate Cleaner",
    category: "home",
    categoryLabel: "Home",
    subcategory: "cleaning",
    price: 49,
    listedDate: "2025-02-20",
    freeFrom: ["Synthetic fragrance", "Quaternary ammonium", "Optical brighteners"],
    why: "Plant and mineral based only.",
    art: "spray",
    tone: 2
  },
  {
    id: "burts-bees-baby-shampoo",
    brand: "Burt's Bees",
    name: "Baby Shampoo",
    category: "baby",
    categoryLabel: "Baby & Kids",
    subcategory: "hair",
    price: 8,
    listedDate: "2025-02-12",
    freeFrom: ["Sulfates", "Parabens", "Synthetic fragrance"],
    why: "No petroleum derivatives, pediatrician tested.",
    art: "bottle",
    tone: 3
  },
  {
    id: "mate-the-label-organic-ribbed-tank",
    brand: "MATE the Label",
    name: "Organic Ribbed Tank",
    category: "clothing",
    categoryLabel: "Clothing & Textiles",
    subcategory: "tops",
    price: 58,
    listedDate: "2025-01-16",
    freeFrom: ["AZO dyes", "PFAS", "Formaldehyde"],
    why: "GOTS certified, low-impact dyes, ethical manufacturing.",
    art: "shirt",
    tone: 1
  }
];

const PRODUCT_ART_TONES = {
  1: { a: "#e7e0cd", b: "#cfc6a4" },
  2: { a: "#dfe5d3", b: "#c3d0ae" },
  3: { a: "#e9ddd0", b: "#d3bd9c" }
};

function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

function formatListedDate(iso) {
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function productArtSVG(product, seed) {
  const tone = PRODUCT_ART_TONES[product.tone] || PRODUCT_ART_TONES[1];
  const uid = "g" + (seed || product.id).replace(/[^a-z0-9]/gi, "");
  const shapes = {
    tube: `<rect x="78" y="60" width="44" height="88" rx="10" fill="#2c2a26"/><rect x="82" y="52" width="36" height="16" rx="6" fill="#3a3733"/>`,
    bottle: `<path d="M85 70h30v70a8 8 0 0 1-8 8H93a8 8 0 0 1-8-8V70z" fill="#f4f1e6"/><rect x="90" y="56" width="20" height="18" rx="4" fill="#8fa77c"/>`,
    jar: `<rect x="72" y="82" width="56" height="58" rx="12" fill="#f7f4ea"/><rect x="76" y="70" width="48" height="16" rx="6" fill="#c9a25c"/>`,
    tin: `<ellipse cx="100" cy="132" rx="34" ry="8" fill="#3a3733" opacity="0.15"/><rect x="70" y="78" width="60" height="50" rx="8" fill="#efe4c8"/><rect x="70" y="78" width="60" height="14" rx="4" fill="#4c5a3c"/>`,
    shirt: `<path d="M78 62l16-8 6 6 6-6 16 8 8 16-14 8v54H84V86l-14-8z" fill="#eef0e4"/>`,
    filter: `<rect x="82" y="54" width="36" height="30" rx="6" fill="#e8ece0"/><path d="M74 88h52l-8 56a8 8 0 0 1-8 7H90a8 8 0 0 1-8-7z" fill="#f7f4ea"/>`,
    spray: `<rect x="84" y="76" width="32" height="66" rx="6" fill="#eef0e4"/><rect x="90" y="58" width="20" height="20" rx="4" fill="#8fa77c"/><rect x="72" y="60" width="20" height="10" rx="4" fill="#4c5a3c"/>`
  };
  const sprig = `<path d="M28 176c8-28 4-52-10-70" stroke="#7c8a68" stroke-width="2" fill="none" opacity="0.55"/><ellipse cx="22" cy="118" rx="7" ry="3.5" fill="#8a9973" opacity="0.55" transform="rotate(-30 22 118)"/><ellipse cx="16" cy="132" rx="7" ry="3.5" fill="#8a9973" opacity="0.5" transform="rotate(-10 16 132)"/>`;
  return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${product.brand} ${product.name} product illustration">
    <defs><linearGradient id="${uid}" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="${tone.a}"/><stop offset="1" stop-color="${tone.b}"/></linearGradient></defs>
    <rect width="200" height="200" fill="url(#${uid})"/>
    ${sprig}
    ${shapes[product.art] || shapes.jar}
  </svg>`;
}
