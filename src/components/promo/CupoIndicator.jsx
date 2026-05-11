// Indicador de cupos editorial — 6 líneas finas horizontales con strike en las ocupadas.
import { motion } from "framer-motion";
import { PROMO_CUPOS } from "../../data/promo";

export default function CupoIndicator() {
  const { total, ocupados, mes } = PROMO_CUPOS;
  const disponibles = total - ocupados;
  return (
    <div className="inline-flex flex-col gap-2">
      <span className="font-sans uppercase text-muted" style={{ fontSize: "9px", letterSpacing: "0.22em" }}>
        Cupos {mes}
      </span>
      <div className="flex items-center gap-1.5">
        {Array.from({ length: total }).map((_, i) => (
          <motion.span
            key={i}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.4 }}
            className={`block h-px w-7 origin-left ${i < ocupados ? "bg-warm/30" : "bg-gold"}`}
          />
        ))}
        <span className="font-serif italic text-gold ml-3" style={{ fontSize: "13px", fontWeight: 300 }}>
          quedan {disponibles}
        </span>
      </div>
    </div>
  );
}
