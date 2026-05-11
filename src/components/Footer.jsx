import { Link } from "react-router-dom";
import { brand, nav } from "../data/site";

export default function Footer() {
  return (
    <footer className="bg-ink border-t border-border-soft px-[5vw] py-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-[auto_1fr_auto] items-center gap-12 pb-8 border-b border-border-soft mb-8">
          <div className="flex items-center gap-3">
            <span className="font-display text-cream" style={{ fontSize: "24px", letterSpacing: "0.15em" }}>
              GAUDIAN
            </span>
            <span className="w-px h-4 bg-border-soft" />
            <span className="font-sans uppercase text-muted" style={{ fontSize: "9px", fontWeight: 300, letterSpacing: "0.18em" }}>
              Estudio boutique de comunicación
            </span>
          </div>
          <ul className="flex flex-wrap gap-7 list-none lg:justify-center">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="font-sans uppercase text-muted hover:text-cream transition" style={{ fontSize: "10px", letterSpacing: "0.12em" }}>
                  {n.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/portfolio" className="font-sans uppercase text-muted hover:text-cream transition" style={{ fontSize: "10px", letterSpacing: "0.12em" }}>
                Portfolio
              </Link>
            </li>
          </ul>
          <div className="flex gap-2.5">
            <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="w-8 h-8 border border-border-soft flex items-center justify-center hover:border-border-mid transition" aria-label="Instagram">
              <svg className="w-3.5 h-3.5 fill-muted" viewBox="0 0 24 24"><path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 2.7.27.27 2.69.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.2 4.36 2.62 6.78 6.98 6.98C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c4.35-.2 6.78-2.62 6.98-6.98.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95C23.73 2.69 21.31.27 16.95.07 15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 100 12.32 6.16 6.16 0 000-12.32zM12 16a4 4 0 110-8 4 4 0 010 8zm6.41-11.85a1.44 1.44 0 100 2.88 1.44 1.44 0 000-2.88z"/></svg>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap justify-between items-start gap-3">
          <div className="font-light text-muted leading-[1.7]" style={{ fontSize: "10px" }}>
            <strong className="text-warm font-normal">{brand.email}</strong> · {brand.phoneDisplay}<br/>
            {brand.locations.join(" · ")}
          </div>
          <div className="font-light text-muted leading-[1.7] text-right" style={{ fontSize: "10px", letterSpacing: "0.08em" }}>
            © {new Date().getFullYear()} GAUDIAN. Todos los derechos reservados.<br/>
            <Link to="/terminos" className="hover:text-cream transition">Términos</Link> · <Link to="/privacidad" className="hover:text-cream transition">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
