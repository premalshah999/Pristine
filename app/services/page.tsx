import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/services";
import { CtaBand } from "@/components/sections/cta-band";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata({
  title: "Services",
  description:
    "Five pillars of root-cause functional medicine: advanced testing, root-cause analysis, nutrition counseling, personal coaching, and lifestyle optimization.",
  path: "/services",
  keywords: ["functional medicine services", "root cause analysis", "functional nutrition counseling"],
});

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
        <div
          className="mx-auto w-full max-w-[var(--container-page)] px-6 divide-y border-y"
          style={{ borderColor: "var(--color-line)" }}
        >
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60}>
              <Link
                href={`/services/${s.slug}`}
                className="group block py-7 md:py-10 transition-colors hover:bg-[var(--color-paper)]"
              >
                <div className="grid grid-cols-12 gap-y-4 gap-x-0 md:gap-x-8 items-start">
                  <div className="col-span-12 md:col-span-1 font-mono text-[0.78rem] tracking-widest text-[var(--color-ink-muted)] pt-1">
                    {s.number}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <h3 className="font-serif text-[1.8rem] md:text-[2.1rem] leading-[1.05] group-hover:text-[var(--color-forest)] transition-colors">
                      {s.name}
                    </h3>
                  </div>
                  <div className="col-span-12 md:col-span-6 text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)]">
                    <p className="mb-2 text-[var(--color-ink)]">{s.tagline}</p>
                    <p>{s.summary}</p>
                    <div
                      className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-4"
                      aria-label={`${s.name} includes`}
                    >
                      {s.included.map((item) => (
                        <div key={item.title} className="border-t pt-3" style={{ borderColor: "var(--color-line)" }}>
                          <p className="font-serif text-[1.08rem] leading-tight text-[var(--color-ink)]">
                            {item.title}
                          </p>
                          <p className="mt-1 text-[0.86rem] leading-relaxed text-[var(--color-ink-soft)]">
                            {item.description}
                          </p>
                        </div>
                      ))}
                    </div>
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
