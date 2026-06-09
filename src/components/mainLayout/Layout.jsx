import React from 'react';
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import '../../styles/Layout.styles.css';

const Layout = ({ children }) => {
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