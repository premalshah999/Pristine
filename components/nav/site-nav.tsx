"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ChevronDown, Moon, Sun, Menu, X, ArrowUpRight, Calendar } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { conditionsByCategory } from "@/lib/conditions";
import { services } from "@/lib/services";
import { Logo } from "@/components/ui/logo";

type DropdownKey = "conditions" | "services" | "about" | null;
type ThemeMode = "light" | "dark";

export function SiteNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState<DropdownKey>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") { setOpen(null); setMobileOpen(false); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    /*
     * onMouseLeave lives on <header> — not on a wrapper div.
     * mouseleave does NOT fire when moving to a descendant, even one that
     * overflows the element's border box (e.g. an absolute-positioned dropdown).
     * This is why putting onMouseLeave on the header is correct and reliable.
     */
    <header
      onMouseLeave={() => setOpen(null)}
      className={cn(
        "sticky top-0 z-[200] w-full nav-glass transition-[border-color,background] duration-300",
        scrolled
          ? "border-b"
          : "border-b border-transparent"
      )}
      style={{
        background: scrolled
          ? "color-mix(in srgb, var(--color-bone) 94%, transparent)"
          : "color-mix(in srgb, var(--color-bone) 75%, transparent)",
        borderColor: scrolled ? "var(--color-line)" : "transparent",
      }}
    >
      {/* Nav bar row */}
      <div className="mx-auto w-full px-2 md:px-3">
        <div
          className={cn(
            "flex items-center justify-between gap-4 transition-[height] duration-300",
            scrolled ? "h-[76px] md:h-[84px]" : "h-[86px] md:h-[96px]"
          )}
        >
          <div className="md:hidden">
            <Logo size={74} priority showWordmark={false} className="shrink-0" />
          </div>
          <div className="hidden md:block">
            <Logo
              size={82}
              priority
              className="shrink-0"
              wordmarkClassName="hidden md:inline text-[1.05rem] xl:text-[1.12rem]"
            />
          </div>

          {/* Desktop nav */}
          <nav className="hidden xl:flex items-center gap-0.5" aria-label="Primary">
            <NavLink href="/">Home</NavLink>
            <NavTrigger
              label="Conditions"
              active={open === "conditions"}
              onEnter={() => setOpen("conditions")}
            />
            <NavTrigger
              label="Services"
              active={open === "services"}
              onEnter={() => setOpen("services")}
            />
            <NavTrigger
              label="About"
              active={open === "about"}
              onEnter={() => setOpen("about")}
            />
            <NavLink href="/blog">Blog</NavLink>
            <NavLink href="/new-patient-special">New Patient Special</NavLink>
            <NavLink href="/shop">Shop</NavLink>
            <NavLink href="/contact">Contact</NavLink>
          </nav>

          {/* Right-side actions */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Toggle theme"
              onClick={toggle}
              className="hidden sm:inline-flex h-9 w-9 items-center justify-center rounded-full border transition-colors"
              style={{
                borderColor: "var(--color-line-strong)",
                color: "var(--color-ink-soft)",
              }}
              onMouseEnter={e => (e.currentTarget.style.background = "var(--color-canvas)")}
              onMouseLeave={e => (e.currentTarget.style.background = "")}
            >
              {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <Link
              href="/book-appointment"
              className="hidden items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium leading-none transition-colors sm:inline-flex gap-2"
              style={{
                background: "var(--color-forest)",
                color: "var(--color-linen)",
                border: "none",
              }}
            >
              <Calendar size={14} />
              Book an Appointment
            </Link>

            <button
              type="button"
              className="xl:hidden inline-flex h-9 w-9 items-center justify-center rounded-full border"
              style={{ borderColor: "var(--color-line-strong)" }}
              aria-controls="mobile-menu"
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((s) => !s)}
            >
              {mobileOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown panels — inside the header so mouse movement between
          nav triggers and panels never fires mouseleave on the header */}
      {open === "conditions" && (
        <ConditionsMega onClose={() => setOpen(null)} />
      )}
      {open === "services" && (
        <ServicesDropdown onClose={() => setOpen(null)} />
      )}
      {open === "about" && (
        <AboutDropdown onClose={() => setOpen(null)} />
      )}

      {mobileOpen && (
        createPortal(
          <MobileMenu
            theme={theme}
            onThemeToggle={toggle}
            onClose={() => setMobileOpen(false)}
          />,
          document.body
        )
      )}
    </header>
  );
}

/* ─── Primitives ─────────────────────────────────────────────── */

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 text-[0.9rem] rounded-full transition-colors"
      style={{ color: "var(--color-ink-soft)" }}
      onMouseEnter={e => (e.currentTarget.style.color = "var(--color-ink)")}
      onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink-soft)")}
    >
      {children}
    </Link>
  );
}

function NavTrigger({
  label, active, onEnter,
}: {
  label: string; active: boolean; onEnter: () => void;
}) {
  return (
    <button
      type="button"
      onMouseEnter={onEnter}
      onClick={() => onEnter()}
      aria-expanded={active}
      className="inline-flex items-center gap-1 px-3 py-2 text-[0.9rem] rounded-full transition-colors"
      style={{
        color: active ? "var(--color-forest)" : "var(--color-ink-soft)",
        background: active ? "var(--color-mint)" : "transparent",
      }}
    >
      {label}
      <ChevronDown
        size={13}
        style={{ transition: "transform 0.2s", transform: active ? "rotate(180deg)" : "none" }}
      />
    </button>
  );
}

/* ─── Dropdown shell ─────────────────────────────────────────── */

function DropPanel({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="absolute left-0 right-0 top-full drop-in"
      style={{ zIndex: 200 }}
    >
      <div className="mx-auto w-full max-w-[var(--container-page)] px-6 pb-5">
        <div
          className="rounded-2xl border overflow-hidden"
          style={{
            background: "var(--color-paper)",
            borderColor: "var(--color-line-strong)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

function PanelSidebar({ eyebrow, title, body, linkHref, linkLabel, onClose }: {
  eyebrow: string; title: React.ReactNode; body: string;
  linkHref: string; linkLabel: string; onClose: () => void;
}) {
  return (
    <div
      className="p-7 border-r"
      style={{ borderColor: "var(--color-line)", background: "var(--color-canvas)" }}
    >
      <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-sage)" }}>
        {eyebrow}
      </p>
      <h3 className="font-serif text-[1.5rem] leading-tight mb-3 tracking-tight" style={{ color: "var(--color-ink)" }}>
        {title}
      </h3>
      <p className="text-[0.87rem] leading-relaxed mb-5" style={{ color: "var(--color-ink-soft)" }}>
        {body}
      </p>
      <Link
        href={linkHref}
        onClick={onClose}
        className="inline-flex items-center gap-1.5 text-[0.84rem] font-medium"
        style={{ color: "var(--color-forest)" }}
      >
        {linkLabel}
        <ArrowUpRight size={13} />
      </Link>
    </div>
  );
}

/* ─── Conditions ─────────────────────────────────────────────── */

function ConditionsMega({ onClose }: { onClose: () => void }) {
  return (
    <DropPanel>
      <div className="grid grid-cols-12">
        <div className="col-span-3">
          <PanelSidebar
            eyebrow="Find your story"
            title={<>Conditions we <em className="italic-serif">untangle.</em></>}
            body="Common chronic patterns — each with deep, root-cause-framed clinical content."
            linkHref="/conditions"
            linkLabel="Browse all conditions"
            onClose={onClose}
          />
        </div>
        <div className="col-span-9 p-7 grid grid-cols-3 gap-x-8 gap-y-5">
          {(Object.entries(conditionsByCategory) as [string, (typeof conditionsByCategory)[keyof typeof conditionsByCategory]][])
            .filter(([, list]) => list.length)
            .map(([cat, list]) => (
              <div key={cat}>
                <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-sage)" }}>
                  {cat}
                </p>
                <ul className="space-y-2">
                  {list.map((c) => (
                    <li key={c.slug}>
                      <Link
                        href={`/conditions/${c.slug}`}
                        onClick={onClose}
                        className="group inline-flex items-baseline gap-1.5 text-[0.9rem] transition-colors"
                        style={{ color: "var(--color-ink)" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--color-forest)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--color-ink)")}
                      >
                        {c.shortName ?? c.name}
                        <ArrowUpRight size={11} className="opacity-0 group-hover:opacity-50 transition-opacity" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </DropPanel>
  );
}

/* ─── Services ───────────────────────────────────────────────── */

function ServicesDropdown({ onClose }: { onClose: () => void }) {
  return (
    <DropPanel>
      <div className="grid grid-cols-12">
        <div className="col-span-4">
          <PanelSidebar
            eyebrow="How we work"
            title={<>Five pillars of <em className="italic-serif">whole-person</em> care.</>}
            body="Testing, root-cause analysis, nutrition, coaching, lifestyle — woven together because real healing isn't one thing."
            linkHref="/services"
            linkLabel="All services"
            onClose={onClose}
          />
        </div>
        <div className="col-span-8 p-3">
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  onClick={onClose}
                  className="group flex items-start gap-4 rounded-xl p-4 transition-colors"
                  onMouseEnter={e => (e.currentTarget.style.background = "var(--color-canvas)")}
                  onMouseLeave={e => (e.currentTarget.style.background = "")}
                >
                  <span
                    className="font-mono text-[0.68rem] tracking-widest pt-0.5 w-7 shrink-0"
                    style={{ color: "var(--color-sage)" }}
                  >
                    {s.number}
                  </span>
                  <span className="flex-1">
                    <span className="font-serif text-[1.1rem] block" style={{ color: "var(--color-ink)" }}>
                      {s.shortName ?? s.name}
                    </span>
                    <span className="text-[0.84rem] block mt-0.5" style={{ color: "var(--color-ink-soft)" }}>
                      {s.tagline}
                    </span>
                  </span>
                  <ArrowUpRight
                    size={13}
                    className="mt-1.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    style={{ color: "var(--color-ink-muted)" }}
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DropPanel>
  );
}

/* ─── About ──────────────────────────────────────────────────── */

function AboutDropdown({ onClose }: { onClose: () => void }) {
  return (
    <DropPanel>
      <div className="grid grid-cols-3">
        {[
          {
            href: "/about",
            eyebrow: "Clinician",
            title: "Megha Shah",
            copy: "Physical Therapist & Functional Nutritional Counsellor — 20+ years of clinical experience rebuilding lives from the root up.",
          },
          {
            href: "/about#philosophy",
            eyebrow: "Approach",
            title: "Our philosophy",
            copy: "Bodies are intelligent. Symptoms are meaningful. Healing is possible when you stop chasing symptoms and start answering questions.",
          },
          {
            href: "/about#how",
            eyebrow: "Method",
            title: "How we practice",
            copy: "Functional medicine framework, IFM-aligned, virtual-first, and fully integrated with your existing care team.",
          },
        ].map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onClose}
            className="group block p-7 border-r last:border-r-0 transition-colors"
            style={{ borderColor: "var(--color-line)" }}
            onMouseEnter={e => (e.currentTarget.style.background = "var(--color-canvas)")}
            onMouseLeave={e => (e.currentTarget.style.background = "")}
          >
            <p className="font-mono text-[0.68rem] tracking-[0.2em] uppercase mb-3" style={{ color: "var(--color-sage)" }}>
              {item.eyebrow}
            </p>
            <h4 className="font-serif text-[1.35rem] leading-tight mb-2 tracking-tight" style={{ color: "var(--color-ink)" }}>
              {item.title}
            </h4>
            <p className="text-[0.87rem] leading-relaxed" style={{ color: "var(--color-ink-soft)" }}>
              {item.copy}
            </p>
            <ArrowUpRight
              size={13}
              className="mt-3 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: "var(--color-forest)" }}
            />
          </Link>
        ))}
      </div>
    </DropPanel>
  );
}

/* ─── Mobile menu ────────────────────────────────────────────── */

function MobileMenu({
  theme,
  onThemeToggle,
  onClose,
}: {
  theme: ThemeMode;
  onThemeToggle: () => void;
  onClose: () => void;
}) {
  const primaryLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/new-patient-special", label: "New patient special" },
    { href: "/shop", label: "Shop" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div
      id="mobile-menu"
      className="fixed inset-0 z-[1000] overflow-y-auto overscroll-contain xl:hidden"
      style={{ background: "var(--color-bone)", zIndex: 1000 }}
      role="dialog"
      aria-modal="true"
      aria-label="Mobile navigation"
    >
      <div className="sticky top-0 z-10 flex h-[86px] items-center justify-between border-b px-3 backdrop-blur-md" style={{ borderColor: "var(--color-line)", background: "color-mix(in srgb, var(--color-bone) 94%, transparent)" }}>
        <Logo size={74} priority showWordmark={false} onClick={onClose} />
        <button
          type="button"
          aria-label="Close menu"
          onClick={onClose}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border"
          style={{
            borderColor: "var(--color-line-strong)",
            color: "var(--color-ink)",
          }}
        >
          <X size={18} />
        </button>
      </div>

      <div className="space-y-5 px-5 py-6 pb-[calc(1.5rem+env(safe-area-inset-bottom))]">
        <div className="grid grid-cols-2 gap-px overflow-hidden border bg-[var(--color-line)]" style={{ borderColor: "var(--color-line)" }}>
          {primaryLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={onClose}
              className="min-h-12 bg-[var(--color-paper)] px-4 py-3 text-[0.95rem] font-medium transition-colors hover:bg-[var(--color-canvas)]"
              style={{ color: "var(--color-ink)" }}
            >
              {label}
            </Link>
          ))}
        </div>

        <MobileDisclosure title="Conditions" href="/conditions" onClose={onClose}>
          <div className="grid gap-5">
            {(Object.entries(conditionsByCategory) as [string, (typeof conditionsByCategory)[keyof typeof conditionsByCategory]][])
              .filter(([, list]) => list.length)
              .map(([cat, list]) => (
                <div key={cat}>
                  <p className="font-mono text-[0.68rem] uppercase mb-2" style={{ color: "var(--color-sage)" }}>
                    {cat}
                  </p>
                  <ul className="grid gap-px overflow-hidden border bg-[var(--color-line)]" style={{ borderColor: "var(--color-line)" }}>
                    {list.map((c) => (
                      <li key={c.slug}>
                        <Link
                          href={`/conditions/${c.slug}`}
                          onClick={onClose}
                          className="block bg-[var(--color-paper)] px-4 py-3 text-[0.95rem] transition-colors hover:bg-[var(--color-canvas)]"
                          style={{ color: "var(--color-ink)" }}
                        >
                          {c.shortName ?? c.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </MobileDisclosure>

        <MobileDisclosure title="Services" href="/services" onClose={onClose}>
          <ul className="grid gap-px overflow-hidden border bg-[var(--color-line)]" style={{ borderColor: "var(--color-line)" }}>
            {services.map((s) => (
              <li key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  onClick={onClose}
                  className="flex min-h-12 items-center gap-3 bg-[var(--color-paper)] px-4 py-3 text-[0.95rem] transition-colors hover:bg-[var(--color-canvas)]"
                  style={{ color: "var(--color-ink)" }}
                >
                  <span className="font-mono text-[0.7rem]" style={{ color: "var(--color-sage)" }}>
                    {s.number}
                  </span>
                  {s.shortName ?? s.name}
                </Link>
              </li>
            ))}
          </ul>
        </MobileDisclosure>

        <button
          type="button"
          onClick={onThemeToggle}
          className="flex min-h-12 w-full items-center justify-between border bg-[var(--color-paper)] px-4 py-3 text-left text-[0.95rem] font-medium"
          style={{ borderColor: "var(--color-line)", color: "var(--color-ink)" }}
        >
          <span>{theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}</span>
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>

        <Link
          href="/book-appointment"
          onClick={onClose}
          className="btn btn-primary w-full justify-center gap-2"
          style={{ background: "var(--color-forest)", color: "var(--color-linen)", border: "none" }}
        >
          <Calendar size={15} />
          Book an Appointment
        </Link>
      </div>
    </div>
  );
}

function MobileDisclosure({
  title, href, onClose, children, defaultOpen = false,
}: {
  title: string;
  href: string;
  onClose: () => void;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  return (
    <details
      className="group border bg-[var(--color-paper)]"
      style={{ borderColor: "var(--color-line)" }}
      open={defaultOpen}
    >
      <summary
        className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-4 py-3 font-serif text-[1.45rem] leading-tight"
        style={{ color: "var(--color-ink)" }}
      >
        <span>{title}</span>
        <ChevronDown
          size={18}
          className="shrink-0 transition-transform group-open:rotate-180"
          style={{ color: "var(--color-ink-muted)" }}
        />
      </summary>
      <div className="border-t p-4" style={{ borderColor: "var(--color-line)" }}>
        <Link
          href={href}
          onClick={onClose}
          className="mb-4 inline-flex items-center gap-1.5 text-[0.88rem] font-medium underline underline-offset-4"
          style={{ color: "var(--color-forest)" }}
        >
          View all {title.toLowerCase()}
          <ArrowUpRight size={13} />
        </Link>
        {children}
      </div>
    </details>
  );
}
