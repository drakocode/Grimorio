import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { zodiacSigns } from '../../../data/astrology/astrologyData';
import '../../../styles/SignDetail.styles.css';

const SignDetail = () => {
  const { id } = useParams();
  
  // Localiza o signo correspondente ao ID da rota
  const sign = zodiacSigns.find(item => item.id === id);

  if (!sign) {
    return (
      <div className="sign-not-found font-mono">
        <h2>[ERR_ARQUÉTIPO_NÃO_LOCALIZADO]</h2>
        <p>A coordenada celeste solicitada não existe ou permanece oculta nesta iteração do Grimório.</p>
        <Link to="/astrology/signs" className="btn-back-astrology">// RETORNAR_AO_INDEX</Link>
      </div>
    );
  }

  return (
    <div className="sign-detail-wrapper">
      
      {/* Botão de Retorno */}
      <Link to="/astrology/signs" className="sign-back-link font-mono">
        ← RETORNAR À SÍNCLISE CELESTIAL
      </Link>

      <div className="sign-layout-container">
        
        {/* COLUNA ESQUERDA: Monólito e Telemetria de Correspondência */}
        <div className="sign-media-column">
          <div className="sign-monolith">
            <div className="sign-glyph-badge font-mono">{sign.symbol}</div>
            <img src={sign.image} alt={sign.name} className="sign-hero-img" />
            <div className="sign-atmospheric-shadow"></div>
          </div>
          
          {/* Tabela de Correspondências */}
          <div className="sign-correspondences font-mono">
            <div className="sign-row">
              <span className="sign-label">ELEMENTO:</span>
              <span className="sign-value text-gold">{sign.element.toUpperCase()}</span>
            </div>
            <div className="sign-row">
              <span className="sign-label">MODALIDADE:</span>
              <span className="sign-value">{sign.modality.toUpperCase()}</span>
            </div>
            <div className="sign-row">
              <span className="sign-label">REGENTE_CELESTE:</span>
              <span className="sign-value text-crimson">{sign.ruler.toUpperCase()}</span>
            </div>
            <div className="sign-row">
              <span className="sign-label">INTERVALO_SOLAR:</span>
              <span className="sign-value">{sign.dateRange}</span>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: Doutrina e Palavras-Chave */}
        <div className="sign-content-column">
          <header className="sign-header">
            <span className="sign-meta font-mono">// ASTRO_ARCHETYPE_#{sign.id.toUpperCase()}</span>
            <h1 className="sign-title-main">{sign.name}</h1>
            <p className="sign-subtitle-sub">{sign.englishName} // {sign.ruler}</p>
          </header>

          <div className="sign-separator"></div>

          {/* Seção 01: Lore e Doutrina */}
          <section className="sign-section">
            <h3 className="sign-section-tag font-mono">[I. DOUTRINA_E_ARQUÉTIPO]</h3>
            <p className="sign-lore-text">{sign.lore}</p>
          </section>

          {/* Seção 02: Palavras-chave / Vetores */}
          <section className="sign-section">
            <h3 className="sign-section-tag font-mono">[II. VETORES_DE_CONSCIÊNCIA]</h3>
            <div className="keywords-grid font-mono">
              {sign.keywords.map((kw, idx) => (
                <div key={idx} className="keyword-badge">
                  <span className="kw-bullet text-crimson">▸</span> {kw.toUpperCase()}
                </div>
              ))}
            </div>
          </section>

          {/* Rodapé do Sistema */}
          <footer className="sign-system-footer font-mono">
            <div className="security-tag">COMPILADO // ALINHAMENTO_DE_DADOS_ESTÁVEL</div>
          </footer>

        </div>

      </div>
    </div>
  );
};

export default SignDetail;
