import { Link } from "react-router-dom";
import { InstagramLogo } from "@phosphor-icons/react";
import { brand, nav } from "../data/site";

export default function Footer() {
  return (
    <footer className="border-t border-hairline bg-canvas">
      <div className="wrap grid gap-10 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Link to="/" className="font-sans text-[19px] font-semibold tracking-[0.14em] text-fg">GAUDIAN</Link>
          <p className="t-body mt-4 max-w-[34ch]">Especialistas en Meta Ads. Hacemos el contenido de tu marca y lo pautamos en Facebook e Instagram.</p>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="mb-4 text-[15px] font-medium text-fg">Secciones</h2>
          <ul className="grid gap-2.5">
            {nav.map((n) => (
              <li key={n.href}>
                <a href={`/${n.href}`} className="text-[15px] text-fg-muted transition-colors hover:text-fg">{n.label}</a>
              </li>
            ))}
            <li><Link to="/portfolio" className="text-[15px] text-fg-muted transition-colors hover:text-fg">Portfolio</Link></li>
            <li><Link to="/cotizar" className="text-[15px] text-fg-muted transition-colors hover:text-fg">Cotizador</Link></li>
          </ul>
        </nav>

        <div>
          <h2 className="mb-4 text-[15px] font-medium text-fg">Contacto</h2>
          <ul className="grid gap-2.5 text-[15px] text-fg-muted">
            <li><a href={`mailto:${brand.email}`} className="break-all transition-colors hover:text-fg">{brand.email}</a></li>
            <li className="tnum">{brand.phoneDisplay}</li>
            <li>{brand.locations.join(" / ")}</li>
            <li>
              <a href={brand.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 transition-colors hover:text-fg">
                <InstagramLogo size={18} aria-hidden /> @estudiogaudian
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="wrap flex flex-wrap items-center justify-between gap-3 border-t border-hairline py-6 text-[13px] text-fg-subtle">
        <p>© {new Date().getFullYear()} GAUDIAN. Todos los derechos reservados.</p>
        <p className="flex gap-5">
          <Link to="/terminos" className="transition-colors hover:text-fg">Términos</Link>
          <Link to="/privacidad" className="transition-colors hover:text-fg">Privacidad</Link>
        </p>
      </div>
    </footer>
  );
}
