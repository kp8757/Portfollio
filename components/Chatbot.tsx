"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Bot, SendHorizonal, Sparkles, X } from "lucide-react";
import { FormEvent, useState } from "react";

type Message = { role: "user" | "assistant"; text: string };

const seed: Message[] = [
  {
    role: "assistant",
    text: "Hi! I can explain Kapleshwar's projects, skills, and how to get in touch. Ask me anything."
  }
];

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>(seed);

  const submit = async (e: FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const text = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", text }]);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: text })
      });
      const data = (await res.json()) as { reply: string };
      setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          text: "I can still help! Kapleshwar builds AI + IoT products like SmartAssist and Live Monitoring systems. Reach out at kapleshwar.ai.dev@gmail.com"
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            className="glass mb-3 w-[320px] rounded-2xl p-4 shadow-neon"
          >
            <div className="mb-3 flex items-center justify-between">
              <p className="flex items-center gap-2 text-sm font-medium">
                <Sparkles size={16} className="text-cyan-300" /> Portfolio AI Guide
              </p>
              <button onClick={() => setOpen(false)} aria-label="Close chat">
                <X size={18} />
              </button>
            </div>
            <div className="mb-3 h-56 space-y-2 overflow-y-auto rounded-xl bg-slate-950/50 p-2 text-sm">
              {messages.map((m, i) => (
                <div
                  key={`${m.role}-${i}`}
                  className={`max-w-[88%] rounded-xl p-2 ${
                    m.role === "assistant" ? "bg-cyan-950/60" : "ml-auto bg-indigo-900/60"
                  }`}
                >
                  {m.text}
                </div>
              ))}
              {loading && <div className="w-fit rounded-xl bg-cyan-950/60 p-2">AI is typing...</div>}
            </div>
            <form onSubmit={submit} className="flex gap-2">
              <input
                className="w-full rounded-xl border border-white/15 bg-slate-900/70 px-3 py-2 text-sm outline-none focus:border-cyan-300"
                placeholder="Ask about projects or skills..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
              />
              <button className="rounded-xl bg-cyan-500/80 p-2 transition hover:bg-cyan-400">
                <SendHorizonal size={16} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((v) => !v)}
        className="glass flex h-14 w-14 items-center justify-center rounded-full shadow-neon transition hover:scale-105"
        aria-label="Open AI chatbot"
      >
        <Bot className="text-cyan-200" />
      </button>
    </div>
  );
}
