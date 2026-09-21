import { sistema } from "../../data/home";
import Reveal, { RevealStagger, RevealItem } from "./Plain";
import SistemaDiagram from "./SistemaDiagram";

export default function Sistema() {
  return (
    <section id="servicios" className="border-t border-hairline bg-surface-1/40 py-24 lg:pb-40 lg:pt-36">
      <span id="proceso" className="sr-only" aria-hidden />
      <div className="wrap">
        <Reveal className="max-w-[40rem]">
          <h2 className="t-h2">{sistema.title}</h2>
          <p className="t-lead mt-6">{sistema.lead}</p>
        </Reveal>

        <div className="mt-14 lg:mt-20">
          <SistemaDiagram />
        </div>

        <RevealStagger className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-[1.15fr_1fr_1fr_1.1fr]">
          {sistema.etapas.map((e) => (
            <RevealItem key={e.n}>
              <p className="font-mono text-[12px] text-accent-text tnum">{e.n} {e.k}</p>
              <h3 className="t-h3 mt-3">{e.titulo}</h3>
              <p className="t-body mt-3">{e.desc}</p>
              <p className="mt-4 font-mono text-[12px] text-fg-subtle">{e.dato}</p>
            </RevealItem>
          ))}
        </RevealStagger>

        <Reveal className="mt-16 flex flex-col gap-4 border-t border-hairline pt-8 md:flex-row md:items-baseline md:gap-10">
          <p className="shrink-0 text-[15px] font-medium text-fg">{sistema.extras.title}</p>
          <ul className="flex flex-wrap gap-x-8 gap-y-2 text-[15px] text-fg-muted">
            {sistema.extras.items.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
