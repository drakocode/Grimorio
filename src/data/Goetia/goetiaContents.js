import imgDaemons from '../../assets/goetia/daemons.jpeg';
import imgReis from '../../assets/goetia/daemons.jpeg';
import imgDuques from '../../assets/goetia/daemons.jpeg';
import imgPresidentes from '../../assets/goetia/daemons.jpeg';
import imgSelos from '../../assets/goetia/daemons.jpeg';

export const GoetiaCategoryData = {  
  goetia: {
    title: "Goetia",
    description: "O domínio das chaves salomônicas e o estudo das hierarquias espirituais.",
    items: [
      { id: 1, title: "Daemons", desc: "As entidades.", img: imgDaemons, path: "daemons" },
      { id: 2, title: "Reis", desc: "As entidades de maior autoridade e sol solar.", img: imgReis, path: "reis" },
      { id: 3, title: "Duques", desc: "Comandantes de legiões sob a influência venusiana.", img: imgDuques, path: "duques" },
      { id: 4, title: "Presidentes", desc: "Detentores de conhecimentos sobre ervas e pedras.", img: imgPresidentes, path: "presidentes" },
      { id: 5, title: "Selos", desc: "As assinaturas geométricas de cada espírito.", img: imgSelos, path: "selos" },
    ]
  }
};