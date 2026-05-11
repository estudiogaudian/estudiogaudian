import { motion } from "framer-motion";
import { proceso } from "../data/site";
import Reveal, { RevealStagger, RevealItem } from "./motion/Reveal";

export default function Proceso() {
  return (
    <section id="proceso" className="bg-ink py-32 lg:py-40 relative overflow-hidden">
      <div className="container-x relative">
        <Reveal>
          <div className="s-label">03 — Proceso</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="s-h2">Cómo<br/>trabajamos</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-serif italic text-warm font-light my-10 max-w-[600px]" style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)", lineHeight: 1.55 }}>
            Cuatro pasos. Sin improvisaciones.
          </p>
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px border border-border-soft bg-border-soft mt-10">
          {proceso.map((p) => (
            <RevealItem key={p.n}>
              <motion.div
                whileHover={{ backgroundColor: "#111110" }}
                className="bg-ink p-10 relative h-full transition-colors min-h-[260px]"
              >
                {/* Número fantasma gigante */}
                <div
                  className="absolute top-3 right-5 font-display leading-none pointer-events-none"
                  style={{ fontSize: "6rem", color: "rgba(237,233,224,0.04)" }}
                >
                  {p.n}
                </div>
                <h3 className="font-display text-cream mb-3 relative" style={{ fontSize: "1.6rem", letterSpacing: "0.05em" }}>
                  {p.titulo}
                </h3>
                <p className="font-light leading-[1.7] text-muted relative" style={{ fontSize: "12px" }}>
                  {p.desc}
                </p>
              </motion.div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
