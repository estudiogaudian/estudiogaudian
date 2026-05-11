import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { brand, waLink } from "../data/site";
import Reveal from "../components/motion/Reveal";
import MagneticButton from "../components/motion/MagneticButton";
import SEOHead from "../components/SEOHead";
import { useRegion } from "../context/RegionContext";

const CANVA_VIEW = "https://www.canva.com/design/DAGCNYZ1Orc/8aUkBjADbVu2xFcR_iljRQ/view";
const CANVA_EMBED = `${CANVA_VIEW}?embed`;

const META = [
  { l: "Especialidad", v: "Identidad corporativa · Redes sociales" },
  { l: "Formación", v: "Lic. en Diseño Gráfico y Multimedia" },
  { l: "Experiencia", v: "+7 años en el mercado" },
  { l: "Páginas", v: "18 trabajos seleccionados" },
];

const SKILLS = [
  { name: "Identidad corporativa & Branding", tag: "Core" },
  { name: "Gestión de redes sociales", tag: "Core" },
  { name: "Publicidad en Meta Ads", tag: "Especialidad" },
  { name: "Diseño editorial y gráfico", tag: "Formación" },
  { name: "Estrategia de contenido", tag: "Especialidad" },
  { name: "Adobe Suite · Canva · Figma", tag: "Herramientas" },
];

export default function Portfolio() {
  const { region } = useRegion();
  const iframeRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const onLoad = () => setTimeout(() => setLoading(false), 600);
    iframe.addEventListener("load", onLoad);
    const fallback = setTimeout(() => setLoading(false), 4000);
    return () => {
      iframe.removeEventListener("load", onLoad);
      clearTimeout(fallback);
    };
  }, []);

  return (
    <>
      <SEOHead
        title="Portfolio · GAUDIAN — Estudio boutique de comunicación"
        description="Portfolio editorial de GAUDIAN. Identidad corporativa, branding, diseño gráfico y marketing digital para marcas en Argentina y Paraguay."
        canonical="https://estudiogaudian.com/portfolio"
        region={region}
      />

      {/* HERO Portfolio */}
      <section className="relative pt-[120px] px-[5vw] overflow-hidden bg-ink">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(184,168,130,.05) 0%, transparent 50%)" }}
        />
        <div className="relative max-w-[1400px] mx-auto pb-2">
          <Reveal>
            <div className="s-label">Portfolio · Lic. Franco Gaudino</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="font-display text-cream"
              style={{ fontSize: "clamp(4rem, 10vw, 9rem)", lineHeight: 0.88, letterSpacing: "0.03em", marginBottom: "0.5rem" }}
            >
              Nuestro<br/>Trabajo
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <p
              className="font-serif italic text-gold mb-10"
              style={{ fontSize: "clamp(1.2rem, 2.5vw, 1.8rem)", fontWeight: 300, letterSpacing: "0.08em" }}
            >
              Diseño gráfico, identidad corporativa y marketing digital.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-wrap border-t border-b border-border-soft">
              {META.map((m, i) => (
                <div
                  key={m.l}
                  className={`flex flex-col gap-1 py-5 pr-8 mr-8 ${i < META.length - 1 ? "border-r border-border-soft" : ""}`}
                >
                  <span className="font-sans uppercase text-muted" style={{ fontSize: "9px", letterSpacing: "0.18em" }}>
                    {m.l}
                  </span>
                  <span className="font-sans text-warm" style={{ fontSize: "13px", fontWeight: 400 }}>
                    {m.v}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CANVA EMBED */}
      <section className="relative bg-ink">
        <div className="relative w-full bg-ink overflow-hidden" style={{ height: expanded ? "85vh" : "calc(100vh - 68px)" }}>
          {loading && (
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: loading ? 1 : 0 }}
              className="absolute inset-0 z-10 flex flex-col items-center justify-center bg-ink pointer-events-none"
            >
              <motion.div
                animate={{ opacity: [0.3, 0.7, 0.3] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                className="font-display text-cream mb-6"
                style={{ fontSize: "3rem", letterSpacing: "0.12em" }}
              >
                GAUDIAN
              </motion.div>
              <div className="w-32 h-px bg-border-mid relative overflow-hidden">
                <motion.div
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-y-0 w-full bg-gold"
                />
              </div>
              <div className="font-sans uppercase text-muted mt-4" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>
                Cargando portfolio…
              </div>
            </motion.div>
          )}
          <iframe
            ref={iframeRef}
            src={CANVA_EMBED}
            allowFullScreen
            allow="fullscreen"
            title="Portfolio de GAUDIAN — Trabajos de diseño gráfico y marketing digital"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full border-0 block"
          />
        </div>

        {/* Controls bar */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 px-[5vw] py-4 border-t border-border-soft bg-ink/95 backdrop-blur">
          <div className="flex items-center gap-2 font-sans uppercase text-muted" style={{ fontSize: "10px", letterSpacing: "0.15em" }}>
            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M3 9h18M9 21V9" />
            </svg>
            Portfolio interactivo · 18 páginas
          </div>
          <div className="flex gap-2.5">
            <button
              onClick={() => setExpanded((v) => !v)}
              className="inline-flex items-center gap-1.5 font-sans uppercase text-muted hover:text-warm border border-border-soft hover:border-border-mid transition-all bg-transparent"
              style={{ fontSize: "10px", fontWeight: 400, letterSpacing: "0.12em", padding: "7px 14px" }}
            >
              <svg viewBox="0 0 24 24" className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                {expanded ? (
                  <path d="M8 3v3a2 2 0 0 1-2 2H3m18 0h-3a2 2 0 0 1-2-2V3m0 18v-3a2 2 0 0 1 2-2h3M3 16h3a2 2 0 0 1 2 2v3" />
                ) : (
                  <path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3" />
                )}
              </svg>
              {expanded ? "Reducir" : "Pantalla completa"}
            </button>
            <a
              href={CANVA_VIEW}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-sans uppercase bg-cream text-ink hover:opacity-85 transition-opacity"
              style={{ fontSize: "10px", fontWeight: 500, letterSpacing: "0.12em", padding: "7px 14px" }}
            >
              Abrir en Canva →
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT STRIP */}
      <section className="px-[5vw] py-20 lg:py-28 border-t border-border-soft bg-ink">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2
              className="font-display text-cream mb-6"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "0.04em", lineHeight: 0.92 }}
            >
              Diseño con<br/>
              <span className="font-serif italic text-gold" style={{ fontWeight: 300 }}>propósito.</span>
            </h2>
            <div className="space-y-4 font-light text-warm leading-[1.8]" style={{ fontSize: "14px" }}>
              <p>
                Cada pieza en este portfolio responde a un problema real de comunicación. No hacemos diseño por estética — hacemos diseño para que las marcas de nuestros clientes <strong className="text-cream font-medium">se vean y vendan mejor</strong>.
              </p>
              <p>
                Trabajamos con rubros muy distintos: desde una constructora en Clorinda hasta una concesionaria en Formosa o una inmobiliaria del lado paraguayo. La adaptación al contexto es parte del método.
              </p>
              <p>
                <strong className="text-cream font-medium">Lic. Franco Gaudino</strong> — Licenciado en Diseño Gráfico y Multimedia (UCP), con especialización en Marketing Digital (UTN), Coderhouse y Crehana.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="border border-border-soft">
              {SKILLS.map((s, i) => (
                <motion.div
                  key={s.name}
                  whileHover={{ backgroundColor: "rgba(237,233,224,0.03)" }}
                  className={`grid grid-cols-[1fr_auto] items-center px-6 py-4 transition ${i < SKILLS.length - 1 ? "border-b border-border-soft" : ""}`}
                >
                  <span className="font-sans text-warm" style={{ fontSize: "13px", fontWeight: 400 }}>
                    {s.name}
                  </span>
                  <span
                    className="font-sans uppercase text-muted border border-border-soft"
                    style={{ fontSize: "9px", letterSpacing: "0.12em", padding: "3px 8px" }}
                  >
                    {s.tag}
                  </span>
                </motion.div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="px-[5vw] py-20 lg:py-28 border-t border-border-soft bg-graphite">
        <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          <Reveal>
            <h3
              className="font-display text-cream mb-3"
              style={{ fontSize: "clamp(2rem, 4vw, 3.5rem)", letterSpacing: "0.04em", lineHeight: 0.92 }}
            >
              ¿Te interesa<br/>
              <span className="font-serif italic text-gold" style={{ fontWeight: 300 }}>trabajar juntos?</span>
            </h3>
            <p className="font-light text-warm leading-[1.7] max-w-md" style={{ fontSize: "14px" }}>
              Si te gustó lo que viste, el próximo paso es una charla sin compromiso. En 30 minutos te decimos qué podemos hacer por tu marca.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-wrap gap-3">
              <MagneticButton href={waLink} target="_blank" rel="noopener noreferrer" className="btn-p">
                WhatsApp →
              </MagneticButton>
              <MagneticButton href={brand.calendly} target="_blank" rel="noopener noreferrer" className="btn-o">
                Reservar reunión
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
