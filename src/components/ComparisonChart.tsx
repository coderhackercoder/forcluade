import { CheckIcon, XIcon } from "./icons";

const rows: [string, boolean, boolean][] = [
  ["Synthetic fragrance", true, false],
  ["SLS/SLES sulfates", true, false],
  ["Parabens", true, false],
  ["Silicones", true, false],
  ["PEGs", true, false],
  ["Petroleum derivatives", true, false],
  ["Endocrine disruptors", true, false],
  ["Third party verified", false, true],
  ["Ingredient transparency", false, true],
];

export default function ComparisonChart() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-14">
      <h2 className="text-3xl md:text-4xl font-display tracking-tight text-center mb-2">
        What actually changes
      </h2>
      <p className="text-center text-forest/70 mb-9 font-light">
        A typical shampoo next to a NonTox-listed one, ingredient by ingredient.
      </p>

      <div className="rounded-[1.6rem] overflow-hidden border border-forest/10 shadow-card">
        <div className="grid grid-cols-2">
          <div className="bg-blush/60 px-6 py-5 text-center border-r border-forest/10">
            <h3 className="font-display text-lg tracking-tight">Typical Shampoo</h3>
          </div>
          <div className="bg-sage/60 px-6 py-5 text-center">
            <h3 className="font-display text-lg tracking-tight">NonTox Shampoo</h3>
          </div>
        </div>

        {rows.map(([label, leftBad, rightGood], i) => (
          <div
            key={label}
            className={`grid grid-cols-2 ${i % 2 === 0 ? "bg-cream" : "bg-cream-dark/40"}`}
          >
            <div className="px-6 py-3.5 border-r border-forest/10 flex items-center justify-between gap-3">
              <span className="text-sm">{label}</span>
              {leftBad ? (
                <span className="w-6 h-6 rounded-full bg-blush flex items-center justify-center shrink-0">
                  <XIcon className="w-3.5 h-3.5 text-[#8b5842]" />
                </span>
              ) : (
                <span className="w-6 h-6 rounded-full bg-sage flex items-center justify-center shrink-0">
                  <CheckIcon className="w-3.5 h-3.5 text-forest" />
                </span>
              )}
            </div>
            <div className="px-6 py-3.5 flex items-center justify-between gap-3">
              <span className="text-sm">{label}</span>
              {rightGood ? (
                <span className="w-6 h-6 rounded-full bg-sage flex items-center justify-center shrink-0">
                  <CheckIcon className="w-3.5 h-3.5 text-forest" />
                </span>
              ) : (
                <span className="w-6 h-6 rounded-full bg-blush flex items-center justify-center shrink-0">
                  <XIcon className="w-3.5 h-3.5 text-[#8b5842]" />
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
