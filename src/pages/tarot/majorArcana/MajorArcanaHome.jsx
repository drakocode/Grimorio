import { majorArcanaManifesto, majorArcanaKeys, arcanaTelemetry } from '../../../data/tarot/majorArcanaData';
import RitualGrid from '../../../components/grid/Grid';
import OccultCard from '../../../components/cards/Card';
import '../../../styles/MajorArcanaHome.styles.css';

const MajorArcanaHome = () => {
  return (
    <div className="major-arcana-page-container">
      
      {/* PAINEL ESQUERDO: Manifesto e Monitor de Transmissão */}
      <aside className="major-arcana-manifesto-panel">
        <div className="sticky-arcana-content">
          <div className="arcana-archive-tag font-mono">{majorArcanaManifesto.sectionId}</div>
          <h1 className="arcana-main-title">{majorArcanaManifesto.title}</h1>
          <div className="arcana-architectural-line"></div>
          <p className="arcana-description-text">{majorArcanaManifesto.description}</p>
          
          {/* Caixa de Telemetria de Leitura */}
          <div className="arcana-telemetry-box font-mono">
            <div className="telemetry-row">
              <span className="telemetry-label">INDEX_ESTADO:</span>
              <span className="telemetry-value text-gold">{arcanaTelemetry.transmission}</span>
            </div>
            <div className="telemetry-row">
              <span className="telemetry-label">CHAVES_PROJETADAS:</span>
              <span className="telemetry-value">{arcanaTelemetry.activeKeys}</span>
            </div>
            <div className="telemetry-row">
              <span className="telemetry-label">MODO_RESOLUÇÃO:</span>
              <span className="telemetry-value text-crimson">{arcanaTelemetry.readingMode}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Catálogo de Chaves Coletadas */}
      <section className="major-arcana-stream-panel">
        <div className="major-arcana-stream-tag font-mono">// ARCANUM_INDEX_FEED</div>
        
        {/* Renderiza em duas colunas no desktop para emular um livro aberto */}
        <RitualGrid columns={2} className="major-arcana-grid-override">
          {majorArcanaKeys.map((keyCard) => (
            <OccultCard
              key={keyCard.id}
              indexId={keyCard.id}
              title={keyCard.title}
              subTitle={keyCard.subTitle}
              description={keyCard.description}
              image={keyCard.image}
              metadata={keyCard.metadata}
              linkPath={keyCard.path}
            />
          ))}
        </RitualGrid>
      </section>

    </div>
  );
};

export default MajorArcanaHome;