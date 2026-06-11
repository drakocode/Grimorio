import astrologyHomeImage from "../../assets/astrology/astrologyHome.jpeg";
import tarotHomeImage from "../../assets/tarot/tarotHome.jpeg";
import goetiaHomeImage from "../../assets/goetia/goetiaHome.jpeg";
import cabalaHomeImage from "../../assets/goetia/goetiaHome.jpeg";
import anjosHomeImage from "../../assets/goetia/goetiaHome.jpeg";
import vedasHomeImage from "../../assets/goetia/goetiaHome.jpeg";

export const homeManifesto = {
  sigil: "M_01",
  title: "The Living Ritual Archive",
  declaration: "Grimório bridges ancient ritual mechanics and contemporary digital execution frameworks. Access the structured paths below to reveal architectural arrays of cosmic and infernal domains."
};

// Não se esqueça de importar a imagem correspondente no topo do arquivo:
// import cabalaHomeImage from "../../assets/cabala/cabalaHome.jpeg";
export const grimoireSectors = [
  {
    id: "SEC-001",
    title: "Celestial Archive",
    subTitle: "Astrology Engine",
    description: "Architectural alignment matrices tracking planar transits, planetary positions, houses, and geometric aspects.",
    image: astrologyHomeImage,
    metadata: "ORBITS // NODES",
    path: "/astrology"
  },
  {
    id: "SEC-002",
    title: "Symbolic Manuscript",
    subTitle: "Tarot Matrix",
    description: "Decoupled array mapping the Major and Minor Arcana pipelines. Cryptographic archetypes optimized for spatial reading.",
    image: tarotHomeImage,
    metadata: "78_KEYS // PROTOCOLS",
    path: "/tarot"
  },
  {
    id: "SEC-003",
    title: "Qabalah Archive",
    subTitle: "Emanation Tree Matrix",
    description: "Mathematical mapping of the ten primordial Sephirot and serpentine channels. Synthesized data structures routing the four macrocosmic worlds from pure light to material crystallization.",
    image: cabalaHomeImage,
    metadata: "10_SPHERES // 22_PATHS",
    path: "/cabala"
  },
  {
    id: "SEC-004",
    title: "Angelic Vector Registry",
    subTitle: "Shem HaMephorash Engine",
    description: "Cryptographic division of the divine name into 72 high-frequency operational nodes. Allocates harmonic streams across specialized angelic choirs and zodiacal degrees.",
    image: anjosHomeImage,
    metadata: "72_VECTORS // CHOIRS",
    path: "/anjos"
  },
  {
    id: "SEC-005",
    title: "Infernal Ritual Index",
    subTitle: "Goetia Engine",
    description: "The complete directory tracking the 72 dynamic spirits. Complete categorical parsing of offices, seals, and requirements.",
    image: goetiaHomeImage,
    metadata: "CHTHONIC // DEV_ENV",
    path: "/goetia"
  },
  {
    id: "SEC-006",
    title: "Ritual Synthesis Lab",
    subTitle: "Oracular Protocols",
    description: "A sandbox for combinatorial experimentation across all Grimório sectors. Synthesize custom rituals by selecting and merging data points from the other five domains.",
    image: tarotHomeImage,
    metadata: "SYNTHESIS // PROTOCOLS",
    path: "/readings"
  },
  {
    id: "SEC-007",
    title: "Sacred Texts Repository",
    subTitle: "Vedic Corpus",
    description: "A comprehensive collection of ancient Vedic texts and their interpretations. Explore the foundational scriptures of Hindu philosophy and spirituality.",
    image: vedasHomeImage,
    metadata: "108_VEDAS // INTERPRETATIONS",
    path: "/vedas"
  }
   
];