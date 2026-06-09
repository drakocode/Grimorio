import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { zodiacSigns } from '../../../data/astrology/astrologyData';
import RitualGrid from '../../../components/grid/Grid';
import OccultCard from '../../../components/cards/Card';
import '../../../styles/ZodiacHome.styles.css';

const ZodiacHome = () => {
  const [selectedElement, setSelectedElement] = useState('todos');
  const [selectedModality, setSelectedModality] = useState('todos');

  // Filtragem dos Signos do Zodíaco
  const filteredSigns = zodiacSigns.filter(sign => {
    const elementMatch = selectedElement === 'todos' || sign.element.toLowerCase() === selectedElement;
    const modalityMatch = selectedModality === 'todos' || sign.modality.toLowerCase() === selectedModality;
    return elementMatch && modalityMatch;
  });

  const elements = ['todos', 'fogo', 'terra', 'ar', 'água'];
  const modalities = ['todos', 'cardinal', 'fixo', 'mutável'];

  return (
    <div className="zodiac-page-container">
      
      {/* PAINEL ESQUERDO: Filtros de Sintonização de Frequência */}
      <aside className="zodiac-filter-panel">
        <div className="sticky-zodiac-content">
          <div className="zodiac-archive-tag font-mono">MS_ZODIAC_12</div>
          <h1 className="zodiac-main-title">Zodiacal Archetypes</h1>
          <div className="zodiac-architectural-line"></div>
          <p className="zodiac-description-text">
            O alinhamento dos 12 arquétipos zodiacais. Utilize os seletores abaixo para isolar as assinaturas geométricas por elemento ou modalidade vibracional.
          </p>
          
          {/* Seletor de Elementos */}
          <div className="filter-group font-mono">
            <span className="filter-label">// ISOLAR_ELEMENTO</span>
            <div className="filter-buttons">
              {elements.map((el) => (
                <button
                  key={el}
                  onClick={() => setSelectedElement(el)}
                  className={`filter-btn ${selectedElement === el ? 'active' : ''}`}
                >
                  {el.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Seletor de Modalidades */}
          <div className="filter-group font-mono">
            <span className="filter-label">// FILTRAR_MODALIDADE</span>
            <div className="filter-buttons">
              {modalities.map((mod) => (
                <button
                  key={mod}
                  onClick={() => setSelectedModality(mod)}
                  className={`filter-btn ${selectedModality === mod ? 'active' : ''}`}
                >
                  {mod.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          
          {/* Telemetria do Filtro */}
          <div className="zodiac-telemetry font-mono">
            <div className="telemetry-row">
              <span className="tel-label">ENTIDADES_FILTRADAS:</span>
              <span className="tel-value text-gold">{filteredSigns.length.toString().padStart(2, '0')} // 12</span>
            </div>
            <div className="telemetry-row">
              <span className="tel-label">SINAL_VETORIAL:</span>
              <span className="tel-value text-crimson">
                {selectedElement.toUpperCase()} // {selectedModality.toUpperCase()}
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Grid de Arquétipos Sintonizados */}
      <section className="zodiac-stream-panel">
        <div className="zodiac-stream-tag font-mono">// AETHER_ARCHETYPES_DETECTED</div>
        
        {filteredSigns.length === 0 ? (
          <div className="no-signs-found font-mono">
            <p>[AVISO: NENHUMA_ASSINATURA_COMPATÍVEL_DISPONÍVEL]</p>
            <button 
              className="reset-filters-btn"
              onClick={() => { setSelectedElement('todos'); setSelectedModality('todos'); }}
            >
              // REINICIAR_SINTONIZADORES
            </button>
          </div>
        ) : (
          <RitualGrid columns={2} className="zodiac-grid-override">
            {filteredSigns.map((sign) => (
              <OccultCard
                key={sign.id}
                indexId={sign.symbol}
                title={sign.name}
                subTitle={`${sign.englishName} // Regente: ${sign.ruler}`}
                description={sign.lore.substring(0, 120) + '...'}
                image={sign.image}
                metadata={`${sign.element.toUpperCase()} // ${sign.modality.toUpperCase()}`}
                linkPath={`/astrology/signs/${sign.id}`}
              />
            ))}
          </RitualGrid>
        )}
      </section>

    </div>
  );
};

export default ZodiacHome;
