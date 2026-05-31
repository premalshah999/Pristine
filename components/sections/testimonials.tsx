import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { testimonialStories, type TestimonialStory } from "@/lib/testimonials";

const accentBackground: Record<TestimonialStory["accent"], string> = {
  mint: "var(--color-mint)",
  tan: "var(--color-tan)",
  sage: "color-mix(in srgb, var(--color-sage) 34%, var(--color-paper))",
  paper: "var(--color-paper)",
};

export function Testimonials() {
  return (
    <section
      id="stories"
      className="py-20 md:py-28 border-t"
      style={{
        borderColor: "var(--color-line)",
        background: "var(--color-bone-2)",
      }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <div className="mb-10 grid grid-cols-12 gap-y-6 md:gap-x-10">
          <Reveal className="col-span-12 md:col-span-4">
            <p className="eyebrow mb-5">Representative patient stories</p>
            <h2 className="display max-w-[15ch]">
              Realistic patterns, specific next steps.
            </h2>
          </Reveal>
          <Reveal className="col-span-12 md:col-span-8 md:pt-2" delay={100}>
            <p className="lede max-w-[60ch]">
              These composite stories show the kind of pattern-mapping patients
              often need: fewer generic pep talks, more useful connections
              between symptoms, labs, food, stress, sleep, and daily life.
            </p>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <div className="-mx-6 snap-x snap-mandatory overflow-x-auto px-6 pb-6">
            <div className="grid auto-cols-[minmax(300px,86vw)] grid-flow-col gap-4 md:auto-cols-[minmax(520px,560px)]">
              {testimonialStories.map((story) => (
                <StoryCard key={`${story.name}-${story.condition}`} story={story} />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={180}>
          <p className="max-w-[72ch] border-t pt-5 text-[0.82rem] leading-relaxed text-[var(--color-ink-muted)]">
            Stories are representative composites and may be edited for privacy,
            clarity, and length. Individual results vary and are not guaranteed.
            Functional nutrition coaching is educational and does not diagnose,
            treat, cure, or prevent disease.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function StoryCard({ story }: { story: TestimonialStory }) {
  return (
    <Link
      href={story.href}
      className="group grid min-h-[430px] snap-start grid-rows-[auto_1fr_auto] border p-5 transition-colors hover:bg-[var(--color-canvas)] md:min-h-[410px] md:p-6"
      style={{
        background: accentBackground[story.accent],
        borderColor: "var(--color-line-strong)",
      }}
    >
      <span className="flex items-start justify-between gap-5 border-b pb-4" style={{ borderColor: "var(--color-line)" }}>
        <span>
          <span className="block font-mono text-[0.68rem] uppercase text-[var(--color-ink-muted)]">
            {story.condition}
          </span>
          <span className="mt-1 block text-[0.9rem] leading-snug text-[var(--color-ink-soft)]">
            {story.detail}
          </span>
        </span>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-[var(--color-ink-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ink)]"
        />
      </span>

      <span className="py-6">
        <span className="block font-serif text-[1.8rem] leading-[1.04] md:text-[2.1rem]">
          {story.hook}
        </span>
        <span className="mt-5 block text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)]">
          &ldquo;{story.quote}&rdquo;
        </span>
      </span>

      <span className="border-t pt-4" style={{ borderColor: "var(--color-line)" }}>
        <span className="mb-4 flex flex-wrap gap-2">
          {story.markers.map((marker) => (
            <span
              key={marker}
              className="rounded-full border px-3 py-1 font-mono text-[0.64rem] uppercase text-[var(--color-ink-soft)]"
              style={{ borderColor: "var(--color-line-strong)" }}
            >
              {marker}
            </span>
          ))}
        </span>
        <span className="grid gap-1 text-[0.9rem] leading-relaxed text-[var(--color-ink-soft)]">
          <strong className="font-medium text-[var(--color-ink)]">{story.name}</strong>
          <span>{story.outcome}</span>
        </span>
      </span>
    </Link>
  );
}
