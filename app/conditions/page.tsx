import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { conditions, conditionsByCategory } from "@/lib/conditions";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = {
  title: "Conditions we treat",
  description:
    "14 categories of root-cause functional medicine care — explored in depth, from thyroid and gut to autoimmunity and metabolic health.",
};

export default function ConditionsIndex() {
  const categories = (
    Object.keys(conditionsByCategory) as Array<keyof typeof conditionsByCategory>
  ).filter((c) => conditionsByCategory[c].length);

  return (
    <>
      <section className="pt-20 md:pt-28 pb-16">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-5">— Conditions</p>
            <h1 className="display-xl max-w-[16ch]">
              Where most people <em className="italic-serif">finally</em> get answers.
            </h1>
            <p className="lede mt-8 max-w-[60ch]">
              Each of the 14 categories below has a story underneath the
              symptoms. Click any to read our full clinical approach: what's
              actually going on, what conventional medicine misses, what testing
              we run, how we treat it, and what to expect.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-20">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="space-y-12">
            {categories.map((cat, ci) => (
              <Reveal key={cat} delay={ci * 60}>
                <div
                  className="grid grid-cols-12 gap-y-6 gap-x-10 pb-8 border-b"
                  style={{ borderColor: "var(--color-line)" }}
                >
                  <div className="col-span-12 md:col-span-3">
                    <p className="eyebrow mb-2">— {cat}</p>
                    <p className="text-[0.92rem] text-[var(--color-ink-soft)] max-w-[28ch]">
                      {conditionsByCategory[cat].length}{" "}
                      {conditionsByCategory[cat].length === 1 ? "condition" : "conditions"}
                    </p>
                  </div>
                  <ul
                    className="col-span-12 md:col-span-9 divide-y"
                    style={{ borderColor: "var(--color-line)" }}
                  >
                    {conditionsByCategory[cat].map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/conditions/${c.slug}`}
                          className="group grid grid-cols-12 items-baseline gap-3 py-6"
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
        </div>
      </section>

      <CtaBand
        eyebrow="If your condition isn't listed"
        title="We work with the whole story — not the label."
        subtitle="Many of the patients we help most have collected three or four diagnoses without ever finding the thread that connects them. That's our work. Let's talk."
        cta="Book your free call"
      />
    </>
  );
}
