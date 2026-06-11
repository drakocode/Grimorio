// src/data/vedas/ayurvedaData.js

export const ayurvedaManifesto = {
  sectionId: "SYS_AYUR_01",
  title: "Āyurveda Bio-Sustenance",
  description: "Os protocolos avançados de manutenção de hardware biológico. Esta ala gerencia a calibração dinâmica dos três bio-circuitos primordiais (Doshas) para maximizar o runtime celular, otimizar o pipeline de Prāṇa (energia vital) e mitigar a entropia física do avatar tridimensional."
};

export const bioCircuitTelemetry = [
  { circuit: "VĀTA (Ar // Éter)", components: "Redes & Input Neuronal", allocation: "35%", status: "FLUXO_DINÂMICO" },
  { circuit: "PITTA (Fogo // Água)", components: "Combustão & Enzimas", allocation: "45%", status: "PICO_OPERACIONAL" },
  { circuit: "KAPHA (Água // Terra)", components: "Estrutura & Lubrificação", allocation: "20%", status: "ESTABILIZADO" },
  { circuit: "PRĀṆA_GRID", components: "Canais de Voltagem Sutil", allocation: "100%", status: "ONLINE" },
  { circuit: "OJAS_RESERVE", components: "Imunidade // Cache de Escudo", allocation: "88%", status: "REMANENTE_ALTO" },
  { circuit: "AMA_TOXINS", components: "Ficheiros Corrompidos // Resíduos", allocation: "04%", status: "PURGA_REQUERIDA" }
];

export const ayurvedaSubSectors = [
  {
    id: "AYUR-DOSHAS",
    title: "Tridoṣa Core",
    subTitle: "Os Três Bio-Circuitos Primordiais",
    description: "Análise aprofundada de Vāta, Pitta e Kapha. Mapeamento das flutuações elementais que determinam a constituição psicofísica (Prakṛti) e os desvios de calibração (Vikṛti).",
    image: "/assets/vedas/doshas.jpeg",
    metadata: "03_DOSHAS // BIO-DRIVERS",
    path: "/vedas/ayurveda/doshas"
  },
  {
    id: "AYUR-DHATUS",
    title: "Saptadhātu Layers",
    subTitle: "As Sete Camadas de Tecido",
    description: "A arquitetura de densidade progressiva do hardware humano. Dos fluidos plasmáticos (Rasa) às células reprodutivas (Śukra), monitorizando a síntese e regeneração celular.",
    image: "/assets/vedas/dhatus.jpeg",
    metadata: "07_DHATUS // HARDWARE_LAYERS",
    path: "/vedas/ayurveda/dhatus"
  },
  {
    id: "AYUR-DINACHARYA",
    title: "Dinacaryā Protocols",
    subTitle: "Rotinas de Manutenção do Sistema",
    description: "Algoritmos diários de purga e calibração sintonizados com os ciclos circadianos macrocósmicos. Otimização de janelas de digestão (Agni) e ciclos de repouso.",
    image: "/assets/vedas/dinacharya.jpeg",
    metadata: "CIRCADIAN_LOOP // MANUTENÇÃO",
    path: "/vedas/ayurveda/dinacharya"
  },
  {
    id: "AYUR-DRAVYAGUNA",
    title: "Dravyaguṇa Matrix",
    subTitle: "Farmacologia Alquímica Védica",
    description: "A biblioteca de agentes herbais, minerais e fito-comandos bioativos utilizados para reescrever códigos biológicos corrompidos e restaurar a homeostase ideal.",
    image: "/assets/vedas/dravyaguna.jpeg",
    metadata: "HERBAL_CODE // CORREÇÃO",
    path: "/vedas/ayurveda/dravyaguna"
  }
];