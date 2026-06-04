// ==========================================
// IMPORTAÇÃO DOS ATIVOS (Vite Asset Pipeline)
// ==========================================
import imgAries from '../../../assets/astrology/aries.jpeg';
import imgTouro from '../../../assets/astrology/taurus.jpeg';
import imgGemeos from '../../../assets/astrology/gemini.jpeg';
import imgCancer from '../../../assets/astrology/cancer.jpeg';
import imgLeao from '../../../assets/astrology/leo.jpeg';
import imgVirgem from '../../../assets/astrology/virgo.jpeg';
import imgLibra from '../../../assets/astrology/libra.jpeg';
import imgEscorpião from '../../../assets/astrology/scorpio.jpeg';
import imgSagitario from '../../../assets/astrology/sagittarius.jpeg';
import imgCapricornio from '../../../assets/astrology/capricorn.jpeg';
import imgAquario from '../../../assets/astrology/aquarius.jpeg';
import imgPeixes from '../../../assets/astrology/pisces.jpeg';
// ==========================================
// BANCO DE DADOS MATRIZ DO ZODÍACO
// ==========================================
export const zodiacData = [
  { 
    id: 1, 
    title: "Áries", 
    symbol: "♈", 
    element: "Fogo", 
    desc: "O impulso inicial, a coragem cega e a força primordial do guerreiro.", 
    img: imgAries, 
    path: "aries" 
  },
  { 
    id: 2, 
    title: "Touro", 
    symbol: "♉", 
    element: "Terra", 
    desc: "A estabilidade da matéria, a persistência e a conexão profunda com os sentidos.", 
    img: imgTouro, 
    path: "touro" 
  },
  { 
    id: 3, 
    title: "Gêmeos", 
    symbol: "♊", 
    element: "Ar", 
    desc: "A dualidade da mente, o fluxo constante de informação e a palavra alada.", 
    img: imgGemeos, 
    path: "gemeos" 
  },
  { 
    id: 4, 
    title: "Câncer", 
    symbol: "♋", 
    element: "Água", 
    desc: "As águas profundas da memória, a ancestralidade e a proteção do santuário interno.", 
    img: imgCancer, 
    path: "cancer" 
  },
  { 
    id: 5, 
    title: "Leão", 
    symbol: "♌", 
    element: "Fogo", 
    desc: "O fogo central do Self, a soberania, a expressão criativa e o brilho áureo.", 
    img: imgLeao, 
    path: "leao" 
  },
  { 
    id: 6, 
    title: "Virgem", 
    symbol: "♍", 
    element: "Terra", 
    desc: "A alquimia do detalhe, a purificação da matéria e o rito do serviço sagrado.", 
    img: imgVirgem, 
    path: "virgem" 
  },
  { 
    id: 7, 
    title: "Libra", 
    symbol: "♎", 
    element: "Ar", 
    desc: "A busca geométrica pelo equilíbrio, a justiça cósmica e o espelho do Outro.", 
    img: imgLibra, 
    path: "libra" 
  },
  { 
    id: 8, 
    title: "Escorpião", 
    symbol: "♏", 
    element: "Água", 
    desc: "A morte e o renascimento, os mistérios ocultos e a transmutação das sombras.", 
    img: imgEscorpião, 
    path: "escorpiao" 
  },
  { 
    id: 9, 
    title: "Sagitário", 
    symbol: "♐", 
    element: "Fogo", 
    desc: "A flecha lançada ao infinito, a busca pela verdade filosófica e a expansão da consciência.", 
    img: imgSagitario, 
    path: "sagitario" 
  },
  { 
    id: 10, 
    title: "Capricórnio", 
    symbol: "♑", 
    element: "Terra", 
    desc: "A escalada implacável da montanha do tempo, a estrutura e o dever arquetípico.", 
    img: imgCapricornio, 
    path: "capricornio" 
  },
  { 
    id: 11, 
    title: "Aquário", 
    symbol: "♒", 
    element: "Ar", 
    desc: "O visionário do coletivo, a ruptura das correntes e as correntes do futuro.", 
    img: imgAquario, 
    path: "aquario" 
  },
  { 
    id: 12, 
    title: "Peixes", 
    symbol: "♓", 
    element: "Água", 
    desc: "O oceano cósmico do inconsciente, a dissolução do ego e a mística universal.", 
    img: imgPeixes, 
    path: "peixes" 
  }
];







/* export const zodiacData = [
  { id: 1, title: "Áries", symbol: "♈", element: "Fogo", desc: "O impulso inicial, a coragem cega e a força primordial do guerreiro.", img: "src/assets/astrology/signs/aries.jpeg", path: "aries" },
  { id: 2, title: "Touro", symbol: "♉", element: "Terra", desc: "A estabilidade da matéria, a persistência e a conexão profunda com os sentidos.", img: "../../../assets/astrology/touro.jpeg", path: "touro" },
  { id: 3, title: "Gêmeos", symbol: "♊", element: "Ar", desc: "A dualidade da mente, o fluxo constante de informação e a palavra alada.", img: "../../../assets/astrology/gemeos.jpeg", path: "gemeos" },
  { id: 4, title: "Câncer", symbol: "♋", element: "Água", desc: "As águas profundas da memória, a ancestralidade e a proteção do santuário interno.", img: "../../../assets/astrology/cancer.jpeg", path: "cancer" },
  { id: 5, title: "Leão", symbol: "♌", element: "Fogo", desc: "O fogo central do Self, a soberania, a expressão criativa e o brilho áureo.", img: "../../../assets/astrology/leao.jpeg", path: "leao" },
  { id: 6, title: "Virgem", symbol: "♍", element: "Terra", desc: "A alquimia do detalhe, a purificação da matéria e o rito do serviço sagrado.", img: "../../../assets/astrology/virgem.jpeg", path: "virgem" },
  { id: 7, title: "Libra", symbol: "♎", element: "Ar", desc: "A busca geométrica pelo equilíbrio, a justiça cósmica e o espelho do Outro.", img: "../../../assets/astrology/libra.jpeg", path: "libra" },
  { id: 8, title: "Escorpião", symbol: "♏", element: "Água", desc: "A morte e o renascimento, os mistérios ocultos e a transmutação das sombras.", img: "../../../assets/astrology/escorpiao.jpeg", path: "escorpiao" },
  { id: 9, title: "Sagitário", symbol: "♐", element: "Fogo", desc: "A flecha lançada ao infinito, a busca pela verdade filosófica e a expansão da consciência.", img: "../../../assets/astrology/sagitario.jpeg", path: "sagitario" },
  { id: 10, title: "Capricórnio", symbol: "♑", element: "Terra", desc: "A escalada implacável da montanha do tempo, a estrutura e o dever arquetípico.", img: "../../../assets/astrology/capricornio.jpeg", path: "capricornio" },
  { id: 11, title: "Aquário", symbol: "♒", element: "Ar", desc: "O visionário do coletivo, a ruptura das correntes e as correntes do futuro.", img: "../../../assets/astrology/aquario.jpeg", path: "aquario" },
  { id: 12, title: "Peixes", symbol: "♓", element: "Água", desc: "O oceano cósmico do inconsciente, a dissolução do ego e a mística universal.", img: "../../../assets/astrology/peixes.jpeg", path: "peixes" }
]; */