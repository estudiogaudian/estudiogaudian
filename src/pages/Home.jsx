import SEOHead from "../components/SEOHead";
import { useRegion } from "../context/RegionContext";
import Pipe from "../components/home/Pipe";
import Hero from "../components/home/Hero";
import Fuga from "../components/home/Fuga";
import Sistema from "../components/home/Sistema";
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
      <Fuga />
      <Sistema />
      <CasosReales />
      <Escalera />
      <Estudio />
      <Faq />
      <Cierre />
    </>
  );
}
