import Link from "next/link";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { posts, formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — Functional Medicine Insights",
  description:
    "Evidence-informed articles on functional medicine, root-cause testing, thyroid health, gut function, hormones, and living well — from Dr. Megha Shah, PT, CFNC.",
  openGraph: {
    title: "Functional Medicine Blog · Pristine Functional Health",
    description:
      "Evidence-informed articles on functional medicine, root-cause testing, thyroid health, gut function, and more.",
    type: "website",
  },
};

export default function BlogIndexPage() {
  const sorted = [...posts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      {/* HERO */}
      <section className="pt-20 md:pt-28 pb-16 md:pb-24">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            <p className="eyebrow mb-6">— Insights</p>
            <h1 className="display-xl max-w-[22ch]">
              The research. The context.{" "}
              <em className="italic-serif">The truth.</em>
            </h1>
            <p className="lede mt-7 max-w-[58ch]">
              Evidence-informed articles written for people who are tired of vague answers.
              Every post is grounded in clinical practice and the science of root-cause medicine.
            </p>
          </Reveal>
        </div>
      </section>

      {/* POST GRID */}
      <section
        className="py-16 md:py-24 border-t"
        style={{ borderColor: "var(--color-line)", background: "var(--color-bone-2)" }}
      >
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {sorted.map((post, idx) => (
              <Reveal key={post.slug} delay={idx * 80}>
                <li>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block card-edit h-full p-8 md:p-10 transition-all hover:-translate-y-0.5"
                    style={{ background: "var(--color-paper)" }}
                  >
                    {/* Category + reading time */}
                    <div className="flex items-center gap-3 mb-5">
                      <span
                        className="font-mono text-[0.68rem] tracking-[0.18em] uppercase px-2.5 py-1 rounded-full"
                        style={{
                          background: "var(--color-mint)",
                          color: "var(--color-forest)",
                        }}
                      >
                        {post.category}
                      </span>
                      <span
                        className="font-mono text-[0.72rem]"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        {post.readingTime} min read
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="font-serif text-[1.5rem] md:text-[1.75rem] leading-[1.15] tracking-tight mb-4 group-hover:text-[var(--color-forest)] transition-colors"
                      style={{ color: "var(--color-ink)" }}
                    >
                      {post.title}
                    </h2>

                    {/* Description */}
                    <p
                      className="text-[0.95rem] leading-relaxed mb-6"
                      style={{ color: "var(--color-ink-soft)" }}
                    >
                      {post.description}
                    </p>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-5 border-t" style={{ borderColor: "var(--color-line)" }}>
                      <div>
                        <p
                          className="text-[0.82rem] font-medium"
                          style={{ color: "var(--color-ink)" }}
                        >
                          {post.author.name}
                        </p>
                        <p
                          className="text-[0.78rem]"
                          style={{ color: "var(--color-ink-muted)" }}
                        >
                          {post.author.credentials} · {formatDate(post.publishedAt)}
                        </p>
                      </div>
                      <span
                        className="inline-flex items-center gap-1.5 text-[0.85rem] font-medium group-hover:gap-2.5 transition-all"
                        style={{ color: "var(--color-forest)" }}
                      >
                        Read
                        <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </li>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <CtaBand
        eyebrow="Questions about your health?"
        title="A 20-minute call can change the whole direction."
        subtitle="Talk to Dr. Megha Shah directly. Free, no obligation — just clarity about whether functional medicine is the right next step for you."
      />
    </>
  );
}
