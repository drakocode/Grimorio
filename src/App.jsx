import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Astrologia from "./pages/Astrology/AstrologyHome";
import ZodiacSigns from "./pages/Astrology/Signs/ZodiacSigns";
import Goetia from "./pages/Goetia/GoetiaHome";
import GoetiaGallery from "./pages/Goetia/GoetiaGallery";
import GoetiaDetailsTemplate from "./pages/Goetia/GoetiaDetailsTemplate";
import TarotHome from "./pages/Tarot/TarotHome";
import TarotGallery from "./pages/Tarot/TarotGallery";
import TarotDetailsTemplate from "./pages/Tarot/TarotDetailsTemplate";
import TarotMenoresGallery from "./pages/Tarot/TarotMenoresGallery";
import TarotMenoresDetails from "./pages/Tarot/TarotMenoresDetailsTemplate";
import TarotSpreads from "./pages/Tarot/TarotSpreads";
/* import DynamicDetails from "./pages/DynamicDetails"; */

/* import DynamicDetails from './pages/DynamicDetails'; */
import SignDetailsTemplate from "./pages/Astrology/Signs/SignDetailsTemplate";
import "./styles/App.css";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />

          {/* 
          
          
          NAVEGAÇÃO DA CATEGORIA ASTROLOGIA 
          
          
          */}
          <Route path="/astrologia" element={<Astrologia />} />
          <Route path="/astrologia/signos" element={<ZodiacSigns />} />
          <Route
            path="/astrologia/signos/:id"
            element={<SignDetailsTemplate />}
          />

          {/* 
          
          
          NAVEGAÇÃO DA CATEGORIA GOETIA 
          
          
          */}
          <Route path="/goetia" element={<Goetia />} />
          {/* Rota Principal de Listagem dos 72 Daemons */}
          <Route path="/goetia/daemons" element={<GoetiaGallery />} />
          {/* Captura paths como /goetia/daemons/bael ou /goetia/daemons/paimon */}
          <Route
            path="/goetia/daemons/:id"
            element={<GoetiaDetailsTemplate />}
          />

          {/* 
          

          ESTRUTURA BLINDADA DO SETOR DE TAROT 
          
          
          */}
          {/* Rota 1: Portal Geral /tarot */}
          <Route path="/tarot" element={<TarotHome />} />

          {/* Rota 2: Galeria de Lâminas /tarot/arcanos */}
          <Route path="/tarot/arcanos-maiores" element={<TarotGallery />} />

          {/* Rota 3: Visualização do Arcano /tarot/arcanos-maiores/:id */}
          <Route
            path="/tarot/arcanos-maiores/:id"
            element={<TarotDetailsTemplate />}
          />
          {/* 2. ADICIONAR A NOVA ROTA PARA OS ARCANOS MENORES */}
          <Route
            path="/tarot/arcanos-menores"
            element={<TarotMenoresGallery />}
          />
          {/* Caminho Dinâmico para a Lâmina Individual usando o parâmetro ':id' */}
          <Route
            path="/tarot/arcanos-menores/:id"
            element={<TarotMenoresDetails />}
          />

          <Route path="/tarot/oraculo" element={<TarotSpreads />} />

          {/* 
          
          
          Rota de Fallback para links quebrados (Opcional) 
          
          
          */}
          <Route
            path="*"
            element={
              <div className="text-white text-center pt-24 font-serif">
                404 • Portal Oculto
              </div>
            }
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
