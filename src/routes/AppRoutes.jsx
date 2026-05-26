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
      </Routes>
    </BrowserRouter>
  );
}