"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Loader2, Bot } from "lucide-react";
import { useLocale } from "@/components/i18n/LocaleProvider";
import { chat } from "@/lib/content/chat";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const locale = useLocale();
  const t = chat[locale];
  const [messages, setMessages] = useState<Message[]>(() => [
    { role: "assistant", content: t.welcome },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  async function sendMessage(e: React.FormEvent) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg: Message = { role: "user", content: text };
    const nextMessages = [...messages, userMsg];
    setMessages(nextMessages);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          locale,
          // The welcome message is the widget's, not part of the conversation.
          messages: nextMessages.slice(1).map(({ role, content }) => ({ role, content })),
        }),
      });
      const data = await res.json().catch(() => ({}));
      const reply = data.reply || data.error || t.noReply;
      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: t.error }]);
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {/* Panel de chat */}
      {open && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm flex flex-col bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden">
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[var(--color-forest)]">
            <div className="w-8 h-8 rounded-full bg-[var(--color-sage)] flex items-center justify-center shrink-0">
              <Bot className="w-4 h-4 text-[var(--color-forest-dark)]" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold text-sm leading-none">{t.name}</p>
              <p className="text-[var(--color-sage-light)] text-xs mt-0.5">{t.subtitle}</p>
            </div>
            <button
              onClick={() => setOpen(false)}
              className="text-white/70 hover:text-white transition-colors"
              aria-label={t.close}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-80 bg-[var(--color-surface)]">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[var(--color-forest)] text-white rounded-br-sm"
                      : "bg-white text-[var(--color-charcoal)] shadow-sm rounded-bl-sm border border-gray-100"
                  }`}
                >
                  {msg.content}
                </div>
              </div>
            ))}

            {loading && (
              <div className="flex justify-start">
                <div className="bg-white px-3 py-2 rounded-xl rounded-bl-sm shadow-sm border border-gray-100 flex items-center gap-1.5">
                  <Loader2 className="w-3.5 h-3.5 text-[var(--color-stone)] animate-spin" />
                  <span className="text-xs text-[var(--color-stone)]">{t.typing}</span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="flex items-center gap-2 px-3 py-2.5 border-t border-gray-100 bg-white">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={t.placeholder}
              disabled={loading}
              className="flex-1 text-sm bg-[var(--color-surface)] border border-gray-200 rounded-lg px-3 py-2 outline-none focus:border-[var(--color-moss)] placeholder:text-[var(--color-mist)] disabled:opacity-60 transition-colors"
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              className="w-8 h-8 rounded-lg bg-[var(--color-forest)] flex items-center justify-center text-white disabled:opacity-40 transition-opacity shrink-0"
              aria-label={t.send}
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Botón flotante */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-[var(--color-forest)] text-white shadow-lg hover:bg-[var(--color-forest-dark)] transition-colors flex items-center justify-center"
        aria-label={open ? t.close : t.open}
      >
        {open ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </button>
    </>
  );
}
