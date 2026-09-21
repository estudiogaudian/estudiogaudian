import { useState } from "react";
import { useRegion } from "../context/RegionContext";
import Reveal from "./motion/Reveal";

const FORMSPREE = "https://formspree.io/f/maqvaqjj";

export default function LeadMagnet() {
  const { region } = useRegion();
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onSubmit = async (e) => {
    e.preventDefault();
    if (hp) return;
    if (!EMAIL_RE.test(email)) {
      setError("Por favor ingresá un email válido.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const r = await fetch(FORMSPREE, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          email,
          _gotcha: hp,
          _subject: "Nueva descarga — Guía de Automatización GAUDIAN",
          source: "lead-magnet",
          region: region.code,
        }),
      });
      if (!r.ok) throw new Error("Error de envío");
      setSent(true);
    } catch {
      setError("No pudimos enviar tu solicitud. Probá nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-graphite py-24 lg:py-32 relative overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.05]"
        style={{ background: "linear-gradient(135deg, transparent 0%, #3B82F6 50%, transparent 100%)" }}
      />
      <div className="container-x relative grid lg:grid-cols-12 gap-10 items-center">
        <Reveal className="lg:col-span-7">
          <div className="s-label">Recurso gratuito</div>
          <h2 className="font-display text-cream" style={{ fontSize: "clamp(2rem, 4vw, 3.6rem)", lineHeight: 1.02, letterSpacing: "-0.02em" }}>
            Dónde sería útil
          </h2>
          <p className="italic-serif mt-2" style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.8rem)", fontWeight: 600, letterSpacing: "-0.01em" }}>
            automatizar tu negocio.
          </p>
          <p className="mt-6 text-warm leading-[1.7] max-w-xl font-light" style={{ fontSize: "1rem" }}>
            Una guía práctica para detectar los procesos que hoy te consumen tiempo — mensajes, consultas, seguimiento de leads — y que podrían funcionar solos con IA y automatización.
          </p>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-5">
          <div className="border border-border-soft p-10 bg-ink">
            {!sent ? (
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="s-label">Descargá el PDF</div>
                {/* honeypot anti-bot */}
                <input
                  type="text"
                  name="_gotcha"
                  value={hp}
                  onChange={(e) => setHp(e.target.value)}
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                  style={{ position: "absolute", left: "-9999px", width: 0, height: 0, opacity: 0 }}
                />
                <input
                  type="email"
                  required
                  placeholder="tu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-transparent border-0 border-b border-border-soft py-3 focus:outline-none focus:border-gold transition placeholder:text-muted text-cream font-sans"
                  style={{ fontSize: "14px", fontWeight: 300 }}
                />
                <button type="submit" disabled={loading} className="btn-p w-full disabled:opacity-50">
                  {loading ? "Enviando…" : "Quiero la guía"}
                </button>
                {error && <p className="text-red-400 font-light" style={{ fontSize: "11px" }}>{error}</p>}
                <p className="text-muted font-light leading-[1.6]" style={{ fontSize: "10px" }}>
                  Sin spam. Te enviamos la guía y, ocasionalmente, contenido sobre IA y automatización para negocios.
                </p>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="s-label justify-center">Recibido</div>
                <p className="font-display text-cream mt-3" style={{ fontSize: "1.8rem", letterSpacing: "0.05em" }}>Revisá tu correo.</p>
                <p className="text-muted mt-2 font-light" style={{ fontSize: "12px" }}>Te enviamos el PDF a {email}.</p>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
