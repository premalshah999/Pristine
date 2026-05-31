import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { conditions, getCondition, getConditionSlugs } from "@/lib/conditions";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, pageMetadata, siteName } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getConditionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const c = getCondition(slug);
  if (!c) return {};

  return pageMetadata({
    title: c.name,
    description: c.summary,
    path: `/conditions/${c.slug}`,
    keywords: [c.name, c.category, "functional medicine", "root cause wellness"],
  });
}

export default async function ConditionPage({ params }: PageProps) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) notFound();

  const i = conditions.indexOf(condition);
  const prev = i > 0 ? conditions[i - 1] : conditions[conditions.length - 1];
  const next = i < conditions.length - 1 ? conditions[i + 1] : conditions[0];
  const pageUrl = absoluteUrl(`/conditions/${condition.slug}`);
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": pageUrl,
      url: pageUrl,
      name: `${condition.name} | ${siteName}`,
      description: condition.summary,
      isPartOf: {
        "@type": "WebSite",
        name: siteName,
        url: absoluteUrl("/"),
      },
      about: {
        "@type": "Thing",
        name: condition.name,
      },
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
          name: "Conditions",
          item: absoluteUrl("/conditions"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: condition.name,
          item: pageUrl,
        },
      ],
    },
    ...(condition.faqs?.length
      ? [
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: condition.faqs.map((faq) => ({
              "@type": "Question",
              name: faq.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: faq.a,
              },
            })),
          },
        ]
      : []),
  ];

  return (
    <>
      <JsonLd data={jsonLd} />

      {/* HERO */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <div className="flex flex-wrap items-center gap-3 text-[0.78rem] text-[var(--color-ink-muted)] font-mono tracking-widest uppercase mb-8">
              <Link href="/conditions" className="hover:text-[var(--color-ink)] transition-colors">
                Conditions
              </Link>
              <span>·</span>
              <span>{condition.category}</span>
            </div>
            <p className="eyebrow mb-5">{condition.hero.eyebrow}</p>
            <h1 className="display-xl max-w-[18ch]">{condition.hero.title}</h1>
            <p className="lede mt-7 max-w-[60ch]">{condition.hero.subtitle}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/book-appointment" className="btn btn-primary">
                Book your free call
                <ArrowRight size={16} />
              </Link>
              <a href="#approach" className="btn btn-ghost">
                See our approach
              </a>
              <Link href="/conditions#testing" className="btn btn-ghost">
                Testing overview
              </Link>
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
              <p className="eyebrow mb-4">— What it actually is</p>
              <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[18ch]">
                The story <em className="italic-serif">underneath</em> the symptoms.
              </h2>
            </Reveal>
            <div className="col-span-12 md:col-span-8 space-y-5">
              {condition.whatItIs.map((para, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <p
                    className={
                      idx === 0
                        ? "text-[1.15rem] leading-[1.6] text-[var(--color-ink)]"
                        : "text-[1rem] leading-[1.65] text-[var(--color-ink-soft)]"
                    }
                  >
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SYMPTOMS */}
      <section
        className="py-20 md:py-28 border-t"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-4">— Symptoms we hear most</p>
            <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[20ch]">
              Does any of this <em className="italic-serif">sound like you?</em>
            </h2>
          </Reveal>
          <ul className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6">
            {condition.symptoms.map((s, idx) => (
              <Reveal key={idx} delay={idx * 40}>
                <li
                  className="border-t pt-4 flex items-start gap-3 h-full"
                  style={{ borderColor: "var(--color-line)" }}
                >
                  <span
                    className="inline-flex h-5 w-5 shrink-0 items-center justify-center mt-0.5"
                    style={{ color: "var(--color-forest)" }}
                  >
                    <Check size={14} />
                  </span>
                  <span className="text-[0.96rem] leading-snug">{s}</span>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* CONVENTIONAL VS FUNCTIONAL */}
      <section
        id="approach"
        className="py-20 md:py-32 border-t"
        style={{
          borderColor: "var(--color-line)",
          background: "var(--color-canvas)",
        }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-4">— Why this is different</p>
            <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[24ch]">
              Same symptoms. <em className="italic-serif">Two completely different conversations.</em>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 gap-x-12 mt-12">
            <Reveal>
              <article
                className="border-t pt-8 h-full"
                style={{ borderColor: "var(--color-line-strong)" }}
              >
                <p className="font-mono text-[0.75rem] tracking-[0.18em] uppercase text-[var(--color-ink-muted)] mb-3">
                  The conventional path
                </p>
                <p className="font-serif text-[1.4rem] leading-snug mb-5 max-w-[26ch]">
                  Where the standard system tends to{" "}
                  <em className="italic-serif">miss it.</em>
                </p>
                <p className="text-[var(--color-ink-soft)] mb-5 leading-relaxed">
                  {condition.conventional.intro}
                </p>
                <ul className="space-y-3.5">
                  {condition.conventional.misses.map((m, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span
                        className="inline-flex h-5 w-5 shrink-0 items-center justify-center mt-0.5 text-[var(--color-ink-muted)]"
                      >
                        <X size={12} />
                      </span>
                      <span className="text-[0.95rem] leading-snug text-[var(--color-ink-soft)]">
                        {m}
                      </span>
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>

            <Reveal delay={120}>
              <article
                className="border-t pt-8 h-full"
                style={{ borderColor: "var(--color-forest)" }}
              >
                <p className="font-mono text-[0.75rem] tracking-[0.18em] uppercase text-[var(--color-lavender-deep)] mb-3">
                  Our functional approach
                </p>
                <p className="font-serif text-[1.4rem] leading-snug mb-5 max-w-[26ch]">
                  Where root-cause medicine{" "}
                  <em className="italic-serif">picks it up.</em>
                </p>
                <p className="text-[var(--color-ink-soft)] mb-5 leading-relaxed">
                  {condition.functional.intro}
                </p>

                <div>
                  <p className="eyebrow mb-3">Our protocol</p>
                  <ul className="space-y-2">
                    {condition.functional.approach.map((a, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span
                          className="inline-flex h-5 w-5 shrink-0 items-center justify-center mt-0.5"
                          style={{ color: "var(--color-forest)" }}
                        >
                          <Check size={12} />
                        </span>
                        <span className="text-[0.92rem] leading-snug">{a}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WHAT TO EXPECT */}
      <section
        className="py-20 md:py-28 border-t"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-12 gap-y-10 gap-x-0 md:gap-x-12">
            <Reveal className="col-span-12 md:col-span-4">
              <p className="eyebrow mb-4">— What to expect</p>
              <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[20ch]">
                A realistic picture, <em className="italic-serif">not a sales pitch.</em>
              </h2>
            </Reveal>
            <div className="col-span-12 md:col-span-8 space-y-5">
              {condition.whatToExpect.map((para, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <p className="text-[1.05rem] leading-[1.65] text-[var(--color-ink-soft)]">
                    {para}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      {condition.testimonial && (
        <section
          className="py-20 md:py-28 border-t"
          style={{
            borderColor: "var(--color-line)",
            background: "var(--color-bone-2)",
          }}
        >
          <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
            <Reveal>
              <figure
                className="max-w-[900px] mx-auto border-y py-10 md:py-14 text-center"
                style={{ borderColor: "var(--color-line)" }}
              >
                <p className="eyebrow mb-6">A patient story</p>
                <blockquote className="font-serif text-[1.4rem] md:text-[1.75rem] leading-[1.4] tracking-tight">
                  "{condition.testimonial.quote}"
                </blockquote>
                <figcaption className="mt-7 text-[0.92rem] text-[var(--color-ink-soft)]">
                  <strong className="text-[var(--color-ink)] font-medium">
                    {condition.testimonial.name}
                  </strong>{" "}
                  · {condition.testimonial.detail}
                </figcaption>
              </figure>
            </Reveal>
          </div>
        </section>
      )}

      {/* FAQs */}
      {condition.faqs && condition.faqs.length > 0 && (
        <section
          className="py-20 md:py-28 border-t"
          style={{ borderColor: "var(--color-line)" }}
        >
          <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
            <Reveal>
              <p className="eyebrow mb-4">— Common questions</p>
              <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[24ch]">
                Honest answers, <em className="italic-serif">no fine print.</em>
              </h2>
            </Reveal>
            <ul
              className="mt-12 max-w-[820px] mx-auto divide-y"
              style={{ borderColor: "var(--color-line)" }}
            >
              {condition.faqs.map((f, idx) => (
                <Reveal key={idx} delay={idx * 80}>
                  <li className="py-7">
                    <h3 className="font-serif text-[1.3rem] leading-snug mb-3">
                      {f.q}
                    </h3>
                    <p className="text-[var(--color-ink-soft)] leading-relaxed">
                      {f.a}
                    </p>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* CTA */}
      <CtaBand
        eyebrow="Your next step"
        title={`Ready to talk about your ${condition.shortName?.toLowerCase() ?? condition.name.toLowerCase()}?`}
        subtitle="A free 20-minute call. No commitment. We'll listen, ask the right questions, and tell you honestly whether this is a fit."
      />

      {/* Prev / Next */}
      <section
        className="py-12 border-t"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-2 gap-6">
            <Link
              href={`/conditions/${prev.slug}`}
              className="group flex flex-col items-start gap-1 text-left"
            >
              <span className="eyebrow">← Previous</span>
              <span className="font-serif text-[1.3rem] md:text-[1.6rem] leading-tight group-hover:text-[var(--color-lavender-deep)] transition-colors">
                {prev.name}
              </span>
            </Link>
            <Link
              href={`/conditions/${next.slug}`}
              className="group flex flex-col items-end gap-1 text-right"
            >
              <span className="eyebrow">Next →</span>
              <span className="font-serif text-[1.3rem] md:text-[1.6rem] leading-tight group-hover:text-[var(--color-lavender-deep)] transition-colors">
                {next.name}
              </span>
            </Link>
          </div>
          <div className="mt-8 text-center">
            <Link
              href="/conditions"
              className="inline-flex items-center gap-1.5 text-[0.92rem] underline-offset-4 underline decoration-[var(--color-line-strong)] hover:decoration-[var(--color-ink)]"
            >
              Browse all conditions
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
