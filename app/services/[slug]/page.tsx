import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  services,
  getPublicServiceDetails,
  getService,
  getServiceSlugs,
} from "@/lib/services";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import {
  absoluteUrl,
  adultWellnessAudienceJsonLd,
  pageMetadata,
  serviceAreaSchema,
  serviceKeywords,
  siteName,
  siteUrl,
  virtualServiceChannelJsonLd,
} from "@/lib/seo";

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
  return pageMetadata({
    title: `${s.name} | Online functional health service`,
    description: `Online ${s.name.toLowerCase()} support through virtual functional health consultations with ${siteName}.`,
    path: `/services/${s.slug}`,
    keywords: serviceKeywords(s.name),
  });
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const publicDetails = getPublicServiceDetails(service.slug);
  const i = services.indexOf(service);
  const prev = i > 0 ? services[i - 1] : services[services.length - 1];
  const next = i < services.length - 1 ? services[i + 1] : services[0];
  const pageUrl = absoluteUrl(`/services/${service.slug}`);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      "@id": `${pageUrl}#service`,
      name: service.name,
      alternateName: `${service.name} online functional health service`,
      description: service.summary,
      url: pageUrl,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: serviceAreaSchema,
      audience: adultWellnessAudienceJsonLd,
      availableChannel: virtualServiceChannelJsonLd,
      serviceType: ["Online functional health consultation", service.name],
      category: "Functional health and functional nutrition",
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: absoluteUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Services",
          item: absoluteUrl("/services"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.name,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

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
            <p className="mt-5 max-w-[72ch] text-[0.88rem] leading-relaxed text-[var(--color-ink-muted)]">
              Service details describe tools and support we may use when they
              fit your history, goals, labs, safety needs, and budget. They are
              not a promise that every test, supplement, protocol, or resource
              is recommended for every person.
            </p>
            <div
              className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-5 max-w-[980px] border-y py-6"
              style={{ borderColor: "var(--color-line)" }}
            >
              {publicDetails.focusAreas.slice(0, 3).map((item, idx) => (
                <div key={item.title}>
                  <p className="font-mono text-[0.72rem] text-[var(--color-ink-muted)] mb-2">
                    {String(idx + 1).padStart(2, "0")}
                  </p>
                  <p className="font-serif text-[1.2rem] leading-tight text-[var(--color-ink)]">
                    {item.title}
                  </p>
                  <p className="mt-2 text-[0.9rem] leading-relaxed text-[var(--color-ink-soft)]">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/book-appointment" className="btn btn-primary">
                Book your free call
                <ArrowRight size={16} />
              </Link>
              <a href="#what" className="btn btn-ghost">
                What may be included
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
          <div className="grid grid-cols-12 gap-y-10 gap-x-0 md:gap-x-12">
            <Reveal className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-4">— What it is</p>
              <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[20ch]">
                The <em className="italic-serif">work</em>, in plain language.
              </h2>
            </Reveal>
            <div className="col-span-12 md:col-span-8 space-y-5">
              {publicDetails.overview.map((p, idx) => (
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
            <p className="eyebrow mb-4">— What may be included</p>
            <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[22ch]">
              The broad shape of the work, <em className="italic-serif">without the private playbook.</em>
            </h2>
            <p className="mt-5 max-w-[70ch] text-[0.92rem] leading-relaxed text-[var(--color-ink-soft)]">
              Final recommendations are personalized. Some clients need deeper
              assessment; others need a simpler plan, different pacing, or
              coordination with their licensed medical provider. Specific
              tests, supplement choices, timing, brands, doses, and protocol
              details are discussed privately only when they are relevant to
              your case.
            </p>
          </Reveal>
          <ul
            className="mt-12 divide-y border-y"
            style={{ borderColor: "var(--color-line)" }}
          >
            {publicDetails.focusAreas.map((item, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <li
                  className="py-7 md:py-8 grid grid-cols-12 gap-y-3 gap-x-0 md:gap-x-8"
                >
                  <span className="col-span-12 md:col-span-1 font-mono text-[0.72rem] text-[var(--color-ink-muted)]">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                  <h3 className="col-span-12 md:col-span-4 font-serif text-[1.35rem] md:text-[1.6rem] leading-snug">
                    {item.title}
                  </h3>
                  <p className="col-span-12 md:col-span-7 text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)]">
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
          <div className="grid grid-cols-12 gap-y-10 gap-x-0 md:gap-x-12">
            <Reveal className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-4">— Why it matters</p>
              <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[20ch]">
                What <em className="italic-serif">changes</em> for you.
              </h2>
            </Reveal>
            <ul
              className="col-span-12 md:col-span-8 divide-y border-y"
              style={{ borderColor: "var(--color-line)" }}
            >
              {publicDetails.why.map((w, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <li
                    className="py-7 md:py-8 flex items-start gap-4"
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
          <ol
            className="mt-12 divide-y border-y"
            style={{ borderColor: "var(--color-line)" }}
          >
            {publicDetails.process.map((step, idx) => (
              <Reveal key={idx} delay={idx * 60}>
                <li
                  className="py-6 md:py-7 grid grid-cols-12 gap-4 items-start"
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

          {publicDetails.note && (
            <Reveal className="mt-12 max-w-[820px]">
              <div className="border-l pl-6 md:pl-8" style={{ borderColor: "var(--color-line-strong)" }}>
                <p className="eyebrow mb-3">A note on personalization</p>
                <p className="text-[var(--color-ink-soft)] leading-relaxed">
                  {publicDetails.note}
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
