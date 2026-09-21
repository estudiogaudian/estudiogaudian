import SEOHead from "../components/SEOHead";
import { useRegion } from "../context/RegionContext";
import Pipe from "../components/home/Pipe";
import Hero from "../components/home/Hero";
import Rubros from "../components/home/Rubros";
import { ParaVos, Delega } from "../components/home/Beneficios";
import Pasos from "../components/home/Pasos";
import CasosReales from "../components/home/CasosReales";
import Oferta from "../components/home/Oferta";
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
      <Rubros />
      <ParaVos />
      <Delega />
      <Pasos />
      <CasosReales />
      <Oferta />
      <Estudio />
      <Faq />
      <Cierre />
    </>
  );
}
