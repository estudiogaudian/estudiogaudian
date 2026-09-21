import { casos, testimonios } from "../../data/site";
import { casosIntro } from "../../data/home";
import Reveal, { RevealStagger, RevealItem } from "./Plain";

// Une cada caso con la cita de su cliente (mismo nombre o mismo negocio).
function quoteFor(caso) {
  const first = caso.cliente.split(" ")[0].toLowerCase();
  return testimonios.find(
    (t) => t.nombre.toLowerCase().includes(first) || t.cargo.toLowerCase().includes(caso.rubro.split(" ")[0].toLowerCase())
  );
}

function Quote({ q }) {
  return (
    <blockquote className="border-t border-hairline pt-6">
      <p className="text-[15.5px] leading-relaxed text-fg">“{q.quote}”</p>
      <footer className="mt-3 text-[13px] text-fg-subtle">{q.nombre}, {q.cargo}</footer>
    </blockquote>
  );
}

function Header({ caso }) {
  return (
    <div>
      <p className="text-[15px] font-medium text-fg">{caso.cliente}</p>
      <p className="font-mono text-[12px] text-fg-subtle">{caso.rubro}</p>
    </div>
  );
}

function CasoPrincipal({ caso }) {
  const q = quoteFor(caso);
  return (
    <article className="panel grid gap-10 p-6 md:grid-cols-[1fr_1.15fr] md:p-10 lg:gap-16">
      <div className="flex flex-col">
        <Header caso={caso} />
        <p className="mt-10 text-[clamp(4.5rem,11vw,9rem)] font-semibold leading-[0.85] tracking-[-0.04em] text-fg tnum">{caso.metrica}</p>
        <p className="mt-3 font-mono text-[12px] text-fg-subtle">{caso.metricaLabel}</p>
      </div>
      <div className="flex flex-col justify-end gap-8">
        <p className="t-lead">{caso.resumen}</p>
        {q && <Quote q={q} />}
      </div>
    </article>
  );
}

function Caso({ caso }) {
  const q = quoteFor(caso);
  return (
    <article className="panel flex h-full flex-col p-6 md:p-8">
      <Header caso={caso} />
      <p className="mt-8 text-[clamp(3rem,6vw,4.25rem)] font-semibold leading-none tracking-[-0.04em] text-fg tnum">{caso.metrica}</p>
      <p className="mt-2 font-mono text-[12px] text-fg-subtle">{caso.metricaLabel}</p>
      <p className="t-body mt-6 max-w-[52ch]">{caso.resumen}</p>
      <div className="flex-1" />
      {q && <div className="mt-8"><Quote q={q} /></div>}
    </article>
  );
}

export default function CasosReales() {
  const [principal, ...resto] = casos;
  return (
    <section id="casos" className="py-24 lg:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="t-h2 max-w-[18ch]">{casosIntro.title}</h2>
        </Reveal>
        <RevealStagger className="mt-12 grid gap-5 lg:mt-16 md:grid-cols-2">
          <RevealItem className="md:col-span-2">
            <CasoPrincipal caso={principal} />
          </RevealItem>
          {resto.map((c) => (
            <RevealItem key={c.cliente}>
              <Caso caso={c} />
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
