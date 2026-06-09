import React from 'react';
import { Link } from 'react-router-dom';
import { astrologicalHouses } from '../../../data/astrology/astrologyData';
import '../../../styles/HousesHome.styles.css';

const HousesHome = () => {
  return (
    <div className="houses-page-container">
      
      {/* PAINEL ESQUERDO: Manifesto e Divisões de Quadrantes */}
      <aside className="houses-manifesto-panel">
        <div className="sticky-houses-content">
          <Link to="/astrology" className="btn-back-to-astro font-mono">
            ← RETORNAR AO MANUAL CELESTE
          </Link>
          
          <div className="houses-archive-tag font-mono">MS_HOUSES_12</div>
          <h1 className="houses-main-title">Mundane Sectors</h1>
          <div className="houses-architectural-line"></div>
          <p className="houses-description-text">
            O mapeamento das 12 casas astrológicas. Enquanto os signos representam frequências de energia puras, as casas delimitam os setores mundanos e práticos da existência onde essas forças tomam forma concreta.
          </p>
          
          {/* Caixa de Telemetria de Casas */}
          <div className="houses-telemetry-box font-mono">
            <div className="houses-tel-row">
              <span className="tel-label">DIVISÃO_DOMÍNIOS:</span>
              <span className="tel-value text-gold">12_CAMPOS_LOCAIS</span>
            </div>
            <div className="houses-tel-row">
              <span className="tel-label">QUADRANTES:</span>
              <span className="tel-value">04_ORIENTAÇÕES</span>
            </div>
            <div className="houses-tel-row">
              <span className="tel-label">EIXOS_MÁXIMOS:</span>
              <span className="tel-value text-crimson">ASC-DSC // MC-IC</span>
            </div>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Listagem de Casas */}
      <section className="houses-stream-panel">
        <div className="houses-stream-tag font-mono">// MUNDANE_SECTOR_FEED</div>
        
        <div className="houses-list-container">
          {astrologicalHouses.map((house) => (
            <div key={house.id} className="house-occult-card">
              <div className="house-card-header font-mono">
                <span className="house-number">{house.number}</span>
                <span className="house-classification">{house.classification.toUpperCase()}</span>
              </div>
              
              <div className="house-card-body">
                <h3 className="house-card-title">{house.title}</h3>
                <div className="house-ruler-tag font-mono">
                  REGENTE_NATURAL: <span className="text-gold">{house.rulingSign.toUpperCase()}</span>
                </div>
                <div className="house-theme-tag font-mono">
                  TEMAS: <span className="text-crimson">{house.theme.toUpperCase()}</span>
                </div>
                <p className="house-description">{house.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default HousesHome;
