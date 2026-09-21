import { useEffect, useRef } from "react";
import { motion, animate, useReducedMotion } from "framer-motion";
import { FilmStrip, Cards, ImageSquare, MetaLogo } from "@phosphor-icons/react";
import { adsPanel } from "../../data/home";

const ICON = { Reel: FilmStrip, Carrusel: Cards, "Estática": ImageSquare };

const ESTADO = {
  ganadora: "bg-live text-canvas",
  activa: "bg-surface-3 text-accent-text",
  pausada: "bg-surface-3 text-fg-subtle",
};

// Número que sube de 0 al valor final. Escribe en el DOM sin re-render.
function CountUp({ to, delay }) {
  const ref = useRef(null);
  const reduce = useReducedMotion();
  useEffect(() => {
    if (!ref.current) return undefined;
    if (reduce) {
      ref.current.textContent = String(to);
      return undefined;
    }
    const controls = animate(0, to, {
      duration: 1.4,
      delay,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        if (ref.current) ref.current.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [to, delay, reduce]);
  return <span ref={ref}>{reduce ? to : 0}</span>;
}

export default function AdsPanel() {
  const reduce = useReducedMotion();
  const total = adsPanel.filas.reduce((acc, f) => acc + f.resultado, 0);

  return (
    <figure>
      <div className="panel overflow-hidden shadow-[0_30px_80px_-40px_rgba(37,99,235,0.45)]">
        <div className="flex items-center justify-between gap-3 border-b border-hairline px-5 py-4">
          <div className="flex min-w-0 items-center gap-3">
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-inner bg-surface-3 text-accent-text">
              <MetaLogo size={20} aria-hidden />
            </span>
            <div className="min-w-0 leading-tight">
              <p className="truncate text-[15px] font-medium text-fg">{adsPanel.campana}</p>
              <p className="truncate font-mono text-[11px] text-fg-subtle">objetivo: {adsPanel.objetivo}</p>
            </div>
          </div>
          <span className="shrink-0 rounded-chip bg-surface-3 px-2 py-1 font-mono text-[11px] text-fg-subtle">ejemplo</span>
        </div>

        <table className="w-full table-fixed text-left">
          <caption className="sr-only">Resultados de ejemplo por pieza de una campaña de Meta Ads</caption>
          <thead className="font-mono text-[11px] text-fg-subtle">
            <tr>
              <th scope="col" className="px-4 pb-2 pt-4 font-medium sm:px-5">pieza</th>
              <th scope="col" className="w-[4.5rem] px-2 pb-2 pt-4 text-right font-medium sm:w-[8.5rem]">
                <span className="sm:hidden">conv.</span><span className="hidden sm:inline">conversaciones</span>
              </th>
              <th scope="col" className="hidden w-[7rem] px-5 pb-2 pt-4 text-right font-medium sm:table-cell">costo c/u</th>
            </tr>
          </thead>
          <tbody>
            {adsPanel.filas.map((f, i) => {
              const Icon = ICON[f.formato];
              return (
                <motion.tr
                  key={f.pieza}
                  initial={reduce ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className={`border-t border-hairline ${f.estado === "pausada" ? "opacity-60" : ""}`}
                >
                  <td className="px-4 py-4 sm:px-5">
                    <div className="flex min-w-0 items-center gap-3">
                      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-inner border border-hairline bg-surface-2 text-fg-muted">
                        <Icon size={20} aria-hidden />
                      </span>
                      <div className="min-w-0">
                        <p className="truncate text-[14.5px] text-fg">{f.pieza}</p>
                        <p className="mt-1 flex flex-wrap items-center gap-2 font-mono text-[11px] text-fg-subtle">
                          {f.formato} {f.ratio}
                          <span className={`rounded-chip px-1.5 py-0.5 font-medium ${ESTADO[f.estado]}`}>{f.estado}</span>
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="px-2 py-4 text-right font-mono text-[15px] text-fg tnum">
                    <CountUp to={f.resultado} delay={0.6 + i * 0.15} />
                  </td>
                  <td className="hidden px-5 py-4 text-right font-mono text-[13px] text-fg-muted tnum sm:table-cell">USD {f.costo}</td>
                </motion.tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="border-t border-hairline-strong font-mono text-[12px]">
              <td className="px-4 py-3 text-fg-subtle sm:px-5">total del mes</td>
              <td className="px-2 py-3 text-right text-fg tnum"><CountUp to={total} delay={0.9} /></td>
              <td className="hidden px-5 py-3 sm:table-cell" />
            </tr>
          </tfoot>
        </table>
      </div>
      <figcaption className="mt-3 max-w-[52ch] text-[13px] text-fg-subtle">{adsPanel.nota}</figcaption>
    </figure>
  );
}
