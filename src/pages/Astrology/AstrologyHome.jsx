import CategoryLayout from '../../components/CategoryLayout';
import { AstrologyCategoryData } from '../../data/Astrology/astrologyContents';

export default function Astrologia() {
  return <CategoryLayout data={AstrologyCategoryData.astrologia} categorySlug="astrologia" />;
}

/* export default function Astrologia() {
  return <div className="page-content"><h2>Portal de Astrologia</h2><p>Conteúdo sobre Signos, Casas e Planetas em breve...</p></div>;
} 
 */ 
