// src/data/vedas/jyotishData.js

export const jyotishManifesto = {
  sectionId: "SYS_JYOTISH_01",
  title: "Jyotish Archive",
  description: "O mapeamento dos olhos dos Vedas. A ciência cósmica da luz (Jyoti) que decodifica o Karma de encarnação através dos alinhamentos siderais. Ao contrário do sistema tropical, a matriz de Jyotish ancora-se no zodíaco sideral, processando os ciclos evolutivos da alma através de vetores lunares e cronogramas de Dasha."
};

export const grahaAlignments = [
  { graha: "SURYA (Sol)", rashi: "Simha", bhava: "I", state: "Uchcha [Exaltado]" },
  { graha: "CHANDRA (Lua)", rashi: "Vrishabha", bhava: "X", state: "Swa [Próprio]" },
  { graha: "MANGALA (Marte)", rashi: "Makara", bhava: "VI", state: "Uchcha [Exaltado]" },
  { graha: "BUDHA (Mercúrio)", rashi: "Kanya", bhava: "II", state: "Moolatrikona" },
  { graha: "GURU (Júpiter)", rashi: "Mina", bhava: "V", state: "Vakri [Retrógrado]" },
  { graha: "SHUKRA (Vénus)", rashi: "Kanya", bhava: "II", state: "Neecha [Debilitado]" },
  { graha: "SHANI (Saturno)", rashi: "Kumbha", bhava: "VII", state: "Swa // Estacionário" },
  { graha: "RAHU (Nó Norte)", rashi: "Vrishabha", bhava: "X", state: "Emanação Ativa" },
  { graha: "KETU (Nó Sul)", rashi: "Vrischika", bhava: "IV", state: "Cristalizado" }
];

export const jyotishSubSectors = [
  {
    id: "VED-GRAHAS",
    title: "Navagrahas Vector",
    subTitle: "As Nove Forças Planetárias",
    description: "Os agentes cósmicos de distribuição kármica. Capturam e emitem frequências vibracionais que moldam a infraestrutura mental e física do operador.",
    image: "/assets/vedas/grahas.jpeg",
    metadata: "09_GRAHAS // PLANETAS",
    path: "/vedas/jyotish/grahas"
  },
  {
    id: "VED-RASHIS",
    title: "Sideral Rashis",
    subTitle: "Os Doze Signos Siderais",
    description: "Os campos constelares reais ajustados pela precessão dos equinócios. Zonas de densidade elemental onde os Grahas manifestam o seu potencial.",
    image: "/assets/vedas/rashis.jpeg",
    metadata: "12_RASHIS // ZODÍACO",
    path: "/vedas/jyotish/rashis"
  },
  {
    id: "VED-BHAVAS",
    title: "Karmic Bhavas",
    subTitle: "As Doze Casas do Destino",
    description: "A divisão geométrica do espaço local. Cada quadrante atua como um repositório específico de experiências existenciais e tangibilidade material.",
    image: "/assets/vedas/bhavas.jpeg",
    metadata: "12_BHAVAS // CASAS",
    path: "/vedas/jyotish/bhavas"
  },
  {
    id: "VED-NAKSHATRAS",
    title: "Lunar Mansions",
    subTitle: "As 27 Mansões Lunares",
    description: "A rede fina da astrologia védica. Segmentações estelares governadas pela Lua que revelam as correntes profundas do inconsciente e impulsos da alma.",
    image: "/assets/vedas/nakshatras.jpeg",
    metadata: "27_NAKSHATRAS // ESTRELAS",
    path: "/vedas/jyotish/nakshatras"
  }
];