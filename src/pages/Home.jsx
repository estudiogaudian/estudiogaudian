import Hero from "../components/Hero";
import Servicios from "../components/Servicios";
import Proceso from "../components/Proceso";
import Casos from "../components/Casos";
import Testimonios from "../components/Testimonios";
import Planes from "../components/Planes";
import Estudio from "../components/Estudio";
import LeadMagnet from "../components/LeadMagnet";
import FAQ from "../components/FAQ";
import Contacto from "../components/Contacto";
import SEOHead from "../components/SEOHead";
import { useRegion } from "../context/RegionContext";

export default function Home() {
  const { region } = useRegion();
  return (
    <>
      <SEOHead
        title={region.metaTitle}
        description={region.metaDescription}
        canonical={`https://estudiogaudian.com/${region.code === "ar" ? "" : region.code}`}
        region={region}
      />
      <Hero />
      <Servicios />
      <Proceso />
      <Casos />
      <Testimonios />
      <Planes />
      <Estudio />
      <LeadMagnet />
      <FAQ />
      <Contacto />
    </>
  );
}
