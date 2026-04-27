import { Reveal } from "@/components/reveal";

export function Manifesto() {
  const pains = [
    {
      n: "01",
      h: "You're tired in a way coffee can't touch.",
      p: "Not lazy. Not 'low iron.' Something deeper is depleting you — and ten-minute appointments will never find it.",
    },
    {
      n: "02",
      h: "Your labs are 'fine.' You are not.",
      p: "Standard ranges were built for averages, not for you. Optimal isn't the same as normal.",
    },
    {
      n: "03",
      h: "You're collecting diagnoses, not getting better.",
      p: "IBS. Anxiety. Pre-diabetes. Migraines. All connected. None of them addressed at the source.",
    },
    {
      n: "04",
      h: "You feel dismissed.",
      p: "You've been gaslit by a system that runs on 7-minute visits. You deserve someone who will actually look.",
    },
  ];

  return (
    <section
      className="py-24 md:py-36"
      style={{ background: "var(--color-bone)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <Reveal className="max-w-[820px] mx-auto text-center">
          <p className="eyebrow mb-6">Sound familiar?</p>
          <h2 className="display">
            Everything looks <em className="italic-serif">normal.</em>
            <br />
            So why do you still feel awful?
          </h2>
          <p className="lede mt-7 mx-auto max-w-[60ch]">
            You've been handed prescriptions instead of explanations. You've
            been told it's stress, it's age, it's in your head. It's{" "}
            <strong>not.</strong> Symptoms aren't random — they're signals.
            And nobody has been listening.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 mt-16 md:mt-20">
          {pains.map((p, i) => (
            <Reveal key={p.n} delay={i * 80}>
              <article
                className="card-edit p-7 md:p-9 h-full"
                style={{ background: "var(--color-paper)" }}
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="font-serif text-[1.4rem] md:text-[1.55rem] leading-[1.15] tracking-tight max-w-[24ch]">
                    {p.h}
                  </h3>
                  <span className="font-mono text-[0.7rem] tracking-widest text-[var(--color-ink-muted)] mt-1.5">
                    {p.n}
                  </span>
                </div>
                <p className="text-[0.96rem] leading-relaxed text-[var(--color-ink-soft)]">
                  {p.p}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-20 md:mt-24 text-center">
          <p className="font-serif text-[1.6rem] md:text-[2rem] leading-[1.3] tracking-tight max-w-[42ch] mx-auto">
            <em className="italic-serif">
              This is where root-cause medicine begins —
            </em>{" "}
            and where most people finally exhale.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
