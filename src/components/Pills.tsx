import { CheckIcon } from "./icons";

export function FreeFromPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-sage/70 text-forest text-xs font-medium px-2.5 py-1 border border-sage-dark/30 shadow-sm">
      <CheckIcon className="w-3 h-3" />
      {children}
    </span>
  );
}

export function ListedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-forest text-cream text-xs font-medium px-2.5 py-1 whitespace-nowrap shadow-sticker">
      <CheckIcon className="w-3 h-3" />
      NonTox listed
    </span>
  );
}

export function BlockedPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-blush/70 text-[#8b5842] text-xs font-medium px-3 py-1.5 border border-blush-dark/60 shadow-sm">
      {children}
    </span>
  );
}
