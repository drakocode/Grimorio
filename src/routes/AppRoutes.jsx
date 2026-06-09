import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/mainLayout/Layout';
import Home from '../pages/home/Home';

// Importações do Módulo Tarot
import TarotHome from '../pages/tarot/TarotHome';
import MajorArcanaHome from '../pages/tarot/majorArcana/MajorArcanaHome';
import ArcanaDetail from '../pages/tarot/majorArcana/ArcanaDetail';

// Importações do Módulo Goetia
import GoetiaHome from '../pages/goetia/GoetiaHome';
import DaemonDetail from '../pages/goetia/daemons/DaemonDetail';

// Importações do Módulo Astrologia
import AstrologyHome from '../pages/astrology/AstrologyHome';
import ZodiacHome from '../pages/astrology/signs/ZodiacHome';
import SignDetail from '../pages/astrology/signs/SignDetail';
import HousesHome from '../pages/astrology/houses/HousesHome';
import AspectsHome from '../pages/astrology/aspects/AspectsHome';

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
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default AppRoutes;