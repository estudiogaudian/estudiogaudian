import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate, useLocation } from "react-router-dom";
import { useRegion } from "../context/RegionContext";

const STORAGE_KEY = "gaudian_welcome_choice";

const OPTIONS = [
  {
    code: "ar",
    flag: "🇦🇷",
    name: "Argentina",
    sub: "Clorinda · Formosa · Resto del país",
    href: "/ar",
  },
  {
    code: "py",
    flag: "🇵🇾",
    name: "Paraguay",
    sub: "Asunción · Ciudad del Este · Encarnación",
    href: "/py",
  },
  {
    code: "global",
    flag: "🌎",
    name: "Otra parte de Latam",
    sub: "México · Colombia · Chile · Perú · USA · Europa",
    href: "/global",
  },
];

export default function WelcomePopup() {
  const [show, setShow] = useState(false);
  const [closing, setClosing] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { setRegion, region, detected, loading } = useRegion();

  useEffect(() => {
    // No mostrar en rutas legales
    const skipRoutes = ["/terminos", "/privacidad"];
    if (skipRoutes.includes(location.pathname)) return;

    // Si ya eligió, no mostrar más
    try {
      if (localStorage.getItem(STORAGE_KEY)) return;
    } catch {}

    // Esperar 1.2s para no interrumpir la primera impresión
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, [location.pathname]);

  const choose = (code) => {
    try { localStorage.setItem(STORAGE_KEY, code); } catch {}
    setRegion(code);
    setClosing(true);
    setTimeout(() => {
      setShow(false);
      navigate(code === "ar" ? "/ar" : code === "py" ? "/py" : "/global");
    }, 350);
  };

  const skip = () => {
    try { localStorage.setItem(STORAGE_KEY, "skip"); } catch {}
    setClosing(true);
    setTimeout(() => setShow(false), 300);
  };

  if (!show) return null;

  return (
    <AnimatePresence>
      {!closing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-ink/85 backdrop-blur-md p-6"
        >
          <motion.div
            initial={{ y: 24, scale: 0.96, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -16, scale: 0.96, opacity: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-graphite border border-border-soft max-w-2xl w-full overflow-hidden"
          >
            {/* close X */}
            <button
              onClick={skip}
              aria-label="Cerrar"
              className="absolute top-4 right-5 text-muted hover:text-cream text-2xl font-light z-10"
            >
              ×
            </button>

            {/* dorado accent top */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gold" />

            <div className="p-10 lg:p-12">
              <div className="s-label">Bienvenido</div>
              <h2
                className="font-display text-cream"
                style={{ fontSize: "clamp(2.4rem, 5vw, 3.4rem)", lineHeight: 0.95, letterSpacing: "0.03em" }}
              >
                ¿Desde dónde
              </h2>
              <p
                className="font-serif italic text-gold mb-2"
                style={{ fontSize: "clamp(1.6rem, 3.6vw, 2.4rem)", fontWeight: 300, letterSpacing: "0.05em" }}
              >
                nos visitás?
              </p>
              <p className="font-light text-warm leading-[1.65] mb-8" style={{ fontSize: "13px" }}>
                Adaptamos los precios, los ejemplos y la moneda según tu mercado. Podés cambiar la región más adelante desde el menú superior.
                {detected && !loading && (
                  <>
                    {" "}<br/>
                    <span className="text-muted" style={{ fontSize: "11px" }}>
                      Detectamos tu IP en {detected.city || detected.country || "tu país"} ({region.flag} {region.name}).
                    </span>
                  </>
                )}
              </p>

              <div className="grid sm:grid-cols-3 gap-px bg-border-soft border border-border-soft">
                {OPTIONS.map((o, i) => (
                  <motion.button
                    key={o.code}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 + i * 0.08, duration: 0.5 }}
                    whileHover={{ backgroundColor: "#0c0c0b" }}
                    onClick={() => choose(o.code)}
                    className="bg-graphite p-5 text-left transition-colors group"
                  >
                    <div className="text-3xl mb-3 transition-transform group-hover:scale-110 origin-left">{o.flag}</div>
                    <div className="font-display uppercase text-cream group-hover:text-gold transition-colors" style={{ fontSize: "1.05rem", letterSpacing: "0.06em" }}>
                      {o.name}
                    </div>
                    <div className="font-light text-muted mt-1 leading-[1.45]" style={{ fontSize: "10px" }}>
                      {o.sub}
                    </div>
                    <div className="font-sans uppercase text-gold mt-4 inline-flex items-center gap-1 group-hover:gap-2 transition-all" style={{ fontSize: "10px", letterSpacing: "0.15em" }}>
                      Elegir <span>→</span>
                    </div>
                  </motion.button>
                ))}
              </div>

              <button
                onClick={skip}
                className="mt-6 font-sans uppercase text-muted hover:text-cream transition"
                style={{ fontSize: "10px", letterSpacing: "0.15em" }}
              >
                Decidir más tarde →
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
