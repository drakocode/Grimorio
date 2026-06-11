import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/mainLayout/Layout";
import Home from "../pages/home/Home";

// Importações do Módulo Tarot
import TarotHome from "../pages/tarot/TarotHome";
import MajorArcanaHome from "../pages/tarot/majorArcana/MajorArcanaHome";
import ArcanaDetail from "../pages/tarot/majorArcana/ArcanaDetail";
import MinorArcanaHome from "../pages/tarot/minorArcana/MinorArcanaHome";
import MinorArcanaDetail from "../pages/tarot/minorArcana/MinorArcanaDetail";

// Importações do Módulo Goetia
import GoetiaHome from "../pages/goetia/GoetiaHome";
import DaemonDetail from "../pages/goetia/daemons/DaemonDetail";

// Importações do Módulo Astrologia
import AstrologyHome from "../pages/astrology/AstrologyHome";
import ZodiacHome from "../pages/astrology/signs/ZodiacHome";
import SignDetail from "../pages/astrology/signs/SignDetail";
import HousesHome from "../pages/astrology/houses/HousesHome";
import AspectsHome from "../pages/astrology/aspects/AspectsHome";
import PlanetsHome from "../pages/astrology/planets/PlanetsHome";
import PlanetDetail from "../pages/astrology/planets/PlanetDetail";

// Importações do Módulo Cabala
import CabalaHome from "../pages/cabala/CabalaHome";
import SephirotHome from "../pages/cabala/sephirot/SephirotHome";
import AnjosHome from "../pages/cabala/anjos/AnjosHome";
import AnjoDetail from "../pages/cabala/anjos/AnjoDetail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Módulo Tarot */}
          <Route path="/tarot" element={<TarotHome />} />
          <Route path="/tarot/major-arcana" element={<MajorArcanaHome />} />
          <Route path="/tarot/major-arcana/:id" element={<ArcanaDetail />} />
          <Route path="/tarot/minor-arcana" element={<MinorArcanaHome />} />
          <Route path="/tarot/minor-arcana/:id" element={<MinorArcanaDetail />} />
          

          {/* Módulo Goetia */}
          <Route path="/goetia" element={<GoetiaHome />} />
          <Route path="/goetia/daemons" element={<Navigate to="/goetia" replace />} />
          <Route path="/goetia/daemons/:id" element={<DaemonDetail />} />

          {/* Módulo Astrologia */}
          <Route path="/astrology" element={<AstrologyHome />} />
          <Route path="/astrology/signs" element={<ZodiacHome />} />
          <Route path="/astrology/signs/:id" element={<SignDetail />} />
          <Route path="/astrology/houses" element={<HousesHome />} />
          <Route path="/astrology/aspects" element={<AspectsHome />} />
          <Route path="/astrology/planets" element={<PlanetsHome />} />
          <Route path="/astrology/planets/:id" element={<PlanetDetail />} />

          {/* Módulo Cabala */}
          <Route path="/cabala" element={<CabalaHome />} />
          <Route path="/cabala/sephirot" element={<SephirotHome />} />

          {/* Módulo Anjos (Rotas Simplificadas) */}
          <Route path="/anjos" element={<AnjosHome />} />
          <Route path="/anjos/:number" element={<AnjoDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
