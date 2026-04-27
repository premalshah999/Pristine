import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/services";

export function ServicesList() {
  return (
    <section
      id="services"
      className="py-24 md:py-36 border-t"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <Reveal>
          <p className="eyebrow mb-5">How we help</p>
          <h2 className="display max-w-[20ch]">
            Five pillars of <em className="italic-serif">whole-person</em> care.
          </h2>
          <p className="lede max-w-[58ch] mt-6">
            Testing, root-cause analysis, nutrition, coaching, and lifestyle —
            woven together because real healing isn't one thing.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20 space-y-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/services/${s.slug}`}
                className="group block card-edit p-7 md:p-10"
              >
                <div className="grid grid-cols-12 gap-y-4 gap-x-8 items-start">
                  <div className="col-span-12 md:col-span-1 font-mono text-[0.78rem] tracking-widest text-[var(--color-ink-muted)] pt-1">
                    {s.number}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <h3 className="font-serif text-[1.8rem] md:text-[2.1rem] leading-[1.05] tracking-tight group-hover:text-[var(--color-lavender-deep)] transition-colors">
                      {s.name}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-6 text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)]">
                    <p className="mb-2 text-[var(--color-ink)]">{s.tagline}</p>
                    <p>{s.summary}</p>
                  </div>
                  <div className="col-span-12 md:col-span-1 text-right">
                    <ArrowUpRight
                      size={22}
                      className="inline-block text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
