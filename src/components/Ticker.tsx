const items = [
  "No Carcinogens",
  "No Petroleum Derivatives",
  "No Synthetic Fragrance",
  "No Parabens",
  "No Endocrine Disruptors",
  "No Heavy Metals",
  "No PEGs",
  "No Sulfates",
  "No Formaldehyde",
  "No Synthetic Dyes",
  "No Siloxanes",
  "No Optical Brighteners",
];

export default function Ticker() {
  const line = (keyPrefix: string) => (
    <div className="flex items-center shrink-0">
      {items.map((item, i) => (
        <span key={`${keyPrefix}-${i}`} className="flex items-center">
          <span className="px-6 text-sm font-medium tracking-[0.04em] uppercase text-cream/95 whitespace-nowrap">
            {item}
          </span>
          <span className="text-sage-dark/70">✦</span>
        </span>
      ))}
    </div>
  );

  return (
    <div className="bg-forest py-4 overflow-hidden">
      <div className="flex w-max animate-ticker">
        {line("a")}
        {line("b")}
      </div>
    </div>
  );
}
