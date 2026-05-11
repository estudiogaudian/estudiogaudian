import LegalPage from "./LegalPage";
import { TERMINOS_SECTIONS, TERMINOS_META } from "../data/legal";

export default function Terminos() {
  const meta = [
    { l: "Responsable", v: TERMINOS_META.responsable },
    { l: "CUIL", v: TERMINOS_META.cuil },
    { l: "Nombre comercial", v: TERMINOS_META.comercial },
    { l: "Contacto", v: `<a href="mailto:${TERMINOS_META.email}">${TERMINOS_META.email}</a>` },
    { l: "Última actualización", v: TERMINOS_META.actualizado },
  ];
  return (
    <LegalPage
      eyebrow="Legal · GAUDIAN"
      titleLine1="Términos y"
      titleLine2="Condiciones"
      subtitle="Condiciones de prestación del servicio de comunicación digital, diseño y marketing para marcas premium."
      meta={meta}
      sections={TERMINOS_SECTIONS}
      metaTitle="Términos y Condiciones · GAUDIAN"
      metaDescription="Términos y condiciones del servicio de GAUDIAN, estudio boutique de comunicación. Permanencia, precios, propiedad intelectual y jurisdicción."
      canonical="https://estudiogaudian.com/terminos"
    />
  );
}
