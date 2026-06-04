import CategoryLayout from '../components/CategoryLayout';
import { TarotCategoryData } from '../data/tarot/tarotContents';

export default function Tarot() {
  return <CategoryLayout data={TarotCategoryData.tarot} categorySlug="tarot" />;
}