"use client";

import { useEffect } from "react";
import Link from "next/link";
import { ArrowLeft, Calendar, Shield, Clock, Video } from "lucide-react";
import { Reveal } from "@/components/reveal";

declare global {
  interface Window {
    Cal?: (...args: unknown[]) => void;
  }
}

function useCalEmbed() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.innerHTML = `
      (function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar); };
        let d = C.document;
        C.Cal = C.Cal || function () {
          let cal = C.Cal; let ar = arguments;
          if (!cal.loaded) {
            cal.ns = {}; cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1]; api.q = api.q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
      })(window, "https://app.cal.com/embed/embed.js", "init");
      Cal("init", "free-functional-health-consultation", {origin:"https://app.cal.com"});
      Cal.ns["free-functional-health-consultation"]("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    `;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);
}

export default function BookAppointmentPage() {
  useCalEmbed();

  return (
    <>
      {/* HERO */}
      <section className="pt-20 md:pt-28 pb-10">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-[0.84rem] mb-8 transition-colors hover:text-[var(--color-forest)]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              <ArrowLeft size={14} />
              Back to home
            </Link>
            <p className="eyebrow mb-5">— Book an appointment</p>
            <h1 className="display-xl max-w-[18ch]">
              Schedule your{" "}
              <em className="italic-serif">free consultation.</em>
            </h1>
            <p className="lede mt-6 max-w-[56ch]">
              A 20-minute call with Dr. Megha Shah — no commitment, no waitlist.
              Pick a time that works for you and let's figure out your next step together.
            </p>
          </Reveal>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="pb-24">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-12 gap-y-10 gap-x-10 items-start">

            {/* Left: info + CTA */}
            <Reveal className="col-span-12 lg:col-span-5">
              <div
                className="rounded-2xl border p-8 md:p-10"
                style={{ background: "var(--color-paper)", borderColor: "var(--color-line)" }}
              >
                <p
                  className="font-mono text-[0.68rem] tracking-[0.18em] uppercase mb-6"
                  style={{ color: "var(--color-sage)" }}
                >
                  Free · 20 minutes · Virtual
                </p>

                <h2
                  className="font-serif text-[1.8rem] leading-[1.1] tracking-tight mb-4"
                  style={{ color: "var(--color-ink)" }}
                >
                  Free Functional Health Consultation
                </h2>

                <p
                  className="text-[0.97rem] leading-[1.7] mb-8"
                  style={{ color: "var(--color-ink-soft)" }}
                >
                  We'll talk through your symptoms, your history, and what you've
                  already tried. You'll leave with clarity on whether functional
                  medicine is the right fit — and if it is, exactly where we'd start.
                </p>

                <ul className="space-y-4 mb-8">
                  {[
                    { icon: Video, text: "Secure video call — from anywhere" },
                    { icon: Clock, text: "20 minutes, no rushing" },
                    { icon: Shield, text: "Completely free, no obligation" },
                    { icon: Calendar, text: "Evenings & weekends available" },
                  ].map(({ icon: Icon, text }) => (
                    <li
                      key={text}
                      className="flex items-center gap-3 text-[0.93rem]"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      <span
                        className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full"
                        style={{ background: "var(--color-mint)" }}
                      >
                        <Icon size={14} style={{ color: "var(--color-forest)" }} />
                      </span>
                      {text}
                    </li>
                  ))}
                </ul>

                {/* Cal element-click trigger button */}
                <button
                  type="button"
                  data-cal-link="megha.shah/free-functional-health-consultation"
                  data-cal-namespace="free-functional-health-consultation"
                  data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true"}'
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl px-6 py-4 text-[1rem] font-medium transition-opacity hover:opacity-90"
                  style={{
                    background: "var(--color-forest)",
                    color: "var(--color-linen)",
                  }}
                >
                  <Calendar size={17} />
                  Book your free call
                </button>

                <p
                  className="text-[0.78rem] text-center mt-4"
                  style={{ color: "var(--color-ink-muted)" }}
                >
                  Powered by Cal.com · HIPAA-safe scheduling
                </p>
              </div>
            </Reveal>

            {/* Right: what to expect */}
            <Reveal className="col-span-12 lg:col-span-7" delay={100}>
              <div className="space-y-4">
                <p className="eyebrow mb-6">— What to expect</p>

                {[
                  {
                    n: "01",
                    h: "You'll tell us what's been going on.",
                    p: "Share your symptoms, your history, and whatever you've already tried. There's no judgment — and no seven-minute clock.",
                  },
                  {
                    n: "02",
                    h: "We'll be honest about fit.",
                    p: "We'll tell you directly whether functional medicine is likely to help your situation — and if there's a better first step, we'll say so.",
                  },
                  {
                    n: "03",
                    h: "You'll leave with a clear next step.",
                    p: "Not a vague 'we'll follow up.' You'll know exactly what we'd investigate first and what the path forward looks like.",
                  },
                  {
                    n: "04",
                    h: "No pressure, ever.",
                    p: "This is an honest conversation. We only take on patients we genuinely believe we can help — and we'll tell you either way.",
                  },
                ].map((item) => (
                  <div
                    key={item.n}
                    className="card-edit p-6 md:p-7 flex items-start gap-4"
                    style={{ background: "var(--color-paper)" }}
                  >
                    <span
                      className="font-mono text-[0.7rem] tracking-widest pt-1.5 w-8 shrink-0"
                      style={{ color: "var(--color-lavender-deep)" }}
                    >
                      {item.n}
                    </span>
                    <div>
                      <h3
                        className="font-serif text-[1.2rem] leading-snug mb-2"
                        style={{ color: "var(--color-ink)" }}
                      >
                        {item.h}
                      </h3>
                      <p
                        className="text-[0.93rem] leading-relaxed"
                        style={{ color: "var(--color-ink-soft)" }}
                      >
                        {item.p}
                      </p>
                    </div>
                  </div>
                ))}

                <div
                  className="rounded-2xl border px-6 py-5 mt-2"
                  style={{ borderColor: "var(--color-line)", background: "var(--color-bone-2)" }}
                >
                  <p
                    className="text-[0.85rem] leading-relaxed"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    <strong style={{ color: "var(--color-ink)" }}>Prefer email?</strong>{" "}
                    Reach Dr. Shah directly at{" "}
                    <a
                      href="mailto:drmjshah19@gmail.com"
                      className="underline underline-offset-2 hover:text-[var(--color-forest)] transition-colors"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      drmjshah19@gmail.com
                    </a>{" "}
                    or call{" "}
                    <a
                      href="tel:+12406763079"
                      className="underline underline-offset-2 hover:text-[var(--color-forest)] transition-colors"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      240-676-3079
                    </a>
                    .
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
