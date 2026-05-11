import { useEffect, useState } from "react";

const FORMSPREE = "https://formspree.io/f/xykolkjn";

export default function ExitIntent() {
  const [show, setShow] = useState(false);
  const [shown, setShown] = useState(false);
  const [email, setEmail] = useState("");
  const [hp, setHp] = useState(""); // honeypot
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    if (sessionStorage.getItem("gaudian_exit_shown")) return;
    const onLeave = (e) => {
      if (e.clientY <= 0 && !shown) {
        setShown(true);
        setShow(true);
        sessionStorage.setItem("gaudian_exit_shown", "1");
      }
    };
    document.addEventListener("mouseleave", onLeave);
    return () => document.removeEventListener("mouseleave", onLeave);
  }, [shown]);

  const submit = async (e) => {
    e.preventDefault();
    if (hp) return; // bot trapped
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
        body: JSON.stringify({ email, _gotcha: hp, source: "exit-intent", _subject: "Lead exit-intent — GAUDIAN" }),
      });
      if (!r.ok) throw new Error("send fail");
      setSent(true);
    } catch {
      setError("No pudimos enviar tu solicitud. Probá nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm animate-fade-in p-6">
      <div className="bg-graphite border border-border-soft max-w-lg w-full p-10 relative">
        <button onClick={() => setShow(false)} className="absolute top-4 right-5 text-muted hover:text-cream text-2xl font-light" aria-label="Cerrar">×</button>
        {!sent ? (
          <>
            <div className="s-label">Antes de irte</div>
            <h3 className="font-display text-cream" style={{ fontSize: "2.2rem", lineHeight: 0.95, letterSpacing: "0.03em" }}>
              Llevate la guía gratis.
            </h3>
            <p className="font-serif italic text-gold mt-1 mb-5" style={{ fontSize: "1.2rem", fontWeight: 300 }}>
              12 errores que matan tu Instagram.
            </p>
            <p className="text-warm font-light mb-6 leading-[1.65]" style={{ fontSize: "13px" }}>
              PDF de 6 páginas con los errores más comunes que cometen las marcas locales y cómo corregirlos esta semana.
            </p>
            <form onSubmit={submit} className="space-y-3">
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
              <button type="submit" disabled={loading} className="btn-gold w-full disabled:opacity-50">
                {loading ? "Enviando…" : "Enviarme la guía"}
              </button>
              {error && <p className="text-red-400 font-light" style={{ fontSize: "11px" }}>{error}</p>}
            </form>
          </>
        ) : (
          <div className="text-center py-6">
            <div className="s-label justify-center">Listo</div>
            <p className="font-display text-cream mt-3" style={{ fontSize: "1.6rem", letterSpacing: "0.05em" }}>Revisá tu correo.</p>
            <p className="text-muted mt-2 font-light" style={{ fontSize: "12px" }}>Enviamos la guía a {email}.</p>
          </div>
        )}
      </div>
    </div>
  );
}
