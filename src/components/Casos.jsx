import { motion } from "framer-motion";
import { casos } from "../data/site";
import Reveal, { RevealStagger, RevealItem } from "./motion/Reveal";

export default function Casos() {
  return (
    <section id="casos" className="bg-graphite py-32 lg:py-40">
      <div className="container-x">
        <Reveal>
          <div className="s-label">04 — Casos</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="s-h2">Resultados<br/>medibles</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-serif italic text-warm font-light my-10 max-w-[640px]" style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)", lineHeight: 1.55 }}>
            Cada marca tiene un objetivo de negocio concreto. Estos son algunos resultados representativos.
          </p>
        </Reveal>

        <RevealStagger className="grid lg:grid-cols-3 gap-px border border-border-soft bg-border-soft">
          {casos.map((c) => (
            <RevealItem key={c.cliente}>
              <motion.article
                whileHover={{ backgroundColor: "#161614" }}
                className="bg-graphite p-10 flex flex-col h-full relative transition-colors"
              >
                <div className="mb-8">
                  <div className="font-sans font-medium text-cream uppercase" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
                    {c.cliente}
                  </div>
                  <div className="font-sans text-muted uppercase mt-1" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
                    {c.rubro}
                  </div>
                </div>

                <motion.div
                  initial={{ scale: 0.85, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="font-display text-gold my-2"
                  style={{ fontSize: "5rem", letterSpacing: "0.03em", lineHeight: 1 }}
                >
                  {c.metrica}
                </motion.div>
                <div className="font-sans uppercase text-muted mb-6" style={{ fontSize: "10px", letterSpacing: "0.14em" }}>
                  {c.metricaLabel}
                </div>

                <p className="font-serif italic text-warm leading-[1.65] mt-auto" style={{ fontSize: "1rem", fontWeight: 300 }}>
                  {c.resumen}
                </p>
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>

      </div>
    </section>
  );
}
