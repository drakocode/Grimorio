import CategoryLayout from '../components/CategoryLayout';
import { categoryData } from '../data/contents';

export default function Goetia() {
  return <CategoryLayout data={categoryData.goetia} categorySlug="goetia" />;
}