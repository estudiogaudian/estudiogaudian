import { motion, useReducedMotion } from "framer-motion";

// Línea fina que se "dibuja" sola al entrar en viewport.
// Funciona idéntico en mobile y PC (solo anima scaleX, compositor-friendly).
// orientation: "h" (horizontal) | "v" (vertical)
export default function DrawLine({
  orientation = "h",
  className = "",
  color = "bg-gold",
  thickness = 1,
  duration = 0.9,
  delay = 0,
  once = true,
}) {
  const reduce = useReducedMotion();
  const isH = orientation === "h";

  const base = isH
    ? { width: "100%", height: thickness }
    : { height: "100%", width: thickness };

  if (reduce) {
    return <span className={`block ${color} ${className}`} style={base} aria-hidden />;
  }

  return (
    <motion.span
      aria-hidden
      className={`block ${color} ${className}`}
      style={{ ...base, transformOrigin: isH ? "left center" : "top center" }}
      initial={{ scaleX: isH ? 0 : 1, scaleY: isH ? 1 : 0 }}
      whileInView={{ scaleX: 1, scaleY: 1 }}
      viewport={{ once, margin: "-10%" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    />
  );
}
