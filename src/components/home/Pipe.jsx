import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

// La tubería: único lugar donde aparece el degradado de marca.
// Se llena a medida que el lead "recorre" la página.
export default function Pipe() {
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <div aria-hidden className="pointer-events-none fixed bottom-0 left-0 top-0 z-20 w-[2px] lg:left-4">
      <div className="absolute inset-0 bg-hairline" />
      <motion.div
        className="absolute inset-0 origin-top"
        style={{
          scaleY: reduce ? scrollYProgress : smooth,
          background: "linear-gradient(180deg, #3B82F6 0%, #A855F7 55%, #22D3EE 100%)",
        }}
      />
    </div>
  );
}
