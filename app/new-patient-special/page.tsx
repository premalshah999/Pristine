import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";

export const metadata = {
  title: "New Patient Special",
  description:
    "Your first 20-minute discovery call with Dr. Megha Shah is free. No commitment. No upsell.",
};

export default function NewPatientSpecial() {
  return (
    <>
      <section className="pt-20 md:pt-28 pb-12">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-5">— New patient special</p>
            <h1 className="display-xl max-w-[16ch]">
              Your first call <em className="italic-serif">is on us.</em>
            </h1>
            <p className="lede mt-7 max-w-[60ch]">
              Twenty minutes. Virtual. Held personally by Dr. Shah. No commitment,
              no card on file, no hidden upsell at the end. Just an honest first
              conversation.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <div
              className="relative overflow-hidden rounded-[36px] px-8 md:px-16 py-16 md:py-20"
              style={{
                background:
                  "linear-gradient(135deg, #CBDED3 0%, #EDF3F0 45%, #D2C49E 100%)",
              }}
            >
              <div className="grid grid-cols-12 gap-y-10 gap-x-12 relative z-10">
                <div className="col-span-12 md:col-span-7">
                  <p
                    className="font-mono text-[0.72rem] tracking-[0.22em] uppercase mb-5"
                    style={{ color: "rgba(59,98,85,0.70)" }}
                  >
                    Limited spots each week
                  </p>
                  <h2
                    className="font-serif text-[clamp(2rem,4.5vw,3.4rem)] leading-[1.04] tracking-[-0.03em]"
                    style={{ color: "#2B3830" }}
                  >
                    Free 20-minute discovery call.
                  </h2>
                  <ul className="mt-8 space-y-3 max-w-[44ch]">
                    {[
                      "Virtual, scheduled at your convenience",
                      "Held personally by Dr. Shah",
                      "We'll talk about what's been going on, what's been tried",
                      "We'll be honest about whether we can help",
                      "If we are a fit, we'll outline the realistic next step",
                      "If we're not, we'll point you toward who is",
                    ].map((c) => (
                      <li
                        key={c}
                        className="flex items-start gap-3 text-[1rem]"
                        style={{ color: "rgba(43,56,48,0.85)" }}
                      >
                        <span
                          className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-0.5"
                          style={{ background: "rgba(59,98,85,0.15)" }}
                        >
                          <Check size={14} style={{ color: "#2B3830" }} />
                        </span>
                        <span className="leading-snug">{c}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <Link
                      href="/book"
                      className="btn btn-glow"
                      style={{ background: "#3B6255", color: "#E2DFDA" }}
                    >
                      Claim your free call
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>

                <div className="col-span-12 md:col-span-5">
                  <div
                    className="rounded-2xl border p-7"
                    style={{
                      background: "rgba(255,255,255,0.55)",
                      borderColor: "rgba(59,98,85,0.20)",
                      backdropFilter: "blur(8px)",
                    }}
                  >
                    <p
                      className="font-mono text-[0.72rem] tracking-[0.22em] uppercase mb-3"
                      style={{ color: "rgba(59,98,85,0.70)" }}
                    >
                      What it's worth
                    </p>
                    <p
                      className="font-serif text-[2.2rem] leading-tight"
                      style={{ color: "#2B3830" }}
                    >
                      $250 value, free.
                    </p>
                    <p
                      className="mt-4 text-[0.95rem] leading-relaxed"
                      style={{ color: "rgba(43,56,48,0.80)" }}
                    >
                      Most functional medicine practices charge $200–$300 for an
                      initial consult. We waive it for new patients because
                      finding the right clinician is more important than getting
                      paid for a 20-minute conversation.
                    </p>
                  </div>
                </div>
              </div>

              <div
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(800px 240px at 50% -20%, rgba(255,255,255,0.45), transparent 70%)",
                }}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section
        className="py-20 md:py-28 border-t"
        style={{ borderColor: "var(--color-line)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-4">— What we'll cover</p>
            <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[24ch]">
              Twenty minutes, <em className="italic-serif">used well.</em>
            </h2>
          </Reveal>
          <ol
            className="mt-12 max-w-[820px] divide-y"
            style={{ borderColor: "var(--color-line)" }}
          >
            {[
              {
                t: "What's been going on",
                p: "Symptoms, timeline, what's been tried. The fast version of your story.",
              },
              {
                t: "What you've already done",
                p: "Tests run, providers seen, protocols tried. We don't repeat work.",
              },
              {
                t: "What we'd look at first",
                p: "If we work together, here's where we'd actually start — and why.",
              },
              {
                t: "Honest fit check",
                p: "Are we the right team for this? If yes, here's what comes next. If not, here's a recommendation.",
              },
            ].map((step, i) => (
              <li key={step.t} className="py-6 grid grid-cols-12 gap-4 items-start">
                <span className="col-span-12 md:col-span-1 font-mono text-[0.78rem] tracking-widest text-[var(--color-lavender-deep)] pt-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="col-span-12 md:col-span-11">
                  <h3 className="font-serif text-[1.4rem] leading-snug mb-1.5">
                    {step.t}
                  </h3>
                  <p className="text-[var(--color-ink-soft)] leading-relaxed">
                    {step.p}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand cta="Book the free call" />
    </>
  );
}
