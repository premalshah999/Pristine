import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

const stories: {
  name: string;
  detail: string;
  hook: string;
  quote: string;
  href: string;
  focus: string;
  bg: string;
}[] = [
  {
    name: "Anika R.",
    detail: "34 · Hashimoto's & fatigue",
    hook: "Her labs were normal. Her life was not.",
    quote:
      "Three doctors said my thyroid was fine. Megha was the first person to actually look at the patterns. Three weeks in, I had answers. Three months in, I could think clearly again for the first time in years.",
    href: "/conditions/thyroid",
    focus: "Full thyroid + antibody pattern",
    bg: "var(--color-blush)",
  },
  {
    name: "David M.",
    detail: "52 · insulin resistance",
    hook: "The missing clue was insulin, not glucose.",
    quote:
      "My A1C was creeping up, but I kept hearing 'watch and wait.' Megha checked fasting insulin, used a CGM, and showed me exactly which meals were keeping me stuck. Four months later my numbers finally made sense.",
    href: "/conditions/type-2-diabetes",
    focus: "CGM + fasting insulin",
    bg: "var(--color-honey)",
  },
  {
    name: "Priya S.",
    detail: "41 · migraines",
    hook: "Her migraines stopped looking random.",
    quote:
      "I had a drawer full of prescriptions and no explanation. Megha mapped my cycle, histamine load, minerals, and sleep. Once we saw the pattern, the plan felt obvious. I went from weekly migraines to one mild flare in two months.",
    href: "/conditions/migraines",
    focus: "Hormone + histamine mapping",
    bg: "var(--color-lavender)",
  },
  {
    name: "Maya L.",
    detail: "33 · PCOS & weight",
    hook: "The plan finally matched her biology.",
    quote:
      "I was eating clean, working out, and gaining anyway. Megha connected insulin, cortisol, thyroid, and gut markers instead of blaming discipline. My cycles are predictable now, and my energy is steady enough to trust my body again.",
    href: "/conditions/female-hormones",
    focus: "Insulin + cortisol + cycle timing",
    bg: "var(--color-blush)",
  },
];

export function Testimonials() {
  return (
    <section
      id="stories"
      className="py-24 md:py-32 border-t"
      style={{
        borderColor: "var(--color-line)",
        background: "var(--color-bone-2)",
      }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <div className="mb-12 grid grid-cols-12 gap-y-6 md:gap-x-10">
          <Reveal className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-5">Patient stories</p>
            <h2 className="display max-w-[18ch]">
              Specific patterns, not generic reassurance.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-8 md:pt-2" delay={100}>
            <p className="lede max-w-[56ch]">
              Each story points back to the same method: listen closely, test
              what the symptoms are hinting at, and build a plan around the
              biology in front of us.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="-mx-6 snap-x snap-mandatory overflow-x-auto px-6 pb-5">
            <div className="grid auto-cols-[minmax(320px,86vw)] grid-flow-col gap-4 md:auto-cols-[minmax(470px,520px)]">
              {stories.map((story) => (
                <Link
                  key={story.name}
                  href={story.href}
                  className="group flex min-h-[390px] snap-start flex-col justify-between border p-6 transition-colors hover:bg-[var(--color-canvas)] md:p-7"
                  style={{
                    background: story.bg,
                    borderColor: "var(--color-line-strong)",
                  }}
                >
                  <span>
                    <span className="eyebrow mb-5 block">A patient story</span>
                    <span className="block font-serif text-[1.85rem] leading-[1.03] md:text-[2.15rem]">
                      {story.hook}
                    </span>
                    <span className="mt-5 block text-[1rem] leading-[1.56] text-[var(--color-ink-soft)] md:text-[1.03rem]">
                      &ldquo;{story.quote}&rdquo;
                    </span>
                  </span>

                  <span className="mt-8 flex items-end justify-between gap-6 border-t pt-5" style={{ borderColor: "var(--color-line)" }}>
                    <span className="text-[0.92rem] leading-relaxed text-[var(--color-ink-soft)]">
                      <strong className="block font-medium text-[var(--color-ink)]">
                        {story.name}
                      </strong>
                      {story.detail}
                      <span className="mt-2 block font-mono text-[0.68rem] uppercase text-[var(--color-ink-muted)]">
                        {story.focus}
                      </span>
                    </span>
                    <ArrowUpRight
                      size={18}
                      className="shrink-0 text-[var(--color-ink-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ink)]"
                    />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
