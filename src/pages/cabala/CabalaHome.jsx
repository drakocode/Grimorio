// src/pages/cabala/CabalaHome.jsx
import { cabalaManifesto, cabalaSubSectors, activeEmanations } from '../../data/cabala/cabalaData';
import RitualGrid from '../../components/grid/Grid';
import OccultCard from '../../components/cards/Card';
import '../../styles/CabalaHome.styles.css';

const CabalaHome = () => {
  return (
    <div className="cabala-page-container">
      
      {/* PAINEL ESQUERDO: Ancoragem de Telemetria Metafísica e Manifesto */}
      <aside className="cabala-telemetry-panel">
        <div className="sticky-cabala-content">
          <div className="cabala-archive-tag font-mono">{cabalaManifesto.sectionId}</div>
          <h1 className="cabala-main-title">{cabalaManifesto.title}</h1>
          <div className="cabala-divider"></div>
          <p className="cabala-manifesto-text">{cabalaManifesto.description}</p>
          
          {/* Monitor de Emanações Ativas (Estilo Interface de Monitorização Oculta) */}
          <div className="live-cabala-box">
            <div className="cabala-telemetry-header font-mono">
              <span className="cabala-pulse-indicator"></span>
              LIVE_SEPHIROT_EMANATIONS // 5786
            </div>
            <table className="cabala-telemetry-table font-mono">
              <thead>
                <tr>
                  <th>SEPHIRAH</th>
                  <th>TRADUÇÃO</th>
                  <th>COLUNA</th>
                  <th>ESTADO</th>
                </tr>
              </thead>
              <tbody>
                {activeEmanations.map((emanation, idx) => (
                  <tr key={idx}>
                    <td className="text-gold">{emanation.sephirah}</td>
                    <td>{emanation.translation}</td>
                    <td>{emanation.pillar}</td>
                    <td className={emanation.state === "RETIDO" ? "text-crimson" : "text-muted"}>
                      {emanation.state}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Grid Dinâmico de Sub-Sectores */}
      <section className="cabala-stream-panel">
        <div className="cabala-stream-header font-mono">// SEPHIROTH_SECTORS_AVAILABLE</div>
        
        <RitualGrid columns={1}>
          {cabalaSubSectors.map((sector) => (
            <OccultCard
              key={sector.id}
              indexId={sector.id}
              title={sector.title}
              subTitle={sector.subTitle}
              description={sector.description}
              image={sector.image}
              metadata={sector.metadata}
              linkPath={sector.path}
            />
          ))}
        </RitualGrid>
      </section>

    </div>
  );
};

export default CabalaHome;