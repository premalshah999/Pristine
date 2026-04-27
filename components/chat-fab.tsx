"use client";

import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";

type Msg = { role: "user" | "bot"; text: string };

const seed: Msg[] = [
  {
    role: "bot",
    text: "Hi — I'm Pristine AI. Ask me anything about functional medicine, your symptoms, or what to expect from working with Dr. Shah.",
  },
];

const STUB: { match: RegExp; reply: string }[] = [
  {
    match: /thyroid|tsh|hashimoto|t3|t4/i,
    reply:
      "Standard labs usually only run TSH. To see the whole picture you'd want Free T3, Free T4, Reverse T3, and TPO/TG antibodies — plus cofactors like ferritin, B12, vitamin D, selenium, and zinc. Want me to send you to our deeper Thyroid page?",
  },
  {
    match: /weight|metabolism|insulin|diabetes|sugar|a1c|pcos/i,
    reply:
      "Metabolic stuckness is rarely about willpower. The bottlenecks are usually insulin resistance, cortisol, sleep, and gut inflammation. Functional testing (fasting insulin, HOMA-IR, CGM) gives a far clearer picture than weight alone.",
  },
  {
    match: /gut|bloat|ibs|reflux|sibo|food sensitivit/i,
    reply:
      "Gut symptoms have many possible roots — SIBO, dysbiosis, low stomach acid, sensitivities, motility, vagal tone. The strongest first move is comprehensive testing rather than guessing — a stool panel and breath test can shortcut years of trial and error.",
  },
  {
    match: /anxiety|mood|panic|depress/i,
    reply:
      "Anxiety is often partly biochemical: blood sugar swings, gut inflammation, B-vitamin pathways, cortisol. Therapy still matters — but addressing physiology often lets the nervous system finally feel safe.",
  },
  {
    match: /hormone|period|menopause|cycle|fertility/i,
    reply:
      "Hormones rarely act alone. Cortisol, insulin, and the thyroid all weigh on estrogen and progesterone. Cycle-mapped testing (DUTCH) reveals the real driver — and birth control isn't the only path forward.",
  },
  {
    match: /migraine|headache/i,
    reply:
      "Migraine triggers are usually a combination — magnesium, hormones, histamine, glucose dips, sleep. Mapping yours specifically is the work; once we have the map, prevention becomes precise.",
  },
  {
    match: /book|appointment|call|consult|schedule/i,
    reply:
      "You can book a free 20-minute discovery call directly — head to our /book page or click 'Book a Call' in the nav. Megha personally reads every request.",
  },
  {
    match: /cost|price|insurance|fee|payment/i,
    reply:
      "The discovery call is always free. Functional medicine isn't typically covered by insurance, but Megha will be transparent about pricing on your initial call. Most patients invest $500–$1,800 in initial testing depending on case complexity.",
  },
];

const DEFAULT =
  "That's a great question. Functional medicine looks at the whole picture — labs, lifestyle, history, timing — rather than treating symptoms in isolation. For something this specific, the best next step is a free 20-minute call with Dr. Shah, where she can ask the right follow-up questions.";

export function ChatFab() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Msg[]>(seed);
  const [text, setText] = useState("");
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  const send = (e: React.FormEvent) => {
    e.preventDefault();
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", text: q }]);
    setText("");
    setTimeout(() => {
      const hit = STUB.find((s) => s.match.test(q));
      setMessages((m) => [...m, { role: "bot", text: hit ? hit.reply : DEFAULT }]);
    }, 500);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        aria-label="Open Pristine AI chat"
        className="btn-glow fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full text-[var(--color-bone)] shadow-lg transition-transform hover:scale-105"
        style={{ background: "var(--color-ink)" }}
      >
        {open ? <X size={22} /> : <MessageCircle size={22} />}
      </button>

      {open && (
        <aside
          className="fixed bottom-24 right-5 z-50 flex w-[min(92vw,380px)] flex-col rounded-3xl border bg-[var(--color-paper)] shadow-lg overflow-hidden drop-in"
          style={{
            borderColor: "var(--color-line)",
            height: "min(560px, calc(100vh - 8rem))",
          }}
        >
          <header
            className="flex items-center justify-between px-4 py-3.5 border-b"
            style={{ borderColor: "var(--color-line)" }}
          >
            <div>
              <p className="font-medium text-[0.92rem] flex items-center gap-2">
                <span
                  className="ping inline-block h-2 w-2 rounded-full"
                  style={{ background: "var(--color-sage-deep)" }}
                />
                Pristine AI
              </p>
              <p className="text-[0.7rem] text-[var(--color-ink-muted)]">
                Educational · not a substitute for care
              </p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close chat"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full border hover:bg-[var(--color-bone-2)]"
              style={{ borderColor: "var(--color-line-strong)" }}
            >
              <X size={14} />
            </button>
          </header>

          <div ref={bodyRef} className="flex-1 overflow-y-auto p-4 space-y-2.5">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.role === "user"
                    ? "ml-auto rounded-2xl rounded-br-sm px-3.5 py-2.5 text-[0.9rem] max-w-[85%]"
                    : "mr-auto rounded-2xl rounded-bl-sm px-3.5 py-2.5 text-[0.9rem] max-w-[88%] bg-[var(--color-bone-2)]"
                }
                style={
                  m.role === "user"
                    ? { background: "var(--color-ink)", color: "var(--color-bone)" }
                    : undefined
                }
              >
                {m.text}
              </div>
            ))}
          </div>

          <form
            onSubmit={send}
            className="flex gap-2 p-3 border-t"
            style={{ borderColor: "var(--color-line)" }}
          >
            <input
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Type your question…"
              className="input flex-1 rounded-full"
            />
            <button
              type="submit"
              aria-label="Send"
              className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-[var(--color-bone)] transition-transform hover:scale-105"
              style={{ background: "var(--color-ink)" }}
            >
              <Send size={14} />
            </button>
          </form>
        </aside>
      )}
    </>
  );
}
