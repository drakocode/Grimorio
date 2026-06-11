// src/pages/cabala/anjos/AnjosHome.jsx
import { useState } from "react";
import {
  anjosManifesto,
  angelsCatalog,
  anjosTelemetry,
} from "../../../data/cabala/anjos/anjosData";
import RitualGrid from "../../../components/grid/Grid";
import OccultCard from "../../../components/cards/Card";
import "../../../styles/AnjosHome.styles.css";

const AnjosHome = () => {
  const [selectedChoir, setSelectedChoir] = useState("ALL");

  const choirs = [
    "ALL",
    "SERAFINS",
    "QUERUBINS",
    "TRONOS",
    "DOMINAÇÕES",
    "POTÊNCIAS",
    "VIRTUDES",
    "PRINCIPADOS",
    "ARCANJOS",
    "ANJOS",
  ];

  const filteredAngels =
    selectedChoir === "ALL"
      ? angelsCatalog
      : angelsCatalog.filter((angel) => angel.choir === selectedChoir);

  return (
    <div className="anjos-page-container">
      {/* PAINEL ESQUERDO: Telemetria Celestial */}
      <aside className="anjos-telemetry-panel">
        <div className="sticky-anjos-content">
          <div className="anjos-archive-tag font-mono">
            {anjosManifesto.sectionId}
          </div>
          <h1 className="anjos-main-title">{anjosManifesto.title}</h1>
          <div className="anjos-divider"></div>
          <p className="anjos-manifesto-text">{anjosManifesto.description}</p>

          {/* Filtro por Coros (Interface de Matriz) */}
          <div className="choir-filter-matrix">
            <div className="filter-title font-mono">
              // FILTER_BY_CHOIR_STREAM
            </div>
            <div className="choir-buttons-grid font-mono">
              {choirs.map((choir) => (
                <button
                  key={choir}
                  onClick={() => setSelectedChoir(choir)}
                  className={`choir-btn ${selectedChoir === choir ? "is-active" : ""}`}
                >
                  {choir}
                </button>
              ))}
            </div>
          </div>

          {/* Caixa de Status Oculto */}
          <div className="anjos-metrics-box font-mono">
            <div className="anjos-metrics-header">// VECTOR_TELEMETRY</div>
            <div className="anjos-metric-row">
              <span>TOTAL_VECTORS:</span>
              <span className="text-gold">{anjosTelemetry.totalVectors}</span>
            </div>
            <div className="anjos-metric-row">
              <span>ACTIVE_CHOIR_STREAM:</span>
              <span className="text-crimson">{anjosTelemetry.activeChoir}</span>
            </div>
            <div className="anjos-metric-row">
              <span>VIBRATIONAL_STATUS:</span>
              <span className="status-reverb">
                {anjosTelemetry.engineStatus}
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Indexador de Entidades Angelicais (Idêntico ao GoetiaHome) */}
      <section className="anjos-stream-panel">
        <div className="anjos-stream-header font-mono">
          // ANGELIC_VECTORS_DETECTED // FOUND: {filteredAngels.length}
        </div>

        <RitualGrid columns={1} className="anjos-grid-gap">
          {filteredAngels.map((angel) => (
            <OccultCard
              key={angel.number}
              indexId={`VEC_${angel.number}`}
              title={angel.name}
              subTitle={angel.attribute}
              description={angel.description}
              image={angel.image}
              metadata={`${angel.choir} // ${angel.degrees}`}
              linkPath={`/anjos/${angel.number}`} // Alterado para ser dinâmico e usar o novo path
            />
          ))}
        </RitualGrid>
      </section>
    </div>
  );
};

export default AnjosHome;
