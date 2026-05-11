import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Botón magnético: el cursor "atrae" sutilmente el elemento.
export default function MagneticButton({ children, className = "", as: Tag = "a", strength = 0.25, ...rest }) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.4 });

  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    x.set((e.clientX - cx) * strength);
    y.set((e.clientY - cy) * strength);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  const MotionTag = motion[Tag] || motion.a;
  return (
    <MotionTag
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ x: springX, y: springY }}
      className={className}
      {...rest}
    >
      <motion.span style={{ x: useTransform(springX, (v) => v * 0.4), y: useTransform(springY, (v) => v * 0.4) }} className="inline-flex items-center gap-2">
        {children}
      </motion.span>
    </MotionTag>
  );
}
