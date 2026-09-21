import { proceso } from "../../data/home";
import SistemaDiagram from "./SistemaDiagram";

export default function Proceso() {
  return (
    <section id="proceso" className="border-t border-hairline bg-surface-1/40 py-24 lg:pb-40 lg:pt-36">
      <div className="wrap">
        <div className="max-w-[40rem]">
          <h2 className="t-h2">{proceso.title}</h2>
          <p className="t-lead mt-6">{proceso.lead}</p>
        </div>

        <div className="mt-14 lg:mt-20">
          <SistemaDiagram />
        </div>

        <ol className="mt-14 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:mt-20 lg:grid-cols-[1fr_1.15fr_1fr_1.1fr]">
          {proceso.etapas.map((e) => (
            <li key={e.n}>
              <p className="font-mono text-[12px] text-accent-text tnum">{e.n} {e.k}</p>
              <h3 className="t-h3 mt-3">{e.titulo}</h3>
              <p className="t-body mt-3">{e.desc}</p>
              <p className="mt-4 font-mono text-[12px] text-fg-subtle">{e.dato}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
