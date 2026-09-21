import { ArrowRight, WhatsappLogo } from "@phosphor-icons/react";
import { brand, waLink } from "../../data/site";
import { cierre, ctas } from "../../data/home";
import Reveal from "./Plain";

export default function Cierre() {
  return (
    <section id="contacto" className="relative overflow-hidden border-t border-hairline py-28 lg:py-40">
      <div className="wrap relative grid gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-8">
          <h2 className="t-display max-w-[14ch] !text-[clamp(2.5rem,1.2rem+4.6vw,4.75rem)]">{cierre.title}</h2>
          <p className="t-lead mt-7 max-w-[50ch]">{cierre.body}</p>
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
        </Reveal>
      </div>
    </section>
  );
}
