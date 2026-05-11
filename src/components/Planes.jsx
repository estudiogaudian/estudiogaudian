import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { planes, brand, waLink } from "../data/site";
import Reveal, { RevealStagger, RevealItem } from "./motion/Reveal";
import MagneticButton from "./motion/MagneticButton";

export default function Planes() {
  return (
    <section id="planes" className="bg-graphite py-32 lg:py-40 relative overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="s-label">06 — Planes</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="s-h2">Tres caminos.<br/><span className="font-serif italic font-light text-gold">Cada marca, su precio.</span></h2>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="font-light leading-[1.7] text-warm mt-5 mb-14 max-w-[560px]" style={{ fontSize: "1rem" }}>
            No publicamos tarifas genéricas porque no creemos en planes copy-paste. Cada marca tiene su rubro, su etapa y sus objetivos. Respondé 8 preguntas y te enviamos un presupuesto a medida en menos de 24 hs.
          </p>
        </Reveal>

        <RevealStagger className="grid lg:grid-cols-3 border border-border-soft bg-border-soft gap-px">
          {planes.map((p) => {
            const hot = p.destacado;
            return (
              <RevealItem key={p.nombre} y={40}>
                <motion.article
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 200, damping: 22 }}
                  className={`p-10 flex flex-col h-full relative overflow-hidden ${hot ? "bg-cream text-ink" : "bg-graphite text-cream"}`}
                >
                  <div className={`absolute top-0 left-0 right-0 h-[2px] ${hot ? "bg-ink" : "bg-gold"}`} />

                  <div className={`font-sans uppercase mb-5 ${hot ? "text-ink/50" : "text-muted"}`} style={{ fontSize: "9px", letterSpacing: "0.2em" }}>
                    Plan
                  </div>

                  {p.badge && (
                    <div className={`inline-block w-fit mb-5 font-sans font-medium uppercase ${hot ? "bg-ink text-cream" : "bg-cream text-ink"}`}
                         style={{ fontSize: "9px", letterSpacing: "0.14em", padding: "4px 10px" }}>
                      {p.badge}
                    </div>
                  )}

                  <h3 className={`font-display ${hot ? "text-ink" : "text-cream"}`} style={{ fontSize: "2.4rem", letterSpacing: "0.05em" }}>
                    {p.nombre}
                  </h3>
                  <p className={`font-serif italic mb-3 ${hot ? "text-ink/70" : "text-gold"}`} style={{ fontSize: "1.05rem", fontWeight: 300 }}>
                    {p.para}
                  </p>

                  <hr className={`border-0 border-t my-5 ${hot ? "border-ink/12" : "border-border-soft"}`} />

                  <ul className="list-none flex-1 mb-8">
                    {p.incluye.map((it, idx) => (
                      <motion.li
                        key={it}
                        initial={{ opacity: 0, x: -8 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 + idx * 0.04, duration: 0.4 }}
                        className={`flex items-start gap-2 py-1.5 font-light leading-[1.5] ${hot ? "text-ink/75 border-b border-ink/8" : "text-warm border-b border-border-soft"} last:border-b-0`}
                        style={{ fontSize: "12px" }}
                      >
                        <span className={`flex-shrink-0 mt-0.5 ${hot ? "text-emerald-700" : "text-emerald-500"}`} style={{ fontSize: "10px" }}>✓</span>
                        {it}
                      </motion.li>
                    ))}
                  </ul>

                  <Link
                    to="/cotizar"
                    className={`mt-auto inline-flex items-center justify-center gap-2 py-3 font-sans font-medium uppercase border-b transition-all hover:gap-3.5 ${hot ? "text-ink border-ink/20" : "text-cream border-border-mid"}`}
                    style={{ fontSize: "11px", letterSpacing: "0.12em" }}
                  >
                    Cotizar este plan →
                  </Link>
                </motion.article>
              </RevealItem>
            );
          })}
        </RevealStagger>

        {/* CTA principal a cotizador */}
        <Reveal delay={0.3}>
          <div className="mt-12 border border-border-soft p-8 lg:p-12 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <div className="s-label">¿Querés un presupuesto exacto?</div>
              <h3 className="font-display text-cream mt-2" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", letterSpacing: "0.03em", lineHeight: 1.05 }}>
                Armemos tu plan a medida.
              </h3>
              <p className="font-serif italic text-gold mt-1" style={{ fontSize: "1.1rem", fontWeight: 300 }}>
                8 preguntas · 2 minutos · Sin compromiso.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <MagneticButton as={Link} to="/cotizar" className="btn-p">
                Solicitar presupuesto →
              </MagneticButton>
              <MagneticButton href={brand.calendly} target="_blank" rel="noopener noreferrer" className="btn-o">
                Reservar reunión
              </MagneticButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
