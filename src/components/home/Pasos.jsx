import { pasos } from "../../data/home";

export default function Pasos() {
  return (
    <section id="servicios" className="border-t border-hairline py-24 lg:py-36">
      <span id="proceso" className="sr-only" aria-hidden />
      <div className="wrap">
        <h2 className="t-h2 max-w-[16ch]">{pasos.title}</h2>
        <ol className="mt-12 grid gap-10 md:grid-cols-3 md:gap-6 lg:mt-16">
          {pasos.items.map((p, i) => (
            <li key={p.n} className={i === 1 ? "md:mt-16" : ""}>
              <img
                src={p.src}
                alt={p.alt}
                width="1600"
                height="1200"
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full rounded-panel border border-hairline object-cover"
              />
              <div className="mt-6 flex items-baseline gap-4">
                <span className="text-[44px] font-semibold leading-none tracking-[-0.04em] text-accent-text tnum">{p.n}</span>
                <h3 className="t-h3">{p.titulo}</h3>
              </div>
              <p className="t-body mt-3 max-w-[42ch]">{p.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
