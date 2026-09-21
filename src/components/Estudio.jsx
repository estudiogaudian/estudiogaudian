import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Reveal from "./motion/Reveal";
import DrawLine from "./motion/DrawLine";
import Counter from "./motion/Counter";

const IMG_A = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=75&auto=format&fit=crop"; // estudio creativo principal
const IMG_B = "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=70&auto=format&fit=crop"; // workspace minimal
const IMG_C = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=70&auto=format&fit=crop"; // estudio editorial

export default function Estudio() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const yPhoto = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="estudio" ref={ref} className="bg-graphite py-32 lg:py-40 overflow-hidden">
      <div className="container-x">
        <Reveal>
          <div className="s-label">07 — Estudio</div>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="s-h2">Quiénes<br/>somos</h2>
        </Reveal>
        <DrawLine className="mt-6 max-w-[120px]" delay={0.3} />

        <div className="grid lg:grid-cols-2 gap-20 items-start mt-16">
          {/* Texto */}
          <div className="space-y-6">
            <Reveal>
              <p className="font-light leading-[1.8] text-warm" style={{ fontSize: "1.05rem" }}>
                <strong className="text-cream font-medium">GAUDIAN</strong> es un estudio especializado en{" "}
                <em className="italic-serif" style={{ fontSize: "1.1em" }}>Marketing, Inteligencia Artificial y Automatización</em>{" "}
                que diseña sistemas para generar crecimiento real. No somos una agencia tradicional de redes sociales ni un proveedor de publicaciones.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-light leading-[1.8] text-warm" style={{ fontSize: "1.05rem" }}>
                Vendemos crecimiento, eficiencia y captación de clientes. Conocemos el mercado de Asunción y la región: sabemos cómo compra la gente de acá, y usamos tecnología que la mayoría de las agencias todavía no ofrece.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-light leading-[1.8] text-warm" style={{ fontSize: "1.05rem" }}>
                Trabajamos con clínicas, peluquerías premium, gastronomía, inmobiliarias y comercios de Asunción, Clorinda y toda la región. Gente que necesita resultados concretos: leads en su WhatsApp, no promesas vacías.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p className="font-light leading-[1.8] text-warm" style={{ fontSize: "1.05rem" }}>
                Nuestro trabajo es simple:{" "}
                <strong className="text-cream font-medium">más clientes, menos trabajo manual, más crecimiento.</strong>
              </p>
            </Reveal>
          </div>

          {/* Visual grid editorial: foto principal de Franco + 2 secundarias */}
          <Reveal y={50} delay={0.2}>
            <motion.div
              style={{ y: yPhoto }}
              className="grid grid-cols-2 grid-rows-[260px_160px] gap-2"
            >
              <div className="col-span-2 overflow-hidden relative group">
                <img
                  src={IMG_A}
                  alt="Estudio GAUDIAN — espacio creativo de comunicación, diseño y publicidad"
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ filter: "brightness(.7) saturate(.75)", objectPosition: "center 35%" }}
                />
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-500 pointer-events-none" />
                <span className="absolute bottom-4 left-5 font-display uppercase text-cream opacity-80 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ fontSize: "1rem", letterSpacing: "0.06em" }}>
                  El estudio
                </span>
              </div>
              <div className="overflow-hidden relative group">
                <img
                  src={IMG_B}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ filter: "brightness(.75) saturate(.8)" }}
                />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-colors duration-500 pointer-events-none" />
              </div>
              <div className="overflow-hidden relative group">
                <img
                  src={IMG_C}
                  alt=""
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  style={{ filter: "brightness(.75) saturate(.8)" }}
                />
                <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/15 transition-colors duration-500 pointer-events-none" />
              </div>
            </motion.div>
          </Reveal>
        </div>

        {/* Stats bar editorial — bordes finos */}
        <Reveal delay={0.3}>
          <div className="grid grid-cols-2 lg:grid-cols-4 border border-border-soft mt-16">
            {[
              { n: "+10", label: "Marcas activas", count: 10, prefix: "+" },
              { n: "3", label: "Marketing · IA · Automatización", count: 3 },
              { n: "24/7", label: "Sistemas atendiendo por vos", count: 24, suffix: "/7" },
              { n: "30d", label: "Primeros resultados visibles", count: 30, suffix: "d" },
            ].map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ backgroundColor: "rgba(237,233,224,0.03)" }}
                className="px-6 py-8 border-r border-border-soft last:border-r-0 transition-colors"
              >
                <div className="font-display text-cream leading-none mb-1.5" style={{ fontSize: "3.2rem", letterSpacing: "0.04em" }}>
                  {s.prefix || ""}
                  <Counter to={s.count} suffix={s.suffix || ""} />
                </div>
                <div className="font-sans uppercase text-muted" style={{ fontSize: "10px", letterSpacing: "0.14em" }}>
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
