import { motion, useReducedMotion } from "framer-motion";
import { X, Check } from "@phosphor-icons/react";
import { problema } from "../../data/home";

export default function Problema() {
  const reduce = useReducedMotion();
  const [, colSeparado, colGaudian] = problema.columnas;

  return (
    <section id="problema" className="py-24 lg:pb-40 lg:pt-32">
      <div className="wrap grid gap-12 lg:grid-cols-12 lg:gap-10">
        <div className="min-w-0 lg:col-span-5">
          <h2 className="t-h2 max-w-[17ch]">{problema.title}</h2>
          <div className="mt-8 grid max-w-[46ch] gap-5">
            {problema.body.map((p) => (
              <p key={p} className="t-body">{p}</p>
            ))}
          </div>
        </div>

        <div className="min-w-0 lg:col-span-7 lg:pt-3">
          <div className="panel overflow-hidden">
            <table className="w-full table-fixed text-left sm:table-auto">
              <caption className="sr-only">Comparación entre trabajar con equipos separados y con GAUDIAN</caption>
              <thead>
                <tr className="border-b border-hairline">
                  <td className="hidden px-5 py-4 sm:table-cell" />
                  <th scope="col" className="px-3 py-4 text-[14px] font-medium text-fg-subtle sm:px-5">{colSeparado}</th>
                  <th scope="col" className="bg-primary/10 px-3 py-4 text-[14px] font-semibold text-fg sm:px-5">{colGaudian}</th>
                </tr>
              </thead>
              <tbody>
                {problema.filas.map(([tema, separado, gaudian], i) => (
                  <motion.tr
                    key={tema}
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.1 }}
                    className="border-t border-hairline first:border-t-0"
                  >
                    <th scope="row" className="hidden px-5 py-4 align-top font-mono text-[12px] font-normal text-fg-subtle sm:table-cell">
                      {tema}
                    </th>
                    <td className="px-3 py-4 align-top text-[15px] text-fg-muted sm:px-5">
                      <span className="mb-1 block font-mono text-[11px] text-fg-subtle sm:hidden">{tema}</span>
                      <span className="flex gap-2">
                        <X size={16} className="mt-1 shrink-0 text-lost" aria-hidden />
                        {separado}
                      </span>
                    </td>
                    <td className="bg-primary/10 px-3 py-4 align-top text-[15px] text-fg sm:px-5">
                      <span className="mb-1 block h-[16.5px] sm:hidden" aria-hidden />
                      <span className="flex gap-2">
                        <Check size={16} weight="bold" className="mt-1 shrink-0 text-ok" aria-hidden />
                        {gaudian}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
