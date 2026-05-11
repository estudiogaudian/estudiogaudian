import { motion } from "framer-motion";

export default function Marquee({ items, speed = 30, gap = 0, className = "" }) {
  const loop = [...items, ...items, ...items];
  return (
    <div className={`overflow-hidden ${className}`} aria-hidden>
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-33.333%"] }}
        transition={{ duration: speed, ease: "linear", repeat: Infinity }}
      >
        {loop.map((it, i) => (
          <span
            key={i}
            className="inline-flex items-center text-muted font-sans uppercase border-r border-border-soft"
            style={{ fontSize: "11px", fontWeight: 400, letterSpacing: "0.2em", padding: "0 2.5rem" }}
          >
            {it}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
