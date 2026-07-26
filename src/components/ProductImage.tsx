const palette: Record<string, [string, string]> = {
  deodorant: ["#103c23", "#e7d8bf"],
  sunscreen: ["#dcb9a4", "#d6be92"],
  soap: ["#b7c29c", "#f4ebdd"],
  hairclay: ["#be9a63", "#f4ebdd"],
  skinfood: ["#d6be92", "#e7d8bf"],
  tshirt: ["#b7c29c", "#e7d8bf"],
  waterfilter: ["#103c23", "#b7c29c"],
  cleaner: ["#b7c29c", "#dcb9a4"],
  babyshampoo: ["#dcb9a4", "#f4ebdd"],
  tank: ["#e7d8bf", "#b7c29c"],
};

function Glyph({ image }: { image: string }) {
  const common = { stroke: "currentColor", strokeWidth: 1.3, fill: "none" as const };
  switch (image) {
    case "deodorant":
    case "sunscreen":
    case "skinfood":
      return (
        <svg viewBox="0 0 60 90" className="w-14 h-20">
          <rect x="16" y="14" width="28" height="66" rx="6" {...common} />
          <rect x="21" y="2" width="18" height="14" rx="3" {...common} />
          <line x1="16" y1="34" x2="44" y2="34" {...common} />
        </svg>
      );
    case "soap":
      return (
        <svg viewBox="0 0 60 90" className="w-16 h-16">
          <rect x="8" y="24" width="44" height="34" rx="8" {...common} />
          <path d="M14 24C14 16 20 10 30 10C40 10 46 16 46 24" {...common} />
        </svg>
      );
    case "hairclay":
      return (
        <svg viewBox="0 0 60 90" className="w-16 h-16">
          <rect x="10" y="20" width="40" height="46" rx="4" {...common} />
          <ellipse cx="30" cy="20" rx="20" ry="6" {...common} />
        </svg>
      );
    case "tshirt":
    case "tank":
      return (
        <svg viewBox="0 0 60 60" className="w-20 h-20">
          <path
            d="M20 8L30 14L40 8L50 16L44 24L40 21V52H20V21L16 24L10 16L20 8Z"
            {...common}
          />
        </svg>
      );
    case "waterfilter":
      return (
        <svg viewBox="0 0 60 90" className="w-14 h-20">
          <path d="M18 20H42V70C42 76 36 80 30 80C24 80 18 76 18 70V20Z" {...common} />
          <ellipse cx="30" cy="20" rx="12" ry="4" {...common} />
        </svg>
      );
    case "cleaner":
      return (
        <svg viewBox="0 0 60 90" className="w-16 h-20">
          <rect x="14" y="18" width="32" height="58" rx="4" {...common} />
          <rect x="22" y="6" width="16" height="12" rx="2" {...common} />
        </svg>
      );
    case "babyshampoo":
      return (
        <svg viewBox="0 0 60 90" className="w-14 h-20">
          <path d="M20 30H40V72C40 76 36 80 30 80C24 80 20 76 20 72V30Z" {...common} />
          <rect x="24" y="12" width="12" height="18" rx="3" {...common} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 60 60" className="w-16 h-16">
          <rect x="12" y="12" width="36" height="36" rx="6" {...common} />
        </svg>
      );
  }
}

export default function ProductImage({
  image,
  className = "",
}: {
  image: string;
  className?: string;
}) {
  const [c1, c2] = palette[image] ?? ["#cbd6b9", "#e8ddc8"];
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{
        background: `linear-gradient(160deg, ${c1}33 0%, ${c2}55 100%)`,
      }}
    >
      <div className="relative text-forest/75">
        <Glyph image={image} />
      </div>
    </div>
  );
}
