import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "../components/mainLayout/Layout";
import Home from "../pages/home/Home";

// Importações do Módulo Tarot
import TarotHome from "../pages/tarot/TarotHome";
import MajorArcanaHome from "../pages/tarot/majorArcana/MajorArcanaHome";
import ArcanaDetail from "../pages/tarot/majorArcana/ArcanaDetail";
import MinorArcanaHome from "../pages/tarot/minorArcana/MinorArcanaHome";
import MinorArcanaDetail from "../pages/tarot/minorArcana/MinorArcanaDetail";
import ReadingsHome from "../pages/tarot/readings/ReadingsHome";

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
import TreeOfLifeHome from "../pages/cabala/TreeOfLifeHome";
import SephirotHome from "../pages/cabala/sephirot/SephirotHome";
import SephirahDetail from "../pages/cabala/sephirot/SephirahDetail";
import TreeOfDeathHome from "../pages/cabala/TreeOfDeathHome";
import QliphothHome from "../pages/cabala/qliphoth/QliphothHome";
import QliphothDetail from "../pages/cabala/qliphoth/QliphothDetail";

// Importações do Módulo Anjos
import AnjosHome from "../pages/cabala/anjos/AnjosHome";
import AnjoDetail from "../pages/cabala/anjos/AnjoDetail";

//importações do Módulo Vedas
import VedasHome from "../pages/vedas/VedasHome";
import JyotishHome from '../pages/vedas/JyotishHome';
import AyurvedaHome from '../pages/vedas/AyurvedaHome';

//importações do arquivo
import LibraryArchive from "../pages/archive/LibraryArchive";

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
          <Route
            path="/tarot/minor-arcana/:id"
            element={<MinorArcanaDetail />}
          />
          <Route path="/readings" element={<ReadingsHome />} />
          <Route path="/tarot/readings" element={<ReadingsHome />} />{" "}
          {/* Fallback de módulo */}
          {/* Módulo Goetia */}
          <Route path="/goetia" element={<GoetiaHome />} />
          <Route
            path="/goetia/daemons"
            element={<Navigate to="/goetia" replace />}
          />
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
          <Route path="/cabala/tree-of-life" element={<TreeOfLifeHome />} />
          <Route path="/cabala/sephirot" element={<SephirotHome />} />
          <Route path="/cabala/sephirot/:number" element={<SephirahDetail />} />
          <Route path="/cabala/tree-of-death" element={<TreeOfDeathHome />} />
          <Route path="/cabala/qliphoth" element={<QliphothHome />} />
          <Route path="/cabala/qliphoth/:number" element={<QliphothDetail />} />
          {/* Módulo Anjos (Rotas Simplificadas) */}
          <Route path="/anjos" element={<AnjosHome />} />
          <Route path="/anjos/:number" element={<AnjoDetail />} />
          {/* Módulo Vedas */}
          <Route path="/vedas" element={<VedasHome />} />
          <Route path="/vedas/jyotish" element={<JyotishHome />} />
          <Route path="/vedas/ayurveda" element={<AyurvedaHome />} />
          {/*  ARQUIVO  */}
          <Route path="/archive" element={<LibraryArchive />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;
