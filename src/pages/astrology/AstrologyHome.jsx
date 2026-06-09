import { astrologyManifesto, astrologySubSectors, planetaryTransits } from '../../data/astrology/astrologyData';
import RitualGrid from '../../components/grid/Grid';
import OccultCard from '../../components/cards/Card';
import '../../styles/AstrologyHome.styles.css';

const AstrologyHome = () => {
  return (
    <div className="astrology-page-container">
      
      {/* PAINEL ESQUERDO: Ancoragem de Telemetria e Manifesto */}
      <aside className="astrology-telemetry-panel">
        <div className="sticky-panel-content">
          <div className="archive-tag font-mono">{astrologyManifesto.sectionId}</div>
          <h1 className="astrology-main-title">{astrologyManifesto.title}</h1>
          <div className="astrology-divider"></div>
          <p className="astrology-manifesto-text">{astrologyManifesto.description}</p>
          
          {/* Monitor de Trânsitos Planetários (Estilo Interface de Luxo) */}
          <div className="live-telemetry-box">
            <div className="telemetry-header font-mono">
              <span className="pulse-indicator"></span>
              LIVE_PLANETARY_TRANSITS // 2026
            </div>
            <table className="telemetry-table font-mono">
              <thead>
                <tr>
                  <th>CORPO</th>
                  <th>COORDENADA</th>
                  <th>SETOR</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {planetaryTransits.map((transit, idx) => (
                  <tr key={idx}>
                    <td className="text-gold">{transit.body}</td>
                    <td>{transit.position}</td>
                    <td>{transit.house}</td>
                    <td className={transit.motion === "RETROGRADO" ? "text-crimson" : "text-muted"}>
                      {transit.motion}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Grid de Sub-Sectores (Navegação Dinâmica) */}
      <section className="astrology-stream-panel">
        <div className="stream-header-tag font-mono">// SUB_SECTORS_AVAILABLE</div>
        
        <RitualGrid columns={1}>
          {astrologySubSectors.map((sector) => (
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

export default AstrologyHome;