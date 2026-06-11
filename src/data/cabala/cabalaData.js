// src/data/cabala/cabalaData.js

// Imagens genéricas reutilizadas ou prontas para os seus assets locais
import sephirotImage from "../../assets/astrology/astrologyZodiac.jpeg"; 
import pathsImage from "../../assets/astrology/astrologyAspects.jpeg";
import pillarsImage from "../../assets/astrology/astrologyHouses.jpeg";
import worldsImage from "../../assets/astrology/astrologyPlanets.jpeg";

export const cabalaManifesto = {
  sectionId: "ARC_QABALAH_02",
  title: "Qabalah Archive",
  description: "O mapeamento metafísico da emanação divina. Esta ala do arquivo decodifica a Árvore da Vida, as dez Sephirot primordiais, as correntes dos caminhos serpentinos e as frequências místicas que articulam o invisível à matéria manifesta."
};

export const treeOfLifeManifesto = {
  sectionId: "QAB_VITA_10",
  title: "Tree of Life",
  subTitle: "Matriz Sefirótica // Fluxo de Luz",
  description: "O circuito harmônico cósmico de emanação equilibrada. Dez esferas arquetípicas canalizando o Ain Soph Aur através dos três pilares da manifestação universal."
};

export const treeOfDeathManifesto = {
  sectionId: "QAB_MORS_10",
  title: "Tree of Death",
  subTitle: "Matriz Qliphotica // Abismo Adverso",
  description: "A anti-estrutura cósmica e o reflexo corrompido da emanação. Mapeamento das cascas vazias (Qliphoth) geradas pelo excesso de rigor e desequilíbrio estrutural."
};

export const cabalaSubSectors = [
  {
    id: "QAB-TREE_OF_LIFE",
    title: "Tree of Life",
    subTitle: "Árvore da Vida",
    description: "O circuito harmônico cósmico de emanação equilibrada. Dez esferas arquetípicas canalizando o Ain Soph Aur através dos três pilares da manifestação universal.",
    image: sephirotImage,
    metadata: "10_SEPHIROT // PILARES",
    path: "/cabala/tree-of-life"
  },
  {
    id: "QAB-TREE_OF_DEATH",
    title: "Tree of Death",
    subTitle: "Árvore da Morte",
    description: "A anti-estrutura cósmica e o reflexo corrompido da emanação. Mapeamento das cascas vazias (Qliphoth) geradas pelo excesso de rigor e desequilíbrio estrutural.",
    image: sephirotImage,
    metadata: "10_QLIPHOTh // ABISMOS",
    path: "/cabala/tree-of-death"
  },
  {
    id: "QAB-SEPHIROT",
    title: "Sephirotic Emanations",
    subTitle: "As Dez Sephirot",
    description: "Dez esferas de manifestação concêntrica. Cada emanação atua como um vaso arquetípico para a descida do Ain Soph Aur ao plano denso.",
    image: sephirotImage,
    metadata: "10_ESFERAS // CENTROS",
    path: "/cabala/sephirot"
  },
  {
    id: "QAB-PATHS",
    title: "Serpentine Paths",
    subTitle: "Os 22 Caminhos e Letras",
    description: "As autoestradas da consciência oculta. Canais matemáticos e linguísticos que conectam as esferas através do alfabeto sagrado.",
    image: pathsImage,
    metadata: "22_CAMINHOS // CANAIS",
    path: "/cabala/paths"
  },
  {
    id: "QAB-PILLARS",
    title: "Pillars of Equilibrium",
    subTitle: "Os Três Pilares",
    description: "As grandes colunas do templo invisível: Rigor, Misericórdia e o Pilar Central da Consciência Harmonizada.",
    image: pillarsImage,
    metadata: "03_PILARES // FORÇAS",
    path: "/cabala/pillars"
  },
  {
    id: "QAB-WORLDS",
    title: "Macrocosmic Worlds",
    subTitle: "Os Quatro Mundos",
    description: "Planos de densidade metafísica progressiva: Atziluth, Briah, Yetzirah e Assiah. Da pura emanação à cristalização física.",
    image: worldsImage,
    metadata: "04_MUNDOS // DENSIDADES",
    path: "/cabala/worlds"
  }
];


export const treeOfLifeSubSectors = [
    {
    id: "QAB-SEPHIROT",
    title: "Sephirotic Emanations",
    subTitle: "As Dez Sephirot",
    description: "Dez esferas de manifestação concêntrica. Cada emanação atua como um vaso arquetípico para a descida do Ain Soph Aur ao plano denso.",
    image: sephirotImage,
    metadata: "10_ESFERAS // CENTROS",
    path: "/cabala/sephirot"
  },
  {
    id: "QAB-PATHS",
    title: "Serpentine Paths",
    subTitle: "Os 22 Caminhos e Letras",
    description: "As autoestradas da consciência oculta. Canais matemáticos e linguísticos que conectam as esferas através do alfabeto sagrado.",
    image: pathsImage,
    metadata: "22_CAMINHOS // CANAIS",
    path: "/cabala/paths"
  },
  {
    id: "QAB-PILLARS",
    title: "Pillars of Equilibrium",
    subTitle: "Os Três Pilares",
    description: "As grandes colunas do templo invisível: Rigor, Misericórdia e o Pilar Central da Consciência Harmonizada.",
    image: pillarsImage,
    metadata: "03_PILARES // FORÇAS",
    path: "/cabala/pillars"
  },
  {
    id: "QAB-WORLDS",
    title: "Macrocosmic Worlds",
    subTitle: "Os Quatro Mundos",
    description: "Planos de densidade metafísica progressiva: Atziluth, Briah, Yetzirah e Assiah. Da pura emanação à cristalização física.",
    image: worldsImage,
    metadata: "04_MUNDOS // DENSIDADES",
    path: "/cabala/worlds"
  }
];

export const treeOfDeathSubSectors = [
  {
    id: "QAB-QLIPHOTh",
    title: "Qliphotic Emanations",
    subTitle: "As Dez Qliphoth",
    description: "As cascas vazias e distorcidas que refletem as Sephirot. Manifestação do desequilíbrio e excesso de rigor na estrutura cósmica.",
    image: sephirotImage,
    metadata: "10_QLIPHOTh // ABISMOS",
    path: "/cabala/qliphoth"
  }
];

export const activeEmanations = [
  { sephirah: "KETHER", translation: "COROA", pillar: "CENTRAL", state: "ATIVO // FLUXO" },
  { sephirah: "CHOKMAH", translation: "SABEDORIA", pillar: "MISERICÓRDIA", state: "ATIVO // FLUXO" },
  { sephirah: "BINAH", translation: "ENTENDIMENTO", pillar: "RIGOR", state: "ATIVO // FLUXO" },
  { sephirah: "CHESED", translation: "MISERICÓRDIA", pillar: "MISERICÓRDIA", state: "ATIVO // FLUXO" },
  { sephirah: "GEBURAH", translation: "FORÇA", pillar: "RIGOR", state: "RETIDO" },
  { sephirah: "TIPHERETH", translation: "BELEZA", pillar: "CENTRAL", state: "ATIVO // FLUXO" },
  { sephirah: "NETZACH", translation: "VITÓRIA", pillar: "MISERICÓRDIA", state: "ATIVO // FLUXO" },
  { sephirah: "HOD", translation: "ESPLENDOR", pillar: "RIGOR", state: "ATIVO // FLUXO" },
  { sephirah: "YESOD", translation: "FUNDAÇÃO", pillar: "CENTRAL", state: "ATIVO // FLUXO" },
  { sephirah: "MALKUTH", translation: "REINO", pillar: "CENTRAL", state: "CRISTALIZADO" }
];

export const qliphoticEmanations = [
  { qliphah: "THAUMIEL", translation: "GÊMEOS DE DEUS", ruler: "SATAN / MOLOCH", state: "RESONÂNCIA_TOTAL" },
  { qliphah: "GHAGIEL", translation: "ESTORVADORES", ruler: "BEELZEBUB", state: "INSTÁVEL" },
  { qliphah: "SATARIEL", translation: "OCULTADORES", ruler: "LUCIFUGE ROFOCALE", state: "BLOQUEADO" },
  { qliphah: "GAMCHICOTH", translation: "DEVORADORES", ruler: "ASTAROTH", state: "RESONÂNCIA_ALTA" },
  { qliphah: "GOLACHAB", translation: "INCENDIÁRIOS", ruler: "ASMODEUS", state: "CRÍTICO" },
  { qliphah: "THAGIRION", translation: "DISPUTADORES", ruler: "BELPHEGOR", state: "ESTÁVEL" },
  { qliphah: "HARAB SERAPEL", translation: "REVOADA DE CORVOS", ruler: "BAAL", state: "RESONÂNCIA_ALTA" },
  { qliphah: "SAMAEL", translation: "VENENO DE DEUS", ruler: "ADRAMELECH", state: "FILTRADO" },
  { qliphah: "GAMALIEL", translation: "OBSCENOS", ruler: "LILITH", state: "RESONÂNCIA_TOTAL" },
  { qliphah: "NEHEMOTH", translation: "SUSSURRADORES", ruler: "NAAMAH", state: "INVERTIDO" }
];