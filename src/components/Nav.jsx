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
          <a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 font-sans uppercase text-cream border border-border-mid hover:bg-cream hover:text-ink transition-all" style={{ fontSize: "11px", fontWeight: 500, letterSpacing: "0.1em", padding: "9px 18px" }}>
            <svg viewBox="0 0 24 24" className="w-3 h-3 fill-current"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.967-.94 1.165-.173.198-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.15-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347zM12.05 21.785h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.889-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884zM20.52 3.449C18.24 1.245 15.24 0 12.045 0 5.463 0 .104 5.334.101 11.892c0 2.096.549 4.142 1.595 5.945L0 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.581 0 11.940-5.335 11.943-11.893a11.821 11.821 0 00-3.416-8.452z"/></svg>
            WhatsApp
          </a>
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
