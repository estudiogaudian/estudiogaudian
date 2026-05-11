import LegalPage from "./LegalPage";
import { PRIVACIDAD_SECTIONS, TERMINOS_META } from "../data/legal";

export default function Privacidad() {
  const meta = [
    { l: "Responsable", v: TERMINOS_META.responsable },
    { l: "Contacto", v: `<a href="mailto:${TERMINOS_META.email}">${TERMINOS_META.email}</a>` },
    { l: "Jurisdicción", v: "Argentina · Aplicable a clientes internacionales" },
    { l: "Última actualización", v: TERMINOS_META.actualizado },
  ];
  return (
    <LegalPage
      eyebrow="Legal · Privacidad"
      titleLine1="Política de"
      titleLine2="Privacidad"
      subtitle="Cómo recolectamos, usamos y protegemos tus datos personales."
      meta={meta}
      sections={PRIVACIDAD_SECTIONS}
      metaTitle="Política de Privacidad · GAUDIAN"
      metaDescription="Política de privacidad y tratamiento de datos personales de GAUDIAN. Geolocalización por IP, formularios, derechos del titular y servicios de terceros."
      canonical="https://estudiogaudian.com/privacidad"
    />
  );
}
