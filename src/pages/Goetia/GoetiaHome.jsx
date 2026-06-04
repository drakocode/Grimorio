import CategoryLayout from '../../components/layout/CategoryLayout';
import { GoetiaCategoryData } from '../../data/Goetia/goetiaContents';

export default function Goetia() {
  return <CategoryLayout data={GoetiaCategoryData.goetia} categorySlug="goetia" />;
}
 
/* export default function Goetia() {
  return <div className="page-content"><h2>Estudos de Goetia</h2><p>Conteúdo sobre os 72 espíritos e rituais em breve...</p></div>;
} */