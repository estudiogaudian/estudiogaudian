import { useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Botón magnético: el cursor "atrae" sutilmente el elemento.
// `as` puede ser un string ("a", "button") o un componente React (ej: Link de react-router).
export default function MagneticButton({ children, className = "", as: Tag = "a", strength = 0.25, ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });
  const tx = useTransform(springX, (v) => v * 0.4);
  const ty = useTransform(springY, (v) => v * 0.4);

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  // Soporta string ("a", "button") o componentes React (Link)
  const MotionTag = useMemo(() => {
    if (typeof Tag === "string") return motion[Tag] || motion.a;
    return motion(Tag);
  }, [Tag]);

  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...rest}
    >
      <motion.span style={{ x: tx, y: ty }} className="inline-flex items-center gap-2">
        {children}
      </motion.span>
    </MotionTag>
  );
}
