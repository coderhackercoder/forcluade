import { ArrowRightIcon } from "./icons";

export default function MissionSection() {
  return (
    <section className="relative bg-forest text-cream overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-6 py-24 text-center">
        <h2 className="font-display text-3xl md:text-[2.6rem] leading-[1.1] tracking-tight mb-9">
          We built the thing we wished existed.
        </h2>
        <p className="text-cream/85 leading-relaxed mb-4 font-light">
          Most products marketed as clean are not. Same base formulas, one swapped ingredient, a
          leaf on the label. We fell for it too.
        </p>
        <p className="text-cream/85 leading-relaxed mb-14 font-light">
          NonTox exists because consumers deserve a resource that is genuinely rigorous, genuinely
          independent, and genuinely easy to use.
        </p>

        <div className="rounded-[1.6rem] border border-cream/20 bg-cream/[0.06] p-8 flex flex-col sm:flex-row items-center justify-between gap-5 shadow-card">
          <p className="text-left text-cream/90">
            Join our community — ask questions, share findings, help shape our standard.
          </p>
          <a
            href="https://discord.com"
            className="inline-flex items-center gap-2 whitespace-nowrap px-5 py-2.5 rounded-2xl border border-cream text-cream font-medium hover:bg-cream hover:text-forest transition-colors"
          >
            Join on Discord <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
