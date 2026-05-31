import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { testimonialStories, type TestimonialStory } from "@/lib/testimonials";

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
          <div className="-mx-6 snap-x snap-mandatory overflow-x-auto overscroll-x-contain px-6 pb-6">
            <div
              className="grid auto-cols-[minmax(320px,88vw)] grid-flow-col gap-px overflow-hidden border-y bg-[var(--color-line)] md:auto-cols-[minmax(520px,620px)]"
              style={{ borderColor: "var(--color-line)" }}
            >
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
      className="group flex min-h-[390px] snap-start flex-col bg-[var(--color-paper)] p-5 transition-colors hover:bg-[var(--color-canvas)] md:min-h-[420px] md:p-7"
      style={{
        color: "var(--color-ink)",
      }}
    >
      <span className="flex items-start justify-between gap-5 border-b pb-4" style={{ borderColor: "var(--color-line)" }}>
        <span>
          <span className="block font-mono text-[0.68rem] uppercase text-[var(--color-forest)]">
            {story.condition}
          </span>
          <span className="mt-1 block text-[0.88rem] leading-snug text-[var(--color-ink-soft)]">
            {story.detail}
          </span>
        </span>
        <ArrowUpRight
          size={18}
          className="mt-1 shrink-0 text-[var(--color-ink-muted)] transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--color-ink)]"
        />
      </span>

      <span className="py-5 md:py-6">
        <span className="block font-serif text-[1.35rem] leading-[1.12] md:text-[1.55rem]">
          {story.hook}
        </span>
        <span className="mt-5 block text-[0.98rem] leading-relaxed text-[var(--color-ink-soft)]">
          &ldquo;{story.quote}&rdquo;
        </span>
      </span>

      <span className="mt-auto border-t pt-4" style={{ borderColor: "var(--color-line)" }}>
        <span className="mb-4 grid grid-cols-1 gap-px overflow-hidden border bg-[var(--color-line)] sm:grid-cols-3" style={{ borderColor: "var(--color-line)" }}>
          {story.markers.map((marker) => (
            <span
              key={marker}
              className="bg-[var(--color-paper)] px-3 py-2 font-mono text-[0.64rem] uppercase text-[var(--color-ink-soft)]"
            >
              {marker}
            </span>
          ))}
        </span>
        <span className="grid gap-1 text-[0.9rem] leading-relaxed text-[var(--color-ink-soft)]">
          <span className="flex items-center justify-between gap-3">
            <strong className="font-medium text-[var(--color-ink)]">{story.name}</strong>
            <span className="font-mono text-[0.64rem] uppercase text-[var(--color-ink-muted)]">
              Reported shift
            </span>
          </span>
          <span>{story.outcome}</span>
        </span>
      </span>
    </Link>
  );
}
