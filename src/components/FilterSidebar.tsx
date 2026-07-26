const freeFromOptions = [
  "Synthetic fragrance",
  "Parabens",
  "Sulfates",
  "Petroleum derivatives",
  "Silicones",
  "Formaldehyde",
];

export default function FilterSidebar() {
  return (
    <aside className="w-full lg:w-56 shrink-0 space-y-8">
      <div>
        <h3 className="text-sm font-semibold mb-3">Price</h3>
        <div className="space-y-2 text-sm text-forest/75">
          {["Under $15", "$15 – $30", "$30 – $60", "$60+"].map((p) => (
            <label key={p} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-forest/30" />
              {p}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Free from</h3>
        <div className="space-y-2 text-sm text-forest/75">
          {freeFromOptions.map((f) => (
            <label key={f} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-forest/30" />
              {f}
            </label>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-sm font-semibold mb-3">Assessment</h3>
        <div className="space-y-2 text-sm text-forest/75">
          {["Fully passed", "Partial gaps noted"].map((f) => (
            <label key={f} className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" className="rounded border-forest/30" />
              {f}
            </label>
          ))}
        </div>
      </div>
    </aside>
  );
}
