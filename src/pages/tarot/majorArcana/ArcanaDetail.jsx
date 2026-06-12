import { useParams, Link } from 'react-router-dom';
import { majorArcanaKeys, arcanaDetailSections } from '../../../data/tarot/majorArcanaData';
import DetailSection from '../../../components/detail/DetailSection';
import DeckImageCard from '../../../components/decks/DeckImageCard';
import DetailNavigation from '../../../components/navigation/DetailNavigation';
import '../../../styles/ArcanaDetail.styles.css';
import '../../../styles/DeckImageCard.styles.css';
import '../../../styles/DetailSection.styles.css';

const ArcanaDetail = () => {
  const { id } = useParams();
  
  // Localiza o Arcano pelo ID dinâmico da URL
  const arcana = majorArcanaKeys.find(item => item.id === id);

  // Fallback caso a chave solicitada não seja encontrada ou mapeada
  if (!arcana) {
    return (
      <div className="arcana-not-found font-mono">
        <h2>[ERR_CHAVE_NÃO_LOCALIZADA]</h2>
        <p>O vetor solicitado não consta na matriz corrente do Grimório.</p>
        <Link to="/tarot/major-arcana" className="btn-back">// RETORNAR_AO_INDEX</Link>
      </div>
    );
  }

  return (
    <div className="arcana-detail-wrapper">

      {/* Botão de Retorno Técnico */}
      <Link to="/tarot/major-arcana" className="arcana-back-link font-mono">
        ← RETORNAR_À_MATRIZ_MÃE
      </Link>

      {/* Navegação Topo */}
      <DetailNavigation
        items={majorArcanaKeys}
        currentId={id}
        basePath="/tarot/major-arcana"
      />

      <div className="arcana-layout-container">
        
        {/* COLUNA ESQUERDA: Monólito de Imagem e Assinaturas */}
        <div className="arcana-media-column">
          <div className="arcana-monolith">
            <div className="arcana-badge font-mono">KEY_{arcana.numericId}</div>
            <img src={arcana.image} alt={arcana.title} className="arcana-hero-img" />
            <div className="arcana-scanner-line"></div>
          </div>
          
          {/* Tabela de Relações Analógicas */}
          <div className="arcana-correspondences font-mono">
            <div className="corr-row">
              <span className="corr-label">ELEMENTO_VETOR:</span>
              <span className="corr-value">{arcana.element}</span>
            </div>
            <div className="corr-row">
              <span className="corr-label">ASTRO_REGENTE:</span>
              <span className="corr-value text-gold">{arcana.astrology}</span>
            </div>
            <div className="corr-row">
              <span className="corr-label">LETRA_HEBRAICA:</span>
              <span className="corr-value">{arcana.hebrewLetter}</span>
            </div>
            <div className="corr-row">
              <span className="corr-label">EIXO_DA_ÁRBORE:</span>
              <span className="corr-value text-crimson">{arcana.treeOfLife}</span>
            </div>
          </div>

          {/* Galeria de Decks */}
          <div className="arcana-decks-section">
            <h4 className="decks-section-tag font-mono">[VARIAÇÕES DE DECKS]</h4>
            <div className="decks-gallery">
              {arcana.decks && arcana.decks.length > 0 ? (
                arcana.decks.map((deck, index) => (
                  <DeckImageCard key={index} deck={deck} />
                ))
              ) : (
                <div className="deck-card">
                  <div className="deck-card-placeholder">
                    <span className="placeholder-text font-mono">// SEM_DECKS_MAPEADOS</span>
                    <span className="placeholder-desc font-mono">Adicionar variações futuras</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: Transmissão de Conhecimento e Simbologia */}
        <div className="arcana-content-column">
          <header className="arcana-header">
            <span className="arcana-meta font-mono">// {arcana.metadata}</span>
            <h1 className="arcana-title-main">{arcana.title}</h1>
            <p className="arcana-subtitle-sub">{arcana.subTitle}</p>
          </header>

          <div className="arcana-separator"></div>

          {/* Seção 01: Lore / Doutrina Oculta */}
          <section className="arcana-section">
            <h3 className="section-tag font-mono">[I. DOUTRINA_E_FLUXO]</h3>
            <p className="arcana-lore-text">{arcana.lore}</p>
          </section>

          {/* Seção 02: Decomposição Simbólica */}
          <section className="arcana-section">
            <h3 className="section-tag font-mono">[II. DECOMPOSIÇÃO_GEOMÉTRICA]</h3>
            <ul className="symbology-list">
              {arcana.symbology.map((symbol, index) => {
                const [title, text] = symbol.split(':');
                return (
                  <li key={index} className="symbology-item">
                    <strong className="text-gold font-mono">{title}:</strong>
                    <span>{text}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          {/* Rodapé Interno de Autenticação */}
          <footer className="arcana-integrity-footer font-mono">
            <div className="integrity-tag">COMPILADO // INTEGRALIDADE_GARANTIDA</div>
          </footer>

          {/* Seções de Detalhe Expandidas */}
          <div className="arcana-detail-sections">
            <DetailSection {...arcanaDetailSections.interpretation} />
            <DetailSection {...arcanaDetailSections.reversed} />
            <DetailSection {...arcanaDetailSections.positions} />
            <DetailSection {...arcanaDetailSections.contexts} />
          </div>
        </div>
 
      </div>

      {/* Navegação Base */}
      <DetailNavigation
        items={majorArcanaKeys}
        currentId={id}
        basePath="/tarot/major-arcana"
      />
    </div>
  );
};

export default ArcanaDetail;