import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Reveal from "../components/motion/Reveal";
import SEOHead from "../components/SEOHead";
import { useRegion } from "../context/RegionContext";

function renderBlock(b, i) {
  if (b.type === "p")
    return <p key={i} dangerouslySetInnerHTML={{ __html: b.text }} className="font-light leading-[1.8] text-warm" style={{ fontSize: "14px", marginBottom: "1rem" }} />;
  if (b.type === "ul")
    return (
      <ul key={i} className="list-disc pl-6 mb-3 space-y-2">
        {b.items.map((it, j) => (
          <li key={j} dangerouslySetInnerHTML={{ __html: it }} className="font-light leading-[1.75] text-warm" style={{ fontSize: "13px" }} />
        ))}
      </ul>
    );
  if (b.type === "ol")
    return (
      <ol key={i} className="list-decimal pl-6 mb-3 space-y-2">
        {b.items.map((it, j) => (
          <li key={j} dangerouslySetInnerHTML={{ __html: it }} className="font-light leading-[1.75] text-warm" style={{ fontSize: "13px" }} />
        ))}
      </ol>
    );
  if (b.type === "highlight")
    return (
      <div key={i} className="border-l-2 border-gold bg-gold/[0.04] px-5 py-4 my-4">
        <p dangerouslySetInnerHTML={{ __html: b.text }} className="font-light leading-[1.7] text-warm" style={{ fontSize: "13px" }} />
      </div>
    );
  return null;
}

export default function LegalPage({
  eyebrow,
  titleLine1,
  titleLine2,
  subtitle,
  meta,
  sections,
  metaTitle,
  metaDescription,
  canonical,
}) {
  const { region } = useRegion();
  const [active, setActive] = useState(sections[0]?.id);

  useEffect(() => {
    const onScroll = () => {
      let current = sections[0]?.id;
      sections.forEach((s) => {
        const el = document.getElementById(s.id);
        if (el && window.scrollY >= el.offsetTop - 140) current = s.id;
      });
      setActive(current);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  return (
    <>
      <SEOHead title={metaTitle} description={metaDescription} canonical={canonical} region={region} />

      {/* HERO Legal */}
      <section className="relative pt-[120px] px-[5vw] overflow-hidden bg-ink">
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none"
          style={{ background: "linear-gradient(135deg, rgba(184,168,130,.05) 0%, transparent 50%)" }}
        />
        <div className="relative max-w-[1400px] mx-auto pb-2">
          <Reveal>
            <div className="s-label">{eyebrow}</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h1
              className="font-display text-cream"
              style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", lineHeight: 0.88, letterSpacing: "0.03em", marginBottom: "0.5rem" }}
            >
              {titleLine1}<br/>{titleLine2}
            </h1>
          </Reveal>
          {subtitle && (
            <Reveal delay={0.2}>
              <p
                className="font-serif italic text-gold mb-10"
                style={{ fontSize: "clamp(1.1rem, 2.2vw, 1.6rem)", fontWeight: 300, letterSpacing: "0.06em" }}
              >
                {subtitle}
              </p>
            </Reveal>
          )}

          {meta && (
            <Reveal delay={0.3}>
              <div className="flex flex-wrap border-t border-b border-border-soft">
                {meta.map((m, i) => (
                  <div
                    key={m.l}
                    className={`flex flex-col gap-1 py-5 pr-8 mr-8 ${i < meta.length - 1 ? "border-r border-border-soft" : ""}`}
                  >
                    <span className="font-sans uppercase text-muted" style={{ fontSize: "9px", letterSpacing: "0.18em" }}>
                      {m.l}
                    </span>
                    <span className="font-sans text-warm" style={{ fontSize: "13px", fontWeight: 400 }} dangerouslySetInnerHTML={{ __html: m.v }} />
                  </div>
                ))}
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* LAYOUT con sidebar sticky + contenido */}
      <section className="px-[5vw] py-16 lg:py-20 bg-ink">
        <div className="max-w-[1400px] mx-auto grid lg:grid-cols-[280px_1fr] gap-16">
          {/* Sidebar nav */}
          <aside className="hidden lg:block sticky top-[90px] self-start">
            <div className="font-sans uppercase text-muted mb-4" style={{ fontSize: "9px", letterSpacing: "0.2em" }}>
              Índice
            </div>
            <ul className="list-none border-l border-border-soft -ml-px">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className={`block font-light py-2 pl-4 transition-all border-l-2 -ml-px ${
                      active === s.id ? "text-cream border-gold" : "text-muted border-transparent hover:text-cream hover:border-gold/40"
                    }`}
                    style={{ fontSize: "12px" }}
                  >
                    {s.n}. {s.titulo}
                  </a>
                </li>
              ))}
            </ul>
          </aside>

          {/* Content */}
          <main className="max-w-[800px]">
            {sections.map((s, idx) => (
              <motion.div
                key={s.id}
                id={s.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className={`${idx < sections.length - 1 ? "mb-12 pb-12 border-b border-border-soft" : "mb-12"}`}
              >
                <div className="font-display text-gold mb-3" style={{ fontSize: "1.6rem", letterSpacing: "0.04em" }}>
                  {s.n}
                </div>
                <h2 className="font-display uppercase text-cream mb-5" style={{ fontSize: "1.8rem", letterSpacing: "0.04em", lineHeight: 0.95 }}>
                  {s.titulo}
                </h2>
                {s.body.map(renderBlock)}
              </motion.div>
            ))}
          </main>
        </div>
      </section>
    </>
  );
}
