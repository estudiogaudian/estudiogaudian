import { motion } from "framer-motion";

// Fade-up al entrar en viewport. Reutilizable en cualquier sección.
export default function Reveal({
  children,
  delay = 0,
  y = 32,
  duration = 0.8,
  as = "div",
  className = "",
  once = true,
  amount = 0.2,
}) {
  const MotionTag = motion[as] || motion.div;
  return (
    <MotionTag
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </MotionTag>
  );
}

// Reveal en cascada para listas (cada hijo aparece con stagger)
export function RevealStagger({ children, staggerChildren = 0.08, className = "" }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({ children, y = 30, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y },
        visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
