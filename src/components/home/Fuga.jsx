import { motion, useReducedMotion } from "framer-motion";
import { fuga } from "../../data/home";
import Reveal from "./Plain";

export default function Fuga() {
  const reduce = useReducedMotion();
  const lostCount = fuga.log.filter((r) => r.lost).length;

  return (
    <section id="fuga" className="py-24 lg:pb-40 lg:pt-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
        <Reveal className="lg:col-span-5">
          <h2 className="t-h2 max-w-[16ch]">{fuga.title}</h2>
          <div className="mt-8 grid max-w-[46ch] gap-5">
            {fuga.body.map((p) => (
              <p key={p} className="t-body">{p}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-7 lg:pt-3">
          <div className="panel overflow-hidden">
            <div className="flex items-center justify-between gap-4 border-b border-hairline px-5 py-4">
              <p className="text-[15px] font-medium text-fg">{fuga.logTitle}</p>
              <p className="font-mono text-[12px] text-lost tnum">
                {lostCount} de {fuga.log.length} perdidas
              </p>
            </div>

            <table className="w-full text-left">
              <caption className="sr-only">Registro de consultas de un día atendido a mano</caption>
              <thead className="hidden font-mono text-[11px] text-fg-subtle sm:table-header-group">
                <tr>
                  <th scope="col" className="px-5 pb-2 pt-4 font-medium">entra</th>
                  <th scope="col" className="px-2 pb-2 pt-4 font-medium">consulta</th>
                  <th scope="col" className="px-2 pb-2 pt-4 font-medium">respuesta</th>
                  <th scope="col" className="px-5 pb-2 pt-4 font-medium">resultado</th>
                </tr>
              </thead>
              <tbody>
                {fuga.log.map((r, i) => (
                  <motion.tr
                    key={r.in}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.12 }}
                    className="grid grid-cols-[auto_1fr] gap-x-4 border-t border-hairline px-5 py-3.5 sm:table-row sm:px-0 sm:py-0"
                  >
                    <td className="font-mono text-[13px] text-fg tnum sm:px-5 sm:py-3.5">{r.in}</td>
                    <td className="text-[15px] text-fg-muted sm:px-2 sm:py-3.5">{r.q}</td>
                    <td className="font-mono text-[13px] text-fg-subtle tnum sm:px-2 sm:py-3.5">
                      <span className="sm:hidden">resp. </span>{r.out}
                    </td>
                    <td className={`text-[14px] sm:px-5 sm:py-3.5 ${r.lost ? "text-lost" : "text-ok"}`}>{r.status}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-3 text-[13px] text-fg-subtle">{fuga.logNote}</p>
        </Reveal>
      </div>
    </section>
  );
}
