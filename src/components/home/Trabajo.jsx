import { Link } from "react-router-dom";
import { ArrowRight } from "@phosphor-icons/react";
import { trabajo } from "../../data/home";

function Pieza({ p }) {
  if (p.src) {
    return (
      <img
        src={p.src}
        alt={p.alt}
        loading="lazy"
        decoding="async"
        className={`${p.aspect} w-full rounded-inner border border-hairline object-cover`}
      />
    );
  }
  // Placeholder hasta que se exporten las piezas reales desde Canva.
  return (
    <div
      className={`${p.aspect} flex w-full flex-col justify-end rounded-inner border border-dashed border-hairline-strong bg-surface-1 p-4`}
      role="img"
      aria-label={`Espacio para una pieza en formato ${p.f}`}
    >
      <p className="font-mono text-[11px] text-fg-subtle">{p.f} {p.r}</p>
      <p className="mt-1 font-mono text-[11px] text-fg-subtle">pieza pendiente</p>
    </div>
  );
}

export default function Trabajo() {
  return (
    <section id="trabajo" className="border-t border-hairline py-24 lg:py-36">
      <div className="wrap">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-[36rem]">
            <h2 className="t-h2">{trabajo.title}</h2>
            <p className="t-lead mt-5">{trabajo.lead}</p>
          </div>
          <Link to="/portfolio" className="cta-ghost w-fit shrink-0">
            {trabajo.cta}
            <ArrowRight size={18} weight="bold" className="cta-arrow" aria-hidden />
          </Link>
        </div>
      </div>

      <div className="mt-12 lg:mt-16">
        <ul className="wrap flex snap-x snap-mandatory items-end gap-4 overflow-x-auto pb-4 lg:grid lg:grid-cols-[1fr_1.15fr_1.1fr_1fr_1.15fr] lg:overflow-visible lg:pb-0">
          {trabajo.piezas.map((p, i) => (
            <li key={i} className="w-[62vw] max-w-[260px] shrink-0 snap-start lg:w-auto lg:max-w-none">
              <Pieza p={p} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
