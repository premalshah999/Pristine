import { Reveal } from "@/components/reveal";

const stories: {
  name: string;
  detail: string;
  quote: string;
  bg: string;
}[] = [
  {
    name: "Anika R.",
    detail: "34 · Hashimoto's & fatigue",
    quote:
      "Three doctors said my thyroid was fine. Megha was the first person to actually look at the patterns. Three weeks in, I had answers. Three months in, I could think clearly again for the first time in years.",
    bg: "var(--color-blush)",
  },
  {
    name: "David M.",
    detail: "52 · Pre-diabetic for 6 years",
    quote:
      "My doctor said wait until you need metformin. Megha showed me my insulin numbers — which nobody had ever ordered — and we built a real plan. My A1C went from 6.1 to 5.3. I'm not on a single medication.",
    bg: "var(--color-honey)",
  },
  {
    name: "Priya S.",
    detail: "41 · Chronic migraines",
    quote:
      "Migraines, four to five a week, for almost a decade. I had tried every prescription. Megha tested for things nobody had — magnesium, histamine, hormones — and we mapped my triggers. I haven't had a migraine in 11 weeks. I cried writing this.",
    bg: "var(--color-lavender)",
  },
  {
    name: "Jordan K.",
    detail: "29 · Anxiety & gut issues",
    quote:
      "I was told my anxiety was just life. What it actually was: blood sugar swings, gut inflammation, and a B-vitamin pathway that wasn't working. I still go to therapy — but my body finally feels safe. That changed everything.",
    bg: "var(--color-blush)",
  },
  {
    name: "Maya L.",
    detail: "33 · PCOS & weight",
    quote:
      "PCOS, irregular cycles, weight that wouldn't budge. My OB offered birth control. That's it. Megha looked at my whole picture — cortisol, insulin, thyroid, gut. Six months later my cycles are regular and I'm down 22 pounds without forcing it.",
    bg: "var(--color-honey)",
  },
  {
    name: "Dr. R. Patel",
    detail: "47 · Autoimmune & burnout",
    quote:
      "I'm a physician myself. I knew the system wasn't going to find what was wrong with me — I'd been trained in it. Working with Megha was the first time someone treated me like a whole human. I send patients to her now.",
    bg: "var(--color-lavender)",
  },
];

export function Testimonials() {
  return (
    <section
      id="stories"
      className="py-24 md:py-36 border-t"
      style={{
        borderColor: "var(--color-line)",
        background: "var(--color-bone-2)",
      }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <Reveal>
          <p className="eyebrow mb-5">Real patients · real transformations</p>
          <h2 className="display max-w-[20ch]">
            Stories from people who <em className="italic-serif">finally</em> felt heard.
          </h2>
          <p className="lede max-w-[56ch] mt-6">
            Names changed when asked. Symptoms, struggles, and outcomes are real. Some patients
            give us their full names; some don't. We honor whatever they prefer.
          </p>
        </Reveal>

        <div className="mt-16 md:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {stories.map((s, i) => (
            <Reveal key={s.name} delay={i * 60}>
              <figure
                className="card-edit h-full flex flex-col p-7 md:p-9"
                style={{ background: "var(--color-paper)" }}
              >
                <div
                  className="font-mono text-[0.78rem] tracking-[0.16em] mb-4"
                  style={{ color: "var(--color-honey-deep)" }}
                  aria-label="5 out of 5 stars"
                >
                  ★★★★★
                </div>
                <blockquote className="font-serif text-[1.15rem] leading-[1.45] flex-1">
                  {s.quote}
                </blockquote>
                <figcaption
                  className="mt-6 pt-5 border-t flex items-center gap-3"
                  style={{ borderColor: "var(--color-line)" }}
                >
                  <span
                    className="inline-flex h-10 w-10 items-center justify-center rounded-full font-serif text-[1.1rem]"
                    style={{ background: s.bg, color: "var(--color-ink)" }}
                  >
                    {s.name[0]}
                  </span>
                  <span>
                    <span className="block font-medium text-[0.95rem]">{s.name}</span>
                    <span className="block text-[0.8rem] text-[var(--color-ink-muted)]">
                      {s.detail}
                    </span>
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
