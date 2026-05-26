import CategoryLayout from '../components/CategoryLayout';
import { categoryData } from '../data/contents';

export default function Astrologia() {
  return <CategoryLayout data={categoryData.astrologia} categorySlug="astrologia" />;
}