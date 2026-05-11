import { useEffect, useState } from "react";
import { motion } from "framer-motion";

// Countdown editorial — Bebas + Cormorant separators ("h", "m", "s").
// Persistente en localStorage por usuario, 7 días desde primer ingreso.
export default function Countdown({ days = 7, label = "La promo cierra en", inverted = false }) {
  const [time, setTime] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const KEY = "gaudian_promo_deadline";
    let deadline = parseInt(localStorage.getItem(KEY) || "0", 10);
    if (!deadline || deadline < Date.now()) {
      deadline = Date.now() + days * 24 * 3600 * 1000;
      localStorage.setItem(KEY, String(deadline));
    }
    const tick = () => {
      const diff = Math.max(0, deadline - Date.now());
      setTime({
        d: Math.floor(diff / 86_400_000),
        h: Math.floor((diff % 86_400_000) / 3_600_000),
        m: Math.floor((diff % 3_600_000) / 60_000),
        s: Math.floor((diff % 60_000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [days]);

  const txt = inverted ? "text-ink" : "text-cream";
  const sub = inverted ? "text-ink/50" : "text-muted";
  const sep = inverted ? "text-ink/40" : "text-warm/60";

  const pad = (n) => String(n).padStart(2, "0");

  const Unit = ({ n, l }) => (
    <span className="inline-flex flex-col items-center min-w-[42px]">
      <motion.span
        key={n}
        initial={{ opacity: 0.4, y: -3 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25 }}
        className={`font-display ${txt}`}
        style={{ fontSize: "2.4rem", letterSpacing: "0.04em", lineHeight: 1 }}
      >
        {pad(n)}
      </motion.span>
      <span className={`font-sans uppercase ${sub} mt-1`} style={{ fontSize: "9px", letterSpacing: "0.18em" }}>
        {l}
      </span>
    </span>
  );

  const Sep = ({ char }) => (
    <span className={`font-serif italic ${sep}`} style={{ fontSize: "1.6rem", lineHeight: 1, padding: "0 4px" }}>
      {char}
    </span>
  );

  return (
    <div className="flex flex-col items-start gap-2">
      <span className={`font-sans uppercase ${sub}`} style={{ fontSize: "9px", letterSpacing: "0.22em" }}>
        {label}
      </span>
      <div className="flex items-end">
        {time.d > 0 && (
          <>
            <Unit n={time.d} l="días" />
            <Sep char="d" />
          </>
        )}
        <Unit n={time.h} l="horas" />
        <Sep char="h" />
        <Unit n={time.m} l="min" />
        <Sep char="m" />
        <Unit n={time.s} l="seg" />
      </div>
    </div>
  );
}
