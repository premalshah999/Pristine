import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/services";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = {
  title: "Services",
  description:
    "Five pillars of root-cause functional medicine: advanced testing, root-cause analysis, nutrition counseling, personal coaching, and lifestyle optimization.",
};

export default function ServicesIndex() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-16">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-5">— Services</p>
            <h1 className="display-xl max-w-[20ch]">
              Five pillars of <em className="italic-serif">whole-person</em> care.
            </h1>
            <p className="lede mt-8 max-w-[60ch]">
              Real healing isn't one thing. We weave together the work of testing,
              interpretation, nutrition, behavior change, and the lifestyle
              foundations that make all of it stick.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-24">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6 space-y-3">
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
      </section>

      <CtaBand
        eyebrow="Ready to begin?"
        title="A free 20-minute call is the first step."
        subtitle="On the call, we'll talk through what's been going on, what's been tried, and which of these services would actually be useful for you."
      />
    </>
  );
}
