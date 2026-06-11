import React, { useState } from 'react';
import { planetsTelemetry, planetsCatalog } from '../../../data/astrology/astrologyData';
import RitualGrid from '../../../components/grid/Grid';
import OccultCard from '../../../components/cards/Card';
import '../../../styles/PlanetsHome.styles.css';

const PlanetsHome = () => {
  const [selectedClass, setSelectedClass] = useState('todos');

  const filteredPlanets = planetsCatalog.filter(planet => {
    return selectedClass === 'todos' || planet.classification.toLowerCase() === selectedClass;
  });

  const classifications = ['todos', 'luminar', 'pessoal', 'social'];

  return (
    <div className="planets-page-container">
      
      {/* PAINEL ESQUERDO: Telemetria Sintonizadora */}
      <aside className="planets-filter-panel">
        <div className="sticky-planets-content">
          <div className="planets-archive-tag font-mono">{planetsTelemetry.sectionId}</div>
          <h1 className="planets-main-title">{planetsTelemetry.title}</h1>
          <div className="planets-architectural-line"></div>
          <p className="planets-description-text">{planetsTelemetry.description}</p>
          
          {/* Controlador de Sintonização de Frequência */}
          <div className="filter-system-box">
            <div className="filter-header font-mono">// CLASSIFICATION_STREAM</div>
            <div className="filter-buttons-stack">
              {classifications.map((cls) => (
                <button
                  key={cls}
                  className={`filter-ritual-btn font-mono ${selectedClass === cls ? 'active' : ''}`}
                  onClick={() => setSelectedClass(cls)}
                >
                  <span className="btn-indicator"></span>
                  {cls.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Telemetria de Estado Estático */}
          <div className="planets-status-box font-mono">
            <div className="tel-row">
              <span className="tel-label">VETORES_SINTONIZADOS:</span>
              <span className="tel-value text-gold">{filteredPlanets.length} / {planetsCatalog.length}</span>
            </div>
            <div className="tel-row">
              <span className="tel-label">FILTRO_ATIVO:</span>
              <span className="tel-value text-crimson">{selectedClass.toUpperCase()}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Grid de Corpos Celestes */}
      <section className="planets-stream-panel">
        <div className="planets-stream-tag font-mono">// DYNAMIC_CHANNELS_DETECTED</div>
        
        {filteredPlanets.length === 0 ? (
          <div className="no-planets-found font-mono">
            <p>[AVISO: NENHUMA_FREQUÊNCIA_PLANETÁRIA_COMPATÍVEL]</p>
          </div>
        ) : (
          <RitualGrid columns={1} className="planets-grid-override">
            {filteredPlanets.map((planet) => (
              <OccultCard
                key={planet.id}
                indexId={planet.symbol}
                title={planet.name}
                subTitle={`Regência: ${planet.rulerOf}`}
                description={planet.lore.substring(0, 140) + '...'}
                image={planet.image}
                metadata={`ORBE // ${planet.classification.toUpperCase()}`}
                linkPath={`/astrology/planets/${planet.id}`}
              />
            ))}
          </RitualGrid>
        )}
      </section>

    </div>
  );
};

export default PlanetsHome;