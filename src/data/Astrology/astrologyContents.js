import imgSignos from '../../assets/astrology/signs.jpeg';
import imgCasas from '../../assets/astrology/houses.jpeg';
import imgPlanetas from '../../assets/astrology/planets.jpeg';
import imgAspectos from '../../assets/astrology/aspects.jpeg';


export const AstrologyCategoryData = {
  astrologia: {
    title: "Astrologia",
    description: "O mapa do céu e a linguagem dos astros guiando sua jornada terrena.",
    items: [
      { id: 1, title: "Signos", desc: "Os 12 arquétipos do zodíaco e suas energias.", img: imgSignos, path: "signos" },
      { id: 2, title: "Casas Astrológicas", desc: "Os palcos da vida onde os planetas atuam.", img: imgCasas, path: "casas" },
      { id: 3, title: "Planetas", desc: "As funções psíquicas e forças motrizes do ser.", img: imgPlanetas, path: "planetas" },
      { id: 4, title: "Aspectos", desc: "O diálogo geométrico entre os corpos celestes.", img: imgAspectos, path: "aspectos" },
    ]
  }
};