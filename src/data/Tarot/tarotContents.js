import imgMajorArcana from '../../assets/tarot/majorArcana.jpeg';
import imgMinorArcana from '../../assets/tarot/minorArcana.jpeg';
import imgTiragens from '../../assets/tarot/tiragens.jpeg';

export const TarotCategoryData = {  
  tarot: {
    title: "Tarot",
    description: "O domínio das chaves salomônicas e o estudo das hierarquias espirituais.",
    items: [
      {
    id: 1, 
    title: "Arcanos Maiores",
    desc: "Os 22 grandes mistérios e arquétipos reguladores da jornada espiritual e evolução da alma.",
    img: imgMajorArcana,
    path: "arcanos-maiores"
  },
  {
    id: 2,
    title: "Arcanos Menores",
    desc: "As 56 lâminas cotidianas que regem os eventos práticos, dinâmicas mentais e o plano material.",
    img: imgMinorArcana,
    path: "arcanos-menores"
  },
  {
    id: 3,
    title: "Oráculo",
    desc: "As diferentes formas de tirar o tarot, cada uma com seu próprio significado e aplicação.",
    img: imgTiragens,
    path: "oraculo"
  }]
  }
};

