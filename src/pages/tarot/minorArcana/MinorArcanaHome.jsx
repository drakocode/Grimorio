import React, { useState } from 'react';
import { minorArcanaManifesto, minorArcanaCatalog, minorArcanaTelemetry } from '../../../data/tarot/minorArcanaData';
import RitualGrid from '../../../components/grid/Grid';
import OccultCard from '../../../components/cards/Card';
import '../../../styles/MinorArcanaHome.styles.css';

const MinorArcanaHome = () => {
  const [activeSuit, setActiveSuit] = useState('all');

  const suits = ['all', 'paus', 'copas', 'espadas', 'ouros'];

  const filteredCards = minorArcanaCatalog.filter(card => {
    return activeSuit === 'all' || card.suit === activeSuit;
  });

  return (
    <div className="minor-arcana-page-container">
      
      {/* PAINEL ESQUERDO: Manifesto Elemental e Sintonizador */}
      <aside className="minor-arcana-manifesto-panel">
        <div className="sticky-minor-content">
          <div className="minor-archive-tag font-mono">{minorArcanaManifesto.sectionId}</div>
          <h1 className="minor-main-title">{minorArcanaManifesto.title}</h1>
          <div className="minor-architectural-line"></div>
          <p className="minor-description-text">{minorArcanaManifesto.description}</p>
          
          {/* Seletor de Transmissão por Elementos / Naipes */}
          <div className="suit-filter-wrapper">
            <div className="filter-system-header font-mono">// ELEMENTAL_SUIT_FILTER</div>
            <div className="suit-buttons-grid">
              {suits.map((suit) => (
                <button
                  key={suit}
                  className={`suit-ritual-btn font-mono ${activeSuit === suit ? 'selected' : ''}`}
                  onClick={() => setActiveSuit(suit)}
                >
                  <span className="suit-dot"></span>
                  {suit.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Telemetria Oculta de Estado */}
          <div className="minor-telemetry-box font-mono">
            <div className="minor-tel-row">
              <span className="tel-label">RESOLUÇÃO:</span>
              <span className="tel-value text-gold">{minorArcanaTelemetry.engineMode}</span>
            </div>
            <div className="minor-tel-row">
              <span className="tel-label">NAIPE_ALVO:</span>
              <span className="tel-value text-crimson">{activeSuit.toUpperCase()}</span>
            </div>
            <div className="minor-tel-row">
              <span className="tel-label">VETORES_RETIDOS:</span>
              <span className="tel-value">{filteredCards.length} / {minorArcanaCatalog.length}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Fluxo Sequencial de Cartas */}
      <section className="minor-arcana-stream-panel">
        <div className="minor-stream-tag font-mono">// PIP_AND_COURT_STREAM_DETECTED</div>
        
        {filteredCards.length === 0 ? (
          <div className="no-cards-found font-mono">
            <p>[AVISO: NENHUM_VETOR_ELEMENTAL_LOCALIZADO]</p>
          </div>
        ) : (
          <RitualGrid columns={2} className="minor-grid-override">
            {filteredCards.map((card) => (
              <OccultCard
                key={card.id}
                indexId={card.id.replace(/-/g, '_').toUpperCase()}
                title={card.name}
                subTitle={`Naipe: ${card.suit.toUpperCase()} // Elemento: ${card.element}`}
                description={card.description}
                image={card.image}
                metadata={card.metadata}
                linkPath={`/tarot/minor-arcana/${card.id}`}
              />
            ))}
          </RitualGrid>
        )}
      </section>

    </div>
  );
};

export default MinorArcanaHome;