import Link from "next/link";
import { ArrowRightIcon, CheckIcon, SearchIcon } from "./icons";

const builtDifferent = [
  "No petroleum derivatives, ever",
  "Endocrine disruptors blocked by default",
  "We flip the burden of proof",
  "Always free, always independent",
];

const steps = [
  {
    n: "1",
    title: "Ingredient screening.",
    body: "Every ingredient checked against our hard block list — no exceptions for dose or concentration.",
  },
  {
    n: "2",
    title: "Gap review.",
    body: "Packaging, sourcing, format, and any known imperfections assessed honestly.",
  },
  {
    n: "3",
    title: "Listed or not.",
    body: "Meets the standard, it's listed. Doesn't, it isn't. No scores. No rankings.",
  },
];

const alwaysBlock = [
  "No carcinogens",
  "No endocrine disruptors",
  "No petroleum derivatives",
  "No synthetic fragrance",
  "No heavy metals",
  "No formaldehyde or releasers",
];

export default function FeatureCards() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="rounded-[1.8rem] bg-forest text-cream p-8 flex flex-col shadow-card">
        <h3 className="font-display text-[1.7rem] leading-tight tracking-tight mb-1">Built different.</h3>
        <h3 className="font-display text-[1.7rem] leading-tight tracking-tight mb-6">On purpose.</h3>
        <ul className="space-y-3.5 mb-9 flex-1">
          {builtDifferent.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm text-cream/90">
              <CheckIcon className="w-4 h-4 mt-0.5 shrink-0 text-sage" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/our-standard"
          className="inline-flex items-center gap-2 text-sm font-medium bg-cream text-forest rounded-2xl px-5 py-2.5 w-fit hover:bg-cream-dark transition-colors"
        >
          Read our standard <ArrowRightIcon className="w-3.5 h-3.5" />
        </Link>
      </div>

      <div className="rounded-[1.4rem] bg-kraft/35 p-8 flex flex-col border border-kraft-dark/30 shadow-card">
        <div className="flex items-start justify-between mb-7 gap-3">
          <h3 className="font-display text-[1.7rem] leading-tight tracking-tight">
            How a product
            <br />
            gets listed
          </h3>
          <Link
            href="/our-standard"
            className="inline-flex items-center gap-1 text-xs font-semibold bg-cream rounded-full px-3 py-1.5 whitespace-nowrap shadow-sm"
          >
            Our full process <ArrowRightIcon className="w-3 h-3" />
          </Link>
        </div>
        <div className="flex-1 grid grid-cols-3 gap-3 items-start">
          {steps.map((s, i) => (
            <div key={s.n} className="relative">
              <div className="w-12 h-12 rounded-full bg-cream border border-forest/15 flex items-center justify-center mb-3 shadow-sm">
                {i === 0 ? <SearchIcon className="w-5 h-5" /> : i === 1 ? <span className="text-lg">📦</span> : <CheckIcon className="w-5 h-5" />}
              </div>
              <p className="text-xs font-bold uppercase tracking-wide text-forest/50 mb-1">{s.n}</p>
              <p className="text-sm font-semibold mb-1">{s.title}</p>
              <p className="text-xs text-forest/70 leading-snug">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-[1.6rem] bg-sage/45 p-8 flex flex-col border border-sage-dark/40 shadow-card">
        <div className="mb-6">
          <h3 className="font-display text-[1.7rem] leading-tight tracking-tight">
            What we
            <br />
            always block
          </h3>
        </div>
        <ul className="space-y-2.5 mb-7 flex-1">
          {alwaysBlock.map((item) => (
            <li key={item} className="flex items-center gap-2.5 text-sm">
              <CheckIcon className="w-4 h-4 text-forest shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <Link
          href="/our-standard"
          className="inline-flex items-center gap-2 text-sm font-medium w-fit hover:underline underline-offset-4"
        >
          View full standards <ArrowRightIcon className="w-3.5 h-3.5" />
        </Link>
      </div>
    </section>
  );
}
