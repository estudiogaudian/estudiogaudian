import { BrowserRouter, Routes, Route, useParams, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { RegionProvider } from "./context/RegionContext";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import WhatsAppFAB from "./components/WhatsAppFAB";
import ExitIntent from "./components/ExitIntent";
import ScrollProgress from "./components/motion/ScrollProgress";
import Home from "./pages/Home";
import LandingServicio from "./pages/LandingServicio";
import Portfolio from "./pages/Portfolio";
import Promo from "./pages/Promo";
import PromoParaguay from "./pages/PromoParaguay";
import Cotizar from "./pages/Cotizar";
import Terminos from "./pages/Terminos";
import Privacidad from "./pages/Privacidad";
import NotFound from "./pages/NotFound";
import Onboarding from "./pages/Onboarding";
import { LANDINGS } from "./pages/landings";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, [pathname]);
  return null;
}

function PageWrapper({ children }) {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}

function LandingRoute() {
  const { slug } = useParams();
  const data = LANDINGS[slug];
  if (!data) return <NotFound />;
  return <LandingServicio slug={slug} {...data} />;
}

function RegionHome({ fixed }) {
  return (
    <RegionProvider fixed={fixed}>
      <Layout><Home /></Layout>
    </RegionProvider>
  );
}

function Layout({ children }) {
  return (
    <>
      <Nav />
      <main><PageWrapper>{children}</PageWrapper></main>
      <Footer />
      <WhatsAppFAB />
      <ExitIntent />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <RegionProvider>
              <Layout><Home /></Layout>
            </RegionProvider>
          }
        />
        <Route path="/ar" element={<RegionHome fixed="ar" />} />
        <Route path="/py" element={<RegionHome fixed="py" />} />
        <Route path="/global" element={<RegionHome fixed="global" />} />
        <Route
          path="/portfolio"
          element={
            <RegionProvider>
              <Layout><Portfolio /></Layout>
            </RegionProvider>
          }
        />
        {/* Promo: layout minimal sin nav/footer/popup global para no distraer tráfico de ads */}
        <Route
          path="/promo"
          element={
            <RegionProvider>
              <ScrollProgress />
              <PageWrapper><Promo /></PageWrapper>
            </RegionProvider>
          }
        />
        {/* Lanzamiento Paraguay: landing standalone para ads, sin nav/footer/popups globales */}
        <Route
          path="/paraguay"
          element={
            <RegionProvider fixed="py">
              <ScrollProgress />
              <PageWrapper><PromoParaguay /></PageWrapper>
            </RegionProvider>
          }
        />
        {/* Cotizador: layout standalone sin distracciones */}
        <Route
          path="/cotizar"
          element={
            <RegionProvider>
              <PageWrapper><Cotizar /></PageWrapper>
            </RegionProvider>
          }
        />
        <Route
          path="/terminos"
          element={
            <RegionProvider>
              <Layout><Terminos /></Layout>
            </RegionProvider>
          }
        />
        <Route
          path="/privacidad"
          element={
            <RegionProvider>
              <Layout><Privacidad /></Layout>
            </RegionProvider>
          }
        />
        {/* Onboarding: layout standalone sin distracciones */}
        <Route
          path="/onboarding"
          element={
            <RegionProvider>
              <PageWrapper><Onboarding /></PageWrapper>
            </RegionProvider>
          }
        />
        <Route
          path="/:slug"
          element={
            <RegionProvider>
              <Layout><LandingRoute /></Layout>
            </RegionProvider>
          }
        />
        <Route
          path="*"
          element={
            <RegionProvider>
              <Layout><NotFound /></Layout>
            </RegionProvider>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
