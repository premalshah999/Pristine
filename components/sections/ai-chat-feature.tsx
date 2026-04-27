import { Reveal } from "@/components/reveal";

export function AiChatFeature() {
  return (
    <section
      className="py-24 md:py-36 border-t"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <div className="grid grid-cols-12 gap-y-12 gap-x-12 items-center">
          <Reveal className="col-span-12 md:col-span-6">
            <p className="eyebrow mb-5">Built-in support</p>
            <h2 className="display max-w-[18ch]">
              Ask your health questions —{" "}
              <em className="italic-serif">instantly.</em>
            </h2>
            <p className="lede mt-6 max-w-[54ch]">
              Our private Pristine AI assistant is trained on functional medicine
              principles and Dr. Shah's clinical philosophy. Get thoughtful
              answers about symptoms, testing, and what to expect — anytime,
              day or night.
            </p>
            <p className="text-[var(--color-ink-muted)] text-[0.92rem] mt-5 max-w-[54ch]">
              <em>Educational, not diagnostic. Always followed by real human care.</em>
            </p>
          </Reveal>

          <Reveal className="col-span-12 md:col-span-6" delay={120}>
            <div
              className="rounded-3xl border p-5 md:p-6 shadow-sm max-w-[480px] mx-auto"
              style={{
                borderColor: "var(--color-line)",
                background: "var(--color-paper)",
              }}
            >
              <header
                className="flex items-center gap-2 pb-4 mb-4 border-b text-[0.92rem]"
                style={{ borderColor: "var(--color-line)" }}
              >
                <span
                  className="ping inline-block h-2 w-2 rounded-full"
                  style={{ background: "var(--color-sage-deep)" }}
                />
                Pristine AI
                <span className="ml-auto text-[0.78rem] text-[var(--color-ink-muted)]">
                  online
                </span>
              </header>
              <div className="space-y-2.5">
                <div
                  className="rounded-2xl rounded-bl-sm px-4 py-3 text-[0.92rem] max-w-[85%]"
                  style={{ background: "var(--color-bone-2)" }}
                >
                  I've been told my thyroid is "fine" but I still feel exhausted. What other tests should I ask about?
                </div>
                <div
                  className="ml-auto rounded-2xl rounded-br-sm px-4 py-3 text-[0.92rem] max-w-[88%]"
                  style={{
                    background: "var(--color-ink)",
                    color: "var(--color-bone)",
                  }}
                >
                  A standard panel usually only includes TSH. To see the whole picture
                  you'd want Free T3, Free T4, Reverse T3, and TPO/TG antibodies — plus
                  cofactors like ferritin, B12, vitamin D, selenium, and zinc. Want me to
                  outline what each marker tells you?
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
