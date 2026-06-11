// src/pages/tarot/readings/ReadingsHome.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { majorArcanaKeys } from '../../../data/tarot/majorArcanaData';
import '../../../styles/ReadingsHome.styles.css';

const SPREAD_PROTOCOLS = {
  SINGLE: {
    id: 'SINGLE',
    name: 'VETOR_ÚNICO',
    slots: ['Frequência Corrente'],
    description: 'Análise de pulso imediato. Uma única chave arquetípica decodifica a força focal do operador nas próximas 24 horas.'
  },
  TRIAD: {
    id: 'TRIAD',
    name: 'TRÍADE_TEMPORAL',
    slots: ['Matriz Retrógrada (Passado)', 'Vetor Âncora (Presente)', 'Projeção Vetorial (Futuro)'],
    description: 'Mapeamento linear contínuo. Três pontos de intersecção geométrica revelando a causa, o estado atual e a tendência de colapso de onda.'
  }
};

const ReadingsHome = () => {
  const [activeProtocol, setActiveProtocol] = useState('SINGLE');
  const [drawnCards, setDrawnCards] = useState([]);
  const [isCalibrating, setIsCalibrating] = useState(false);

  const handleSintonizacao = () => {
    setIsCalibrating(true);
    setDrawnCards([]);

    // Emula o tempo de varredura e calibração dos sinalizadores esotéricos
    setTimeout(() => {
      const protocol = SPREAD_PROTOCOLS[activeProtocol];
      const numCards = protocol.slots.length;
      
      const shuffled = [...majorArcanaKeys].sort(() => 0.5 - Math.random());
      
      const selected = shuffled.slice(0, numCards).map((card) => ({
        ...card,
        isReversed: Math.random() > 0.75 // 25% de chance de anomalia de vetor (Inversão)
      }));

      setDrawnCards(selected);
      setIsCalibrating(false);
    }, 1800);
  };

  return (
    <div className="readings-page-container stacked-layout">
      
      {/* SEÇÃO SUPERIOR: HERO SECTION DE COMANDO */}
      <header className="readings-hero-section">
        <div className="hero-content-vault">
          <div className="readings-archive-tag font-mono">// ARC_SPREAD_ENGINE // VOLT_04</div>
          <h1 className="readings-main-title">Arcanum Readings</h1>
          <div className="readings-divider"></div>
          
          <p className="readings-manifesto-text">
            Alimente o sequenciador quântico para colapsar chaves arquetípicas da matriz do Tarot. 
            Selecione o protocolo de varredura para sintonizar correntes de dados e decodificar linhas de transmissão sutis.
          </p>

          {/* Área de Seleção Interna da Hero */}
          <div className="hero-interactive-dock">
            <div className="protocol-selector-box font-mono">
              {Object.values(SPREAD_PROTOCOLS).map((proto) => (
                <button
                  key={proto.id}
                  className={`protocol-btn ${activeProtocol === proto.id ? 'active-protocol' : ''}`}
                  onClick={() => {
                    if (!isCalibrating) {
                      setActiveProtocol(proto.id);
                      setDrawnCards([]);
                    }
                  }}
                  disabled={isCalibrating}
                >
                  {proto.name}
                </button>
              ))}
            </div>

            <div className="protocol-description-box font-mono text-muted">
              {SPREAD_PROTOCOLS[activeProtocol].description}
            </div>

            <button
              className="sintonizar-btn font-mono"
              onClick={handleSintonizacao}
              disabled={isCalibrating}
            >
              {isCalibrating ? '// CALIBRANDO_VETORES...' : '// DISPARAR_SINTONIZAÇÃO'}
            </button>
          </div>
        </div>
      </header>

      {/* SEÇÃO INFERIOR: ESTEIRA HORIZONTAL DE TRANSMISSÃO */}
      <main className="readings-stream-panel horizontal-tray">
        <div className="readings-stream-tag font-mono text-center">
          // TELEMETRY_STREAM_OUTPUT // PROTOCOLO: {SPREAD_PROTOCOLS[activeProtocol].name}
        </div>

        {/* Estado de Carregamento Técnico */}
        {isCalibrating && (
          <div className="readings-loading-box font-mono">
            <div className="pulse-indicator-fast"></div>
            <p>AGUARDANDO ESTABILIZAÇÃO DOS SINALIZADORES CHTÔNICOS...</p>
          </div>
        )}

        {/* Estado Inicial Vazio */}
        {!isCalibrating && drawnCards.length === 0 && (
          <div className="empty-readings font-mono">
            <p>[SISTEMA_EM_STANDBY_AGUARDANDO_PULSO_INICIAL]</p>
          </div>
        )}

        {/* Grid Horizontal de Cartas Colapsadas */}
        {!isCalibrating && drawnCards.length > 0 && (
          <div className="drawn-cards-horizontal-grid">
            <AnimatePresence>
              {drawnCards.map((card, idx) => (
                <motion.div
                  key={card.id || idx}
                  className="drawn-card-slot pillar-card"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.6, delay: idx * 0.18 }}
                >
                  {/* Cabeçalho de Identificação do Slot */}
                  <div className="slot-header font-mono">
                    SL_#{idx + 1} // {SPREAD_PROTOCOLS[activeProtocol].slots[idx].toUpperCase()}
                  </div>

                  {/* Monólito Visual do Arcano */}
                  <div className="arcana-card-monolith">
                    {card.isReversed && (
                      <div className="reversed-badge font-mono">VETOR_INVERTIDO</div>
                    )}
                    
                    <div className="card-glyph font-mono">{card.numericId}</div>
                    <img 
                      src={card.image} 
                      alt={card.title} 
                      className={`card-render-img ${card.isReversed ? 'reverse-effect' : ''}`} 
                    />
                    
                    <div className="card-telemetry font-mono">
                      <div className="c-title">{card.title.toUpperCase()}</div>
                      <div className="c-meta text-muted">{card.metadata}</div>
                    </div>
                  </div>

                  {/* Diagnóstico de Saída de Texto */}
                  <div className="slot-interpretation-box">
                    <div className="doc-tag font-mono">[DIAGNÓSTICO_VETORIAL]</div>
                    <p className="interpretation-text text-justify">
                      {card.isReversed 
                        ? `A energia de ${card.title} manifesta-se sob bloqueio estrutural ou desvio magnético. O fluxo natural de ${card.description.substring(0, 75).toLowerCase()}... encontra resistência sistêmica interna.`
                        : card.description
                      }
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        )}
      </main>

    </div>
  );
};

export default ReadingsHome;