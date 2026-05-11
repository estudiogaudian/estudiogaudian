import { motion, useScroll, useSpring } from "framer-motion";

// Barra dorada que muestra el progreso de scroll.
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-[2px] bg-gold origin-left z-[55]"
      style={{ scaleX }}
    />
  );
}
