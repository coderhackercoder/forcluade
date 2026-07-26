import Link from "next/link";
import { ArrowRightIcon } from "@/components/icons";

export default function AboutPage() {
  return (
    <div>
      <div className="mx-auto max-w-3xl px-6 pt-16 pb-14 text-center">
        <h1 className="font-display text-4xl md:text-5xl leading-tight">
          We started NonTox because we got tired of not knowing.
        </h1>
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-14">
        <div className="rounded-3xl bg-cream-dark/40 border border-forest/10 p-8 flex flex-col sm:flex-row gap-6 items-center shadow-card">
          <div className="w-24 h-24 rounded-full bg-sage/60 shrink-0" />
          <div>
            <h2 className="font-semibold text-lg mb-1">Founded by a small team of label-readers</h2>
            <p className="text-sm text-forest/70 leading-relaxed">
              NonTox started as a shared spreadsheet between three friends who kept texting each
              other ingredient lists at 11pm. It grew into a standard, then a site, then this.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-3xl px-6 pb-16 space-y-5 text-forest/80 leading-relaxed">
        <h2 className="text-2xl font-display mb-2">Why we started</h2>
        <p>
          Every one of us had a moment of finding out a product we&apos;d used for years — trusted,
          recommended, marketed as gentle — had an ingredient we wouldn&apos;t have chosen if we&apos;d
          known. Not because it was hidden exactly, but because reading and understanding an
          ingredient panel takes a chemistry background none of us had.
        </p>
        <p>
          We looked for a resource that would just tell us plainly: does this meet a real
          standard, or not? Most of what existed was either sponsored by the brands it reviewed,
          or so vague it was useless. So we started keeping our own list.
        </p>
        <p>
          NonTox is that list, formalized. We don&apos;t sell anything. We don&apos;t take
          placement fees. Every product either meets the standard or it doesn&apos;t get listed —
          and we&apos;d rather have a shorter, honest list than a long one we can&apos;t stand
          behind.
        </p>
      </div>

      <div className="bg-forest text-cream">
        <div className="mx-auto max-w-3xl px-6 py-16 text-center">
          <h2 className="font-display text-2xl md:text-3xl mb-8">
            Curious how we actually evaluate a product?
          </h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/our-standard"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-cream text-forest font-medium hover:bg-cream-dark transition-colors"
            >
              Read our standard <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <a
              href="https://discord.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-cream text-cream font-medium hover:bg-cream hover:text-forest transition-colors"
            >
              Join on Discord <ArrowRightIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
