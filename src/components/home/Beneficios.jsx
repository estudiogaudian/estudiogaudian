import { Check, ArrowRight } from "@phosphor-icons/react";
import { brand } from "../../data/site";
import { paraVos, delega, ctas } from "../../data/home";

function Foto({ img, className = "" }) {
  return (
    <img
      src={img.src}
      alt={img.alt}
      width={img.w}
      height={img.h}
      loading="lazy"
      decoding="async"
      className={`w-full object-cover ${className}`}
    />
  );
}

export function ParaVos() {
  return (
    <section className="border-t border-hairline py-24 lg:py-36">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Foto img={paraVos.imagen} className="aspect-[4/5] rounded-panel border border-hairline" />
        </div>
        <div className="min-w-0 lg:col-span-7">
          <h2 className="t-h2">{paraVos.title}</h2>
          <ul className="mt-10 grid gap-8">
            {paraVos.puntos.map((p, i) => (
              <li key={p.t} className="grid grid-cols-[auto_1fr] gap-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-hairline-strong font-mono text-[14px] text-fg tnum">
                  {i + 1}
                </span>
                <div>
                  <p className="text-[clamp(1.15rem,1rem+0.5vw,1.4rem)] font-semibold leading-snug tracking-[-0.015em] text-fg">{p.t}</p>
                  <p className="t-body mt-2">{p.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function Delega() {
  return (
    <section className="border-t border-hairline bg-surface-1/40 py-24 lg:py-36">
      <div className="wrap">
        <div className="max-w-[44rem]">
          <h2 className="t-h2">{delega.title}</h2>
          <p className="t-lead mt-6">{delega.lead}</p>
        </div>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-12">
          <div className="panel p-7 md:p-9 lg:col-span-4">
            <h3 className="font-mono text-[12px] text-accent-text">lo hacemos nosotros</h3>
            <ul className="mt-6 grid gap-4">
              {delega.nosotros.map((t) => (
                <li key={t} className="flex gap-3 text-[15.5px] text-fg-muted">
                  <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-accent-text" aria-hidden />
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-panel border border-hairline lg:col-span-8 lg:min-h-[520px]">
            <Foto img={delega.imagen} className="aspect-[4/3] lg:absolute lg:inset-0 lg:h-full lg:aspect-auto" />
            <div className="relative bg-canvas/90 p-7 md:p-9 lg:absolute lg:bottom-5 lg:right-5 lg:max-w-[340px] lg:rounded-inner lg:border lg:border-hairline-strong">
              <h3 className="font-mono text-[12px] text-ok">vos te ocupás de</h3>
              <ul className="mt-5 grid gap-3">
                {delega.vos.map((t) => (
                  <li key={t} className="text-[16px] font-medium text-fg">{t}</li>
                ))}
              </ul>
              <a href={brand.calendly} target="_blank" rel="noopener noreferrer" className="link-u mt-6 inline-flex items-center gap-1.5 text-[15px]">
                {ctas.auditoria} <ArrowRight size={14} aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
