// src/pages/cabala/anjos/AnjoDetail.jsx
import { useParams, Link } from 'react-router-dom';
import { angelsCatalog } from '../../../data/cabala/anjos/anjosData'; // Ajuste o nível de pastas se necessário
import DetailNavigation from '../../../components/navigation/DetailNavigation';
import '../../../styles/AnjoDetail.styles.css';

const AnjoDetail = () => {
  const { number } = useParams();
  
  // Localiza o Anjo específico pelo número do vetor (01 a 72)
  const angel = angelsCatalog.find(item => item.number === number);

  if (!angel) {
    return (
      <div className="angel-not-found font-mono">
        <h2>[ERR_VETOR_NÃO_SINTONIZADO]</h2>
        <p>A frequência solicitada não foi localizada na rede Shem HaMephorash.</p>
        {/* CORRIGIDO: path alterado para /cabala/anjos */}
        <Link to="/anjos" className="btn-back-anjos">// RETORNAR_AO_INDEX</Link>
      </div>
    );
  }

  return (
    <div className="angel-detail-wrapper">

      {/* CORRIGIDO: path alterado para /cabala/anjos */}
      <Link to="/anjos" className="angel-back-link font-mono">
        ← RETORNAR_AO_FLUXO_ANGÉLICO
      </Link>

      {/* Navegação Topo */}
      <DetailNavigation
        items={angelsCatalog}
        currentId={number}
        basePath="/anjos"
        paramName="number"
      />

      <div className="angel-layout-container">
        
        {/* COLUNA ESQUERDA: Visual e Parâmetros de Frequência */}
        <div className="angel-media-column">
          <div className="angel-monolith-chamber">
            <div className="angel-vec-badge font-mono">VEC_{angel.number}</div>
            <img 
              src={angel.image || "https://images.unsplash.com/photo-1502481851512-e91251c21d66?q=80&w=600&auto=format&fit=crop"} 
              alt={angel.name} 
              className="angel-chamber-img" 
            />
            <div className="angel-resonance-glow"></div>
          </div>
          
          {/* Tabela de Telemetria de Atribuições */}
          <div className="angel-parameters font-mono">
            <div className="a-param-row">
              <span className="a-param-label">CORO_ANGÉLICO:</span>
              <span className="a-param-value text-gold">{angel.choir}</span>
            </div>
            <div className="a-param-row">
              <span className="a-param-label">PRÍNCIPE_REGENTE:</span>
              <span className="a-param-value">{angel.prince}</span>
            </div>
            <div className="a-param-row">
              <span className="a-param-label">NÓ_SEPHIRÓTICO:</span>
              <span className="a-param-value text-gold">{angel.sephirah}</span>
            </div>
            <div className="a-param-row">
              <span className="a-param-label">DOMÍNIO_ZODIACAL:</span>
              <span className="a-param-value">{angel.degrees}</span>
            </div>
          </div>
        </div>

        {/* COLUNA DIREITA: Atributos e Operação */}
        <div className="angel-content-column">
          <header className="angel-header">
            <span className="angel-meta font-mono">// DIVINE_EMANATION_STATION</span>
            <h1 className="angel-title-main">{angel.name}</h1>
            <p className="angel-subtitle-sub">{angel.attribute}</p>
          </header>

          <div className="angel-separator-line"></div>

          {/* Seção 01: Descrição e Lore Operacional */}
          <section className="angel-section">
            <h3 className="angel-section-tag font-mono">[I. NATUREZA_E_FLUXO_OPERACIONAL]</h3>
            <p className="angel-office-text">{angel.description}</p>
          </section>

          {/* Seção 02: Especificações Técnicas de Invocação */}
          <section className="angel-section">
            <h3 className="angel-section-tag font-mono">[II. PROTOCOLOS_DE_SINTONIA]</h3>
            <ul className="a-requirements-list">
              <li className="a-requirement-item">
                <span className="a-req-bullet font-mono">▸</span>
                <p className="a-req-text">A conexão deve ser estabelecida durante a passagem do Sol pelos graus: {angel.degrees}.</p>
              </li>
              <li className="a-requirement-item">
                <span className="a-req-bullet font-mono">▸</span>
                <p className="a-req-text">Reverbere o nome sagrado em frequência harmônica {angel.number} Hz para ancoragem do vetor.</p>
              </li>
              <li className="a-requirement-item">
                <span className="a-req-bullet font-mono">▸</span>
                <p className="a-req-text">Sintonização obrigatória com a Sephirah {angel.sephirah} antes da chamada.</p>
              </li>
            </ul>
          </section>

          {/* Rodapé de Registro de Segurança */}
          <footer className="angel-system-footer font-mono">
            <div className="a-security-tag">ESTAÇÃO // TRANSMISSÃO_PURIFICADA_ESTÁVEL</div>
          </footer>

        </div>

      </div>

      {/* Navegação Base */}
      <DetailNavigation
        items={angelsCatalog}
        currentId={number}
        basePath="/anjos"
        paramName="number"
      />
    </div>
  );
};

export default AnjoDetail;