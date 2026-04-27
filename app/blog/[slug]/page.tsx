import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft, Clock, Calendar, User } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { CtaBand } from "@/components/sections/cta-band";
import { posts, getPost, getPostSlugs, formatDate } from "@/lib/blog";
import type { BlogSection } from "@/lib/blog";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `https://pristinefunctionalhealth.com/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.description,
    keywords: post.tags,
    authors: [{ name: post.author.name }],
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author.name],
      tags: post.tags,
      url,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
    alternates: { canonical: url },
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 2);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.credentials,
    },
    publisher: {
      "@type": "Organization",
      name: "Pristine Functional Health",
      url: "https://pristinefunctionalhealth.com",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://pristinefunctionalhealth.com/blog/${post.slug}`,
    },
    keywords: post.tags.join(", "),
    articleSection: post.category,
    timeRequired: `PT${post.readingTime}M`,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* HERO */}
      <section className="pt-20 md:pt-28 pb-12 md:pb-20">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <Reveal>
            {/* Breadcrumb */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-[0.82rem] mb-10 transition-colors hover:text-[var(--color-forest)]"
              style={{ color: "var(--color-ink-muted)" }}
            >
              <ArrowLeft size={13} />
              All articles
            </Link>

            {/* Category badge */}
            <div className="mb-6">
              <span
                className="font-mono text-[0.68rem] tracking-[0.18em] uppercase px-3 py-1.5 rounded-full"
                style={{
                  background: "var(--color-mint)",
                  color: "var(--color-forest)",
                }}
              >
                {post.category}
              </span>
            </div>

            {/* Title */}
            <h1 className="display max-w-[26ch] leading-[1.1]">{post.title}</h1>

            {/* Description lede */}
            <p className="lede mt-7 max-w-[62ch]">{post.description}</p>

            {/* Meta strip */}
            <div
              className="flex flex-wrap items-center gap-6 mt-8 pt-7 border-t text-[0.83rem]"
              style={{ borderColor: "var(--color-line)", color: "var(--color-ink-muted)" }}
            >
              <span className="flex items-center gap-2">
                <User size={13} />
                {post.author.name}, {post.author.credentials}
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={13} />
                {formatDate(post.publishedAt)}
              </span>
              <span className="flex items-center gap-2">
                <Clock size={13} />
                {post.readingTime} min read
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BODY */}
      <section className="pb-20 md:pb-28">
        <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
          <div className="grid grid-cols-12 gap-x-12">
            {/* Article content */}
            <article className="col-span-12 lg:col-span-8 prose-article">
              {post.body.map((section, idx) => (
                <BlogSectionRenderer key={idx} section={section} />
              ))}
            </article>

            {/* Sticky sidebar */}
            <aside className="hidden lg:block col-span-4">
              <div className="sticky top-28 space-y-6">
                {/* Author card */}
                <div
                  className="rounded-2xl border p-6"
                  style={{
                    borderColor: "var(--color-line)",
                    background: "var(--color-bone-2)",
                  }}
                >
                  <p className="eyebrow mb-4">About the author</p>
                  <p
                    className="font-serif text-[1.25rem] leading-snug mb-1"
                    style={{ color: "var(--color-ink)" }}
                  >
                    {post.author.name}
                  </p>
                  <p
                    className="text-[0.82rem] mb-4"
                    style={{ color: "var(--color-ink-muted)" }}
                  >
                    {post.author.credentials}
                  </p>
                  <p
                    className="text-[0.88rem] leading-relaxed"
                    style={{ color: "var(--color-ink-soft)" }}
                  >
                    Dr. Shah is a Physical Therapist and Certified Functional
                    Nutritional Counsellor with 20+ years of clinical experience.
                    She founded Pristine Functional Health to offer the depth of
                    investigation that standard medicine often cannot.
                  </p>
                </div>

                {/* Tags */}
                <div
                  className="rounded-2xl border p-6"
                  style={{
                    borderColor: "var(--color-line)",
                    background: "var(--color-bone-2)",
                  }}
                >
                  <p className="eyebrow mb-4">Topics</p>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[0.78rem] px-2.5 py-1 rounded-full border"
                        style={{
                          borderColor: "var(--color-line-strong)",
                          color: "var(--color-ink-soft)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Free call CTA */}
                <div
                  className="rounded-2xl p-6"
                  style={{ background: "var(--color-forest)" }}
                >
                  <p
                    className="font-mono text-[0.68rem] tracking-[0.18em] uppercase mb-3"
                    style={{ color: "var(--color-mint)" }}
                  >
                    Free discovery call
                  </p>
                  <p
                    className="font-serif text-[1.15rem] leading-snug mb-4"
                    style={{ color: "var(--color-linen)" }}
                  >
                    Talk to Dr. Shah about your situation — no commitment.
                  </p>
                  <Link
                    href="/book-appointment"
                    className="inline-flex items-center gap-2 text-[0.88rem] font-medium px-4 py-2.5 rounded-xl transition-all hover:opacity-90"
                    style={{ background: "var(--color-mint)", color: "var(--color-forest)" }}
                  >
                    Book your free call
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* RELATED POSTS */}
      {related.length > 0 && (
        <section
          className="py-16 md:py-24 border-t"
          style={{ borderColor: "var(--color-line)", background: "var(--color-bone-2)" }}
        >
          <div className="mx-auto w-full max-w-[var(--container-page)] px-6">
            <Reveal>
              <p className="eyebrow mb-4">— Continue reading</p>
              <h2 className="title text-[2rem] leading-[1.1] max-w-[28ch]">
                More on{" "}
                <em className="italic-serif">{post.category.toLowerCase()}.</em>
              </h2>
            </Reveal>
            <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {related.map((p, idx) => (
                <Reveal key={p.slug} delay={idx * 80}>
                  <li>
                    <Link
                      href={`/blog/${p.slug}`}
                      className="group block card-edit p-7 h-full transition-all hover:-translate-y-0.5"
                      style={{ background: "var(--color-paper)" }}
                    >
                      <p
                        className="font-mono text-[0.7rem] tracking-widest uppercase mb-3"
                        style={{ color: "var(--color-ink-muted)" }}
                      >
                        {p.readingTime} min read · {formatDate(p.publishedAt)}
                      </p>
                      <h3
                        className="font-serif text-[1.3rem] leading-snug mb-3 group-hover:text-[var(--color-forest)] transition-colors"
                        style={{ color: "var(--color-ink)" }}
                      >
                        {p.title}
                      </h3>
                      <p
                        className="text-[0.9rem] leading-relaxed"
                        style={{ color: "var(--color-ink-soft)" }}
                      >
                        {p.description}
                      </p>
                    </Link>
                  </li>
                </Reveal>
              ))}
            </ul>
            <Reveal className="mt-8 text-center">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-[0.9rem] underline underline-offset-4"
                style={{
                  color: "var(--color-ink-soft)",
                  textDecorationColor: "var(--color-line-strong)",
                }}
              >
                View all articles
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      <CtaBand
        eyebrow="Ready to find your root cause?"
        title="Your first conversation is free."
        subtitle="A 20-minute call with Dr. Megha Shah. No commitment, no sales pressure — just an honest conversation about whether functional medicine is right for you."
        cta="Book your free call"
        href="/book-appointment"
      />
    </>
  );
}

function BlogSectionRenderer({ section }: { section: BlogSection }) {
  switch (section.type) {
    case "heading":
      return (
        <h2
          className="font-serif text-[1.9rem] md:text-[2.2rem] leading-[1.1] tracking-tight mt-14 mb-5"
          style={{ color: "var(--color-ink)" }}
        >
          {section.content}
        </h2>
      );

    case "subheading":
      return (
        <h3
          className="font-serif text-[1.35rem] md:text-[1.55rem] leading-[1.2] tracking-tight mt-10 mb-4"
          style={{ color: "var(--color-ink)" }}
        >
          {section.content}
        </h3>
      );

    case "paragraph":
      return (
        <p
          className="text-[1.02rem] leading-[1.75] mb-5"
          style={{ color: "var(--color-ink-soft)" }}
        >
          {section.content}
        </p>
      );

    case "list":
      return (
        <ul className="mb-6 space-y-3 pl-0 list-none">
          {section.items?.map((item, i) => (
            <li
              key={i}
              className="flex items-start gap-3 text-[0.97rem] leading-[1.7]"
              style={{ color: "var(--color-ink-soft)" }}
            >
              <span
                className="mt-[0.4em] inline-block h-1.5 w-1.5 rounded-full shrink-0"
                style={{ background: "var(--color-sage-deep, var(--color-forest))" }}
              />
              {item}
            </li>
          ))}
        </ul>
      );

    case "callout":
      return (
        <div
          className="my-8 rounded-2xl border-l-4 px-7 py-6"
          style={{
            borderLeftColor: "var(--color-forest)",
            background: "var(--color-mint)",
          }}
        >
          <p
            className="text-[0.97rem] leading-[1.7] font-medium"
            style={{ color: "var(--color-forest)" }}
          >
            {section.content}
          </p>
        </div>
      );

    case "divider":
      return (
        <hr
          className="my-12"
          style={{ borderColor: "var(--color-line)", borderTopWidth: 1 }}
        />
      );

    default:
      return null;
  }
}
