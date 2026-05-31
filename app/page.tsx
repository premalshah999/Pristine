import { Hero } from "@/components/sections/hero";
import { ConditionsList } from "@/components/sections/conditions-list";
import { ServicesList } from "@/components/sections/services-list";
import { Testimonials } from "@/components/sections/testimonials";
import { AboutPreview } from "@/components/sections/about-preview";
import { CtaBand } from "@/components/sections/cta-band";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ConditionsList />
      <ServicesList />
      <AboutPreview />
      <Testimonials />
      <CtaBand
        eyebrow="Book your free 20-minute call"
        title="You do not need a louder protocol. You need the right questions."
        subtitle="Bring the symptoms, the labs, the long story, and the parts no one has connected yet. We'll start there."
      />
    </>
  );
}

function ProblemSection() {
  return (
    <section
      className="relative z-[3] -mt-14 pt-24 pb-24 md:-mt-20 md:pt-32 md:pb-36"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, color-mix(in srgb, var(--color-bone-2) 72%, transparent) 56px, var(--color-bone-2) 128px, var(--color-bone-2) 100%)",
      }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <Reveal>
          <p className="eyebrow mb-5">The problem we solve</p>
          <p className="font-serif text-[2.15rem] md:text-[4.25rem] leading-[1.05] max-w-[22ch]">
            You can be medically &ldquo;fine&rdquo; and still know, in your bones, that something is off.
          </p>
        </Reveal>

        <div className="mt-14 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-y-10 gap-x-10">
          {[
            {
              label: "The dismissed patient",
              copy: "Your labs are in range, your symptoms are real, and the explanation you were given was too small.",
            },
            {
              label: "The careful skeptic",
              copy: "You do not want wellness theater. You want a clinician who can read the pattern and explain the why.",
            },
            {
              label: "The exhausted achiever",
              copy: "You have tried harder than anyone knows. The work now is to stop forcing and start investigating.",
            },
          ].map((item, index) => (
            <Reveal key={item.label} delay={index * 80}>
              <article className="border-t pt-6" style={{ borderColor: "var(--color-line)" }}>
                <p className="eyebrow mb-4">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="font-serif text-[1.65rem] md:text-[2rem] leading-[1.08] mb-4">
                  {item.label}
                </h2>
                <p className="text-[var(--color-ink-soft)] leading-relaxed max-w-[34ch]">
                  {item.copy}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
