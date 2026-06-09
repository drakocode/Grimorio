import { tarotManifesto, tarotSubSectors, matrixMetrics } from '../../data/tarot/tarotData';
import RitualGrid from '../../components/grid/Grid';
import OccultCard from '../../components/cards/Card';
import '../../styles/TarotHome.styles.css';

const TarotHome = () => {
  return (
    <div className="tarot-page-container">
      
      {/* PAINEL ESQUERDO: Manifesto e Indexação Criptográfica */}
      <aside className="tarot-manifesto-panel">
        <div className="sticky-tarot-content">
          <div className="tarot-archive-tag font-mono">{tarotManifesto.sectionId}</div>
          <h1 className="tarot-main-title">{tarotManifesto.title}</h1>
          <div className="tarot-architectural-rule"></div>
          <p className="tarot-description-text">{tarotManifesto.description}</p>
          
          {/* Painel Técnico Interno de Chaves */}
          <div className="matrix-status-box font-mono">
            <div className="status-row">
              <span className="status-label">ESTADO_DO_SISTEMA:</span>
              <span className="status-value text-gold">{matrixMetrics.systemStatus}</span>
            </div>
            <div className="status-row">
              <span className="status-label">CHAVES_REGISTRADAS:</span>
              <span className="status-value">{matrixMetrics.crypticKeys}</span>
            </div>
            <div className="status-row">
              <span className="status-label">MATRIZES_DE_LEITURA:</span>
              <span className="status-value text-crimson">{matrixMetrics.activeSpreads}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Grid de Setores Estruturais */}
      <section className="tarot-stream-panel">
        <div className="tarot-stream-tag font-mono">// ARCANUM_ARRAYS_LOADED</div>
        
        <RitualGrid columns={1} className="tarot-grid-gap">
          {tarotSubSectors.map((subSector) => (
            <OccultCard
              key={subSector.id}
              indexId={subSector.id}
              title={subSector.title}
              subTitle={subSector.subTitle}
              description={subSector.description}
              image={subSector.image}
              metadata={subSector.metadata}
              linkPath={subSector.path}
            />
          ))}
        </RitualGrid>
      </section>

    </div>
  );
};

export default TarotHome;