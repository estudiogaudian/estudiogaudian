import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { brand, waLink } from "../data/site";
import { useRegion } from "../context/RegionContext";
import MagneticButton from "./motion/MagneticButton";
import Marquee from "./motion/Marquee";

const HERO_IMG = "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=75&auto=format&fit=crop";
const HERO_IMG_SET =
  "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=480&q=65&auto=format&fit=crop 480w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=900&q=70&auto=format&fit=crop 900w, https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=1600&q=75&auto=format&fit=crop 1600w";

export default function Hero() {
  const { region, detected, loading } = useRegion();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const yImg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const yText = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const opacityFade = useTransform(scrollYProgress, [0, 0.85], [1, 0]);

  return (
    <section ref={ref} id="top" className="relative min-h-[100vh] grid grid-rows-[1fr_auto] overflow-hidden bg-ink">
      {/* Imagen full-bleed con parallax */}
      <motion.div className="absolute inset-0" style={{ y: yImg }} aria-hidden>
        <img
          src={HERO_IMG}
          srcSet={HERO_IMG_SET}
          sizes="100vw"
          alt=""
          fetchPriority="high"
          className="w-full h-full object-cover object-[center_30%]"
          style={{ filter: "brightness(.38) saturate(.7)" }}
        />
      </motion.div>
      {/* Overlay degradado */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, rgba(12,12,11,.1) 0%, rgba(12,12,11,.55) 60%, rgba(12,12,11,1) 100%)" }}
      />

      {/* Contenido editorial */}
      <motion.div
        style={{ y: yText, opacity: opacityFade }}
        className="relative z-10 flex flex-col justify-end px-[5vw] pt-[120px] pb-[5vh]"
      >
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2.5 mb-8 text-gold"
          style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase", fontWeight: 400 }}
        >
          <span className="h-px w-7 bg-gold" />
          {region.flag} {region.code === "ar" ? "Clorinda, Formosa · Argentina y Paraguay" : region.code === "py" ? "Asunción · Paraguay" : "Worldwide · Remote-first studio"}
          {detected && !loading && (
            <span className="text-cream/40 hidden md:inline">· {detected.city || detected.country}</span>
          )}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-cream"
          style={{ fontSize: "clamp(6rem, 18vw, 16rem)", lineHeight: 0.85, letterSpacing: "0.025em", marginBottom: "0.4rem" }}
        >
          GAUDIAN
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="font-serif italic text-warm"
          style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.5rem)", fontWeight: 300, letterSpacing: "0.12em", marginBottom: "3.5rem" }}
        >
          Estudio boutique de comunicación
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="grid lg:grid-cols-[1fr_auto] items-end gap-8 lg:gap-12 max-w-full"
        >
          <p className="font-light text-warm max-w-[460px] leading-[1.75]" style={{ fontSize: "clamp(.95rem, 1.4vw, 1.05rem)" }}>
            {region.heroSubtitle}
          </p>
          <div className="flex flex-col items-start lg:items-end gap-3">
            <MagneticButton as={Link} to="/cotizar" className="btn-p">
              Solicitar presupuesto <span className="text-base">→</span>
            </MagneticButton>
            <MagneticButton href={waLink} target="_blank" rel="noopener noreferrer" className="btn-o">
              Hablar por WhatsApp
            </MagneticButton>
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator centrado */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2.5 text-muted z-10 pointer-events-none animate-scroll-pulse"
        style={{ fontSize: "9px", letterSpacing: "0.2em", textTransform: "uppercase" }}
      >
        <div className="w-px h-[52px]" style={{ background: "linear-gradient(to bottom, #7a7670, transparent)" }} />
        <span>Scroll</span>
      </motion.div>

      {/* Marquee editorial */}
      <div className="relative z-10 border-t border-b border-border-soft py-[1.1rem] overflow-hidden bg-ink">
        <Marquee
          items={[
            "Branding · Estrategia",
            "Diseño Web Premium",
            "Gestión de Redes",
            "Meta Ads",
            "Reels & Contenido",
            "SEO Local",
            "Imagen que convierte",
            "Clorinda · Asunción",
          ]}
          speed={36}
          gap={56}
        />
      </div>
    </section>
  );
}
