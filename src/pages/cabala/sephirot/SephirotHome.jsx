// src/pages/cabala/sephirot/SephirotHome.jsx
import { motion } from 'framer-motion';
import { sephirotManifesto, sephirotTreeData, coreTreeMetrics } from '../../../data/cabala/sephirot/sephirotData';
import '../../../styles/SephirotHome.styles.css';

const SephirotHome = () => {
  return (
    <div className="sephirot-page-container">
      
      {/* SIDEBAR ESQUERDA: Telemetria da Árvore */}
      <aside className="sephirot-telemetry-panel">
        <div className="sticky-sephirot-content">
          <div className="sephirot-archive-tag font-mono">{sephirotManifesto.sectionId}</div>
          <h1 className="sephirot-main-title">{sephirotManifesto.title}</h1>
          <div className="sephirot-divider"></div>
          <p className="sephirot-manifesto-text">{sephirotManifesto.description}</p>
          
          {/* Caixa de Telemetria de Fluxo */}
          <div className="tree-metrics-box font-mono">
            <div className="metrics-header">// NODE_CORE_METRICS</div>
            <div className="metric-row">
              <span>ACTIVE_NODES:</span>
              <span className="text-gold">{coreTreeMetrics.activeNodes}</span>
            </div>
            <div className="metric-row">
              <span>HIDDEN_ROUTER:</span>
              <span className="text-crimson">{coreTreeMetrics.hiddenLink}</span>
            </div>
            <div className="metric-row">
              <span>FLOW_STATUS:</span>
              <span className="status-stable">{coreTreeMetrics.systemStatus}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* STREAM DIREITO: Listagem Técnica das Dez Sephirot */}
      <section className="sephirot-stream-panel">
        <div className="sephirot-stream-header font-mono">// DEPTH_EMANATION_LOGS</div>
        
        <div className="sephirot-list">
          {sephirotTreeData.map((sephirah, index) => (
            <motion.div 
              key={sephirah.number}
              className="sephirah-ritual-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              {/* Topo do Card com Numeração e Classificação */}
              <div className="sephirah-card-header font-mono">
                <span className="sephirah-number text-gold">#{sephirah.number}</span>
                <span className="sephirah-class">// {sephirah.classification}</span>
              </div>

              {/* Títulos */}
              <div className="sephirah-card-title-block">
                <h2 className="sephirah-name">{sephirah.name}</h2>
                <span className="sephirah-translation font-serif">{sephirah.translation}</span>
              </div>

              {/* Tabela de Atribuições Ocultas do Nó */}
              <div className="sephirah-data-grid font-mono">
                <div className="data-item">
                  <span className="label">DIVINE_KEY:</span>
                  <span className="value">{sephirah.divineName}</span>
                </div>
                <div className="data-item">
                  <span className="label">ARCHANGEL:</span>
                  <span className="value">{sephirah.archangel}</span>
                </div>
                <div className="data-item">
                  <span className="label">PLANET_NODE:</span>
                  <span className="value text-gold">{sephirah.planetaryNode}</span>
                </div>
              </div>

              {/* Descrição Metafísica */}
              <p className="sephirah-description">{sephirah.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default SephirotHome;