import { rubros } from "../../data/home";

export default function Rubros() {
  return (
    <section aria-labelledby="rubros-title" className="border-t border-hairline py-20 lg:py-28">
      <div className="wrap">
        <h2 id="rubros-title" className="t-h2 max-w-[20ch]">{rubros.title}</h2>
      </div>
      <ul className="wrap mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 lg:mt-14 lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0">
        {rubros.items.map((r, i) => (
          <li key={r.nombre} className={`w-[58vw] max-w-[240px] shrink-0 snap-start lg:w-auto lg:max-w-none ${i % 2 === 1 ? "lg:mt-10" : ""}`}>
            <figure>
              <img
                src={r.src}
                alt={r.alt}
                width="600"
                height="750"
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full rounded-inner border border-hairline object-cover transition-transform duration-500 hover:scale-[1.02]"
              />
              <figcaption className="mt-3 text-[15px] font-medium text-fg">{r.nombre}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  );
}
