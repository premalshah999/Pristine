import Link from "next/link";
import { Reveal } from "@/components/reveal";
import { ArrowRight } from "lucide-react";

export function Special() {
  return (
    <section
      id="special"
      className="py-16 md:py-24 border-t"
      style={{ borderColor: "var(--color-line)" }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
        <Reveal>
          <div
            className="relative overflow-hidden rounded-[36px] px-8 md:px-16 py-16 md:py-24 text-center"
            style={{
              background:
                "linear-gradient(135deg, #CBDED3 0%, #EDF3F0 45%, #D2C49E 100%)",
              color: "var(--color-forest)",
            }}
          >
            <div
              aria-hidden
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(800px 240px at 50% -20%, rgba(255,255,255,0.50), transparent 70%)",
              }}
            />
            <p
              className="font-mono text-[0.72rem] tracking-[0.22em] uppercase mb-6 relative z-10"
              style={{ color: "rgba(59,98,85,0.70)" }}
            >
              <span
                className="inline-block h-2 w-2 rounded-full mr-2 align-middle"
                style={{ background: "rgba(59,98,85,0.60)" }}
              />
              New patient special
            </p>
            <h2
              className="font-serif text-[clamp(2.4rem,5vw,4rem)] leading-[1.04] tracking-[-0.03em] relative z-10"
              style={{ color: "#2B3830" }}
            >
              Your first call is on us.
            </h2>
            <p
              className="text-[1.05rem] md:text-[1.2rem] leading-[1.55] max-w-[60ch] mx-auto mt-6 relative z-10"
              style={{ color: "rgba(43,56,48,0.80)" }}
            >
              A free 20-minute discovery call with Dr. Megha. No commitment.
              No upsell. Just an honest conversation about whether we can help —
              and what the real next step might be.
            </p>
            <div className="mt-10 flex flex-col items-center gap-3 relative z-10">
              <Link
                href="/book-appointment"
                className="btn btn-glow"
                style={{ background: "#3B6255", color: "#E2DFDA" }}
              >
                Claim your free call
                <ArrowRight size={16} />
              </Link>
              <p
                className="font-mono text-[0.72rem] tracking-[0.18em] uppercase"
                style={{ color: "rgba(43,56,48,0.55)" }}
              >
                Limited spots each week · personally held by Dr. Shah
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
