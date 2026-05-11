import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { brand, nav, waLink } from "../data/site";
import { useRegion } from "../context/RegionContext";
import RegionSwitcher from "./RegionSwitcher";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { region } = useRegion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 h-[68px] px-[5vw] flex items-center justify-between transition-all duration-500 border-b ${
          scrolled ? "bg-ink/90 backdrop-blur-xl border-border-soft" : "border-transparent"
        }`}
      >
        <Link to="/" className="flex items-center gap-3.5" aria-label="GAUDIAN inicio">
          <span
            className="font-display text-cream"
            style={{ fontSize: "28px", letterSpacing: "0.15em", lineHeight: 1 }}
          >
            GAUDIAN
          </span>
          <span className="w-px h-5 bg-border-mid" />
          <span className="hidden md:inline font-sans text-muted uppercase whitespace-nowrap" style={{ fontSize: "9px", fontWeight: 300, letterSpacing: "0.2em" }}>
            Estudio boutique de comunicación
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {nav.map((n) => (
            <a key={n.href} href={n.href} className="font-sans uppercase text-muted hover:text-cream transition" style={{ fontSize: "11px", letterSpacing: "0.13em" }}>
              {n.label}
            </a>
          ))}
          <Link to="/portfolio" className="font-sans uppercase text-muted hover:text-cream transition" style={{ fontSize: "11px", letterSpacing: "0.13em" }}>
            Portfolio
          </Link>
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <RegionSwitcher inverted />
          <Link to="/cotizar" className="inline-flex items-center gap-2 font-sans uppercase bg-cream text-ink hover:bg-gold transition-all" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", padding: "9px 18px" }}>
            Cotizar →
          </Link>
        </div>

        <button className="lg:hidden flex flex-col gap-1.5 z-50" onClick={() => setOpen((v) => !v)} aria-label="Menú">
          <span className="block w-5 h-px bg-cream" />
          <span className="block w-5 h-px bg-cream" />
          <span className="block w-5 h-px bg-cream" />
        </button>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 bg-ink flex flex-col items-center justify-center gap-8 lg:hidden">
          {nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-display text-cream" style={{ fontSize: "3.2rem", letterSpacing: "0.08em" }}>
              {n.label}
            </a>
          ))}
          <Link to="/cotizar" onClick={() => setOpen(false)} className="font-display text-gold" style={{ fontSize: "3.2rem", letterSpacing: "0.08em" }}>
            Cotizar
          </Link>
          <Link to="/portfolio" onClick={() => setOpen(false)} className="font-display text-cream" style={{ fontSize: "3.2rem", letterSpacing: "0.08em" }}>
            Portfolio
          </Link>
          <RegionSwitcher />
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-p mt-4">WhatsApp</a>
        </div>
      )}
    </>
  );
}
