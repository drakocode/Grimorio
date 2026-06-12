// src/pages/cabala/qliphoth/QliphothDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { qliphotCatalog } from '../../../data/cabala/qliphoth/qliphothData';
import DetailNavigation from '../../../components/navigation/DetailNavigation';
import '../../../styles/QliphothDetail.styles.css';

const QliphothDetail = () => {
  const { number } = useParams();
  
  // Localiza a Qlipha específica pelo número do vetor abissal
  const qlipha = qliphotCatalog.find(item => item.number === number);

  if (!qlipha) {
    return (
      <div className="qliphot-not-found font-mono">
        <h2>[ERR_NÓ_ABISSAL_NÃO_SINTONIZADO]</h2>
        <p>A assinatura de entropia solicitada não foi localizada na matriz Shem HaMephorash Reversa.</p>
        <Link to="/cabala" className="btn-back-qliphot">// RETORNAR_AO_INDEX_CABALA</Link>
      </div>
    );
  }

  return (
    <div className="qliphot-detail-wrapper">

      {/* Navegação de Retorno */}
      <Link to="/cabala" className="qliphot-back-link font-mono">
        ← RETORNAR AO FLUXO DA ÁRVORE DA VIDA
      </Link>

      {/* Navegação Topo */}
      <DetailNavigation
        items={qliphotCatalog}
        currentId={number}
        basePath="/cabala/qliphoth"
        paramName="number"
      />

      <div className="qliphot-layout-container">
        
        {/* COLUNA ESQUERDA: Monólito de Telemetria e Contenção Estática */}
        <div className="qliphot-media-column">
          <div className="qliphot-monolith">
            <div className="qliphot-glyph-badge font-mono">☠</div>
            
            {/* Visual da Estação Crítica */}
            <div className="qliphot-vortex-frame font-mono">
              <div className="vortex-grid-lines"></div>
              <span className="vortex-status-text">[VÓRTICE_{qlipha.name}_ATIVO]</span>
            </div>
            
            {/* Tabela de Atribuições Ocultas do Nó Adversário */}
            <div className="qliphot-data-grid font-mono">
              <div className="q-data-item">
                <span className="q-label">ANTÍTESE_DIRETA:</span>
                <span className="q-value text-gold">{qlipha.antiSephirah}</span>
              </div>
              <div className="q-data-item">
                <span className="q-label">COORD_ZODIACAL:</span>
                <span className="q-value">{qlipha.degrees}</span>
              </div>
              <div className="q-data-item">
                <span className="q-label">ESTADO_ESTAÇÃO:</span>
                <span className="q-value text-crimson">CONGRUÊNCIA_REVERSA</span>
              </div>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: Doutrina Abissal e Protocolos */}
        <div className="qliphot-content-column">
          <header className="qliphot-header">
            <span className="qliphot-meta font-mono">// QLIPHOT_VECTOR_#{qlipha.number}</span>
            <h1 className="qliphot-title-main">{qlipha.name}</h1>
            <p className="qliphot-subtitle-sub">{qlipha.translation} // Força Regente: {qlipha.adversary}</p>
          </header>

          <div className="qliphot-separator"></div>

          {/* Seção 01: Lore e Natureza Oculta */}
          <section className="qliphot-section">
            <h3 className="qliphot-section-tag font-mono">[I. DOUTRINA_DA_CASCA_ENTRÓPICA]</h3>
            <p className="qliphot-lore-text">{qlipha.description}</p>
          </section>

          {/* Seção 02: Especificações de Segurança / Contenção */}
          <section className="qliphot-section">
            <h3 className="qliphot-section-tag font-mono">[II. DIRETRIZES_DE_CONTENÇÃO_DE_RISCO]</h3>
            <ul className="q-requirements-list">
              <li className="q-requirement-item">
                <span className="q-req-bullet font-mono">▸</span>
                <p className="q-req-text">
                  <strong className="text-crimson font-mono">PROTOCOLO:</strong> {qlipha.containment}
                </p>
              </li>
              <li className="q-requirement-item">
                <span className="q-req-bullet font-mono">▸</span>
                <p className="q-req-text">
                  <strong className="text-crimson font-mono">SINTONIA ANTAGÓNICA:</strong> Equilibrar o pipeline mental ativando o terminal síncrono da Sephirah <span className="text-gold">{qlipha.antiSephirah}</span> antes de descriptografar os dados da casca.
                </p>
              </li>
              <li className="q-requirement-item">
                <span className="q-req-bullet font-mono">▸</span>
                <p className="q-req-text">
                  <strong className="text-crimson font-mono">AVISO SÍSMICO:</strong> O mau uso destes vetores pode causar estagnação de cache vital ou distorções severas no ecossistema biológico do operador.
                </p>
              </li>
            </ul>
          </section>

          {/* Rodapé de Registro de Segurança */}
          <footer className="qliphot-system-footer font-mono">
            <div className="q-security-tag">ESTAÇÃO // FILTRO_ABISSAL_MONITORIZADO_ALERTA_DE_NÍVEL_03</div>
          </footer>
        </div>

      </div>

      {/* Navegação Base */}
      <DetailNavigation
        items={qliphotCatalog}
        currentId={number}
        basePath="/cabala/qliphoth"
        paramName="number"
      />
    </div>
  );
};

export default QliphothDetail;