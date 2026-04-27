import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services, getService, getServiceSlugs } from "@/lib/services";
import { CtaBand } from "@/components/sections/cta-band";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getServiceSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const s = getService(slug);
  if (!s) return {};
  return { title: s.name, description: s.summary };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const i = services.indexOf(service);
  const prev = i > 0 ? services[i - 1] : services[services.length - 1];
  const next = i < services.length - 1 ? services[i + 1] : services[0];

  return (
    <>
      {/* HERO */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-[0.78rem] text-[var(--color-ink-muted)] font-mono tracking-widest uppercase mb-8">
              <Link href="/services" className="hover:text-[var(--color-ink)] transition-colors">
                Services
              </Link>
              <span>·</span>
              <span>{service.number}</span>
            </div>
            <h1 className="display-xl max-w-[18ch]">{service.hero.title}</h1>
            <p className="lede mt-7 max-w-[60ch]">{service.hero.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/book" className="btn btn-primary btn-glow">
                Book your free call
                <ArrowRight size={16} />
              </Link>
              <a href="#what" className="btn btn-ghost">
                What's included
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* WHAT IT IS */}
      <section
        className="py-20 md:py-28 border-t"
        style={{
          borderColor: "var(--color-line)",
          background: "var(--color-bone-2)",
        }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-12 gap-y-10 gap-x-12">
            <Reveal className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-4">— What it is</p>
              <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[20ch]">
                The <em className="italic-serif">work</em>, in plain language.
              </h2>
            </Reveal>
            <div className="col-span-12 md:col-span-8 space-y-5">
              {service.whatItIs.map((p, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <p
                    className={
                      idx === 0
                        ? "text-[1.15rem] leading-[1.6] text-[var(--color-ink)]"
                        : "text-[1rem] leading-[1.65] text-[var(--color-ink-soft)]"
                    }
                  >
                    {p}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* INCLUDED */}
      <section
        id="what"
        className="py-20 md:py-28 border-t"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-4">— What's included</p>
            <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[22ch]">
              Everything in this service, <em className="italic-serif">spelled out.</em>
            </h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4">
            {service.included.map((item, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <li
                  className="card-edit h-full p-7"
                  style={{ background: "var(--color-paper)" }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <span
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full"
                      style={{ background: "var(--color-lavender)" }}
                    >
                      <Check size={14} />
                    </span>
                    <h3 className="font-serif text-[1.25rem] leading-snug">{item.title}</h3>
                  </div>
                  <p className="text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)] pl-10">
                    {item.description}
                  </p>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* WHY */}
      <section
        className="py-20 md:py-28 border-t"
        style={{
          borderColor: "var(--color-line)",
          background: "var(--color-canvas)",
        }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-12 gap-y-10 gap-x-12">
            <Reveal className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-4">— Why it matters</p>
              <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[20ch]">
                What <em className="italic-serif">changes</em> for you.
              </h2>
            </Reveal>
            <ul className="col-span-12 md:col-span-8 space-y-3 md:space-y-4">
              {service.why.map((w, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <li
                    className="card-edit p-6 md:p-8 flex items-start gap-4"
                    style={{ background: "var(--color-paper)" }}
                  >
                    <span className="font-mono text-[0.7rem] tracking-widest text-[var(--color-ink-muted)] pt-1.5 w-8 shrink-0">
                      0{idx + 1}
                    </span>
                    <p className="font-serif text-[1.3rem] md:text-[1.5rem] leading-[1.3] tracking-tight">
                      {w}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section
        className="py-20 md:py-28 border-t"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-4">— How it works</p>
            <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[24ch]">
              The <em className="italic-serif">step-by-step</em>.
            </h2>
          </Reveal>
          <ol className="mt-12 space-y-3">
            {service.process.map((step, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <li
                  className="card-edit p-6 md:p-7 grid grid-cols-12 gap-4 items-start"
                  style={{ background: "var(--color-paper)" }}
                >
                  <span className="col-span-12 md:col-span-1 font-mono text-[0.78rem] tracking-widest text-[var(--color-lavender-deep)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <p className="col-span-12 md:col-span-11 text-[1rem] leading-relaxed">
                    {step}
                  </p>
                </li>
              </Reveal>
            ))}
          </ol>

          {service.pricing && (
            <Reveal className="mt-12 max-w-[820px]">
              <div
                className="rounded-2xl border p-7 md:p-9"
                style={{
                  background: "var(--color-bone-2)",
                  borderColor: "var(--color-line)",
                }}
              >
                <p className="eyebrow mb-3">A note on pricing</p>
                <p className="text-[var(--color-ink-soft)] leading-relaxed">
                  {service.pricing}
                </p>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      <CtaBand
        eyebrow="Ready to begin?"
        title={`Let's talk about ${service.shortName?.toLowerCase() ?? service.name.toLowerCase()}.`}
        subtitle="A free 20-minute call. No commitment. We'll talk through your goals and decide together which services would actually move the needle for you."
      />

      {/* Prev / Next */}
      <section
        className="py-12 border-t"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-2 gap-6">
            <Link
              href={`/services/${prev.slug}`}
              className="group flex flex-col items-start gap-1 text-left"
            >
              <span className="eyebrow">← Previous service</span>
              <span className="font-serif text-[1.3rem] md:text-[1.6rem] leading-tight group-hover:text-[var(--color-lavender-deep)] transition-colors">
                {prev.name}
              </span>
            </Link>
            <Link
              href={`/services/${next.slug}`}
              className="group flex flex-col items-end gap-1 text-right"
            >
              <span className="eyebrow">Next service →</span>
              <span className="font-serif text-[1.3rem] md:text-[1.6rem] leading-tight group-hover:text-[var(--color-lavender-deep)] transition-colors">
                {next.name}
              </span>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-[0.92rem] underline-offset-4 underline decoration-[var(--color-line-strong)] hover:decoration-[var(--color-ink)]"
            >
              Browse all services
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
