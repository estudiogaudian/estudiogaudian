import { WhatsappLogo } from "@phosphor-icons/react";
import { waLink } from "../data/site";

export default function WhatsAppFAB() {
  return (
    <a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full border border-hairline-strong bg-fg text-canvas shadow-[0_12px_32px_-12px_rgba(37,99,235,0.55)] transition-transform duration-200 hover:scale-105 active:scale-95 lg:bottom-8 lg:right-8"
    >
      <WhatsappLogo size={28} weight="fill" aria-hidden />
    </a>
  );
}
