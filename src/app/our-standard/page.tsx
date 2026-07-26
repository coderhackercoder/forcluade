import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";
import { BlockedPill } from "@/components/Pills";

const blocked = [
  "Formaldehyde", "Parabens", "Phthalates", "Oxybenzone", "Triclosan",
  "Sodium Lauryl Sulfate", "PEG compounds", "Synthetic musks", "BHA", "BHT",
  "Coal tar dyes", "Petrolatum", "Talc (unrefined)", "Diethanolamine", "Toluene",
  "Aluminum salts", "Cyclosiloxanes", "Optical brighteners", "Propylparaben", "Resorcinol",
];

const standards = [
  {
    title: "Skincare & Personal Care",
    body: "No endocrine disruptors, synthetic fragrance, or petroleum-derived emollients. Full ingredient disclosure required.",
  },
  {
    title: "Baby & Kids",
    body: "Stricter thresholds than adult products — zero tolerance for fragrance allergens and preservative releasers.",
  },
  {
    title: "Clothing & Textiles",
    body: "GOTS-equivalent fiber sourcing, no formaldehyde finishing, no PFAS water-resistant treatments.",
  },
  {
    title: "Water Filters",
    body: "Third-party contaminant testing required, no leaching plastics in the flow path.",
  },
  {
    title: "Home",
    body: "No optical brighteners, no synthetic fragrance, no chlorine bleach or ammonia in cleaning formulas.",
  },
];

const dontClaim = [
  "We don't claim a product is 100% risk-free — we claim it clears our published bar.",
  "We don't rank or score brands against each other.",
  "We don't accept payment from brands to be listed or to skip review.",
  "We don't guarantee every batch matches the formula we last reviewed.",
];

export default function OurStandardPage() {
  return (
    <div>
      <div className="mx-auto max-w-4xl px-6 pt-16 pb-10 text-center">
        <h1 className="font-display text-4xl md:text-5xl mb-5">How we decide what gets listed.</h1>
        <p className="text-forest/70 text-lg leading-relaxed">
          &ldquo;Nontoxic&rdquo; isn&apos;t a legally protected term. Anyone can put it on a label.
          Our standard is our attempt to make that word mean something again.
        </p>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-10">
        <h2 className="text-2xl font-display mb-4">Why nontoxic is complicated</h2>
        <p className="text-forest/75 leading-relaxed mb-4">
          Regulation lags decades behind the chemistry industry. A product can legally claim
          &ldquo;clean&rdquo; while containing ingredients flagged by independent researchers as
          endocrine disruptors or carcinogens at common-use concentrations. Dose, cumulative
          exposure, and combination effects rarely factor into legal labeling requirements.
        </p>
        <p className="text-forest/75 leading-relaxed">
          So we don't rely on what's legally required. We built our own hard block list from
          independent research, and we apply it the same way to every brand — big or small,
          advertiser or not.
        </p>
      </div>

      <div className="bg-kraft/20 py-14">
        <p className="font-display italic text-2xl md:text-3xl text-center max-w-2xl mx-auto px-6">
          &ldquo;When in doubt, it&apos;s out.&rdquo;
        </p>
      </div>

      <div className="mx-auto max-w-5xl px-6 py-14">
        <h2 className="text-2xl font-display text-center mb-8">What we always block</h2>
        <div className="flex flex-wrap gap-2.5 justify-center">
          {blocked.map((b) => (
            <BlockedPill key={b}>{b}</BlockedPill>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-14">
        <h2 className="text-2xl font-display text-center mb-8">Category-specific standards</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {standards.map((s) => (
            <div key={s.title} className="rounded-2xl bg-cream-dark/40 border border-forest/10 p-6 shadow-card">
              <h3 className="font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-forest/75 leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-4xl px-6 py-14">
        <h2 className="text-2xl font-display mb-6">What we don&apos;t claim</h2>
        <ul className="space-y-3">
          {dontClaim.map((d) => (
            <li key={d} className="flex gap-3 text-forest/80">
              <span className="text-forest/40 mt-1">—</span>
              <span>{d}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto max-w-4xl px-6 pb-20 flex flex-wrap gap-4 justify-center">
        <Link
          href="/about"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-forest text-cream font-medium hover:bg-forest-light transition-colors"
        >
          About NonTox <ArrowRightIcon className="w-4 h-4" />
        </Link>
        <a
          href="https://discord.com"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-forest/20 font-medium hover:bg-forest/5 transition-colors"
        >
          Join on Discord <ArrowRightIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}
