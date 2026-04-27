import { Reveal } from "@/components/reveal";

export function Process() {
  const steps = [
    {
      n: "01",
      h: "Book your free call",
      p: "A relaxed 20-minute conversation. You share what's going on. Megha tells you — honestly — whether functional medicine is right for you.",
      tag: "Free · 20 min · virtual",
    },
    {
      n: "02",
      h: "Get your personalized plan",
      p: "If we're a fit, we order targeted testing, build your medical timeline, and design a plan around your biology, your life, and your goals.",
      tag: "Custom labs · root-cause map",
    },
    {
      n: "03",
      h: "Heal at the root — together",
      p: "Weekly guidance, message access, adjustments as your body responds. You don't just feel better. You finally understand why.",
      tag: "Ongoing · personal · sustainable",
    },
  ];

  return (
    <section
      id="how"
      className="py-24 md:py-36 border-t"
      style={{
        borderColor: "var(--color-line)",
        background: "var(--color-bone-2)",
      }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <Reveal>
          <p className="eyebrow mb-5">How it works</p>
          <h2 className="display max-w-[18ch]">
            Three steps. <em className="italic-serif">Zero pressure.</em>
          </h2>
          <p className="lede max-w-[54ch] mt-6">
            No long contracts. No hard sell. Just a calm, structured path forward
            — held by a clinician you can actually reach.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 relative">
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <article
                className="card-edit p-7 md:p-9 h-full flex flex-col"
                style={{ background: "var(--color-paper)" }}
              >
                <span className="font-mono text-[0.78rem] tracking-[0.18em] text-[var(--color-lavender-deep)] mb-3">
                  {s.n}
                </span>
                <h3 className="font-serif text-[1.6rem] md:text-[1.85rem] leading-[1.1] tracking-tight mb-3">
                  {s.h}
                </h3>
                <p className="text-[var(--color-ink-soft)] leading-relaxed">
                  {s.p}
                </p>
                <p
                  className="mt-auto pt-5 font-mono text-[0.74rem] tracking-[0.14em] uppercase text-[var(--color-ink-muted)] border-t"
                  style={{ borderColor: "var(--color-line)" }}
                >
                  {s.tag}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
