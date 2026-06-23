/* import astrologyHomeImage from "../../public/images/astrology/astrologyHome.jpeg";
import tarotHomeImage from "../../public/images/tarot/tarotHome.jpeg";
import goetiaHomeImage from "../../public/images/goetia/goetiaHome.jpeg";
import cabalaHomeImage from "../../public/images/goetia/goetiaHome.jpeg";
import anjosHomeImage from "../../public/images/goetia/goetiaHome.jpeg";
import vedasHomeImage from "../../public/images/goetia/goetiaHome.jpeg";
 */
export const homeManifesto = {
  sigil: "M_01",
  title: "The Living Ritual Archive",
  declaration: "Grimório bridges ancient ritual mechanics and contemporary digital execution frameworks. Access the structured paths below to reveal architectural arrays of cosmic and infernal domains."
};

export interface HomeItem {
  id: string;
  title: string;
  subTitle: string;
  description: string;
  image?: string;
  metadata: string;
  path: string;
}

export const homeData: HomeItem[] = [
  {
    id: 'cabala',
    title: "Celestial Archive",
    subTitle: "Astrology Engine",
    description: "Architectural alignment matrices tracking planar transits, planetary positions, houses, and geometric aspects.",
    image: "images/astrology/astrologyHome.jpeg",
    metadata: "ORBITS // NODES",
    path: "/astrology"
  },
  {
    id: 'tarot',
    title: "Symbolic Manuscript",
    subTitle: "Tarot Matrix",
    description: "Decoupled array mapping the Major and Minor Arcana pipelines. Cryptographic archetypes optimized for spatial reading.",
    image: "images/tarot/tarotHome.jpeg",
    metadata: "78_KEYS // PROTOCOLS",
    path: "/tarot"
  },
  {
    id: "SEC-003",
    title: "Qabalah Archive",
    subTitle: "Emanation Tree Matrix",
    description: "Mathematical mapping of the ten primordial Sephirot and serpentine channels. Synthesized data structures routing the four macrocosmic worlds from pure light to material crystallization.",
    image: "images/goetia/goetiaHome.jpeg",
    metadata: "10_SPHERES // 22_PATHS",
    path: "/cabala"
  },
  {
    id: 'astrologia',
    title: "Angelic Vector Registry",
    subTitle: "Shem HaMephorash Engine",
    description: "Cryptographic division of the divine name into 72 high-frequency operational nodes. Allocates harmonic streams across specialized angelic choirs and zodiacal degrees.",
    image: "images/goetia/goetiaHome.jpeg",
    metadata: "72_VECTORS // CHOIRS",
    path: "/anjos"
  },
  {
    id: 'goetia',
    title: "Infernal Ritual Index",
    subTitle: "Goetia Engine",
    description: "The complete directory tracking the 72 dynamic spirits. Complete categorical parsing of offices, seals, and requirements.",
    image: "images/goetia/goetiaHome.jpeg",
    metadata: "CHTHONIC // DEV_ENV",
    path: "/goetia"
  },
  {
    id: "SEC-007",
    title: "Sacred Texts Repository",
    subTitle: "Vedic Corpus",
    description: "A comprehensive collection of ancient Vedic texts and their interpretations. Explore the foundational scriptures of Hindu philosophy and spirituality.",
    image: "images/goetia/goetiaHome.jpeg",
    metadata: "108_VEDAS // INTERPRETATIONS",
    path: "/vedas"
  }
];