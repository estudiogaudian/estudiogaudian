import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { brand } from "../data/site";
import {
  PY_TOPBAR, PY_HERO, PY_CUPOS, PY_OFERTA, PY_GARANTIA,
  PY_DOLORES, PY_PASOS, PY_CASO, PY_FAQS, PY_CTA_FINAL,
} from "../data/promoPY";
import Reveal, { RevealStagger, RevealItem } from "../components/motion/Reveal";
import MagneticButton from "../components/motion/MagneticButton";
import Countdown from "../components/promo/Countdown";
import Marquee from "../components/motion/Marquee";
import SEOHead from "../components/SEOHead";

const HERO_IMG =
  "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&q=75&auto=format&fit=crop";

const waPY = `https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
  "Hola Franco, quiero uno de los 5 lugares de fundador del lanzamiento de GAUDIAN en Paraguay. ¿Cómo avanzamos?"
)}`;

/* Barra fija superior con oferta + WhatsApp siempre visible */
function StickyOfferBar() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="bg-gradient-brand text-white px-[5vw] py-2 text-center" style={{ fontSize: "12px", letterSpacing: "0.02em" }}>
        <span className="font-semibold">{PY_TOPBAR}</span>
      </div>
      <header className="h-12 px-[5vw] flex items-center justify-between bg-ink/95 backdrop-blur-xl border-b border-border-soft">
        <a href="/" className="font-display text-cream" style={{ fontSize: "18px", fontWeight: 800, letterSpacing: "-0.02em" }}>
          GAUDIAN
        </a>
        <a
          href={waPY}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-gold"
          style={{ fontSize: "10px", padding: "9px 18px" }}
        >
          Quiero mi lugar →
        </a>
      </header>
    </div>
  );
}

/* Indicador de cupos de fundador */
function CupoFundador() {
  const restantes = PY_CUPOS.total - PY_CUPOS.ocupados;
  return (
    <div className="inline-flex items-center gap-3 border border-border-mid px-4 py-2.5">
      <span className="flex gap-1.5">
        {Array.from({ length: PY_CUPOS.total }).map((_, i) => (
          <span
            key={i}
            className="w-2.5 h-2.5 rounded-full"
            style={{ background: i < PY_CUPOS.ocupados ? "#7d8598" : "#22D3EE", boxShadow: i < PY_CUPOS.ocupados ? "none" : "0 0 8px #22D3EE" }}
          />
        ))}
      </span>
      <span className="font-sans uppercase text-cream" style={{ fontSize: "10px", letterSpacing: "0.14em" }}>
        {restantes} de {PY_CUPOS.total} {PY_CUPOS.label} disponibles
      </span>
    </div>
  );
}

/* Exit-intent propio de la landing PY */
function PyExitIntent() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (sessionStorage.getItem("gaudian_py_exit")) return;
    const onLeave = (e) => {
      if (e.clientY <= 0) {
        setShow(true);
        sessionStorage.setItem("gaudian_py_exit", "1");
      }
    };
    document.addEventListener("mouseleave", onLeave);
    return () => document.removeEventListener("mouseleave", onLeave);
  }, []);
  if (!show) return null;
  return (
    <div className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 backdrop-blur-sm animate-fade-in p-6">
      <div className="bg-graphite border border-border-mid max-w-lg w-full p-10 relative">
        <button onClick={() => setShow(false)} className="absolute top-4 right-5 text-muted hover:text-cream text-2xl font-light" aria-label="Cerrar">×</button>
        <div className="s-label" style={{ color: "#22D3EE" }}>Antes de irte</div>
        <h3 className="font-display text-cream" style={{ fontSize: "2.1rem", lineHeight: 1.02, letterSpacing: "-0.02em", fontWeight: 700 }}>
          ¿Te vas sin tu auditoría gratis?
        </h3>
        <p className="italic-serif mt-1 mb-4" style={{ fontSize: "1.2rem", fontWeight: 600 }}>
          Solo quedan {PY_CUPOS.total - PY_CUPOS.ocupados} lugares de fundador.
        </p>
        <p className="text-warm font-light mb-6 leading-[1.65]" style={{ fontSize: "13px" }}>
          En 30 minutos te mostramos dónde tu negocio pierde ventas hoy — tu pauta, tu perfil y tu WhatsApp. Sin costo y sin compromiso. Te llevás el diagnóstico aunque no trabajemos juntos.
        </p>
        <a href={waPY} target="_blank" rel="noopener noreferrer" className="btn-gold w-full">
          Reservar mi auditoría gratis →
        </a>
      </div>
    </div>
  );
}

export default function PromoParaguay() {
  return (
    <>
      <SEOHead
        title="Lanzamiento Paraguay · Sistema de Clientes con IA · GAUDIAN"
        description="GAUDIAN llega a Paraguay. Sistema de captación con Meta Ads + IA que atiende tu WhatsApp 24/7. Solo 5 Negocios Fundadores con setup gratis y precio congelado. Cupos limitados."
        canonical="https://estudiogaudian.com/paraguay"
      />

      <StickyOfferBar />
      <PyExitIntent />

      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-end overflow-hidden bg-ink px-[5vw] pt-32 pb-16">
        <img
          src={HERO_IMG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(.3) saturate(.85)" }}
          fetchPriority="high"
        />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(5,5,5,.35) 0%, rgba(5,5,5,.6) 55%, rgba(5,5,5,1) 100%)" }} />
        {/* glow de marca */}
        <div aria-hidden className="absolute -top-1/4 left-1/2 -translate-x-1/2 w-[80vw] h-[60vh] opacity-20 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #A855F7 0%, transparent 60%)" }} />

        <div className="relative max-w-[1400px] w-full mx-auto grid lg:grid-cols-[1fr_auto] gap-12 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 mb-7"
              style={{ fontSize: "11px", letterSpacing: "0.18em", textTransform: "uppercase" }}
            >
              <span className="h-px w-7" style={{ background: "#22D3EE" }} />
              <span className="italic-serif" style={{ fontWeight: 600 }}>{PY_HERO.eyebrow}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-cream"
              style={{ fontSize: "clamp(2.6rem, 6.5vw, 6rem)", lineHeight: 1.0, letterSpacing: "-0.03em", fontWeight: 800 }}
            >
              {PY_HERO.h1Line1}<br/>
              <span className="italic-serif" style={{ fontWeight: 700 }}>{PY_HERO.h1Line2}</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-light text-warm leading-[1.7] mt-7 max-w-2xl"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.15rem)" }}
            >
              {PY_HERO.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-9 flex flex-col sm:flex-row flex-wrap items-start sm:items-center gap-4"
            >
              <MagneticButton href={waPY} target="_blank" rel="noopener noreferrer" className="btn-gold">
                {PY_HERO.ctaPrimary} →
              </MagneticButton>
              <CupoFundador />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="hidden lg:block border border-border-mid p-6 bg-ink/40 backdrop-blur-sm"
          >
            <Countdown days={7} label="El lanzamiento cierra en" />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <div className="border-y border-border-soft py-3 bg-ink overflow-hidden">
        <Marquee
          items={["Meta Ads", "IA que atiende tu WhatsApp 24/7", "Leads calificados", "Setup gratis · Solo fundadores", "Precio congelado", "Garantía 90 días", "Asunción · Paraguay"]}
          speed={34}
        />
      </div>

      {/* DOLORES */}
      <section className="bg-ink py-24 lg:py-32 px-[5vw]">
        <div className="max-w-[1000px] mx-auto">
          <Reveal><div className="s-label">¿Te suena?</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="s-h2">Si tenés uno de<br/>estos problemas,<br/><span className="italic-serif">esto es para vos.</span></h2>
          </Reveal>
          <div className="mt-14 grid gap-px bg-border-soft border border-border-soft">
            {PY_DOLORES.map((d) => (
              <Reveal key={d.n}>
                <div className="bg-ink px-6 py-6 flex items-start gap-5 hover:bg-graphite transition-colors">
                  <span className="font-display" style={{ fontSize: "1.4rem", fontWeight: 800, color: "#A855F7" }}>{d.n}</span>
                  <p className="font-light text-warm leading-[1.6]" style={{ fontSize: "1.05rem" }}>{d.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LA OFERTA — stack de valor Hormozi */}
      <section className="bg-graphite py-24 lg:py-32 px-[5vw] relative overflow-hidden" id="oferta">
        <div aria-hidden className="absolute top-0 left-1/2 -translate-x-1/2 w-[60vw] h-[40vh] opacity-10 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #3B82F6 0%, transparent 65%)" }} />
        <div className="max-w-[900px] mx-auto relative">
          <Reveal><div className="s-label" style={{ color: "#22D3EE" }}>La oferta de fundador</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="s-h2">{PY_OFERTA.nombre}</h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="italic-serif mt-4" style={{ fontSize: "clamp(1.2rem, 2.4vw, 1.7rem)", fontWeight: 600 }}>{PY_OFERTA.promesa}</p>
          </Reveal>

          <div className="mt-12 border border-border-mid bg-ink">
            {/* stack de valor */}
            <div className="p-8 lg:p-10">
              <div className="font-sans uppercase text-muted mb-5" style={{ fontSize: "10px", letterSpacing: "0.2em" }}>Lo que recibís</div>
              <ul className="space-y-0">
                {PY_OFERTA.stack.map((s) => (
                  <li key={s.item} className="flex items-start justify-between gap-4 py-3.5 border-b border-border-soft">
                    <span className="flex items-start gap-3 font-light text-warm leading-[1.5]" style={{ fontSize: "14px" }}>
                      <span style={{ color: "#22D3EE" }}>✓</span>{s.item}
                    </span>
                    <span className="font-sans text-muted whitespace-nowrap line-through" style={{ fontSize: "12px" }}>{s.valor}</span>
                  </li>
                ))}
              </ul>

              <div className="font-sans uppercase mt-8 mb-5" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#A855F7" }}>Bonos exclusivos de lanzamiento</div>
              <ul className="space-y-0">
                {PY_OFERTA.bonos.map((b) => (
                  <li key={b.item} className="flex items-start justify-between gap-4 py-3.5 border-b border-border-soft">
                    <span className="flex items-start gap-3 font-light text-cream leading-[1.5]" style={{ fontSize: "14px" }}>
                      {b.item}
                    </span>
                    <span className="font-sans text-muted whitespace-nowrap line-through" style={{ fontSize: "12px" }}>{b.valor}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* cierre de precio */}
            <div className="border-t border-border-mid p-8 lg:p-10 bg-graphite">
              <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                <div>
                  <div className="font-sans uppercase text-muted mb-1" style={{ fontSize: "10px", letterSpacing: "0.18em" }}>Valor real total</div>
                  <div className="font-display text-muted line-through" style={{ fontSize: "1.8rem", fontWeight: 700 }}>{PY_OFERTA.valorTotal}<span style={{ fontSize: "0.9rem" }}> {PY_OFERTA.periodo}</span></div>
                  <div className="font-sans uppercase mt-4 mb-1" style={{ fontSize: "10px", letterSpacing: "0.18em", color: "#22D3EE" }}>Tu precio de fundador</div>
                  <div className="font-display text-cream leading-none" style={{ fontSize: "clamp(3rem, 7vw, 4.5rem)", fontWeight: 800, letterSpacing: "-0.03em" }}>
                    {PY_OFERTA.precio}<span className="text-muted" style={{ fontSize: "1.4rem", fontWeight: 400 }}>{PY_OFERTA.periodo}</span>
                  </div>
                  <p className="font-light text-muted mt-3 max-w-md leading-[1.5]" style={{ fontSize: "12px" }}>{PY_OFERTA.precioNota}</p>
                </div>
                <MagneticButton href={waPY} target="_blank" rel="noopener noreferrer" className="btn-gold whitespace-nowrap">
                  Reservar mi lugar →
                </MagneticButton>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GARANTÍA */}
      <section className="bg-ink py-20 lg:py-28 px-[5vw]">
        <div className="max-w-[900px] mx-auto">
          <div className="border-2 p-8 lg:p-12 relative" style={{ borderColor: "#22D3EE" }}>
            <div className="absolute -top-3 left-8 bg-ink px-3 font-sans uppercase" style={{ fontSize: "10px", letterSpacing: "0.2em", color: "#22D3EE" }}>Sin riesgo para vos</div>
            <Reveal>
              <h3 className="font-display text-cream" style={{ fontSize: "clamp(1.8rem, 4vw, 2.8rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>{PY_GARANTIA.titulo}</h3>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="font-light text-warm leading-[1.7] mt-4" style={{ fontSize: "1.1rem" }}>{PY_GARANTIA.texto}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="font-light text-muted leading-[1.6] mt-4" style={{ fontSize: "12px" }}>{PY_GARANTIA.nota}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PROCESO */}
      <section className="bg-graphite py-24 lg:py-32 px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <Reveal><div className="s-label">Cómo funciona</div></Reveal>
          <Reveal delay={0.1}><h2 className="s-h2">Tres pasos.<br/><span className="italic-serif">14 días.</span></h2></Reveal>
          <RevealStagger className="grid md:grid-cols-3 gap-px border border-border-soft bg-border-soft mt-14">
            {PY_PASOS.map((p) => (
              <RevealItem key={p.n}>
                <div className="bg-graphite p-8 h-full min-h-[220px]">
                  <div className="font-display mb-5" style={{ fontSize: "2rem", fontWeight: 800, color: "#3B82F6" }}>{p.n}</div>
                  <h3 className="font-display text-cream mb-3" style={{ fontSize: "1.4rem", fontWeight: 700, letterSpacing: "-0.01em" }}>{p.t}</h3>
                  <p className="font-light leading-[1.7] text-muted" style={{ fontSize: "13px" }}>{p.d}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CASO REAL */}
      <section className="bg-ink py-24 lg:py-32 px-[5vw]">
        <div className="max-w-[1000px] mx-auto grid lg:grid-cols-[auto_1fr] gap-10 items-center">
          <Reveal>
            <div className="font-display leading-none" style={{ fontSize: "clamp(4rem, 10vw, 7rem)", fontWeight: 800, letterSpacing: "-0.03em", color: "#22D3EE" }}>
              {PY_CASO.metrica}
            </div>
            <p className="font-sans uppercase text-muted mt-2" style={{ fontSize: "11px", letterSpacing: "0.18em" }}>{PY_CASO.metricaLabel}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="s-label" style={{ color: "#22D3EE" }}>Caso real · ya funcionando</div>
            <h3 className="font-display text-cream" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", fontWeight: 700, letterSpacing: "-0.02em" }}>{PY_CASO.cliente}</h3>
            <p className="font-sans uppercase text-muted mt-1 mb-4" style={{ fontSize: "11px", letterSpacing: "0.16em" }}>{PY_CASO.rubro}</p>
            <p className="italic-serif leading-[1.6]" style={{ fontSize: "1.15rem", fontWeight: 500 }}>"{PY_CASO.texto}"</p>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-graphite py-24 lg:py-32 px-[5vw]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[380px_1fr] gap-16">
          <Reveal>
            <div className="s-label">Dudas</div>
            <h2 className="s-h2" style={{ fontSize: "clamp(2rem, 4vw, 3.4rem)" }}>Preguntas<br/>frecuentes</h2>
          </Reveal>
          <div><PyFAQList /></div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-ink py-24 lg:py-32 px-[5vw] border-t border-border-soft relative overflow-hidden">
        <div aria-hidden className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[70vw] h-[50vh] opacity-15 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, #A855F7 0%, transparent 65%)" }} />
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_auto] items-end gap-12 relative">
          <Reveal>
            <div className="s-label" style={{ color: "#22D3EE" }}>Últimos cupos</div>
            <h2 className="font-display text-cream" style={{ fontSize: "clamp(2.6rem, 7vw, 5.5rem)", lineHeight: 1.0, letterSpacing: "-0.03em", fontWeight: 800 }}>
              {PY_CTA_FINAL.h1}
            </h2>
            <p className="font-light text-warm leading-[1.7] mt-6 max-w-xl" style={{ fontSize: "1.05rem" }}>{PY_CTA_FINAL.sub}</p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-6 lg:items-end">
              <Countdown days={7} label="El lanzamiento cierra en" />
              <CupoFundador />
              <MagneticButton href={waPY} target="_blank" rel="noopener noreferrer" className="btn-gold">
                {PY_CTA_FINAL.cta} →
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER minimal */}
      <footer className="bg-ink border-t border-border-soft px-[5vw] py-8">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-4 text-muted" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
          <div>© {new Date().getFullYear()} GAUDIAN · Marketing · AI · Automation · Lic. Franco Gaudino · CUIL 20-40486958-3</div>
          <div className="flex gap-4">
            <a href="/" className="hover:text-cream transition">Sitio principal</a>
            <a href="/terminos" className="hover:text-cream transition">Términos</a>
            <a href="/privacidad" className="hover:text-cream transition">Privacidad</a>
          </div>
        </div>
      </footer>
    </>
  );
}

function PyFAQList() {
  const [open, setOpen] = useState(0);
  return (
    <div className="border-t border-border-soft">
      {PY_FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-border-soft">
            <button className="w-full flex items-center justify-between text-left py-6 group" onClick={() => setOpen(isOpen ? -1 : i)}>
              <span className="font-display pr-6 group-hover:text-gold transition text-cream" style={{ fontSize: "0.95rem", fontWeight: 600, letterSpacing: "0.01em" }}>
                {f.q}
              </span>
              <motion.span animate={{ rotate: isOpen ? 90 : 0 }} transition={{ duration: 0.3 }} className={`block w-6 h-px ${isOpen ? "bg-gold" : "bg-muted"}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[400px] pb-6" : "max-h-0"}`}>
              <p className="font-light text-warm leading-[1.75] max-w-prose" style={{ fontSize: "14px" }}>{f.a}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
