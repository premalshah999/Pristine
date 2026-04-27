"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";

export default function BookPage() {
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const email = String(data.get("email") || "").trim();
    if (!name || !email) return;
    // TODO: wire to /api/leads or HubSpot/Calendly/Acuity
    setDone(true);
    e.currentTarget.reset();
  };

  return (
    <>
      <section className="pt-20 md:pt-28 pb-16">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-5">— Book</p>
            <h1 className="display-xl max-w-[18ch]">
              Book your <em className="italic-serif">free</em> 20-minute call.
            </h1>
            <p className="lede mt-7 max-w-[60ch]">
              Tell us a little about what's been going on. Megha will reach out
              within one business day to confirm a time that works for you.
              No commitment. No upsell. Just an honest first conversation.
            </p>
          </Reveal>
        </div>
      </section>

      <section
        className="py-16 md:py-24 border-t"
        style={{
          borderColor: "var(--color-line)",
          background: "var(--color-bone-2)",
        }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-12 gap-y-12 gap-x-12">
            <Reveal className="col-span-12 md:col-span-5">
              <p className="eyebrow mb-4">— What you can expect</p>
              <h2 className="title text-[2rem] md:text-[2.4rem] leading-[1.1] max-w-[20ch]">
                A real conversation, <em className="italic-serif">not a sales call.</em>
              </h2>
              <ul className="mt-8 space-y-3">
                {[
                  "20 minutes, virtual, scheduled at your convenience",
                  "Held personally by Dr. Shah — not an intake coordinator",
                  "Honest: we'll tell you if we're not a fit",
                  "No commitment, no pressure, no card on file",
                  "If it is a fit, we'll outline the realistic next step",
                ].map((c) => (
                  <li key={c} className="flex items-start gap-3 text-[0.96rem]">
                    <span
                      className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full mt-0.5"
                      style={{ background: "var(--color-lavender)" }}
                    >
                      <Check size={14} />
                    </span>
                    <span className="leading-snug">{c}</span>
                  </li>
                ))}
              </ul>

              <div
                className="mt-10 rounded-2xl border p-6"
                style={{
                  background: "var(--color-paper)",
                  borderColor: "var(--color-line)",
                }}
              >
                <p className="eyebrow mb-2">Calendar coming soon</p>
                <p className="text-[0.92rem] text-[var(--color-ink-soft)] leading-relaxed">
                  We're integrating direct calendar booking. For now, fill out
                  the form and Megha will personally reach out within one
                  business day.
                </p>
              </div>
            </Reveal>

            <Reveal className="col-span-12 md:col-span-7" delay={120}>
              <form
                onSubmit={submit}
                className="rounded-3xl border p-7 md:p-10 space-y-5"
                style={{
                  background: "var(--color-paper)",
                  borderColor: "var(--color-line)",
                }}
              >
                <Field label="Your name" id="name" name="name" required />
                <Field label="Email" id="email" name="email" type="email" required />
                <Field label="Phone (optional)" id="phone" name="phone" type="tel" />

                <div>
                  <label
                    htmlFor="focus"
                    className="block text-[0.85rem] font-medium mb-2"
                  >
                    What's been going on?
                  </label>
                  <textarea
                    id="focus"
                    name="focus"
                    rows={5}
                    placeholder="A few sentences is plenty — we'll go deeper on the call."
                    className="input"
                  />
                </div>

                <div>
                  <label
                    htmlFor="goal"
                    className="block text-[0.85rem] font-medium mb-2"
                  >
                    What would success look like for you?
                  </label>
                  <textarea
                    id="goal"
                    name="goal"
                    rows={3}
                    placeholder="Optional, but helpful."
                    className="input"
                  />
                </div>

                <button type="submit" className="btn btn-primary btn-glow w-full justify-center">
                  Request my free call
                  <ArrowRight size={16} />
                </button>

                {done && (
                  <p
                    className="text-center rounded-2xl p-4 text-[0.92rem]"
                    style={{
                      background: "var(--color-lavender)",
                      color: "var(--color-ink)",
                    }}
                  >
                    Thank you — we received your request. Megha will reach out
                    within one business day.
                  </p>
                )}

                <p className="text-center text-[0.78rem] text-[var(--color-ink-muted)]">
                  We'll never share your information. Ever.
                </p>
              </form>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  id,
  name,
  type = "text",
  required,
}: {
  label: string;
  id: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-[0.85rem] font-medium mb-2">
        {label}
      </label>
      <input id={id} name={name} type={type} required={required} className="input" />
    </div>
  );
}
