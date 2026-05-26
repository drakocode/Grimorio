import CategoryLayout from '../components/CategoryLayout';
import { categoryData } from '../data/contents';

export default function Tarot() {
  return <CategoryLayout data={categoryData.tarot} categorySlug="tarot" />;
}