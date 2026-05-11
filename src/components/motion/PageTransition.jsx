import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

// Transición entre páginas: cortina dorada que cubre y revela.
export default function PageTransition({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -8 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
        {/* cortina overlay al cambiar */}
        <motion.div
          className="fixed inset-0 z-50 bg-ink pointer-events-none origin-bottom"
          initial={{ scaleY: 1 }}
          animate={{ scaleY: 0 }}
          exit={{ scaleY: 0 }}
          transition={{ duration: 0.7, ease: [0.65, 0, 0.35, 1] }}
        />
      </motion.div>
    </AnimatePresence>
  );
}
