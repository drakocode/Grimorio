import { homeManifesto, grimoireSectors } from '../../data/Home/homeData';
import RitualGrid from '../../components/grid/Grid';
import OccultCard from '../../components/cards/Card';
import { useRitualScroll } from '../../hooks/useRitualScroll';
import '../../styles/Home.styles.css';

const Home = () => {
  const { scrollProgress } = useRitualScroll();

  return (
    <div className="home-ritual-workspace">
      {/* Structural Asymmetric Framework */}
      <div className="manifesto-anchor-section">
        <div className="sticky-manifesto-container">
          <div className="manifesto-sigil font-mono">{homeManifesto.sigil}</div>
          <h2 className="manifesto-title">{homeManifesto.title}</h2>
          <div className="architectural-divider"></div>
          <p className="manifesto-text">{homeManifesto.declaration}</p>
          
          {/* Dynamic Ritual Progress Metric */}
          <div className="ritual-progress-bar-container">
            <div className="progress-label font-mono">WORKSPACE_DEPTH</div>
            <div className="progress-track">
              <div 
                className="progress-fill" 
                style={{ width: `${scrollProgress * 100}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>

      {/* Dynamic Content Stream Section */}
      <div className="content-stream-section">
        <div className="section-title-tag font-mono">// FORBIDDEN_SECTORS_REGISTERED</div>
        <RitualGrid columns={1}>
          {grimoireSectors.map((sector) => (
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
      </div>
    </div>
  );
};

export default Home;