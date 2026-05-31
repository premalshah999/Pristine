import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";

const areas = [
  "Blood sugar and metabolic health",
  "Energy and fatigue concerns",
  "Digestive wellness",
  "Weight management challenges",
  "Nutritional status",
  "Inflammation markers",
  "Lifestyle and dietary patterns",
  "Food sensitivities",
];

const testingCards = [
  {
    title: "Lab Review & Health Assessment",
    copy:
      "If you have recent lab results from your healthcare provider, we can review them from a functional wellness perspective to help identify patterns and opportunities for lifestyle improvement. We explain what your results may mean in the context of your nutrition, habits, and wellness goals.",
  },
  {
    title: "Personalized Testing Recommendations",
    copy:
      "Not everyone needs extensive testing. Based on your health history, symptoms, and goals, we may recommend additional wellness-focused testing when appropriate. Our goal is to support informed decisions while avoiding unnecessary testing.",
  },
  {
    title: "Food Sensitivity Testing",
    copy:
      "Food sensitivities may contribute to digestive discomfort, fatigue, skin concerns, headaches, and other chronic symptoms. When appropriate, we may recommend testing to identify potential dietary triggers and guide a personalized nutrition plan.",
  },
];

export function TestingOverview() {
  return (
    <section
      id="testing"
      className="py-20 md:py-28 border-t"
      style={{ borderColor: "var(--color-line)", background: "var(--color-bone-2)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <div className="grid grid-cols-12 gap-y-10 gap-x-0 md:gap-x-12">
          <Reveal className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-5">Testing we review &amp; recommend</p>
            <h2 className="display max-w-[13ch]">
              Understanding your body through targeted testing.
            </h2>
          </Reveal>

          <div className="col-span-12 md:col-span-8">
            <Reveal>
              <p className="lede max-w-[60ch]">
                At Pristine Functional Health, lasting wellness starts with
                understanding what is happening beneath the surface. Symptoms
                provide clues; appropriate testing can provide deeper insight
                into lifestyle, nutritional, and metabolic factors affecting
                your health. Testing is not automatic or required for everyone;
                it is recommended only when it would meaningfully inform your
                plan.
              </p>
            </Reveal>

            <div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {testingCards.map((card, index) => (
                <Reveal key={card.title} delay={index * 70}>
                  <article
                    className="h-full border-t pt-5"
                    style={{ borderColor: "var(--color-line-strong)" }}
                  >
                    <h3 className="font-serif text-[1.5rem] leading-tight mb-3">
                      {card.title}
                    </h3>
                    <p className="text-[0.95rem] leading-relaxed text-[var(--color-ink-soft)]">
                      {card.copy}
                    </p>
                  </article>
                </Reveal>
              ))}
            </div>

            <Reveal className="mt-12">
              <div
                className="grid grid-cols-1 gap-y-8 border-y py-8 md:grid-cols-2 md:gap-x-10"
                style={{ borderColor: "var(--color-line)" }}
              >
                <div>
                  <p className="eyebrow mb-5">Areas we commonly evaluate</p>
                  <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {areas.map((area) => (
                      <li key={area} className="flex items-start gap-2.5 text-[0.94rem]">
                        <Check
                          size={14}
                          className="mt-1 shrink-0 text-[var(--color-forest)]"
                        />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="eyebrow mb-5">Our philosophy</p>
                  <p className="text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)]">
                    We believe in gathering meaningful information to create a
                    personalized wellness strategy tailored to you. Every
                    recommendation is individualized, evidence-informed, and
                    focused on building sustainable habits that support
                    long-term health and vitality.
                  </p>
                  <Link
                    href="/book-appointment"
                    className="mt-6 inline-flex items-center gap-2 text-[0.92rem] underline underline-offset-4 decoration-[var(--color-line-strong)] hover:decoration-[var(--color-ink)]"
                  >
                    Talk through your testing needs
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal className="mt-6">
              <p className="max-w-[78ch] text-[0.82rem] leading-relaxed text-[var(--color-ink-muted)]">
                Disclaimer: Functional nutrition coaching services are
                educational and do not diagnose, treat, cure, or prevent
                disease. Testing recommendations are intended to support
                wellness and should not replace medical evaluation or treatment
                from a licensed healthcare provider. Any tests listed here are
                examples and may or may not be appropriate for you.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
