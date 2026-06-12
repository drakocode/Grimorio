import { useState } from "react";
import {
  goetiaManifesto,
  goetiaDaemons,
  goetiaSystemMetrics,
} from "../../data/goetia/goetiaData";
import BirthdateSearch from "../../components/search/BirthdateSearch";
import RitualGrid from "../../components/grid/Grid";
import OccultCard from "../../components/cards/Card";
import "../../styles/GoetiaHome.styles.css";

const GoetiaHome = () => {
  const [selectedRank, setSelectedRank] = useState("ALL");
  const [birthdateSearch, setBirthdateSearch] = useState("");

  // As 7 hierarquias tradicionais da Goetia indexadas ao sistema de barreira
  const ranks = [
    "ALL",
    "REI",
    "DUQUE",
    "PRÍNCIPE",
    "MARQUÊS",
    "CONDE",
    "PRESIDENTE",
    "PRELADO",
  ];

  // Filtro por data de nascimento (planet/zodíaco)
  const filterByBirthdate = (daemons) => {
    if (!birthdateSearch.trim()) return daemons;

    const searchLower = birthdateSearch.toLowerCase();
    return daemons.filter(
      (daemon) =>
        daemon.planet?.toLowerCase().includes(searchLower) ||
        daemon.zodiacRange?.toLowerCase().includes(searchLower) ||
        daemon.title.toLowerCase().includes(searchLower)
    );
  };

  // Filtro por hierarquia
  const filterByRank = (daemons) => {
    return selectedRank === "ALL"
      ? daemons
      : daemons.filter(
          (daemon) =>
            daemon.rank === selectedRank ||
            daemon.hierarchy === selectedRank ||
            daemon.metadata?.includes(selectedRank)
        );
  };

  // Aplicar filtros em sequência
  const filteredDaemons = filterByRank(filterByBirthdate(goetiaDaemons));

  return (
    <div className="goetia-page-container">
      {/* PAINEL ESQUERDO: Telemetria de Contenção e Manifesto */}
      <aside className="goetia-manifesto-panel">
        <div className="sticky-goetia-content">
          <div className="goetia-archive-tag font-mono">
            {goetiaManifesto.sectionId}
          </div>
          <h1 className="goetia-main-title">{goetiaManifesto.title}</h1>
          <div className="goetia-architectural-line"></div>
          <p className="goetia-description-text">
            {goetiaManifesto.description}
          </p>

          {/* Pesquisa por Data de Nascimento */}
          <BirthdateSearch
            onSearch={setBirthdateSearch}
            placeholder="Pesquisar por planeta/data..."
          />

          {/* ADAPTADO DE ANJOSHOME: Filtro por Hierarquias Ctônicas */}
          <div className="goetia-filter-matrix">
            <div className="goetia-filter-title font-mono">
              // FILTER_BY_CHTHONIC_RANK
            </div>
            <div className="goetia-rank-buttons-grid font-mono">
              {ranks.map((rank) => (
                <button
                  key={rank}
                  onClick={() => setSelectedRank(rank)}
                  className={`goetia-rank-btn ${selectedRank === rank ? "is-active" : ""}`}
                >
                  {rank}
                </button>
              ))}
            </div>
          </div>

          <div className="goetia-architectural-line"></div>

          {/* Terminal de Status Ctônico */}
          <div className="goetia-status-box font-mono">
            <div className="goetia-status-row">
              <span className="status-label">PROTOCOLO_SISTEMA:</span>
              <span className="status-value text-crimson">
                {goetiaSystemMetrics.hierarchy}
              </span>
            </div>
            <div className="goetia-status-row">
              <span className="status-label">SIGILOS_REGISTRADOS:</span>
              <span className="status-value">
                {goetiaSystemMetrics.activeSeals}
              </span>
            </div>
            <div className="goetia-status-row">
              <span className="status-label">BARREIRA_MATRIZ:</span>
              <span className="status-value text-gold">
                {goetiaSystemMetrics.containment}
              </span>
            </div>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Indexador de Entidades Registradas */}
      <section className="goetia-stream-panel">
        <div className="goetia-stream-tag font-mono">
          // CHALDEAN_ARRAYS_DETECTED: {filteredDaemons.length}
        </div>

        <RitualGrid columns={1} className="goetia-grid-gap">
          {filteredDaemons.map((daemon) => (
            <OccultCard
              key={daemon.id}
              indexId={daemon.id}
              title={daemon.title}
              subTitle={daemon.subTitle}
              description={daemon.description}
              image={daemon.image}
              metadata={daemon.metadata}
              linkPath={daemon.path}
            />
          ))}
        </RitualGrid>
      </section>
    </div>
  );
};

export default GoetiaHome;
