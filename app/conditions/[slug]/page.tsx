import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Check, X } from "lucide-react";
import { Reveal } from "@/components/reveal";
import {
  conditions,
  getCondition,
  getConditionSlugs,
  type ConditionCategory,
} from "@/lib/conditions";
import { CtaBand } from "@/components/sections/cta-band";
import { JsonLd } from "@/components/seo/json-ld";
import {
  absoluteUrl,
  adultWellnessAudienceJsonLd,
  conditionKeywords,
  pageMetadata,
  serviceAreaSchema,
  siteName,
  siteUrl,
  virtualServiceChannelJsonLd,
} from "@/lib/seo";

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
    title: `${c.name} support | Online functional health consultation`,
    description: `Virtual root-cause wellness support for ${c.name.toLowerCase()} through online functional health consultations with ${siteName}.`,
    path: `/conditions/${c.slug}`,
    keywords: conditionKeywords(c.name, c.category),
  });
}

export default async function ConditionPage({ params }: PageProps) {
  const { slug } = await params;
  const condition = getCondition(slug);
  if (!condition) notFound();

  const publicContext = getConditionPublicContext(condition.category, condition.name);
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
      inLanguage: "en-US",
      isAccessibleForFree: true,
      publisher: { "@id": `${siteUrl}/#organization` },
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
      "@type": "Service",
      "@id": `${pageUrl}#condition-support`,
      name: `${condition.name} functional health support`,
      description: condition.summary,
      url: pageUrl,
      provider: { "@id": `${siteUrl}/#organization` },
      areaServed: serviceAreaSchema,
      audience: adultWellnessAudienceJsonLd,
      availableChannel: virtualServiceChannelJsonLd,
      serviceType: ["Online functional health consultation", `${condition.name} support`],
      category: condition.category,
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
            <p className="lede mt-7 max-w-[60ch]">{condition.tagline}</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/book-appointment" className="btn btn-primary">
                Book your free call
                <ArrowRight size={16} />
              </Link>
              <a href="#approach" className="btn btn-ghost">
                See possible approach
              </a>
              <Link href="/conditions#testing" className="btn btn-ghost">
                Assessment overview
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
              {publicContext.overview.map((para, idx) => (
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
                  {publicContext.conventionalIntro}
                </p>
                <ul className="space-y-3.5">
                  {publicContext.conventionalGaps.map((m, idx) => (
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
                  <em className="italic-serif">may focus.</em>
                </p>
                <p className="text-[var(--color-ink-soft)] mb-5 leading-relaxed">
                  {publicContext.approachIntro}
                </p>
                <p
                  className="mb-5 border-l pl-4 text-[0.84rem] leading-relaxed text-[var(--color-ink-muted)]"
                  style={{ borderColor: "var(--color-line-strong)" }}
                >
                  These are examples of what may be considered. Testing,
                  supplements, nutrition strategies, movement, lifestyle work,
                  and care priorities are individualized after intake. Specific
                  tests, supplement options, timing, dosing, and protocols are
                  discussed privately only when they are relevant and safe for
                  your case.
                </p>

                <div>
                  <p className="eyebrow mb-3">What we may consider</p>
                  <ul className="space-y-2">
                    {publicContext.approach.map((a, idx) => (
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
              {publicContext.expectations.map((para, idx) => (
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

function getConditionPublicContext(category: ConditionCategory, conditionName: string) {
  const shared = {
    overview: [
      `${conditionName} is rarely just a single isolated symptom. It often reflects the way multiple body systems are interacting over time.`,
      "Our public pages stay intentionally high-level. The deeper clinical reasoning, testing decisions, supplement options, and protocol details are handled privately after a full intake.",
      "The goal is to help you recognize the pattern and understand the kind of support available without turning your care into a generic do-it-yourself checklist.",
    ],
    conventionalIntro:
      "Standard care can be essential, especially for diagnosis, medication, imaging, and urgent concerns. The gap is that short visits often cannot connect the whole lifestyle, nutrition, stress, sleep, digestive, metabolic, and symptom timeline.",
    conventionalGaps: [
      "Short visits can separate symptoms into isolated boxes instead of looking for the pattern across systems.",
      "Standard care may focus on whether a diagnosis is present, while functional wellness work asks what is driving the pattern.",
      "Nutrition, stress, sleep, digestion, environment, movement, and daily rhythm are often not investigated together.",
      "Many people leave with a normal-range answer even when their lived experience says something is still off.",
    ],
    approachIntro:
      "Our work is to understand the pattern, identify the safest first priorities, and build a plan that fits the person in front of us.",
    approach: [
      "A detailed intake that connects symptoms, timeline, lifestyle, current care, and goals",
      "Review of relevant labs or records you already have, with additional testing discussed only when it would meaningfully change the plan",
      "A personalized nutrition and lifestyle framework based on your capacity, safety needs, and priorities",
      "Ongoing refinement as your body responds, instead of a fixed protocol handed to every client",
      "Coordination with your licensed medical providers when diagnosis, medication, imaging, or specialty care is needed",
    ],
    expectations: [
      "You should expect a thoughtful investigation, clear education, and a plan that is tailored to your history, goals, safety needs, and current medical care.",
      "Some people need more assessment before recommendations are clear. Others need a simpler starting point and careful follow-through.",
      "Progress is individual. We do not promise a specific outcome, timeline, test, supplement, or protocol. We focus on the next right step and adjust from there.",
    ],
  };

  const byCategory: Partial<Record<ConditionCategory, Partial<typeof shared>>> = {
    Metabolic: {
      overview: [
        `${conditionName} often reflects how energy, appetite, stress, movement, sleep, hormones, and digestion are interacting.`,
        "We focus on the metabolic pattern rather than assuming the problem is willpower or a lack of discipline.",
        "Specific lab decisions, supplement options, tracking tools, and nutrition details are discussed privately after intake.",
      ],
      conventionalIntro:
        "Standard metabolic care often focuses on weight, glucose, medication decisions, or general diet advice. Those can matter, but they may not explain why the pattern developed or why it keeps returning.",
      conventionalGaps: [
        "Weight, cravings, and blood sugar issues are often treated as discipline problems instead of physiology problems.",
        "Metabolic patterns can build quietly for years before standard markers look urgent.",
        "Sleep, stress, muscle, digestion, and hormones may be separated even when they are part of the same pattern.",
        "Plans often focus on restriction without explaining what your body is responding to.",
      ],
      approach: [
        "Map eating rhythm, energy, cravings, sleep, stress, movement, medications, and current lab context",
        "Identify the most likely metabolic bottlenecks without defaulting to a one-size-fits-all diet",
        "Build a realistic food and movement framework that can fit your schedule and culture",
        "Discuss testing or supplements privately only when they are necessary, appropriate, and useful",
        "Adjust the plan based on symptoms, energy, adherence, and your broader medical care",
      ],
    },
    Hormonal: {
      overview: [
        `${conditionName} can be shaped by stress, sleep, thyroid signals, digestion, blood sugar, medications, age, and life stage.`,
        "We look at hormone symptoms as part of a broader body-system pattern rather than reducing them to one isolated number.",
        "Specific testing, supplement, and hormone-support decisions are kept private and individualized.",
      ],
      conventionalIntro:
        "Standard hormone care often focuses on a limited set of markers or medication options. That can be useful, but many clients need the whole rhythm of the body considered.",
      conventionalGaps: [
        "Hormone symptoms are often narrowed to one number or one medication decision.",
        "Cycle history, stress load, thyroid patterns, digestion, sleep, and nutrient status may be reviewed separately or not at all.",
        "Clients are often told symptoms are normal for their age even when their quality of life is clearly affected.",
        "The whole hormonal ecosystem is rarely mapped in one conversation.",
      ],
      approach: [
        "Review cycle history, energy, mood, sleep, digestion, stress, medications, and current medical care",
        "Look for patterns across thyroid, sex hormone, adrenal, metabolic, and gut signals without overpromising a single fix",
        "Create food, rhythm, recovery, and lifestyle priorities that support hormone resilience",
        "Discuss testing or supplements privately only if they fit your history, safety needs, and goals",
        "Coordinate with your prescribing or specialty clinician whenever medical hormone care is involved",
      ],
    },
    Neurological: {
      overview: [
        `${conditionName} can be influenced by nervous-system load, sleep, blood sugar rhythm, nutrition, stress, inflammation, movement, and medical history.`,
        "Functional support looks for modifiable patterns while respecting the role of medical diagnosis and specialty care.",
        "Public guidance stays broad so care remains personalized and safe.",
      ],
      conventionalIntro:
        "Standard neurological care is important for diagnosis, imaging, medication, and red flags. Functional support adds a wider look at daily and systemic inputs that may influence resilience.",
      conventionalGaps: [
        "Neurological symptoms are often managed at the symptom level without enough attention to systemic drivers.",
        "Blood sugar, sleep, stress, nutrition, inflammation, digestion, and movement may not be connected to the nervous system picture.",
        "Patients can be told to monitor symptoms without a clear plan for reducing the load on the system.",
        "Functional support should complement, not replace, appropriate neurology or medical care.",
      ],
      approach: [
        "Map symptoms alongside sleep, blood sugar rhythm, stress load, nutrition, movement, and current medical care",
        "Identify modifiable lifestyle and nutrition patterns that may influence nervous-system resilience",
        "Build a gradual support plan that respects safety, pacing, and symptom sensitivity",
        "Discuss testing or supplements privately only when the rationale is strong and individualized",
        "Coordinate with licensed providers for diagnosis, medication, imaging, or urgent neurological concerns",
      ],
    },
    "Mental Health": {
      overview: [
        `${conditionName} deserves compassionate, appropriate mental health care. Functional support does not replace therapy, psychiatry, medication management, or crisis care.`,
        "Our role is to support the body systems that may influence energy, resilience, sleep, mood stability, and daily capacity.",
        "Any testing or supplement discussion is private, individualized, and secondary to safety and appropriate mental health support.",
      ],
      conventionalIntro:
        "Mental health care can be essential and lifesaving. The functional gap is that body-system contributors may not always be explored alongside therapy, medication, and emotional support.",
      conventionalGaps: [
        "Mood, focus, and stress symptoms are often discussed only psychologically or only medically.",
        "Blood sugar, sleep, gut health, nutrition, hormones, inflammation, and nervous-system load may be left out of the conversation.",
        "Support should never replace therapy, psychiatry, crisis care, or medication management when those are needed.",
        "Many people need both mental health support and body-system support working in parallel.",
      ],
      approach: [
        "Map mood or focus patterns alongside sleep, food rhythm, digestion, stress, hormones, and current mental health care",
        "Support foundational physiology that may influence energy, resilience, and daily stability",
        "Build practical nutrition and lifestyle steps that do not interfere with therapy or medication plans",
        "Discuss testing or supplements privately only when appropriate and within scope",
        "Refer or coordinate with licensed mental health professionals whenever safety or clinical care requires it",
      ],
    },
    Gut: {
      overview: [
        `${conditionName} often involves food rhythm, stress physiology, digestive function, sleep, immune signaling, medications, and daily habits.`,
        "We avoid turning gut support into a public list of tests, supplements, or foods to eliminate.",
        "The goal is to understand your pattern and build a plan that does not create unnecessary restriction.",
      ],
      conventionalIntro:
        "Standard digestive care can be important for diagnosis, medication, imaging, procedures, and red flags. Functional support adds the broader daily pattern around digestion.",
      conventionalGaps: [
        "Digestive symptoms are often treated one symptom at a time without mapping food rhythm, stress, motility, and immune patterns together.",
        "People may be handed broad restrictions without understanding why their gut became reactive in the first place.",
        "Food reactions, stress physiology, sleep, medications, and lifestyle are often reviewed separately.",
        "A sustainable plan needs more than a list of foods to avoid.",
      ],
      approach: [
        "Map digestion, bowel rhythm, food response, stress, sleep, medications, and symptom timing",
        "Use nutrition changes strategically rather than creating unnecessary long-term restriction",
        "Support daily routines that influence motility, comfort, and resilience",
        "Discuss testing or supplements privately only when they are likely to clarify next steps",
        "Coordinate with medical care for red flags, diagnosis, medication, imaging, or procedures",
      ],
    },
    Immune: {
      overview: [
        `${conditionName} can be shaped by immune load, stress, digestion, sleep, nutrition, environment, recovery capacity, and specialty care needs.`,
        "Functional support focuses on the terrain around the immune system while respecting the role of medical diagnosis and treatment.",
        "Specific testing, supplement, and protocol decisions are handled privately after intake.",
      ],
      conventionalIntro:
        "Standard immune and autoimmune care is important for diagnosis, monitoring, medication, and specialty treatment. Functional support adds attention to the daily terrain around flares and resilience.",
      conventionalGaps: [
        "Immune and autoimmune patterns are often managed downstream without enough discussion of triggers and total load.",
        "Gut health, nutrition, sleep, stress, environmental exposure, and recovery capacity may not be reviewed together.",
        "Patients can be left with medication decisions but little guidance on daily terrain.",
        "Functional support should work alongside specialty care, not replace it.",
      ],
      approach: [
        "Map symptoms, flare patterns, digestion, sleep, stress, food response, environment, and specialty care",
        "Prioritize the daily foundations that may reduce load and improve resilience",
        "Use nutrition and lifestyle changes carefully, avoiding extreme restriction unless clearly warranted",
        "Discuss testing or supplements privately only when individualized and appropriate",
        "Coordinate with rheumatology, allergy, primary care, or other specialists when needed",
      ],
    },
    "Bone Health": {
      overview: [
        `${conditionName} is not only about a scan or one nutrient. Bone health depends on strength, balance, nutrition, digestion, hormones, medications, inflammation, and fall risk.`,
        "We focus on the daily terrain that supports bones while respecting medical bone care.",
        "Specific supplement, testing, imaging, or medication discussions belong in private, individualized care.",
      ],
      conventionalIntro:
        "Standard bone care is important for imaging, fracture-risk decisions, and medication conversations. Functional support adds the nutrition, movement, digestion, and lifestyle context around bone strength.",
      conventionalGaps: [
        "Bone health is often reduced to a scan result without enough attention to muscle, nutrition, hormones, digestion, medications, and fall risk.",
        "People may receive general advice without a personalized plan for daily bone-supportive habits.",
        "Inflammation, metabolic health, strength, balance, and recovery can be left out of the conversation.",
        "A good plan should support the terrain while respecting medical bone care.",
      ],
      approach: [
        "Review bone history, movement capacity, nutrition, digestion, hormones, medication context, and fall risk",
        "Build a practical food, strength, balance, and recovery framework",
        "Support consistency without overwhelming you with a long list of tasks",
        "Discuss testing or supplements privately only when safe, relevant, and coordinated with your care",
        "Coordinate with medical providers for imaging, medication decisions, and fracture-risk management",
      ],
    },
    Neurodevelopmental: {
      overview: [
        `${conditionName} support should be respectful, practical, and centered on quality of life. Functional care does not try to erase neurodivergence.`,
        "The focus is on modifiable wellness patterns such as digestion, sleep, nutrition, sensory load, stress, and routines.",
        "Specific interventions are discussed privately and carefully, with family capacity and safety in mind.",
      ],
      conventionalIntro:
        "Educational, therapeutic, behavioral, and medical supports can all matter. Functional wellness adds a lens on daily body-system burdens that may affect quality of life.",
      conventionalGaps: [
        "Support can focus heavily on behavior while missing digestive, sleep, nutrition, sensory, and stress patterns.",
        "Families may be given fragmented advice from many providers without a coherent wellness plan.",
        "The goal is not to change who someone is. The goal is to reduce modifiable burdens that affect daily quality of life.",
        "Functional support should complement educational, therapeutic, and medical care already in place.",
      ],
      approach: [
        "Map digestion, sleep, food response, sensory load, routines, stress, and current support systems",
        "Prioritize gentle nutrition and lifestyle steps that fit the family and preserve safety",
        "Avoid extreme protocols and keep recommendations practical",
        "Discuss testing or supplements privately only when clearly appropriate",
        "Coordinate with therapists, educators, pediatric or adult medical providers when needed",
      ],
    },
  };

  return { ...shared, ...(byCategory[category] ?? {}) };
}
