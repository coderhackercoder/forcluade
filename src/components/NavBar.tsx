import Link from "next/link";
import { NonToxMark, SearchIcon, HeartIcon } from "./icons";

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-forest/15 bg-nav/90 backdrop-blur-md shadow-[0_1px_0_rgba(23,31,22,0.05)]">
      <div className="mx-auto max-w-7xl px-6 h-[4.5rem] flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <NonToxMark className="h-9 w-auto text-forest" />
          <span className="font-display text-[26px] tracking-[-0.02em]">NonTox</span>
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-[14px] font-medium tracking-wide uppercase">
          <Link href="/category/skincare-personal-care" className="hover:text-forest-light transition-colors">
            Browse
          </Link>
          <Link href="/our-standard" className="hover:text-forest-light transition-colors">
            Our Standard
          </Link>
          <Link href="/about" className="hover:text-forest-light transition-colors">
            About
          </Link>
        </nav>

        <div className="flex items-center gap-4 shrink-0">
          <Link
            href="/search"
            aria-label="Search"
            className="p-2 rounded-full hover:bg-forest/8 transition-colors"
          >
            <SearchIcon className="w-5 h-5" />
          </Link>
          <Link
            href="/wishlist"
            aria-label="Wishlist"
            className="p-2 rounded-full hover:bg-forest/8 transition-colors"
          >
            <HeartIcon className="w-5 h-5" />
          </Link>
          <Link
            href="/login"
            className="hidden sm:inline-block px-4 py-2 rounded-2xl border border-forest/25 text-sm font-medium hover:bg-forest/8 transition-colors"
          >
            Log in
          </Link>
          <Link
            href="/signup"
            className="px-5 py-2 rounded-2xl bg-forest text-cream text-sm font-medium hover:bg-forest-light transition-colors"
          >
            Sign up
          </Link>
        </div>
      </div>
    </header>
  );
}
