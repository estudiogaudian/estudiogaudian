import { brand, waLink } from "../data/site";
import Reveal from "./motion/Reveal";
import MagneticButton from "./motion/MagneticButton";

const CT_IMG = "https://images.unsplash.com/photo-1531973576160-7125cd663d86?w=1600&q=75&auto=format&fit=crop";

export default function Contacto() {
  return (
    <section id="contacto" className="bg-ink relative">
      {/* Hero contacto editorial con imagen */}
      <div className="relative h-[50vh] overflow-hidden flex items-end px-[5vw] pb-[5vh]">
        <img
          src={CT_IMG}
          alt=""
          className="absolute inset-0 w-full h-full object-cover object-[center_40%]"
          loading="lazy"
          style={{ filter: "brightness(.3) saturate(.6)" }}
        />
        <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(12,12,11,.95) 0%, rgba(12,12,11,.2) 100%)" }} />
        <div className="relative z-10 w-full">
          <Reveal>
            <div className="s-label">09 — Contacto</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="font-display text-cream" style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 0.88, letterSpacing: "0.03em" }}>
              Hablemos.
            </h2>
          </Reveal>
        </div>
      </div>

      {/* Bloque info + acciones */}
      <div className="container-x py-20 grid lg:grid-cols-2 gap-24">
        <Reveal className="space-y-10">
          <p className="font-light leading-[1.75] text-warm" style={{ fontSize: "1rem" }}>
            Reservá una reunión de 30 minutos sin compromiso. Te decimos con honestidad si podemos ayudarte y, si no, a dónde te conviene apuntar.
          </p>

          <div className="space-y-4">
            {[
              { l: "Email", v: brand.email, href: `mailto:${brand.email}` },
              { l: "WhatsApp", v: brand.phoneDisplay, href: waLink },
              { l: "Reuniones", v: "Calendly · sin compromiso", href: brand.calendly },
              { l: "Atención", v: brand.hours },
              { l: "Operamos en", v: brand.locations.join(" · ") },
            ].map((d) => (
              <div key={d.l} className="flex items-start gap-5">
                <div className="font-sans uppercase text-muted min-w-[80px] pt-0.5" style={{ fontSize: "9px", letterSpacing: "0.18em" }}>
                  {d.l}
                </div>
                <div className="font-sans text-cream" style={{ fontSize: "14px", fontWeight: 400 }}>
                  {d.href ? (
                    <a href={d.href} target={d.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" className="border-b border-border-soft hover:border-cream transition-colors">
                      {d.v}
                    </a>
                  ) : d.v}
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-4">
            <MagneticButton href={brand.calendly} target="_blank" rel="noopener noreferrer" className="btn-p">
              Reservar reunión →
            </MagneticButton>
            <MagneticButton href={waLink} target="_blank" rel="noopener noreferrer" className="btn-o">
              WhatsApp
            </MagneticButton>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="border border-border-soft p-10">
            <div className="s-label">Si llegaste hasta acá</div>
            <p className="font-serif italic text-warm leading-[1.55] mb-8" style={{ fontSize: "clamp(1.4rem, 2.4vw, 1.9rem)", fontWeight: 300 }}>
              Probablemente seamos para vos.
            </p>
            <p className="font-light leading-[1.75] text-muted mb-8" style={{ fontSize: "0.95rem" }}>
              Trabajamos con un número limitado de marcas por trimestre. Si tu negocio busca autoridad real y resultados medibles, agendá una reunión y conversamos.
            </p>
            <a href={brand.calendly} target="_blank" rel="noopener noreferrer" className="btn-gold">
              Coordinar reunión →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
