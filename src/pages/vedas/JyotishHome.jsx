// src/pages/vedas/JyotishHome.jsx
import { jyotishManifesto, jyotishSubSectors, grahaAlignments } from '../../data/vedas/jyotishData';
import RitualGrid from '../../components/grid/Grid';
import OccultCard from '../../components/cards/Card';
import '../../styles/VedasHome.styles.css';

const JyotishHome = () => {
  return (
    <div className="vedas-page-container">
      
      {/* PAINEL ESQUERDO: Telemetria Mantrica e Manifesto Sideral */}
      <aside className="vedas-manifesto-panel">
        <div className="sticky-vedas-content">
          <div className="vedas-archive-tag font-mono">// {jyotishManifesto.sectionId}</div>
          <h1 className="vedas-main-title">{jyotishManifesto.title}</h1>
          <div 
            className="astrology-divider" 
            style={{ background: 'linear-gradient(to right, #ff7700 0%, transparent 100%)' }}
          ></div>
          <p className="astrology-manifesto-text" style={{ color: 'rgba(230, 230, 235, 0.7)' }}>
            {jyotishManifesto.description}
          </p>
          
          {/* Monitor de Alinhamentos Graha (Estilo Interface Védica Avançada) */}
          <div className="live-telemetry-box" style={{ borderColor: 'rgba(255, 119, 0, 0.15)', background: 'rgba(8, 7, 5, 0.4)' }}>
            <div className="telemetry-header font-mono" style={{ color: '#e6e6eb', borderBottom: '1px solid rgba(255, 119, 0, 0.15)' }}>
              <span className="pulse-indicator" style={{ background: '#ff7700', boxShadow: '0 0 8px #ff7700' }}></span>
              LIVE_GRAHA_ALIGNMENTS // SIDERAL_MATRIX
            </div>
            <table className="vedas-telemetry-table font-mono">
              <thead>
                <tr>
                  <th>GRAHA</th>
                  <th>RASHI</th>
                  <th>BHAVA</th>
                  <th>ESTADO // STATUS</th>
                </tr>
              </thead>
              <tbody>
                {grahaAlignments.map((alignment, idx) => (
                  <tr key={idx}>
                    <td style={{ color: '#ff7700', fontWeight: '500' }}>{alignment.graha}</td>
                    <td>{alignment.rashi}</td>
                    <td>{alignment.bhava}</td>
                    <td className={alignment.state.includes("Vakri") || alignment.state.includes("Neecha") ? "text-crimson" : "text-muted"}>
                      {alignment.state}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Grid Dinâmico de Sub-Sectores Védicos */}
      <section className="astrology-stream-panel" style={{ paddingLeft: '20px' }}>
        <div className="stream-header-tag font-mono" style={{ color: 'var(--color-muted)' }}>
          // VEDIC_SUB_SECTORS_AVAILABLE
        </div>
        
        <RitualGrid columns={1}>
          {jyotishSubSectors.map((sector) => (
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

export default JyotishHome;