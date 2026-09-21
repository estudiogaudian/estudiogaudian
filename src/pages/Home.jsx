import SEOHead from "../components/SEOHead";
import { useRegion } from "../context/RegionContext";
import Pipe from "../components/home/Pipe";
import Hero from "../components/home/Hero";
import Problema from "../components/home/Problema";
import Servicios from "../components/home/Servicios";
import Proceso from "../components/home/Proceso";
import Trabajo from "../components/home/Trabajo";
import CasosReales from "../components/home/CasosReales";
import Escalera from "../components/home/Escalera";
import { Estudio, Faq } from "../components/home/EstudioFaq";
import Cierre from "../components/home/Cierre";

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
      <Pipe />
      <Hero />
      <Problema />
      <Servicios />
      <Proceso />
      <Trabajo />
      <CasosReales />
      <Escalera />
      <Estudio />
      <Faq />
      <Cierre />
    </>
  );
}
