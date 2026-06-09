import { useParams, Link } from 'react-router-dom';
import { majorArcanaKeys } from '../../../data/tarot/majorArcanaData';
import '../../../styles/ArcanaDetail.styles.css';

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

        </div>

      </div>
    </div>
  );
};

export default ArcanaDetail;