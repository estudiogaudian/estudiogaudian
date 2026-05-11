import { motion } from "framer-motion";
import { testimonios } from "../data/site";
import Reveal, { RevealStagger, RevealItem } from "./motion/Reveal";

export default function Testimonios() {
  return (
    <section className="bg-ink py-32 lg:py-40">
      <div className="container-x">
        <Reveal>
          <div className="s-label">05 — Voces</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="s-h2">Lo que<br/>dicen</h2>
        </Reveal>

        <RevealStagger className="grid md:grid-cols-3 gap-px border border-border-soft bg-border-soft mt-12">
          {testimonios.map((t) => (
            <RevealItem key={t.nombre}>
              <motion.figure
                whileHover={{ backgroundColor: "#161614" }}
                className="bg-ink p-10 h-full transition-colors"
              >
                <div className="text-gold mb-3" style={{ fontSize: "12px", letterSpacing: "2px" }}>★ ★ ★ ★ ★</div>
                <blockquote className="font-serif italic text-warm leading-[1.65] mb-6" style={{ fontSize: "1.15rem", fontWeight: 300 }}>
                  "{t.quote}"
                </blockquote>
                <figcaption className="pt-5 border-t border-border-soft">
                  <div className="font-sans font-medium text-cream uppercase" style={{ fontSize: "11px", letterSpacing: "0.1em" }}>
                    {t.nombre}
                  </div>
                  <div className="font-sans text-muted uppercase mt-1" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
                    {t.cargo}
                  </div>
                </figcaption>
              </motion.figure>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
