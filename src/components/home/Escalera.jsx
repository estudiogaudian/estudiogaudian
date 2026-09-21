import { Link } from "react-router-dom";
import { ArrowRight, Check } from "@phosphor-icons/react";
import { brand, waLink } from "../../data/site";
import { escalones, destacado, planesIntro, ctas } from "../../data/home";
import Reveal, { RevealStagger, RevealItem } from "./Plain";

function StepLink({ href, children, className }) {
  if (href === "cotizar") return <Link to="/cotizar" className={className}>{children}</Link>;
  const url = href === "calendly" ? brand.calendly : waLink;
  return <a href={url} target="_blank" rel="noopener noreferrer" className={className}>{children}</a>;
}

function Price({ precio, periodo, big }) {
  return (
    <p className="flex items-baseline gap-1.5">
      <span className={`font-semibold tracking-[-0.03em] text-fg tnum ${big ? "text-[2.75rem] leading-none" : "text-[1.5rem]"}`}>{precio}</span>
      <span className="font-mono text-[12px] text-fg-subtle">{periodo}</span>
    </p>
  );
}

export default function Escalera() {
  const resto = escalones;

  return (
    <section id="planes" className="border-t border-hairline py-24 lg:py-36">
      <div className="wrap">
        <Reveal className="max-w-[40rem]">
          <h2 className="t-h2">{planesIntro.title}</h2>
          <p className="t-lead mt-6">{planesIntro.lead}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 lg:mt-16 lg:grid-cols-12 lg:items-start">
          <RevealStagger className="order-2 lg:order-1 lg:col-span-5">
            <ol className="panel divide-y divide-hairline">
              {resto.map((e) => (
                <RevealItem key={e.nombre} y={16}>
                  <li className="grid gap-3 p-6">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                      <h3 className="text-[17px] font-semibold text-fg">{e.nombre}</h3>
                      <Price precio={e.precio} periodo={e.periodo} />
                    </div>
                    <p className="t-body text-[15px]">{e.desc}</p>
                    <StepLink href={e.href} className="link-u inline-flex w-fit items-center gap-1.5 text-[15px]">
                      {e.cta} <ArrowRight size={14} aria-hidden />
                    </StepLink>
                  </li>
                </RevealItem>
              ))}
            </ol>
          </RevealStagger>

          <Reveal delay={0.1} className="order-1 lg:order-2 lg:col-span-7 lg:sticky lg:top-24">
            <article className="relative overflow-hidden rounded-panel border border-primary/60 bg-surface-2 p-7 md:p-10">
              <p className="relative inline-flex rounded-chip bg-live px-2 py-1 font-mono text-[11px] font-medium text-canvas">{destacado.badge}</p>
              <h3 className="relative mt-6 text-[clamp(1.75rem,1.2rem+1.6vw,2.5rem)] font-semibold tracking-[-0.03em] text-fg">{destacado.nombre}</h3>
              <p className="t-body relative mt-3 max-w-[48ch]">{destacado.desc}</p>
              <div className="relative mt-8"><Price precio={destacado.precio} periodo={destacado.periodo} big /></div>
              <ul className="relative mt-8 grid gap-3.5">
                {destacado.incluye.map((i) => (
                  <li key={i} className="flex gap-3 text-[15.5px] text-fg">
                    <Check size={18} weight="bold" className="mt-0.5 shrink-0 text-accent-text" aria-hidden />
                    {i}
                  </li>
                ))}
              </ul>
              <div className="relative mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Link to="/cotizar" className="cta-primary">
                  {ctas.cotizar}
                  <ArrowRight size={18} weight="bold" className="cta-arrow" aria-hidden />
                </Link>
                <p className="text-[13px] text-fg-subtle">8 preguntas, 2 minutos. Te respondemos en 24 h.</p>
              </div>
            </article>
          </Reveal>
        </div>

        <p className="mt-8 max-w-[70ch] text-[13.5px] leading-relaxed text-fg-subtle">{planesIntro.nota}</p>
      </div>
    </section>
  );
}
