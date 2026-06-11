import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { planetsCatalog } from '../../../data/astrology/astrologyData';
import '../../../styles/PlanetDetail.styles.css';

const PlanetDetail = () => {
  const { id } = useParams();
  
  // Localiza o planeta correspondente ao ID da rota
  const planet = planetsCatalog.find(item => item.id === id);

  if (!planet) {
    return (
      <div className="planet-not-found font-mono">
        <h2>[ERR_ORBE_NÃO_SINTONIZADO]</h2>
        <p>A coordenada planetária solicitada permanece fora do alcance de escaneamento do Grimório.</p>
        <Link to="/astrology/planets" className="btn-back-planets">// RETORNAR_AO_INDEX</Link>
      </div>
    );
  }

  return (
    <div className="planet-detail-wrapper">
      
      <Link to="/astrology/planets" className="planet-back-link font-mono">
        ← RETORNAR AO FLUXO PLANETÁRIO
      </Link>

      <div className="planet-layout-container">
        
        {/* COLUNA ESQUERDA: Monólito Símbolo */}
        <div className="planet-media-column">
          <div className="planet-monolith">
            <div className="planet-glyph-badge font-mono">{planet.symbol}</div>
            {planet.image && <img src={planet.image} alt={planet.name} className="planet-hero-img" />}
            <div className="planet-monolith-footer font-mono">
              <span>SYS_STATUS: ACTIVE</span>
              <span>ORBITAL_FREQ // 0{planet.id.length}HZ</span>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: Doutrina e Transmissão */}
        <div className="planet-content-column">
          <header className="planet-header">
            <span className="planet-meta font-mono">// PLANETARY_CORE_#{planet.id.toUpperCase()}</span>
            <h1 className="planet-title-main">{planet.name}</h1>
            <p className="planet-subtitle-sub">Classificação: {planet.classification.toUpperCase()} // Regente de {planet.rulerOf}</p>
          </header>

          <div className="planet-separator"></div>

          {/* Seção I: Doutrina Hermética */}
          <section className="planet-section">
            <h3 className="planet-section-tag font-mono">[I. ARQUÉTIPO_E_DIRETRIZ_DE_FORÇA]</h3>
            <p className="planet-lore-text">{planet.lore}</p>
          </section>

          {/* Seção II: Vetores Analíticos */}
          <section className="planet-section">
            <h3 className="planet-section-tag font-mono">[II. VETORES_DE_MANIFESTAÇÃO_PSIQUICA]</h3>
            <div className="p-keywords-grid font-mono">
              {planet.keywords.map((kw, idx) => (
                <div key={idx} className="p-keyword-badge">
                  <span className="p-kw-bullet text-crimson">▸</span> {kw.toUpperCase()}
                </div>
              ))}
            </div>
          </section>

          <footer className="planet-system-footer font-mono">
            <div className="security-tag">COMPILADO // ARQUIVO_CELESTIAL_CONFIRMADO</div>
          </footer>
        </div>

      </div>
    </div>
  );
};

export default PlanetDetail;