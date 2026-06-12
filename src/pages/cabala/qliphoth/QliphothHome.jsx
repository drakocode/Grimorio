// src/pages/cabala/qliphoth/QliphothHome.jsx
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  qliphothManifesto,
  qliphothTreeData,
  coreTreeMetrics,
} from "../../../data/cabala/qliphoth/qliphothData";
import QliphothTree from "../../../components/cabala/QliphothTree";
import "../../../styles/SephirotHome.styles.css";

const QliphothHome = () => {
  return (
    <div 
      className="sephirot-page-container qliphoth-override" 
      style={{ "--color-gold": "var(--color-crimson)" }}
    >
      {/* SIDEBAR ESQUERDA: Telemetria da Árvore Adversária */}
      <aside className="sephirot-telemetry-panel">
        <div className="sticky-sephirot-content">
          <div className="sephirot-archive-tag font-mono">
            {qliphothManifesto.sectionId}
          </div>
          <h1 className="sephirot-main-title">{qliphothManifesto.title}</h1>
          <div className="sephirot-divider"></div>
          <p className="sephirot-manifesto-text">
            {qliphothManifesto.description}
          </p>

          {/* Caixa de Telemetria de Fluxo Adversário */}
          <div className="tree-metrics-box font-mono">
            <div className="metrics-header">// QLIPHOTH_CORE_METRICS</div>
            <div className="metric-row">
              <span>ACTIVE_SHELLS:</span>
              <span className="text-gold">{coreTreeMetrics.activeNodes}</span>
            </div>
            <div className="metric-row">
              <span>ABYSSAL_ROUTER:</span>
              <span className="text-crimson">// THAUMIEL_GATEWAY</span>
            </div>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Nós de Emanação Reversa (Shells) */}
      <section className="sephirot-stream-panel">
        <div className="sephirot-stream-header font-mono">// QLIPHOTIC_SHELLS_STREAM</div>

        {/* Visualização da Árvore da Morte */}
        <div className="qliphoth-tree-section">
          <div className="tree-section-header font-mono">// ÁRVORE_DA_MORTE_INTERATIVA</div>
          <QliphothTree />
        </div>

        <div className="sephirot-grid">
          {qliphothTreeData.map((shell) => (
            <motion.div
              key={shell.number}
              className="sephirah-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
            >
              {/* Header do Card */}
              <div className="sephirah-card-header font-mono">
                <span className="sephirah-number text-gold">#{shell.number}</span>
                <span className="sephirah-class">[SHELL_{shell.classification}]</span>
              </div>

              {/* Títulos */}
              <div className="sephirah-card-title-block">
                <h2 className="sephirah-name">{shell.name}</h2>
                <span className="sephirah-translation font-serif">{shell.translation}</span>
              </div>

              {/* Tabela de Atribuições Ocultas da Shell */}
              <div className="sephirah-data-grid font-mono">
                <div className="data-item">
                  <span className="label">INVERSE_KEY:</span>
                  <span className="value">{shell.divineName}</span>
                </div>
                <div className="data-item">
                  <span className="label">ARCHDEMON:</span>
                  <span className="value">{shell.archangel}</span>
                </div>
                <div className="data-item">
                  <span className="label">ABYSSAL_NODE:</span>
                  <span className="value text-gold">{shell.planetaryNode}</span>
                </div>
              </div>

              {/* Descrição Esotérica */}
              <p className="sephirah-description">{shell.description}</p>

              {/* Gatilho de Navegação Técnico */}
              <Link
                to={`/cabala/qliphoth/${shell.number}`}
                className="btn-inspect-node font-mono"
              >
                // ACESSAR_VETOR_REVERSO →
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default QliphothHome;