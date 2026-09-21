import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Robot, CheckCircle } from "@phosphor-icons/react";
import { demoChat } from "../../data/home";

// Retardo antes de mostrar cada mensaje (ms). La IA "escribe" antes de responder.
const STEP_DELAY = { sys: 700, in: 1100, ai: 1500 };

function Bubble({ msg }) {
  if (msg.who === "sys") {
    const done = msg.text.startsWith("Turno");
    return (
      <div className="flex items-center justify-center gap-2 py-1 text-center font-mono text-[11px] text-fg-subtle">
        {done && <CheckCircle size={14} weight="fill" className="text-ok" aria-hidden />}
        <span>{msg.text}</span>
      </div>
    );
  }
  const isAi = msg.who === "ai";
  return (
    <div className={`flex flex-col ${isAi ? "items-end" : "items-start"}`}>
      <p
        className={`max-w-[85%] rounded-inner px-3.5 py-2.5 text-[14.5px] leading-snug ${
          isAi ? "rounded-br-chip bg-primary text-white" : "rounded-bl-chip bg-surface-3 text-fg"
        }`}
      >
        {msg.text}
      </p>
      <span className="mt-1 font-mono text-[10.5px] text-fg-subtle tnum">{msg.t}</span>
    </div>
  );
}

function Typing() {
  return (
    <div className="flex justify-end" aria-hidden>
      <div className="flex gap-1 rounded-inner rounded-br-chip bg-primary/25 px-3.5 py-3">
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-accent-text"
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 1, repeat: Infinity, delay: i * 0.15 }}
          />
        ))}
      </div>
    </div>
  );
}

export default function ChatDemo() {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(reduce ? demoChat.length : 0);

  useEffect(() => {
    if (reduce || shown >= demoChat.length) return undefined;
    const next = demoChat[shown];
    const id = setTimeout(() => setShown((n) => n + 1), STEP_DELAY[next.who]);
    return () => clearTimeout(id);
  }, [shown, reduce]);

  const typing = !reduce && shown < demoChat.length && demoChat[shown].who === "ai";
  const done = shown >= demoChat.length;

  return (
    <figure className="relative">
      <div className="panel overflow-hidden shadow-[0_30px_80px_-40px_rgba(37,99,235,0.45)]">
        <div className="flex items-center justify-between border-b border-hairline px-4 py-3">
          <div className="flex items-center gap-2.5">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-3 text-accent-text">
              <Robot size={18} aria-hidden />
            </span>
            <div className="leading-tight">
              <p className="text-[14px] font-medium text-fg">Asistente del salón</p>
              <p className="font-mono text-[11px] text-fg-subtle">WhatsApp · responde siempre</p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-chip bg-live px-2 py-1 font-mono text-[10.5px] font-medium text-canvas">
            <span className={`h-1.5 w-1.5 rounded-full bg-canvas ${reduce ? "" : "animate-pulse"}`} />
            en vivo
          </span>
        </div>

        <div className="flex min-h-[392px] flex-col justify-end gap-3 px-4 py-5" aria-live="polite">
          <AnimatePresence initial={false}>
            {demoChat.slice(0, shown).map((m, i) => (
              <motion.div
                key={i}
                initial={reduce ? false : { opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <Bubble msg={m} />
              </motion.div>
            ))}
          </AnimatePresence>
          {typing && <Typing />}
        </div>

        <div className="grid grid-cols-3 border-t border-hairline font-mono text-[11px]">
          {[
            ["respuesta", "4 s"],
            ["lead", done ? "calificado" : "..."],
            ["turno", done ? "agendado" : "..."],
          ].map(([k, v]) => (
            <div key={k} className="border-r border-hairline px-3 py-2.5 last:border-r-0">
              <p className="text-fg-subtle">{k}</p>
              <p className={`mt-0.5 tnum ${done ? "text-ok" : "text-fg"}`}>{v}</p>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="mt-3 text-[13px] text-fg-subtle">
        Demo de cómo responde un bot GAUDIAN. El tuyo se entrena con los datos de tu negocio.
      </figcaption>
    </figure>
  );
}
