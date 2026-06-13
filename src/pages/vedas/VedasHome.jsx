// src/pages/vedas/VedasHome.jsx
import { vedasManifesto, vedicSubSectors, activeMantraStreams } from '../../data/vedas/vedasData';
import RitualGrid from '../../components/grid/Grid';
import OccultCard from '../../components/cards/Card';
import '../../styles/VedasHome.styles.css';
 
const VedasHome = () => {
  return (
    <div className="vedas-page-container">
      
      {/* PAINEL ESQUERDO: Painel do Manifesto Estilo Goetia */}
      <aside className="vedas-manifesto-panel">
        <div className="sticky-vedas-content">
          <div className="vedas-archive-tag font-mono text-saffron">{vedasManifesto.sectionId}</div>
          <h1 className="vedas-main-title">{vedasManifesto.title}</h1>
          <div className="vedas-architectural-line"></div>
          <p className="vedas-description-text">{vedasManifesto.description}</p>
          
          {/* Monitor de Monitoramento de Ondas Primordiais */}
          <div className="live-vedas-box">
            <div className="vedas-telemetry-header font-mono text-saffron">
              <span className="vedas-pulse-indicator"></span>
              LIVE_MANTRIC_VIBRATION_FEED // 5786
            </div>
            <table className="vedas-telemetry-table font-mono">
              <thead>
                <tr>
                  <th>VEDA_CORE</th>
                  <th>VETOR</th>
                  <th>RECEPTOR</th>
                  <th>STATUS</th>
                </tr>
              </thead>
              <tbody>
                {activeMantraStreams.map((stream, idx) => (
                  <tr key={idx}>
                    <td className="text-saffron font-bold">{stream.veda}</td>
                    <td>{stream.type}</td>
                    <td>{stream.rishi}</td>
                    <td className="text-muted">{stream.state}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Stream de Sub-Setores Operacionais */}
      <section className="vedas-stream-panel">
        <div className="vedas-stream-tag font-mono text-saffron">// VEDIC_SECTORS_DECODED</div>
        
        <RitualGrid columns={1} className="vedas-grid-gap">
          {vedicSubSectors.map((sector) => (
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

export default VedasHome;