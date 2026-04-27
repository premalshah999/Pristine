import Link from "next/link";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 28,
}: {
  className?: string;
  size?: number;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-2.5", className)}
      aria-label="Pristine Functional Health home"
    >
      {/* P + leaf mark */}
      <span className="inline-flex shrink-0" style={{ color: "var(--color-forest)" }}>
        <svg viewBox="0 0 48 48" width={size} height={size} aria-hidden fill="none">
          {/* Circular arc */}
          <path
            d="M 24 4 A 20 20 0 1 1 43 30"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            fill="none"
            opacity="0.55"
          />
          {/* Serif P stem */}
          <path
            d="M 16 38 L 16 10"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
          />
          {/* P bowl */}
          <path
            d="M 16 10 Q 34 10 34 19 Q 34 28 16 28"
            stroke="currentColor"
            strokeWidth="2.8"
            strokeLinecap="round"
            fill="none"
          />
          {/* Leaf 1 */}
          <path
            d="M 16 22 Q 10 16 14 10 Q 16 16 16 22Z"
            fill="currentColor"
            opacity="0.75"
          />
          {/* Leaf 2 */}
          <path
            d="M 16 28 Q 10 32 12 40 Q 16 34 16 28Z"
            fill="currentColor"
            opacity="0.60"
          />
          {/* Decorative dots */}
          <circle cx="39" cy="23" r="1.4" fill="currentColor" opacity="0.4" />
          <circle cx="43" cy="27" r="1.1" fill="currentColor" opacity="0.3" />
          <circle cx="44" cy="32" r="0.8" fill="currentColor" opacity="0.2" />
        </svg>
      </span>
      <span className="font-serif text-[1.05rem] tracking-tight leading-tight">
        Pristine{" "}
        <em className="not-italic" style={{ color: "var(--color-ink-soft)" }}>
          Functional Health
        </em>
      </span>
    </Link>
  );
}
