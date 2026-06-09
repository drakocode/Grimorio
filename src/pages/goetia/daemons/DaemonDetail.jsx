import { useParams, Link } from 'react-router-dom';
import { goetiaDaemons } from '../../../data/goetia/goetiaData';
import '../../../styles/DaemonDetail.styles.css';

const DaemonDetail = () => {
  const { id } = useParams();
  
  // Localiza o Daemon específico no banco de dados estruturado
  const daemon = goetiaDaemons.find(item => item.id === id);

  if (!daemon) {
    return (
      <div className="daemon-not-found font-mono">
        <h2>[ERR_ENTIDADE_NÃO_CONTI_NA_MÁQUINA]</h2>
        <p>A assinatura de sinal solicitada não existe ou permanece oculta nesta iteração do Grimório.</p>
        <Link to="/goetia" className="btn-back-goetia">// RETORNAR_AO_INDEX</Link>
      </div>
    );
  }

  return (
    <div className="daemon-detail-wrapper">
      
      {/* Botão de Retorno Técnico ao Módulo Central */}
      <Link to="/goetia" className="daemon-back-link font-mono">
        ← RETORNAR_A_SÍNCLISE_CTÔNICA
      </Link>

      <div className="daemon-layout-container">
        
        {/* COLUNA ESQUERDA: Monólito de Contenção e Parâmetros */}
        <div className="daemon-media-column">
          <div className="daemon-monolith-chamber">
            <div className="daemon-rank-badge font-mono">{daemon.rank.toUpperCase()}</div>
            <img src={daemon.image} alt={daemon.title} className="daemon-chamber-img" />
            <div className="daemon-containment-glow"></div>
          </div>
          
          {/* Tabela de Telemetria Analítica */}
          <div className="daemon-parameters font-mono">
            <div className="param-row">
              <span className="param-label">LEGIÕES_ATIVAS:</span>
              <span className="param-value text-crimson">{daemon.legions}</span>
            </div>
            <div className="param-row">
              <span className="param-label">CORRESPONDÊNCIA_PLANETÁRIA:</span>
              <span className="param-value">{daemon.planet}</span>
            </div>
            <div className="param-row">
              <span className="param-label">MATRIZ_METÁLICA:</span>
              <span className="param-value text-gold">{daemon.metal}</span>
            </div>
            <div className="param-row">
              <span className="param-label">INCENSO_SINTONIA:</span>
              <span className="param-value">{daemon.incense}</span>
            </div>
            <div className="param-row">
              <span className="param-label">FRENQUÊNCIA_ELEMENTAR:</span>
              <span className="param-value">{daemon.element}</span>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: Ofício, Ofensivas Mentais e Protocolos */}
        <div className="daemon-content-column">
          <header className="daemon-header">
            <span className="daemon-meta font-mono">// GOET_SPIRIT_#{daemon.numericId}</span>
            <h1 className="daemon-title-main">{daemon.title}</h1>
            <p className="daemon-subtitle-sub">{daemon.subTitle}</p>
          </header>

          <div className="daemon-separator-line"></div>

          {/* Seção 01: Atribuições e Ofício */}
          <section className="daemon-section">
            <h3 className="daemon-section-tag font-mono">[I. ESFERA_DE_ATUACAO_E_OFÍCIO]</h3>
            <p className="daemon-office-text">{daemon.office}</p>
          </section>

          {/* Seção 02: Protocolos Obrigatórios de Contenção */}
          <section className="daemon-section">
            <h3 className="daemon-section-tag font-mono">[II. PROTOCOLOS_E_DIRETRIZES_DE_SEGURANÇA]</h3>
            <ul className="requirements-list">
              {daemon.requirements.map((req, idx) => (
                <li key={idx} className="requirement-item">
                  <span className="req-bullet font-mono">▸</span>
                  <p className="req-text">{req}</p>
                </li>
              ))}
            </ul>
          </section>

          {/* Rodapé de Registro */}
          <footer className="daemon-system-footer font-mono">
            <div className="security-tag">CONVENÇÃO // ASSINATURA_CRIPTOGRAFADA_ESTÁVEL</div>
          </footer>

        </div>

      </div>
    </div>
  );
};

export default DaemonDetail;