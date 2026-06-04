import CategoryLayout from '../components/layout/CategoryLayout';
import { astrologyCategoryData } from '../data/contents';

export default function Astrologia() {
  return <CategoryLayout data={astrologyCategoryData} categorySlug="astrologia" />;
}