import tarotMajorImage from "../../assets/tarot/majorArcana/tarotMajorArcana.jpeg";
import tarotMinorImage from "../../assets/tarot/minorArcana/tarotMinorArcana.jpeg";







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
  }
];

export const matrixMetrics = {
  activeSpreads: "04_LAYOUTS_ATIVOS",
  crypticKeys: "78 / 78 OPERACIONAIS",
  systemStatus: "INTEGRIDADE_MÁXIMA"
};