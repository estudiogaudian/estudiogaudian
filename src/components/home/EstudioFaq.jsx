import { faqs } from "../../data/site";
import { estudioCopy, faqIntro } from "../../data/home";
import Reveal from "./Plain";

export function Estudio() {
  return (
    <section id="estudio" className="border-t border-hairline py-24 lg:py-36">
      <div className="wrap grid gap-10 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <h2 className="t-h2 max-w-[14ch]">{estudioCopy.title}</h2>
        </Reveal>
        <Reveal delay={0.1} className="lg:col-span-6 lg:col-start-7">
          <div className="grid gap-5">
            {estudioCopy.body.map((p) => (
              <p key={p} className="t-lead">{p}</p>
            ))}
          </div>
          <div className="mt-10 flex items-center gap-4">
            {/* TODO: reemplazar por un retrato sobre fondo oscuro (min. 480x480). */}
            <img
              src="/franco.jpeg"
              alt="Franco Gaudino, fundador de GAUDIAN"
              width="64"
              height="64"
              loading="lazy"
              decoding="async"
              className="h-16 w-16 rounded-inner object-cover object-[50%_30%]"
            />
            <p className="text-[15px] text-fg">{estudioCopy.firma}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="border-t border-hairline py-24 lg:py-36">
      <div className="wrap">
        <Reveal>
          <h2 className="t-h2 max-w-[18ch]">{faqIntro.title}</h2>
        </Reveal>
        <dl className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2 lg:mt-16">
          {faqs.map((f) => (
            <Reveal key={f.q} y={16}>
              <dt className="text-[17px] font-semibold tracking-[-0.01em] text-fg">{f.q}</dt>
              <dd className="t-body mt-3">{f.a}</dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
