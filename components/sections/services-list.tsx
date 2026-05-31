import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/lib/services";

export function ServicesList() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 border-t"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <div className="grid grid-cols-12 gap-y-8 gap-x-0 md:gap-x-10 mb-12">
          <Reveal className="col-span-12 md:col-span-5">
            <p className="eyebrow mb-5">How we help</p>
            <h2 className="display max-w-[15ch]">
              Five pillars, <em className="italic-serif">one</em> coherent plan.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-7 md:pt-2" delay={100}>
            <p className="lede max-w-[58ch]">
              The work is connected. Testing informs the map, nutrition and
              lifestyle change the terrain, and coaching keeps the plan usable.
            </p>
          </Reveal>
        </div>

        <Reveal>
          <div
            className="hidden lg:block border"
            style={{ borderColor: "var(--color-line-strong)" }}
          >
            <div
              className="grid grid-cols-[72px_minmax(280px,0.9fr)_minmax(480px,1.2fr)_48px] border-b text-[0.72rem] uppercase text-[var(--color-ink-muted)]"
              style={{ borderColor: "var(--color-line-strong)" }}
            >
              <span className="border-r px-4 py-3" style={{ borderColor: "var(--color-line-strong)" }}>No.</span>
              <span className="border-r px-5 py-3" style={{ borderColor: "var(--color-line-strong)" }}>Service</span>
              <span className="border-r px-5 py-3" style={{ borderColor: "var(--color-line-strong)" }}>Clinical work inside it</span>
              <span className="px-4 py-3" />
            </div>

            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group grid grid-cols-[72px_minmax(280px,0.9fr)_minmax(480px,1.2fr)_48px] border-b last:border-b-0 transition-colors hover:bg-[var(--color-paper)]"
                style={{ borderColor: "var(--color-line-strong)" }}
              >
                <span className="border-r px-4 py-7 font-mono text-[0.78rem] text-[var(--color-ink-muted)]" style={{ borderColor: "var(--color-line-strong)" }}>
                  {service.number}
                </span>
                <span className="border-r px-5 py-7" style={{ borderColor: "var(--color-line-strong)" }}>
                  <span className="block font-serif text-[1.55rem] leading-[1.05] group-hover:text-[var(--color-forest)] transition-colors">
                    {service.name}
                  </span>
                  <span className="block mt-2 text-[0.9rem] leading-relaxed text-[var(--color-ink-soft)]">
                    {service.tagline}
                  </span>
                  <span className="block mt-4 text-[0.86rem] leading-relaxed text-[var(--color-ink-muted)]">
                    {service.why[0]}
                  </span>
                </span>
                <span className="grid grid-cols-2 xl:grid-cols-3 border-r px-5 py-7" style={{ borderColor: "var(--color-line-strong)" }}>
                  {service.included.slice(0, 3).map((item) => (
                    <span
                      key={item.title}
                      className="border-b px-3 py-3 text-[0.88rem] leading-snug text-[var(--color-ink-soft)] xl:border-r xl:[&:nth-child(3n)]:border-r-0"
                      style={{ borderColor: "var(--color-line)" }}
                    >
                      {item.title}
                    </span>
                  ))}
                  {service.included.length > 3 ? (
                    <span
                      className="border-b px-3 py-3 text-[0.88rem] leading-snug text-[var(--color-ink-muted)] xl:border-r xl:[&:nth-child(3n)]:border-r-0"
                      style={{ borderColor: "var(--color-line)" }}
                    >
                      + {service.included.length - 3} more
                    </span>
                  ) : null}
                </span>
                <span className="px-4 py-7 text-right">
                  <ArrowUpRight
                    size={18}
                    className="inline-block text-[var(--color-ink-muted)] group-hover:text-[var(--color-ink)] transition-all group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </span>
              </Link>
            ))}
          </div>
        </Reveal>

        <div className="lg:hidden divide-y border-y" style={{ borderColor: "var(--color-line)" }}>
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 50}>
              <Link href={`/services/${service.slug}`} className="block py-6">
                <p className="font-mono text-[0.72rem] text-[var(--color-ink-muted)] mb-3">
                  {service.number}
                </p>
                <h3 className="font-serif text-[1.65rem] leading-tight">
                  {service.name}
                </h3>
                <p className="mt-3 text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {service.summary}
                </p>
                <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.included.slice(0, 4).map((item) => (
                    <span
                      key={item.title}
                      className="border-t pt-2 text-[0.82rem] leading-snug text-[var(--color-ink-soft)]"
                      style={{ borderColor: "var(--color-line)" }}
                    >
                      {item.title}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
