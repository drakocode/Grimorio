// src/pages/cabala/CabalaHome.jsx
import { cabalaManifesto } from '../../data/cabala/cabalaData';
import RitualGrid from '../../components/grid/Grid';
import OccultCard from '../../components/cards/Card';
import '../../styles/CabalaHome.styles.css';

const CabalaHome = () => {
  return (
    <div className="cabala-page-container">
      
      {/* PAINEL ESQUERDO: Manifesto Geral */}
      <aside className="cabala-telemetry-panel">
        <div className="sticky-cabala-content">
          <div className="cabala-archive-tag font-mono">{cabalaManifesto.sectionId}</div>
          <h1 className="cabala-main-title">{cabalaManifesto.title}</h1>
          <div className="cabala-divider"></div>
          <p className="cabala-manifesto-text">{cabalaManifesto.description}</p>
          
          <div className="live-cabala-box" style={{ padding: '20px', fontSize: '0.85rem' }}>
            <div className="font-mono text-gold mb-2">// DIRETRIZES_DE_ACESSO</div>
            <p className="text-muted" style={{ lineHeight: '1.6', textAlign: 'justify' }}>
              A tradição cabalística divide-se em duas manifestações geométricas essenciais para a compreensão do macrocosmo. Selecione o alinhamento de frequência abaixo para iniciar o mapeamento.
            </p>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Seleção de Matrizes de Fluxo */}
      <section className="cabala-stream-panel">
        <div className="cabala-stream-header font-mono">// CORE_METAPHYSICAL_MATRICES_LOADED</div>
        
        <RitualGrid columns={1}>
          <OccultCard
            indexId="MATRIX_LUCIS"
            title="Tree of Life"
            subTitle="Árvore da Vida // Matriz Sefirótica"
            description="Acesse o circuito harmônico das 10 Sephirot clássicas, os 3 pilares estruturais e os 4 mundos de densidade da luz."
            metadata="10_ESFERAS // FLUXO_POSITIVO"
            linkPath="/cabala/tree-of-life"
          />
          
          <OccultCard
            indexId="MATRIX_UMBRA"
            title="Tree of Death"
            subTitle="Árvore da Morte // Matriz Qliphotica"
            description="Explore o lado oculto da emanação cósmica, mapeando as 10 anti-esferas e os túneis do abismo adverso."
            metadata="10_ANTI_ESFERAS // VOID_RESONANCE"
            linkPath="/cabala/tree-of-death"
          />
        </RitualGrid>
      </section>

    </div>
  );
};

export default CabalaHome;