import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { conditions, conditionsByCategory } from "@/lib/conditions";

export function ConditionsList() {
  const categories = (
    Object.keys(conditionsByCategory) as Array<keyof typeof conditionsByCategory>
  ).filter((c) => conditionsByCategory[c].length);

  return (
    <section
      id="conditions"
      className="py-24 md:py-36 border-t"
      style={{ borderColor: "var(--color-line)", background: "var(--color-canvas)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <div className="grid grid-cols-12 gap-y-10 gap-x-10 mb-16 md:mb-20">
          <Reveal className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-5">14 conditions, mapped at the root</p>
            <h2 className="display max-w-[16ch]">
              Conditions we help <em className="italic-serif">untangle</em>.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-6 md:pt-2" delay={120}>
            <p className="lede max-w-[52ch]">
              Every condition below has a story underneath the symptoms — a
              story conventional medicine almost never has time to read.
              We test, we listen, we trace it back. Click any condition to
              read our full clinical approach.
            </p>
            <Link
              href="/conditions"
              className="inline-flex items-center gap-1.5 mt-4 text-[0.92rem] underline-offset-4 underline decoration-[var(--color-line-strong)] hover:decoration-[var(--color-ink)]"
            >
              View all conditions
              <ArrowUpRight size={14} />
            </Link>
          </Reveal>
        </div>

        <div className="space-y-12 md:space-y-16">
          {categories.map((cat, ci) => (
            <Reveal key={cat} delay={ci * 60}>
              <div
                className="grid grid-cols-12 gap-y-6 gap-x-10 pb-8 border-b"
                style={{ borderColor: "var(--color-line)" }}
              >
                <div className="col-span-12 md:col-span-3">
                  <p className="eyebrow mb-2">— {cat}</p>
                </div>
                <ul className="col-span-12 md:col-span-9 divide-y" style={{ borderColor: "var(--color-line)" }}>
                  {conditionsByCategory[cat].map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/conditions/${c.slug}`}
                        className="group grid grid-cols-12 items-baseline gap-3 py-5 transition-colors"
                      >
                        <span className="col-span-1 font-mono text-[0.7rem] tracking-widest text-[var(--color-ink-muted)]">
                          {String(conditions.indexOf(c) + 1).padStart(2, "0")}
                        </span>
                        <span className="col-span-11 md:col-span-4">
                          <span className="font-serif text-[1.6rem] md:text-[1.85rem] leading-tight tracking-tight group-hover:text-[var(--color-lavender-deep)] transition-colors">
                            {c.name}
                          </span>
                        </span>
                        <span className="col-span-12 md:col-span-6 text-[0.95rem] text-[var(--color-ink-soft)] leading-snug">
                          {c.tagline}
                        </span>
                        <span className="col-span-12 md:col-span-1 text-right">
                          <ArrowUpRight
                            size={18}
                            className="inline-block text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                          />
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 text-center">
          <p className="text-[var(--color-ink-soft)] mb-4">
            Don't see yours? We work with the whole story — not the label.
          </p>
          <Link href="/book" className="btn btn-primary btn-glow">
            Book your free call
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
