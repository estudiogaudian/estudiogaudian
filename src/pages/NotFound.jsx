import { Link } from "react-router-dom";
import { brand } from "../data/site";

export default function NotFound() {
  return (
    <section className="bg-ink min-h-[80vh] flex items-center pt-[80px]">
      <div className="container-x text-center max-w-2xl mx-auto py-20">
        <div className="s-label justify-center text-gold">Error 404</div>
        <h1 className="font-display text-cream" style={{ fontSize: "clamp(4rem, 12vw, 9rem)", lineHeight: 0.88, letterSpacing: "0.03em" }}>
          No existe.
        </h1>
        <p className="font-serif italic text-warm mt-2 mb-10" style={{ fontSize: "1.4rem", fontWeight: 300 }}>
          Pero podemos ayudarte a construir una que sí.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-3">
          <Link to="/" className="btn-p">Volver al inicio →</Link>
          <a href={brand.calendly} target="_blank" rel="noopener noreferrer" className="btn-o">
            Reservar reunión
          </a>
        </div>
      </div>
    </section>
  );
}
