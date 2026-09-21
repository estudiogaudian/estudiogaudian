import { ArrowRight, Check, ShieldCheck, WhatsappLogo } from "@phosphor-icons/react";
import { brand, waLink } from "../../data/site";
import { oferta, extras, ctas } from "../../data/home";

export default function Oferta() {
  const g = oferta.garantia;
  return (
    <section id="planes" className="border-t border-hairline py-24 lg:py-36">
      <div className="wrap">
        <h2 className="t-h2">{oferta.title}</h2>

        <div className="mt-12 overflow-hidden rounded-panel border border-primary/60 bg-surface-2 lg:mt-16 lg:grid lg:grid-cols-12">
          <div className="p-7 md:p-10 lg:col-span-7 lg:p-12">
            <p className="inline-flex rounded-chip bg-live px-2 py-1 font-mono text-[11px] font-medium text-canvas">{oferta.cupos}</p>
            <h3 className="mt-6 text-[clamp(1.9rem,1.3rem+1.8vw,2.75rem)] font-semibold tracking-[-0.03em] text-fg">{oferta.nombre}</h3>
            <p className="t-body mt-3 max-w-[46ch]">{oferta.desc}</p>
            <p className="mt-8 flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <span className="text-[clamp(2.75rem,2rem+2.4vw,3.75rem)] font-semibold leading-none tracking-[-0.04em] text-fg tnum">{oferta.precio}</span>
              <span className="text-[15px] text-fg-subtle">{oferta.periodo}</span>
            </p>
            <ul className="mt-8 grid gap-3.5 sm:grid-cols-2">
              {oferta.incluye.map((i) => (
                <li key={i} className="flex gap-3 text-[15.5px] text-fg">
                  <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-accent-text" aria-hidden />
                  {i}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a href={brand.calendly} target="_blank" rel="noopener noreferrer" className="cta-primary">
                {ctas.auditoria}
                <ArrowRight size={18} weight="bold" className="cta-arrow" aria-hidden />
              </a>
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="cta-ghost">
                <WhatsappLogo size={20} aria-hidden />
                {ctas.whatsapp}
              </a>
            </div>
          </div>

          <aside className="flex flex-col justify-between gap-8 border-t border-hairline bg-canvas/50 p-7 md:p-10 lg:col-span-5 lg:border-l lg:border-t-0 lg:p-12">
            <div>
              <ShieldCheck size={44} weight="duotone" className="text-ok" aria-hidden />
              <h3 className="mt-6 text-[clamp(1.5rem,1.2rem+1vw,2rem)] font-semibold leading-tight tracking-[-0.025em] text-fg">{g.titulo}</h3>
              <p className="mt-4 text-[17px] leading-relaxed text-fg">{g.texto}</p>
              <p className="mt-3 text-[13.5px] text-fg-subtle">{g.condicion}</p>
            </div>
            <p className="text-[13px] leading-relaxed text-fg-subtle">{oferta.nota}</p>
          </aside>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-[auto_1fr_1fr] md:items-start md:gap-8">
          <h3 className="text-[15px] font-medium text-fg md:pt-1">{extras.title}</h3>
          {extras.items.map((e) => (
            <div key={e.nombre} className="border-t border-hairline pt-4 md:border-l md:border-t-0 md:pl-8 md:pt-0">
              <p className="flex flex-wrap items-baseline justify-between gap-2">
                <span className="text-[16px] font-semibold text-fg">{e.nombre}</span>
                <span className="font-mono text-[12px] text-accent-text tnum">{e.precio}</span>
              </p>
              <p className="t-body mt-2 text-[15px]">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
