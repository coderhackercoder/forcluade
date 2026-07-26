export function LeafIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 20C4 12 9 5 20 4C19 15 12 20 4 20Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        fill="currentColor"
        fillOpacity="0.12"
      />
      <path d="M5 19C9 14 12 10 18 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

export function NonToxMark({ className = "h-8 w-auto" }: { className?: string }) {
  const vein = { stroke: "currentColor", strokeWidth: 2.4, strokeLinecap: "round" as const };
  return (
    <svg viewBox="0 12 100 84" fill="none" className={className}>
      <path
        d="M50,90 Q-15,50 22,20 Q32,60 50,90 Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <path
        d="M50,90 Q115,50 78,20 Q68,60 50,90 Z"
        stroke="currentColor"
        strokeWidth="3.2"
        strokeLinejoin="round"
      />
      <line x1="40" y1="75" x2="32" y2="75" {...vein} />
      <line x1="32" y1="60" x2="19" y2="60" {...vein} />
      <line x1="27" y1="45" x2="12" y2="45" {...vein} />
      <line x1="23" y1="30" x2="17" y2="30" {...vein} />
      <line x1="60" y1="75" x2="68" y2="75" {...vein} />
      <line x1="68" y1="60" x2="81" y2="60" {...vein} />
      <line x1="73" y1="45" x2="88" y2="45" {...vein} />
      <line x1="77" y1="30" x2="83" y2="30" {...vein} />
    </svg>
  );
}

export function SearchIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="11" cy="11" r="6.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M20 20L16 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

export function HeartIcon({ className = "w-5 h-5", filled = false }: { className?: string; filled?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 20.5C12 20.5 3.5 15.4 3.5 9.3C3.5 6.4 5.8 4.2 8.6 4.2C10.2 4.2 11.3 5 12 6C12.7 5 13.8 4.2 15.4 4.2C18.2 4.2 20.5 6.4 20.5 9.3C20.5 15.4 12 20.5 12 20.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        fill={filled ? "currentColor" : "none"}
      />
    </svg>
  );
}

export function RecycleIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 4L4.5 8.5H9M4.5 8.5L7 13M17 4L19.5 8.5H15M19.5 8.5L17 13M9 20L12 15.5H7.5M12 15.5L14.5 20"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function CheckIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 12.5L9 17.5L20 6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function XIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M5 5L19 19M19 5L5 19" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}

export function ArrowRightIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 12H20M20 12L14 6M20 12L14 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function MenuIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 7H20M4 12H20M4 17H20" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function StampBadge({ className = "w-24 h-24" }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 120" className={className}>
      <circle cx="60" cy="60" r="56" fill="none" stroke="currentColor" strokeWidth="1.4" strokeDasharray="2 3" />
      <circle cx="60" cy="60" r="46" fill="none" stroke="currentColor" strokeWidth="1" />
      <path
        d="M60 30C50 30 42 38 42 48C42 58 60 78 60 78C60 78 78 58 78 48C78 38 70 30 60 30Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.2"
      />
      <text
        x="60"
        y="20"
        textAnchor="middle"
        fontSize="9"
        fill="currentColor"
        letterSpacing="2"
        fontFamily="var(--font-body)"
      >
        NONTOX
      </text>
      <text
        x="60"
        y="103"
        textAnchor="middle"
        fontSize="6.5"
        fill="currentColor"
        letterSpacing="1.5"
        fontFamily="var(--font-body)"
      >
        BUILT ON TRANSPARENCY
      </text>
    </svg>
  );
}

export function BranchDecoration({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 200" className={className} fill="none">
      <path d="M50 200V60" stroke="currentColor" strokeWidth="1.4" />
      <path d="M50 90C35 80 25 65 22 45" stroke="currentColor" strokeWidth="1.2" />
      <path d="M50 120C65 108 73 92 76 74" stroke="currentColor" strokeWidth="1.2" />
      <path d="M50 150C38 142 30 130 27 116" stroke="currentColor" strokeWidth="1.2" />
      <ellipse cx="22" cy="42" rx="9" ry="5" fill="currentColor" fillOpacity="0.7" transform="rotate(-30 22 42)" />
      <ellipse cx="76" cy="71" rx="9" ry="5" fill="currentColor" fillOpacity="0.7" transform="rotate(25 76 71)" />
      <ellipse cx="27" cy="113" rx="8" ry="4.5" fill="currentColor" fillOpacity="0.7" transform="rotate(-25 27 113)" />
    </svg>
  );
}
