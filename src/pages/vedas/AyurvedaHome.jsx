// src/pages/vedas/AyurvedaHome.jsx
import { ayurvedaManifesto, ayurvedaSubSectors, bioCircuitTelemetry } from '../../data/vedas/ayurvedaData';
import RitualGrid from '../../components/grid/Grid';
import OccultCard from '../../components/cards/Card';
import '../../styles/VedasHome.styles.css';

const AyurvedaHome = () => {
  return (
    <div className="vedas-page-container">
      
      {/* PAINEL ESQUERDO: Telemetria Biológica e Manifesto */}
      <aside className="vedas-manifesto-panel">
        <div className="sticky-vedas-content">
          <div className="vedas-archive-tag font-mono">// {ayurvedaManifesto.sectionId}</div>
          <h1 className="vedas-main-title">{ayurvedaManifesto.title}</h1>
          <div 
            className="astrology-divider" 
            style={{ background: 'linear-gradient(to right, #ff7700 0%, transparent 100%)' }}
          ></div>
          <p className="astrology-manifesto-text" style={{ color: 'rgba(230, 230, 235, 0.7)' }}>
            {ayurvedaManifesto.description}
          </p>
          
          {/* Monitor de Circuitos Biológicos e Toxinas */}
          <div className="live-telemetry-box" style={{ borderColor: 'rgba(255, 119, 0, 0.15)', background: 'rgba(8, 7, 5, 0.4)' }}>
            <div className="telemetry-header font-mono" style={{ color: '#e6e6eb', borderBottom: '1px solid rgba(255, 119, 0, 0.15)' }}>
              <span className="pulse-indicator" style={{ background: '#ff7700', boxShadow: '0 0 8px #ff7700' }}></span>
              BIO-CIRCUIT_TELEMETRY // LIVE_PHYSIO_DATA
            </div>
            <table className="vedas-telemetry-table font-mono">
              <thead>
                <tr>
                  <th>BIO-CIRCUITO</th>
                  <th>SUB-SISTEMAS</th>
                  <th>ALOCAÇÃO</th>
                  <th>STATUS // TELEMETRIA</th>
                </tr>
              </thead>
              <tbody>
                {bioCircuitTelemetry.map((item, idx) => (
                  <tr key={idx}>
                    <td style={{ color: '#ff7700', fontWeight: '500' }}>{item.circuit}</td>
                    <td>{item.components}</td>
                    <td>{item.allocation}</td>
                    <td className={item.status.includes("PURGA") || item.status.includes("INSTÁVEL") ? "text-crimson" : "text-muted"}>
                      {item.status}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Grid de Sub-Sectores do Ayurveda */}
      <section className="astrology-stream-panel" style={{ paddingLeft: '20px' }}>
        <div className="stream-header-tag font-mono" style={{ color: 'var(--color-muted)' }}>
          // BIO_SUSTENANCE_LAYERS_AVAILABLE
        </div>
        
        <RitualGrid columns={1}>
          {ayurvedaSubSectors.map((sector) => (
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

export default AyurvedaHome;