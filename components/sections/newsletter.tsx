"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [done, setDone] = useState(false);

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setDone(true);
    setEmail("");
    setTimeout(() => setDone(false), 6000);
  };

  return (
    <section
      className="py-16 md:py-24 border-t"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <Reveal>
          <div
            className="grid grid-cols-12 gap-8 md:gap-12 items-center rounded-[24px] border p-8 md:p-12"
            style={{
              borderColor: "var(--color-line)",
              background: "var(--color-paper)",
            }}
          >
            <div className="col-span-12 md:col-span-7">
              <p className="eyebrow mb-4">Free monthly letter</p>
              <h3 className="title text-[1.8rem] md:text-[2.2rem] leading-[1.1] mb-3">
                Heal your body — naturally,
                <br />
                <em className="italic-serif">with science behind it.</em>
              </h3>
              <p className="text-[var(--color-ink-soft)] max-w-[54ch]">
                One thoughtful email a month. A root-cause topic, a practical
                takeaway, and an invitation to our next free webinar. No spam.
                No selling. Ever.
              </p>
            </div>
            <form
              onSubmit={submit}
              className="col-span-12 md:col-span-5 flex flex-col sm:flex-row gap-2"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@email.com"
                aria-label="Email address"
                required
                className="input rounded-full flex-1"
              />
              <button
                type="submit"
                disabled={done}
                className="btn btn-primary disabled:opacity-70"
              >
                {done ? (
                  <>
                    <Check size={14} />
                    Subscribed
                  </>
                ) : (
                  <>
                    Subscribe
                    <ArrowRight size={14} />
                  </>
                )}
              </button>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
