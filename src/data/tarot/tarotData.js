import tarotMajorImage from "../../assets/tarot/majorArcana/tarotMajorArcana.jpeg";
import tarotMinorImage from "../../assets/tarot/minorArcana/tarotMinorArcana.jpeg";
import tarotHomeImage from "../../assets/tarot/tarotHome.jpeg";






export const tarotManifesto = {
  sectionId: "MS_TAROT_78",
  title: "Tarot Matrix",
  description: "O sistema de espelhos simbólicos do Grimório. Uma infraestrutura arquetípica composta por 78 chaves criptográficas que traduzem fluxos de força, ciclos evolutivos e vetores probabilísticos através de geometria planar e relações analógicas."
};

export const tarotSubSectors = [
  {
    id: "TAR-MAJOR",
    title: "Major Arcana",
    subTitle: "Os Arcanos Maiores",
    description: "As 22 chaves macrocósmicas. Vetores fundamentais do desenvolvimento da consciência, mapeando a jornada arquetípica do Louco ao Universo.",
    image: tarotMajorImage,
    metadata: "22_CHAVES // MACROCOSMO",
    path: "/tarot/major-arcana"
  },
  {
    id: "TAR-MINOR",
    title: "Minor Arcana",
    subTitle: "Os Arcanos Menores",
    description: "As 56 chaves microcósmicas. A ramificação dos quatro elementos (Bastões, Taças, Espadas e Pentáculos) operando nos campos densos da manifestação.",
    image: tarotMinorImage,
    metadata: "56_CHAVES // MICROCOSMO",
    path: "/tarot/minor-arcana"
  },
  {
    id: "TAR-SPREADS",
    title: "Ritual Synthesis Lab",
    subTitle: "Oracular Protocols",
    description: "A sandbox for combinatorial experimentation across all Grimório sectors. Synthesize custom rituals by selecting and merging data points from the other five domains.",
    image: tarotHomeImage,
    metadata: "SYNTHESIS // PROTOCOLS",
    path: "/readings"
  }
];

export const matrixMetrics = {
  activeSpreads: "04_LAYOUTS_ATIVOS",
  crypticKeys: "78 / 78 OPERACIONAIS",
  systemStatus: "INTEGRIDADE_MÁXIMA"
};