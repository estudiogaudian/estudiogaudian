import { motion } from "framer-motion";
import { servicios } from "../data/site";
import Reveal, { RevealStagger, RevealItem } from "./motion/Reveal";

const SRV_IMGS = [
  "https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611926653458-09294b3142bf?w=800&q=70&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&q=70&auto=format&fit=crop",
];

export default function Servicios() {
  return (
    <section id="servicios" className="bg-ink py-32 lg:py-40 relative overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="s-label">02 — Servicios</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="s-h2">Lo que<br/>hacemos</h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-serif italic text-warm font-light my-10 max-w-[600px]" style={{ fontSize: "clamp(1.3rem, 2.4vw, 1.8rem)", lineHeight: 1.55 }}>
            Cuatro disciplinas diseñadas para marcas que necesitan crecer, no experimentar.
          </p>
        </Reveal>

        <RevealStagger className="grid md:grid-cols-2 gap-px border border-border-soft bg-border-soft">
          {servicios.map((s) => (
            <RevealItem key={s.n}>
              <motion.article
                whileHover={{ backgroundColor: "#111110" }}
                className="bg-ink p-12 grid grid-rows-[auto_1fr_auto] gap-4 relative overflow-hidden h-full transition-colors"
              >
                <motion.div
                  aria-hidden
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gold origin-left"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                />
                <div>
                  <div className="num-eyebrow mb-4">{s.n}</div>
                  <h3 className="font-display text-cream" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)", letterSpacing: "0.05em", lineHeight: 0.95 }}>
                    {s.titulo}
                  </h3>
                </div>
                <p className="text-muted font-light leading-[1.65]" style={{ fontSize: "12px" }}>{s.desc}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {s.items.map((it) => (
                    <span
                      key={it}
                      className="text-muted uppercase border border-border-soft"
                      style={{ fontSize: "9px", letterSpacing: "0.14em", padding: "4px 10px" }}
                    >
                      {it}
                    </span>
                  ))}
                </div>
              </motion.article>
            </RevealItem>
          ))}
        </RevealStagger>

        {/* Image row editorial */}
        <Reveal delay={0.2}>
          <div className="grid grid-cols-1 sm:grid-cols-3 h-[260px] mt-px border border-border-soft overflow-hidden">
            {SRV_IMGS.map((src, i) => (
              <div key={i} className="overflow-hidden border-l border-border-soft first:border-l-0">
                <img
                  src={src}
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-[6000ms] ease-out hover:scale-110"
                  style={{ filter: "brightness(.6) saturate(.7)" }}
                />
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
