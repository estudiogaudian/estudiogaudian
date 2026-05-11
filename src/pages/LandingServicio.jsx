import { brand, waLink } from "../data/site";
import { useRegion } from "../context/RegionContext";
import Planes from "../components/Planes";
import LeadMagnet from "../components/LeadMagnet";
import FAQ from "../components/FAQ";
import Contacto from "../components/Contacto";
import SEOHead from "../components/SEOHead";
import Reveal, { RevealStagger, RevealItem } from "../components/motion/Reveal";
import MagneticButton from "../components/motion/MagneticButton";
import { motion } from "framer-motion";

const HEADER_IMG = "https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1600&q=75&auto=format&fit=crop";

export default function LandingServicio({ servicio, ciudad, intro, beneficios, eyebrow, slug }) {
  const { region } = useRegion();
  const meta = `${servicio} en ${ciudad} · GAUDIAN — Estudio boutique de comunicación, diseño y publicidad.`;

  return (
    <>
      <SEOHead
        title={`${servicio} en ${ciudad} | GAUDIAN`}
        description={meta}
        canonical={`https://estudiogaudian.com/${slug}`}
        region={region}
      />

      {/* Hero editorial específico */}
      <section className="relative min-h-[80vh] flex flex-col justify-end px-[5vw] pt-[120px] pb-[5vh] overflow-hidden bg-ink">
        <img
          src={HEADER_IMG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(.32) saturate(.7)" }}
        />
        <div aria-hidden className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(12,12,11,.2) 0%, rgba(12,12,11,.6) 60%, rgba(12,12,11,1) 100%)" }} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative z-10 max-w-[1400px] w-full mx-auto"
        >
          <div className="inline-flex items-center gap-2.5 mb-8 text-gold" style={{ fontSize: "10px", letterSpacing: "0.22em", textTransform: "uppercase" }}>
            <span className="h-px w-7 bg-gold" />
            {eyebrow}
          </div>
          <h1 className="font-display text-cream" style={{ fontSize: "clamp(4rem, 10vw, 9rem)", lineHeight: 0.88, letterSpacing: "0.03em" }}>
            {servicio}
          </h1>
          <p className="font-serif italic text-warm mt-2" style={{ fontSize: "clamp(1.4rem, 3vw, 2.4rem)", fontWeight: 300, letterSpacing: "0.05em" }}>
            en {ciudad}.
          </p>
          <p className="font-light text-warm leading-[1.75] mt-8 max-w-[640px]" style={{ fontSize: "1.05rem" }}>
            {intro}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <MagneticButton href={brand.calendly} target="_blank" rel="noopener noreferrer" className="btn-p">
              Reservar reunión →
            </MagneticButton>
            <MagneticButton href={waLink} target="_blank" rel="noopener noreferrer" className="btn-o">
              WhatsApp directo
            </MagneticButton>
          </div>
        </motion.div>
      </section>

      {/* Beneficios */}
      <section className="bg-graphite py-32 lg:py-40">
        <div className="container-x">
          <Reveal>
            <div className="s-label">¿Por qué GAUDIAN?</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="s-h2">
              Para marcas<br/>
              <span className="italic-serif" style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic" }}>en {ciudad}.</span>
            </h2>
          </Reveal>

          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px border border-border-soft bg-border-soft mt-12">
            {beneficios.map((b, i) => (
              <RevealItem key={b.titulo}>
                <motion.article
                  whileHover={{ backgroundColor: "#0c0c0b" }}
                  className="bg-graphite p-10 h-full transition-colors"
                >
                  <div className="font-display text-gold mb-5" style={{ fontSize: "2rem", letterSpacing: "0.04em" }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-display uppercase text-cream mb-3" style={{ fontSize: "1.4rem", letterSpacing: "0.05em" }}>
                    {b.titulo}
                  </h3>
                  <p className="font-light leading-[1.7] text-muted" style={{ fontSize: "13px" }}>{b.desc}</p>
                </motion.article>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>
      </section>

      <Planes />
      <LeadMagnet />
      <FAQ />
      <Contacto />
    </>
  );
}
