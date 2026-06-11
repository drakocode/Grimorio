import { treeOfDeathManifesto, qliphoticEmanations, treeOfDeathSubSectors } from '../../data/cabala/cabalaData';
import RitualGrid from '../../components/grid/Grid';
import OccultCard from '../../components/cards/Card';
import '../../styles/CabalaHome.styles.css';

const TreeOfDeathHome = () => {
  return (
    <div className="cabala-page-container">
      
      {/* PAINEL ESQUERDO: Ancoragem de Telemetria Abissal e Manifesto */}
      <aside className="cabala-telemetry-panel">
        <div className="sticky-cabala-content">
          <div className="cabala-archive-tag font-mono text-crimson">{treeOfDeathManifesto.sectionId}</div>
          <h1 className="cabala-main-title text-crimson">{treeOfDeathManifesto.title}</h1>
          <div className="cabala-divider"></div>
          <p className="cabala-manifesto-text">{treeOfDeathManifesto.description}</p>
          
          {/* Monitor de Emanações Invertidas (Live Box Atômica) */}
          <div className="live-cabala-box">
            <div className="cabala-telemetry-header font-mono text-crimson">
              <span className="cabala-pulse-indicator"></span>
              LIVE_QLIPHOTIC_EMANATIONS // 5786
            </div>
            <table className="cabala-telemetry-table font-mono">
              <thead>
                <tr>
                  <th>QLIPHAH</th>
                  <th>TRADUÇÃO</th>
                  <th>REGENTE</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {qliphoticEmanations.map((emanation, idx) => (
                  <tr key={idx}>
                    <td className="text-crimson">{emanation.qliphah}</td>
                    <td>{emanation.translation}</td>
                    <td>{emanation.ruler}</td>
                    <td className={emanation.state === "BLOQUEADO" ? "text-crimson font-bold" : "text-muted"}>
                      {emanation.state}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Grid Dinâmico de Sub-Sectores Adversários */}
      <section className="cabala-stream-panel">
        <div className="cabala-stream-header font-mono text-crimson">// QLIPHOTIC_SECTORS_AVAILABLE</div>
        
        <RitualGrid columns={1}>
          {treeOfDeathSubSectors.map((sector) => (
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

export default TreeOfDeathHome;