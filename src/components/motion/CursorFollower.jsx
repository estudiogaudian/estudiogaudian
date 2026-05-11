import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

// Cursor follower sutil estilo estudio creativo. Solo desktop.
export default function CursorFollower() {
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 28, mass: 0.5 });
  const sy = useSpring(y, { stiffness: 350, damping: 28, mass: 0.5 });
  const [hover, setHover] = useState(false);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(pointer: coarse)").matches) return; // mobile/touch
    setEnabled(true);
    const move = (e) => { x.set(e.clientX); y.set(e.clientY); };
    const enter = () => setHover(true);
    const leave = () => setHover(false);
    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button, [data-cursor='hover']").forEach((el) => {
      el.addEventListener("mouseenter", enter);
      el.addEventListener("mouseleave", leave);
    });
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      {/* anillo grande que sigue lento */}
      <motion.div
        className="fixed top-0 left-0 z-[60] pointer-events-none mix-blend-difference"
        style={{ x: sx, y: sy, translateX: "-50%", translateY: "-50%" }}
      >
        <motion.div
          animate={{ scale: hover ? 1.7 : 1, opacity: hover ? 0.6 : 0.4 }}
          transition={{ type: "spring", stiffness: 200, damping: 18 }}
          className="w-10 h-10 rounded-full border border-bone"
        />
      </motion.div>
      {/* punto pequeño que sigue rápido */}
      <motion.div
        className="fixed top-0 left-0 z-[60] pointer-events-none mix-blend-difference"
        style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-bone" />
      </motion.div>
    </>
  );
}
