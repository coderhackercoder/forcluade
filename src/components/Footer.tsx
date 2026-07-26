import Link from "next/link";
import { LeafIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <LeafIcon className="w-6 h-6" />
            <span className="font-display text-2xl tracking-tight">NonTox</span>
          </div>
          <p className="text-sm text-cream/70 max-w-xs">
            We evaluate products. We don&apos;t sell them.
          </p>
          <div className="flex items-center gap-3 mt-5">
            {["Discord", "Instagram", "X"].map((s) => (
              <span
                key={s}
                className="w-9 h-9 rounded-full border border-cream/25 flex items-center justify-center text-xs text-cream/70"
              >
                {s[0]}
              </span>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-cream/60 mb-4">
            Explore
          </h4>
          <ul className="space-y-3 text-sm text-cream/85">
            <li><Link href="/category/skincare-personal-care" className="hover:text-cream">Browse products</Link></li>
            <li><Link href="/our-standard" className="hover:text-cream">Our standard</Link></li>
            <li><Link href="/about" className="hover:text-cream">About us</Link></li>
            <li><Link href="/wishlist" className="hover:text-cream">Wishlist</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-cream/60 mb-4">
            For brands
          </h4>
          <ul className="space-y-3 text-sm text-cream/85">
            <li><Link href="/our-standard" className="hover:text-cream">Get listed</Link></li>
            <li><Link href="/our-standard" className="hover:text-cream">Verification process</Link></li>
            <li><Link href="/about" className="hover:text-cream">Contact us</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold tracking-wide uppercase text-cream/60 mb-4">
            Stay updated
          </h4>
          <p className="text-sm text-cream/70 mb-3">
            New listings and standard updates, no spam.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="min-w-0 flex-1 rounded-full px-4 py-2 text-sm text-forest bg-cream placeholder:text-forest/40 outline-none"
            />
            <button
              type="submit"
              className="px-4 py-2 rounded-2xl bg-cream text-forest text-sm font-medium hover:bg-cream-dark transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>© 2025 NonTox. We evaluate products. We don&apos;t sell them.</p>
          <div className="flex items-center gap-5">
            <Link href="/privacy" className="hover:text-cream">Privacy policy</Link>
            <Link href="/terms" className="hover:text-cream">Terms</Link>
            <Link href="/disclaimer" className="hover:text-cream">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
