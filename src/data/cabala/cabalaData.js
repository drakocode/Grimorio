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

export const cabalaSubSectors = [
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

export const activeEmanations = [
  { sephirah: "KETHER", translation: "COROA", pillar: "CENTRAL", state: "EMANADO" },
  { sephirah: "CHOKMAH", translation: "SABEDORIA", pillar: "MISERICÓRDIA", state: "ATIVO" },
  { sephirah: "BINAH", translation: "ENTENDIMENTO", pillar: "SEVERIDADE", state: "RETIDO" },
  { sephirah: "TIPHERETH", translation: "BELEZA", pillar: "CENTRAL", state: "HARMONIZADO" },
  { sephirah: "YESOD", translation: "FUNDAMENTO", pillar: "CENTRAL", state: "REFLETIDO" }
];