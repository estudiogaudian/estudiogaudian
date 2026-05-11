import { useState } from "react";
import { motion } from "framer-motion";
import { brand, waLink } from "../data/site";
import {
  PROMO_TOPBAR, PROMO_HERO, PROMO_MANIFIESTO, PROMO_RAZONES,
  PROMO_PLANES, PROMO_NOTA, PROMO_CASO, PROMO_FAQS, PROMO_CTA_FINAL,
} from "../data/promo";
import { useRegion } from "../context/RegionContext";
import Reveal, { RevealStagger, RevealItem } from "../components/motion/Reveal";
import MagneticButton from "../components/motion/MagneticButton";
import Counter from "../components/motion/Counter";
import Marquee from "../components/motion/Marquee";
import Countdown from "../components/promo/Countdown";
import CupoIndicator from "../components/promo/CupoIndicator";
import CurrencyToggle, { defaultCurrencyForRegion } from "../components/promo/CurrencyToggle";
import SEOHead from "../components/SEOHead";

const HERO_IMG = "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=75&auto=format&fit=crop";
const CASE_IMG = "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1600&q=75&auto=format&fit=crop";

function PromoNav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 h-12 px-[5vw] flex items-center justify-between bg-ink/90 backdrop-blur-xl border-b border-border-soft">
      <a href="/" className="font-display text-cream" style={{ fontSize: "20px", letterSpacing: "0.15em" }}>
        GAUDIAN
      </a>
      <a
        href={waLink}
        target="_blank"
        rel="noopener noreferrer"
        className="font-sans uppercase text-cream hover:text-gold transition"
        style={{ fontSize: "10px", letterSpacing: "0.18em" }}
      >
        Agendar diagnóstico →
      </a>
    </header>
  );
}

function PromoFooter() {
  return (
    <footer className="bg-ink border-t border-border-soft px-[5vw] py-8">
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row justify-between items-start gap-4 text-muted" style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
        <div>
          © {new Date().getFullYear()} GAUDIAN · Lic. Franco Gaudino · CUIL 20-40486958-3
        </div>
        <div className="flex gap-4">
          <a href="/" className="hover:text-cream transition">Sitio principal</a>
          <a href="/terminos" className="hover:text-cream transition">Términos</a>
          <a href="/privacidad" className="hover:text-cream transition">Privacidad</a>
        </div>
      </div>
    </footer>
  );
}

export default function Promo() {
  const { region } = useRegion();
  const [cur, setCur] = useState(defaultCurrencyForRegion(region.code));

  return (
    <>
      <SEOHead
        title="Meta Ads para PyMEs · GAUDIAN — Estudio boutique"
        description="Gestión profesional de Meta Ads y dirección de arte para marcas premium en Argentina y Paraguay. Cupos limitados. Sin permanencia obligatoria."
        canonical="https://estudiogaudian.com/promo"
        region={region}
      />

      <PromoNav />

      {/* TOPBAR sticky urgencia editorial */}
      <div className="bg-graphite border-b border-border-soft px-[5vw] py-3 mt-12">
        <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
          <p className="font-serif italic text-warm" style={{ fontSize: "13px", fontWeight: 300 }}>
            {PROMO_TOPBAR}
          </p>
          <CupoIndicator />
        </div>
      </div>

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end overflow-hidden bg-ink px-[5vw] pt-20 pb-16">
        <img
          src={HERO_IMG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(.32) saturate(.7)" }}
          fetchPriority="high"
        />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(12,12,11,.2) 0%, rgba(12,12,11,.55) 60%, rgba(12,12,11,1) 100%)" }} />

        <div className="relative max-w-[1400px] w-full mx-auto grid lg:grid-cols-[1fr_auto] gap-10 items-end">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 mb-8 text-gold"
              style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}
            >
              <span className="h-px w-7 bg-gold" />
              {PROMO_HERO.eyebrow}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-cream"
              style={{ fontSize: "clamp(4rem, 11vw, 10rem)", lineHeight: 0.88, letterSpacing: "0.025em" }}
            >
              {PROMO_HERO.h1Line1}<br/>
              <span className="font-serif italic font-light text-gold" style={{ fontSize: "0.75em" }}>
                {PROMO_HERO.h1Line2}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="font-light text-warm leading-[1.7] mt-8 max-w-xl"
              style={{ fontSize: "clamp(1rem, 1.4vw, 1.1rem)" }}
            >
              {PROMO_HERO.sub}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-10 flex flex-wrap gap-3"
            >
              <MagneticButton href={waLink} target="_blank" rel="noopener noreferrer" className="btn-p">
                {PROMO_HERO.ctaPrimary} →
              </MagneticButton>
              <MagneticButton href={brand.calendly} target="_blank" rel="noopener noreferrer" className="btn-o">
                {PROMO_HERO.ctaSecondary}
              </MagneticButton>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="hidden lg:block"
          >
            <Countdown />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE editorial */}
      <div className="border-y border-border-soft py-3 bg-ink overflow-hidden">
        <Marquee
          items={["Meta Ads · Facebook + Instagram", "Dirección de arte editorial", "Estrategia regional AR · PY", "Reporting transparente", "Sin permanencia obligatoria", "Atención boutique · 4 cuentas/mes"]}
          speed={36}
        />
      </div>

      {/* MANIFIESTO */}
      <section className="bg-ink py-24 lg:py-32 px-[5vw]">
        <div className="max-w-[900px] mx-auto">
          <Reveal>
            <div className="s-label">Manifiesto</div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="font-serif italic text-cream" style={{ fontSize: "clamp(1.6rem, 3.5vw, 2.6rem)", fontWeight: 300, lineHeight: 1.35, letterSpacing: "0.01em" }}>
              {PROMO_MANIFIESTO[0]}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="font-light text-warm leading-[1.8] mt-6" style={{ fontSize: "1.05rem" }}>
              {PROMO_MANIFIESTO[1]}
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="font-serif italic text-gold mt-6" style={{ fontSize: "1.4rem", fontWeight: 300, letterSpacing: "0.04em" }}>
              {PROMO_MANIFIESTO[2]}
            </p>
          </Reveal>
        </div>
      </section>

      {/* POR QUÉ GAUDIAN */}
      <section className="bg-graphite py-24 lg:py-32 px-[5vw]">
        <div className="max-w-[1400px] mx-auto">
          <Reveal>
            <div className="s-label">¿Por qué GAUDIAN?</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="s-h2">Cuatro razones<br/>concretas.</h2>
          </Reveal>

          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px border border-border-soft bg-border-soft mt-16">
            {PROMO_RAZONES.map((r) => (
              <RevealItem key={r.n}>
                <motion.div
                  whileHover={{ backgroundColor: "#0c0c0b" }}
                  className="bg-graphite p-8 h-full transition-colors min-h-[240px]"
                >
                  <div className="font-display text-gold mb-5" style={{ fontSize: "2rem", letterSpacing: "0.04em" }}>
                    {r.n}
                  </div>
                  <h3 className="font-display uppercase text-cream mb-3" style={{ fontSize: "1.3rem", letterSpacing: "0.05em", lineHeight: 1.05 }}>
                    {r.titulo}
                  </h3>
                  <p className="font-light leading-[1.7] text-muted" style={{ fontSize: "12px" }}>
                    {r.desc}
                  </p>
                </motion.div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      {/* CASO DESTACADO */}
      <section className="bg-ink overflow-hidden">
        <div className="grid lg:grid-cols-[1.1fr_1fr] gap-px border-y border-border-soft bg-border-soft">
          <div className="bg-ink relative overflow-hidden min-h-[420px]">
            <img
              src={CASE_IMG}
              alt="Caso de éxito GAUDIAN"
              className="absolute inset-0 w-full h-full object-cover"
              loading="lazy"
              style={{ filter: "brightness(.42) saturate(.7)" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-ink via-transparent to-transparent" />
            <div className="relative p-10 lg:p-16 h-full flex flex-col justify-end">
              <div className="s-label text-gold">Caso real</div>
              <h3 className="font-display text-cream" style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)", letterSpacing: "0.04em", lineHeight: 0.95 }}>
                {PROMO_CASO.cliente}
              </h3>
              <p className="font-sans uppercase text-muted mt-1" style={{ fontSize: "11px", letterSpacing: "0.18em" }}>
                {PROMO_CASO.rubro}
              </p>
            </div>
          </div>
          <div className="bg-ink p-10 lg:p-16 flex flex-col justify-center">
            <Reveal>
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className="font-display text-gold leading-none"
                style={{ fontSize: "clamp(5rem, 12vw, 9rem)", letterSpacing: "0.02em" }}
              >
                <Counter to={48} prefix="+" suffix="%" />
              </motion.div>
              <p className="font-sans uppercase text-muted mt-3" style={{ fontSize: "11px", letterSpacing: "0.18em" }}>
                {PROMO_CASO.metricaLabel}
              </p>
              <p className="font-serif italic text-warm leading-[1.65] mt-8" style={{ fontSize: "1.05rem", fontWeight: 300 }}>
                "{PROMO_CASO.texto}"
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* PLANES */}
      <section className="bg-graphite py-24 lg:py-32 px-[5vw]" id="planes">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-[1fr_auto] gap-6 items-end mb-12">
            <div>
              <Reveal>
                <div className="s-label">Inversión</div>
              </Reveal>
              <Reveal delay={0.1}>
                <h2 className="s-h2">Tres caminos.<br/><span className="font-serif italic text-gold" style={{ fontWeight: 300 }}>Una sola ambición.</span></h2>
              </Reveal>
            </div>
            <CurrencyToggle value={cur} onChange={setCur} />
          </div>

          <RevealStagger className="grid lg:grid-cols-3 border border-border-soft bg-border-soft gap-px">
            {PROMO_PLANES.map((p) => {
              const hot = p.destacado;
              const precio = p.precios[cur];
              return (
                <RevealItem key={p.nombre} y={40}>
                  <motion.article
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 22 }}
                    className={`relative p-10 flex flex-col h-full overflow-hidden ${hot ? "bg-cream text-ink lg:scale-[1.04] shadow-[0_30px_80px_-30px_rgba(0,0,0,0.5)] z-10" : "bg-graphite text-cream"}`}
                  >
                    {/* ribbon */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] ${hot ? "bg-ink" : "bg-gold"}`} />

                    {/* badge vertical premium para destacado */}
                    {p.badge && (
                      <div
                        className="absolute -left-12 top-12 origin-top-left"
                        style={{ transform: "rotate(-90deg) translate(-100%, 0)" }}
                      >
                        <span className="font-sans uppercase text-gold" style={{ fontSize: "9px", letterSpacing: "0.3em" }}>
                          ◆ {p.badge}
                        </span>
                      </div>
                    )}

                    <div className={`font-sans uppercase mb-5 ${hot ? "text-ink/50" : "text-muted"}`} style={{ fontSize: "9px", letterSpacing: "0.2em" }}>
                      Plan
                    </div>

                    <h3 className={`font-display ${hot ? "text-ink" : "text-cream"}`} style={{ fontSize: "2.4rem", letterSpacing: "0.05em" }}>
                      {p.nombre}
                    </h3>
                    <p className={`font-serif italic mb-3 ${hot ? "text-ink/70" : "text-gold"}`} style={{ fontSize: "1rem", fontWeight: 300 }}>
                      {p.para}
                    </p>
                    <p className={`font-light leading-[1.5] mb-6 ${hot ? "text-ink/65" : "text-muted"}`} style={{ fontSize: "12px" }}>
                      {p.descripcion}
                    </p>

                    <div className="mb-1 mt-2">
                      <span className={`font-sans uppercase ${hot ? "text-ink/40" : "text-muted"}`} style={{ fontSize: "9px", letterSpacing: "0.18em" }}>
                        Inversión desde
                      </span>
                    </div>
                    <div className={`font-display leading-none ${hot ? "text-ink" : "text-cream"}`} style={{ fontSize: "3rem", letterSpacing: "0.03em" }}>
                      {precio}
                    </div>
                    <div className={`font-sans ${hot ? "text-ink/50" : "text-muted"} mb-6`} style={{ fontSize: "10px", letterSpacing: "0.1em" }}>
                      {p.periodo}
                    </div>

                    <hr className={`border-0 border-t mb-5 ${hot ? "border-ink/12" : "border-border-soft"}`} />

                    <ul className="list-none flex-1 mb-6">
                      {p.incluye.map((it, idx) => (
                        <motion.li
                          key={it}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + idx * 0.04, duration: 0.4 }}
                          className={`flex items-start gap-2 py-1.5 font-light leading-[1.5] ${hot ? "text-ink/75 border-b border-ink/8" : "text-warm border-b border-border-soft"} last:border-b-0`}
                          style={{ fontSize: "12px" }}
                        >
                          <span className={`flex-shrink-0 mt-1 ${hot ? "text-ink/40" : "text-gold"}`} style={{ fontSize: "10px" }}>—</span>
                          {it}
                        </motion.li>
                      ))}
                    </ul>

                    <a
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`mt-auto inline-flex items-center justify-center gap-2 py-3.5 font-sans font-medium uppercase border transition-all hover:gap-3 ${hot ? "bg-ink text-cream border-ink hover:bg-cream hover:text-ink hover:border-ink" : "border-border-mid text-cream hover:bg-cream hover:text-ink hover:border-cream"}`}
                      style={{ fontSize: "11px", letterSpacing: "0.12em", padding: "14px 24px" }}
                    >
                      {p.cta} →
                    </a>
                  </motion.article>
                </RevealItem>
              );
            })}
          </RevealStagger>

          <Reveal delay={0.2}>
            <div className="mt-8 p-5 border border-border-soft text-muted font-light leading-[1.65]" style={{ fontSize: "12px" }}>
              <strong className="text-warm font-normal">Importante: </strong> {PROMO_NOTA}
            </div>
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink py-24 lg:py-32 px-[5vw]">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[400px_1fr] gap-16">
          <Reveal>
            <div className="s-label">Dudas</div>
            <h2 className="s-h2">Preguntas<br/>frecuentes</h2>
            <p className="font-serif italic text-warm mt-6 max-w-sm" style={{ fontSize: "1.1rem", fontWeight: 300 }}>
              Lo que probablemente quieras saber antes de arrancar.
            </p>
          </Reveal>

          <div>
            <FAQList />
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-graphite py-24 lg:py-32 px-[5vw] border-t border-border-soft">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[1fr_auto] items-end gap-12">
          <Reveal>
            <div className="s-label">Empezar</div>
            <h2 className="font-display text-cream" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.88, letterSpacing: "0.03em" }}>
              {PROMO_CTA_FINAL.h1}
            </h2>
            <p className="font-light text-warm leading-[1.7] mt-6 max-w-xl" style={{ fontSize: "1rem" }}>
              {PROMO_CTA_FINAL.sub}
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="flex flex-col gap-6 lg:items-end">
              <Countdown label="Cierre de inscripciones en" />
              <div className="flex flex-wrap gap-3">
                <MagneticButton href={waLink} target="_blank" rel="noopener noreferrer" className="btn-p">
                  {PROMO_CTA_FINAL.cta} →
                </MagneticButton>
                <MagneticButton href={brand.calendly} target="_blank" rel="noopener noreferrer" className="btn-o">
                  Agendar 20 min
                </MagneticButton>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PromoFooter />
    </>
  );
}

function FAQList() {
  const [open, setOpen] = useState(0);
  return (
    <div className="border-t border-border-soft">
      {PROMO_FAQS.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="border-b border-border-soft">
            <button
              className="w-full flex items-center justify-between text-left py-6 group"
              onClick={() => setOpen(isOpen ? -1 : i)}
            >
              <span className="font-display uppercase pr-6 group-hover:text-gold transition text-cream" style={{ fontSize: "1.05rem", letterSpacing: "0.05em" }}>
                {f.q}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 90 : 0 }}
                transition={{ duration: 0.3 }}
                className={`block w-6 h-px ${isOpen ? "bg-gold" : "bg-muted"}`}
              />
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
