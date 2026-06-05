import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Signs from "../pages/Astrology/Signs";
import Tarot from "../pages/Tarot";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signs" element={<Signs />} />
        <Route path="/tarot" element={<Tarot />} />

        {/* Rota de Fallback para links quebrados (Opcional) */}
        <Route
          path="*"
          element={
            <div className="text-white text-center pt-24 font-serif">
              404 • Portal Oculto
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
