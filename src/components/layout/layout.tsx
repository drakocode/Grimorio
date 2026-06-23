import React from 'react';
import { Navbar } from './navbar'; // Ajustado para o padrão de nome simples e exportação nomeada
import { Footer } from './footer'; // Ajustado para o padrão de nome simples e exportação nomeada
import '../../styles/layout/layout.css';     // Removido o sufixo redundante .styles

// 1. Definição estrita do contrato de propriedades do Layout
interface LayoutProps {
  children: React.ReactNode; // Garante que o layout aceite qualquer elemento JSX válido
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="grimoire-layout-wrapper">
      {/* Cinematic Overlays */}
      <div className="overlay-grain"></div>
      <div className="overlay-ambient-fog"></div>
      <div className="architectural-background-grid"></div>
      
      <Navbar />
      
      <main className="grimoire-main-content">
        {children}
      </main>
      
      <Footer />
    </div>
  );
};

export default Layout;