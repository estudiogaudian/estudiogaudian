import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

// Contador animado que se dispara al entrar en viewport.
export default function Counter({ from = 0, to, prefix = "", suffix = "", duration = 1.6, className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const mv = useMotionValue(from);
  const spring = useSpring(mv, { stiffness: 60, damping: 18, duration: duration * 1000 });
  const [val, setVal] = useState(from);

  useEffect(() => {
    if (inView) mv.set(to);
  }, [inView, to, mv]);

  useEffect(() => {
    return spring.on("change", (latest) => {
      setVal(Math.round(latest));
    });
  }, [spring]);

  return (
    <motion.span ref={ref} className={className}>
      {prefix}{val}{suffix}
    </motion.span>
  );
}
