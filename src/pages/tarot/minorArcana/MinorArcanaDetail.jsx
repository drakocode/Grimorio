import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { minorArcanaCatalog } from '../../../data/tarot/minorArcanaData';
import '../../../styles/MinorArcanaDetail.styles.css';

const MinorArcanaDetail = () => {
  const { id } = useParams();
  
  const card = minorArcanaCatalog.find(item => item.id === id);

  if (!card) {
    return (
      <div className="minor-not-found font-mono">
        <h2>[ERR_CHAVE_ELEMENTAL_INVÁLIDA]</h2>
        <p>A coordenada do menor arcano indicada não ressoa com a nossa matriz de dados atual.</p>
        <Link to="/tarot/minor-arcana" className="btn-back-minor">// VOLTAR_AO_INDEX</Link>
      </div>
    );
  }

  return (
    <div className="minor-detail-wrapper">
      
      <Link to="/tarot/minor-arcana" className="minor-back-link font-mono">
        ← RETORNAR À DISTRIBUIÇÃO ELEMENTAL
      </Link>

      <div className="minor-layout-container">
        
        {/* COLUNA ESQUERDA: O Monólito Gráfico */}
        <div className="minor-media-column">
          <div className="minor-monolith">
            <img src={card.image} alt={card.name} className="minor-hero-img" />
            <div className="minor-monolith-header font-mono">
              <span>EL_ENG: {card.element.toUpperCase()}</span>
              <span>RANK // {card.rank.toUpperCase()}</span>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: Hermetismo e Simbologia */}
        <div className="minor-content-column">
          <header className="minor-header">
            <span className="minor-meta font-mono">// {card.metadata}</span>
            <h1 className="minor-title-main">{card.name}</h1>
            <p className="minor-subtitle-sub">Naipe de {card.suit.toUpperCase()} // Matriz do Arcano Menor</p>
          </header>

          <div className="minor-separator"></div>

          {/* Doutrina Oculta */}
          <section className="minor-section">
            <h3 className="minor-section-tag font-mono">[I. INTERPRETAÇÃO_E_FLUXO_SUTIL]</h3>
            <p className="minor-lore-text">{card.lore}</p>
          </section>

          {/* Âncoras Psíquicas */}
          <section className="minor-section">
            <h3 className="minor-section-tag font-mono">[II. ÂNCORAS_E_VETORES_DE_CONSCIÊNCIA]</h3>
            <div className="minor-keywords-flex font-mono">
              {card.keywords.map((kw, i) => (
                <span key={i} className="minor-kw-badge">
                  <span className="crimson-bullet">▪</span> {kw.toUpperCase()}
                </span>
              ))}
            </div>
          </section>

          {/* Decomposição Simbólica */}
          <section className="minor-section">
            <h3 className="minor-section-tag font-mono">[III. DECOMPOSIÇÃO_PROJETIVA]</h3>
            <ul className="minor-symbology-list">
              {card.symbology.map((sym, index) => {
                const [title, text] = sym.split(':');
                return (
                  <li key={index} className="minor-symbology-item">
                    <strong className="text-gold font-mono">{title}:</strong>
                    <span>{text}</span>
                  </li>
                );
              })}
            </ul>
          </section>

          <footer className="minor-integrity-footer font-mono">
            <div className="security-tag">// INTEGRIDADE_ELEMENTAL_VERIFICADA_100%</div>
          </footer>
        </div>

      </div>
    </div>
  );
};

export default MinorArcanaDetail;