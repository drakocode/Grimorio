// src/pages/archive/LibraryArchive.jsx
import { motion } from "framer-motion";
import "../../styles/SephirotHome.styles.css"; // Reutiliza o layout estrutural padrão

// Mock de dados para simular o banco de dados do seu repositório
const archiveManifesto = {
  sectionId: "ARC_REPOSITORY_04",
  title: "External Nexus",
  description: "Repositório centralizado de grimórios codificados, ferramentas de criptografia, manuscritos em formato digital e bibliotecas de telemetria externa homologadas para o sistema."
};

const repositoryMetrics = {
  totalFiles: "42 Arquivos Indexados",
  serverStatus: "AERÓPAGO // ONLINE",
  bandwidth: "AQUEODUTO_DIGITAL // ESTÁVEL",
  integrityCheck: "SHA_256 // VERIFICADO"
};
const externalLibraries = [
  {
    id: "LIB-TAR-01",
    category: "Grimórios & Manuscritos",
    title: "Tratados e Matrizes de Tarot",
    format: "DRIVE // DIRETÓRIO DIGITAL",
    size: "NEXUS_DATA",
    description: "Banco de dados contendo manuais de decodificação de Arcanos, estudos iconográficos e metodologias de leitura tarótica.",
    checksum: "sha256-19Y0TTNJ...3Fc",
    downloadUrl: "https://drive.google.com/drive/folders/19Y0TTNJ7AVbZfKog620I3LifJuGsE3Fc",
    isExternal: true
  },
  {
    id: "LIB-AST-02",
    category: "Grimórios & Manuscritos",
    title: "Matrizes de Astrologia & Trânsitos",
    format: "DRIVE // DIRETÓRIO DIGITAL",
    size: "NEXUS_DATA",
    description: "Acervo digitalizado com tabelas de efemérides planetárias, astrologia caldeia, mapas natais arquetípicos e mecânica celeste.",
    checksum: "sha256-UQe7rZWH...Yf0",
    downloadUrl: "https://drive.google.com/drive/folders/1UQe7rZWHY7gLO_-kW6SBPCRtyIEGUYf0",
    isExternal: true
  },
  {
    id: "LIB-BRU-03",
    category: "Grimórios & Manuscritos",
    title: "Bruxaria, Feitiçaria & Religião Comparada",
    format: "DRIVE // DIRETÓRIO DIGITAL",
    size: "NEXUS_DATA",
    description: "Compilações históricas sobre cultos antigos, grimórios de feitiçaria tradicional e registros antropológicos de manifestações religiosas.",
    checksum: "sha256-Sgl7ZowS...SZ6",
    downloadUrl: "https://drive.google.com/drive/folders/1Sgl7ZowSXUhuZO3kNc3ZwNCkgCR8SZ_6",
    isExternal: true
  },
  {
    id: "LIB-OC-EN",
    category: "Grimórios & Manuscritos",
    title: "General Occultism Archive (English)",
    format: "DRIVE // INT_REPOSITORY",
    size: "NEXUS_DATA",
    description: "Comprehensive international collection of esoteric philosophy, hermeticism, alchemy, and left-hand path raw manuscripts.",
    checksum: "sha256-TPFgWXNA...ffQ",
    downloadUrl: "https://drive.google.com/drive/folders/1TPFgWXNA1FfL0SzJh9Y0bBoLd0eb1ffQ",
    isExternal: true
  },
  {
    id: "LIB-OC-PT",
    category: "Grimórios & Manuscritos",
    title: "Arquivo Geral de Ocultismo (Português)",
    format: "DRIVE // REPOSITÓRIO_NAC",
    size: "NEXUS_DATA",
    description: "Amplo acervo em língua portuguesa englobando ciências ocultas, traduções raras de ordens iniciáticas e filosofia esotérica elemental.",
    checksum: "sha256-u1clXGSE...p_g2",
    downloadUrl: "https://drive.google.com/drive/folders/1u1clXGSEoDC1bTPybfdMpQmyVjF9p_g2",
    isExternal: true
  }
];

const LibraryArchive = () => {
  return (
    <div className="sephirot-page-container" style={{ "--color-gold": "var(--color-gold)" }}>
      
      {/* SIDEBAR ESQUERDA: Telemetria de Downloads */}
      <aside className="sephirot-telemetry-panel">
        <div className="sticky-sephirot-content">
          <div className="sephirot-archive-tag font-mono">
            {archiveManifesto.sectionId}
          </div>
          <h1 className="sephirot-main-title">{archiveManifesto.title}</h1>
          <div className="sephirot-divider"></div>
          <p className="sephirot-manifesto-text">
            {archiveManifesto.description}
          </p>

          {/* Caixa de Telemetria de Dados */}
          <div className="tree-metrics-box font-mono" style={{ marginTop: "40px" }}>
            <div className="metrics-header">// ARCHIVE_SYSTEM_METRICS</div>
            <div className="metric-row">
              <span>REPOSITÓRIO:</span>
              <span className="text-gold">{repositoryMetrics.totalFiles}</span>
            </div>
            <div className="metric-row">
              <span>STATUS_LINK:</span>
              <span className="text-muted">{repositoryMetrics.serverStatus}</span>
            </div>
            <div className="metric-row">
              <span>INTEGRIDADE:</span>
              <span className="text-muted" style={{ color: "#4caf50" }}>{repositoryMetrics.integrityCheck}</span>
            </div>
            <div className="metric-row">
              <span>VETOR_REDE:</span>
              <span className="text-muted">{repositoryMetrics.bandwidth}</span>
            </div>
          </div>
        </div>
      </aside>

      {/* PAINEL DIREITO: Listagem de Links e Bibliotecas */}
      <section className="sephirot-cards-stream">
        <div className="stream-header-tag font-mono">// DISPONÍVEIS_PARA_EXTRAÇÃO_DE_DADOS</div>
        
        <div className="sephirot-cards-grid" style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px" }}>
          {externalLibraries.map((item, index) => (
            <motion.div
              key={item.id}
              className="sephirah-node-card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              style={{
                border: "1px solid rgba(176, 141, 87, 0.15)",
                padding: "24px",
                background: "rgba(9, 9, 13, 0.6)",
                backdropFilter: "blur(10px)"
              }}
            >
              {/* Cabeçalho do Card */}
              <div className="sephirah-card-header font-mono">
                <span className="sephirah-class" style={{ color: "var(--color-gold)", letterSpacing: "0.1em" }}>
                  {item.category.toUpperCase()}
                </span>
                <span className="node-number-tag">{item.id}</span>
              </div>

              {/* Título do Recurso */}
              <div className="sephirah-card-title-block" style={{ margin: "12px 0" }}>
                <h2 className="sephirah-name" style={{ fontSize: "1.4rem", fontWeight: "600" }}>{item.title}</h2>
                <span className="sephirah-translation font-mono" style={{ fontSize: "0.8rem", opacity: 0.7 }}>
                  {item.format} • {item.size}
                </span>
              </div>

              {/* Descrição do Arquivo */}
              <p className="sephirah-description" style={{ fontSize: "0.9rem", color: "rgba(230, 230, 235, 0.8)", marginBottom: "20px" }}>
                {item.description}
              </p>

              {/* Assinatura / Comando de Instalação */}
              <div 
                className="font-mono" 
                style={{ 
                  background: "rgba(0,0,0,0.4)", 
                  padding: "10px 14px", 
                  fontSize: "0.75rem", 
                  color: "var(--color-muted)",
                  borderLeft: "2px solid var(--color-gold)",
                  marginBottom: "20px"
                }}
              >
                <span style={{ display: "block", fontSize: "0.65rem", color: "rgba(255,255,255,0.3)" }}>SIG_VERIFY //</span>
                {item.checksum}
              </div>

              {/* Ação de Download/Redirecionamento */}
              <a
                href={item.downloadUrl}
                target={item.isExternal ? "_blank" : "_self"}
                rel="noreferrer"
                className="font-mono"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "10px",
                  color: "var(--color-gold)",
                  textDecoration: "none",
                  fontSize: "0.8rem",
                  letterSpacing: "0.05em",
                  border: "1px solid rgba(176, 141, 87, 0.3)",
                  padding: "10px 20px",
                  background: "rgba(176, 141, 87, 0.02)",
                  transition: "all 0.3s ease"
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(176, 141, 87, 0.1)";
                  e.currentTarget.style.borderColor = "var(--color-gold)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(176, 141, 87, 0.02)";
                  e.currentTarget.style.borderColor = "rgba(176, 141, 87, 0.3)";
                }}
              >
                {item.isExternal ? (
                  <>
                    {/* SVG Ícone Conexão Externa */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                    <span>REQUISITAR_CONEXÃO_EXTERNA →</span>
                  </>
                ) : (
                  <>
                    {/* SVG Ícone Download Local */}
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                      <polyline points="7 10 12 15 17 10"></polyline>
                      <line x1="12" y1="15" x2="12" y2="3"></line>
                    </svg>
                    <span>INICIAR_EXTRAÇÃO_DE_BITS ↓</span>
                  </>
                )}
              </a>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LibraryArchive;