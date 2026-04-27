import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70vh] flex items-center">
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6 text-center">
        <p className="eyebrow mb-5">— 404</p>
        <h1 className="display-xl max-w-[14ch] mx-auto">
          That page <em className="italic-serif">isn't here.</em>
        </h1>
        <p className="lede mt-7 max-w-[48ch] mx-auto">
          You may have followed an old link, or we may have moved something.
          Either way — let's get you somewhere useful.
        </p>
        <div className="mt-9 flex justify-center gap-3 flex-wrap">
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
          <Link href="/conditions" className="btn btn-ghost">
            Browse conditions
          </Link>
        </div>
      </div>
    </section>
  );
}
