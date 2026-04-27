import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-16 md:pt-24 pb-24 md:pb-36 min-h-[720px]">
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <span className="blob float" style={{ top: "-200px", left: "-160px", width: 620, height: 620, background: "var(--color-mint)" }} />
        <span className="blob float" style={{ top: "120px", right: "-140px", width: 540, height: 540, background: "var(--color-tan)", animationDelay: "-8s" }} />
        <span className="blob float" style={{ bottom: "-180px", left: "30%", width: 420, height: 420, background: "var(--color-sage)", animationDelay: "-14s", opacity: 0.35 }} />
      </div>

      {/* Logo — absolutely positioned in section, fully unconstrained */}
      <div
        className="hidden xl:flex flex-col items-center justify-center text-center"
        style={{
          position: "absolute",
          top: "35%",
          right: "12%",
          width: "clamp(350px, 35vw, 500px)",
          transform: "translateY(-50%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/pristine-logo-mark.png"
          alt="Pristine Functional Health Logo Mark"
          style={{ width: "100%", height: "auto" }}
        />
      </div>

      <div className="mx-auto w-full max-w-[var(--container-page)] px-6 relative z-10">
        {/* Text — constrained left so logo never overlaps */}
        <div className="max-w-[640px]">
          <Reveal>
            <h1 className="display-xl max-w-[18ch]">
              You&apos;re not broken.
              <br />
              You&apos;ve been told the
              <br />
              <em className="italic-serif">wrong story</em> about your body.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p className="lede max-w-[52ch] mt-8">
              Pristine Functional Health helps you find the real reason you
              don&apos;t feel like yourself — and rebuild from the root up. No
              more <em className="italic-serif">&ldquo;your labs look fine.&rdquo;</em>{" "}
              No dismissals. Just answers, a plan, and a clinician who actually listens.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link href="/book-appointment" className="btn btn-primary btn-glow">
                Book your free call
                <ArrowRight size={16} />
              </Link>
              <Link href="/conditions" className="btn btn-ghost">
                Explore conditions we treat
              </Link>
            </div>
          </Reveal>

          <Reveal delay={260} className="mt-12">
            <div
              className="border-t pt-7 grid grid-cols-3 gap-6 max-w-[440px]"
              style={{ borderColor: "var(--color-line)" }}
            >
              <StatItem n="20+" l="years of clinical care" />
              <StatItem n="100+" l="lab markers mapped" />
              <StatItem n="14" l="root-cause categories" />
            </div>
          </Reveal>
        </div>
      </div>

      {/* Gradient fade into next section */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-40"
        style={{
          background: "linear-gradient(to bottom, transparent 0%, var(--color-bone) 100%)",
        }}
      />
    </section>
  );
}

function StatItem({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <dt className="font-serif text-[1.9rem] leading-none tracking-tight" style={{ color: "var(--color-forest)" }}>
        {n}
      </dt>
      <dd className="text-[0.8rem] mt-1.5 leading-snug" style={{ color: "var(--color-ink-muted)" }}>
        {l}
      </dd>
    </div>
  );
}
