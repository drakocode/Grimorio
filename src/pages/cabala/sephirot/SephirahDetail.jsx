// src/pages/cabala/sephirot/SephirahDetail.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { sephirotTreeData } from '../../../data/cabala/sephirot/sephirotData';
import DetailNavigation from '../../../components/navigation/DetailNavigation';
import '../../../styles/SephirahDetail.styles.css';

const SephirahDetail = () => {
  const { number } = useParams();
  
  // Localiza a Sephirah correspondente pelo número do nó ("01" a "10")
  const sephirah = sephirotTreeData.find(item => item.number === number);

  if (!sephirah) {
    return (
      <div className="sephirah-not-found font-mono">
        <h2>[ERR_NÓ_NÃO_SINTONIZADO]</h2>
        <p>A frequência ou coordenada da esfera solicitada permanece oculta ou inválida na rede.</p>
        <Link to="/cabala/sephirot" className="btn-back-sephirot">// RETORNAR_AO_INDEX</Link>
      </div>
    );
  }

  return (
    <div className="sephirah-detail-wrapper">
      {/* Botão de Retorno Técnico */}
      <Link to="/cabala/sephirot" className="sephirah-back-link font-mono">
        ← RETORNAR AO GRAFO SEPHIRÓTICO
      </Link>

      {/* Navegação Topo */}
      <DetailNavigation
        items={sephirotTreeData}
        currentId={number}
        basePath="/cabala/sephirot"
        paramName="number"
      />

      <div className="sephirah-layout-container">
        
        {/* COLUNA ESQUERDA: Monólito de Dados e Estado do Nó */}
        <div className="sephirah-media-column">
          <div className="sephirah-monolith">
            <div className="sephirah-node-badge font-mono">#{sephirah.number}</div>
            
            <div className="sephirah-monolith-display">
              <div className="cyber-circle"></div>
              <span className="display-status font-mono">NODE_STREAM_ACTIVE</span>
            </div>

            <div className="sephirah-telemetry-strip font-mono">
              <div className="strip-row">
                <span>CLASSIFICAÇÃO:</span>
                <span className={sephirah.classification === "SUPREMA" ? "text-crimson" : "text-gold"}>
                  {sephirah.classification}
                </span>
              </div>
              <div className="strip-row">
                <span>VIBRATIONAL_VAL:</span>
                <span className="text-ghost">{parseInt(sephirah.number) * 111} Hz</span>
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: Doutrina e Atribuições Ocultas */}
        <div className="sephirah-content-column">
          <header className="sephirah-header">
            <span className="sephirah-meta font-mono">// CABALA_NODE_EMANATION_#{sephirah.number}</span>
            <h1 className="sephirah-title-main">{sephirah.name}</h1>
            <p className="sephirah-subtitle-sub">{sephirah.translation}</p>
          </header>

          <div className="sephirah-separator"></div>

          {/* Seção I: Lore e Doutrina Metafísica */}
          <section className="sephirah-section">
            <h3 className="sephirah-section-tag font-mono">[I. MATRIZ_DE_EMANACAO_E_FLUXO]</h3>
            <p className="sephirah-lore-text text-justify">{sephirah.description}</p>
          </section>

          {/* Seção II: Protocolos de Sintonia e Assinaturas Divinas */}
          <section className="sephirah-section">
            <h3 className="sephirah-section-tag font-mono">[II. PROTOCOLOS_DE_CONECTIVIDADE]</h3>
            <div className="sephirah-spec-grid font-mono">
              <div className="spec-card">
                <span className="spec-label">DIVINE_KEY // NOME DIVINO</span>
                <span className="spec-value text-gold">{sephirah.divineName}</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">ARCHANGEL // CORRENTE ARCANJÉLICA</span>
                <span className="spec-value">{sephirah.archangel}</span>
              </div>
              <div className="spec-card">
                <span className="spec-label">PLANET_NODE // RETROALIMENTAÇÃO PLANETÁRIA</span>
                <span className="spec-value text-crimson">{sephirah.planetaryNode}</span>
              </div>
            </div>
          </section>

          {/* Rodapé Interno do Sistema */}
          <footer className="sephirah-system-footer font-mono">
            <div className="sephirah-security-tag">ESTAÇÃO_MÃE // TRANSMISSÃO_ESTÁVEL // INFINITO_AIN_SOPH_AUR</div>
          </footer>
        </div>

      </div>

      {/* Navegação Base */}
      <DetailNavigation
        items={sephirotTreeData}
        currentId={number}
        basePath="/cabala/sephirot"
        paramName="number"
      />
    </div>
  );
};

export default SephirahDetail;