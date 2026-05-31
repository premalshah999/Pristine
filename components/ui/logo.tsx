import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({
  className,
  size = 36,
  priority = false,
  showWordmark = true,
  wordmarkClassName,
}: {
  className?: string;
  size?: number;
  priority?: boolean;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}) {
  return (
    <Link
      href="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="Pristine Functional Health home"
    >
      <span
        className="relative inline-flex shrink-0 overflow-visible"
        style={{ width: size, height: size }}
        aria-hidden
      >
        <Image
          src="/pristine-logo-mark.png"
          alt=""
          fill
          loading={priority ? "eager" : "lazy"}
          fetchPriority={priority ? "high" : "auto"}
          sizes={`${size}px`}
          className="object-contain"
        />
      </span>
      {showWordmark && (
        <span className={cn("font-serif text-[1.1rem] leading-tight", wordmarkClassName)}>
          Pristine{" "}
          <em className="not-italic" style={{ color: "var(--color-ink-soft)" }}>
            Functional Health
          </em>
        </span>
      )}
    </Link>
  );
}
