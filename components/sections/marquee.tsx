export function MarqueeBar() {
  const items = [
    "Hashimoto's",
    "PCOS",
    "Insulin resistance",
    "Migraines",
    "Long COVID",
    "Gut dysbiosis",
    "Perimenopause",
    "Anxiety",
    "Autoimmune",
    "Chronic fatigue",
    "Mold illness",
    "ADHD",
    "Neuropathy",
    "Type 2 diabetes",
  ];
  return (
    <section
      aria-hidden
      className="border-y py-5"
      style={{
        borderColor: "var(--color-line)",
        background: "var(--color-bone-2)",
      }}
    >
      <div className="marquee">
        <div className="marquee__track">
          {[...items, ...items].map((it, i) => (
            <span
              key={i}
              className="font-mono text-[0.78rem] tracking-[0.18em] uppercase text-[var(--color-ink-soft)] flex items-center gap-4"
            >
              {it}
              <span aria-hidden className="text-[var(--color-ink-muted)]">
                ◇
              </span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
