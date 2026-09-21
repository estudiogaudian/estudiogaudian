import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import { brand, waLink } from "../../data/site";
import { cierre, ctas } from "../../data/home";

export default function Cierre() {
  const img = cierre.imagen;
  return (
    <section id="contacto" className="border-t border-hairline py-24 lg:py-36">
      <div className="wrap grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="min-w-0 lg:col-span-6">
          <h2 className="t-display max-w-[12ch] !text-[clamp(2.5rem,1.2rem+4.2vw,4.5rem)]">{cierre.title}</h2>
          <p className="t-lead mt-7 max-w-[46ch]">{cierre.body}</p>
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
        <div className="lg:col-span-6">
          <img
            src={img.src}
            alt={img.alt}
            width={img.w}
            height={img.h}
            loading="lazy"
            decoding="async"
            className="aspect-[4/3] w-full rounded-panel border border-hairline object-cover lg:aspect-[16/11]"
          />
        </div>
      </div>
    </section>
  );
}
