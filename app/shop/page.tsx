import Link from "next/link";
import { ArrowRight, BookOpen, FlaskConical, ShoppingBag } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import { absoluteUrl, pageMetadata, siteName } from "@/lib/seo";

const shopItems = [
  {
    icon: ShoppingBag,
    title: "Premium quality supplements",
    copy:
      "Thoughtfully selected professional-grade supplement options that may support a personalized wellness plan when appropriate.",
  },
  {
    icon: FlaskConical,
    title: "Food sensitivity kit",
    copy:
      "At-home food sensitivity testing support for patients whose history suggests dietary triggers may be worth exploring.",
  },
  {
    icon: BookOpen,
    title: "Premium courses",
    copy:
      "Practical courses built around the daily foundations we teach: blood sugar, gut support, metabolic habits, nervous-system rhythm, and sustainable food skills.",
  },
];

const shopDescription =
  "Pristine Functional Health's curated shop is coming soon with premium quality supplements, food sensitivity kits, and practical premium courses.";

export const metadata = pageMetadata({
  title: "Shop Coming Soon",
  description: shopDescription,
  path: "/shop",
  keywords: [
    "functional health supplements",
    "food sensitivity kit",
    "functional nutrition courses",
    "Pristine Functional Health shop",
  ],
});

export default function ShopPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Shop Coming Soon",
    description: shopDescription,
    url: absoluteUrl("/shop"),
    isPartOf: {
      "@type": "WebSite",
      name: siteName,
      url: absoluteUrl("/"),
    },
  };

  return (
    <>
      <JsonLd data={jsonLd} />

      <section className="pt-20 md:pt-28 pb-16">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal className="max-w-[940px]">
            <p className="eyebrow mb-5">Shop</p>
            <h1 className="display-xl max-w-[16ch]">
              Coming <em className="italic-serif">soon.</em>
            </h1>
            <p className="lede mt-7 max-w-[62ch]">
              A carefully curated Pristine Functional Health shop is on the way
              for patients who want carefully selected tools between appointments:
              premium quality supplements, food sensitivity kits, and premium
              courses that support practical, sustainable wellness routines.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/book-appointment" className="btn btn-primary">
                Book a free call
                <ArrowRight size={16} />
              </Link>
              <Link href="/services/advanced-functional-testing" className="btn btn-ghost">
                Explore testing
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="py-16 md:py-24 border-t"
        style={{ borderColor: "var(--color-line)", background: "var(--color-bone-2)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {shopItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 70}>
                  <article
                    className="h-full border bg-[var(--color-paper)] p-6"
                    style={{ borderColor: "var(--color-line-strong)" }}
                  >
                    <span
                      className="mb-7 inline-flex h-11 w-11 items-center justify-center border"
                      style={{
                        borderColor: "var(--color-line-strong)",
                        color: "var(--color-forest)",
                      }}
                    >
                      <Icon size={18} />
                    </span>
                    <h2 className="font-serif text-[1.55rem] leading-tight">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-[0.96rem] leading-relaxed text-[var(--color-ink-soft)]">
                      {item.copy}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBand
        eyebrow="Need support now?"
        title="The shop is coming. Personalized care is already open."
        subtitle="Book a free consultation if you want help choosing whether testing, nutrition, coaching, or shop resources fit your needs before the shop launches."
        cta="Book your free call"
        href="/book-appointment"
      />
    </>
  );
}
